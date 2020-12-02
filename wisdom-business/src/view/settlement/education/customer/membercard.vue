<template>
  <div class="membercard flexColumn">
    <p class="text">
      权益卡
    </p>
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="权益卡管理"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn"
               ref="c_box"
               style="flex: 1">
            <div class="c_box mb flexJC">
              <el-button size="mini"
                         class="ml"
                         plain>批量转线下</el-button>
              <el-input placeholder="请输入关键字"
                        style="width: 300px; margin: 0"
                        size="mini"
                        v-model="search"
                        class="input-with-select ml mr">
                <el-button slot="append"
                           size="mini"
                           icon="el-icon-search"></el-button>
              </el-input>
            </div>

            <el-tabs v-model="activeName"
                     @tab-click="handleClick">
              <el-tab-pane label="使用中"
                           name="first"></el-tab-pane>
              <el-tab-pane label="已禁用"
                           name="second"></el-tab-pane>
              <el-tab-pane label="已过期"
                           name="third"></el-tab-pane>
            </el-tabs>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        :style="{'width': width + 'px'}">
                <el-table-column prop="name"
                                 fixed
                                 show-overflow-tooltip
                                 label="权益卡名称"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="领取条件">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="有效期">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="权益">
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
      <el-tab-pane label="领卡记录"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn "
               style="flex: 1">
            <div class="c_box mb flexJC">
              <div></div>
              <el-input placeholder="请输入关键字"
                        style="width: 300px; margin: 0"
                        size="mini"
                        v-model="search"
                        class="input-with-select ml mr">
                <el-button slot="append"
                           size="mini"
                           icon="el-icon-search"></el-button>
              </el-input>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="领取时间"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="卡号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="卡权益卡 | 类型号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="领卡人">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="发卡人">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="状态">
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
      <el-tab-pane label="退卡记录"
                   name="seconds">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               style="flex: 1">
            <div class="c_box mb flexJC">
              <div> </div>
              <el-input placeholder="请输入关键字"
                        style="width: 300px; margin: 0"
                        size="mini"
                        v-model="search"
                        class="input-with-select ml mr">
                <el-button slot="append"
                           size="mini"
                           icon="el-icon-search"></el-button>
              </el-input>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="退卡时间"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="卡号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="权益卡 | 类型">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="退卡金额">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="会员">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="操作人">
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