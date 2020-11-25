<template>
  <div class="appointment flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="花名册"
                   name="first">
        <el-button size="mini"
                   style="width: 120px">新建预约</el-button>
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               ref="c_box"
               style="flex: 1">
            <div class="c_box mb">
              <div class="flexRC">
                <p class="minText mr ">预约时间：</p>
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
              <div class="flexJC mt">
                <div class="flexRC">
                  <p class="minText mr ">预约来源：</p>
                  <el-select v-model="search"
                             clearable
                             style="width: 250px;"
                             class="mr ml"
                             size="mini"
                             placeholder="">
                    <el-option label="全部"
                               value="1">
                    </el-option>
                    <el-option label="线上预约"
                               value="2">
                    </el-option>
                    <el-option label="手动录入"
                               value="3">
                    </el-option>
                  </el-select>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">学员姓名：</p>
                  <el-input style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">学员家长：</p>
                  <el-input style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
              </div>
              <div class="flexJC mt">
                <div class="flexRC">
                  <p class="minText mr ">手机号码：</p>
                  <el-input style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">线下课类型：</p>

                  <el-select v-model="search"
                             clearable
                             class="mr ml"
                             style="width: 250px;"
                             size="mini"
                             placeholder="">
                    <el-option label="全部"
                               value="1">
                    </el-option>
                    <el-option label="体验课"
                               value="2">
                    </el-option>
                    <el-option label="正式课"
                               value="3">
                    </el-option>
                  </el-select>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">老师姓名：</p>
                  <el-input style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
              </div>
              <div class="flexJC mt">
                <div class="flexRC">
                  <p class="minText mr ">上课地点：</p>
                  <el-input style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">课节内容：</p>
                  <el-input style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">线下课名称：</p>
                  <el-input style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
              </div>
              <div class="flexRC mt">
                <p class="minText mr ">预约人：</p>
                <el-input style="width: 250px;"
                          size="mini"
                          v-model="search"
                          class="input-with-select ml mr">
                </el-input>
              </div>
              <div class="flexRC mt">
                <el-button size="mini"
                           class="mr">筛选</el-button>
                <el-button size="mini"
                           class="mr ml">导出报表</el-button>
                <el-button size="mini"
                           class="mr ml">查看已生成的报表</el-button>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        :style="{'width': width + 'px'}">
                <el-table-column prop="name"
                                 fixed
                                 show-overflow-tooltip
                                 label="学员姓名"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="学员家长">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="手机号码">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="预约上课时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="线下课">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="规格">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="课节内容">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="上课地点">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="老师">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="助教">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="来源">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="预约人">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="提交时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="备注">
                </el-table-column>
                <el-table-column prop="address"
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
      <el-tab-pane label="报读列表"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexJC">
            <p class="text">
              学员查询
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