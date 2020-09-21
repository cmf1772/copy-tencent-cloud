<template>
  <div class="performanceDetails bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">门店业绩分成明细</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">

            <el-button size="mini"
                       class="mr">导出明细</el-button>
            <el-select v-model="shopValue"
                       style="width: 100px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="更新时间"
                         value="1"></el-option>
              <el-option label="交易时间"
                         value="2"></el-option>
            </el-select>
            <el-date-picker v-model="value1"
                            size="mini"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <el-input placeholder="请输入交易号"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="flexRC mt">
          <el-select v-model="shopValue"
                     style="width: 130px"
                     size="mini"
                     class="mr"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="订单来源"
                       value="1"></el-option>
            <el-option label="内部订单"
                       value="2"></el-option>
            <el-option label="外部订单"
                       value="3"></el-option>
          </el-select>
          <el-select v-model="shopValue"
                     style="width: 130px"
                     size="mini"
                     class="mr"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="单据类型"
                       value="1"></el-option>
            <el-option label="普通订单"
                       value="2"></el-option>
            <el-option label="售后订单"
                       value="3"></el-option>
            <el-option label="消费订单"
                       value="4"></el-option>
          </el-select>
          <el-select v-model="pValue"
                     class="mr"
                     style="width: 100px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="销售业绩"
                       value="1"></el-option>
            <el-option label="发货业绩"
                       value="2"></el-option>
            <el-option label="归属业绩"
                       value="2"></el-option>
          </el-select>
          <el-select v-model="pValue"
                     class="mr"
                     style="width: 100px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="全部店面"
                       value="1"></el-option>
          </el-select>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="更新时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="业绩类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="门店名称">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="业绩分成比例">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="业绩分成金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关联交易单号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="单据类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交易时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交易金额">
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
  name: 'performanceDetails',
  data () {
    return {
      pValue: '1',
      value1: '',
      state: [{
        value: '1',
        label: '单品分类'
      }, {
        value: '2',
        label: '未分类'
      }],
      stateValue: '1',
      sleValue: '1',
      search: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      shopValue: '1',
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