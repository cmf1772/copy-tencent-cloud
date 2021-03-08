<template>
  <div class="customArea">
    <div class="table_bottom">
      <div class="flex"
           :style="{'height': height}">
        <div class="top" v-for="index in num" :key="index">
          <p>第{{index}}层</p>
          <div class="form-item">
            <p style="width:100px">更多链接</p>
            <el-input placeholder="请输入内容"
                      style="width:500px"
                      v-model="inputData[index]"
                      clearable>
            </el-input>
          </div>
          <div class="form-item">
            <p style="width:100px">楼层标题图片</p>
            <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuData[index]"
                      :on-remove="handleRemove.bind(null, {'index':index})"
                      :on-error="uploadError"
                      :on-success="uploadSuccess.bind(null, {'index':index})"
                      :before-upload="beforeAvatarUpload.bind(null, {'index':index})"
                      :limit="1"
                      multiple
                      :on-exceed="handleExceed"
                      :file-list="imageData[index]">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
          </div>
          <el-button slot="append"
                     type="primary"
                     style="margin-left: 10px"
                     icon="el-icon-search"
                     @click="sesarchFun(index)">
            确定
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customArea',

  data () {
    return {
      time: [],
      radio: '1',
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      dialogImageUrl: '',
      dialogVisible: false,
      height: window.innerHeight - 180 + 'px',

      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        '1': {
          key: "", //图片名字处理
          token: this.$store.state.upToken,//七牛云token
          data: {}
        },
        '2': {
          token: this.$store.state.upToken,//七牛云token
        },
        '3': {
          token: this.$store.state.upToken,//七牛云token
        },
        '4': {
          token: this.$store.state.upToken,//七牛云token
        },
        '5': {
          token: this.$store.state.upToken,//七牛云token
        },
        '6': {
          token: this.$store.state.upToken,//七牛云token
        },
        '7': {
          token: this.$store.state.upToken,//七牛云token
        },
        '8': {
          token: this.$store.state.upToken,//七牛云token
        },
        '9': {
          token: this.$store.state.upToken,//七牛云token
        },
        '10': {
          token: this.$store.state.upToken,//七牛云token
        }
      },
      uploadPicUrl: '',
      fileList: [],
      num: 10,
      inputData: {},
      imageData: {},
      uploadPicUrlData: {}
    }
  },

  mounted() {
    this.$api.getUploadToken().then(res => {
      for(let i=1;i<11;i++) {
        this.QiniuData[i].token = res.data.token.token
      }
    })

    this.$newApi.SYgetIndexFloorItem({
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      for(let i in res.data) {
        this.$set(this.inputData, `${i}`, res.data[i].more_link)
        this.imageData[i] = []
        this.imageData[i].push({name: res.data[i].floor_icon, url: res.data[i].floor_icon})
        this.uploadPicUrlData[i] = res.data[i].more_link
      }
    })
  },

  methods: {
    sesarchFun(index) {
      this.$newApi.setIndexFloorItem({
        floor: index,
        more_link: this.inputData[index],
        floor_icon: this.uploadPicUrlData[index],
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
        }
      })
    },
    
    handleRemove (obj, file, fileList) {
      this.uploadPicUrlData[obj.index] = ''
    },
    uploadError (err, file, fileList) {    //图片上传失败时调用
      if(!file) return
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    uploadSuccess (obj, response, file, fileList) {  //图片上传成功的方法
      if(!file) return
      this.uploadPicUrlData[obj.index] = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    beforeAvatarUpload (obj, file) {   //图片上传之前的方法
      if(!file) return  
      this.QiniuData[obj.index].data = file;
      this.QiniuData[obj.index].key = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },
  }
}
</script>

<style lang="scss" scoped>
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.customArea {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
    overflow: auto;
  }

  .flex {
    display: flex;
    flex-direction: column;
    height: 200px;
    overflow: auto;
    .top {
      > p {
        width: 100%;
        background: #4bb3ff;
        color: #fff;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        padding-left: 10px;
      }
    }
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }

  .form-item {
    align-items: center;
    margin: 10px;
  }
}

.top {
  margin-bottom: 20px;
}
</style>
