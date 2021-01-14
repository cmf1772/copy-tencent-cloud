<template>
  <div class="merchant_page"
       :style="{ height: heights }">
    <el-form :model="ruleForm"
             ref="ruleForm"
             label-width="160px"
             class="merchant_ruleForm"
             label-position="right">
      <el-form-item label="商铺URL"
                    prop="shop_url">
        <el-input v-model="ruleForm.shop_url"
                  placeholder="例: http://www.meicheng58.com"></el-input>
        <p style="color: #999;">↑ 格式：http://www.domain.com</p>
      </el-form-item>
      <el-form-item label="URL配置1（域名名称）"
                    prop="config_url">
        <el-input v-model="ruleForm.config_url"
                  placeholder="例: meicheng58.com"></el-input>
        <p style="color: #999;">↑ 格式：domain 注意只取域名中间段部分</p>
      </el-form-item>
      <el-form-item label="URL配置2（COOKIE）"
                    prop="configCookie_url">
        <el-input v-model="ruleForm.configCookie_url"
                  placeholder="例: .meicheng58.com"></el-input>
        <p style="color: #999;">↑ 格式：.domain.com 注意域名前一定要带"."</p>
      </el-form-item>
      <el-form-item label="商场名称"
                    prop="shop_name">
        <el-input v-model="ruleForm.shop_name"
                  placeholder="美城网"></el-input>
      </el-form-item>
      <el-form-item label="企业名称"
                    prop="company_name">
        <el-input v-model="ruleForm.company_name"
                  placeholder="美城互联（北京）智能科技发展有限公司"></el-input>
      </el-form-item>
      <el-form-item label="ICP备案号码"
                    prop="Internet_ICP">
        <el-input v-model="ruleForm.Internet_ICP"
                  placeholder="例: 京ICP备19015675"></el-input>
      </el-form-item>
      <el-form-item label="货币符号"
                    prop="currency_symbol">
        <el-input v-model="ruleForm.currency_symbol"></el-input>
      </el-form-item>
      <el-form-item label="模版选择"
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
      </el-form-item>
      <el-form-item label="LOGO"
                    prop="logo">
        <el-upload class="upload-demo"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :file-list="fileList"
                   list-type="picture">
          <el-button size="small"
                     type="primary">点击上传</el-button>
          <div slot="tip"
               class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="微信二维码"
                    prop="logo">
        <el-upload class="upload-demo"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :file-list="fileList"
                   list-type="picture">
          <el-button size="small"
                     type="primary">点击上传</el-button>
          <div slot="tip"
               class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="标题附加字"
                    prop="extra_byte">
        <el-input v-model="ruleForm.extra_byte"
                  placeholder="例: 新媒体、新社交、新电商、新服务"></el-input>
        <p style="color: #999;">
          ↑
          网页标题通常是搜索引擎关注的重点，本附加字设置将出现在标题中商铺名称的后面，如果有多个关键字，建议用
          "|"、","(不含引号) 等符号分隔。
        </p>
      </el-form-item>
      <el-form-item label="关键字"
                    prop="keyword_format">
        <el-input v-model="ruleForm.keyword_format"
                  placeholder="例: 新媒体、新社交、新电商、新服务"></el-input>
        <p style="color: #999;">
          ↑
          用于记录商城关键字，多个关键字请用半角逗号隔开，填写此栏可增加搜索引擎关注度。
        </p>
      </el-form-item>
      <el-form-item label="描述"
                    prop="describe">
        <el-input v-model="ruleForm.describe"
                  placeholder="例: 新媒体、新社交、新电商、新服务"></el-input>
        <p style="color: #999;">
          ↑ 用于记录商城概要与描述，可增加搜索引擎关注度。
        </p>
      </el-form-item>

      <el-form-item label="是否支持二级域名"
                    prop="sld">
        <el-radio-group v-model="ruleForm.sld">
          <el-radio :label="0">支持</el-radio>
          <el-radio :label="1">不支持</el-radio>
        </el-radio-group>
        <p style="color: #999;">
          ↑ 只有域名泛解析正确设置，才能支持二级域名自动绑定!
        </p>
      </el-form-item>
      <el-form-item label="是否开启伪静态"
                    prop="imitation_status">
        <el-radio-group v-model="ruleForm.imitation_status">
          <el-radio :label="0">开启</el-radio>
          <el-radio :label="1">关闭</el-radio>
        </el-radio-group>
        <p style="color: #999;">
          ↑ 有利于搜索引擎关注，轻微加重服务器负担。
        </p>
      </el-form-item>

      <el-form-item label="是否关闭网店"
                    prop="online_store">
        <el-radio-group v-model="ruleForm.online_store">
          <el-radio :label="0">开启</el-radio>
          <el-radio :label="1">关闭</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="关闭原因"
                    prop="close_reason">
        <el-input type="textarea"
                  :rows="3"
                  placeholder="请输入关闭原因"
                  v-model="ruleForm.close_reason">
        </el-input>
      </el-form-item>
      <el-form-item label="底部代码"
                    prop="bottom_code">
        <el-input type="textarea"
                  :rows="3"
                  placeholder="请输入底部代码"
                  v-model="ruleForm.bottom_code">
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
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      heights: window.innerHeight - 160 + "px"
    };
  },
  methods: {
    submitForm (formName) { },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    handlePreview () { },
    handleRemove () { },
    beforeRemove () { },
    handleExceed () { },
    getSettingItem () {
      this.$api.getSettingItem({
        type: "basis",
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {

      })
    }
  },

  mounted () {
    this.getSettingItem()
  }
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
