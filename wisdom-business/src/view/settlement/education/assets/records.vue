<template>
  <div class="records bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">对账单明细</p>
    </div>
    <el-button type="primary"
               style="width: 100px"
               class="mt"
               size="mini"
               plain>新建班级</el-button>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="bg_color minText"
           style="padding:10px; color:#000">
        <p class=" s">为了更好的对账体验，部分费项名称将于2020年9月25日进行更新。 <span class="blueColor s">查看详情</span></p>
      </div>

      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <p class="minText mr ">缴纳时间:</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       style="width: 100px"
                       size="mini"
                       placeholder="">
              <el-option label="入账时间"
                         value="1">
              </el-option>
              <el-option label="下单时间"
                         value="2">
              </el-option>
            </el-select>
            <el-date-picker v-model="value1"
                            style="width: 300px"
                            size="mini"
                            class="mr"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
            </el-date-picker>
          </div>
          <div class="flexRC">
            <p class="minText mr ">保证金类型:</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="">
              <el-option label="营销资金"
                         value="1">
              </el-option>
              <el-option label="店铺余额"
                         value="2">
              </el-option>
              <el-option label="保证金"
                         value="3">
              </el-option>
              <el-option label="广告投放金"
                         value="4">
              </el-option>
              <el-option label="跨境资金"
                         value="5">
              </el-option>
              <el-option label="标记资金"
                         value="6">
              </el-option>
              <el-option label="店铺收益"
                         value="7">
              </el-option>
              <el-option label="储值资金"
                         value="8">
              </el-option>
              <el-option label="现金"
                         value="9">
              </el-option>
              <el-option label="礼品卡资金"
                         value="10">
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="flexJC mt">
          <div class="flexRC">
            <p class="minText mr ">账户：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="营销资金"
                         value="2">
              </el-option>
              <el-option label="店铺余额"
                         value="3">
              </el-option>
              <el-option label="保证金"
                         value="4">
              </el-option>
              <el-option label="广告投放金"
                         value="5">
              </el-option>
              <el-option label="跨境资金"
                         value="6">
              </el-option>
              <el-option label="标记资金"
                         value="7">
              </el-option>
              <el-option label="店铺收益"
                         value="8">
              </el-option>
              <el-option label="储值资金"
                         value="9">
              </el-option>
              <el-option label="现金"
                         value="10">
              </el-option>
              <el-option label="礼品卡资金"
                         value="11">
              </el-option>
            </el-select>
          </div>

          <div class="flexRC">
            <p class="minText mr ">类型：</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="">
              <el-option label="采购"
                         value="1">
              </el-option>
              <el-option label="海关税费"
                         value="2">
              </el-option>
              <el-option label="提现"
                         value="3">
              </el-option>
              <el-option label="配送费退回"
                         value="4">
              </el-option>
              <el-option label="跨境结算"
                         value="5">
              </el-option>
              <el-option label="奖励"
                         value="6">
              </el-option>
              <el-option label="信息技术服务费"
                         value="7">
              </el-option>
              <el-option label="消费者保障服务费-退货包运费"
                         value="8">
              </el-option>
              <el-option label="佣金退回撤销-有赞分销"
                         value="9">
              </el-option>
              <el-option label="广告分润退回"
                         value="10">
              </el-option>
              <el-option label="交易手续费"
                         value="11">
              </el-option>
              <el-option label="平台服务费-有赞精选"
                         value="12">
              </el-option>
              <el-option label="退款"
                         value="13">
              </el-option>
              <el-option label="转账"
                         value="14">
              </el-option>
              <el-option label="快速回款还款失败退回"
                         value="15">
              </el-option>
              <el-option label="快速回款放款"
                         value="16">
              </el-option>
              <el-option label="佣金退回-有赞客"
                         value="17">
              </el-option>
              <el-option label="佣金-店铺"
                         value="18">
              </el-option>
              <el-option label="仲裁"
                         value="19">
              </el-option>
              <el-option label="佣金-有赞客"
                         value="20">
              </el-option>
              <el-option label="交易手续费-跨境结算"
                         value="21">
              </el-option>
              <el-option label="推荐有奖"
                         value="22">
              </el-option>
              <el-option label="软件服务费"
                         value="23">
              </el-option>
              <el-option label="静默账户管理费退回"
                         value="24">
              </el-option>
              <el-option label="退货包运费"
                         value="25">
              </el-option>
              <el-option label="转账退票"
                         value="26">
              </el-option>
              <el-option label="配送费"
                         value="27">
              </el-option>
              <el-option label="运费"
                         value="28">
              </el-option>
              <el-option label="佣金-代理商分红"
                         value="29">
              </el-option>
              <el-option label="爱逛推广佣金"
                         value="30">
              </el-option>
              <el-option label="广告投放金退款"
                         value="31">
              </el-option>
              <el-option label="收益发放"
                         value="32">
              </el-option>
              <el-option label="系统调账"
                         value="33">
              </el-option>
              <el-option label="订货商收入"
                         value="34">
              </el-option>
              <el-option label="爱逛推广佣金税费扣除"
                         value="35">
              </el-option>
              <el-option label="消费者保障服务费退回-退货包运费"
                         value="36">
              </el-option>
              <el-option label="平台服务费退回-有赞大号"
                         value="37">
              </el-option>
              <el-option label="佣金-销售员"
                         value="38">
              </el-option>
              <el-option label="充值"
                         value="39">
              </el-option>
              <el-option label="退卡"
                         value="40">
              </el-option>
              <el-option label="平台服务费-有赞供货商"
                         value="41">
              </el-option>
              <el-option label="佣金-有赞分销"
                         value="42">
              </el-option>
              <el-option label="充值手续费"
                         value="43">
              </el-option>
              <el-option label="银行退票退回"
                         value="44">
              </el-option>
              <el-option label="技术服务费"
                         value="45">
              </el-option>
              <el-option label="手续费补贴"
                         value="46">
              </el-option>
              <el-option label="推广费"
                         value="47">
              </el-option>
              <el-option label="转账失败退回"
                         value="48">
              </el-option>
              <el-option label="云服务费"
                         value="49">
              </el-option>
              <el-option label="资金归集"
                         value="50">
              </el-option>
              <el-option label="发票运费退回"
                         value="51">
              </el-option>
              <el-option label="奖励-订货商奖励"
                         value="52">
              </el-option>
              <el-option label="平台服务费退回-有赞分销"
                         value="53">
              </el-option>
              <el-option label="储值卡充值退款"
                         value="54">
              </el-option>
              <el-option label="转账手续费"
                         value="55">
              </el-option>
              <el-option label="交易手续费退回"
                         value="56">
              </el-option>
              <el-option label="平台服务费退回"
                         value="57">
              </el-option>
            </el-select>
          </div>

          <div class="flexRC">
            <p class="minText mr ">支付方式：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="花呗支付"
                         value="2">
              </el-option>
              <el-option label="凭证支付"
                         value="3">
              </el-option>
              <el-option label="微信支付"
                         value="4">
              </el-option>
              <el-option label="农行商E付"
                         value="5">
              </el-option>
              <el-option label="待结算"
                         value="6">
              </el-option>
              <el-option label="零钱支付"
                         value="7">
              </el-option>
              <el-option label="标记"
                         value="8">
              </el-option>
              <el-option label="余额支付"
                         value="9">
              </el-option>
              <el-option label="分期支付"
                         value="10">
              </el-option>
              <el-option label="POS刷卡"
                         value="11">
              </el-option>
            </el-select>
          </div>
        </div>

        <div class="flexJC mt">
          <div class="flexRC">
            <p class="minText mr ">渠道：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="其他"
                         value="2">
              </el-option>
              <el-option label="网店"
                         value="3">
              </el-option>
              <el-option label="门店"
                         value="4">
              </el-option>
            </el-select>
          </div>
          <div class="flexRC">
            <p class="minText mr ">类型：</p>
            <el-input placeholder="请输入内容"
                      v-model="input"
                      style="width: 200px"
                      size="mini"
                      clearable>
            </el-input>
          </div>
        </div>

        <div class="flexRC mt">
          <el-button type="primary"
                     size="mini">筛选</el-button>
          <el-button type="primary"
                     size="mini">导出报表</el-button>
          <el-button type="primary"
                     size="mini">查看报表</el-button>
          <p class="ml blueColor minText s">重置筛选条件</p>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="类型"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="入账时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="名称">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="业务单号 | 支付流水号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="账户">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="收支类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="金额（元）">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支付方式">
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
  name: 'records',
  data () {
    return {
      value: true,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      date: '1',
      search: '',
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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