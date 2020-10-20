<template>
  <div class="balanceReconciliation bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">余额对账报表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
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
            <el-button size="mini">导出报表</el-button>
          </div>
        </div>
      </div>

      <div class="table">

        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="统计时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="当日变动金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="消费订单入账">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="消费订单退款">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="体现申请">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="体现退回">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
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
  name: 'balanceReconciliation',
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