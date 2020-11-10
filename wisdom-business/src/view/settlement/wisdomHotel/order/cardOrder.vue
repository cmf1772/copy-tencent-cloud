<template>
  <div class="orderList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">会员开卡管理-会员开卡订单</p>
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
            <el-select v-model="shopValue"
                       style="width: 150px"
                       size="mini"
                       class="mr ml"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="开卡方式"
                         value="1"></el-option>
              <el-option label="充值方式"
                         value="2"></el-option>
              <el-option label="付费方式"
                         value="3"></el-option>
            </el-select>
            <el-button size="mini"
                       class="mr ml">导出记录</el-button>
          </div>
          <!-- <div>
            <el-input placeholder="请输入关键字"
                      style="width: 300px; margin: 0"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml">
              <el-select v-model="sleValue"
                         style="width: 100px"
                         slot="prepend"
                         placeholder="请选择">
                <el-option label="订单编号"
                           value="1"></el-option>
                <el-option label="押金退款编号"
                           value="2"></el-option>
              </el-select>
              <el-button slot="append"
                         size="mini"
                         icon="el-icon-search"></el-button>
            </el-input>
          </div> -->
        </div>
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
                           label="订单金额(元)">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="会员姓名">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="手机号码">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="开卡方式">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付时间">
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