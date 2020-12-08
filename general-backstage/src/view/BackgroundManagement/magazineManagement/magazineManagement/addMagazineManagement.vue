<template>
  <div class="editConventionalKnowledge">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="资讯名称："
                    prop="board_subject">
        <el-input v-model="form.board_subject"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="是否置顶："
                    prop="is_top">
        <el-checkbox v-model="form.is_top">置顶</el-checkbox>
      </el-form-item>

      <el-form-item label="选择地区："
                    prop="displayName">
        <div style="width:100%; display: flex">
          <el-select v-model="form.province"
                     clearable
                     style="width:25%"
                     @change="changeCity"
                     placeholder="所在省">
            <el-option v-for="(item, index) in $store.state.cityList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.city"
                     style="width:25%;margin-left:0"
                     clearable
                     @change="changeAreaList"
                     placeholder="所在市">
            <el-option v-for="(item, index) in $store.state.areaList"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.xian"
                     clearable
                     @change="changeCounty"
                     style="width:25%;margin-left:0"
                     placeholder="所在县">
            <el-option v-for="(item, index) in $store.state.county"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
          <el-select v-model="form.zhen"
                     style="width:25%;margin-left:0"
                     placeholder="所在乡">
            <el-option v-for="(item, index) in $store.state.district"
                       :key="index"
                       :label="item.name"
                       :value="item.id"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="选择栏目："
                    prop="board_code">
        <div class="form-item">
          <el-select v-model="form.board_code"
                     value-key="uid"
                     style="width: 50%"
                     @change="changePageList"
                     clearable>
            <el-option v-for="item in pageList"
                       :key="item.uid"
                       :label="item.board_title"
                       :value="item"></el-option>
          </el-select>
          <el-select v-model="form.board_name_code"
                     value-key="uid"
                     style="width: 50%"
                     clearable>
            <el-option v-for="item in pageSubList"
                       :key='item'
                       :label="item.board_title"
                       :value="item"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="上传封面："
                    prop="cover">
        <el-upload class="upload-pic"
                   :action="domain"
                   :data="QiniuData"
                   :on-remove="handleRemove"
                   :on-error="uploadError"
                   :on-success="uploadSuccess"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   :limit="3"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <div>
          <img class="pic-box"
               :src="uploadPicUrl"
               v-if="uploadPicUrl">
        </div>
      </el-form-item>
      <el-form-item label="当前封面："
                    prop="name">
        <div style="width: 200px;height: 200px">
          <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1301639153,2671533305&fm=26&gp=0.jpg"
               alt=""
               style="width: 200px;height: 200px">
        </div>
      </el-form-item>
      <el-form-item label="简介："
                    style="width: 100%"
                    prop="jianjie">
        <el-input v-model="form.jianjie"
                  type="textarea"
                  placeholder=""></el-input>
      </el-form-item>
      <el-form-item label="商品说明："
                    style="width: 100%"
                    prop="name">
        <div ref="editorElem"
             style="text-align:left;width: 100%;"></div>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               @click="right"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
import * as qiniu from "qiniu-js";

