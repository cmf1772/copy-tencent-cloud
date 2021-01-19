<template>
  <div class="addPage_ment" :style="{ height: heights }">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="英文名称" prop="page_name">
        <el-input v-model="form.page_name"></el-input>
      </el-form-item>
      <el-form-item label="中文名称" prop="page_subject">
        <el-input v-model="form.page_subject"></el-input>
      </el-form-item>
      <el-form-item label="关键字" prop="page_key">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="form.page_key"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="页面描述" prop="page_desc">
        <el-input
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="form.page_desc"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="页面内容" prop="page_body">
        <!-- <vue-ueditor
          @ready="ready"
          v-model="form.editor_value"
          :key="1"
          :config="myConfig"
          @beforeInit="addCustomDialog"
        ></vue-ueditor> -->
          <div ref="editorElem"
               style="width: 100%;"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import vueEditorWrap from "vue-ueditor-wrap";
import E from "wangeditor";
import file from "./../../../../static/file.png";

export default {
  data() {
    return {
      heights: window.innerHeight - 100 + "px",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      myConfig: {
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        //是否启用元素路径
        elementPathEnabled: false,
        // 初始容器高度
        initialFrameHeight: 300,
        // 初始容器宽度
        initialFrameWidth: "80%",
        // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
        // serverUrl: 'http://35.201.165.105:8000/controller.php',
        // UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
        UEDITOR_HOME_URL: "./../../../../static/static1/"
      },
      ueditor: "",
      editor: null,
    };
  },
  components: {
    VueUeditor: vueEditorWrap
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.form.page_body = html;
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
    if(this.$route.query.uid) {
      this.create()
    }
  },
  methods: {
    create() {
      this.$newApi.getPageItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = res.data
        this.editor.txt.html(res.data.page_body)
      })
    },
    resetForm() {
      this.$refs["form"].resetFields();
      this.editor.txt.html('')
    },
    onSubmit() {
      if(this.$route.query.uid) {
        this.$newApi.setPageItem({
          uid: this.form.uid,
          page_name: this.form.page_name,
          page_subject: this.form.page_subject,
          page_key: this.form.page_key,
          page_desc: this.form.page_desc,
          page_body: this.form.page_body,
          token: JSON.parse(this.$store.state.token).token
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
            this.$router.go(-1)
          }
        })
      }
      else{
        this.$newApi.addPageItem({
          page_name: this.form.page_name,
          page_subject: this.form.page_subject,
          page_key: this.form.page_key,
          page_desc: this.form.page_desc,
          page_body: this.form.page_body,
          token: JSON.parse(this.$store.state.token).token
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
            this.$router.go(-1)
          }
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.addPage_ment {
  width: 100%;
  height: 100%;
  overflow: auto;
  .el-form {
    .el-input {
      width: 30%;
    }
    .el-textarea {
      width: 30%;
    }
    .edui-default {
      width: 80%;
    }
  }
}
</style>
