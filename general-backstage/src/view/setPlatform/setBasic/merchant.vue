<template>
  <div class="merchant_page"
       :style="{ height: heights }">
    <el-form :model="ruleForm"
             ref="ruleForm"
             label-width="160px"
             class="merchant_ruleForm"
             label-position="right">
      <el-form-item label="商铺URL"
                    prop="mm_mall_url">
        <el-input v-model="ruleForm.mm_mall_url"
                  placeholder="例: http://www.meicheng58.com"></el-input>
        <p style="color: #999;">↑ 格式：http://www.domain.com</p>
      </el-form-item>
      <el-form-item label="URL配置1（域名名称）"
                    prop="mm_domain_name">
        <el-input v-model="ruleForm.mm_domain_name"
                  placeholder="例: meicheng58.com"></el-input>
        <p style="color: #999;">↑ 格式：domain 注意只取域名中间段部分</p>
      </el-form-item>
      <el-form-item label="URL配置2（COOKIE）"
                    prop="mm_cookie_domain">
        <el-input v-model="ruleForm.mm_cookie_domain"
                  placeholder="例: .meicheng58.com"></el-input>
        <p style="color: #999;">↑ 格式：.domain.com 注意域名前一定要带"."</p>
      </el-form-item>
      <el-form-item label="商场名称"
                    prop="mm_mall_title">
        <el-input v-model="ruleForm.mm_mall_title"
                  placeholder="美城网"></el-input>
      </el-form-item>
      <el-form-item label="企业名称"
                    prop="mm_mall_address">
        <el-input v-model="ruleForm.mm_mall_address"
                  placeholder="美城互联（北京）智能科技发展有限公司"></el-input>
      </el-form-item>
      <el-form-item label="ICP备案号码"
                    prop="mm_company_num">
        <el-input v-model="ruleForm.mm_company_num"
                  placeholder="例: 京ICP备19015675"></el-input>
      </el-form-item>
      <el-form-item label="货币符号"
                    prop="mm_price_sign">
        <el-input v-model="ruleForm.mm_price_sign"></el-input>
      </el-form-item>
      <el-form-item label="主页Title"
                    prop="mm_mall_name">
        <el-input v-model="ruleForm.mm_mall_name"></el-input>
      </el-form-item>
      <!-- <el-form-item label="模版选择"
                    prop="template">
        <el-upload class="upload-demo"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   multiple
                   :limit="3"
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">点击上传</el-button>
          <div slot="tip"
               class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item> -->
      <el-form-item label="LOGO"
                    prop="logo">
        <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuData"
                      :on-remove="handleRemove"
                      :on-error="uploadError"
                      :on-success="uploadSuccess"
                      :before-upload="beforeAvatarUpload"
                      :limit="1"
                      multiple
                      style="width: 70%;"
                      :on-exceed="handleExceed"
                      :file-list="fileList">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
      </el-form-item>
      <el-form-item label="微信二维码"
                    prop="logo">
        <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuData"
                      :on-remove="handleRemoveTwo"
                      :on-error="uploadErrorTwo"
                      :on-success="uploadSuccessTwo"
                      :before-upload="beforeAvatarUploadTwo"
                      style="width: 70%;"
                      :limit="1"
                      multiple
                      :on-exceed="handleExceedTwo"
                      :file-list="fileListTwo">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
      </el-form-item>
      <el-form-item label="标题附加字"
                    prop="mm_seotitle">
        <el-input v-model="ruleForm.mm_seotitle"
                  placeholder="例: 新媒体、新社交、新电商、新服务"></el-input>
        <p style="color: #999;">
          ↑
          网页标题通常是搜索引擎关注的重点，本附加字设置将出现在标题中商铺名称的后面，如果有多个关键字，建议用
          "|"、","(不含引号) 等符号分隔。
        </p>
      </el-form-item>
      <el-form-item label="关键字"
                    prop="mm_keywords">
        <el-input v-model="ruleForm.mm_keywords"
                  placeholder="例: 新媒体、新社交、新电商、新服务"></el-input>
        <p style="color: #999;">
          ↑
          用于记录商城关键字，多个关键字请用半角逗号隔开，填写此栏可增加搜索引擎关注度。
        </p>
      </el-form-item>
      <el-form-item label="描述"
                    prop="mm_description">
        <el-input v-model="ruleForm.mm_description"
                  placeholder="例: 新媒体、新社交、新电商、新服务"></el-input>
        <p style="color: #999;">
          ↑ 用于记录商城概要与描述，可增加搜索引擎关注度。
        </p>
      </el-form-item>

      <el-form-item label="是否支持二级域名"
                    prop="mm_subdomain">
        <el-radio-group v-model="ruleForm.mm_subdomain">
          <el-radio :label="'0'">不支持</el-radio>
          <el-radio :label="'1'">支持</el-radio>
        </el-radio-group>
        <p style="color: #999;">
          ↑ 只有域名泛解析正确设置，才能支持二级域名自动绑定!
        </p>
      </el-form-item>
      <el-form-item label="是否开启伪静态"
                    prop="rewrite">
        <el-radio-group v-model="ruleForm.rewrite">
          <el-radio :label="'0'">关闭</el-radio>
          <el-radio :label="'1'">开启</el-radio>
        </el-radio-group>
        <p style="color: #999;">
          ↑ 有利于搜索引擎关注，轻微加重服务器负担。
        </p>
      </el-form-item>

      <el-form-item label="是否关闭网店"
                    prop="mm_close">
        <el-radio-group v-model="ruleForm.mm_close">
          <el-radio :label="'0'">否</el-radio>
          <el-radio :label="'1'">是</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="关闭原因"
                    prop="mm_close_desc">
        <el-input type="textarea"
                  :rows="3"
                  placeholder="请输入关闭原因"
                  v-model="ruleForm.mm_close_desc">
        </el-input>
      </el-form-item>
      <el-form-item label="底部代码"
                    prop="mm_footer_code">
        <el-input type="textarea"
                  :rows="3"
                  placeholder="请输入底部代码"
                  v-model="ruleForm.mm_footer_code">
        </el-input>
        <p style="color: #999;">
          如: 流量统计，外接在线客服系统代码。
        </p>
      </el-form-item>

      <el-form-item>
        <el-button type="primary"
                   @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [],
      ruleForm: {},
      heights: window.innerHeight - 160 + "px",
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
      QiniuDataTwo: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrlTwo: "", //提交到后台图片地址
      fileList: [],
      fileListTwo: [],
    };
  },
  mounted() {
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
      this.QiniuDataTwo.token = res.data.token.token
    })
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getSettingItem({
        type: 'basis',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.forEach((item, index) => {
          this.$set(this.ruleForm, `${item.cf_name}`, item.cf_value)
          if(item.cf_name == 'mm_logo') {
            this.uploadPicUrl = item.cf_value
            this.fileList.push({name: item.cf_value, url: item.cf_value})
          }
           if(item.cf_name == 'mm_wx_logo') {
            this.uploadPicUrlTwo = item.cf_value
            this.fileListTwo.push({name: item.cf_value, url: item.cf_value})
          }
        })
      })
    },
    submitForm (formName) {
      this.$newApi.setSettingItem({
        type: 'basis',
        mm_mall_url: this.ruleForm.mm_mall_url,
        mm_domain_name: this.ruleForm.mm_domain_name,
        mm_cookie_domain: this.ruleForm.mm_cookie_domain,
        mm_mall_title: this.ruleForm.mm_mall_title,
        mm_mall_address: this.ruleForm.mm_mall_address,
        mm_company_num: this.ruleForm.mm_company_num,
        mm_price_sign	: this.ruleForm.mm_price_sign,
        mm_mall_name: this.ruleForm.mm_mall_name,
        mm_skin_name: this.ruleForm.mm_skin_name,
        mm_logo: this.uploadPicUrl,
        mm_wx_logo: this.uploadPicUrlTwo,
        mm_seotitle: this.ruleForm.mm_seotitle,
        mm_keywords: this.ruleForm.mm_keywords,
        mm_description: this.ruleForm.mm_description,
        mm_subdomain: this.ruleForm.mm_subdomain,
        rewrite: this.ruleForm.rewrite,
        mm_close: this.ruleForm.mm_close,
        mm_close_desc: this.ruleForm.mm_close_desc,
        mm_footer_code: this.ruleForm.mm_footer_code,
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
    resetForm (formName) {
      this.uploadPicUrl = ''
      this.uploadPicUrlTwo = ''
      this.fileList = []
      this.fileListTwo = []
      this.$refs[formName].resetFields();
    },
    handleRemove (file, fileList) {
      this.uploadPicUrl = "";
    },
    uploadError (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      this.uploadPicUrl = `${JSON.parse(this.$store.state.token).client_id}/category/${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id}/category/${file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    handleRemoveTwo (file, fileList) {
      this.uploadPicUrlTwo = "";
    },
    uploadErrorTwo (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    uploadSuccessTwo (response, file, fileList) {  //图片上传成功的方法
      this.uploadPicUrlTwo = `${JSON.parse(this.$store.state.token).client_id}/category/${file.name}`;
    },
    beforeAvatarUploadTwo (file) {   //图片上传之前的方法
      this.QiniuDataTwo.data = file;
      this.QiniuDataTwo.key = `${JSON.parse(this.$store.state.token).client_id}/category/${file.name}`;
    },
    handleExceedTwo (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.merchant_page {
  background: #fff;
  border-radius: 4px;
  overflow: auto;
  margin-top: 10px;
  .merchant_ruleForm {
    width: 50%;
    padding: 20px;
    box-sizing: border-box;
    .el-form-item {
      margin-bottom: 10px;
    }
    .el-input {
      width: 70%;
    }
    p {
      line-height: 24px;
    }
  }
}
</style>
