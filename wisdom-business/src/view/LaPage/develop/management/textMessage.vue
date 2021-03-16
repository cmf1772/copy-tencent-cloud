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
        </el-radio-group>
      </el-form-item>
      <el-form-item label="接收号码" prop="receivers" v-if="form.send == 0">
        <el-input
          v-model="form.receivers"
          placeholder="多个号码请以，间隔"
        ></el-input>
      </el-form-item>
      <el-form-item label="接收号码" v-else prop="grant">
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
      <el-form-item label="发送内容" prop="message">
        <el-input type="textarea" v-model="form.message" :rows="4"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
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
      form: {send: "0",},
      options: []
    };
  },
  mounted() {
    this.$newApi.getGradeList({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.options = res.data
      })
  },
  methods: {
    submitForm() {
      this.$newApi.batSendSms({
        send_type: this.form.send,
        receivers: this.form.receivers,
        grant: this.form.grant,
        message: this.form.message,
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
      this.$set(this.form, 'grant', '')
      this.$set(this.form, 'receivers', '')
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
  }
}
</style>
