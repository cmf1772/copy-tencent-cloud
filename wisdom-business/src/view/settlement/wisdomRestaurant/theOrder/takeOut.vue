<template>
  <div class="takeOut flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="订单管理"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn"
               ref="c_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flexJC ">
                <div class="flexRC">
                  <i class="el-icon-refresh s"></i>
                  <el-select v-model="shopValue"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             class="ml"
                             placeholder="请选择">
                    <el-option label="全部门店"
                               value="1"></el-option>
                  </el-select>
                  <el-date-picker v-model="value1"
                                  class="ml"
                                  size="mini"
                                  style="width: 250px"
                                  type="daterange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期">
                  </el-date-picker>
                  <el-select v-model="shopValue"
                             class="ml"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="订单状态"
                               value="1"></el-option>
                    <el-option label="未处理"
                               value="2"></el-option>
                    <el-option label="已接单"
                               value="3"></el-option>
                    <el-option label="已完成"
                               value="4"></el-option>
                    <el-option label="已取消"
                               value="5"></el-option>
                    <el-option label="已拒绝"
                               value="6"></el-option>
                    <el-option label="已作废"
                               value="7"></el-option>
                    <el-option label="已完成就餐"
                               value="8"></el-option>
                  </el-select>
                  <el-select v-model="shopValue"
                             class="ml"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="支付状态"
                               value="1"></el-option>
                    <el-option label="待支付"
                               value="2"></el-option>
                    <el-option label="已支付"
                               value="3"></el-option>
                    <el-option label="已退款"
                               value="4"></el-option>
                    <el-option label="退款中"
                               value="5"></el-option>
                    <el-option label="退款失败"
                               value="6"></el-option>
                  </el-select>
                  <el-select v-model="shopValue"
                             class="ml"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="物流状态"
                               value="1"></el-option>
                    <el-option label="待分配骑士"
                               value="2"></el-option>
                    <el-option label="已分配骑士"
                               value="3"></el-option>
                    <el-option label="骑士配送中"
                               value="4"></el-option>
                    <el-option label="配送异常"
                               value="5"></el-option>
                    <el-option label="自动配送"
                               value="6"></el-option>
                    <el-option label="已送达"
                               value="6"></el-option>
                  </el-select>
                  <el-button size="mini"
                             class="ml">导出csv文件</el-button>
                  <el-button size="mini">导出菜品数据</el-button>
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

            <div class="bg_color minText "
                 style="padding: 10px; margin-top: 10px">
              注：接单后，无论订单是否发单或自配送，在超出配送时间24小时后，订单将自动变更为已送达或已自提；用户C端申请退款后，如果您不处理退款，订单将在24小时后自动变更为拒绝退款。
            </div>
            <div class="table flexC"
                 style="flex: 1">
              <p class="text">暂无数据</p>
            </div>

          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="退款设置"
                   name="second">
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