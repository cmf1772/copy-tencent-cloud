<template>

  <div class="editbrandManagement">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <el-form-item label="品牌名称"
                    required>
        <el-input v-model="form.brandname"
                  placeholder="请填写所经营商品品牌"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="网 址"
                    required>
        <el-input v-model="form.weburl"
                  placeholder="请填写所经营品牌官方网址"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="所属分类">
        <el-select v-model="province"
                   style="width: 30%"
                   @change="categoryChange"
                   clearable>
          <el-option v-for="(item, index) in gdItemData" :key="index" :label="item.category_name" :value="item.uid"></el-option>
        </el-select>
        <el-select v-model="cateMat"
                   style="width: 30%"
                   clearable>
          <el-option v-for="(item, index) in cateData" :key="index" :label="item.category_name" :value="item.uid"></el-option>
        </el-select>
        <p>请正确选择您经营品牌的分类,否则官方审核不通过!</p>
      </el-form-item>
      <el-form-item label="排序"
                    required>
        <el-input v-model="form.train"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="品牌LOGO"
                    required>
        <el-upload class="upload-pic"
                  :action="domain"
                  :data="QiniuData"
                  :on-remove="handleRemove"
                  :on-error="uploadError"
                  :on-success="uploadSuccess"
                  :before-upload="beforeAvatarUpload"
                  :limit="1"
                  multiple
                  :on-exceed="handleExceed"
                  :file-list="fileList">
          <el-button size="small"
                    type="primary">选择图片</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="关键字" >
        <el-input type="textarea"
                  v-model="form.keywords"
                  style="width: 600px;"
                  rows="5"></el-input>
      </el-form-item>
      <el-form-item label="是否通过验证">
        <el-checkbox v-model="checked">备选项</el-checkbox>
      </el-form-item>
      <el-form-item label="品牌描述">
        <el-input type="textarea"
                  v-model="form.brief"
                  style="width: 600px;"
                  rows="5"></el-input>
        <p>请与官网品牌描述保持一致，非个人商铺信息</p>
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
export default {
  name: 'editbrandManagement',
  data () {
    return {
      checked: true,
      form: {},
      dialogVisible: false,
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {},

      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: '',
      fileList: [],
      gdItemData: [],
      cateData: [],
      province: '',
      cateMat: ''
    }
  },
  mounted() {
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })

    this.$newApi.CGgetCategoryList({
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.gdItemData = res.data
    })

    if(this.$route.query.uid !== 'add') {
      this.$newApi.getBrandItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
        if(res.data.logo !== '') {
          this.fileList.push({name: res.data.logo, url: res.data.logo})
          this.uploadPicUrl = res.data.logo
        }
        if(this.isCheck) {
          this.checked = true
        } else {
          this.checked = false
        }
        this.province = res.data.goods_category_pid
        this.$newApi.CGgetSubList({
          uid: res.data.goods_category_pid,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          this.cateData = res.data
        })
        this.cateMat = res.data.category_id
      })
    }
  },
  methods: {
    categoryChange() {
      this.cateMat = ''
      this.$newApi.CGgetSubList({
        uid: this.province,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.cateData = res.data
      })
    },

    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      if(this.$route.query.uid == 'add') {
        this.$newApi.addBrandItem({
          brandname: this.form.brandname,
          weburl: this.form.weburl,
          goods_category_pid: this.province,	
          goods_cat: this.cateMat,
          train: this.form.train,	
          logo_file: this.uploadPicUrl,	
          keywords: this.form.keywords,	
          isCheck: this.checked ? 1 : 0,
          brief: this.form.brief,
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
              message: '操作成功'
            })
            this.$router.go(-1);
          }
        })
      } else {
        this.$newApi.setBrandItem({
          uid: this.form.id,
          brandname: this.form.brandname,
          weburl: this.form.weburl,
          goods_category_pid: this.province,	
          goods_cat: this.cateMat,
          train: this.form.train,	
          logo_file: this.uploadPicUrl,	
          keywords: this.form.keywords,	
          isCheck: this.checked ? 1 : 0,
          brief: this.form.brief,
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
              message: '操作成功'
            })
            this.$router.go(-1);
          }
        })
      }
      
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
      this.uploadPicUrl = `${JSON.parse(this.$store.state.token).client_id}/brand/${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id}/brand/${file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },
  },
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
