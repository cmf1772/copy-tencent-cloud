<template>
  <div class="reconciliationStatement flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="模糊查询"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexJC">
            <p class="text">
              体现管理
            </p>
          </div>
          <div class="flexColumn conent_box"
               ref="c_box"
               style="flex: 1">
            <div class="c_box mb">
              <div class="flexRC ">
                <p class="mr minText">提现时间：</p>
                <el-date-picker v-model="value1"
                                size="mini"
                                style="width: 250px"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                </el-date-picker>
                <p class="mr ml minText">提现状态：</p>
                <el-select v-model="shopValue"
                           style="width: 150px"
                           size="mini"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="全部"
                             value="1"></el-option>
                  <el-option label="待审核"
                             value="2"></el-option>
                  <el-option label="通过"
                             value="3"></el-option>
                </el-select>

                <p class="mr ml minText">提现渠道：</p>
                <el-select v-model="shopValue"
                           style="width: 150px"
                           size="mini"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="支付宝"
                             value="1"></el-option>
                  <el-option label="微信零钱"
                             value="2"></el-option>
                  <el-option label="银行卡"
                             value="3"></el-option>
                </el-select>
                <p class="mr ml minText">收款方状态：</p>
                <el-select v-model="shopValue"
                           style="width: 150px"
                           size="mini"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="全部"
                             value="1"></el-option>
                  <el-option label="正常"
                             value="2"></el-option>
                  <el-option label="冻结"
                             value="3"></el-option>
                </el-select>
              </div>
              <div class="flexRC mt">
                <p class="mr  minText">收款方名称：</p>
                <el-input placeholder="请输入内容"
                          v-model="input"
                          style="width: 150px;"
                          size="mini"
                          clearable>
                </el-input>
                <p class="mr ml minText">收款方类型：</p>
                <el-select v-model="shopValue"
                           style="width: 150px"
                           size="mini"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="saas软件-商户"
                             value="1"></el-option>
                  <el-option label="saas软件-门店"
                             value="2"></el-option>
                  <el-option label="分销-微客"
                             value="3"></el-option>
                  <el-option label="多仓-云仓"
                             value="4"></el-option>
                  <el-option label="社区团购-团长"
                             value="5"></el-option>
                  <el-option label="智店-抽佣平台"
                             value="6"></el-option>
                  <el-option label="云小店-抽佣平台"
                             value="7"></el-option>
                  <el-option label="酒店-抽佣平台"
                             value="8"></el-option>
                </el-select>
                <p class="mr ml minText">收款方WID/PID：</p>
                <el-input placeholder="请输入收款方WID/PID"
                          v-model="input"
                          style="width: 150px;"
                          size="mini"
                          clearable>
                </el-input>
                <el-button size="mini"
                           type="primary"
                           class="ml"
                           plain>批量通过</el-button>
                <el-button size="mini">导出</el-button>
              </div>
              <div class="flexRC mt">
                <el-button size="mini"
                           type="primary"
                           plain>查询</el-button>
                <p class="minText ml s"
                   style="color: #2589ff;">请前往”慧付-下载中心-导出管理“下载导出结果！</p>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        :style="{'width': width + 'px'}">
                <el-table-column prop="name"
                                 fixed
                                 show-overflow-tooltip
                                 label="提现时间"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="提现金额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="提现状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="操作">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="操作时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="提现渠道">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="收款方类型">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="收款方WID/PID">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="收款方名称">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="收款方状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="联系方式">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="提现单号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="付款单号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="付款方名称">
                </el-table-column>
                <el-table-column prop="address"
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