<template>
  <div class="service_page" :style="{ height: heights }">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="公司电话号码" prop="mm_ceo_phone">
        <el-input v-model="form.mm_ceo_phone"></el-input>
      </el-form-item>
      <el-form-item label="公司传真号码" prop="mm_ceo_fax">
        <el-input v-model="form.mm_ceo_fax"></el-input>
      </el-form-item>

      <el-form-item label="入驻热线一" prop="mm_client_phone1">
        <el-input v-model="form.mm_client_phone1"></el-input>
      </el-form-item>
      <el-form-item label="入驻热线二" prop="mm_client_phone2">
        <el-input v-model="form.mm_client_phone2"></el-input>
      </el-form-item>
      <el-form-item label="客服E-mail" prop="mm_client_email">
        <el-input v-model="form.mm_client_email"></el-input>
      </el-form-item>
      <el-form-item label="免费电话号码" prop="mm_client_phone3">
        <el-input v-model="form.mm_client_phone3"></el-input>
      </el-form-item>

      <el-form-item label="客服 QQ1" prop="mm_client_qq1">
        <el-input v-model="form.mm_client_qq1"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ2" prop="mm_client_qq2">
        <el-input v-model="form.mm_client_qq2"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ3" prop="mm_client_qq3">
        <el-input v-model="form.mm_client_qq3"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ4" prop="mm_client_qq4">
        <el-input v-model="form.mm_client_qq4"></el-input>
      </el-form-item>
      <el-form-item label="客服 旺旺" prop="mm_client_ww">
        <el-input v-model="form.mm_client_ww"></el-input>
      </el-form-item>
      <!-- <el-form-item label="短信反馈" prop="mm_sms_reply">
        <el-input v-model="form.mm_sms_reply"></el-input>
      </el-form-item> -->

      <el-form-item label="客服服务时间" prop="mm_client_time">
        <el-input
          type="textarea"
          :rows="3"
          v-model="form.mm_client_time"
          placeholder="7 x 24 小时全天服务 "
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">确定</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getSettingItem({
        type: 'msg_set',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.forEach((item, index) => {
          this.$set(this.form, `${item.cf_name}`, item.cf_value)
        })
      })
    },
    submitForm(formName) {
      this.$newApi.setSettingItem({
        type: 'msg_set',
        mm_ceo_phone: this.form.mm_ceo_phone,
        mm_ceo_fax: this.form.mm_ceo_fax,
        mm_client_phone1: this.form.mm_client_phone1,
        mm_client_phone2: this.form.mm_client_phone2,
        mm_client_email: this.form.mm_client_email,
        mm_client_phone3: this.form.mm_client_phone3,
        mm_client_qq1: this.form.mm_client_qq1,
        mm_client_qq2 : this.form.mm_client_qq2,
        mm_client_qq3: this.form.mm_client_qq3,
        mm_client_qq4: this.form.mm_client_qq4,
        mm_client_ww: this.form.mm_client_ww,
        // mm_sms_reply: this.form.mm_sms_reply,
        mm_client_time: this.form.mm_client_time,
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
    }
  }
};
</script>

<style lang="scss" scoped>
.service_page {
  overflow: auto;
  background: #fff;
  border-radius: 4px;
  .el-form {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    box-sizing: border-box;
    .el-form-item {
      width: 50%;
      .el-input {
        width: 60%;
      }
      &:last-child {
        width: 100%;
      }
    }
    .kefu_wang {
      width: 100%;
      .el-input {
        width: 40%;
      }
    }
  }
}
</style>
