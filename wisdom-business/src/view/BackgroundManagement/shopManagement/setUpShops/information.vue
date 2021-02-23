<template>
  <div class="information"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 核心设置：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="商铺名称"
                    prop="displayName">
        <el-input v-model="form.shop_name"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="当前模板">
        <div class="form-item">
          <span style="margin-right: 10px">默认模版</span>
          <el-button type="primary">点击预览</el-button>
          <el-button type="primary"
                     @click="getemplate"
                     plain>点击更换</el-button>
        </div>
      </el-form-item>
      <el-form-item label="公司地址">
        <el-input v-model="form.mm_mall_address"></el-input>
      </el-form-item>
      <el-form-item label="ICP备案号码">
        <el-input v-model="form.mm_company_num"></el-input>
      </el-form-item>
      <el-form-item label="主营项目">
        <el-input v-model="form.run_product"
                  type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="商铺描述">
        <el-input v-model="form.mm_description"
                  type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.mm_tel"></el-input>
      </el-form-item>
      <el-form-item label="手机号码">
        <el-input v-model="form.mm_mobile"></el-input>
      </el-form-item>
      <el-form-item label="所属区域">
        <div class="form-item">
          <el-select v-model="form.province"
                     clearable
                     style="width:100%"
                     @change="changeCity"
                     placeholder="所在省">
            <el-option v-for="(item, index) in $store.state.cityList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     clearable
                     @change="changeAreaList"
                     style="width:100%;margin-left:0"
                     placeholder="所在市">
            <el-option v-for="(item, index) in $store.state.areaList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.county"
                     clearable
                     @change="changeCounty"
                     style="width:100%;margin-left:0"
                     placeholder="所在县">
            <el-option v-for="(item, index) in $store.state.county"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.shop_address"></el-input>
      </el-form-item>
      <el-form-item label="商铺LOGO"
                    style="width: 100%">
        <el-upload class="upload-pic mt"
                   :action="domain"
                   :data="QiniuData"
                   :on-error="uploadError"
                   :on-success="uploadSuccess"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <img :src="form.up_logo"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="商铺BANNER	"
                    style="width: 100%">
        <el-upload class="upload-pic mt"
                   :action="domain"
                   :data="QiniuData"
                   :on-error="uploadError"
                   :on-success="uploadSuccess2"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <img :src="form.shop_banner"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="微信二维码"
                    style="width: 100%">
        <el-upload class="upload-pic mt"
                   :action="domain"
                   :data="QiniuData"
                   :on-error="uploadError"
                   :on-success="uploadSuccess3"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <img :src="form.up_wx_logo"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 微信公众号整合
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="APP ID"
                    style="width: 100%"
                    prop="displayName">
        <el-input v-model="form.mm_wx_app_id"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="APP SECRET"
                    style="width: 100%"
                    prop="displayName">
        <el-input v-model="form.mm_wx_app_secret"></el-input>
      </el-form-item>
      <el-form-item label=""
                    style="width: 100%"
                    prop="displayName">
        还没有接入应用？ <a href="http://mp.weixin.qq.com/"
           target="_blank"
           class="redColor"
           rel="noopener noreferrer">点击此处进行申请>></a>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 当前提现账号设置
    </p>
    <el-form ref="form"
             label-width="130px">
      <el-form-item label="账号类型"
                    prop="displayName">
        <div>银行卡</div>
      </el-form-item>
      <el-form-item label="账号信息"
                    prop="displayName">
        <p>银行卡账号：****************</p>
        <p>开户行：*****</p>
        <p>开户名：**</p>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 基本显示设置
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="是否开启发票">
        <el-radio v-model="form.mm_close_cess"
                  label="0">使用</el-radio>
        <el-radio v-model="form.mm_close_cess"
                  label="1">不使用</el-radio>
      </el-form-item>

      <el-form-item label="发票费率:"
                    prop="displayName">
        <el-input placeholder="请输入内容"
                  v-model="form.mm_cess_fee"
                  class="input-with-select">
          <span slot="append">%</span>
        </el-input> 请填写整数，不开发票请留空
      </el-form-item>
      <el-form-item label="是否关闭网店">
        <el-radio v-model="form.mm_close"
                  label="0">关闭</el-radio>
        <el-radio v-model="form.mm_close"
                  label="1">开启</el-radio>
      </el-form-item>
      <el-form-item label="关闭原因">
        <el-input v-model="form.mm_close_desc"
                  type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="底部代码"
                    style="width: 100%">
        <el-input v-model="form.mm_footer_code"
                  type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               @click="setEnvSet"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
