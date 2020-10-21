<template>
  <div class="thePrinter flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="打印机管理"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               ref="c_box"
               style="flex: 1">
            <div class="c_box mb">
              <div class="flexRC ">
                <p class="mr minText">门店名称：</p>
                <el-select v-model="shopValue"
                           style="width: 150px"
                           size="mini"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="全部门店"
                             value="1"></el-option>
                </el-select>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        :style="{'width': width + 'px'}">
                <el-table-column prop="name"
                                 fixed
                                 show-overflow-tooltip
                                 label="分账时间"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="分账金额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="订单状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="备注">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="收款方名称">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="收款方WID/PID">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="收款方类型">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="业务类型">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="分账方式">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="原交易时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="原交易金额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="原交易退款金额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="业务订单号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="三方分账单号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="付款方名称">
                </el-table-column>
                <el-table-column prop="address"
                                 fixed="right"
                                 show-overflow-tooltip
                                 label="付款方类型">
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
      <el-tab-pane label="精准查询"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexJC">
            <p class="text">
              自定义小票
            </p>
          </div>
          <div class="flexColumn conent_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flex">
                <el-button size="mini">新增标签</el-button>
                <el-button size="mini">批量删除</el-button>
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