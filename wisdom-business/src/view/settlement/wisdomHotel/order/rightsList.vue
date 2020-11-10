<template>
  <div class="rightsList flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="售后订单"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               ref="c_box"
               style="flex: 1">
            <div class="c_box mb">
              <div class="flexJC ">
                <div class="flexRC">
                  <el-date-picker v-model="value1"
                                  style="width: 320px"
                                  size="mini"
                                  class="mr"
                                  type="datetimerange"
                                  :picker-options="pickerOptions"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  align="right">
                  </el-date-picker>
                  <el-select v-model="shopValue"
                             style="width: 150px"
                             size="mini"
                             class="mr"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="全部业务"
                               value="1"></el-option>
                    <el-option label="订房"
                               value="2"></el-option>
                    <el-option label="商品"
                               value="3"></el-option>
                    <el-option label="预约"
                               value="4"></el-option>
                    <el-option label="收款码"
                               value="5"></el-option>
                  </el-select>
                </div>
                <div>
                  <el-select v-model="shopValue"
                             style="width: 150px"
                             size="mini"
                             class="mr"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="全部售后状态"
                               value="1"></el-option>
                    <el-option label="待确认"
                               value="2"></el-option>
                    <el-option label="退款处理中"
                               value="3"></el-option>
                    <el-option label="已退款"
                               value="4"></el-option>
                    <el-option label="退款失败"
                               value="5"></el-option>
                    <el-option label="拒绝退款"
                               value="6"></el-option>
                    <el-option label="等待买家退货"
                               value="7"></el-option>
                    <el-option label="买家已退货"
                               value="8"></el-option>
                    <el-option label="用户取消退款"
                               value="9"></el-option>
                  </el-select>
                  <el-input placeholder="请输入关键字"
                            style="width: 300px; margin: 0"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml">
                    <el-select v-model="sleValue"
                               style="width: 100px"
                               slot="prepend"
                               placeholder="请选择">
                      <el-option label="售后单号"
                                 value="1"></el-option>
                      <el-option label="订单编号"
                                 value="2"></el-option>
                    </el-select>
                    <el-button slot="append"
                               size="mini"
                               icon="el-icon-search"></el-button>
                  </el-input>
                </div>
              </div>
            </div>
            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData">
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="售后单号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="售后金额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="申请时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="顾客">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="所属业务">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="退款状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="操作">
                </el-table-column>
              </el-table>
            </div>

            <div class="btootm_paination c_box mt">
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
      <el-tab-pane label="售后设置"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flexJC ">
                <div class="flexRC">
                  <el-date-picker v-model="value1"
                                  style="width: 320px"
                                  size="mini"
                                  class="mr"
                                  type="datetimerange"
                                  :picker-options="pickerOptions"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  align="right">
                  </el-date-picker>
                  <el-button size="mini"
                             class="mr ml">导出记录</el-button>
                </div>
                <div>
                  <el-select v-model="shopValue"
                             style="width: 150px"
                             size="mini"
                             class="mr"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="待确定"
                               value="1"></el-option>
                    <el-option label="已完成"
                               value="2"></el-option>
                    <el-option label="已关闭"
                               value="2"></el-option>
                  </el-select>
                  <el-input placeholder="请输入关键字"
                            style="width: 300px; margin: 0"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml">
                    <el-button slot="append"
                               size="mini"
                               icon="el-icon-search"></el-button>
                  </el-input>
                </div>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="门店标签"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="使用门店数量">
                </el-table-column>
                <el-table-column show-overflow-tooltip
                                 label="操作"
                                 width="270"
                                 min-width="60">
                  <template slot-scope="scope">
                    <div>
                      <el-button size="medium"
                                 type="text"
                                 class="blueColor right20"
                                 @click="look(scope.$index, scope.row)">编辑</el-button>
                      <el-button size="medium"
                                 type="text"
                                 class="blueColor right20"
                                 @click="edit(scope.$index, scope.row)">投放</el-button>
                      <el-button size="medium"
                                 type="text"
                                 class="blueColor"
                                 @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button>
                      <el-button size="medium"
                                 type="text"
                                 class="blueColor"
                                 @click="checkTrackQueryFun(scope.$index, scope.row)">分配门店</el-button>
                      <!-- <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button> -->
                    </div>
                  </template>
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
  },

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