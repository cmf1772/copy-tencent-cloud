<template>
  <div class="reconciliationStatement flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="服务商模式"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexJC">
            <p class="text">
              对账报表
            </p>
          </div>
          <div class="flexColumn conent_box"
               style="flex: 1">
            <div class="c_box">
              <div class="bg_color minText"
                   style="padding-top: 10px; padding-bottom: 10px; padding-right: 10px;">
                注意：服务商模式对账只核对通过当前店铺产生的交易订单和退款订单。 资金由微信支付（财付通）结算至商户提供的银行结算账户，该结算账户商户可以自主在微信商户后台进行变更。 手续费率由微信支付核准决定，手续费由微信支付扣收，发票可以在微信商户后台申请开具。
              </div>
              <div class="flexJC ">
                <div class="flexJC">
                  <p class="mr minText">对账日期</p>
                  <el-date-picker v-model="value1"
                                  size="mini"
                                  style="width: 250px"
                                  type="daterange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期">
                  </el-date-picker>
                  <el-button size="mini"
                             type="primary"
                             class="ml"
                             plain>查询</el-button>
                </div>

                <el-button size="mini">导出</el-button>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="对账日期"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="总店/门店名称">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="结算金额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="交易订单数">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="交易订单总额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="交易订单手续费">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="退款订单数">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="退款订单总额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="退款手续费返还">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="账单明细">
                </el-table-column>
              </el-table>
            </div>

            <div class="btootm_paination c_box mt">
              <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      type: '1',
      state: [{
        value: '1',
        label: '更多'
      }, {
        value: '2',
        label: '修改装修权限'
      }, {
        value: '3',
        label: '修改线上库存模式'
      }, {
        value: '4',
        label: '修改线下库存模式'
      }, {
        value: '5',
        label: '修改门店权限'
      }, {
        value: '6',
        label: '修改发票模版'
      }, {
        value: '7',
        label: '修改分成方案'
      }],
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss">
.el-tabs .el-tabs__content {
  flex: 1;
  .el-tab-pane {
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
.button {
  background: #d3e7ff !important;
  color: #2589ff !important;
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
}
</style>