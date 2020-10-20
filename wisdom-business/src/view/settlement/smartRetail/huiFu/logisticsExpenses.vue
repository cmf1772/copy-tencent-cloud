<template>
  <div class="splitOrder bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">物流费用</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexRC">
          <p class="minText mr">下单时间：</p>
          <el-date-picker v-model="value1"
                          size="mini"
                          style="width: 200px"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <div class="flexRC mt">
          <p class="minText mr">配送状态：</p>
          <el-select v-model="stateValue"
                     class=" mr"
                     style="width: 120px; margin-left: 0"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="全部"
                       value="1"></el-option>
            <el-option label="已下单（等待配送员接单）"
                       value="2"></el-option>
            <el-option label="已接单"
                       value="3"></el-option>
            <el-option label="已分配骑手"
                       value="4"></el-option>
          </el-select>
          <p class="minText mr">结算状态：</p>
          <el-select v-model="stateValue"
                     class=" mr"
                     style="width: 120px; margin-left: 0"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="全部"
                       value="1"></el-option>
            <el-option label="已冻结"
                       value="2"></el-option>
            <el-option label="已完成"
                       value="3"></el-option>
          </el-select>
        </div>
        <div class="flexRC mt">
          <el-button type="primary"
                     size="mini">查询</el-button>
          <el-button size="mini">下载</el-button>
        </div>
        <div class="flexRC mt minText">
          查询结果合计：0单总运费<span style="color:#FFB025">0元</span>
        </div>
      </div>

      <div class="table flexJC">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="订单编号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="销售门店">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单实收">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="需要分出金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="分账单创建时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="更新时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="超额状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="确认状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="明细状态">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="look(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="edit(scope.$index, scope.row)">投放</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">分配门店</el-button>
              </div>
            </template>
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
  name: 'splitOrder',
  data () {
    return {
      value1: '',
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