export default {
  name: 'information',

  data () {
    return {
      form: {
        shop_name: "",
        mm_mall_address: "",
        mm_company_num: "",
        run_product: "",
        mm_description: "",
        mm_tel: "",
        mm_mobile: "",
        province: "",
        city: "",
        county: "",
        shop_address: "",
        up_logo: "",
        shop_banner: "",
        up_wx_logo: "",
        mm_wx_app_id: "",
        mm_wx_app_secret: "",
        mm_close_cess: "",
        mm_cess_fee: "",
        mm_close: "",
        mm_close_desc: "",
        mm_footer_code: ""
      },
      fileList: [],
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      fileList: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
      height: window.innerHeight - 100 + 'px',
    }
  },

  methods: {
    getemplate () {
      this.$router.push('/shopManagement/templateToBuy')
    },

    goNavSet () {
      this.$router.push('/setUpShops/navigationStyleSettings?nameType=导航样式设置')
    },

    setEnvSet () {
      this.$api.setEnvSet({
        shop_name: this.form.shop_name,
        mm_mall_address: this.form.mm_mall_address,
        mm_company_num: this.form.mm_company_num,
        run_product: this.form.run_product,
        mm_description: this.form.mm_description,
        mm_tel: this.form.mm_tel,
        mm_mobile: this.form.mm_mobile,
        province: this.form.province + '',
        city: this.form.city + '',
        county: this.form.county + '',
        shop_address: this.form.shop_address,
        up_logo: this.form.up_logo,
        shop_banner: this.form.shop_banner,
        up_wx_logo: this.form.up_wx_logo,
        mm_wx_app_id: this.form.mm_wx_app_id,
        mm_wx_app_secret: this.form.mm_wx_app_secret,
        mm_close_cess: this.form.mm_close_cess,
        mm_cess_fee: this.form.mm_cess_fee,
        mm_close: this.form.mm_close,
        mm_close_desc: this.form.mm_close_desc,
        mm_footer_code: this.form.mm_footer_code,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
      })
    },

    getEnvSet () {
      this.$api.getEnvSet({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = {
          shop_name: res.data.shop.shop_name,
          run_product: res.data.shop.run_product,
          province: Number(res.data.shop.province),
          city: Number(res.data.shop.city),
          county: Number(res.data.shop.county),
          shop_address: res.data.shop.shop_address,
          up_logo: res.data.shop.up_logo,
          shop_banner: res.data.shop_banner.banner_file1,
          up_wx_logo: res.data.shop.up_wx_logo,
        }

        res.data.config.forEach(item => {
          this.$set(this.form, item.cf_name, item.cf_value)
          if (item.cf_name === 'mm_wx_logo') {
            this.$set(this.form, 'up_wx_logo', item.cf_value)
          }
        })

        this.$store.commit('GET_CITY', { id: this.form.province, name: 'areaList' })
        this.$store.commit('GET_CITY', { id: this.form.city, name: 'county' })
      })
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    changeCity () {
      this.form.city = ''
      this.form.platform = ''
      this.form.district = ''
      this.$store.commit('GET_CITY', { id: this.form.province, name: 'areaList' })
    },

    changeAreaList () {
      this.form.platform = ''
      this.form.district = ''
      this.$store.commit('GET_CITY', { id: this.form.city, name: 'county' })
    },
    changeCounty () {
      this.form.district = ''
      this.$store.commit('GET_CITY', { id: this.form.platform, name: 'district' })
    },

    // 上传logo
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = JSON.parse(this.$store.state.token).client_id + '/shop/' + file.name;
    },

    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      this.form.up_logo = `${this.qiniuaddr}${response.key}`;
    },

    uploadSuccess2 (response, file, fileList) {  //图片上传成功的方法
      this.form.shop_banner = `${this.qiniuaddr}${response.key}`;
    },

    uploadSuccess3 (response, file, fileList) {  //图片上传成功的方法
      this.form.up_wx_logo = `${this.qiniuaddr}${response.key}`;
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
  },

  mounted () {
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    this.getEnvSet()
    this.$store.commit('GET_CITY')
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.information {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 100px;
  overflow: auto;
}

.upload-wrap {
  width: 100%;
  height: 40px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  span {
    z-index: 1;
    line-height: 40px;
    color: #4bb3ff;
    font-size: 16px;
    margin-left: 30px;
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 2;
  }
}
</style>