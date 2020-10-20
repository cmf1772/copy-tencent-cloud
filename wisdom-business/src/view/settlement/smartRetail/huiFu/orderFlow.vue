<template>
  <div class="orderFlow flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">

      <el-tab-pane label="模糊查询"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               ref="c_box"
               style="flex: 1">
            <div class="c_box mb">
              <div class="flexRC ">
                <p class="mr minText">开票日期：</p>
                <el-date-picker v-model="value1"
                                size="mini"
                                style="width: 250px"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                </el-date-picker>
              </div>
              <div class="flexRC mt">
                <p class="mr minText">开票状态：</p>
                <el-select v-model="shopValue"
                           style="width: 150px"
                           size="mini"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="全部"
                             value="1"></el-option>
                  <el-option label="未开票"
                             value="2"></el-option>
                  <el-option label="开票中"
                             value="3"></el-option>
                  <el-option label="开票成功"
                             value="4"></el-option>
                  <el-option label="开票失败"
                             value="5"></el-option>
                </el-select>
                <p class="mr ml minText">红冲状态：</p>
                <el-select v-model="shopValue"
                           style="width: 150px"
                           size="mini"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="全部"
                             value="1"></el-option>
                  <el-option label="是"
                             value="2"></el-option>
                  <el-option label="否"
                             value="3"></el-option>
                </el-select>
              </div>
              <div class="flexRC mt">
                <el-button size="mini">导出csv文件</el-button>
                <el-button size="mini"
                           type="primary"
                           plain>查询</el-button>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        :style="{'width': width + 'px'}">
                <el-table-column prop="name"
                                 fixed
                                 show-overflow-tooltip
                                 label="PID"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="门店名称">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="业务开票单号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="发票请求流水号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="交易单号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="发票代码">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="发票号码">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="申请时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="开票时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="发票金额（含税）">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="开票状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="红冲状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="开票通道">
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