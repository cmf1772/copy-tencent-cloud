<template>

  <div class="imageAds">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <el-form-item label="广告名"
                    prop="name">
        <el-input v-model="form.banner_subject"
                  :disabled="true"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="广告位置"
                    prop="banner_point">
        <div class="form-item">
          <el-input v-model="form.banner_subject"
                    :disabled="true"
                    style="width: 300px;"></el-input>
          <el-select v-model="form.banner_subject"
                     style="width:300px;margin-left: 0"
                     placeholder="请选择广告位置">
            <el-option label="左侧预留广告1"
                       value="list_ggz1"></el-option>
            <el-option label="左侧预留广告2"
                       value="list_ggz2"></el-option>
            <el-option label="左侧预留广告3"
                       value="list_ggz3"></el-option>
            <el-option label="左侧预留广告4"
                       value="list_ggz4"></el-option>
            <el-option label="banner"
                       value="shop_banner"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="广告大小"
                    prop="host">
        <el-input v-model="form.banner_width"
                  style="width: 200px;"></el-input>
        ✖️
        <el-input v-model="form.banner_height"
                  style="width: 200px;"></el-input>
        <span>按照提示尺寸上传广告图片</span>
      </el-form-item>
      <el-form-item label="广告种类"
                    prop="port">
        <el-radio v-model="form.banner_class"
                  label="0">图片广告</el-radio>
        <el-radio v-model="form.banner_class"
                  label="1">flash广告</el-radio>
      </el-form-item>
      <el-form-item label="广告文件">
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
        <img :src="form.banner_file1"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="广告URL">
        <el-input v-model="form.banner_url"
                  style="width: 600px;"></el-input>
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
  name: 'imageAds',
  data () {
    return {
      form: {
        banner_subject: 'list_ggz1',
        banner_height: '',
        banner_width: '',
        banner_class: '',
        banner_file1: '',
        banner_url: '',
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
      submitBtn: {
        loading: false,
        text: '提交'
      },
    }
  },
  computed: {},
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$route.query.uid) {
            this.$api.tgsetCycleItem({
              uid: this.$route.query.uid,
              banner_subject: this.form.banner_subject,
              banner_point: this.form.banner_subject,
              banner_height: Number(this.form.banner_height),
              banner_width: Number(this.form.banner_width),
              banner_class: this.form.banner_class,
              banner_file1: this.form.banner_file1,
              banner_url: this.form.banner_url,
              token: JSON.parse(this.$store.state.token).token
            }).then(res => {
              this.$message({
                message: '编辑成功',
                type: 'success'
              });
              this.$router.push('/shopManagement/imageAds')
            })
          } else {
            this.$api.tgaddCycleItem({
              banner_subject: this.form.banner_subject,
              banner_point: this.form.banner_subject,
              banner_height: Number(this.form.banner_height),
              banner_width: Number(this.form.banner_width),
              banner_class: this.form.banner_class,
              banner_file1: this.form.banner_file1,
              banner_url: this.form.banner_url,
              token: JSON.parse(this.$store.state.token).token
            }).then(res => {
              this.$message({
                message: '添加成功',
                type: 'success'
              });
              this.$router.push('/shopManagement/imageAds')
            })
          }

        } else {
          return false;
        }
      });
    },

    getBannerItem () {
      this.$api.getBannerItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form.banner_subject = res.data.banner_subject
        this.form.banner_point = res.data.banner_point
        this.form.banner_height = res.data.banner_height
        this.form.banner_width = res.data.banner_width
        this.form.banner_class = res.data.banner_class + ''
        this.form.banner_file1 = res.data.banner_file1
        this.form.banner_url = res.data.banner_url
      })
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'knowledge/' + file.name}`;
    },

    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      this.form.banner_file1 = `${this.qiniuaddr}${response.key}`;
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
    if (this.$route.query.uid) {
      this.getBannerItem()
    }
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
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
