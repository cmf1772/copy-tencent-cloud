<template>
  <div class="invoiceFinance bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">财务-电子发票</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">
            <p class="minText mr ml">申请时间</p>
            <el-date-picker v-model="value1"
                            size="mini"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
            <el-select v-model="sleValue"
                       style="width: 130px"
                       size="mini"
                       class="mr ml"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="全部"
                         value="1"></el-option>
              <el-option label="未开票"
                         value="2"></el-option>
              <el-option label="开票中"
                         value="3"></el-option>
              <el-option label="开票成功"
                         value="4"></el-option>
              <el-option label="开票失败"
                         value="5"></el-option>
            </el-select>
            <el-select v-model="sleValue"
                       style="width: 130px"
                       size="mini"
                       class="mr"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="红冲状态"
                         value="1"></el-option>
              <el-option label="未红冲"
                         value="2"></el-option>
              <el-option label="已红冲"
                         value="3"></el-option>
              <el-option label="红冲中"
                         value="4"></el-option>
              <el-option label="红冲失败"
                         value="5"></el-option>
            </el-select>
          </div>

          <div class="flexRC">
            <el-input placeholder="请输入内容"
                      style="width: 300px"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml">
              <el-select v-model="sleValue"
                         style="width: 100px"
                         slot="prepend"
                         placeholder="请选择">
                <el-option label="发票抬头"
                           value="1"></el-option>
                <el-option label="订单编号"
                           value="2"></el-option>
                <el-option label="发票代码"
                           value="3"></el-option>
                <el-option label="发票号码"
                           value="4"></el-option>
              </el-select>

              <el-button slot="append"
                         size="mini">查询</el-button>
            </el-input>
          </div>

        </div>
        <div class="flexRC mt">
          <el-select v-model="sleValue"
                     style="width: 130px"
                     size="mini"
                     class="mr"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="全部门店"
                       value="1"></el-option>
            <el-option label="智慧零售"
                       value="2"></el-option>
          </el-select>
          <el-button size="mini">批量开票</el-button>
          <el-button size="mini">批量导出</el-button>
        </div>
      </div>

      <div class="table">

        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="发票抬头及税号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="发票类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="发票金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="开票状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="红冲状态">
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
  name: 'invoiceFinance',
  data () {
    return {
      acIndex: 0,
      stateValue: '1',
      label: [{
        value: '1',
        label: '页面标签'
      }, {
        value: '2',
        label: '全部标签'
      }],
      labelValue: '1',
      stateValue: '1',
      sleValue: '1',
      search: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

  methods: {
    active (index) {
      this.acIndex = index
    },
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