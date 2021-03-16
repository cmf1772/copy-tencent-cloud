<template>

  <div class="container"
       style="height: 100%">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <el-form-item label="品牌名称"
                    prop="name">
        <el-input v-model="form.brandname"
                  placeholder="请填写所经营商品品牌"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="网 址"
                    prop="serviceName">
        <el-input v-model="form.weburl"
                  placeholder="请填写所经营品牌官方网址"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="所属分类"
                    prop="host">
        <el-select v-model="form.goods_category_pid"
                   style="width: 298px"
                   @change="changeFun"
                   clearable>
          <el-option v-for="(item, index) in getBoardPageList"
                     :key="index"
                     :label="item.board_title"
                     :value="item.uid"></el-option>
        </el-select>
        <el-select v-model="form.goods_cat"
                   style="width: 298px"
                   clearable>
          <el-option v-for="(item, index) in getBoardPageListChildren"
                     :key="index"
                     :label="item.board_title"
                     :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Logo"
                    prop="port">
        <el-upload class="upload-pic mt"
                   :action="domain"
                   :data="QiniuData"
                   :on-error="uploadError"
                   :on-success="uploadSuccessGallery"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <img :src="qiniuaddr + form.logo_file"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="关键字"
                    prop="serviceName">
        <el-input v-model="form.keywords"
                  placeholder="请填写所经营品牌官方网址"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="品牌描述	">
        <el-input type="textarea"
                  placeholder="请与官网品牌描述保持一致，非个人商铺信息"
                  v-model="form.brief"
                  style="width: 600px;"
                  rows="5"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit('form')"
                   :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import driverService from '../../service/driver'
export default {
  name: 'add',
  data () {
    return {
      form: {
        brandname: '',
        weburl: '',
        goods_category_pid: '',
        goods_cat: '',
        train: '',
        logo_file: '',
        keywords: '',
        brief: '',
      },
      getBoardPageList: [],
      getBoardPageListChildren: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      fileList: [],
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
    }
  },

  mounted () {
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    this.getBoardPageListFun()
    let uid = this.$route.query.uid

    if (uid) {
      this.getBrandItem(uid)
    }
  },

  methods: {
    getBrandItem (uid) {
      this.$api.getBrandItem({
        uid: uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = {
          brandname: res.data.brandname,
          weburl: res.data.weburl,
          goods_category_pid: res.data.goods_category_pid,
          goods_cat: res.data.goods_cat,
          train: res.data.train,
          logo_file: res.data.logo,
          keywords: res.data.keywords,
          brief: res.data.brief,
        }
        this.changeFun()
      })
    },

    getBoardPageListFun () {
      this.$api.getBoardPageList({
        order_field: "od",
        order_type: "desc",
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.getBoardPageList = res.data.items
      })
    },

    changeFun () {
      this.$api.getBoardPageSubList({
        order_field: "uid",
        order_type: "asc",
        pid: this.form.goods_category_pid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form.goods_cat = ''
        this.getBoardPageListChildren = res.data.items
      })
    },
    goBack () {
      this.$router.go(-1);
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id + '/goods/' + file.name}`;
    },

    uploadSuccessGallery (response, file, fileList) {  //图片上传成功的方法
      this.form.logo_file = `${response.key}`;
    },

    uploadError (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },

    onSubmit (formName) {
      if (this.$route.query.uid) {
        this.$api.addBrandItem({
          uid: this.$route.query.uid,
          brandname: this.form.brandname,
          weburl: this.form.weburl,
          goods_category_pid: this.form.goods_category_pid,
          goods_cat: this.form.goods_cat,
          train: this.form.train,
          logo_file: this.form.logo_file,
          keywords: this.form.keywords,
          brief: this.form.brief,
          token: JSON.parse(this.$store.state.token).token
        }).then(res => {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.$router.push('/marketingManagement/brandManagement')
        })
      } else {
        this.$api.addBrandItem({
          brandname: this.form.brandname,
          weburl: this.form.weburl,
          goods_category_pid: this.form.goods_category_pid,
          goods_cat: this.form.goods_cat,
          train: this.form.train,
          logo_file: this.form.logo_file,
          keywords: this.form.keywords,
          brief: this.form.brief,
          token: JSON.parse(this.$store.state.token).token
        }).then(res => {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
          this.$router.push('/marketingManagement/brandManagement')
        })
      }
    }
  }
}
</script>
<style scoped>
.el-form {
  text-align: left !important;
}

.el-input__inner {
  width: 600px;
}

.el-date-editor {
  width: 290px !important;
}

.el-date-editor .el-input__inner {
  width: 100% !important;
}

.el-textarea__inner {
  width: 600px;
}
</style>
