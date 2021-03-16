<template>
  <div class="registered">
    <div class="form">
      <div class="tit">
        <i class="el-icon-tickets"></i>
        服务商入驻
      </div>
      <div class="con-form">
        <!-- 企业入驻 -->
        <el-form :model="enterprise"
                 :rules="enterpriseLes"
                 ref="ruleForms"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="服务商性质"
                        prop="raido">
            <el-radio-group v-model="raido"
                            @change="qChangeFun()">
              <el-radio label="1">个人</el-radio>
              <el-radio label="2">企业/政府</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <el-form :model="enterprise"
                 :rules="enterpriseLes"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <!-- <el-form-item label="服务商性质"
                        prop="raido">
            <el-radio-group v-model="enterprise.raido"
                            @change="qChangeFun()">
              <el-radio label="1">个人</el-radio>
              <el-radio label="2">企业/政府</el-radio>
            </el-radio-group>
          </el-form-item> -->

          <el-form-item label="个人"
                        v-if="qFlag"
                        prop="o_name">
            <el-input type="input"
                      placeholder='请填写身份证上真实姓名'
                      v-model="enterprise.o_name"
                      autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="企业"
                        v-if="!qFlag"
                        prop="t_name">
            <el-input type="input"
                      placeholder='请填写您营业执照上完整名称'
                      v-model="enterprise.t_name"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="所在地区"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="enterprise.province"
                         style="width:50%"
                         placeholder="所在省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="enterprise.city"
                         style="width:50%;margin-left:0"
                         placeholder="所在市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>

          <el-form-item label="服务商类型"
                        prop="sType">
            <el-select v-model="enterprise.sType"
                       style="width:100%"
                       placeholder="请选择服务商类型">
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

          <el-form-item label="证件类型"
                        v-if="qFlag"
                        prop="o_z_type">
            <el-input v-model="enterprise.o_z_type"
                      placeholder="居民身份证"></el-input>
          </el-form-item>
          <el-form-item label="证件类型"
                        v-if="!qFlag"
                        prop="t_z_type">
            <el-input v-model="enterprise.t_z_type"
                      placeholder="企业营业执照"></el-input>
          </el-form-item>

          <el-form-item label="证件号码"
                        v-if="qFlag"
                        prop="o_num">
            <el-input v-model="enterprise.o_num"
                      placeholder="请填写您身份证上真实姓名"></el-input>
          </el-form-item>
          <el-form-item label="证件号码"
                        v-if="!qFlag"
                        prop="t_num">
            <el-input v-model="enterprise.t_num"
                      placeholder="请填写用营业执照注册号"></el-input>
          </el-form-item>

          <el-form-item label="证件上传"
                        v-if="qFlag"
                        prop="o_upload">
            <span>请上传身份证</span>
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

          <el-form-item label="证件上传"
                        v-if="!qFlag"
                        prop="t_upload">
            <span>请上传营业执照照片</span>
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

          <el-form-item label="联系电话"
                        prop="phe">
            <el-input v-model="enterprise.phe"
                      placeholder="请填写服务商联系电话"></el-input>
          </el-form-item>

          <el-form-item label="服务商邮箱"
                        prop="email">
            <el-input type="password"
                      placeholder="请填写服务商联系邮箱"
                      v-model="enterprise.email"></el-input>
          </el-form-item>

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
    var regionE = (rule, value, callback) => {
      if (!this.enterprise.province.length) {
        callback(new Error('请选择所在省'));
      }
      if (!this.enterprise.city.length) {
        callback(new Error('请选择所在市'));
      }

      if (this.enterprise.province.length && this.enterprise.city.length) {
        callback();
      }
    }


    var o_upload = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传身份证'));
      } else {
        callback();
      }
    }

    var t_upload = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传营业执照照片'));
      } else {
        callback();
      }
    }

    return {
      enterprise: {
        o_name: '',
        t_name: '',
        sType: '',
        province: '',
        city: '',
        o_z_type: '',
        t_z_type: '',
        o_num: '',
        t_num: '',
        phe: '',
        email: '',
        region: ''
      },

      raido: '1',

      qFlag: true,

      enterpriseLes: {
        sType: [
          { required: true, message: '请选择服务商类型', trigger: 'blur' }
        ],
        o_name: [
          { required: true, message: '请填写身份证上真实姓名', trigger: 'blur' }
        ],
        t_name: [
          { required: true, message: '请填写您营业执照上完整名称', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请填写服务商联系邮箱', trigger: 'blur' }
        ],

        region: [{ required: true, validator: regionE, trigger: 'change' }],

        o_z_type: [
          { required: true, message: '请填写居民身份证', trigger: 'blur' }
        ],

        t_z_type: [
          { required: true, message: '请填写企业营业执照', trigger: 'blur' }
        ],
        phe: [
          { required: true, message: '请填写服务商联系电话', trigger: 'blur' }
        ],
        o_num: [{
          required: true, message: '请填写您身份证上真实姓名', trigger: 'blur'
        }],
        t_num: [{
          required: true, message: '请填写用营业执照注册号', trigger: 'blur'
        }],
        o_upload: [{
          required: true, validator: o_upload, trigger: 'change'
        }],
        t_upload: [{
          required: true, validator: t_upload, trigger: 'change'
        }]
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },

  methods: {
    qChangeFun (e) {
      // if (this.ruleForm.resource)
      if (this.raido == '1') {
        this.qFlag = true
      } else {
        this.qFlag = false
      }
      this.service = {
        name: '',
        province: '',
        city: '',
        address: '',
        industry: '',
        peName: '',
        PePhe: '',
        email: ''
      }

      this.enterprise = {
        o_name: '',
        t_name: '',
        sType: '',
        province: '',
        city: '',
        o_z_type: '',
        t_z_type: '',
        o_num: '',
        t_num: '',
        phe: '',
        email: '',
        region: ''
      }

      this.ruleForm = {
        phe: '',
        getNum: '',
        user: '',
        emial: '',
        newpwd: '',
        pwd: '',
        province: '',
        city: ''
      }
      this.$refs.ruleForm.resetFields();
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
}
.reg-agreement :hover {
  text-decoration: underline;
}
</style>
