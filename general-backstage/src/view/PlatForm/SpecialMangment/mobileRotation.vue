<template>
  <div class="webDev_page" :style="{ height: heights }">
    <div class="webPage_flash">
      <h3>Flash 编辑</h3>
      <ul>
        <li  v-for="(item, index) in tableData" :key="index">
          <el-button type="text" style="color: #f00;" @click="del(item)">[删除]</el-button>
          <el-button type="text" @click="amendClick(item)">[修改]</el-button>
          <img
            :src="qiniuaddr + item.img"
            alt=""
          />
          <p>
            标题:
            <el-input
              v-model="item.title"
              placeholder="请输入内容"
              size="small"
              disabled
            ></el-input>
          </p>
          <p>
            链接:
            <el-input
              v-model="item.link"
              placeholder="请输入内容"
              size="small"
              disabled
            ></el-input>
          </p>
          <p>
            排序:
            <el-input
              v-model="item.cat_tag"
              placeholder="请输入内容"
              size="small"
              disabled
            ></el-input>
          </p>
        </li>
      </ul>
    </div>
    <div class="webPage_bot" :height="tableHeight">
      <h3>上传轮转广告</h3>
      <div class="bot_con">
        <p>
          标题
          <el-input size="medium" v-model="addForm.title"></el-input>
        </p>
        <p>
          链接
          <el-input size="medium" v-model="addForm.link"></el-input>
        </p>
        <p>
          排序
          <el-input size="medium" v-model="addForm.cat_tag"></el-input>
        </p>
        <p>
          大图
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
        </p>
        <p>
          资讯ID
          <el-input size="medium" v-model="addForm.art_id"></el-input>
        </p>
        <p>
          <el-button type="primary" size="medium" @click="addSave">提交</el-button>
          <el-button size="medium" @click="czFormData">重置</el-button>
        </p>
      </div>
    </div>

    <el-dialog
      title="修改轮转广告"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="link">
          <el-input v-model="form.link"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="cat_tag">
          <el-input v-model="form.cat_tag"></el-input>
        </el-form-item>
        <el-form-item label="资讯ID" prop="art_id">
          <el-input v-model="form.art_id"></el-input>
        </el-form-item>
        <el-form-item label="轮转图片">
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
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="save"
          >提交</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      fileList: [],
      input: "",
      form: {},
      dialogVisible: false,
      tableData: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
      addForm: {}
    };
  },
  mounted() {
    this.$nextTick(() => {
      var inHeight = document.getElementsByClassName("navPage_top");
      this.tableHeight =
        window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    });
    this.create()
  },
  methods: {
    create() {
      this.$newApi.SJgetCyclePageList({
        page: 1,
        page_size: '',
        title: '',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
      })
    },
    del(value) {
      this.$newApi.SJdelCycleItem({
        uid: value.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.create() 
        }
      })
    },
    czFormData() {
      this.addForm = {}
      this.fileList = []
      this.uploadPicUrl = ''
    },
    addSave() {
      this.$newApi.SJaddCycleItem({
        title: this.addForm.title,
        link: this.addForm.link,
        img: this.uploadPicUrl,
        cat_tag: this.addForm.cat_tag,
        art_id: this.addForm.art_id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.create() 
          this.czFormData()
        }
      })  
    },
    save() {
      this.$newApi.SJsetCycleItem({
        uid: this.form.uid,
        title: this.form.title,
        link: this.form.link,
        img: this.uploadPicUrl,
        cat_tag: this.form.cat_tag,
        art_id: this.form.art_id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.create() 
          this.handleClose()
          this.dialogVisible = false
        }
      })
    },
    handleRemove (file,   ) {
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
      this.uploadPicUrl = `${this.qiniuaddr}${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'knowledge/' + file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },
    amendClick(value) {
      this.dialogVisible = true;
      this.fileList = []
      this.$newApi.SJgetCycleItem({
        uid: value.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
        if(res.data.img !== '') {
          this.uploadPicUrl = res.data.img;
          this.fileList.push({name: res.data.img, url: res.data.img})
        }  
      })
    },
    handleClose() {
      this.form = {}
      this.uploadPicUrl = ''
      this.fileList = []
      this.dialogVisible = false
    }
  }
};
</script>

<style lang="scss" scoped>
.webDev_page {
  width: 100%;
  height: 100%;
  .webPage_flash {
    width: 100%;
    border: 1px solid #cccccc;
    h3 {
      padding-left: 5px;
      background: rgb(64, 167, 226);
      color: #fff;
      padding: 5px;
    }
    ul {
      display: flex;
      padding: 5px;
      flex-wrap: wrap;
      li {
        width: 24%;
        border: 1px solid #cccccc;
        text-align: center;
        margin-right: 10px;
        margin-bottom: 10px;
        img {
          width: 80%;
          height: 100px;
          display: block;
          margin: 0 auto;
        }
        p {
          display: flex;
          width: 90%;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          margin-top: 5px;
          .el-input {
            width: 85%;
            margin-left: 5px;
          }
          &:last-child {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  .webPage_bot {
    width: 100%;
    border: 1px solid #cccccc;
    margin-top: 5px;

    h3 {
      padding-left: 5px;
      background: rgb(64, 167, 226);
      color: #fff;
      padding: 5px;
    }
    .bot_con {
      display: flex;
      flex-wrap: wrap;
      margin-top: 5px;
      p {
        display: flex;
        width: 35%;
        align-items: center;
        margin-bottom: 8px;
        padding-left: 5px;
        .el-input {
          width: 80%;
          margin-left: 9px;
        }
        .upload-demo {
          margin-left: 9px;
        }
      }
    }
  }
}
</style>
