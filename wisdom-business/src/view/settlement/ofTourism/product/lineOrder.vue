<template>
  <div class="lineList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">线路列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <el-select v-model="stateValue"
                       style="width: 100px"
                       class="mr"
                       slot="prepend"
                       size="mini"
                       placeholder="请选择">
              <el-option label="全部订单"
                         value="1"></el-option>
              <el-option label="已完成"
                         value="2"></el-option>
              <el-option label="待支付"
                         value="3"></el-option>
              <el-option label="已取消"
                         value="4"></el-option>
            </el-select>

            <el-select v-model="stateValue"
                       style="width: 100px"
                       class="mr ml"
                       slot="prepend"
                       size="mini"
                       placeholder="请选择">
              <el-option label="订单涞源"
                         value="1"></el-option>
              <el-option label="线上"
                         value="2"></el-option>
              <el-option label="线下"
                         value="3"></el-option>
            </el-select>

            <el-select v-model="stateValue"
                       style="width: 100px"
                       class="mr ml"
                       slot="prepend"
                       size="mini"
                       placeholder="请选择">
              <el-option label="预定时间"
                         value="1"></el-option>
              <el-option label="出游时间"
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

            <el-select v-model="stateValue"
                       style="width: 100px"
                       class="mr ml"
                       slot="prepend"
                       size="mini"
                       placeholder="请选择">
              <el-option label="手机号"
                         value="1"></el-option>
              <el-option label="联系人"
                         value="2"></el-option>
              <el-option label="线路名称"
                         value="3"></el-option>
              <el-option label="订单编号"
                         value="4"></el-option>
            </el-select>
          </div>
          <div class="flexRC">
            <el-button size="mini">导出订单</el-button>
            <el-button size="mini">导出游客</el-button>
            <el-input placeholder="请输入内容"
                      style="width: 200px"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml">
              <el-button slot="append"
                         size="mini"
                         icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <div class="flexJC mt">
          <el-button type="primary"
                     size="mini"
                     plain>新增订单</el-button>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="线路产品"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="实付金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="联系人">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="联系人手机号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单状态">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="维权状态"
                           width="120"
                           min-width="60">
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
  name: 'lineList',
  data () {
    return {
      stateValue: '1',
      stateValue1: '',
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
.lineList {
  width: 100%;
  height: 100%;
}
</style>