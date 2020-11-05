<template>
  <div class="goodsWarehouse flexColumn conent_box">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="售卖明细"
                   name="first"></el-tab-pane>
      <el-tab-pane label="核销明细"
                   name="second"></el-tab-pane>
    </el-tabs>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="服务项目"
                   name="first"></el-tab-pane>
      <el-tab-pane label="服务套餐"
                   name="second"></el-tab-pane>
      <el-tab-pane label="卡项"
                   name="third"></el-tab-pane>
    </el-tabs>
    <div class="bg_color minText"
         style="padding: 10px">
      注：服务项目的售卖明细仅可查看直接购买模式下的商品；您通过复选框选择的数据信息不会对导出数据操作有影响
    </div>
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
          <p class="mr minText">购买门店</p>
          <el-select v-model="shopValue"
                     style="width: 150px"
                     class="ml"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="全部岗位"
                       value="1"></el-option>
          </el-select>
          <p class="mr ml minText">核销码状态</p>
          <el-select v-model="shopValue"
                     style="width: 150px"
                     class="ml"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="全部"
                       value="1"></el-option>
            <el-option label="未使用"
                       value="2"></el-option>
            <el-option label="已完成"
                       value="3"></el-option>
            <el-option label="已过期"
                       value="4"></el-option>
            <el-option label="已作废"
                       value="5"></el-option>
          </el-select>
        </div>
        <el-button size="mini"
                   type="primary"
                   plain>导出数据</el-button>
      </div>
    </div>
    <div class="table"
         style="flex: 1">
      <el-table :data="tableData">
        <el-table-column prop="name"
                         fixed
                         show-overflow-tooltip
                         label="购买时间"
                         width="180">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltips
                         label="服务项目名称">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="核销码">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="核销状态">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="姓名">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="微信昵称">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="手机号">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="订单编号">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="购买门店">
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
