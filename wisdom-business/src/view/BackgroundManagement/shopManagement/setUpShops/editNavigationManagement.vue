<template>

  <div class="imageAds">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <el-form-item label="栏目名称">
        <el-input v-model="form.title"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="图片"
                    prop="host">
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
        <img :src="form.nav_img"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="栏目链接">
        <el-input v-model="form.link"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="文字说明">
        <el-input v-model="form.alt"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="目标框架">
        <el-radio v-model="form.target"
                  label="0">本窗口</el-radio>
        <el-radio v-model="form.target"
                  label="1">新窗口</el-radio>
      </el-form-item>
      <el-form-item label="栏目类型">
        <el-radio v-model="form.pos"
                  label="head">顶部导航</el-radio>
        <el-radio v-model="form.pos"
                  label="foot">底部导航</el-radio>
      </el-form-item>
      <el-form-item label="位置排序">
        <el-input v-model="form.view"
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
      checkList: [],
      form: {
        title: '',
        nav_img: '',
        alt: '',
        target: '',
        pos: '',
        link: '',
        view: '',
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
      dialogVisible: false,
      submitBtn: {
        loading: false,
        text: '提交'
      },
    }
  },
  computed: {},
  methods: {
    getNavItem () {
      this.$api.getNavItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = {
          title: res.data.title,
          nav_img: res.data.nav_img,
          alt: res.data.alt,
          target: res.data.target + '',
          pos: res.data.pos,
          link: res.data.link,
          view: res.data.view,
        }
      })
    },

    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$route.query.uid) {
            this.$api.setNavItem({
              uid: this.$route.query.uid,
              pid: '0',
              title: this.form.title,
              nav_img: this.form.nav_img,
              alt: this.form.alt,
              target: this.form.target,
              pos: this.form.pos,
              link: this.form.link,
              view: this.form.view,
              token: JSON.parse(this.$store.state.token).token
            }).then(res => {
              this.$router.push('/setUpShops/navigationManagement')
            })
          } else {
            this.$api.addNavItem({
              pid: '0',
              title: this.form.title,
              nav_img: this.form.nav_img,
              alt: this.form.alt,
              target: this.form.target,
              pos: this.form.pos,
              link: this.form.link,
              view: this.form.view,
              token: JSON.parse(this.$store.state.token).token
            }).then(res => {
              this.$router.push('/setUpShops/navigationManagement')
            })
          }

        } else {
          return false;
        }
      });
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
      this.form.nav_img = `${this.qiniuaddr}${response.key}`;
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
      this.getNavItem()
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
