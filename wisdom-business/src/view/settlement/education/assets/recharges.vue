<template>
  <div class="recharges flexColumn">
    <p class="text">
      充值
    </p>
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="充值"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <el-form :model="ruleForm"
                   :rules="rules"
                   ref="ruleForm"
                   label-width="150px"
                   class="demo-ruleForm">
            <el-form-item label="店铺名称："
                          prop="name">
              <p class="text">xxx</p>
            </el-form-item>
            <el-form-item label="收款账户："
                          prop="region">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="店铺余额账户"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="账户可用余额："
                          required>
              <p class="text">0.00 元</p>
            </el-form-item>
            <el-form-item label="充值金额："
                          prop="delivery">
              <el-input placeholder="请输入内容"
                        size="mini"
                        style="width: 200px"
                        v-model="input2">
                <template slot="append">元</template>
              </el-input>
            </el-form-item>
          </el-form>
          <div class="c_box mt">
            <p class="text mb">使用遇到问题？</p>
            <p class="text mb mt">1. 输入充值金额后，为什么无法成功充值？</p>

            <p class="minText mb">答：通过微信、支付宝线上扫码充值，会受到充值额度的限制，建议你分批进行充值，每次充值金额不超过10000元；</p>
            <p class="minText mb">通过线下转账充值，金额没有受限制，需要正确填写你当时对公打款至有赞公司的付款金额。</p>
            <p class="minText mb">例如：某商家分次给有赞打款10000元和5800元。该商家需要店铺余额充值填写两次付款信息，金额分别是10000元和5800元。如果填写金额合计数15800元，系统审核失败。</p>

            <p class="text mb mt">2. 充值成功了，为什么收支明细里没有记录？</p>

            <p class="minText mb">答：充值金额是实时到账的，可到资产-对账单-对账单明细中查询充值记录，若无查到记录可能是系统延时引起的，你可稍后查看。若超过一天仍未显示，请与有赞客服联系。</p>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="充值记录"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn"
               style="flex: 1">
            <div class="c_box">
              <div class="flexJC">
                <div class="flexRC">
                  <p class="minText mr ">缴纳时间:</p>
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
                    <el-option label="全部"
                               value="1">
                    </el-option>
                    <el-option label="充值中"
                               value="2">
                    </el-option>
                    <el-option label="充值成功"
                               value="3">
                    </el-option>
                    <el-option label="充值失败"
                               value="4">
                    </el-option>
                  </el-select>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">保证金状态:</p>
                  <el-select v-model="search"
                             clearable
                             class="mr ml"
                             size="mini"
                             placeholder="">
                    <el-option label="全部"
                               value="1">
                    </el-option>
                    <el-option label="微信"
                               value="2">
                    </el-option>
                    <el-option label="支付宝"
                               value="3">
                    </el-option>
                    <el-option label="银行卡"
                               value="4">
                    </el-option>
                    <el-option label="转账凭证"
                               value="5">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="flexRC mt">

                <el-button type="primary"
                           class="mr"
                           size="mini"
                           plain>筛选</el-button>

                <p class="minText blueColor s ml ">清空筛选条件</p>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="充值时间"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="名称">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="业务单号|支付流水号">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="金额（元）">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="充值状态">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="操作人">
                </el-table-column>
                <el-table-column show-overflow-tooltip
                                 label="支付方式"
                                 width="270"
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
                      <!-- <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button> -->
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div class="btootm_paination c_box mt">
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      type: '1',
      state: [{
        value: '1',
        label: '更多'
      }, {
        value: '2',
        label: '修改装修权限'
      }, {
        value: '3',
        label: '修改线上库存模式'
      }, {
        value: '4',
        label: '修改线下库存模式'
      }, {
        value: '5',
        label: '修改门店权限'
      }, {
        value: '6',
        label: '修改发票模版'
      }, {
        value: '7',
        label: '修改分成方案'
      }],
      width: 0,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  },
  mounted () {
    this.width = this.$refs.c_box.clientWidth
  }
}
</script>

<style lang="scss">
.el-tabs .el-tabs__content {
  flex: 1;
  .el-tab-pane {
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
</style>