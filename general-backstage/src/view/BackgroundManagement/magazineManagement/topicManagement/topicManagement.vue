<template>
  <div class="topicManagement">
    <div class="flex">
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
        <el-table-column prop="comment"
                         show-overflow-tooltip
                         width="180"
                         label="内容">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="图片">
          <template slot-scope="scope">
            <div class="img">
              <img v-for="item in scope.row.pics"
                   :key="item"
                   :src="$store.state.upToken + item + ''"
                   :alt="item">
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="goods_name"
                         width="180"
                         show-overflow-tooltip
                         label="商品">
        </el-table-column>
        <el-table-column prop="member_id"
                         width="180"
                         show-overflow-tooltip
                         label="会员ID">
        </el-table-column>
        <el-table-column prop="register_date"
                         width="180"
                         show-overflow-tooltip
                         label="发布时间">
        </el-table-column>

        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="100"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="redColor"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
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
                       :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topicManagement',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      total: 0,
      page_size: '10'
    }
  },

  methods: {
    //删除
    checkTrackQueryFun (index, row) {
      this.$api.delShareItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        });
        this.getSharePageList()
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getSharePageList()

    },

    handleSizeChange (val) {
      this.page_size = val
      this.getSharePageList()
    },

    getSharePageList () {
      this.$api.getSharePageList({
        token: JSON.parse(this.$store.state.token).token,
        page_size: this.page_size,
        order_type: 'asc',
        order_field: 'uid',
        page: this.currentPage
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    }
  },

  created () {
    this.$store.commit('GET_UPLOAD_TOKEN')

    this.getSharePageList()
  }
}
</script>


<style lang="scss" scoped>
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        .img {
          width: 100%;
          height: 100%;
          cursor: pointer;
          display: flex;
          overflow-x: auto;
          > img {
            width: 100px !important;
            margin-right: 20px;
            height: 100% !important;
          }
        }
      }
    }
  }
}
</style>

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

.topicManagement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

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
