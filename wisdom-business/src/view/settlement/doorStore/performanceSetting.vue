<template>
  <div class="performanceSetting  flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="基础设置"
                   name="first">
        <div class="conent_box flexColumn">
          <p class="text">业绩考核周期 <span class="minText"
                  style="color: #2589FF">点击编辑</span></p>
          <p class="minText mt">财年起始月份: 今年 1月</p>
          <p class="minText mt">考核周期: 按月考核</p>
        </div>
      </el-tab-pane>
      <el-tab-pane label="分成设置"
                   name="second">
        <div class="flexColumn conent_box"
             style="flex: 1">
          <div class="c_box">
            <div class="flexJC ">
              <el-button size="mini"
                         type="primary"
                         plain>新增方案</el-button>
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

          <div class="table">
            <el-table :data="tableData"
                      stripe
                      style="width: 100%">
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="方案名称"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="分成规则">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="业绩取值">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="使用门店数">
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
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>

          <div class="btootm_paination c_box">
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
      </el-tab-pane>
      <el-tab-pane label="目标设置"
                   name="third">
        <div class="flexColumn conent_box"
             style="flex: 1">
          <div class="c_box">
            <div class="flexJC ">
              <div>
                <el-select v-model="age"
                           style="width: 130px"
                           size="mini"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="2020财力"
                             value="1"></el-option>
                  <el-option label="2021财力"
                             value="2"></el-option>
                  <el-option label="2022财力"
                             value="3"></el-option>
                  <el-option label="2023财力"
                             value="4"></el-option>
                </el-select>
                <el-select v-model="stateValue"
                           class="ml mr"
                           style="width: 100px; margin-left: 0"
                           size="mini"
                           clearable
                           placeholder="请选择">
                  <el-option v-for="item in state"
                             :key="item.value"
                             :label="item.label"
                             :value="item.value">
                  </el-option>
                </el-select>

              </div>
              <el-input placeholder="请输入内容"
                        style="width: 300px"
                        size="mini"
                        v-model="search"
                        class="input-with-select ml">
                <el-select v-model="sleValue"
                           style="width: 100px"
                           slot="prepend"
                           placeholder="请选择">
                  <el-option label="门店名称"
                             value="1"></el-option>
                  <el-option label="门店编码"
                             value="2"></el-option>
                </el-select>
                <el-button slot="append"
                           size="mini"
                           icon="el-icon-search"></el-button>
              </el-input>
            </div>
            <div class="flex mt">
              <el-button size="mini">新增目标</el-button>
              <el-button size="mini">批量编辑</el-button>
              <el-button size="mini">导入目标</el-button>
              <el-button size="mini">导出目标</el-button>
              <el-select v-model="sleValue"
                         class="ml"
                         style="width: 100px"
                         slot="prepend"
                         size="mini"
                         placeholder="请选择">
                <el-option label="全部状态"
                           value="1"></el-option>
                <el-option label="启用"
                           value="2"></el-option>
                <el-option label="不启用"
                           value="2"></el-option>
              </el-select>
            </div>
          </div>

          <div class="bg_color flexRC"
               style="height: 70px">
            <p class="minText">总计：年业绩目标 <span style="color: #2589FF">0</span> 年充值目标 <span style="color: #2589FF">0</span>年开卡目标 <span style="color: #2589FF">0</span>年吸粉目标 <span style="color: #2589FF">0</span></p>
          </div>

          <div class="table">
            <el-table :data="tableData"
                      stripe
                      style="width: 100%">
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="门店名称"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="门店编号">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="门店标签">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="门店状态">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="年销售目标(元)">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="年充值目标(元)">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="年开卡目标(人) ">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="年吸粉目标(人) ">
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

          <div class="btootm_paination c_box">
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'performanceSetting',
  data () {
    return {
      activeName: 'first',
      search: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      age: '1',
      state: [{
        value: '1',
        label: '选择门店标签'
      }],
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>

<style lang="scss" scoped>
</style>