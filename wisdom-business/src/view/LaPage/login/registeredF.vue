<template>
  <div class="registered">
    <div class="form">
      <div class="tit">
        <i class="el-icon-tickets"></i>
        商家入驻
      </div>
      <div class="con-form">
        <!-- 服务商入驻 -->
        <el-form :model="service"
                 :rules="serviceLes"
                 ref="ruleForm"
                 label-width="130px"
                 class="demo-ruleForm">
          <el-form-item label="店主姓名"
                        prop="name">
            <el-input type="input"
                      clearable
                      placeholder='请填写店铺负责人姓名'
                      v-model="service.name"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="店铺名称"
                        prop="addName">
            <el-input v-model="service.addName"
                      clearable
                      placeholder="请填写商家店铺名称"></el-input>
          </el-form-item>
          <!-- <el-form-item label="类型"
                        prop="resource">
            <el-radio-group v-model="service.resource">
              <el-radio label="个人"></el-radio>
              <el-radio label="企业/政府"></el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item label="所属行业"
                        prop="industry">
            <el-select v-model="service.industry"
                       style="width:100%"
                       placeholder="请选择店铺所属行业">
              <el-option label="软件服务商"
                         value="1"></el-option>
              <el-option label="硬件服务商"
                         value="2"></el-option>
              <el-option label="行业服务商"
                         value="3"></el-option>
              <el-option label="城市服务商"
                         value="4"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="所在区域"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="service.province"
                         style="width:50%"
                         clearable
                         placeholder="所在省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="service.city"
                         style="width:50%;margin-left:0"
                         clearable
                         placeholder="所在市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>

          <el-form-item label="详细地址"
                        prop="address">
            <el-input v-model="service.address"
                      clearable
                      placeholder="请填写店铺详细地址具体到门牌号"></el-input>
          </el-form-item>

          <el-form-item label="固定电话"
                        prop="PePhe">
            <el-input placeholder="请填写店铺固定电话"
                      clearable
                      v-model="service.PePhe"></el-input>
          </el-form-item>
          <el-form-item label="联系手机"
                        prop="PePheS">
            <el-input placeholder="请填写店铺负责人常用手机号"
                      clearable
                      v-model="service.PePhe"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱"
                        prop="email">
            <el-input placeholder="请填写店铺负责人常用邮箱"
                      clearable
                      v-model="service.email"></el-input>
          </el-form-item>
          <el-form-item label="店主证件"
                        prop="license">
            <span>请上传店主身份证</span>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt="">
            </el-dialog>
          </el-form-item>

          <el-form-item label="营业执照"
                        prop="business">
            <span>请上传店铺营业执照</span>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt="">
            </el-dialog>
          </el-form-item>

          <el-form-item label="账户名称"
                        prop="accountName">
            <el-input v-model="service.accountName"
                      clearable
                      placeholder="请输入微信（支付宝）提现的账户名称"></el-input>
          </el-form-item>

          <el-form-item label="账号"
                        prop="account">
            <el-input placeholder="请输入您 微信（支付宝）提现的账号"
                      clearable
                      v-model="service.account"></el-input>
          </el-form-item>
          <!-- <el-form-item label="企业负责人姓名"
                        prop="peName">
            <el-input type="input"
                      clearable
                      placeholder="请填写您企业联系人姓名"
                      v-model="service.peName"></el-input>
          </el-form-item> -->
          <div class="reg-agreement">
            <el-checkbox v-model="checked">我已认真阅读并完全同意美城茂商家入驻协议中的所有条款</el-checkbox>
          </div>
          <el-form-item>
            <el-button type="primary"
                       style="width: 100%"
                       @click="submitForm('ruleForm')">立即开店</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'registered',
  data () {


    var regions = (rule, value, callback) => {
      if (!this.service.province.length) {
        callback(new Error('请选择店铺所在省'));
      }
      if (!this.service.city.length) {
        callback(new Error('请选择店铺所在市'));
      }

      if (this.service.province.length && this.service.city.length) {
        callback();
      }
    }

    var license = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传店主身份证'));
      } else {
        callback();
      }
    }

    var business = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传店铺营业执照'));
      } else {
        callback();
      }
    }

    return {

      service: {
        name: '',
        province: '',
        city: '',
        address: '',
        industry: '',
        addName: '',
        peName: '',
        PePhe: '',
        email: ''
      },

      serviceLes: {
        name: [
          { required: true, message: '请填写店铺负责人姓名', trigger: 'blur' }
        ],
        region: [
          { required: true, validator: regions, trigger: 'change' }
        ],
        address: [
          { required: true, message: '请填写店铺详细地址具体到门牌号', trigger: 'blur' },
        ],

        addName: [
          { required: true, message: '请填写商家店铺名称', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请填写店铺负责人常用邮箱', trigger: 'blur' }
        ],
        industry: [
          { required: true, message: '请选择店铺所属行业', trigger: 'change' }
        ],
        peName: [
          { required: true, message: '请填写您企业联系人姓名', trigger: 'blur' }
        ],

        accountName: [
          { required: true, message: '账户名称：请输入微信（支付宝）提现的账户名称', trigger: 'blur' }
        ],
        account: [
          { required: true, message: '请输入您 微信（支付宝）提现的账号', trigger: 'blur' }
        ],


        PePhe: [
          { required: true, message: '请填写企业负责人联系电话', trigger: 'blur' }
        ],
        PePheS: [
          { required: true, message: '请填写店铺负责人常用手机号', trigger: 'blur' }
        ],
        license: [{
          required: true, validator: license, trigger: 'change'
        }]
        ,
        business: [{
          required: true, validator: business, trigger: 'change'
        }]
        // PePhe: [
        //   { required: true, message: '请填写您企业联系人姓名', trigger: 'blur' }
        // ],
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
      },

      dialogImageUrl: '',
      dialogVisible: false
    }
  },

  methods: {
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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },

  created () {

  },

  watch: {

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
  margin-bottom: 20px;
  margin-top: 20px;
}
.reg-agreement :hover {
  text-decoration: underline;
}
</style>
