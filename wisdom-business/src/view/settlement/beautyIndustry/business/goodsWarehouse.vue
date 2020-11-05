<template>
  <div class="goodsWarehouse flexColumn conent_box">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="服务项目"
                   name="first"></el-tab-pane>
      <el-tab-pane label="服务套餐"
                   name="second"></el-tab-pane>
      <el-tab-pane label="卡项"
                   name="third"></el-tab-pane>
    </el-tabs>
    <div class="c_box">
      <div>
        <el-input placeholder="请输入内容"
                  style="width: 300px"
                  size="mini"
                  v-model="search"
                  class="input-with-select ">
          <el-button slot="append"
                     size="mini"
                     icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="flexJC mt">
        <div class="flexRC">
          <el-button size="mini"
                     type="primary"
                     plain>新增服务</el-button>
          <el-button size="mini"
                     type="primary"
                     plain>批量复制至门店</el-button>
          <el-button size="mini"
                     type="primary">批量删除</el-button>
        </div>
        <el-button size="mini"
                   type="primary"
                   plain>查看规格</el-button>
      </div>
    </div>
    <div class="table"
         style="flex: 1">
      <el-table :data="tableData">
        <el-table-column prop="name"
                         fixed
                         show-overflow-tooltip
                         label="服务名称"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltips
                         label="原价(元)">
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
</template>

<script>
export default {
  name: 'goodsWarehouse',
  data () {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
