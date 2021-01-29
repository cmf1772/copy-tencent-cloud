
<template>
  <div class="addPageManagement">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <!-- required -->
      <el-form-item label="资讯名称：">
        <el-input v-model="form.board_subject"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="版块名称：">
        <el-select v-model="form.board_name_code"
                   style="width: 600px"
                   clearable>
          <el-option v-for="item in all"
                     :key="item.uid"
                     :label="item.board_title"
                     :value="item.board_name_code"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属区域">
        <div class="form-item">
          <el-select v-model="form.province"
                     clearable
                     style="width:200px"
                     @change="changeCity"
                     placeholder="所在省">
            <el-option v-for="(item, index) in $store.state.cityList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     clearable
                     @change="changeAreaList"
                     style="width:200px;margin-left:0"
                     placeholder="所在市">
            <el-option v-for="(item, index) in $store.state.areaList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.xian"
                     clearable
                     style="width:200px;margin-left:0"
                     placeholder="所在县">
            <el-option v-for="(item, index) in $store.state.county"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="是否置顶：">
        <el-checkbox v-model="form.is_top">置顶</el-checkbox>
      </el-form-item>
      <el-form-item label="当前封面：">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595571718404&di=a73c3e258ea9e66069db919ee1dc9541&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Dca8575a2369b033b2c88fcd225cf3620%2Fb00116dbb6fd5266ceb954b2a918972bd60736cb.jpg"
             style="width: 200px; height: 200px"
             alt="">
      </el-form-item>
      <el-form-item label="封面上传：">
        <el-upload class="upload-pic mt"
                   :action="domain"
                   :data="QiniuData"
                   :on-error="uploadError"
                   :on-success="uploadSuccess"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <img :src="this.qiniuaddr + form.cover"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
      <el-form-item label="资讯内容：">
        <div ref="editorElem"
             style="text-align:left;width: 800px;"></div>
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
import E from "wangeditor";
export default {
  name: 'addPageManagement',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      checked: false,
      form: {
        board_subject: '',
        is_top: '',
        province: '',
        city: '',
        xian: '',
        zhen: '暂无',
        board_code: '',
        board_name_code: '',
        jianjie: '暂无',
        cover: '',
        board_body: '',
      },
      all: [],
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      fileList: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
      editor: null,
      submitBtn: {
        loading: false,
        text: '提交'
      },
    }
  },
  computed: {},
  mounted () {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.form.description = html;
    };
    this.editor.customConfig.menus = [
      // 菜单配置
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'image', // 插入图片
      'table', // 表格
      'code' // 插入代码
    ];
    this.editor.create(); // 创建富文本实例
    this.getBoardList()
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    this.$store.commit('GET_CITY')
    if (this.$route.query.uid) {
      this.getArticleItem(this.$route.query.uid)
    }
  },

  methods: {
    getArticleItem (uid) {
      this.$api.getArticleItem({
        uid: uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = {
          board_subject: res.data.article.board_subject,
          is_top: res.data.is_top_checked === 0 ? false : true,
          province: Number(res.data.article.province),
          city: Number(res.data.article.city),
          xian: Number(res.data.article.xian),
          zhen: '暂无',
          board_code: '',
          board_name_code: res.data.article.ps_name,
          jianjie: '暂无',
          cover: res.data.article.cover,

        }
        this.editor.txt.html(res.data.article.board_body)
        this.$store.commit('GET_CITY', { id: this.form.province, name: 'areaList' })
        this.$store.commit('GET_CITY', { id: this.form.city, name: 'county' })
      })
    },

    goBack () {
      this.$router.go(-1);
    },

    getBoardList () {
      this.$api.getBoardList({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.all = res.data
      })
    },

    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        let data = {
          board_subject: this.form.board_subject,
          is_top: this.form.is_top ? '1' : '0',
          province: this.form.province + '',
          city: this.form.city + '',
          xian: this.form.xian + '',
          zhen: '暂无',
          board_code: '',
          board_name_code: this.form.board_name_code + '',
          jianjie: this.form.jianjie,
          cover: this.form.cover,
          board_body: this.editor.txt.html(),
          token: JSON.parse(this.$store.state.token).token,
        }
        if (valid) {
          if (this.$route.query.uid) {
            data['uid'] = this.$route.query.uid
            this.$api.setArticleItem({ ...data }).then(res => {
              // ps_name = news
              this.$message({
                message: res.data.msg,
                type: 'success'
              });
              this.$router.push({
                path: '/contentManagement/informationManagement',
                query: {
                  ps_name: this.$route.query.board_code
                }
              })
            })
          } else {
            this.$api.addArticleItem({ ...data }).then(res => {
              // ps_name = news
              this.$message({
                message: res.data.msg,
                type: 'success'
              });
              this.$router.push({
                path: '/contentManagement/informationManagement',
                query: {
                  ps_name: this.$route.query.board_code
                }
              })
            })
          }

        } else {
          return false;
        }
      });
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    changeCity () {
      this.form.city = ''
      this.form.xian = ''
      this.$store.commit('GET_CITY', { id: this.form.province, name: 'areaList' })
    },

    changeAreaList () {
      this.form.xian = ''
      this.$store.commit('GET_CITY', { id: this.form.city, name: 'county' })
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = JSON.parse(this.$store.state.token).client_id + '/article/' + file.name;
    },

    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      this.form.cover = `${response.key}`;
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
.addPageManagement {
  /* height: 200px; */
  overflow: auto;
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
