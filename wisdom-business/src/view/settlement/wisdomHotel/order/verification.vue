<template>
  <div class="orderList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">订单-核销记录列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">
            <el-date-picker v-model="value1"
                            style="width: 320px"
                            size="mini"
                            class="mr"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
            </el-date-picker>
            <el-button size="mini"
                       class="mr ml">导出记录</el-button>
          </div>
          <div>
            <el-select v-model="shopValue"
                       style="width: 150px"
                       size="mini"
                       class="mr ml"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="普通商品"
                         value="1"></el-option>
              <el-option label="现金券"
                         value="2"></el-option>
              <el-option label="预约"
                         value="6"></el-option>
              <el-option label="记次型商品"
                         value="6"></el-option>
            </el-select>
            <el-select v-model="shopValue"
                       style="width: 150px"
                       size="mini"
                       slot="prepend"
                       class="ml"
                       placeholder="请选择">
              <el-option label="订单编号"
                         value="1"></el-option>
              <el-option label="凭证"
                         value="2"></el-option>
              <el-option label="商品名称"
                         value="4"></el-option>
            </el-select>
            <el-input placeholder="请输入关键字"
                      style="width: 300px; margin: 0"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml">
              <el-button slot="append"
                         size="mini"
                         icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="商品名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="商品类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="凭证金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="凭证">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关联订单号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="核销门店">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="核销时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="顾客">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="核销方式">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="核销账号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
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
  name: 'orderList',
  data () {
    return {
      value: true,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      date: '1',
      search: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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