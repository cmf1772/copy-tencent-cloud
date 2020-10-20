<template>
  <div class="operationLog bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">操作日志</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">

            <el-select v-model="shopValue"
                       style="width: 130px"
                       size="mini"
                       class="mr"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="所有账号"
                         value="1"></el-option>
            </el-select>
            <p class="minText ml">操作时间</p>
            <el-date-picker v-model="value1"
                            size="mini"
                            class="ml"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
            <el-select v-model="shopValue"
                       style="width: 130px"
                       size="mini"
                       class="ml"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="操作模块"
                         value="1"></el-option>
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
              <el-option label="操作员账号"
                         value="1"></el-option>
              <el-option label="订单编号"
                         value="2"></el-option>
              <el-option label="商品名称"
                         value="3"></el-option>
              <el-option label="售后单号"
                         value="4"></el-option>
              <el-option label="操作内容"
                         value="5"></el-option>
            </el-select>
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
                           label="操作账号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作模块">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作页面">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作人IP">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作内容"
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
  </div>
</template>

<script>
export default {
  name: 'operationLog',
  data () {
    return {
      value1: '',
      shopValue: '1',
      pValue: '1',
      type: '1',
      sleValue: '1',
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
</style>