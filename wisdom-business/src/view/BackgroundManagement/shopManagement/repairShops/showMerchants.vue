
<template>
  <div class="showMerchants"
       :style="{'height': height}">
    <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">形象展示：</p>
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <!-- required -->
      <el-form-item label="形象网址">
        <span class="hovertext">
          <a href="http://www.meicheng58.com/shopshow.php?sid=1">http://www.meicheng58.com/shopshow.php?sid=1</a>
        </span>
      </el-form-item>
      <el-form-item label="视频代码">
        <el-input v-model="form.video_code"
                  type="textarea"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="当前形象">

      </el-form-item>
      <el-form-item label="商家形象">
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
                     type="primary">选择商家形象图片</el-button>
        </el-upload>
        <img :src="form.promote_pic"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="黄页公告">
        <el-input v-model="form.supplier_notice"
                  type="textarea"
                  style="width: 600px;" />
      </el-form-item>
    </el-form>
    <div class="titleB">
      <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">企业证书：</p>
      <div>
        <i class="el-icon-circle-plus-outline"
           @click="add"></i>
        <i class="el-icon-remove-outline"
           @click="remove"></i>
      </div>
    </div>

    <div class="hidden">
      <el-form ref="form"
               :model="form"
               label-width="150px">
        <el-form-item label="证书">
          <el-upload class="upload-pic mt"
                     :action="domain"
                     :data="QiniuData2"
                     :on-error="uploadError2"
                     :on-success="uploadSuccess2"
                     :before-remove="beforeRemove2"
                     :before-upload="beforeAvatarUpload2"
                     :limit="20"
                     multiple
                     :on-exceed="handleExceed"
                     :file-list="fileList2">
            <el-button size="small"
                       type="primary">证书文件</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="onSubmit('form')"
                     :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showMerchants',
  data () {
    return {
      form: {
        video_code: '',
        promote_pic: '',
        supplier_notice: '',
        certi: '',
      },
      fileList: [],
      fileList2: [],
      submitBtn: {
        loading: false,
        text: '确定'
      },
      array: [{
        name: '证书'
      }],
      height: window.innerHeight - 100 + 'px',
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      QiniuData2: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
    }
  },

  computed: {},
  methods: {
    sjgetPageItem () {
      this.$api.sjgetPageItem({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {

      })
    },
    add () {
      this.array.push({
        name: '证书' + (this.array.length)
      })
    },

    remove () {
      if (this.array.length === 1) {
        this.$message({
          message: '最后一条数据不能删除',
          type: 'warning'
        });
        return
      }
      this.array.splice(this.array.length - 1, 1)
    },

    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.setPageItem({
            video_code: this.form.video_code,
            promote_pic: this.form.promote_pic,
            supplier_notice: this.form.supplier_notice,
            certi: this.fileList2.map(val => { return val.path }).join(','),
            token: JSON.parse(this.$store.state.token).token
          }).then(res => {
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
          })
        } else {
          return false;
        }
      });
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 20 个！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'knowledge/' + file.name}`;
    },

    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      this.form.promote_pic = `${this.qiniuaddr}${response.key}`;
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
    handleExceed2 (files, fileList) {
      this.$message.warning(
        `当前限制选择 20 个！`
      );
    },

    beforeAvatarUpload2 (file) {   //图片上传之前的方法
      this.QiniuData2.data = file;
      this.fileList2.push({
        name: file.name,
        path: `${this.qiniuaddr}${file.name}`
      })
      this.QiniuData2.key = `${'knowledge/' + file.name}`;
    },

    uploadSuccess2 (response, file, fileList) {  //图片上传成功的方法
      this.form.promote_pic = `${this.qiniuaddr}${response.key}`;
    },

    beforeRemove2 (file, fileList) {
      this.$api.delCertiItem({

      }).then(res => {

      })
      this.fileList2 = fileList
      // return this.$confirm(`确定移除 ${ file.name }？`);
    },

    uploadError2 (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
  },

  mounted () {
    console.log(this)
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
      this.QiniuData2.token = res.data.token.token
    })
    this.sjgetPageItem()
  }
}
</script>
<style scoped lang='scss'>
.titleB {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
  i {
    color: #f30;
    cursor: pointer;
    margin-right: 10px;
    font-size: 15px;
  }
}

.showMerchants {
  overflow: auto;
  /* height: 100%; */
  // flex: 1;
  margin-top: 20px;
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  .hidden {
    // max-height: 200px;
    // overflow: auto;
    flex: 1;
  }
}

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
