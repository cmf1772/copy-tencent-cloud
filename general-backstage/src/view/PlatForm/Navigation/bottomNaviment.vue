<template>
  <div class="nav_page" :style="{ height: heights }">
    <div class="navPage_top">
      <el-button size="medium" type="primary"  @click="selectDel">删除所选</el-button>
      <el-button size="medium" type="primary" @click="addNav"
        >添加导航</el-button
      >
    </div>
    <div class="navPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="title" label="栏目名称" width="180">
        </el-table-column>
        <el-table-column prop="pid" label="上级栏目" width="180">
        </el-table-column>
        <el-table-column prop="view" label="排序">
          <!-- <template slot-scope="scope">
            <el-input v-model="scope.row.view"></el-input>
          </template> -->
        </el-table-column>
        <el-table-column prop="pos" label="栏目类型">
          <!-- <template slot-scope="scope">
            <el-select v-model="scope.row.pos" placeholder="请选择">
              <el-option
                v-for="item in column_option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template> -->
        </el-table-column>
        <el-table-column prop="win_type" label="窗口类型">
          <!-- <template slot-scope="scope">
            <el-select v-model="scope.row.win_type" placeholder="请选择" @change="windowsChange(scope.row, scope.row.win_type)">
              <el-option
                v-for="item in window_option"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template> -->
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" style="color: #f00;"  @click="del(scope.row)"
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

    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="35%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="80px" class="dislog_form">
        <el-form-item label="上级导航">
          <el-select v-model="form.pid" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.nid"
                :label="item.title"
                :value="item.nid"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="栏目名称">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <!-- <el-form-item label="字体样式">
          <div style="display: flex;">
            <el-color-picker
              v-model="form.color1"
              style="margin-right: 5px;"
            ></el-color-picker>
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="粗体" name="type"></el-checkbox>
              <el-checkbox label="斜体" name="type"></el-checkbox>
              <el-checkbox label="下划线" name="type"></el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form-item> -->
        <el-form-item label="图片">
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
        <el-form-item label="栏目链接">
          <el-input v-model="form.link"></el-input>
        </el-form-item>
        <el-form-item label="文字说明">
          <el-input v-model="form.alt"></el-input>
          <p style="color: #999;">鼠标悬浮于链接文字上时的说明内容</p>
        </el-form-item>
        <el-form-item label="文字说明">
          <el-radio-group v-model="form.target">
            <el-radio :label="0">本窗口</el-radio>
            <el-radio :label="1">新窗口</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="栏目类型">
          <el-radio-group v-model="form.pos">
            <el-radio label="foot">底部导航</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="位置排序">
          <el-input v-model="form.view"></el-input>
          <p style="color: #999;">输入数字，数值越小，显示越前</p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="save"
          >确 定</el-button
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
      dialogTitle: '',
      dialogVisible: false,
      tableData: [],
      column_option: [
        {
          value: 'foot',
          label: "底部导航"
        }
      ],
      window_option: [
        {
          value: 0,
          label: "本窗口"
        },
        {
          value: 1,
          label: "新窗口"
        }
      ],
      options: [],
      selectData: [],
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      form: {
        type: [],
        pos: 'foot'
      },
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
    };
  },
  mounted() {
    this.$nextTick(() => {
      var inHeight = document.getElementsByClassName("navPage_top");
      this.tableHeight =
        window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    });
    this.create()
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
  },
  methods: {
    create() {
      this.$newApi.getNavPageList({
        page: this.currentPage,
        page_size: this.page_size,
        title: '',
        pos: 'foot',
        order_type: 'asc',
        order_field: 'nid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    windowsChange(row, value) {
      console.log(row, value)
    },
    save() {
      if(this.dialogTitle == '添加导航') {
        this.$newApi.addNavItem({
          pid: this.form.pid,
          title: this.form.title,
          nav_img: this.uploadPicUrl,
          alt: this.form.alt,
          target: this.form.target,
          pos: this.form.pos,
          link: this.form.link,
          view: this.form.view,
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
            this.dialogVisible = false
            this.form = {
              pos: 'foot'
            }
            this.uploadPicUrl = ''
            this.fileList = []
            this.create()
          }
        })
      }
      else {
        this.$newApi.setNavItem({
          uid: this.form.nid,
          pid: this.form.pid == '' ? this.form.puid : this.form.pid,
          title: this.form.title,
          nav_img: this.uploadPicUrl,
          alt: this.form.alt,
          target: this.form.target,
          pos: this.form.pos,
          link: this.form.link,
          view: this.form.view,
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
            this.dialogVisible = false
            this.form = {
              pos: 'foot'
            }
            this.uploadPicUrl = ''
            this.fileList = []
            this.create()
          }
        })
      }
      
    },
    edit(row) {
      this.dialogTitle = '编辑导航'
      let pos = ''
      switch(row.pos) {
        case '头部导航':
            pos = 'head'
            break
        case '中部导航':
            pos = 'middle'
            break
        case '底部导航':
            pos = 'foot'
            break
        case '帮助中心':
            pos = 'help'
            break
        case '资讯导航':
            pos = 'news'
            break
      }
      this.$newApi.getUpNavItem({
        uid: row.pid,
        pos: 'foot',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.options = res.data
      })
      this.$newApi.getNavItem({
        uid: row.nid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
        this.form.puid = this.form.pid
        this.form.pid = ''
        if(res.data.nav_img !== '') {
          this.uploadPicUrl = `${this.qiniuaddr}${res.data.nav_img}`;
          this.fileList.push({name: res.data.nav_img, url: res.data.nav_img})
        }
      })
      this.dialogVisible = true;
    },
    del(row) {
      this.$newApi.delNavItem({
        uid: row.nid,
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
          arr = item.nid
        }
        else {
          arr += ',' + item.nid
        }
      })
      this.$newApi.batDelNavItem({
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
     // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.create()
    },
    handleClose() {
      this.dialogVisible = false;
      this.form = {
        pos: 'foot'
      }
      this.uploadPicUrl = ''
      this.fileList = []
    },
    addNav() {
      this.dialogTitle = '添加导航'
      this.dialogVisible = true;
      this.$newApi.getUpNavItem({
        uid: '0',
        pos: 'foot',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.options = res.data
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
  }
};
</script>

<style lang="scss" scoped>
.nav_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .navPage_top {
    padding: 10px 0;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    text-align: right;
    .el-button {
      &:last-child {
        margin-right: 20px;
      }
    }
  }
  .navPage_con {
    flex: 1;
    background: #fff;
  }
  .dislog_form {
    max-height: 50vh;
    overflow: auto;
    .el-form-item {
      .el-input {
        width: 80%;
      }
      .el-select {
        width: 80%;
      }
      .el-radio-group {
        .el-radio {
          flex: 1;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
