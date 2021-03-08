<template>
  <div class="editProductsKnowledge"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 基本信息：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="分类选择："
                    prop="displayName">
        <el-select v-model="province"
                   style="width: 30%"
                   @change="categoryChange"
                   clearable>
          <el-option v-for="(item, index) in gdItemData" :key="index" :label="item.category_name" :value="item.uid"></el-option>
        </el-select>
        <el-select v-model="cateMat"
                   style="width: 30%"
                   @change="cateMatChange"
                   clearable>
          <el-option v-for="(item, index) in cateData" :key="index" :label="item.category_name" :value="item.uid"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品编号"
                    prop="goods_code">
          <el-input v-model="form.goods_code"></el-input>
      </el-form-item>

      <el-form-item label="筛选属性 -"
                    prop="displayName" style="width: 100%">
          <div v-for="(item, index) in getAttData" :key="index" style="display: inline-block; margin-right: 10px;">
            <span>{{index}}</span>
            <el-select v-model="getAttValue[index]"
                  style="width: 80%"
                   clearable>
              <el-option v-for="(itm, idx) in item" :key="idx" :label="itm" :value="itm"></el-option>
            </el-select>
          </div>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 基本信息：
    </p>
    <div class="form-item">
      <el-form ref="form"
               :rules="rules"
               :model="form"
               label-width="130px">
        <el-form-item label="商品名称："
                      style="width: 100%"
                      prop="goods_name">
          <el-input v-model="form.goods_name"
                    placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="总库存："
                      prop="goods_stock">
          <el-input v-model="form.goods_stock">
          </el-input>
        </el-form-item>
        <el-form-item label="商品关键字"
                      prop="goods_key">
          <el-input v-model="form.goods_key"
                    type="textarea">
          </el-input>
        </el-form-item>
        <el-form-item label="商品描述"
                      prop="goods_advance">
          <el-input v-model="form.goods_advance"
                    type="textarea">
          </el-input>
        </el-form-item>
        <el-form-item label="进货价"
                      prop="goods_cost">
          <el-input v-model="form.goods_cost">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="市场价"
                      prop="goods_market_price">
          <el-input v-model="form.goods_market_price">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="换购价："
                      prop="goods_sale_price">
          <el-input v-model="form.goods_sale_price">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <!-- <el-form-item label="换购价："
                      prop="name">
          <el-input v-model="form.name">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item> -->
        <el-form-item label="兑换积分："
                      prop="goods_sale_point">
          <el-input v-model="form.goods_sale_point">
            <span slot="suffix">积分</span>
          </el-input>
        </el-form-item>
        <el-form-item label="商品展示："
                      prop="goods_status">
          <el-checkbox-group v-model="goods_status">
            <el-checkbox label="热门" value="1"></el-checkbox>
            <el-checkbox label="推荐" value="2"></el-checkbox>
            <el-checkbox label="免邮" value="4"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="商品重量："
                      prop="goods_kg">
          <el-input v-model="form.goods_kg">
            <span slot="suffix">克</span>
          </el-input>
        </el-form-item>
        <el-form-item label="商品品牌：">
          <div class="form-item">
            <el-select v-model="form.goods_brand"
                       style="width: 25%;"
                       clearable>
              <el-option v-for="(item, index) in brandList" :key="index" :label="item" :value="index"></el-option>
            </el-select>
            <el-input v-model="searchValue"
                      style="width: 60%;margin-tight: 1%"></el-input>

            <el-button @click="search" type="primary">搜索</el-button>
          </div>
        </el-form-item>
        <el-form-item label="商品详细大图："
                      style="width: 100%"
                      prop="name">
         <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuData"
                      :on-remove="handleRemoveTwo"
                      :on-error="uploadErrorTwo"
                      :on-success="uploadSuccessTwo"
                      :before-upload="beforeAvatarUploadTwo"
                      style="width: 50%;"
                      :limit="1"
                      multiple
                      :on-exceed="handleExceedTwo"
                      :file-list="fileListTwo">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </el-form-item>
        <el-form-item label="商品缩略图："
                      style="width: 100%"
                      prop="name">
                      <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuData"
                      :on-remove="handleRemove"
                      :on-error="uploadError"
                      :on-success="uploadSuccess"
                      :before-upload="beforeAvatarUpload"
                      style="width: 50%;"
                      :limit="1"
                      multiple
                      :on-exceed="handleExceed"
                      :file-list="fileList">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>
        </el-form-item>

      </el-form>
    </div>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 销售属性 <span class="redColor"
            style="cursor: pointer;"
            @click="addCoum">[添加]</span> （注意：属性值选完图片后，文字也必须填写。空白属性将被视为放弃。）
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <div v-for="(item, index) in addCoumArray"
           style="width: 100%"
           :key="index">
        <el-form-item label="属性类型："
                      style="width: 100%">
          <el-input v-model="item.att_name"
                    placeholder></el-input>
        </el-form-item>
        <el-form-item label="属性值："
                      style="width: 100%">
          <el-input v-model="items.value"
                    v-for="(items, i) in item.data"
                    :key="i"
                    style="width: 10%;margin-right: 10px"
                    placeholder></el-input>
          <span class="redColor"
                style="cursor: pointer;"
                @click="addroum(index)">[添加]</span>
        </el-form-item>

      </div>
      <el-form-item label="库存设置："
                    style="width: 100%">
        <div class="form-item"
             style="margin-bottom: 10px"
             v-for="(item, index) in attrStore" :key="index">
          {{item[0]}} 库存：<el-input v-model="item[1]"
                    style="width:100px"
                    placeholder></el-input>
        </div>
      </el-form-item>
      <p style="cursor: pointer;margin-left: 20px;margin-bottom: 20px; "
         @click="clearAll">↓ 变更属性库存设置 ↓ <span class="redColor">（属性修改后点击此按钮，重新设置对应的库存）</span></p>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 详细信息：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="商品说明："
                    style="width: 100%"
                    prop="name">
        <div ref="editorElem"
             style="text-align:left;width: 100%;"></div>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 商品相册：
    </p>
    <!-- <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="相册图片："
                    style="width: 100%"
                    prop="name">
        <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuData"
                      :on-remove="handleRemoveThree"
                      :on-error="uploadErrorThree"
                      :on-success="uploadSuccessThree"
                      :before-upload="beforeAvatarUploadThree"
                      style="width: 50%;"
                      :limit="1"
                      multiple
                      :on-exceed="handleExceedThree"
                      :file-list="fileListThree">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
      </el-form-item>
      <el-form-item label="详细说明："
                    style="width: 100%">
      </el-form-item>
    </el-form> -->
    <el-button type="primary"
               style="float: right" @click="save">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'editProductsKnowledge',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      value1: [],
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
      searchValue: '',
      province: '',
      cateMat: '',
      addCoumArray: [
        {
          data: [
            {
              value: ""
            },
            {
              value: ""
            }
          ]
        }
      ],
      checkList: [],
      height: window.innerHeight - 180 + 'px',
      drivers: [],
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
      },
      imgData: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121833438,3473430102&fm=26&gp=0.jpg',
      gdItemData: [],
      cateData: [],
      goods_status: [],
      getAttData: {},
      getAttValue: {},
      fileList: [],
      fileListTwo: [],
      fileListThree: [],
      brandList: [],
      newBrandList: [],
      attrStore: [],

      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址

      QiniuDataTwo: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrlTwo: "", //提交到后台图片地址

      QiniuDataThree: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrlThree: "", //提交到后台图片地址
    }
  },

  mounted () {
    this.editor = new E(this.$refs.editorElem);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.form.goods_main = html;
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
    this.$newApi.getChangeGdItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data.product
        this.brandList = res.data.brand_list
        this.newBrandList = res.data.brand_list
        this.attrStore = res.data.arr_attr_store

        if(this.form.goods_file1 !== '') {
          this.uploadPicUrl = this.form.goods_file1
          this.fileList.push({name: this.form.goods_file1, url: this.form.goods_file1})
        }
        if(this.form.goods_file2 !== '') {
          this.uploadPicUrlTwo = this.form.goods_file2
          this.fileListTwo.push({name: this.form.goods_file2, url: this.form.goods_file2})
        }
        // this.form.goods_main = this.form.goods_main
        this.editor.txt.html(this.form.goods_main)
        this.goods_status.push(this.cateData.goods_status)
      })
    this.$newApi.CGgetCategoryList({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.gdItemData = res.data
      })  
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
      this.QiniuDataTwo.token = res.data.token.token
      this.QiniuDataThree.token = res.data.token.token
    })
  },

  methods: {
    categoryChange() {
      this.$newApi.CGgetSubList({
        uid: this.province,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.cateData = res.data
      })
    },
    cateMatChange() {
      this.getAttData = {}
      this.getAttValue = {}
      this.$newApi.getAttList({
        cid: this.cateMat,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.getAttData = res.data
      })
    },
    search() {
      if(this.searchValue == '') {
        this.brandList = this.newBrandList
        return;
      }
      let data = {}
      for(let i in this.brandList) {
        if(this.brandList[i].indexOf(this.searchValue) !== -1) {
          data[i] = this.brandList[i]
        }
      }
      this.brandList = data
      console.log(this.brandList)
    },

    save() {
      let att_name = ''
      let att_value = ''
      this.addCoumArray.forEach((item, index) => {
        if(index == 0) {
          att_name = item.att_name
        }
        else{
          att_name += ',' + item.att_name
        }
        let arr = ''
        item.data.forEach((itm, idx) => {
          if(idx == 0) {
            arr = index + '_' + idx + '=' +  itm.value
          }
          else{
            arr += ',' + index + '_' + idx + '=' + itm.value
          }
        })
        if(index == 0) {
          att_value = arr
        }
        else{
          att_value += ',' + arr
        }
      }) 

      let obj = ''
      let length = 0
      for(let i in this.getAttValue) {
        if(this.getAttValue[i] != '') {
          length += 1
          if(length > 1) {
            obj += '|' + i + ':' + this.getAttValue[i]
          } else {
            obj += i + ':' + this.getAttValue[i]
          }
        }
      }

      this.$newApi.setChangeGdItem({
        uid: this.$route.query.uid,
        goods_category_pid: this.province,
        goods_cat: this.cateMat,
        goods_code: this.form.goods_code,
        filter_attr: obj,
        goods_name: this.form.goods_name,
        goods_stock: this.form.goods_stock,
        goods_key: this.form.goods_key,
        goods_advance: this.form.goods_advance,
        goods_cost: this.form.goods_cost,
        goods_market_price: this.form.goods_market_price,
        goods_sale_price: this.form.goods_sale_price,
        goods_sale_point: this.form.goods_sale_point,
        goods_status: this.goods_status.toString(),
        goods_kg: this.form.goods_kg,
        goods_brand: this.form.goods_brand,
        goods_file2: this.uploadPicUrlTwo,
        goods_file1: this.uploadPicUrl,
        attr_val: att_name,
        attr_store: att_value,
        goods_main: this.form.goods_main,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.gdItemData = res.data
      }) 
    },

    clearAll () {
      this.addCoumArray = [{data: [{value: ""},{value: ""}] }]
      this.attrStore.forEach((item, index) => {
        item[1] = ''
      })

    },
    addCoum () {
      this.addCoumArray.push({ data: [{}] })
    },
    addroum (index) {
      this.addCoumArray[index].data.push({ data: [{}] });
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
      this.uploadPicUrl = `${JSON.parse(this.$store.state.token).client_id}/goods/${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id}/goods/${file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    handleRemoveTwo (file, fileList) {
      this.uploadPicUrlTwo = "";
    },
    uploadErrorTwo (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    uploadSuccessTwo (response, file, fileList) {  //图片上传成功的方法
      this.uploadPicUrlTwo = `${JSON.parse(this.$store.state.token).client_id}/goods/${file.name}`;
    },
    beforeAvatarUploadTwo (file) {   //图片上传之前的方法
      this.QiniuDataTwo.data = file;
      this.QiniuDataTwo.key = `${JSON.parse(this.$store.state.token).client_id}/goods/${file.name}`;
    },
    handleExceedTwo (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    handleRemoveThree (file, fileList) {
      this.uploadPicUrlThree = "";
    },
    uploadErrorThree (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    uploadSuccessThree (response, file, fileList) {  //图片上传成功的方法
      this.uploadPicUrlThree = `${JSON.parse(this.$store.state.token).client_id}/goods/${file.name}`;
    },
    beforeAvatarUploadThree (file) {   //图片上传之前的方法
      this.QiniuDataThree.data = file;
      this.QiniuDataThree.key = `${JSON.parse(this.$store.state.token).client_id}/goods/${file.name}`;
    },
    handleExceedThree (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
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
.editProductsKnowledge {
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