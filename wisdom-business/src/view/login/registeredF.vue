<template>
  <div class="registered">
    <div class="form">
      <el-steps :active="2"
                finish-status="success"
                style="margin-top: 20px"
                simple>
        <el-step title="选择版本"></el-step>
        <el-step title="填写信息"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
      <div class="tit"
           @click="goMaent">
        <i class="el-icon-tickets"></i>
        商家入驻
      </div>
      <div class="con-form">
        <!-- 服务商入驻 -->
        <el-form label-width="130px"
                 class="demo-ruleForm">
          <el-form-item label="店主姓名">
            <el-input type="input"
                      clearable
                      placeholder='请填写店铺负责人姓名'
                      v-model="service.name"
                      autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="店铺名称">
            <el-input v-model="service.shop_name"
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
          <!-- <el-form-item label="所属行业"
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
          </el-form-item> -->

          <el-form-item label="所在区域">
            <div style="width:100%; display: flex">
              <el-select v-model="service.province"
                         clearable
                         style="width:100%"
                         @change="changeCity"
                         placeholder="所在省">
                <el-option v-for="(item, index) in $store.state.cityList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
              <el-select v-model="service.city"
                         clearable
                         style="width:100%;margin-left:0"
                         placeholder="所在市">
                <el-option v-for="(item, index) in $store.state.areaList"
                           :key="index"
                           :label="item.name"
                           :value="item.id"></el-option>
              </el-select>
            </div>
          </el-form-item>

          <el-form-item label="详细地址">
            <el-input v-model="service.address"
                      clearable
                      placeholder="请填写店铺详细地址具体到门牌号"></el-input>
          </el-form-item>

          <el-form-item label="固定电话">
            <el-input placeholder="请填写店铺固定电话"
                      clearable
                      v-model="service.tel1"></el-input>
          </el-form-item>
          <el-form-item label="联系手机">
            <el-input placeholder="请填写店铺负责人常用手机号"
                      clearable
                      v-model="service.tel2"></el-input>
          </el-form-item>
          <el-form-item label="联系邮箱">
            <el-input placeholder="请填写店铺负责人常用邮箱"
                      clearable
                      v-model="service.email"></el-input>
          </el-form-item>
          <el-form-item label="店主证件"
                        prop="license">
            <span>请上传店主身份证</span>
            <el-upload class="upload-pic mt"
                       :action="domain"
                       :data="QiniuData"
                       :on-error="uploadError"
                       :on-success="uploadSuccessGoodsFile2"
                       :before-remove="beforeRemove"
                       :before-upload="beforeAvatarUpload"
                       :limit="1"
                       multiple
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="small"
                         type="primary">选择图片</el-button>
            </el-upload>
            < img :src="qiniuaddr + service.up_id_card"
                 style="width: 50px; height: 50px"
                 alt="">
          </el-form-item>

          <el-form-item label="营业执照"
                        prop="business">
            <span>请上传店铺营业执照</span>
            <el-upload class="upload-pic mt"
                       :action="domain"
                       :data="QiniuData"
                       :on-error="uploadError"
                       :on-success="uploadSuccessGoodsFile1"
                       :before-remove="beforeRemove"
                       :before-upload="beforeAvatarUpload"
                       :limit="1"
                       multiple
                       :on-exceed="handleExceed"
                       :file-list="fileList">
              <el-button size="small"
                         type="primary">选择图片</el-button>
            </el-upload>
            < img :src="qiniuaddr + service.up_licence"
                 style="width: 50px; height: 50px"
                 alt="">
          </el-form-item>

          <el-form-item label="账户名称">
            <el-input v-model="service.taobao_name"
                      clearable
                      placeholder="请输入微信（支付宝）提现的账户名称"></el-input>
          </el-form-item>

          <el-form-item label="账号">
            <el-input placeholder="请输入您 微信（支付宝）提现的账号"
                      clearable
                      v-model="service.taobao_account"></el-input>
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
  </div>
</template>

