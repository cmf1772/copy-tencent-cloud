<template>
  <div class="tobuy_page" :style="{ height: heights }">
    <div class="tobuy_top">
      <!-- <el-button size="medium" type="primary">同步模板数据</el-button> -->
    </div>
    <div class="tobuy_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="tpl_name" label="模板名称">
          <template slot-scope="scope">
            <span
              @mouseover="mouseOver($event, scope.row)"
              @mouseleave="mouseLeave($event)"
              >{{ scope.row.tpl_name }}</span
            >
          </template>
        </el-table-column>
        <el-table-column prop="s_img" label="模板目录"> </el-table-column>
        <el-table-column prop="sellshow" label="类型"> </el-table-column>
        <el-table-column prop="price" label="价格">
          <!-- <template slot-scope="scope"> ￥{{ scope.row.price }} </template> -->
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >编辑</el-button
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
      title="编辑模板资料"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="模版名称" prop="tpl_name">
          <el-input v-model="form.tpl_name"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="模板目录" prop="tpl_code">
          <span>{{form.tpl_code}}</span>
        </el-form-item>
        <el-form-item label="模板类型" prop="sellshow">
          <span>{{form.sellshow}}</span>
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
      this.$newApi.getTplPageList({
        page: this.currentPage,
        page_size: this.page_size,
        tpl_name: '',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    handleClick(rows) {
      this.dialogVisible = true
      this.$newApi.getTplItem({
        uid: rows.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
        if(res.data.b_img !== '') {
          this.fileList.push({name: res.data.b_img, url: res.data.b_img})
          this.uploadPicUrl = res.data.b_img
        }
      })
    },
    mouseOver(e, row) {
      this.imgUrl = 'http://img.meichengmall.com/' + row.b_img
      this.$refs["yindao"].style.top = e.screenY - 60 + "px";
      this.$refs["yindao"].style.left = e.screenX + 10 + "px";
      this.$refs["yindao"].style.display = "block";
    },
    mouseLeave(e) {
      this.$refs["yindao"].style.display = "none";
    },
    handleClose() {
      this.dialogVisible = false
      this.form = {}
      this.fileList = []
      this.uploadPicUrl = ''
    },
    onSubmit() {
      this.$newApi.setTplItem({
        uid: this.form.uid,
        tpl_name: this.form.tpl_name,
        price: this.form.price,
        s_img: this.uploadPicUrl,
        b_img: this.uploadPicUrl,
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
      margin-right: 20px;
    }
  }
  .tobuy_con {
    margin-top: 5px;
    background: #fff;
  }
}
</style>
