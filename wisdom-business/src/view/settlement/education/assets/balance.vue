<template>
  <div class="membercard flexColumn">
    <p class="text">
      权益卡
    </p>
    <div class="conent_box flexColumn"
         style="height: 100%">
      <div class="flexColumn"
           ref="c_box"
           style="flex: 1">
        <div class="c_box mb text">
          店铺余额
        </div>

        <div class="flexJC "
             style="margin: 30px 0;">
          <div style="width: 33.3%; text-align:center">
            <div class="minText">
              可用店铺余额(元) <span class="minText blueColor">充值记录 </span> | <span class="minText blueColor">提现记录</span>
            </div>
            <div class="minText mt"
                 style="font-size: 18px; color: #000">
              0.00
              <el-button type="primary"
                         size="mini">充值</el-button>
              <el-button size="mini">体现</el-button>
            </div>
          </div>
          <div style="width: 33.3%; text-align:center">
            <div class="minText">
              待结算(元) (开通<span class="minText blueColor">快速回款 </span>，加快资金周转)
            </div>
            <div class="minText mt"
                 style="font-size: 18px; color: #000">
              0.00
            </div>
          </div>
          <div style="width: 33.3%; text-align:center">
            <div class="minText">
              不可用余额(元) <span class="minText blueColor">明细 </span>
            </div>
            <div class="minText mt"
                 style="font-size: 18px; color: #000">
              0.00
            </div>
          </div>
        </div>

        <div class="c_box mb text flexJC">
          最近交易记录
          <p class="blueColor s">全部交易记录</p>
        </div>

        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane label="全部"
                       name="first"></el-tab-pane>
          <el-tab-pane label="进行中"
                       name="second"></el-tab-pane>
          <el-tab-pane label="待结算"
                       name="thirds"></el-tab-pane>
          <el-tab-pane label="退款"
                       name="thirdss"></el-tab-pane>
          <el-tab-pane label="交易完成"
                       name="thirdsss"></el-tab-pane>
          <el-tab-pane label="交易关闭"
                       name="thirdssss"></el-tab-pane>
        </el-tabs>

        <div class="table"
             style="flex: 1">
          <el-table :data="tableData"
                    :style="{'width': width + 'px'}">
            <el-table-column prop="name"
                             fixed
                             show-overflow-tooltip
                             label="时间"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltips
                             label="名称">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="订单编号｜支付单号">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="对方">
            </el-table-column>
            <el-table-column prop="address"
                             fixed="right"
                             show-overflow-tooltip
                             label="金额（元）｜明细">
            </el-table-column>
            <el-table-column prop="address"
                             fixed="right"
                             show-overflow-tooltip
                             label="状态">
            </el-table-column>
            <el-table-column prop="address"
                             fixed="right"
                             show-overflow-tooltip
                             label="操作">
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
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
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
      width: 0
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  },
  mounted () {
    this.width = this.$refs.c_box.clientWidth
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
</style>