<script>
export default {
  name: 'registered',
  data () {
    // var regions = (rule, value, callback) => {
    //   if (!this.service.province.length) {
    //     callback(new Error('请选择店铺所在省'));
    //   }
    //   if (!this.service.city.length) {
    //     callback(new Error('请选择店铺所在市'));
    //   }

    //   if (this.service.province.length && this.service.city.length) {
    //     callback();
    //   }
    // }

    // var license = (rule, value, callback) => {
    //   if (!this.dialogImageUrl.length) {
    //     callback(new Error('请上传店主身份证'));
    //   } else {
    //     callback();
    //   }
    // }

    // var business = (rule, value, callback) => {
    //   if (!this.dialogImageUrl.length) {
    //     callback(new Error('请上传店铺营业执照'));
    //   } else {
    //     callback();
    //   }
    // }

    return {
      height: 0,
      checked: false,
      service: {
        name: "",
        shop_name: "",
        supplier_cat: "",
        sellshow: "",
        shop_level: "",
        province: "",
        city: "",
        county: "",
        address: "",
        tel1: "",
        tel2: "",
        email: "",
        up_id_card: "",
        up_licence: "",
        account_type: "0",
        taobao_account: "",
        taobao_name: "",
        bank_account: "",
        bank: "",
        bank_name: "",
      },
      fileList: [],
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
      serviceLes: {
        // name: [
        //   { required: true, message: '请填写店铺负责人姓名', trigger: 'blur' }
        // ],
        // region: [
        //   { required: true, validator: regions, trigger: 'change' }
        // ],
        // address: [
        //   { required: true, message: '请填写店铺详细地址具体到门牌号', trigger: 'blur' },
        // ],

        // shop_name: [
        //   { required: true, message: '请填写商家店铺名称', trigger: 'blur' },
        // ],
        // email: [
        //   { required: true, message: '请填写店铺负责人常用邮箱', trigger: 'blur' }
        // ],
        // industry: [
        //   { required: true, message: '请选择店铺所属行业', trigger: 'change' }
        // ],
        // peName: [
        //   { required: true, message: '请填写您企业联系人姓名', trigger: 'blur' }
        // ],

        // accountName: [
        //   { required: true, message: '账户名称：请输入微信（支付宝）提现的账户名称', trigger: 'blur' }
        // ],
        // account: [
        //   { required: true, message: '请输入您 微信（支付宝）提现的账号', trigger: 'blur' }
        // ],


        // PePhe: [
        //   { required: true, message: '请填写企业负责人联系电话', trigger: 'blur' }
        // ],
        // PePheS: [
        //   { required: true, message: '请填写店铺负责人常用手机号', trigger: 'blur' }
        // ],
        // license: [{
        //   required: true, validator: license, trigger: 'change'
        // }]
        // ,
        // business: [{
        //   required: true, validator: business, trigger: 'change'
        // }]
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
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id + '/goods/' + file.name}`;
    },


    uploadSuccessGoodsFile2 (response, file, fileList) {  //图片上传成功的方法
      this.service.up_id_card = `${response.key}`;
    },

    uploadSuccessGoodsFile1 (response, file, fileList) {  //图片上传成功的方法
      this.service.up_licence = `${response.key}`;
    },

    beforeRemove (file, fileList) {
      // return this.$confirm(`确定移除 ${ file.name }？`);
    },

    uploadError (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    goMaent () {

    },

    changeCity () {
      this.service.city = ''
      this.$store.commit('GET_CITY', { id: this.service.province, name: 'areaList' })
    },

    goLogin () {
      this.$router.push('/login')
    },

    submitForm (formName) {
      if (!this.checked) {
        return this.$message({
          message: '请勾选条款',
          type: 'error'
        });
      }

      this.$api.SJapplyShop({
        name: this.service.name,
        shop_name: this.service.shop_name,
        supplier_cat: this.service.supplier_cat,
        sellshow: this.$route.query.id || 1,
        shop_level: this.$route.query.type_id || 1,
        province: this.service.province + '',
        city: this.service.city + '',
        county: this.service.county + '1',
        address: this.service.address,
        tel1: this.service.tel1,
        tel2: this.service.tel2,
        email: this.service.email,
        up_id_card: this.service.up_id_card,
        up_licence: this.service.up_licence,
        account_type: this.service.account_type,
        taobao_account: this.service.taobao_account,
        taobao_name: this.service.taobao_name,
        bank_account: this.service.bank_account,
        bank: this.service.bank,
        bank_name: this.service.bank_name,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.nameJson = res.data
      })
    },
  },

  mounted () {
    this.$store.commit('GET_CITY')
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
  },

  created () {
    this.height = window.innerHeight - 95
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
  overflow: auto;
  // background: #eeeeee;
  box-sizing: border-box;
  .form {
    width: 1024px;
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
      padding: 0 250px;
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