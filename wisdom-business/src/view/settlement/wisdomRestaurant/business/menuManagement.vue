<template>
  <div class="menuManagement flexColumn">
    <p class="text">
      菜单管理
    </p>

    <div class="conent_box flexColumn"
         style="flex: 1;">
      <div class="c_box flexJC">
        <i class="el-icon-refresh s"></i>
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
      <div class="table"
           style="flex: 1">
        <el-table :data="tableData">
          <el-table-column prop="name"
                           fixed
                           show-overflow-tooltip
                           label="门店名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltips
                           label="菜品总数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="在售菜品数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
          </el-table-column>]
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
</template>

<script>
export default {
  name: 'menuManagement',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
