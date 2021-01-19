<template>
  <div class="addPage_ment" :style="{ height: heights }">
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="清除弹窗内容">
        <el-button @click="resetForm" type="primary">点击清除弹窗内容</el-button>
      </el-form-item>
      <el-form-item label="弹窗标题" prop="subject">
        <el-input v-model="form.subject"></el-input>
      </el-form-item>
      <el-form-item label="弹窗位置" prop="left">
        <div class="con_input">
          左侧 <el-input v-model="form.left" size="small"></el-input>px 顶部
          <el-input v-model="form.top" size="small"></el-input>px
        </div>
      </el-form-item>
      <el-form-item label="弹窗大小" prop="width">
        <div class="con_input">
          宽度 <el-input v-model="form.width" size="small"></el-input>px 高度
          <el-input v-model="form.height" size="small"></el-input>px
        </div>
      </el-form-item>
      <el-form-item label="内容" prop="editor_value">
        <div ref="editorElem"
               style="width: 50%;"></div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import E from "wangeditor";
import file from "./../../../../static/file.png";

export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
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
      editor: null
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.form.body = html;
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
  },
  methods: {
    ready(editorInstance) {
      this.ueditor = editorInstance;
    },
    addCustomDialog() {},
    resetForm() {
      this.$refs["form"].resetFields();
      this.editor.txt.html('')
      this.form.top = ''
      this.form.height = ''
    },
    onSubmit() {
      this.$newApi.addPopupItem({
        subject: this.form.subject,
        left: this.form.left,
        top: this.form.top,
        width: this.form.width,
        height: this.form.height,
        body: this.form.body,
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
          this.form = {}
          this.editor.txt.html('')
        }
      })  
    },
  }
};
</script>

<style lang="scss" scoped>
.addPage_ment {
  width: 100%;
  height: 100%;
  overflow: auto;
  .el-form {
    .el-form-item {
      span {
        &:hover {
          color: #f00;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .el-input {
      width: 30%;
    }
    .el-textarea {
      width: 30%;
    }
    .edui-default {
      width: 80%;
    }
    .con_input {
      width: 100%;
      .el-input {
        width: 10%;
      }
    }
  }
}
</style>
