<template>
  <div class="supplierList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">供应商数据</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <p class="text mb">数据筛选</p>
      <div class="flexJC c_box">
        <div class="flexRC">
          <el-select v-model="stateValue"
                     style="width: 100px"
                     class="mr"
                     slot="prepend"
                     size="mini"
                     placeholder="请选择">
            <el-option label="全部产品"
                       value="1"></el-option>
            <el-option label="线路"
                       value="2"></el-option>
            <el-option label="门票"
                       value="3"></el-option>
          </el-select>

          <p class="minText ml mr">供应商名称 </p>
          <el-select v-model="stateValue"
                     style="width: 100px"
                     class="mr ml"
                     slot="prepend"
                     size="mini"
                     placeholder="请选择供应商">
            <el-option label="请选择供应商"
                       value="1"></el-option>
          </el-select>

          <el-date-picker v-model="value1"
                          size="mini"
                          style="width: 250px"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="供应商"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付订单量">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="实收金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="总成本">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="总利润">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="120"
                           min-width="60">
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box">
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
  name: 'supplierList',
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
.supplierList {
  width: 100%;
  height: 100%;
}
</style>