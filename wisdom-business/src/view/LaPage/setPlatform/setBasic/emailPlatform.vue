<template>
  <div class="email_page" :style="{ height: heights }">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="140px"
      class="email_ruleForm"
      label-position="right"
    >
      <el-form-item label="邮件发送方式" prop="mm_mail_method">
        <el-select v-model="ruleForm.mm_mail_method" placeholder="请选择">
          <el-option label="SMTP" value="0"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邮件服务器发邮地址" prop="mm_mail_smtphost">
        <el-input v-model="ruleForm.mm_mail_smtphost"></el-input>
      </el-form-item>
      <el-form-item label="邮件端口" prop="mm_mail_smtpport">
        <el-input v-model="ruleForm.mm_mail_smtpport"></el-input>
        <p style="color: #999;">↑ 默认不需修改。</p>
      </el-form-item>
      <el-form-item label="发信人地址" prop="mm_mail_smtpfrom">
        <el-input v-model="ruleForm.mm_mail_smtpfrom"></el-input>
      </el-form-item>
      <el-form-item label="是否需要 AUTH LOGIN 验证" prop="mm_mail_smtpauth">
        <el-radio-group v-model="ruleForm.mm_mail_smtpauth">
          <el-radio :label="'0'">否</el-radio>
          <el-radio :label="'1'">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="验证用户名" prop="mm_mail_smtpuser">
        <el-input v-model="ruleForm.mm_mail_smtpuser"></el-input>
      </el-form-item>
      <el-form-item label="验证密码" prop="mm_mail_smtppass">
        <el-input v-model="ruleForm.mm_mail_smtppass"></el-input>
      </el-form-item>
      <el-form-item label="发件人名称" prop="mm_mail_name">
        <el-input v-model="ruleForm.mm_mail_name"></el-input>
      </el-form-item>
      <el-form-item label="邮件发送" prop="send_mail">
        <el-checkbox-group
          v-model="send_mail"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox
            v-for="item in options"
            :key="item.name"
            :label="item.name"
            >{{ item.label }}</el-checkbox
          >
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="">
        <!-- <div v-if="ruleForm.send_mail.indexOf(item.value) !== -1">
          {{ item.label }}
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="textarea"
          >
          </el-input>
        </div> -->

        <div class="formItem_inpu">
          <div
            v-for="item in options"
            :key="item.value"
            v-if="send_mail.indexOf(item.name) !== -1"
            class="inpu_check"
          >
            {{ item.label }}
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="valueData[item.name]"
            >
            </el-input>
          </div>
        </div>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确定</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      textarea: "",
      ruleForm: {
        send_mail: []
      },
      send_mail: [],
      send_mails: {
        mm_mail_order: '0',
        mm_mail_receipt: '0',
        mm_mail_delivery: '0',
        mm_mail_comment: '0',
        mm_mail_shop_apply: '0',
        mm_mail_shop_pass: '0',
        mm_mail_shop_update: '0',
      },
      valueData: {
        mm_mail_order: '',
        mm_mail_receipt: '',
        mm_mail_delivery: '',
        mm_mail_comment: '',
        mm_mail_shop_apply: '',
        mm_mail_shop_pass: '',
        mm_mail_shop_update: '',
      },
      options: [
        {
          name: 'mm_mail_order',
          value: "1",
          label: "待付款"
        },
        {
          name: 'mm_mail_receipt',
          value: "2",
          label: "已付款"
        },
        {
          name: 'mm_mail_delivery',
          value: "3",
          label: "已发货"
        },
        {
          name: 'mm_mail_comment',
          value: "4",
          label: "已评价"
        },
        {
          name: 'mm_mail_shop_apply',
          value: "5",
          label: "商铺申请"
        },
        {
          name: 'mm_mail_shop_pass',
          value: "6",
          label: "商铺验证"
        },
        {
          name: 'mm_mail_shop_update',
          value: "7",
          label: "商铺升级"
        }
      ]
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getSettingItem({
        type: 'email_set',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.forEach((item, index) => {
          this.$set(this.ruleForm, `${item.cf_name}`, item.cf_value)
          if(item.cf_name == 'mm_mail_order_cnt') this.valueData.mm_mail_order = item.cf_value
          if(item.cf_name == 'mm_mail_receipt_cnt') this.valueData.mm_mail_receipt = item.cf_value
          if(item.cf_name == 'mm_mail_delivery_cnt') this.valueData.mm_mail_delivery = item.cf_value
          if(item.cf_name == 'mm_mail_comment_cnt') this.valueData.mm_mail_comment = item.cf_value
          if(item.cf_name == 'mm_mail_shop_apply_cnt') this.valueData.mm_mail_shop_apply = item.cf_value
          if(item.cf_name == 'mm_mail_shop_pass_cnt') this.valueData.mm_mail_shop_pass = item.cf_value
          if(item.cf_name == 'mm_mail_shop_update_cnt') this.valueData.mm_mail_shop_update = item.cf_value
        })
        for(let i in this.send_mails) {
          res.data.forEach(item => {
            if(item.cf_name == i) {
              // this.send_mails[i] = item.cf_value
              // this.valueData[i] = item.cf_value
              if(item.cf_value == '1') {
                // console.log(item.cf_value)
                this.send_mail.push(i)
              }
            }
          })
        }
        // console.log(this.send_mail)
      })
    },
    submitForm(formName) {
      this.send_mail.forEach(item => {
        this.send_mails[item] = 1
      })
      console.log(this.valueData)
      this.$newApi.setSettingItem({
        type: 'email_set',
        mm_mail_method: this.ruleForm.mm_mail_method,
        mm_mail_smtphost: this.ruleForm.mm_mail_smtphost,
        mm_mail_smtpport: this.ruleForm.mm_mail_smtpport,
        mm_mail_smtpfrom: this.ruleForm.mm_mail_smtpfrom,
        mm_mail_smtpauth: this.ruleForm.mm_mail_smtpauth,
        mm_mail_smtpuser: this.ruleForm.mm_mail_smtpuser,
        mm_mail_smtppass: this.ruleForm.mm_mail_smtppass,
        mm_mail_name: this.ruleForm.mm_mail_name,
        mm_mail_order: this.send_mails.mm_mail_order,
        mm_mail_receipt: this.send_mails.mm_mail_receipt,
        mm_mail_delivery: this.send_mails.mm_mail_delivery,
        mm_mail_comment: this.send_mails.mm_mail_comment,
        mm_mail_shop_apply: this.send_mails.mm_mail_shop_apply,
        mm_mail_shop_pass: this.send_mails.mm_mail_shop_pass,
        mm_mail_shop_update: this.send_mails.mm_mail_shop_update,
        mm_mail_order_cnt: this.valueData.mm_mail_order,
        mm_mail_receipt_cnt: this.valueData.mm_mail_receipt,
        mm_mail_delivery_cnt: this.valueData.mm_mail_delivery,
        mm_mail_comment_cnt: this.valueData.mm_mail_comment,
        mm_mail_shop_apply_cnt: this.valueData.mm_mail_shop_apply,
        mm_mail_shop_pass_cnt: this.valueData.mm_mail_shop_pass,
        mm_mail_shop_update_cnt: this.valueData.mm_mail_shop_update,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '设置成功'
            })
            // this.resetForm()
          }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCheckedCitiesChange(val) {
      this.send_mail = val
      for(let i in this.valueData) {
        if(this.send_mail.indexOf(i) == -1) {
          this.valueData[i] = ''
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.email_page {
  background: #fff;
  border-radius: 4px;
  overflow: auto;
  .email_ruleForm {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    .el-form-item {
      margin-bottom: 10px;
      .formItem_inpu {
        display: flex;
        flex-wrap: wrap;
        .inpu_check {
          width: 48%;
          margin-right: 1%;
        }
      }
    }
    .el-select {
      width: 70%;
    }
    .el-input {
      width: 70%;
    }
    p {
      line-height: 24px;
    }
  }
}
</style>
