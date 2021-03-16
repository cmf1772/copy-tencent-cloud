<template>
  <div class="registered">
    <div class="form">
      <div class="tit">
        <i class="el-icon-tickets"></i>
        网约工入驻
      </div>
      <div class="con-form">
        <!-- 服务商入驻 -->
        <el-form :model="service"
                 :rules="serviceLes"
                 ref="ruleForm"
                 label-width="130px"
                 class="demo-ruleForm">
          <el-form-item label="姓名"
                        prop="name">
            <el-input type="input"
                      clearable
                      placeholder='请填写身份证上真实姓名'
                      v-model="service.name"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="性别"
                        prop="addName">
            <el-input v-model="service.addName"
                      clearable
                      placeholder="请填写性别"></el-input>
          </el-form-item>
          <el-form-item label="出生日期"
                        prop="dateOfBirth">
            <el-date-picker v-model="service.dateOfBirth"
                            style="width: 100%"
                            type="date"
                            placeholder="请选择出生日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="所在区域"
                        prop="region">
            <div style="width:100%; display: flex">
              <el-select v-model="service.province"
                         style="width:50%"
                         clearable
                         placeholder="请选择您申请提供服务的省">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="service.city"
                         style="width:50%;margin-left:0"
                         clearable
                         placeholder="请选择您申请提供服务的市">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <!-- <el-form-item label="类型"
                        prop="resource">
            <el-radio-group v-model="service.resource">
              <el-radio label="个人"></el-radio>
              <el-radio label="企业/政府"></el-radio>
            </el-radio-group>
          </el-form-item> -->
          <el-form-item label="职业类别"
                        prop="industry">
            <el-select v-model="service.industry"
                       style="width:100%"
                       placeholder="请选择您提供服务的工作类别">
              <el-option label="外卖配送员"
                         value="1"></el-option>
              <el-option label="同城快递员"
                         value="2"></el-option>
              <el-option label="网约车司机"
                         value="3"></el-option>
              <el-option label="环保回收员"
                         value="4"></el-option>
              <el-option label="网约技能工"
                         value="5"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="身份证件"
                        prop="license">
            <span>请上传您的个人身份证</span>
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

          <el-form-item label="执业资格"
                        v-if="service.industry === '1'"
                        prop="license_only_only">
            <span>请上传您的健康证</span>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl_only"
                   alt="">
            </el-dialog>
          </el-form-item>

          <el-form-item label="执业资格"
                        v-if="service.industry === '2'"
                        prop="license_only">
            <span>请上传您的健康证</span>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl_only"
                   alt="">
            </el-dialog>
          </el-form-item>

          <el-form-item label="执业资格"
                        v-if="service.industry === '3'"
                        prop="license_only">
            <span>请上传您的驾驶证、行驶证、车辆照片</span>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl_only"
                   alt="">
            </el-dialog>
          </el-form-item>

          <el-form-item label="执业资格"
                        v-if="service.industry === '4'"
                        prop="license_only">
            <span>请上传您的健康证</span>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl_only"
                   alt="">
            </el-dialog>
          </el-form-item>

          <el-form-item label="执业资格"
                        v-if="service.industry === '5'"
                        prop="license_only">
            <span>请上传您的职业所需的相关证明</span>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl_only"
                   alt="">
            </el-dialog>
          </el-form-item>

          <el-form-item label="联系地址"
                        prop="address">
            <el-input v-model="service.address"
                      clearable
                      placeholder="请填写您现居住地的详细地址具体到门牌号"></el-input>
          </el-form-item>

          <el-form-item label="固定电话"
                        prop="PePhe">
            <el-input placeholder="请填写店铺固定电话"
                      clearable
                      v-model="service.PePhe"></el-input>
          </el-form-item>
          <el-form-item label="联系电话"
                        prop="PePheS">
            <el-input placeholder="请填写您常用的手机号码"
                      clearable
                      v-model="service.PePhe"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱"
                        prop="email">
            <el-input placeholder="请填写您的常用邮箱"
                      clearable
                      v-model="service.email"></el-input>
          </el-form-item>

          <!-- <el-form-item label="企业负责人姓名"
                        prop="peName">
            <el-input type="input"
                      clearable
                      placeholder="请填写您企业联系人姓名"
                      v-model="service.peName"></el-input>
          </el-form-item> -->
          <div class="reg-agreement">
            <el-checkbox>我已认真阅读并完全同意美城茂商家入驻协议中的所有条款</el-checkbox>
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
        callback(new Error('请选择您申请提供服务的省'));
      }
      if (!this.service.city.length) {
        callback(new Error('请选择您申请提供服务的市'));
      }

      if (this.service.province.length && this.service.city.length) {
        callback();
      }
    }

    var license = (rule, value, callback) => {
      if (!this.dialogImageUrl.length) {
        callback(new Error('请上传您的个人身份证'));
      } else {
        callback();
      }
    }

    var license_only = (rule, value, callback) => {
      if (!this.dialogImageUrl_only.length) {
        let returnName = ''
        switch (this.service.industry) {
          case '1':
            returnName = '请上传您的健康证'
            break;
          case '2':
            returnName = '请上传您的健康证'
            break;
          case '3':
            returnName = '请上传您的驾驶证、行驶证、车辆照片'
            break;
          case '4':
            returnName = '请上传您的健康证'
            break;
          case '5':
            returnName = '请上传您的职业所需的相关证明'
            break;
        }
        callback(new Error(returnName));
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
        email: '',
        dateOfBirth: '',
      },

      serviceLes: {
        dateOfBirth: [{
          required: true, message: '请选择出生日期', trigger: 'blur'
        }],
        name: [
          { required: true, message: '请填写身份证上真实姓名', trigger: 'blur' }
        ],
        region: [
          { required: true, validator: regions, trigger: 'change' }
        ],
        address: [
          { required: true, message: '请填写您现居住地的详细地址具体到门牌号', trigger: 'blur' },
        ],

        addName: [
          { required: true, message: '请填写性别', trigger: 'blur' },
        ],
        email: [
          { required: true, message: '请填写您的常用邮箱', trigger: 'blur' }
        ],
        industry: [
          { required: true, message: '请选择您提供服务的工作类别', trigger: 'change' }
        ],
        peName: [
          { required: true, message: '请填写您企业联系人姓名', trigger: 'blur' }
        ],

        PePhe: [
          { required: true, message: '请填写企业负责人联系电话', trigger: 'blur' }
        ],
        PePheS: [
          { required: true, message: '请填写您常用的手机号码', trigger: 'blur' }
        ],
        license: [{
          required: true, validator: license, trigger: 'change'
        }],

        license_only: [{
          required: true, validator: license_only, trigger: 'change'
        }]
        // PePhe: [
        //   { required: true, message: '请填写您企业联系人姓名', trigger: 'blur' }
        // ],
        // desc: [
        //   { required: true, message: '请填写活动形式', trigger: 'blur' }
        // ]
      },

      dialogImageUrl: '',
      dialogImageUrl_only: '',
      dialogVisible: false
    }
  },

  methods: {
    changeJoin () {
      this.$refs.ruleForm.resetFields();
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
