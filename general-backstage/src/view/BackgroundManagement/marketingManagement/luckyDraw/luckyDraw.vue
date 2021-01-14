<template>
  <div class="brandManagement">
    <div class="flex">
      <div class="form-item">
        <el-button slot="append"
                   type="primary"
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   @click="add"
                   icon="el-icon-plus">
          添加活动
        </el-button>
      </div>
      <el-table :data="tableData"
                stripe
                style="width: 100%">
        <el-table-column show-overflow-tooltip
                         type="index"
                         width="50"
                         label="序号">
          <template slot-scope="scope">
            <!-- {{(currentPage-1)*10+scope.$index+1}} -->
            {{scope.$index+1}}
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         show-overflow-tooltip
                         label="活动标题">
        </el-table-column>
        <el-table-column prop="point"
                         show-overflow-tooltip
                         label="所需积分">
        </el-table-column>
        <el-table-column prop="start_time"
                         show-overflow-tooltip
                         label="起始时间">
        </el-table-column>
        <el-table-column prop="end_time"
                         show-overflow-tooltip
                         label="终止时间">
        </el-table-column>
        <el-table-column prop="reg_date"
                         show-overflow-tooltip
                         label="发布时间">
        </el-table-column>
        <el-table-column prop="join_num"
                         show-overflow-tooltip
                         label="参与人数">
        </el-table-column>
        <el-table-column prop="lucky_num"
                         show-overflow-tooltip
                         label="中奖人数">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="120"
                         min-width="120">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="yellowColor right20"
                         @click="editor(scope.$index, scope.row)">修改</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
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
  name: 'brandManagement',

  data () {
    return {
      time: [],
      sName: '',
      activeName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getLuckyActPageList({
        page: this.currentPage,
        page_size: this.page_size,
        name: '',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    add () {
      this.$router.push('/luckyDraw/editluckyDraw')
    },
    editor (index, row) {
      this.$router.push('/luckyDraw/editluckyDraw?uid=' + row.uid)
    },

    checkTrackQueryFun(index, row) {
      this.$newApi.delLuckyActItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        }
        this.create()
      })
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
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.brandManagement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
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
