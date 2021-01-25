<template>
  <div class="settingService allDiv">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="100px">
      <el-form-item label="客服 电话"
                    prop="name">
        <el-input v-model="form.mm_ceo_phone"></el-input>
      </el-form-item>
      <el-form-item label="客服 E-mail"
                    prop="name">
        <el-input v-model="form.mm_client_email"></el-input>
      </el-form-item>
      <el-form-item label="客服 旺旺"
                    prop="name">
        <el-input v-model="form.mm_client_ww"></el-input>
      </el-form-item>
      <el-form-item label="客服 传真"
                    prop="name">
        <el-input v-model="form.mm_client_fax"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ 1"
                    prop="name">
        <el-input v-model="form.mm_client_qq1"></el-input>
      </el-form-item>
      <el-form-item label="客服 QQ 2"
                    prop="name">
        <el-input v-model="form.mm_client_qq2"></el-input>
      </el-form-item>
      <el-form-item label="客服服务时间"
                    style="width: 100%"
                    prop="name">
        <el-input type="textarea"
                  v-model="form.mm_client_time"></el-input>
      </el-form-item>
      <el-form-item label="配送说明"
                    style="width: 100%"
                    prop="name">
        <el-input type="textarea"
                  :autosize="{ minRows: 5}"
                  v-model="form.mm_dist_instr"></el-input>
      </el-form-item>
      <el-form-item label="配送范围"
                    style="width: 100%"
                    prop="name">
        <el-input type="textarea"
                  :autosize="{ minRows: 5}"
                  v-model="form.mm_dist_range"></el-input>
      </el-form-item>

      <el-button type="primary"
                 @click="onSubmit('form')"
                 :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import driverService from '../../service/driver'
export default {
  name: 'settingService',
  data () {
    return {
      form: {
        mm_ceo_phone: '',
        mm_client_email: '',
        mm_client_ww: '',
        mm_client_fax: '',
        mm_client_qq1: '',
        mm_client_qq2: '',
        mm_client_time: '',
        mm_dist_instr: '',
        mm_dist_range: '',
      },
      submitBtn: {
        loading: false,
        text: '提交'
      },
    }
  },
  computed: {},
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.setMsgSet({
            mm_ceo_phone: this.form.mm_ceo_phone,
            mm_client_email: this.form.mm_client_email,
            mm_client_ww: this.form.mm_client_ww,
            mm_client_fax: this.form.mm_client_fax,
            mm_client_qq1: this.form.mm_client_qq1,
            mm_client_qq2: this.form.mm_client_qq2,
            mm_client_time: this.form.mm_client_time,
            mm_dist_instr: this.form.mm_dist_instr,
            mm_dist_range: this.form.mm_dist_range,
            token: JSON.parse(this.$store.state.token).token
          }).then(res => {
            this.$message({
              type: 'success',
              message: res.data.msg
            })
          })
        } else {
          return false;
        }
      });
    },

    getMsgSet () {
      this.$api.getMsgSet({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => [
        res.data.forEach(item => {
          this.form[item.cf_name] = item.cf_value
        })
      ])
    }
  },

  mounted () {
    this.getMsgSet()
  }
}
</script>
<style lang='scss' scoped>
.settingService {
  padding: 20px 100px;
}
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
</style>
