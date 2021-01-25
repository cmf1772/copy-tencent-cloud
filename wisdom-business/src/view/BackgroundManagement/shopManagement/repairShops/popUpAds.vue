
<template>
  <div class="popUpAds">
    <el-form ref="form"
             :model="form"
             label-width="150px">
      <!-- required -->
      <el-form-item label="清除弹窗内容">
        <span class="hovertext"
              @click="clear">点击清除弹窗内容</span>
      </el-form-item>
      <el-form-item label="弹窗标题">
        <el-input v-model="form.subject"
                  style="width: 600px;" />
      </el-form-item>
      <el-form-item label="弹窗位置">
        <div class="form-item">
          <p style="width: 80px">左侧距离：</p>
          <el-input v-model="form.left"
                    style="width: 215px;">
            <i slot="suffix">px</i>
          </el-input>
          <p style="margin-left: 10px; width: 80px">顶部距离：</p>
          <el-input v-model="form.top"
                    style="width: 215px;">
            <i slot="suffix">px</i>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="弹窗大小">
        <div class="form-item">
          <p style="width: 80px">弹窗宽度：</p>
          <el-input v-model="form.width"
                    style="width: 215px;">
            <i slot="suffix">px</i>
          </el-input>
          <p style="margin-left: 10px; width: 80px">弹窗高度：</p>
          <el-input v-model="form.height"
                    style="width: 215px;">
            <i slot="suffix">px</i>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="内容">
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
  name: 'popUpAds',
  data () {
    return {
      form: {
        subject: '',
        left: '',
        top: '',
        width: '',
        height: ''
      },
      editor: null,
      fileList: [],
      submitBtn: {
        loading: false,
        text: '确定'
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
          this.$api.addPopupItem({
            subject: this.form.subject,
            left: this.form.left,
            top: this.form.top,
            width: this.form.width,
            height: this.form.height,
            body: this.editor.txt.html(),
            token: JSON.parse(this.$store.state.token).token
          }).then(res => {
            this.$message({
              message: res.data.msg,
              type: 'success'
            });
          })
        } else {
          return false;
        }
      });
    },

    getPopupItem () {
      this.$api.getPopupItem({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = {
          subject: res.data.subject,
          left: res.data.left,
          top: res.data.top,
          width: res.data.width,
          height: res.data.height
        }
        this.editor.txt.html(res.data.body)
      })
    },

    clear () {
      this.$api.delPopupItem({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = {
          subject: '',
          left: '',
          top: '',
          width: '',
          height: ''
        }
        this.editor.txt.html('')
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
      })
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
    this.$nextTick(() => {
      this.getPopupItem()
    })
  }
}
</script>
<style scoped>
.popUpAds {
  /* height: 200px; */
  height: 100%;
  margin-top: 20px;
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
  padding-top: 20px;
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
