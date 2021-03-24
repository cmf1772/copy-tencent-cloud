<template>
  <div class="recoverData">
    <div class="table_bottom">
      <p style="margin: 10px 0 10px 10px">
        Tips:背景色相同的文件为同一次备份的文件,导入时只需要点导入任意一个文件,程序会自动导入剩余文件
      </p>
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="fileName"
                           show-overflow-tooltip
                           label="文件名">
          </el-table-column>
          <el-table-column prop="size" width="80"
                           show-overflow-tooltip
                           label="文件大小">
          </el-table-column>
          <el-table-column prop="timestamp"
                           show-overflow-tooltip
                           label="备份时间">
          </el-table-column>
          <el-table-column prop="number" width="80"
                           show-overflow-tooltip
                           label="卷号">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="160"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right10" @click="importent(scope.row)">导入</el-button>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right10" @click="downLoad(scope.row)">下载</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor" @click="cancel(scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <p style="width: 100%; padding: 10px 0;margin-left: 10px"
           class="redColor">上传SQL文件:</p>
        <el-upload
          style="width: 30%; margin-bottom: 30px;"
          class="upload-demo"
          :action="domain"
          :data="QiniuData"
          :on-error="uploadError"
          :on-success="uploadSuccessGoodsFile"
          :before-remove="beforeRemove"
          :before-upload="beforeAvatarUpload"
          multiple
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recoverData',

  data () {
    return {
      time: [],
      sName: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数

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

  mounted() {
    this.create()
    this.$store.commit('GET_UPLOAD_URL')
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
  },

  methods: {
    create () {
       this.$newApi.getExportList({
        page: '1',
        page_size: '10',
        marker: '',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.list
      })
    },
    cancel(row) {
      this.$newApi.Databasedelete({
        filename: row.fileName,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.code >= 0) {
          return this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          this.create()
          return this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },
    importent(row) {
      this.$newApi.Databaseimport({
        pre: row.pre,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.code >= 0) {
          return this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          this.create()
          return this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },
    downLoad(row) {
      this.$newApi.Databasedown({
        filename: row.fileName,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.code >= 0) {
          return this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          window.open(`${res.data.path}`)
          return this.$message({
            type: 'success',
            message: '下载成功'
          })
        }
      })
    },

    beforeRemove() {

    },
    uploadSuccessGoodsFile(response) {
      console.log(response)
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id + file.name}`;
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
.recoverData {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

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
    flex: 1;
    display: flex;
    height: 200px;

    flex-direction: column;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
