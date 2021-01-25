<template>
  <div class="shopCertification"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 核心设置：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="实体商铺认证（营业执照证书）"
                    style="width: 100%"
                    prop="displayName">
        {{info.enterprice_certify}}
      </el-form-item>
      <el-form-item label="证件图片："
                    style="width: 100%"
                    prop="name">
        <div class="img"
             style="width: 300px">
          <img :src="info.shop_file.up_licence"
               style="width: 100%"
               alt="">
        </div>
      </el-form-item>
      <el-form-item label="证件扫描图："
                    style="width: 100%"
                    prop="name">
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
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 个人身份认证（其它有效证件）
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="认证状态："
                    style="width: 100%"
                    prop="displayName">
        {{info.personal_certify}}
      </el-form-item>
      <el-form-item label="证件图片："
                    style="width: 100%"
                    prop="name">
        <div class="img"
             style="width: 300px">
          <img :src="info.shop_file.up_licence_thumb"
               style="width: 100%"
               alt="">
        </div>
      </el-form-item>
      <el-form-item label="证件扫描图："
                    style="width: 100%"
                    prop="name">
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
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 申请消保 <span class="redColor">消保认证是指商铺缴纳一定数额的消费者保障金，用于交易纠纷时先行赔付给买家</span>
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="消保信息："
                    style="width: 100%"
                    prop="name">
        您当前消保账户余额为 <span class="redColor">{{info.shop_file.xb_money}}</span> ，如果不足以支持退货，请及时充值
      </el-form-item>
      <el-form-item label="申请费用："
                    style="width: 100%"
                    prop="displayName">
        您此次充值金额为：<el-input v-model="form.xb_money"
                  style="width: 150px"></el-input> 元 （友情提示：每次充值金额不低于{{info.mm_member_money_txt}}）
      </el-form-item>
      <el-form-item label="支付方式："
                    style="width: 100%"
                    prop="name">
        <div>
          <el-checkbox v-model="form.advance">使用预付款支付，您当前账户预付款余额：<span class="redColor">{{info.mm_price_sign}}{{info.mm_member_money}}</span></el-checkbox>
        </div>
        <div>
          不足部分使用其它方式支付 支付密码：
          <el-input v-model="form.pay_pass"
                    style="width: 150px">
          </el-input>
          还没设置支付密码？ <span class="redColor">现在就去设置</span> 。
        </div>
        <div>
          <el-radio v-model="form.pay_id"
                    label="5">支付宝支付 支付宝是阿里旗下产品，是国内最大的，使用人数最多的第三方支付系统，安全便捷</el-radio>
        </div>
        <div>
          <el-radio v-model="form.pay_id"
                    label="7">微信pc支付 微信pc支付</el-radio>
        </div>
        <div>
          <el-radio v-model="form.pay_id"
                    label="8">微信wap支付 微信wap支付</el-radio>
        </div>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               @click="setXb"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'shopCertification',

  data () {
    return {
      value: false,
      dialogImageUrl: '',
      dialogVisible: false,
      form: {
        pay_id: '',
        advance: '',
        xb_money: '',
        pay_pass: ''
      },
      info: {
        shop_file: {
          up_licence: '',
          up_licence_thumb: ''
        }
      },
      height: window.innerHeight - 100 + 'px',
      fileList: [],
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      fileList: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
    }
  },

  mounted () {
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    this.getSupCheckInfo()
  },

  methods: {
    setXb () {
      this.$api.setXb({
        pay_id: this.form.pay_id,
        advance: this.form.advance ? 1 : 0,
        xb_money: this.form.xb_money,
        pay_pass: this.form.pay_pass,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        if (res.data.succ == 0) {
          this.$message({
            type: 'error',
            message: res.data.err
          })
        } else {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })

      this.$api.setIdCard({

      }).then(res => {

      })
    },

    getSupCheckInfo () {
      this.$api.getSupCheckInfo({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.info = res.data
      })
    },

    // 上传logo
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'knowledge/' + file.name}`;
    },

    // 个人
    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      this.info.shop_file.up_licence_thumb = `${this.qiniuaddr}${response.key}`;
      this.$api.setIdCard({
        up_id_card: this.info.shop_file.up_licence_thumb,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
      })
    },

    // 企业
    uploadSuccess2 (response, file, fileList) {  //图片上传成功的方法
      this.info.shop_file.up_licence = `${this.qiniuaddr}${response.key}`;
      this.$api.setLicence({
        up_id_card: this.info.shop_file.up_licence,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
      })
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
    }
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
.shopCertification {
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