<template>

  <div class="container">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="话题名称"
                    prop="title"
                    required>
        <el-input v-model="form.title"
                  placeholder="5G时代已来，人工智能企业的沉浮战如何打"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="详细说明">
        <div ref="editorElem"
             style="text-align:left;width: 800px;"></div>
      </el-form-item>
      <el-form-item label="标签" prop="tags">
        <div class="form-item">
          <el-input v-model="form.tags"
                    style="width: 600px;" />
          <el-button>提取标签</el-button>
          <span>标签之间用空格隔开，限5个。</span>
        </div>
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
// import informationService from '../../service/information'
// import infoTypeService from '../../service/informationType'
export default {
  name: 'add',
  data () {
    return {
      form: {
        title: '',
        typeId: '',
        remark: '',
        content: '',
        tags: ''
      },
      editor: null,
      types: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        tags: [
          { required: true, message: '请输入标签', trigger: 'blur' }
        ]
      }
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
          this.$newApi.setCommunityTopicItem({
            uid: this.$route.query.id,
            title: this.form.title,
            detail: this.form.content,
            tags: this.form.tags,
            cover: '',
            token: JSON.parse(this.$store.state.token).token,
          }).then(res => {
            this.$message({
              message: res.data.msg
            })
            this.$router.go(-1);
          })
        } else {
          return false;
        }
      });
    }
  },
  mounted () {
    this.$newApi.getCommunityTopicItem({
      uid: this.$route.query.id,
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.form.title = res.data.t_name
      this.form.tags = res.data.tags
      this.editor.txt.html(res.data.content)
      this.form.content = res.data.content
    })
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.form.content = html;
    };
    this.editor.customConfig.zIndex = 1000;
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
  created () {
    // infoTypeService.queryList().then(res => {
    //   if (res.data.state === 1) {
    //     this.types = res.data.data;
    //   } else {
    //     throw new Error(res.data.msg);
    //   }
    // }).catch(error => {
    //   this.$message.error("分组加载失败");
    // })
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
