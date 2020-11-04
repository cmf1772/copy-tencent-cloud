<template>
  <div class="orderManagement flexColumn">
    <p class="text">
      会员卡订单管理
    </p>
    <div class="conent_box flexColumn"
         style="flex: 1;">
      <div class="c_box flexJC">
        <div class="flexRC">
          <el-input placeholder="请输入内容"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
          <p class="minText ml">支付时间</p>
          <el-date-picker v-model="value1"
                          class="ml"
                          size="mini"
                          style="width: 250px"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>

        </div>
        <el-button type="primary"
                   size="mini">下载</el-button>
      </div>
      <div class="table"
           style="flex: 1">
        <el-table :data="tableData">
          <el-table-column prop="name"
                           fixed
                           show-overflow-tooltip
                           label="用户昵称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltips
                           label="手机号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="会员卡号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="开卡方式(含升级)">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付门店">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="会员等级">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单编号">
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
  name: 'orderManagement',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
