<template>
  <div class="food flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="菜品列表"
                   name="list">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               ref="c_box"
               style="flex: 1; padding: 0">
            <div class="c_box mb">
              <div class="flexJC ">
                <div class="flexRC">
                  <el-button size="mini"
                             class="mr ml">发布菜品</el-button>
                  <el-button size="mini"
                             class="mr ml">批量启用</el-button>
                  <el-button size="mini"
                             class="mr ml">批量停用</el-button>
                  <el-button size="mini"
                             class="mr ml">删除</el-button>
                </div>
                <div>
                  <el-checkbox v-model="checked"
                               class="mr ml">已售罄</el-checkbox>
                  <el-select v-model="shopValue"
                             style="width: 150px"
                             size="mini"
                             class="mr ml"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="已启用"
                               value="1"></el-option>
                    <el-option label="已停用"
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
              <el-table :data="tableData">
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="商品名称">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="商品类型">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="销售价">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="实际销量/剩余库存">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="商品状态">
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
      <el-tab-pane label="菜品分组"
                   name="group">
        <div class="flexColumn"
             style="height: 100%">
          <div class="flexColumn"
               style="flex: 1; padding: 0">
            <div class="bg_color minText"
                 style="padding: 10px 20px; margin: 0">
              最多可设置30个分组，还可增加30个菜品分组，只有添加进分组的菜品，才显示在点菜页面供消费者选择！
            </div>
            <div style="flex: 1">
              <div class="flexJC mt">
                <p class="minText">拖拽调整分组顺序，确认后点击保存排序</p>
                <el-button size="mini"
                           plain>保持排序</el-button>
              </div>
              <div class="flexC boxC s">
                <i class="el-icon-plus"></i>
                <p class="minText"
                   style="color: #000; margin-top: 5px;">新增分组</p>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="菜品规格"
                   name="standard">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn conent_box"
               style="flex: 1; padding: 0">
            <div class="c_box mb">
              <div class="flexJC ">
                <div class="flexRC">
                  <el-button size="mini"
                             class="mr ml">新增规格</el-button>
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
                                 label="聚合名称">
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
      <el-tab-pane label="商品设置"
                   name="setting">
        <div class="conent_box flexColumn flexC"
             style="height: 100%">
          <p class="minText">暂无开发</p>
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
      activeName: '',
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

  created () {
    this.activeName = this.$route.query.type
  },
  watch: {
    $route (to, from) {
      this.activeName = to.query.type
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
.boxC {
  width: 250px;
  padding: 20px;
  margin: 0 10px 10px 0;
  background: #ffffff;
  border: 1px solid #e3e2e5;
  border-radius: 4px;
  box-sizing: border-box;
  height: 100px;
}
</style>