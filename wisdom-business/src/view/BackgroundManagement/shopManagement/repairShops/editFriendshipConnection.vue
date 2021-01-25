<template>

  <div class="editFriendshipConnection">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <el-form-item label="网站名称"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="链接说明"
                    prop="serviceName">
        <el-input v-model="form.note"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="链接网址"
                    prop="host">
        <el-input v-model="form.url"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="显示顺序"
                    prop="port">
        <el-input v-model="form.disp"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="logo"
                    prop="logo">
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
        <img :src="form.logo"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit('form')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import driverService from '../../service/driver'
export default {
  name: 'editFriendshipConnection',
  data () {
    return {
      form: {
        name: '',
        note: '',
        url: '',
        disp: '',
        logo: ''
      },
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
  computed: {},

  mounted () {
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    if (this.$route.query.uid) {
      this.getLinkItem()
    }
  },

  methods: {
    getLinkItem () {
      this.$api.getLinkItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = {
          name: res.data.name,
          note: res.data.note,
          url: res.data.url,
          disp: res.data.displayorder,
          logo: res.data.logo
        }
      })
    },

    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.$route.query.uid) {
            this.$api.setLinkItem({
              uid: this.$route.query.uid,
              name: this.form.name,
              note: this.form.note,
              url: this.form.url,
              disp: this.form.disp,
              logo: this.form.logo,
              token: JSON.parse(this.$store.state.token).token
            }).then(res => {
              this.$router.push('/shopManagement/friendshipConnection')
            })
          } else {
            this.$api.addLinkItem({
              name: this.form.name,
              note: this.form.note,
              url: this.form.url,
              disp: this.form.disp,
              logo: this.form.logo,
              token: JSON.parse(this.$store.state.token).token
            }).then(res => {
              this.$router.push('/shopManagement/friendshipConnection')
            })
          }

        } else {
          return false;
        }
      });
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
      this.form.logo = `${this.qiniuaddr}${response.key}`;
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
