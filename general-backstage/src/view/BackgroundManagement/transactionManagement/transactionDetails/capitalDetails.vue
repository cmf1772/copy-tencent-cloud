<template>
  <div class="creditDetails">
    <div class="top_button">
      <div class="top_left">
        <span>会员：</span>
        <el-input v-model="sName"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>类型：</span>
        <el-select v-model="type_value"
                   clearable
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <span>收支：</span>
        <el-select v-model="sz_value" 
                   clearable
                   placeholder="请选择">
          <el-option v-for="item in options1"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <span>时间：</span>
        <el-date-picker v-model="time_value"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>

      </div>
      <div class="top_right">
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="create()">
          搜索
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <p style="margin: 10px 0 10px 10px">收入：<span class="redColor">{{s_value}}</span> 支出：<span class="redColor">{{z_value}}</span></p>
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="money_id"
                           show-overflow-tooltip
                           label="会员"
                           width="180">
          </el-table-column>
          <el-table-column prop="type"
                           show-overflow-tooltip
                           label="交易类型">
          </el-table-column>
          <el-table-column prop="money_reason"
                           show-overflow-tooltip
                           label="支付类别">
          </el-table-column>
          <el-table-column prop="money_sess"
                           show-overflow-tooltip
                           label="交易单号">
          </el-table-column>
          <el-table-column prop="money_add"
                           show-overflow-tooltip
                           label="收支">
          </el-table-column>
          <el-table-column prop="money_left"
                           show-overflow-tooltip
                           label="可用余额">
          </el-table-column>
          <el-table-column prop="reg_time"
                           show-overflow-tooltip
                           label="创建时间">
          </el-table-column>
          <el-table-column prop="status"
                           show-overflow-tooltip
                           label="状态">
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChangeFun"
                         :current-page="currentPage"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size="page_size"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="totalData">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'creditDetails',

  data () {
    return {
      time: [],
      status: '',
      type_value: '',
      sz_value: '',
      time_value: [],
      options: [
        { value: '注册赠送', label: '注册赠送' },
        { value: '管理员设置', label: '管理员设置' },
        { value: '商铺开张', label: '商铺开张' },
        { value: '商铺升级', label: '商铺升级' },
        { value: '商铺续费', label: '商铺续费' },
        { value: '预付款充值', label: '预付款充值' },
        { value: '购买模板', label: '购买模板' },
        { value: '短信充值', label: '短信充值' },
        { value: '取消订单', label: '取消订单' },
        { value: '购物', label: '购物' },
        { value: '分账', label: '分账' },
        { value: '退货', label: '退货' },
        { value: '积分购买', label: '积分购买' },
        { value: '保证金', label: '保证金' },
        { value: '消保申请', label: '消保申请' }
      ],
      options1: [
        { value: 1, label: '收入' },
        { value: 2, label: '支出' }
      ],
      sName: '',
      tableData: [],
      s_value: '',
      z_value: '',
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
    }
  },
  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getMoneyPageList({
        page: this.currentPage,
        page_size: this.page_size,
        ps_member: this.sName,
        mt: this.type_value,
        st: this.sz_value,
        b_time: this.time_value[0],
        e_time: this.time_value[1],
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
        this.s_value = res.data.income_money
        this.z_value = res.data.cost_money
      })
    },

    add () {
      this.$router.push('/device/edit?nameType=新建设备')

    },
    editor () {
      this.$router.push('/device/edit?nameType=修改设备')
    },
     // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },
    handleSizeChange (val) {
      this.page_size = val
      this.create()
    },
  }
}
</script>

<style lang="scss" scoped>
.creditDetails {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
    overflow: auto;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
