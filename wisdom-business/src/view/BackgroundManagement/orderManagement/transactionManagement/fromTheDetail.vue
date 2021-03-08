<template>
  <div class="fromTheDetail">

    <div class="flex">
      <p style="margin: 10px 0;">
        账户消保余额：<span class="redColor">￥{{money}}</span> 您的消保账户不足？点击这里进行
        <el-button type="primary"
                   @click="topUp"
                   style="">充值</el-button>
      </p>
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
        <el-table-column prop="money_sess"
                         show-overflow-tooltip
                         label="流水号">
        </el-table-column>
        <el-table-column prop="money_id"
                         show-overflow-tooltip
                         label="会员">
        </el-table-column>
        <el-table-column prop="money_left"
                         show-overflow-tooltip
                         label="会员消保余额">
        </el-table-column>
        <el-table-column prop="minus"
                         show-overflow-tooltip
                         label="支出">
        </el-table-column>
        <el-table-column prop="add"
                         show-overflow-tooltip
                         label="收入">
        </el-table-column>
        <el-table-column prop="money_add"
                         show-overflow-tooltip
                         label="金额变动金额">
        </el-table-column>
        <el-table-column prop="money_reason"
                         show-overflow-tooltip
                         label="金额变动原因">
        </el-table-column>
      </el-table>
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
  </div>
</template>

<script>
export default {
  name: 'fromTheDetail',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      money: ''
    }
  },

  methods: {
    delMoneyItem () {
      this.$api.delMoneyItem({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.money = res.data
      })
    },

    topUp () {
      this.$router.push('/transactionManagement/topUp?nameType=充值')
    },

    getMyMoneyPageList () {
      this.$api.getMyMoneyPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getMyMoneyPageList()
    },

    handleSizeChange (val) {
      this.page_size = val;
      this.getMyMoneyPageList()
    },
  },

  mounted () {
    this.getMyMoneyPageList()
    this.delMoneyItem()
  },
}
</script>

<style lang="scss" scoped>
.fromTheDetail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
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
