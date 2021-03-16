<template>
  <div class="shortVideo">
    <div class="table_bottom">
      <div class="flex">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane label="未审核"
                       name="100"></el-tab-pane>
          <el-tab-pane label="已审核"
                       name="1"></el-tab-pane>
          <el-tab-pane label="已删除"
                       name="2"></el-tab-pane>
        </el-tabs>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="封面图">
            <!-- <video :src="cover"></video> -->
            <template slot-scope="scope">
              <img :src="scope.row.cover" alt="" style="width: 100px; height: 100px;">
            </template>
             <!-- ../../../../assets/cs.mp4 -->
          </el-table-column>
          <el-table-column prop="title"
                           show-overflow-tooltip
                           label="标题">
          </el-table-column>
          <el-table-column prop="member_name"
                           show-overflow-tooltip
                           label="用户">
          </el-table-column>
          <el-table-column prop="vlabel"
                           show-overflow-tooltip
                           label="标签">
          </el-table-column>
          <el-table-column prop="explain"
                           show-overflow-tooltip
                           label="简介">
          </el-table-column>
          <el-table-column prop="fabulous"
                           show-overflow-tooltip
                           label="点赞">
          </el-table-column>
          <el-table-column prop="isps"
                           show-overflow-tooltip
                           label="状态">
            <template slot-scope="scope">
              <div v-html="scope.row.isps">
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="300"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="look(scope.$index, scope.row)">查看视频</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor right20"
                           @click="hzQueryFun(scope.$index, scope.row)">核准</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor right20"
                           @click="wsQueryFun(scope.$index, scope.row)">设未审</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delQueryFun(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
          <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="page_size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="totalData">
        </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog title="视频播放"
               v-if="dialogVisible"
               :visible.sync="dialogVisible"
               width="500px"
               :before-close="handleClose">
      <video :src="videoUrl"
             class="video"
             height='500px'
             width="400px"
             controls="controls"
             autoplay></video>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'shortVideo',

  data () {
    return {
      activeName: '100',
      dialogVisible: false,
      time: [],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      videoUrl: ''
    }
  }, 
  
  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getShortVideoPageList({
        page: this.currentPage,
        page_size: this.page_size,
        title: '',
        isps: this.activeName,
        type: '0',
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    hzQueryFun(index, row) {
      this.$newApi.setPassItem({
        uid: row.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
      })
    },

    wsQueryFun(index, row) {
      this.$newApi.setPassItem({
        uid: row.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
      })
    },

    delQueryFun(index, row) {
      this.$newApi.setPassItem({
        uid: row.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },

    look (index, row) {
      this.dialogVisible = true
      this.videoUrl = row.domian + row.oldkey
    },

    handleClick() {
      this.create()
    },

    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.create()
    },
  }
}
</script>

<style lang="scss" scoped>
.video {
  min-height: 300px;
}
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        > video {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.shortVideo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
