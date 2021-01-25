
<template>
  <div class="mobilePhoneBy">
    <div class="title-bottom">
      <p style="font-size: 16px;font-family: MicrosoftYaHei; color: #333;font-weight: 600; ">上传轮转广告：</p>
      <div class="itembutton">
        <div class="top_left">
          <span style="margin-left: 10px">标题</span>
          <el-input placeholder="输入标题"
                    v-model="title"
                    size="mini"
                    style="width: 200px"
                    clearable>
          </el-input>
          <span style="margin-left: 10px">连接</span>
          <el-input placeholder="输入连接"
                    v-model="link"
                    size="mini"
                    style="width: 200px"
                    clearable>
          </el-input>
          <span style="margin-left: 10px">排序</span>
          <el-input placeholder="请排序"
                    v-model="cat_tag"
                    size="mini"
                    style="width: 200px"
                    clearable>
          </el-input>
          <el-upload class="upload-pic mt"
                     :action="domain"
                     :data="QiniuData"
                     :on-remove="handleRemove"
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
        </div>
        <div class="top_right">
          <el-button slot="append"
                     size="mini"
                     type="primary"
                     @click="sesarchFun">
            确定
          </el-button>
        </div>
      </div>
    </div>
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
        <el-table-column show-overflow-tooltip
                         label="图片"
                         width="180">
          <template slot-scope="scope">
            <div class="img">
              <img :src="scope.row.img"
                   alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="title"
                         show-overflow-tooltip
                         label="标题"
                         width="180">
        </el-table-column>
        <el-table-column prop="link"
                         show-overflow-tooltip
                         label="连接">
        </el-table-column>
        <el-table-column prop="cat_tag"
                         show-overflow-tooltip
                         label="排序">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="150"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="yellowColor right20"
                         @click="editor(scope.$index, scope.row)">编辑</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor"
                         @click="ndelCycleItem(scope.$index, scope.row)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="btootm_paination">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="page_size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </div>
    </div>

    <el-dialog title="修改轮转广告"
               :visible.sync="dialogVisible"
               width="50%"
               center
               :before-close="handleClose">
      <el-form ref="form"
               :rules="rules"
               :model="form"
               left
               label-width="150px">
        <el-form-item label="标题"
                      prop="title"
                      required>
          <el-input v-model="form.title"
                    style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="链接地址"
                      prop="link"
                      required>
          <el-input v-model="form.link"
                    style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="显示顺序"
                      prop="cat_tag"
                      required>
          <el-input v-model="form.cat_tag"
                    style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="轮转图片"
                      required>
          <el-upload class="upload-pic mt"
                     :action="domain"
                     :data="form.QiniuData"
                     :on-remove="handleRemove2"
                     :on-error="uploadError2"
                     :on-success="uploadSuccess2"
                     :before-remove="beforeRemove2"
                     :before-upload="beforeAvatarUpload2"
                     :limit="1"
                     multiple
                     :on-exceed="handleExceed2"
                     :file-list="form.fileList">
            <el-button size="small"
                       type="primary">选择图片</el-button>
          </el-upload>
          <img :src="form.uploadPicUrl"
               style="width: 50px; height: 50px"
               alt="">
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'mobilePhoneBy',

  data () {
    return {
      form: {
        title: '',
        link: '',
        cat_tag: '',
        QiniuData: {
          key: "", //图片名字处理
          data: {},
          token: this.$store.state.upToken,//七牛云token
        },
        uploadPicUrl: "", //提交到后台图片地址
        fileList: [],
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        link: [
          { required: true, message: '请输入链接地址', trigger: 'blur' }
        ],
        cat_tag: [
          { required: true, message: '显示顺序', trigger: 'blur' }
        ],
      },
      dialogVisible: false,
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      title: '',
      link: '',
      cat_tag: '',
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
      fileList: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
      uid: ''
    }
  },

  methods: {
    ndelCycleItem (i, r) {
      this.$api.ndelCycleItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.ngetCyclePageList()
      })
    },

    ngetCyclePageList () {
      this.$api.ngetCyclePageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    editor (index, row) {
      this.$api.ngetCycleItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form.title = res.data.title
        this.form.link = res.data.link
        this.form.cat_tag = res.data.cat_tag
        this.form.uploadPicUrl = res.data.img
        this.form.fileList[0] = res.data.img
        this.uid = res.data.uid
        this.dialogVisible = true
      })
    },

    onSubmit (formName) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$api.nsetCycleItem({
            uid: this.uid,
            title: this.form.title,
            link: this.form.link,
            img: this.form.uploadPicUrl,
            cat_tag: this.form.cat_tag,
            token: JSON.parse(this.$store.state.token).token,
          }).then(res => {
            this.dialogVisible = false
            this.$message({
              message: '操作成功',
              type: 'success'
            });
            this.ngetCyclePageList()
          })
        } else {
          return false;
        }
      });
    },

    handleCurrentChangeFun (val) {
      this.currentPage = val
      this.ngetCyclePageList()
    },
    handleSizeChange (val) {
      this.page_size = val
      this.ngetCyclePageList()
    },
    sesarchFun () {
      this.$api.naddCycleItem({
        title: this.title,
        link: this.link,
        cat_tag: this.cat_tag,
        img: this.uploadPicUrl,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.ngetCyclePageList()
      })
    },

    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleRemove (file, fileList) {
      this.uploadPicUrl = "";
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
      this.uploadPicUrl = `${this.qiniuaddr}${response.key}`;
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

    beforeRemove2 (file, fileList) {
      // return this.$confirm(`确定移除 ${ file.name }？`);
    },

    handleRemove2 (file, fileList) {
      this.form.uploadPicUrl = "";
    },

    handleExceed2 (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload2 (file) {   //图片上传之前的方法
      this.form.QiniuData.data = file;
      this.form.QiniuData.key = `${'knowledge/' + file.name}`;
    },

    uploadSuccess2 (response, file, fileList) {  //图片上传成功的方法
      this.form.uploadPicUrl = `${this.qiniuaddr}${response.key}`;
    },

    uploadError2 (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },

    beforeRemove2 (file, fileList) {
      // return this.$confirm(`确定移除 ${ file.name }？`);
    },
  },

  mounted () {
    this.ngetCyclePageList()
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
      this.form.QiniuData.token = res.data.token.token
    })
  }
}
</script>

<style lang="scss" scoped>
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        .img {
          width: 100%;
          height: 100%;
          > img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
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
.mobilePhoneBy {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title-bottom {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 20px;
    > p {
      // margin: 10px 0;
      margin-bottom: 10px;
    }

    .itembutton {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
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

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
    margin-top: 20px;
  }
}
</style>