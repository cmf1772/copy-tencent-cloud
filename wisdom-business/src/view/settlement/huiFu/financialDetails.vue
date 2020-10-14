<template>
  <div class="financialDetails bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">财务明细</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">

        <div class="flexJC ">
          <div>
            <el-button size="mini">导出报表</el-button>
            <el-select v-model="sleValue"
                       style="width: 100px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="全部门店"
                         value="1"></el-option>
              <el-option label="智慧零售"
                         value="2"></el-option>
            </el-select>
          </div>
          <div>
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
        </div>
        <div class="flex mt">
          <el-input placeholder="请输入内容"
                    style="width: 300px; margin: 0"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-select v-model="sleValue"
                       style="width: 100px"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="第三方交易单号"
                         value="1"></el-option>
              <el-option label="关联单号"
                         value="2"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>

          <el-button size="mini"
                     class="ml">查询</el-button>
          <el-button size="mini">清空</el-button>

          <el-switch v-model="type"
                     class="ml"
                     inactive-text="筛选条件">
          </el-switch>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="交易时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="第三方交易单号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关联单号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="收支类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交易场景">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付模式">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付方式">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交易金额">
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
  name: 'financialDetails',
  data () {
    return {
      type: true,
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