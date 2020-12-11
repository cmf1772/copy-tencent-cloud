<template>
  <div class="knowledgeCommodity">
    <div class="top_button">
      <div class="top_left">
        <span>标题</span>
        <el-input v-model="ps_subject"
                  style="width: 200px"
                  clearable>
        </el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜索
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <div class="form-item">
        <el-button slot="append"
                   @click="batDelTaskItem"
                   type="primary"
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   icon="el-icon-close">
          批量删除
        </el-button>
      </div>
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="课程价格"
                     name="first"></el-tab-pane>
        <el-tab-pane label="上传时间"
                     name="second"></el-tab-pane>
        <el-tab-pane label="课程库存"
                     name="third"></el-tab-pane>
      </el-tabs>
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
          <el-table-column prop="title"
                           show-overflow-tooltip
                           label="标题">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="type"
                           label="类型">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           prop="length"
                           label="时长">
          </el-table-column>
          <el-table-column prop="createdTime"
                           show-overflow-tooltip
                           label="发布时间">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="redColor  right20"
                           @click="delTaskItem(scope.$index, scope.row)">删除</el-button>
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
  </div>
</template>

<script>
export default {
  name: 'knowledgeCommodity',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      activeName: '',
      page_size: 10,
      ps_subject: '',
      allUid: []
    }
  },

  methods: {
    sesarchFun () {
      this.getTaskPageList()
    },

    batDelTaskItem () {
      if (!this.allUid.length) {
        this.$message({
          message: '请选择数据',
          type: 'warning'
        });
        return false
      }

      this.$api.batDelTaskItem({
        uid: this.allUid.join(','),
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getTaskPageList()
      })
    },

    delTaskItem (i, r) {
      this.$api.delTaskItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getGoodsPageList()
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getTaskPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getTaskPageList()
    },

    handleClick (tab, event) {
      console.log(tab, event);
    },

    getTaskPageList () {
      this.$api.getTaskPageList({
        order_type: 'asc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
        page: this.currentPage,
        page_size: this.page_size,
        course_id: this.$route.query.uid,
        ps_subject: this.ps_subject
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    handleSelectionChange (val) {
      this.allUid = val.map(val => { return val.uid })
    }
  },

  mounted () {
    this.getTaskPageList()
  }
}
</script>

<style lang="scss" scoped>
.knowledgeCommodity {
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
    overflow: auto;

    /deep/ .el-input__inner {
      border-color: #fff !important ;
    }
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
