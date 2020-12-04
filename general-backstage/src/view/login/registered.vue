<template>
  <div class="registered">
    <div class="form">
      <div class="tit">
        <i class="el-icon-tickets"></i>
        {{q && w ? '注册美城号' : !q ? '企业入驻' : '服务商入驻'}} <span class="one"
              v-if="q && w">已有账号？</span><span class="two"
              @click="goLogin"
              v-if="q && w">立即登录</span>
      </div>
      <div class="con-form">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="手机号"
                        prop="phe">
            <el-input type="input"
                      clearable
                      placeholder='建议使用常用手机'
                      v-model="ruleForm.phe">
            </el-input>
          </el-form-item>
          <el-form-item label="验证码"
                        prop="getNum">
            <div style="width:100%; display: flex">
              <el-input type="input"
                        clearable
                        placeholder='手机验证码'
                        style="width:60%"
                        v-model="ruleForm.getNum"></el-input>
              <el-button type="primary"
                         @click="getSeleNum"
                         style="width:40%">{{thenum ? '获取验证码' : num}}</el-button>
            </div>
          </el-form-item>
          <el-form-item label="用户昵称"
                        prop="user">
            <el-input v-model="ruleForm.user"
                      clearable
                      placeholder="请设置您的用户名称"></el-input>
          </el-form-item>
          <!-- <el-form-item label="类型"
                        prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="个人"></el-radio>
              <el-radio label="企业/政府"></el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item label="登录密码"
                        prop="pwd">
            <el-input type="password"
                      clearable
                      placeholder="建议至少使用两种字符组合"
                      v-model="ruleForm.pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"
                        prop="newpwd">
            <el-input type="password"
                      clearable
                      placeholder="请再次输入密码"
                      v-model="ruleForm.newpwd"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱"
                        prop="emial">
            <el-input placeholder="请填写联系邮箱"
                      clearable
                      v-model="ruleForm.emial"></el-input>
          </el-form-item>
          <div style="width:100%; display: flex">
            <el-form-item label="所在地区"
                          style="width: 50%"
                          prop="province">
              <el-select v-model="ruleForm.province"
                         clearable
                         style="width:100%"
                         @change="changeCity"
                         placeholder="所在省">
                <el-option v-for="(item, index) in $store.state.cityList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>

            </el-form-item>
            <el-form-item label=""
                          style="width: 50%"
                          prop="city">
              <el-select v-model="ruleForm.city"
                         clearable
                         style="width:100%;margin-left:0"
                         placeholder="所在市">
                <el-option v-for="(item, index) in $store.state.areaList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </el-form-item>
          </div>

          <el-form-item>
            <el-button type="primary"
                       style="width: 100%"
                       @click="submitForm('ruleForm')">同意协议并提交</el-button>
          </el-form-item>
        </el-form>
        <div class="reg-agreement">
          <span>《景安网络用户注册协议》</span>
          <span>《法律声明及隐私权政策》</span>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'registered',
  data () {
    var phenum = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写常用手机号'));
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
        callback(new Error('请填写手机验证码'));
      } else {
        callback();
      }
    }

    var region = (rule, value, callback) => {
      if (!this.ruleForm.province.length) {
        callback(new Error('请选择所在省'));
      }
      if (!this.ruleForm.city.length) {
        callback(new Error('请选择所在市'));
      }

      if (this.ruleForm.province.length && this.ruleForm.city.length) {
        callback();
      }
    }

    return {
      ruleForm: {
        phe: '',
        getNum: '',
        user: '',
        emial: '',
        newpwd: '',
        pwd: '',
        province: '',
        city: ''
      },

      num: 60,
      thenum: true,

      rules: {
        phe: [
          { required: true, validator: phenum, trigger: 'blur' }
        ],
        getNum: [
          { required: true, validator: getNum, trigger: 'blur' }
        ],
        user: [
          { required: true, message: '请填写用户名', trigger: 'blur' },
        ],
        emial: [
          { required: true, message: '请填写联系邮箱', trigger: 'blur' }
        ],
        newpwd: [
          { required: true, message: '请填写二次密码', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请填写密码', trigger: 'blur' }
        ],
        // province: [
        //   { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        // ],
        province: [
          { required: true, message: '请选择所在省', trigger: 'change' }
        ],
        city: [
          { required: true, message: '请选择所在市', trigger: 'change' }
        ]
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
      },

      q: true,
      qFlag: true,
      w: true,
      dialogImageUrl: '',
      dialogVisible: false
    }
  },

  methods: {
    changeCity () {
      this.ruleForm.city = ''
      this.$store.commit('GET_CITY', { id: this.ruleForm.province, name: 'areaList' })
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    goLogin () {
      this.$router.push('/login')
    },

    submitForm (formName) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$api.sendRegister({
            mobile_code: this.ruleForm.getNum,
            pass1: this.ruleForm.newpwd,
            login_id: this.ruleForm.user
          }).then(res => {
            console.log(res)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    getSeleNum () {
      var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
      if (!this.ruleForm.phe.length) {
        this.$message({
          message: '请输入手机号',
          type: 'warning'
        });
        return
      }
      if (!myreg.test(this.ruleForm.phe)) {
        this.$message({
          message: '请输入正确的手机号',
          type: 'warning'
        });
        return false;
      }
      if (!this.thenum) return false
      this.thenum = false
      this.$api.get_registerverify_code({ mobile: this.ruleForm.phe }).then(res => {
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
  },

  created () {

  },

  mounted () {
    console.log(this.$store)
    this.$store.commit('GET_CITY')
  },

  watch: {
    $route (to, from) {

    }
  },

  // created () {

  // }
}
</script>

<style lang="scss" scoped>
.registered {
  width: 100%;
  height: 100%;
  // background: #eeeeee;
  box-sizing: border-box;
  .form {
    width: 1240px;
    height: 100%;
    margin: 20px auto 100px;
    background: #fff;

    .tit {
      width: 1154px;
      margin: 0 auto;
      height: 60px;
      line-height: 60px;
      padding-top: 34px;
      border-bottom: 1px solid #dddddd;
      font-size: 22px;
      color: #333;
      margin: 0 auto;
      .one {
        font-size: 14px;
        margin-left: 6px;
      }
      .two {
        cursor: pointer;
        color: #4251b6;
        font-size: 14px;
        display: inline-block;
        margin-left: 6px;
      }
    }
    .con-form {
      box-sizing: border-box;
      padding: 0 350px;
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}

.reg-agreement {
  cursor: pointer;
  display: inline-block;
  font-size: 15px;
  color: #00a4ff;
  margin: 0 8px;
  box-sizing: border-box;
  padding-left: 70px;
}
.reg-agreement :hover {
  text-decoration: underline;
}
</style>
