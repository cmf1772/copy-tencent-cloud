<template>
  <div class="setup bs flexColumn"
       style="margin: 0">
    <div class="">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="收款方式"
                     name="first"></el-tab-pane>
        <el-tab-pane label="配送方式"
                     name="second"></el-tab-pane>
        <el-tab-pane label="整单优惠"
                     name="third"></el-tab-pane>
        <el-tab-pane label="抹零设置"
                     name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="排序"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="收款方式">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="收银台">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="APP开单">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
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
  name: 'setup',
  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      activeName: 'first'
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