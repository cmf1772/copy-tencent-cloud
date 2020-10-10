<template>
  <div class="myOrder bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">订单管理-我的应用</p>
    </div>

    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane label="全部订单"
                       name="first"></el-tab-pane>
          <el-tab-pane label="待处理"
                       name="second"></el-tab-pane>
          <el-tab-pane label="已完成"
                       name="success"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="订单编号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="服务信息">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="服务规格">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="价格">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="提交时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单状态">
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
  name: 'myOrder',
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