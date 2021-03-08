<template>
  <div class="refister_page" :style="{ height: heights }">
    <el-form
      :model="ruleForm"
      ref="ruleForm"
      label-width="130px"
      class="demo-ruleForm"
    >
      <el-form-item label="会员注册认证" prop="mm_member_reg">
        <el-radio-group v-model="ruleForm.mm_member_reg">
          <el-radio :label="'0'">关闭注册</el-radio>
          <el-radio :label="'1'">开通注册</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="注册奖励积分" prop="mm_point_member">
        <el-input v-model="ruleForm.mm_point_member"></el-input>
        <p style="color: #999;">↑ 会员加入时奖励的积分。</p>
      </el-form-item>
      <el-form-item label="注册奖励预付款" prop="mm_mony_member">
        <el-input v-model="ruleForm.mm_mony_member"></el-input>
        <p style="color: #999;">↑ 会员加入时奖励的预付款。</p>
      </el-form-item>
      <el-form-item label="验证码使用" prop="mm_code_use ">
        <el-radio-group v-model="ruleForm.mm_code_use">
          <el-radio :label="'0'">使用</el-radio>
          <el-radio :label="'1'">不使用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="验证码设置" prop="mm_code_width">
        <div class="kg_cont">
          宽: <el-input v-model="ruleForm.mm_code_width"></el-input> 高:
          <el-input v-model="ruleForm.mm_code_height"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="QQ账号整合" prop="mm_qq_oauth_head">
        <div class="inter_con">
          <span>验证代码：</span
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.mm_qq_oauth_head"
          >
          </el-input>
        </div>
        <div class="inter_con" prop="mm_qq_app_id">
          <span>APP ID：</span
          ><el-input v-model="ruleForm.mm_qq_app_id"></el-input>
        </div>
        <div class="inter_con" prop="mm_qq_app_key">
          <span>APP KEY：</span
          ><el-input v-model="ruleForm.mm_qq_app_key"></el-input>
        </div>
        <p>↑ 还没有接入应用？<a href="">点击此处进行申请>></a></p>
      </el-form-item>

      <el-form-item label="新浪微博账号整合" prop="mm_sina_oauth_head">
        <div class="inter_con">
          <span>验证代码：</span
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.mm_sina_oauth_head"
          >
          </el-input>
        </div>
        <div class="inter_con" prop="mm_sina_app_key">
          <span>APP KEY：</span
          ><el-input v-model="ruleForm.mm_sina_app_key"></el-input>
        </div>
        <div class="inter_con" prop="mm_sina_app_secret">
          <span>APP SECRET：</span
          ><el-input v-model="ruleForm.mm_sina_app_secret"></el-input>
        </div>
        <p>↑ 还没有接入应用？<a href="">点击此处进行申请>></a></p>
      </el-form-item>

      <el-form-item label="网易微博账号整合" prop="mm_163_oauth_head">
        <div class="inter_con">
          <span>验证代码：</span
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.mm_163_oauth_head"
          >
          </el-input>
        </div>
        <div class="inter_con" prop="mm_163_consumer_key">
          <span>CONSUMER KEY：</span
          ><el-input v-model="ruleForm.mm_163_consumer_key"></el-input>
        </div>
        <div class="inter_con" prop="mm_163_consumer_secret">
          <span>CONSUMER SECRET：</span
          ><el-input
            v-model="ruleForm.mm_163_consumer_secret"
          ></el-input>
        </div>
        <p>↑ 还没有接入应用？<a href="">点击此处进行申请>></a></p>
      </el-form-item>

      <el-form-item label="微信公众平台整合" prop="mm_wx_token">
        <div class="inter_con">
          <span>TOKEN：</span
          ><el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="ruleForm.mm_wx_token"
          >
          </el-input>
        </div>
        <div class="inter_con" prop="mm_wx_app_id">
          <span>APP ID：</span
          ><el-input v-model="ruleForm.mm_wx_app_id"></el-input>
        </div>
        <div class="inter_con" prop="mm_wx_app_secret">
          <span>CONSUMER SECRET：</span
          ><el-input v-model="ruleForm.mm_wx_app_secret"></el-input>
        </div>
        <p>↑ 还没有接入应用？<a href="">点击此处进行申请>></a></p>
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
      ruleForm: {}
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getSettingItem({
        type: 'reg_set',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.forEach((item, index) => {
          this.$set(this.ruleForm, `${item.cf_name}`, item.cf_value)
        })
      })
    },
    submitForm() {
      this.$newApi.setSettingItem({
        type: 'reg_set',
        mm_member_reg: this.ruleForm.mm_member_reg,
        mm_point_member: this.ruleForm.mm_point_member,
        mm_mony_member: this.ruleForm.mm_mony_member,
        mm_code_use: this.ruleForm.mm_code_use,
        mm_code_width: this.ruleForm.mm_code_width,
        mm_code_height: this.ruleForm.mm_code_height,
        mm_qq_oauth_head: this.ruleForm.mm_qq_oauth_head,
        mm_qq_app_id: this.ruleForm.mm_qq_app_id,
        mm_qq_app_key: this.ruleForm.mm_qq_app_key,
        mm_sina_oauth_head: this.ruleForm.mm_sina_oauth_head,
        mm_sina_app_key: this.ruleForm.mm_sina_app_key,
        mm_sina_app_secret: this.ruleForm.mm_sina_app_secret,
        mm_163_oauth_head: this.ruleForm.mm_163_oauth_head,
        mm_163_consumer_key: this.ruleForm.mm_163_consumer_key,
        mm_163_consumer_secret: this.ruleForm.mm_163_consumer_secret,
        mm_wx_token: this.ruleForm.mm_wx_token,
        mm_wx_app_id: this.ruleForm.mm_wx_app_id,
        mm_wx_app_secret: this.ruleForm.mm_wx_app_secret,
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
          }
      })
    },
    resetForm() {
      this.$refs['ruleForm'].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.refister_page {
  background: #fff;
  border-radius: 4px;
  overflow: auto;
  .el-form {
    width: 60%;
    padding: 20px 20px 0;
    box-sizing: border-box;
    .el-textarea {
      width: 50%;
    }
    .el-input {
      width: 50%;
    }
    .kg_cont {
      display: flex;
      .el-input {
        width: 20%;
        margin: 0 10px;
      }
    }
    .inter_con {
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;
      span {
        display: inline-block;
        width: 100px;
        height: 100%;
      }
    }
    p {
      color: #999;
      a {
        color: #f00;
      }
    }
  }
}
</style>
