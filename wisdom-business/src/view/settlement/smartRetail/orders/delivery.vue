<template>
  <div class="allOrders bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">订单管理-发货管理</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">

      <div class="c_box">
        <div class="flexRC">
          <el-select v-model="date"
                     style="width: 100px"
                     slot="prepend"
                     size="mini"
                     placeholder="请选择">
            <el-option label="发货时间"
                       value="1"></el-option>
            <el-option label="下单时间"
                       value="2"></el-option>
            <el-option label="支付时间"
                       value="3"></el-option>
          </el-select>
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
          <el-select v-model="date"
                     style="width: 100px"
                     class="mr"
                     slot="prepend"
                     size="mini"
                     placeholder="请选择">
            <el-option label="待发货"
                       value="1"></el-option>
          </el-select>
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
              <el-option label="商家编号"
                         value="2"></el-option>
              <el-option label="客户名称"
                         value="3"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <div class="flexRC mt">
          <p class="minText mr">配送方式</p>
          <el-select v-model="date"
                     class="mr"
                     style="width: 100px"
                     slot="prepend"
                     size="mini"
                     placeholder="请选择">
            <el-option label="不限"
                       value="1"></el-option>
            <el-option label="商家配送"
                       value="2"></el-option>
            <el-option label="同城即时配送"
                       value="3"></el-option>
          </el-select>
          <p class="minText mr">营销类型</p>
          <el-select v-model="date"
                     class="mr"
                     style="width: 100px"
                     slot="prepend"
                     size="mini"
                     placeholder="请选择">
            <el-option label="全部订单"
                       value="1"></el-option>
            <el-option label="普通订单"
                       value="2"></el-option>
            <el-option label="评团订单"
                       value="3"></el-option>
          </el-select>
          <p class="minText mr">门店</p>
          <el-select v-model="date"
                     class="mr"
                     style="width: 100px"
                     slot="prepend"
                     size="mini"
                     placeholder="请选择">
            <el-option label="全部门店"
                       value="1"></el-option>
          </el-select>
          <p class="minText mr">仓库</p>
          <el-select v-model="date"
                     class="mr"
                     style="width: 100px"
                     slot="prepend"
                     size="mini"
                     placeholder="请选择">
            <el-option label="全部仓库"
                       value="1"></el-option>
          </el-select>
        </div>

        <div class="flexRC mt">
          <p class="minText mr">批量操作：</p>
          <el-button size="mini">批量打印配送单</el-button>
          <el-button size="mini">批量打印快递单</el-button>
          <el-button size="mini">批量发货</el-button>
          <el-button size="mini">批量分配</el-button>
          <el-button size="mini">批量交付</el-button>
          <el-button size="mini">批量标记</el-button>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="商品信息"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="实收金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="客户信息">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="配送及支付方式">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="配送信息及备注">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单状态">
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
  name: 'allOrders',
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