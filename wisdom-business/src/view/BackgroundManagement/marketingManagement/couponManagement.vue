<template>
  <div class="couponManagement">
    <div class="table_bottom">
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 120px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        添加优惠券
      </el-button>
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
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="优惠券名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="start_date"
                           show-overflow-tooltip
                           label="起始时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="end_date"
                           show-overflow-tooltip
                           label="终止时间">
          </el-table-column>
          <el-table-column prop="discount"
                           show-overflow-tooltip
                           label="面额">
          </el-table-column>
          <el-table-column prop="status"
                           show-overflow-tooltip
                           label="状态"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="150"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="editor(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delCouponItem(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <p class="redColor">每家商铺最多能发布 10 张优惠券</p>
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
  </div>
</template>

<script>
export default {
  name: 'couponManagement',

  data () {
    return {
      name: '',
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10
    }
  },

  mounted () {
    this.getCouponPageList()
  },

  methods: {
    getCouponPageList () {
      this.$api.getCouponPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        username: this.username,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    add () {
      this.$router.push('/marketingManagement/editCouponManagement?nameType=添加优惠卷')
    },

    delCouponItem (i, r) {
      this.$api.delCouponItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
        this.getCouponPageList()
      })
    },

    editor (i, r) {
      this.$router.push({
        path: '/marketingManagement/editCouponManagement',
        query: {
          uid: r.uid
        }
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getCouponPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getCouponPageList()
    },
  }
}
</script>

<style lang="scss" scoped>
.couponManagement {
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
