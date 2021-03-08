<template>
  <div class="toApplyFor">
    <p>提现是指把您商城账户中的余额提取到您私人的支付宝或银行卡中</p>
    <p>提现需向第三方交付手续费，每次提现需代第三方收取 <span class="blueColor">1%</span> 的手续费</p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="您的商城账号："
                    prop="displayName">
        <span>***********</span>
      </el-form-item>
      <el-form-item label="账户类型："
                    prop="displayName"
                    @change="changeAcction">
        <el-radio v-model="form.radio"
                  label="0">支付宝</el-radio>
        <el-radio v-model="form.radio"
                  label="1">银行</el-radio>
      </el-form-item>
      <el-form-item label="开户名："
                    prop="member_name">
        <el-input v-model="form.member_name"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="您的提现账号："
                    prop="account">
        <el-input v-model="form.account"
                  placeholder></el-input>
        <p>您当前可用资金账户金额：<span class="redColor">￥0.00 </span> 冻结金额：￥201.80</p>
      </el-form-item>
      <el-form-item label="开户行："
                    v-if="form.radio === '1'"
                    prop="displayName">
        <el-input v-model="form.bank"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="您的提现金额："
                    prop="money">
        <el-input v-model="form.money"
                  placeholder></el-input>
      </el-form-item>

    </el-form>
    <el-button type="primary"
               style="margin-left: 35%; width: 100px"
               @click="applyWithdraw">确定</el-button>
    <p style="margin-top: 20px"> <span class="redColor">※温馨提醒：</span> 请检查填写的账号类别及账号，确认是提现至您本人相应的账户中 (如遇到问题，可咨询客服 <span class="redColor">13810173183</span> 点击这里给我发消息 )</p>
    <p style="margin-top: 20px">提现记录</p>
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
      <el-table-column prop="money"
                       show-overflow-tooltip
                       label="提现金额"
                       width="180">
      </el-table-column>
      <el-table-column prop="real_money"
                       show-overflow-tooltip
                       label="实收金额"
                       width="180">
      </el-table-column>
      <el-table-column prop="sn"
                       show-overflow-tooltip
                       label="流水号">
      </el-table-column>
      <el-table-column prop="reg_time"
                       show-overflow-tooltip
                       label="提现时间">
      </el-table-column>
      <el-table-column show-overflow-tooltip
                       prop="account"
                       label="账号">
      </el-table-column>
      <el-table-column show-overflow-tooltip
                       prop="type"
                       label="账号类型">
      </el-table-column>
      <el-table-column show-overflow-tooltip
                       label="状态"
                       width="150"
                       prop="status_text"
                       min-width="60">

      </el-table-column>
    </el-table>
    <div class="btootm_paination">
      <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChangeFun"
                     :current-page="currentPage"
                     :page-sizes="[10, 20, 30, 40]"
                     :page-size="page_size"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toApplyFor',
  data () {
    return {
      form: {
        radio: "0",
        member_name: '',
        account: '',
        money: '',
        bank: '',
      },
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10
    }
  },

  methods: {
    changeAcction () {

    },

    // t提交
    applyWithdraw () {
      this.$api.applyWithdraw({
        type: this.form.radio,
        member_name: this.form.member_name,
        account: this.form.account,
        money: this.form.money,
        bank: this.form.bank,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
        this.getMyWithdrawPageList()
      })
    },

    getMemberAccountInfo () {
      this.$api.getMemberAccountInfo({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = {
          radio: res.data.type + '',
          member_name: res.data.member_name,
          account: res.data.account,
          money: res.data.money,
        }
      })
    },

    getMyWithdrawPageList () {
      this.$api.getMyWithdrawPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        type: 0,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getMyWithdrawPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getMyWithdrawPageList()
    },
  },

  mounted () {
    this.getMemberAccountInfo()
    this.getMyWithdrawPageList()
  },
}
</script>
<style lang="scss" scoped>
.el-form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}

.toApplyFor {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  background: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .el-table {
    max-height: 150px;
    overflow: auto;
  }
}
</style>
