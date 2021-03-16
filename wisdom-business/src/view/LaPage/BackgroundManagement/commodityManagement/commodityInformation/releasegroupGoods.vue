<template>
  <div class="releasegroupGoods"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 广告位置：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="广告模块："
                    prop="displayName">
        <el-select v-model="form.province"
                   style="width: 100%"
                   clearable>
          <el-option label="index"
                     value="shanghai"></el-option>
          <el-option label="sub"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="其它参数："
                    prop="displayName">
        <el-select v-model="form.province"
                   style="width: 100%"
                   clearable>
          <el-option label="无"
                     value="shanghai"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="广告位置："
                    prop="displayName">
        <el-select v-model="form.province"
                   style="width: 100%"
                   clearable>
          <el-option label="tab1"
                     value="shanghai"></el-option>
          <el-option label="tab2"
                     value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="广告类型："
                    prop="displayName">
        <el-select v-model="form.province"
                   style="width: 100%"
                   clearable>
          <el-radio-group v-model="radio">
            <el-radio :label="3">商品广告</el-radio>
            <el-radio :label="6">商铺广告 </el-radio>
            <el-radio :label="9">其它类型广告</el-radio>
          </el-radio-group>
        </el-select>
      </el-form-item>
      <el-form-item label="选择地区："
                    prop="displayName">
        <div class="form-item">
          <el-select v-model="province"
                     clearable
                     placeholder="所在省">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
          <el-select v-model="city"
                     clearable
                     placeholder="所在市">
            <el-option label="区域一"
                       value="shanghai"></el-option>
            <el-option label="区域二"
                       value="beijing"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="是否置顶："
                    prop="displayName">
        <el-checkbox v-model="checked">置顶</el-checkbox>
      </el-form-item>
      <el-form-item label="搜索商品："
                    prop="displayName">
        <el-radio-group v-model="radio">
          <el-radio :label="1">销售型普通商品</el-radio>
          <el-radio :label="2">促销商品 </el-radio>
          <el-radio :label="3">团购商品</el-radio>
          <el-radio :label="4">积分换购商品</el-radio>
          <el-radio :label="5">拍卖商品</el-radio>
          <el-radio :label="6">展示型商品</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="商品图："
                    style="width: 100%"
                    prop="name">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
    </el-form>

    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 广告内容：
    </p>
    <div class="form-item">
      <el-form ref="form"
               :rules="rules"
               :model="form"
               label-width="130px">
        <el-form-item label="商品名："
                      prop="name">
          <el-input v-model="form.name">
          </el-input>
        </el-form-item>
        <el-form-item label="商品ID："
                      prop="name">
          <el-input v-model="form.name">
          </el-input>
        </el-form-item>
        <el-form-item label="商家名称："
                      prop="name">
          <el-input v-model="form.name">
          </el-input>
        </el-form-item>
        <el-form-item label="	简短描述："
                      prop="name">
          <el-input v-model="form.name"
                    type="textarea">
          </el-input>
        </el-form-item>
        <el-form-item label="积分："
                      prop="name">
          <el-input v-model="form.name"
                    placeholder="申请一天所需积分">
          </el-input>
        </el-form-item>
        <el-form-item label="长宽："
                      prop="name">
          <el-input v-model="form.name">
          </el-input>
        </el-form-item>
        <el-form-item label="排序："
                      prop="name">
          <el-input v-model="form.name">
          </el-input>
        </el-form-item>
        <el-form-item label="前台显示："
                      prop="name">
          <el-input v-model="form.name">
          </el-input>
        </el-form-item>
        <el-form-item label="申请人："
                      prop="name">

        </el-form-item>
        <el-form-item label="申请商品："
                      prop="name">

        </el-form-item>
        <el-form-item label="申请描述："
                      prop="name">

        </el-form-item>
        <el-form-item label="申请图片："
                      prop="name">

        </el-form-item>
      </el-form>

    </div>

    <el-button type="primary"
               style="float: right">确定</el-button>
    <el-button type="primary"
               style="float: right;margin-right:10px">重置</el-button>
    <el-button type="primary"
               style="float: righ;margin-right:10px">清空申请内容</el-button>
    <p style="float: righ;margin-right:10px">如果不接受广告申请,清空将把客户申请内容清除</p>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'releasegroupGoods',

  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      radio: 1,
      form: {
        radio: '1',
        displayName: '',
        name: '',
        type: '',
        value: '',
        driverId: '',
        description: '',
        province: '',
        city: '',
        qu: ''
      },
      addCoumArray: [],
      checkList: [],
      pf: [{
        name: '1'
      }],
      height: window.innerHeight - 180 + 'px',
      drivers: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
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

  methods: {
    addPf () {
      this.pf.push({
        name: '1'
      })
    },

    removePf () {
      this.pf.splice(this.pf.length - 1, 1)
    },

    clearAll () {
      this.addCoumArray = []
    },
    addCoum () {
      this.addCoumArray.push({
        "addRoumArray": ['1']
      })
      console.log(this.addCoumArray)
    },
    addroum (index) {
      this.addCoumArray[index].addRoumArray.push(this.addCoumArray[index].addRoumArray.length + 1)
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
.releasegroupGoods {
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
</style>