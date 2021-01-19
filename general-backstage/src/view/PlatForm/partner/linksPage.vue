<template>
  <div class="tobuy_page" :style="{ height: heights }">
    <div class="tobuy_top">
      <el-button size="medium" type="primary"  @click="selectDel">删除所选</el-button>
      <el-button size="medium" type="primary" @click="addLink" style="margin-right: 10px;"
        >添加链接</el-button
      >
    </div>
    <div class="tobuy_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight" @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column prop="name" label="网站名称"></el-table-column>
        <el-table-column prop="url" label="链接网址"> </el-table-column>
        <el-table-column prop="note" label="链接说明"> </el-table-column>
        <el-table-column prop="displayorder" label="显示顺序">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button @click="delData(scope.row)" type="text" size="small" style="color: #f00"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
       <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="page_size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="totalData">
        </el-pagination>
    </div>

    <div class="absolute_div" ref="yindao">
        <img
          :src="imgUrl"
          alt=""
        />
      </div>

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="网站名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="链接说明" prop="note">
          <el-input v-model="form.note"></el-input>
        </el-form-item>
        <el-form-item label="链接网址" prop="url">
          <el-input v-model="form.url"></el-input>
        </el-form-item>
        <el-form-item label="显示顺序" prop="displayorder">
          <el-input v-model="form.displayorder"></el-input>
        </el-form-item>
        <el-form-item label="展示图片">
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
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button @click="handleClose">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogTitle: '',
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      imgUrl: '',
      form: {

      },
      tableData: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
      fileList: []
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("tobuy_top");
    this.tableHeight =
      window.innerHeight - 180 - inHeight[0].clientHeight + "px";
      this.create()
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
  },
  methods: {
    create() {
      this.$newApi.getLinkPageList({
        page: this.currentPage,
        page_size: this.page_size,
        tpl_name: '',
        order_type: 'asc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    delData(row) {
      this.$newApi.delLinkItem({
        uid: row.id,
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
    addLink() {
      this.dialogTitle = '添加友情链接'
      this.dialogVisible = true
    },
     selectDel() {
      if(this.selectData.length == 0) {
        return this.$message({
          type: 'error',
          message: '请选择要删除的数据'
        })
      }
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.id
        }
        else {
          arr += ',' + item.id
        }
      })
      this.$newApi.batDelLinkItem({
        uid: arr,
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
    handleSelectionChange(val) {
      this.selectData = val
    },
    handleClick(rows) {
      this.dialogTitle = '编辑友情链接'
      this.dialogVisible = true
      this.$newApi.getLinkItem({
        uid: rows.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
        if(res.data.logo !== '') {
          this.fileList.push({name: res.data.logo, url: res.data.logo})
          this.uploadPicUrl = res.data.logo
        }
      })
    },
    handleClose() { 
      this.dialogVisible = false
      this.form = {}
      this.fileList = []
      this.uploadPicUrl = ''
    },
    onSubmit() {
      if(this.dialogTitle == '添加友情链接') {
        this.$newApi.addLinkItem({
          name: this.form.name,
          note: this.form.note,
          url: this.form.url,
          disp: this.form.displayorder,
          logo: this.uploadPicUrl,
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
              message: res.data.msg
            })
            this.create()
            this.handleClose()
          }
        })
      }
      else {
        this.$newApi.setLinkItem({
          uid: this.form.id,
          name: this.form.name,
          note: this.form.note,
          url: this.form.url,
          disp: this.form.displayorder,
          logo: this.uploadPicUrl,
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
              message: res.data.msg
            })
            this.create()
            this.handleClose()
          }
        })
      }
    },
     // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.create()
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
  }
};
</script>

<style lang="scss" scoped>
.active {
  position: relative;
  color: #f00;
}
.absolute_div {
  width: 200px;
  height: 300px;
  background: #000;
  position: fixed;
  top: 0;
  right: 0;
  display: none;
  z-index: 9;
  img {
    width: 100%;
    height: 100%;
  }
}
.tobuy_page {
  width: 100%;
  height: 100%;
  .tobuy_top {
    width: 100%;
    height: auto;
    padding: 10px 0;
    border-radius: 4px;
    background: #fff;
    text-align: right;
    .el-button {
    }
  }
  .tobuy_con {
    margin-top: 5px;
    background: #fff;
  }
}
</style>
