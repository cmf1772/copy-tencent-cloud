<template>
  <div class="login">
    <div class="all">
      <!-- <img src="../../assets/img/logoFFF.png"
           alt=""> -->
      <div class="main-content">
        <div class="userLogin">
          用户登录
        </div>
        <!-- <el-divider></el-divider> -->
        <el-form :model="ruleForm"
                 status-icon
                 :rules="rules"
                 style="width:80%;margin-top: 40px"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="账号"
                        v-if="seleCtChange"
                        prop="pass">
            <el-input v-model="ruleForm.pass"
                      placeholder="用户名/手机号/邮箱"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码"
                        v-if="seleCtChange"
                        prop="checkPass">
            <el-input type="password"
                      placeholder='登录密码'
                      show-password
                      v-model="ruleForm.checkPass"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号"
                        v-if="!seleCtChange"
                        prop="phe">
            <el-input type="input"
                      placeholder='请输入手机号'
                      v-model="ruleForm.phe"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码"
                        v-if="!seleCtChange"
                        prop="getNum">
            <div style="width:100%; display: flex">
              <el-input type="input"
                        placeholder='请输入验证码'
                        style="width:60%"
                        v-model="ruleForm.getNum"
                        autocomplete="off"></el-input>
              <el-button type="primary"
                         @click="getSeleNum"
                         style="width:40%">{{thenum ? '获取验证码' : num}}</el-button>
            </div>
          </el-form-item>
          <el-form-item style="width: 100%">
            <el-button type="primary"
                       style="width: 100%"
                       @click="submitForm('ruleForm')">登陆</el-button>
          </el-form-item>
        </el-form>

        <div class="right">
          忘记密码？</div>
        <el-divider>更多登陆方式</el-divider>
        <div class="button">
          <div class="item_b"
               @click="changeSelect">{{seleCtChange ? '短信登陆' : '密码登陆'}}</div>
        </div>
      </div>
      <div class="footer_o">
        <!-- 还没有账号？<a href="/registered">立即注册</a> -->
        还没有账号？
        <span @click="goRegistered">立即注册</span>
      </div>
    </div>
    <!-- <div class="tip">© 2020 zzidc.com 北京美城互联 版权所有 经营性备案号：豫B2-20070022</div> -->
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写账号'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写密码'));
      } else {
        callback();
      }
    }
    var phenum = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写手机号'));
      } else {
        var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test(value)) {
          callback(new Error('请填写正确的手机号'));
          return false;
        } else {
          callback();

        }
      }
    }

    var getNum = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写验证码'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        phe: '',
        getNum: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        phe: [
          { validator: phenum, trigger: 'blur' }
        ],
        getNum: [
          { validator: getNum, trigger: 'blur' }
        ]
      },
      seleCtChange: true,
      num: 60,
      thenum: true
    }
  },
  methods: {
    goRegistered () {
      this.$router.push('/registered')
    },

    getSeleNum () {
      // this.$refs.ruleForm.validate((valid) => {
      //   if (valid) {
      var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (!this.ruleForm.phe.length) {
        this.$message({
          message: '请填写手机号',
          type: 'warning'
        });
        return
      }
      if (!myreg.test(this.ruleForm.phe)) {
        this.$message({
          message: '请填写正确的手机号',
          type: 'warning'
        });
        return false;
      }
      if (!this.thenum) return false
      this.$api.get_loginverify_code({ mobile: this.ruleForm.phe }).then(res => {
        this.thenum = false
        let time = setInterval(() => {
          if (this.num === 0) {
            window.clearInterval(time)
            this.thenum = true
            this.num = 60
          }
          this.num--
        }, 1000);
      })
    },

    submitForm (formName) {
      this.$store.commit('CHANGE_TYPE')
      console.log(this.tool)
      let _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.seleCtChange) {
            this.$api.login({
              login_id: this.ruleForm.pass,
              login_pass: this.ruleForm.checkPass,
              platform: this.$store.state.computerType
            }).then(res => {
              _this.$message({
                showClose: true,
                message: '登陆成功',
                type: 'success'
              });
              _this.tool.setCookie('token', JSON.stringify(res.data.token))
              _this.tool.setCookie('user', JSON.stringify(res.data.user))
              _this.$router.push('/home/product')
              _this.$store.commit('SET_TOKEN', JSON.stringify(res.data.token))
            })
          } else {
            this.$api.phlogin({
              login_id: this.ruleForm.phe,
              mobile_code: this.ruleForm.getNum,
              platform: this.$store.state.computerType
            }).then(res => {
              _this.$message({
                showClose: true,
                message: '登陆成功',
                type: 'success'
              });

              _this.tool.setCookie('token', JSON.stringify(res.data.token))
              _this.tool.setCookie('user', JSON.stringify(res.data.user))
              _this.$store.commit('SET_TOKEN', JSON.stringify(res.data.token))
              _this.$router.push('/home/product')
            })
          }

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    changeSelect () {
      this.$refs.ruleForm.resetFields();
      this.seleCtChange = !this.seleCtChange
    },

    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.el-divider__text {
  background: #f6f6fb;
}
.el-divider {
  background: #fff;
}
.login {
  width: 100%;
  height: 100%;
  // background: #f6f6fb;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 100px 100px 100px;
  box-sizing: border-box;

  .all {
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-bottom: 50px;
    > img {
      width: 228px;
      margin-top: 130px;
    }
  }

  .main-content {
    width: 454px;
    height: 453px;
    background: #f6f6fb;
    border-radius: 5px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    .userLogin {
      width: 410px;
      margin: 0 auto;
      border-bottom: 3px solid #fff;
      font-size: 20px;
      color: #333;
      text-align: center;
      line-height: 85px;
    }
    .right {
      font-size: 14px;
      color: #4251b6;
      display: inline-block;
      margin-right: 4px;
      cursor: pointer;
      margin-left: 300px;
    }
    .button {
      box-sizing: border-box;
      padding-left: 20px;
      .item_b {
        cursor: pointer;
        width: 120px;
        height: 42px;
        background: #fff;
        border-radius: 3px;
        text-align: center;
        font-size: 14px;
        color: #333;
        line-height: 42px;
        color: #000;
      }
      .item_b:hover {
        // border: solid 1px #00a4ff;
        background: #00a4ff;
        color: #fff;
      }
    }
  }
  .footer_o {
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
    color: #cccfe8;
    > span {
      cursor: pointer;
      color: #000;
    }
  }
  .tip {
    // width: 300px;
    font-size: 14px;
    height: 36px;
    line-height: 36px;
    // width: 100%;
    // color: #e9edf2;
  }
}
</style>
