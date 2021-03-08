
<template>
  <div class="addPageManagement">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <!-- required -->
      <el-form-item label="页面网址名称">
        <el-input v-model="form.page_name"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="页面名称">
        <el-input v-model="form.page_subject"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="关键字">
        <el-input v-model="form.page_key"
                  type="textarea"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input type="textarea"
                  v-model="form.page_desc"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="详细内容">
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
      form: {
        page_name: '',
        page_subject: '',
        page_key: '',
        page_desc: '',
        page_body: ''
      },
      editor: null,
      fileList: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
    }
  },
  computed: {},
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.addPageItem({
            page_name: this.form.page_name,
            page_subject: this.form.page_subject,
            page_key: this.form.page_key,
            page_desc: this.form.page_desc,
            page_body: this.editor.txt.html(),
            token: JSON.parse(this.$store.state.token).token,
          }).then(res => {

          })
        } else {
          return false;
        }
      });
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
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
