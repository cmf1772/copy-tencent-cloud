<template>
  <div class="SMSSettings"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 短信平台设置：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="140px">
      <el-form-item label="短信剩ç余数量">
        {{noteNum}}条
      </el-form-item>
      <el-form-item label="当前预存款">
        {{Total}} 元
      </el-form-item>
      <el-form-item label="短信充值">
        <el-select v-model="form.num"
                   clearable
                   placeholder="">
          <el-option label="50元"
                     value="50"></el-option>
          <el-option label="100元"
                     value="100"></el-option>
          <el-option label="200元"
                     value="200"></el-option>
          <el-option label="500元"
                     value="500"></el-option>
          <el-option label="1000元"
                     value="1000"></el-option>
        </el-select>
        <span @click="supplierApplySms"
              class="s">预付购买</span>
        <span class="redColor"> 您可以购得短信{{shopNum[form.num]}}条</span>
      </el-form-item>
      <el-form-item label="自定义发送">
        <el-button type="primary">自定义发送</el-button>
      </el-form-item>
      <el-form-item label="现场消费验证">
        <el-checkbox v-model="form.mm_sms_group_order">发送</el-checkbox>
      </el-form-item>
      <el-form-item label="订单支付通知店主">
        <el-checkbox v-model="form.mm_sms_order_pay_to_shop">发送</el-checkbox>
      </el-form-item>
      <el-form-item label="使用者发送"
                    style="width: 100%">

        <div class="form-item">
          <div class="f-t-t">
            <el-checkbox v-model="form.mm_sms_order">已发送</el-checkbox>
            <el-input v-model="form.mm_sms_message1"
                      type="textarea"
                      :rows="12"></el-input>
          </div>
          <div class="f-t-t">
            <el-checkbox v-model="form.mm_sms_receipt">已付款</el-checkbox>
            <el-input v-model="form.mm_sms_message2"
                      type="textarea"
                      :rows="12"></el-input>
          </div>
          <div class="f-t-t">
            <el-checkbox v-model="form.mm_sms_delivery">已发货</el-checkbox>
            <el-input v-model="form.mm_sms_message3"
                      type="textarea"
                      :rows="12"></el-input>
          </div>
          <div class="f-t-t">
            <el-checkbox v-model="form.mm_sms_comment">已评价</el-checkbox>
            <el-input v-model="form.mm_sms_message4"
                      type="textarea"
                      :rows="12"></el-input>
          </div>
        </div>

      </el-form-item>
    </el-form>
    <el-button type="primary"
               @click="setSmsSet"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'SMSSettings',

  data () {
    return {
      form: {
        mm_sms_group_order: null,
        mm_sms_order_pay_to_shop: null,
        mm_sms_order: null,
        mm_sms_message1: '',
        mm_sms_receipt: null,
        mm_sms_message2: '',
        mm_sms_delivery: null,
        mm_sms_message3: '',
        mm_sms_comment: null,
        mm_sms_message4: '',
        num: ''
      },
      noteNum: '',
      Total: '',
      array: ['mm_sms_group_order', 'mm_sms_order', 'mm_sms_receipt', 'mm_sms_delivery', 'mm_sms_comment', 'mm_sms_order_pay_to_shop'],
      height: window.innerHeight - 100 + 'px',
      drivers: [],
      shopNum: {},
      submitBtn: {
        loading: false,
        text: '提交'
      },
    }
  },

  mounted () {
    this.getSmsSet()
  },

  methods: {
    setSmsSet () {
      this.$api.setSmsSet({
        mm_sms_group_order: this.form.mm_sms_group_order ? 1 : 0,
        mm_sms_order_pay_to_shop: this.form.mm_sms_order_pay_to_shop ? 1 : 0,
        mm_sms_order: this.form.mm_sms_order ? 1 : 0,
        mm_sms_message1: this.form.mm_sms_message1,
        mm_sms_receipt: this.form.mm_sms_receipt ? 1 : 0,
        mm_sms_message2: this.form.mm_sms_message2,
        mm_sms_delivery: this.form.mm_sms_delivery ? 1 : 0,
        mm_sms_message3: this.form.mm_sms_message3,
        mm_sms_comment: this.form.mm_sms_comment ? 1 : 0,
        mm_sms_message4: this.form.mm_sms_message4,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
      })
    },

    getSmsSet () {
      this.$api.getSmsSet({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        res.data.data.forEach(item => {
          if (this.array.indexOf(item.cf_name) > -1) {
            this.$set(this.form, item.cf_name, item.cf_value === '0' ? false : true)
          } else {
            this.$set(this.form, item.cf_name, item.cf_value)
          }
        })
      })

      this.$api.getSmsMoneyNum({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.shopNum = res.data
      })

      this.$api.getTotalShopMoney({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.Total = res.data
      })

      this.getTotalShopSms()
    },

    getTotalShopSms () {
      this.$api.getTotalShopSms({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.noteNum = res.data
      })
    },

    supplierApplySms () {
      this.$api.supplierApplySms({
        num: this.form.num,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
        this.getTotalShopSms()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  justify-content: space-between;
}
.f-t-t {
  width: 18%;
}
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.SMSSettings {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 100px;
  overflow: auto;
}

.upload-wrap {
  width: 100%;
  height: 40px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  span {
    z-index: 1;
    line-height: 40px;
    color: #4bb3ff;
    font-size: 16px;
    margin-left: 30px;
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 2;
  }
}
</style>