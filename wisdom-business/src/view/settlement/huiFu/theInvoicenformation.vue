<template>
  <div class="theInvoicenformation bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">发票信息</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="bg_color">
        <p class="minText mt mb">
          注：
        </p>
        <p class="minText mb">
          1.开票金额为三方通道模式下的已入账的“消费订单手续费总额-普通退款返回的手续费总额-可用余额退款返回的手续费总额-待冲抵手续费总额”;待冲抵手续费总额为历史手续费合计负值，当某季度只入账了余额退款则可能开票金额为负数；
        </p>
        <p class="minText mb">
          2.4月，7月，10月，次年1月分别统计上季度开票金额 ，月初1号-5号出统计结果；
        </p>
        <p class="minText mb">
          3.发票一旦开具，不再修改和重开；
        </p>
        <p class="minText mb">
          4.若某季度手续费发票为负数，则无法申请开发票，合并到次季度一并开票（若次季度合并手续费金额后仍为负数，则继续顺延到下一个季度）；
        </p>
        <p class="minText mb">
          5.开票金额达到100.00元才可申请开票；可勾选多个季度合并开票，当合并季度大于等于4时无门槛限制。
        </p>
      </div>
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <p class="minText mr">收取时间：</p>
            <el-select v-model="sleValue"
                       style="width: 100px"
                       size="mini"
                       class="mr"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="2020年"
                         value="1"></el-option>
              <el-option label="2019年"
                         value="2"></el-option>
              <el-option label="2018年"
                         value="3"></el-option>
              <el-option label="2017年"
                         value="4"></el-option>
              <el-option label="2016年"
                         value="5"></el-option>
              <el-option label="2015年"
                         value="6"></el-option>
            </el-select>
            <el-select v-model="sleValue"
                       style="width: 100px"
                       size="mini"
                       class="mr"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="第一季度"
                         value="1"></el-option>
              <el-option label="第二季度"
                         value="2"></el-option>
              <el-option label="第三季度"
                         value="3"></el-option>
              <el-option label="第四季度"
                         value="4"></el-option>
            </el-select>
            <p class="minText mr">申请状态：</p>
            <el-select v-model="sleValue"
                       style="width: 100px"
                       class="mr"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="已申请"
                         value="1"></el-option>
              <el-option label="未申请"
                         value="2"></el-option>
            </el-select>
            <p class="minText mr">发票状态：</p>
            <el-select v-model="sleValue"
                       style="width: 100px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="已开票"
                         value="1"></el-option>
              <el-option label="未开票"
                         value="2"></el-option>
            </el-select>
          </div>
          <div class="flexRC">
            <el-button class="ml"
                       size="mini">申请开票</el-button>
            <el-button class="ml"
                       size="mini">开票信息管理</el-button>
          </div>
        </div>
      </div>

      <div class="table">

        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="申请时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="收取季度">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="发票号码">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="开票金额（元）">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="申请状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="发票状态">
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
  name: 'theInvoicenformation',
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