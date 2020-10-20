<template>
  <div class="myAccount bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">我的账户</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box flexJC">
        <p class="text">可提现余额 <span style="color:#FFB025">0元</span> </p>
        <el-button plain
                   type="primary"
                   size="mini">申请体现</el-button>
      </div>
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">
            <el-date-picker v-model="value1"
                            size="mini"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
            <el-button plain
                       class="ml"
                       type="primary"
                       size="mini">导出报表</el-button>
            <p class="minText ml">仅展示截至今日0点的所有已入账资金明细</p>
          </div>
        </div>
      </div>

      <div class="table">

        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="交易时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关联单号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付订单号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交易类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交易金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交易手续费">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="入账金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="入账时间">
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[100, 200, 300, 400]"
                       :page-size="100"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="400">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myAccount',
  data () {
    return {
      acIndex: 0,
      stateValue: '1',
      label: [{
        value: '1',
        label: '页面标签'
      }, {
        value: '2',
        label: '全部标签'
      }],
      labelValue: '1',
      stateValue: '1',
      sleValue: '1',
      search: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

  methods: {
    active (index) {
      this.acIndex = index
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>

<style lang="scss" scoped>
</style>