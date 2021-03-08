<template>
  <div class="trustManagement"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 我要托管：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="申请条件："
                    style="width:100%"
                    prop="displayName">已开通网上商铺的商家!
      </el-form-item>
      <el-form-item label="商铺名称："
                    style="width: 100%"
                    prop="displayName">
        <el-input v-model="form.shop_name"
                  placeholder="15个汉字内 例如：***有限公司"></el-input>
      </el-form-item>
      <el-form-item label="商铺类型："
                    prop="displayName">
        <el-select v-model="form.sellshow"
                   style="width:100%"
                   clearable
                   placeholder="请选择">
          <el-option label="销售型商铺"
                     value="1"></el-option>
          <el-option label="展示型商铺"
                     value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属分类："
                    prop="displayName">
        <el-select v-model="form.shop_cat"
                   style="width:100%"
                   clearable
                   placeholder="请选择">
          <el-option v-for="(item, index) in pageList"
                     :key="index"
                     :label="item.board_title"
                     :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主营项目："
                    style="width: 100%"
                    prop="displayName">
        <el-input v-model="form.run_product"
                  placeholder="例如：男女服饰，男女皮鞋"></el-input>
      </el-form-item>
      <el-form-item label="详细地址："
                    prop="displayName">
        <el-input v-model="form.address"
                  placeholder="请填写具体街道，例如：南昌路88号"></el-input>
      </el-form-item>

      <el-form-item label="联系人："
                    prop="displayName">
        <el-input v-model="form.name"
                  placeholder=""></el-input>

      </el-form-item>
      <el-form-item label="联系电话："
                    prop="displayName">
        <el-input v-model="form.tel"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="联系QQ："
                    prop="displayName">
        <el-input v-model="form.qq"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="商铺logo："
                    style="width: 100%"
                    prop="name">
        <el-input v-model="form.logo_tip"
                  placeholder="店标名字"></el-input>
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
      <el-form-item label="商铺banner："
                    style="width: 100%"
                    prop="name">
        <el-input v-model="form.banner_tip"
                  style="width: 50%"
                  placeholder="商铺横幅文字"></el-input>
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
        <img :src="form.banner"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="商铺描述："
                    prop="displayName">
        <el-input v-model="form.shop_desc"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="给该项目留言："
                    style="width:100%"
                    prop="displayName">
        <el-input v-model="form.msg"
                  type="textarea"
                  placeholder=""></el-input>
      </el-form-item>

    </el-form>
    <el-button type="primary"
               @click="applyShop"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'trustManagement',

  data () {
    return {
      form: {
        shop_name: '',
        sellshow: '',
        shop_cat: '',
        run_product: '',
        address: '',
        name: '',
        tel: '',
        qq: '',
        logo_tip: '',
        up_logo: '',
        banner_tip: '',
        banner: '',
        shop_desc: '',
        msg: '',
        token: ''
      },
      height: window.innerHeight - 100 + 'px',
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      fileList: [],
      pageList: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/'
    }
  },

  mounted () {
    this.$api.getBoardPageList({
      order_field: "od",
      order_type: "desc",
      token: JSON.parse(this.$store.state.token).token
    }).then(res => {
      this.pageList = res.data.items
    })
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
  },

  methods: {
    applyShop () {
      this.$api.applyShop({
        shop_name: this.form.shop_name,
        sellshow: this.form.sellshow,
        shop_cat: this.form.shop_cat,
        run_product: this.form.run_product,
        address: this.form.address,
        name: this.form.name,
        tel: this.form.tel,
        qq: this.form.qq,
        logo_tip: this.form.logo_tip,
        up_logo: this.form.up_logo,
        banner_tip: this.form.banner_tip,
        banner: this.form.banner,
        shop_desc: this.form.shop_desc,
        msg: this.form.msg,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
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
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id + '/shop/' + file.name}`;
    },

    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      this.form.up_logo = `${this.qiniuaddr}${response.key}`;
    },

    uploadSuccess2 (response, file, fileList) {  //图片上传成功的方法
      this.form.banner = `${this.qiniuaddr}${response.key}`;
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
.trustManagement {
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