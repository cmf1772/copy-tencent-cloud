<template>
  <div class="provider">
    <div class="table_bottom">
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
          <el-table-column prop="group_id"
                           show-overflow-tooltip
                           label="拼团ID"
                           width="180">
          </el-table-column>
          <el-table-column prop="group_name"
                           show-overflow-tooltip
                           label="拼团商品"
                           width="180">
          </el-table-column>
          <el-table-column prop="user_name"
                           show-overflow-tooltip
                           label="发起者">
          </el-table-column>
          <el-table-column prop="group_price"
                           show-overflow-tooltip
                           label="拼团金额">
          </el-table-column>
          <el-table-column prop="total_number"
                           show-overflow-tooltip
                           label="拼团人数"
                           width="180">
          </el-table-column>
          <el-table-column prop="buy_number"
                           show-overflow-tooltip
                           label="参团人数"
                           width="180">
          </el-table-column>
          <el-table-column prop="state_name"
                           show-overflow-tooltip
                           label="拼团状态"
                           width="180">
          </el-table-column>
          <el-table-column prop="start_time"
                           show-overflow-tooltip
                           label="拼团时间"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="120"
                           min-width="100">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="editor(scope.$index, scope.row)">参团订单列表</el-button>
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
  </div>
</template>

<script>
export default {
  name: 'provider',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10
    }
  },

  methods: {
    ptgetSellerOrderPageList () {
      this.$api.ptgetSellerOrderPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'group_id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    add () {
      this.$router.push('/transactionManagement/addSpellGroupOrder?nameType=拼团订单列表')
    },
    editor (i, r) {
      this.$router.push({
        path: '/transactionManagement/addSpellGroupOrder',
        query: {
          uid: r.uid
        }
      })
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.ptgetSellerOrderPageList()
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.page_size = val
      this.ptgetSellerOrderPageList()
    },
  },

  mounted () {
    this.ptgetSellerOrderPageList()
  },
}
</script>

<style lang="scss" scoped>
.provider {
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