export default {
  name: 'editConventionalKnowledge',
  data () {
    return {
      loading: false,
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      uploadPicUrl: "", //提交到后台图片地址
      fileList: [],

      form: {
        board_subject: '',
        is_top: false,
        province: '',
        city: '',
        xian: '',
        zhen: '',
        board_code: {
          board_name_code: '',
          board_title: '',
          uid: ''
        },
        cover: '',
        jianjie: '',
        board_name_code: {
          board_name_code: '',
          board_title: '',
          uid: ''
        },
      },

      pageList: [],
      pageSubList: [],

      rules: {
        displayName: [
          { required: true, message: '请输入收货人', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        value: [
          { required: true, message: '请不要重复填写省市', trigger: 'blur' }
        ],
        driverId: [
          { required: true, message: '请选择所属驱动', trigger: 'change' }
        ]
      },
      imgData: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121833438,3473430102&fm=26&gp=0.jpg',
    }
  },

  mounted () {

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
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    // this.$store.commit('GET_UPLOAD_TOKEN')
    this.$store.commit('GET_UPLOAD_URL')
    this.$store.commit('GET_CITY')
    this.getBoardPageList()

    if (this.$route.query.uid) {
      this.getInfo()
    }
  },

  methods: {
    getInfo () {
      this.$api.getArticleItem({
        token: JSON.parse(this.$store.state.token).token,
        uid: this.$route.query.uid
      }).then(res => {
        let data = res.data.article

        this.form = {
          board_subject: data.board_subject,
          is_top: data.is_top,
          province: data.province,
          city: data.city,
          xian: data.xian,
          zhen: data.zhen,
          board_code: {
            board_name_code: '',
            board_title: data.board_title,
            uid: ''
          },
          cover: '',
          jianjie: '',
          board_name_code: {
            board_name_code: '',
            board_title: '',
            uid: ''
          },
        }
      })
    },

    // 存储数据
    right () {
      this.$api.addArticleItem({
        board_subject: this.form.board_subject,
        is_top: this.form.is_top ? '1' : '0',
        province: this.form.province + '',
        city: this.form.city + '',
        xian: this.form.xian + '',
        zhen: (this.form.zhen + '').length ? this.form.zhen + '' : '暂无',
        board_code: this.form.board_code.board_name_code,
        board_name_code: this.form.board_name_code.board_name_code,
        cover: this.uploadPicUrl,
        jianjie: this.form.jianjie,
        board_body: this.editor.txt.html(),
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.$router.push(`/magazineManagement/editMagazineManagement?nameType=资讯管理&&ps_name=${this.$route.query.ps_name}`)
      })
    },

    // 获取一级栏目
    getBoardPageList () {
      this.$api.getBoardList({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.pageList = res.data
      })
    },

    // 获取二级菜单
    changePageList (res) {
      this.form.board_name_code = ''
      this.$api.getBoardSubList({
        token: JSON.parse(this.$store.state.token).token,
        uid: this.form.board_code.uid
      }).then(res => {
        this.pageSubList = res.data
      })
    },

    handleRemove (file, fileList) {
      this.uploadPicUrl = "";
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 3 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'magazine/' + file.name}`;
    },

    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      console.log(fileList);
      console.log(response);
      console.log(file);
      this.uploadPicUrl = `${this.qiniuaddr}${response.key}`;
    },

    uploadError (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },

    beforeRemove (file, fileList) {
      // return this.$confirm(`确定移除 ${ file.name }？`);
    },

    changeCity () {
      this.form.city = ''
      this.form.zhen = ''
      this.form.xian = ''
      this.$store.commit('GET_CITY', { id: this.form.province, name: 'areaList' })
    },

    changeAreaList () {
      this.form.xian = ''
      this.form.zhen = ''
      this.$store.commit('GET_CITY', { id: this.form.city, name: 'county' })
    },

    changeCounty () {
      this.form.zhen = ''
      this.$store.commit('GET_CITY', { id: this.form.xian, name: 'district' })
    },

    getemplate () {
      this.$router.push('/shopManagement/templateToBuy')
    },
    goNavSet () {
      this.$router.push('/setUpShops/navigationStyleSettings?nameType=导航样式设置')
    },

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },

    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    changeFile (e) {
      function getObjectURL (file) {
        var url = null;
        if (window.createObjectURL != undefined) {
          // basic
          url = window.createObjectURL(file);
        } else if (window.URL != undefined) {
          // mozilla(firefox)
          url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) {
          // webkit or chrome
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
      }

      let imgData = e.target.files[0];
      this.imgFile = imgData;
      this.imgData = getObjectURL(imgData);
    },
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.editConventionalKnowledge {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 100px;
  overflow: auto;
}

.upload-wrap {
  width: 100%;
  height: 40px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  span {
    z-index: 1;
    line-height: 40px;
    color: #4bb3ff;
    font-size: 16px;
    margin-left: 30px;
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 2;
  }
}

#pickfiles {
  padding: 10px;
  background: #000;
  border-radius: 5px;
  color: #fff;
}
.link {
  color: red;
}
.progress {
  color: red;
  font-size: 30px;
  margin-top: 20px;
}
</style>