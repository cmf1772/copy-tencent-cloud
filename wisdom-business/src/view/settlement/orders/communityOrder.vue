<template>
  <div class="communityOrder flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="发货"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flexJC">
                <div class="flexRC">
                  <p class="minText mr">生效时间</p>
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
                  <el-select v-model="date"
                             style="width: 100px"
                             class="mr"
                             slot="prepend"
                             size="mini"
                             placeholder="请选择">
                    <el-option label="待发货"
                               value="1"></el-option>
                    <el-option label="已发货"
                               value="2"></el-option>
                    <el-option label="已收获"
                               value="3"></el-option>
                  </el-select>
                </div>
                <div>
                  <el-input placeholder="请输入内容"
                            style="width: 300px; margin: 0"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml">
                    <el-select v-model="sleValue"
                               style="width: 100px"
                               slot="prepend"
                               placeholder="请选择">
                      <el-option label="门店名称"
                                 value="1"></el-option>
                      <el-option label="门店具体位置"
                                 value="2"></el-option>
                      <el-option label="门店编号"
                                 value="3"></el-option>
                    </el-select>
                    <el-button slot="append"
                               size="mini"
                               icon="el-icon-search"></el-button>
                  </el-input>

                  <el-button size="mini"
                             type="primary"
                             plain>高级筛选</el-button>
                </div>

              </div>
              <div class="flex mt">
                <p class="minText mr">快捷操作</p>
                <el-button size="mini">批量打印配送单</el-button>
                <el-button size="mini">批量打印快递单</el-button>
                <el-button size="mini">批量发货</el-button>
                <el-button size="mini">批量打印提货明细</el-button>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="商品信息"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="实收款">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="社区信息">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="配送信息">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="发货单状态">
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
      <el-tab-pane label="备货"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flex">
                <el-select v-model="date"
                           style="width: 100px"
                           slot="prepend"
                           size="mini"
                           placeholder="请选择">
                  <el-option label="结束时间"
                             value="1"></el-option>
                  <el-option label="提货时间"
                             value="2"></el-option>
                </el-select>
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
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="活动信息"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="结束时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="提货时间">
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
  name: 'communityOrder',
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
      date: '1',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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
</style>