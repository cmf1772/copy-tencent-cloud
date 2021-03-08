<template>
  <div class="text_mess" :style="{ height: heights }">
    <el-form
      ref="ruleForm"
      :model="form"
      label-width="100px"
      class="text_form"
      label-position="left"
    >
      <el-form-item label="发送方式" prop="send">
        <el-radio-group v-model="form.send" @change="radioChange">
          <el-radio label="0">手动输入</el-radio>
          <el-radio label="1">会员等级</el-radio>
          <el-radio label="2">商铺</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="接收邮件" prop="receivers" v-if="form.send == 0">
        <el-input
          v-model="form.receivers"
          placeholder="多个邮箱请用；间隔"
        ></el-input>
      </el-form-item>
      <el-form-item label="接收邮件" v-else prop="grant">
        <el-select v-model="form.grant" placeholder="请选择">
          <el-option
            v-for="(itm, index) in options"
            :key="index"
            :label="itm"
            :value="index"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" prop="mail_subject">
        <el-input v-model="form.mail_subject"></el-input>
      </el-form-item>
      <el-form-item label="邮件内容" prop="mail_body">
        <el-input type="textarea" v-model="form.mail_body" :rows="4"></el-input>
        <span style="color: #999;">(可填写HTML格式的文本）</span>
      </el-form-item>
      <el-form-item label="试用版说明" prop="title">
        <p>
          该邮件投递的功能可以为您提供稳定的邮件发送服务，当前为试用第一版，版本号V1.001。
          邮件转发需SMTP邮箱服务器的支持，当前常用qq、163、126、yeah、sina等
        </p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确 定</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 170 + "px",
      form: {send: "0"},
      options: []
    };
  },
  mounted() {
    this.$newApi.YJgetGradeList({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.options = res.data
      })
  },
  methods: {
    submitForm() {
      this.$newApi.batSendMall({
        send_type: this.form.send,
        receivers: this.form.receivers,
        grant: this.form.grant,
        mail_subject: this.form.mail_subject,
        mail_body: this.form.mail_body,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.form = {
            send: '0'
          }
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    radioChange(val) {
      this.$set(this.form, 'receivers', '')
      this.$set(this.form, 'grant', '')
      this.$set(this.form, 'mail_subject', '')
      this.$set(this.form, 'mail_body', '')
    }
  }
};
</script>

<style lang="scss" scoped>
.text_mess {
  background: #fff;
  border-radius: 5px;
  padding-top: 10px;
  padding-left: 20px;
  overflow: auto;
  .text_form {
    width: 50%;
    .el-input {
      width: 50%;
    }
    .el-select {
      width: 50%;
    }
    p {
      text-align: justify;
      line-height: 24px;
    }
  }
}
</style>
