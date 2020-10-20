<template>
  <div class="shippingReport bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">出货报告</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">
            <el-select v-model="pValue"
                       class="mr"
                       style="width: 100px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="最近1天"
                         value="1"></el-option>
              <el-option label="最近7天"
                         value="2"></el-option>
              <el-option label="最近15天"
                         value="3"></el-option>
              <el-option label="最近30天"
                         value="4"></el-option>
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
              <el-option label="单品名称"
                         value="1"></el-option>
              <el-option label="单品条码"
                         value="2"></el-option>
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
                           label="单品名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="单品规格">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="单位">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="总出库数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="销售出库">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="调拨出库">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="盘亏出库">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="过期退货">
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
  name: 'shippingReport',
  data () {
    return {
      pValue: '1',
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