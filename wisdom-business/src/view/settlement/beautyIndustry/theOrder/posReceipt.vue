<template>
  <div class="posReceipt flexColumn">
    <p class="text">
      POS订单管理
    </p>

    <div class="conent_box flexColumn"
         style="flex: 1;">
      <div class="c_box flexJC">
        <div class="flexRC">
          <i class="el-icon-refresh s"></i>
          <el-date-picker v-model="value1"
                          class="ml"
                          size="mini"
                          style="width: 250px"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
          <el-select v-model="shopValue"
                     class="ml"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="全部"
                       value="1"></el-option>
            <el-option label="全部门店"
                       value="2"></el-option>
          </el-select>
          <el-select v-model="shopValue"
                     class="ml"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="系统收银员"
                       value="1"></el-option>
            <el-option label="全部收银员"
                       value="2"></el-option>
          </el-select>
          <el-select v-model="shopValue"
                     class="ml"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="订单状态"
                       value="1"></el-option>
            <el-option label="待支付"
                       value="2"></el-option>
            <el-option label="已完成"
                       value="3"></el-option>
            <el-option label="已取消"
                       value="3"></el-option>
          </el-select>
        </div>
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
                           label="订单编号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltips
                           label="订单总额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="收银员">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="所属门店">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单状态">
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
  </div>
</template>

<script>
export default {
  name: 'posReceipt',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
