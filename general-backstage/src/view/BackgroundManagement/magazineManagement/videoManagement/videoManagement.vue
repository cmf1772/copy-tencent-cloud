<template>
  <div class="videoManagement">
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  @selection-change="handleSelectionChange"
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
            <img slot-scope="scope"
                 :src="scope.row.cover">
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
          <el-table-column show-overflow-tooltip
                           label="状态">
            <div slot-scope="scope"
                 v-html="scope.row.isps">

            </div>
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
                           @click="setPassItem(scope.$index, scope.row)">核准</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor right20"
                           @click="setRenewItem(scope.$index, scope.row)">设未审</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delShortVideoItem(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
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
      <video :src="oldkey"
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

  name: 'videoManagement',

  data () {
    return {
      dialogVisible: false,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      oldkey: ''
    }
  },

  methods: {
    look (index, row) {
      this.$api.getShortVideoItem({
        token: JSON.parse(this.$store.state.token).token,
        uid: row.id
      }).then(res => {
        console.log(res)
        this.oldkey = res.data.domian + res.data.key
        this.dialogVisible = true
      })
    },

    setPassItem (index, row) {
      this.$api.setPassItem({
        token: JSON.parse(this.$store.state.token).token,
        uid: row.id
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getShortVideoPageList()
      })
    },

    setRenewItem (index, row) {
      this.$api.setRenewItem({
        token: JSON.parse(this.$store.state.token).token,
        uid: row.id
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getShortVideoPageList()
      })
    },

    delShortVideoItem (index, row) {
      this.$api.delShortVideoItem({
        token: JSON.parse(this.$store.state.token).token,
        uid: row.id
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getShortVideoPageList()
      })
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
      this.getShortVideoPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getShortVideoPageList()
    },

    getShortVideoPageList () {
      this.$api.getShortVideoPageList({
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
        page: this.currentPage,
        page_size: this.page_size
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    }
  },

  mounted () {
    this.getShortVideoPageList()
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
.videoManagement {
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
