<template>
  <div class="schedule flexColumn">
    <p class="text">课程表</p>
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="课表"
                   name="first">
        <el-button type="primary"
                   style="width: 100px"
                   size="mini"
                   plain>新建日程</el-button>
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               ref="c_box"
               style="flex: 1">
            <div class="c_box mb">
              <div class="flexJC">
                <div class="flexRC">
                  <p class="minText mr ">上课时间：</p>
                  <el-select v-model="search"
                             clearable
                             class="mr ml"
                             size="mini"
                             placeholder="">
                    <el-option label="自然日"
                               value="1">
                    </el-option>
                    <el-option label="自然周"
                               value="2">
                    </el-option>
                    <el-option label="自然月"
                               value="3">
                    </el-option>
                    <el-option label="自定义"
                               value="4">
                    </el-option>
                  </el-select>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">最近上课时间：</p>
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
              <div class="flexJC mt">
                <div class="flexRC">
                  <p class="minText mr ">课程名称：</p>
                  <el-input placeholder="搜索家长姓名"
                            style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">班级：</p>
                  <el-select v-model="search"
                             clearable
                             class="mr ml"
                             size="mini"
                             placeholder="">
                    <el-option label="全部"
                               value="1">
                    </el-option>
                  </el-select>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">老师：</p>
                  <el-select v-model="search"
                             clearable
                             class="mr ml"
                             size="mini"
                             placeholder="">
                    <el-option label="全部"
                               value="1">
                    </el-option>
                  </el-select>
                </div>
              </div>

              <div class="flexJC mt">
                <div class="flexRC">
                  <p class="minText mr ">上课地点：</p>
                  <el-input placeholder="搜索家长姓名"
                            style="width: 250px;"
                            size="mini"
                            v-model="search"
                            class="input-with-select ml mr">
                  </el-input>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">教室：</p>
                  <el-select v-model="search"
                             clearable
                             class="mr ml"
                             size="mini"
                             placeholder="">
                    <el-option label="全部"
                               value="1">
                    </el-option>
                  </el-select>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">预约规则：</p>
                  <el-select v-model="search"
                             clearable
                             class="mr ml"
                             size="mini"
                             placeholder="">
                    <el-option label="全部"
                               value="1">
                    </el-option>
                  </el-select>
                </div>
              </div>

              <div class="flexRC mt">
                <p class="minText mr ">日程类型：</p>
                <el-input placeholder="搜索家长姓名"
                          style="width: 250px;"
                          size="mini"
                          v-model="search"
                          class="input-with-select ml mr">
                </el-input>

                <el-button type="primary"
                           class="ml mr"
                           size="mini"
                           plain>筛选</el-button>
                <el-button type="primary"
                           class="ml mr"
                           size="mini"
                           plain>导出课表</el-button>

                <p class="ml mr blueColor minText s">查看已导出列表</p>
                <p class="ml mr blueColor minText s">重置筛选条件</p>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <p class="minText">根据数据开发 error</p>
            </div>

          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="日程列表"
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
      search: '1',
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