<template>
  <div class="additionalProduct bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">附加产品</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <el-button size="mini">新增附加产品</el-button>
            <el-button size="mini">导出</el-button>
          </div>
          <el-input placeholder="请输入内容"
                    style="width: 200px"
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
                           label="保险名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="销售价">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="成本价">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="说明">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
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
  name: 'additionalProduct',
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
.additionalProduct {
  width: 100%;
  height: 100%;
}
</style>