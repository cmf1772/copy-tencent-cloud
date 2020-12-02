<template>
  <div class="crowd flexColumn">
    <p class="text">客户分群</p>
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="自定义人群"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn "
               ref="c_box"
               style="flex: 1">
            <div class="c_box flexJC">
              <div class="flexRC">
                <el-button size="mini"
                           class="mr">新建课程</el-button>
              </div>
              <div class="flexRC">
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
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        :style="{'width': width + 'px'}">
                <el-table-column prop="name"
                                 fixed
                                 show-overflow-tooltip
                                 label="人群名称"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="人群定义">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="人群数量">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="更新时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="操作人">
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
      <el-tab-pane label="推荐人群"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn"
               style="flex: 1">
            <div class="c_box">
              <p class="minText">推荐运营人群TOP 3</p>
            </div>

            <div class="flexJC">
              <div class="boxss flexColumn">
                <div style="flex: 1; background: rgb(53, 142, 231); align-items: left;box-sizing:border-box; padding:0 20px"
                     class="flexC">
                  <p class="text mb"
                     style="color: #fff">高价值流失人群</p>
                  <p class="minText"
                     style="color: #fff">近30天没有访问店铺;近360天有购买;近90天无购买;有效购买次数大于3;笔单价大于100;</p>
                </div>
                <div style="flex: 1">
                  <div class="flexJC"
                       style="height: 80px">
                    <div class="flexC"
                         style="flex: 1">
                      <p class="text"
                         style="text-align: center">人群总数</p>
                      <p class="text"
                         style="color:#000;text-align: center">0</p>
                    </div>
                    <div class="flexC"
                         style="flex: 1">
                      <p class="text"
                         style="text-align: center">人群总数</p>
                      <p class="text"
                         style="color:#000;text-align: center">0</p>
                    </div>
                  </div>
                  <el-button type="primary"
                             size="mini"
                             style="width: 90%; margin-left:5%"
                             plain>创建运营计划</el-button>
                </div>
              </div>
              <div class="boxss flexColumn">
                <div style="flex: 1; background: rgb(53, 142, 231); align-items: left;box-sizing:border-box; padding:0 20px"
                     class="flexC">
                  <p class="text mb"
                     style="color: #fff">高价值流失人群</p>
                  <p class="minText"
                     style="color: #fff">近30天没有访问店铺;近360天有购买;近90天无购买;有效购买次数大于3;笔单价大于100;</p>
                </div>
                <div style="flex: 1">
                  <div class="flexJC"
                       style="height: 80px">
                    <div class="flexC"
                         style="flex: 1">
                      <p class="text"
                         style="text-align: center">人群总数</p>
                      <p class="text"
                         style="color:#000;text-align: center">0</p>
                    </div>
                    <div class="flexC"
                         style="flex: 1">
                      <p class="text"
                         style="text-align: center">人群总数</p>
                      <p class="text"
                         style="color:#000;text-align: center">0</p>
                    </div>
                  </div>
                  <el-button type="primary"
                             size="mini"
                             style="width: 90%; margin-left:5%"
                             plain>创建运营计划</el-button>
                </div>
              </div>
              <div class="boxss flexColumn">
                <div style="flex: 1; background: rgb(53, 142, 231); align-items: left;box-sizing:border-box; padding:0 20px"
                     class="flexC">
                  <p class="text mb"
                     style="color: #fff">高价值流失人群</p>
                  <p class="minText"
                     style="color: #fff">近30天没有访问店铺;近360天有购买;近90天无购买;有效购买次数大于3;笔单价大于100;</p>
                </div>
                <div style="flex: 1">
                  <div class="flexJC"
                       style="height: 80px">
                    <div class="flexC"
                         style="flex: 1">
                      <p class="text"
                         style="text-align: center">人群总数</p>
                      <p class="text"
                         style="color:#000;text-align: center">0</p>
                    </div>
                    <div class="flexC"
                         style="flex: 1">
                      <p class="text"
                         style="text-align: center">人群总数</p>
                      <p class="text"
                         style="color:#000;text-align: center">0</p>
                    </div>
                  </div>
                  <el-button type="primary"
                             size="mini"
                             style="width: 90%; margin-left:5%"
                             plain>创建运营计划</el-button>
                </div>
              </div>
            </div>

            <div class="c_box mt">
              <p class="minText">全部推荐人群</p>
            </div>

            <div class="table mt"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="人群名称"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="人群定义">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="人群数量">
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
.boxss {
  background: #fff;
  border: solid 1px #ccc;
  border-radius: 4px;
  width: 290px;
  height: 230px;
}
</style>