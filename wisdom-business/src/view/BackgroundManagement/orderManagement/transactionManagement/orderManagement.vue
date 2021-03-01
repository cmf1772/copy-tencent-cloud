
<template>
  <div class="orderManagement">
    <div class="title">
      <span>订单号：</span>
      <el-input placeholder="驱动名称"
                v-model="sName"
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
    <el-tabs v-model="status"
             @tab-click="handleClick">
      <el-tab-pane label="所有订单"
                   name="0">
      </el-tab-pane>
      <el-tab-pane label="待付款"
                   name="1">
      </el-tab-pane>
      <el-tab-pane label="已取消"
                   name="2">
      </el-tab-pane>
      <el-tab-pane label="已付款"
                   name="3">
      </el-tab-pane>
      <el-tab-pane label="已发货"
                   name="4">
      </el-tab-pane>
      <el-tab-pane label="已收货"
                   name="5">
      </el-tab-pane>
      <el-tab-pane label="已退货"
                   name="6">
      </el-tab-pane>
    </el-tabs>
    <div class="flex"
         :style="{'height': height}">
      <el-table :data="tableData"
                stripe
                style="width: 100%">
        <el-table-column show-overflow-tooltip
                         type="index"
                         width="50"
                         label="序号">
          <template slot-scope="scope">
            {{scope.$index+1}}
          </template>
        </el-table-column>
        <el-table-column prop="ordersn"
                         show-overflow-tooltip
                         label="编号"
                         width="180">
        </el-table-column>
        <el-table-column prop="shop_name"
                         show-overflow-tooltip
                         label="商家名称"
                         width="180">
        </el-table-column>
        <el-table-column prop="addtime"
                         show-overflow-tooltip
                         label="下单时间"
                         width="180">
        </el-table-column>
        <el-table-column prop="sh_price"
                         show-overflow-tooltip
                         label="运费">
        </el-table-column>
        <el-table-column prop="goods_point"
                         show-overflow-tooltip
                         label="订单积分">
        </el-table-column>
      </el-table>
    </div>
    <div class="btootm_paination">
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
</template>

<script>
export default {
  name: 'orderManagement',
  data () {
    return {
      height: window.innerHeight - 270 + 'px',
      status: '0',
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10
    }
  },

  methods: {
    getMyTgOrderPageList () {
      this.$api.getMyTgOrderPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        status: this.status,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    handleClick (val) {
      this.currentPage = 1
      this.getMyTgOrderPageList()
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getMyTgOrderPageList()
    },

    handleSizeChange (val) {
      this.page_size = val;
      this.getMyTgOrderPageList()
    },
  },

  mounted () {
    this.getMyTgOrderPageList()
  },
}
</script>

<style lang="scss" scoped>
.title {
  background: #fff;
  border-radius: 4px;
  padding: 10px;
}
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}

.orderManagement {
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
