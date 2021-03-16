<template>
  <div class="setnode_page" :style="{ height: heights }">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="130px"
      class="setnode_ruleForm"
    >
      <el-form-item label="短信签名" prop="mm_sms_tel">
        <el-input v-model="ruleForm.mm_sms_tel"></el-input>
        <p>
          ↑ 显示于短信末尾，可填写商城名称，请务必规范填写，否则短信会被拦截
        </p>
      </el-form-item>
      <el-form-item label="短信帐号" prop="mm_sms_system_id">
        <el-input v-model="ruleForm.mm_sms_system_id"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="mm_sms_system_pass">
        <el-input v-model="ruleForm.mm_sms_system_pass"></el-input>
      </el-form-item>
      <el-form-item label="扩展功能" prop="expand">
        <el-button type="primary">查看短信余额</el-button>
        <el-button type="primary" @click="customSend">自定义发送</el-button>
        <p>
          ↑ 格式：YYYY-MM-DD HH:MM，即时发送则不需要。
        </p>
      </el-form-item>
      <el-form-item label="当前用户申请短信" prop="applySms">
        {{ ruleForm.total_sms_apply }}条
      </el-form-item>
      <el-form-item label="短信申请费用" prop="applyCost">
        请查看  <a href="">http://www.winic.org/Development.asp</a>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >确定</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-dialog
      title="发送短信息"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <div class="dialog_form">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="发送方式" prop="set_way">
            <el-radio-group v-model="form.set_way">
              <el-radio :label="0">手动输入</el-radio>
              <el-radio :label="1">会员等级</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="接收号码" v-if="form.set_way == 0" prop="iphone">
            <el-input
              v-model="form.iphone"
              placeholder="多个号码请以 , 间隔"
            ></el-input>
            <!-- <p style="color: #999;">
              ↑多个号码请以 , 间隔
            </p> -->
          </el-form-item>
          <el-form-item label="接收号码" v-if="form.set_way == 1" prop="iphone">
            <el-select v-model="form.iphone" placeholder="请选择">
              <el-option label="all" value="all"></el-option>
              <el-option label="一星美客" value="一星美客"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发送内容" prop="content">
            <el-input v-model="form.content"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer"
        ><el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
        <el-button @click="dialogReset('form')">重置</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      dialogVisible: false,
      ruleForm: {},
      form: {},
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getSettingItem({
        type: 'sms_set',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.data.forEach((item, index) => {
          this.$set(this.ruleForm, `${item.cf_name}`, item.cf_value)
        })
        this.$set(this.ruleForm, 'total_sms_apply', res.data.total_sms_apply)
      })
    },
    customSend() {
      this.dialogVisible = true;
    },
    submitForm(formName) {
      this.$newApi.setSettingItem({
        type: 'sms_set',
        mm_sms_tel: this.ruleForm.mm_sms_tel,
        mm_sms_system_id: this.ruleForm.mm_sms_system_id,
        mm_sms_system_pass: this.ruleForm.mm_sms_system_pass,
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
    dialogReset(name) {
      this.$refs[name].resetFields();
    },
    handleClose(formName) {
      this.dialogVisible = false;
      this.$refs["form"].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.setnode_page {
  background: #fff;
  border-radius: 4px;
  overflow: auto;
  .setnode_ruleForm {
    width: 50%;
    padding: 20px 20px 0;
    box-sizing: border-box;
    .el-input {
      width: 60%;
    }
    p {
      color: #999;
      line-height: 24px;
    }
  }
}
.dialog_form {
  .el-form {
    width: 80%;
    margin: 0 auto;
    .el-input {
      width: 80%;
    }
    .el-select {
      width: 80%;
    }
  }
}

a{
  color:#f00;
}
</style>
