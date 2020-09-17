<template>
  <div class="inventoryChecking bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">库存控制
        <el-tooltip content="设置可超卖数，允许有限的负库存销售，建议配合商家的采购计划临时性销售"
                    class="item"
                    placement="right"
                    effect="dark">
          <i class="el-icon-warning"></i>
        </el-tooltip>
      </p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <el-select v-model="value1"
                     size="mini"
                     style="width: 100px"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="全部分类"
                       value="1"></el-option>
          </el-select>
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
        <div class="flex mt">
          <el-button size="mini"
                     type="primary"
                     plain>导出</el-button>
          <el-button size="mini">批量设置</el-button>
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
                           label="实物库存">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="可超卖数">
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
  name: 'inventoryChecking',
  data () {
    return {
      value1: '1',
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