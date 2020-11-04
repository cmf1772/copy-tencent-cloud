<template>
  <div class="partyOrder flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="点餐"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn"
               ref="c_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flexJC ">
                <div class="flexRC">
                  <p class="minText">下单时间</p>
                  <el-date-picker v-model="value1"
                                  class="ml"
                                  size="mini"
                                  style="width: 250px"
                                  type="daterange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期">
                  </el-date-picker>
                  <p class="minText ml">下单时间</p>
                  <el-select v-model="shopValue"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             class="ml"
                             placeholder="请选择">
                    <el-option label="全部门店"
                               value="1"></el-option>
                  </el-select>
                  <p class="minText ml">订单状态</p>
                  <el-select v-model="shopValue"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             class="ml"
                             placeholder="请选择">
                    <el-option label="已接单"
                               value="1"></el-option>
                    <el-option label="已作废"
                               value="2"></el-option>
                    <el-option label="已完成"
                               value="3"></el-option>
                  </el-select>
                  <p class="minText ml">支付状态</p>
                  <el-select v-model="shopValue"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             class="ml"
                             placeholder="请选择">
                    <el-option label="未支付"
                               value="1"></el-option>
                    <el-option label="已支付"
                               value="2"></el-option>
                  </el-select>
                  <el-button size="mini"
                             class="ml">导出csv文件</el-button>
                </div>
                <el-input placeholder="请输入内容"
                          style="width: 300px"
                          size="mini"
                          v-model="search"
                          class="input-with-select ml">
                  <el-button slot="append"
                             size="mini"
                             icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="订单编号"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="订单总额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="实际支付">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="联系人">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="联系电话">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="下单时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="所属门店">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="订单状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="支付状态">
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
      <el-tab-pane label="优惠买单"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn"
               ref="c_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flexJC ">
                <div class="flexRC">
                  <p class="minText">下单时间</p>
                  <el-date-picker v-model="value1"
                                  class="ml"
                                  size="mini"
                                  style="width: 250px"
                                  type="daterange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期">
                  </el-date-picker>
                  <p class="minText ml">下单时间</p>
                  <el-select v-model="shopValue"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             class="ml"
                             placeholder="请选择">
                    <el-option label="全部门店"
                               value="1"></el-option>
                  </el-select>

                  <el-button size="mini"
                             class="ml">导出csv文件</el-button>
                </div>
                <el-input placeholder="请输入内容"
                          style="width: 300px"
                          size="mini"
                          v-model="search"
                          class="input-with-select ml">
                  <el-button slot="append"
                             size="mini"
                             icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="订单编号"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="订单总额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="实际支付">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="联系人">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="联系电话">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="下单时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="所属门店">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="订单状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="支付状态">
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
      shopValue: '1',
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