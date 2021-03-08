<template>

  <div class="imageAds">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <el-form-item label="上级分类"
                    prop="name">
        <el-select v-model="form.category_id"
                   style="width:600px;margin-left: 0"
                   placeholder="如该分类是顶级分类，此处留空">
          <el-option v-for="item in supplier_cat_all"
                     :key="item.uid"
                     :label="item.category_name"
                     :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称"
                    prop="name">
        <el-input v-model="form.category_name"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="分类图标"
                    style="width: 100%"
                    prop="name">
        <el-upload class="upload-pic mt"
                   :action="domain"
                   :data="QiniuData"
                   :on-error="uploadError"
                   :on-success="uploadSuccessGoodsFile"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <img :src="qiniuaddr + form.category_file1"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="输出顺序"
                    prop="name">
        <el-input v-model="form.category_rank"
                  placeholder="直接输入数字，数值越小，显示越靠前"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="分类关键字"
                    prop="name">
        <el-input v-model="form.category_key"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="分类描述"
                    prop="name">
        <el-input v-model="form.category_desc"
                  style="width: 600px;"></el-input>
      </el-form-item>
      <el-form-item label="手机分类图标"
                    style="width: 100%"
                    prop="name">
        <el-upload class="upload-pic mt"
                   :action="domain"
                   :data="QiniuData"
                   :on-error="uploadError"
                   :on-success="uploadSuccessGoodsFile2"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   :limit="1"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <img :src="qiniuaddr + form.wapcategory_file1"
             style="width: 50px; height: 50px"
             alt="">
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
        category_id: '',
        category_name: '',
        category_key: '',
        category_desc: '',
        category_rank: '',
        category_file1: '',
        wapcategory_file1: '',
      },
      fileList: [],
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
      fileList: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      supplier_cat_all: []
    }
  },
  computed: {},

  mounted () {
    this.getCategoryPageList()
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    if (this.$route.query.uid) {
      this.getCategoryItem(this.$route.query.uid)
    }
  },

  methods: {
    getCategoryItem (uid) {
      this.$api.getCategoryItem({
        uid: uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = {
          category_id: res.data.category_id,
          category_name: res.data.category_name,
          category_key: res.data.category_key,
          category_desc: res.data.category_desc,
          category_rank: res.data.category_rank,
          category_file1: res.data.category_file1,
          wapcategory_file1: res.data.wapcategory_file1,
        }
      })
    },

    getCategoryPageList () {
      this.$api.getCategoryPageList({
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.supplier_cat_all = res.data.items
      })
    },

    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {
            category_id: this.form.category_id === '' ? '0' : this.form.category_id,
            category_name: this.form.category_name,
            category_key: this.form.category_key,
            category_desc: this.form.category_desc,
            category_rank: this.form.category_rank,
            category_file1: this.form.category_file1,
            wapcategory_file1: this.form.wapcategory_file1,
            token: JSON.parse(this.$store.state.token).token
          }

          if (this.$route.query.uid) {
            data['uid'] = this.$route.query.uid
            this.$api.setCategoryItem({ ...data }).then(res => {
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              this.$router.push('/conventionalProducts/conventionalProducts')
            })
          } else {
            this.$api.addCategoryItem({ ...data }).then(res => {
              this.$message({
                message: res.data.msg,
                type: "success",
              });
              this.$router.push('/conventionalProducts/conventionalProducts')
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
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id + '/goods/' + file.name}`;
    },


    uploadSuccessGoodsFile (response, file, fileList) {  //图片上传成功的方法
      this.form.category_file1 = `${response.key}`;
    },

    uploadSuccessGoodsFile2 (response, file, fileList) {  //图片上传成功的方法
      this.form.wapcategory_file1 = `${response.key}`;
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
