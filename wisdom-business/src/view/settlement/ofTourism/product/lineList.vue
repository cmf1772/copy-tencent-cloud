<template>
  <div class="lineList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">线路列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC">
          <el-input placeholder="请输入内容"
                    style="width: 200px"
                    size="mini"
                    v-model="search"
                    class="input-with-select">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
          <el-button type="primary"
                     size="mini"
                     plain>筛选条件</el-button>
        </div>
        <div class="flexRC mt">
          <el-select v-model="stateValue"
                     class=" mr"
                     style="width: 100px"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="未上架"
                       value="1">
            </el-option>
            <el-option label="销售中"
                       value="2">
            </el-option>
            <el-option label="已售馨"
                       value="3">
            </el-option>
          </el-select>
          <el-select v-model="stateValue"
                     class="ml mr"
                     style="width: 100px"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="商品类型"
                       value="1">
            </el-option>
          </el-select>
          <p class="minText ml mr">供应商名称</p>
          <el-select v-model="stateValue1"
                     class="ml mr"
                     style="width: 150px"
                     size="mini"
                     clearable
                     placeholder="请选择供应商">
            <!-- <el-option label="商品类型"
                       value="1">
            </el-option> -->
          </el-select>
          <p class="minText ml mr">创建时间</p>
          <el-date-picker v-model="value1"
                          size="mini"
                          style="width: 250px"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
          <!-- <el-option label="商品类型"
                       value="1">
            </el-option> -->
        </div>
        <el-divider></el-divider>
        <div class="flexRC">
          <el-button size="mini">新增产品</el-button>
          <el-button size="mini">导出</el-button>
          <el-button size="mini">清空</el-button>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="页面名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="页面导航">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="当前状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="页面来源">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="最后修改时间">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="120"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="look(scope.$index, scope.row)">查看</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="edit(scope.$index, scope.row)">设为首页</el-button>
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
  </div>
</template>

<script>
export default {
  name: 'lineList',
  data () {
    return {
      stateValue: '1',
      stateValue1: '',
      search: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

  methods: {
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
.lineList {
  width: 100%;
  height: 100%;
}
</style>