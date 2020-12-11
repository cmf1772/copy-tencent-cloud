<template>
  <div class="editGeneralMerchandise"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 基本信息：
    </p>
    <el-form ref="form"
             :model="product"
             label-width="130px">
      <el-form-item label="分类选择："
                    prop="displayName">
        <div class="form-item">
          <el-select v-model="product.goods_category"
                     style="width: 100%"
                     @change="getSubList"
                     clearable>
            <el-option :label="item.category_name"
                       v-for="item in $store.state.getCategoryList"
                       :key="item.uid"
                       :value="item.uid"></el-option>
          </el-select>
          <el-select v-model="product.goods_category1"
                     style="width: 100%"
                     clearable>
            <el-option :label="item.category_name"
                       v-for="item in $store.state.getSubList"
                       :key="item.uid"
                       :value="item.uid"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="课程编号："
                    prop="displayName">
        <el-input v-model="product.goods_code"
                  style="width: 100%;margin-tight: 1%"></el-input>
      </el-form-item>

      <el-form-item label="筛选属性 -"
                    prop="displayName">
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 课程信息：
    </p>
    <div class="form-item">
      <el-form ref="form"
               :model="product"
               label-width="130px">
        <el-form-item label="课程名称："
                      style="width: 100%"
                      prop="displayName">
          <el-input v-model="product.goods_name"
                    placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="总库存："
                      prop="name">
          <el-input v-model="product.goods_stock">
            <span slot="suffix">件</span>
          </el-input>
        </el-form-item>
        <el-form-item label="课程关键字："
                      prop="displayName">
          <el-input v-model="product.goods_key"
                    type="textarea"
                    placeholder></el-input>
        </el-form-item>
        <el-form-item label="课程描述："
                      prop="displayName">
          <el-input v-model="product.goods_advance"
                    type="textarea"
                    placeholder></el-input>
        </el-form-item>
        <el-form-item label="进货价："
                      prop="name">
          <el-input v-model="product.goods_cost">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="市场价："
                      prop="name">
          <el-input v-model="product.goods_market_price">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="课程价："
                      prop="name">
          <div class="form-item">
            <el-input v-model="product.goods_sale_price"
                      style="width: 60%;margin-tight: 1%"><span slot="suffix">元</span></el-input>
            <el-radio v-model="product.type"
                      label="3">会员折扣</el-radio>
          </div>
        </el-form-item>
        <el-form-item label="课程展示："
                      prop="name">
          <el-checkbox-group v-model="product.goods_status">
            <el-checkbox label="1">热门</el-checkbox>
            <el-checkbox label="2">推荐</el-checkbox>
            <el-checkbox label="4">免邮</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="定金："
                      prop="name">
          <div class="form-item">
            <el-input v-model="product.down_payment"
                      style="width: 60%;margin-tight: 1%"><span slot="suffix">元</span></el-input>
            <el-radio v-model="product.type"
                      label="9">接受预定</el-radio>
          </div>
        </el-form-item>
        <el-form-item label="授课教师："
                      prop="name">
          <div class="form-item">
            <el-input v-model="product.course_teacher"
                      style="width: 100%;margin-tight: 1%"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="授课教师简介："
                      prop="name">
          <div class="form-item">
            <el-input v-model="product.teacher_desc"
                      style="width: 100%;margin-tight: 1%"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="学习有效期："
                      prop="name">
          <div class="form-item">
            <el-input v-model="product.expiredays"
                      style="width: 100%;margin-tight: 1%"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="语言："
                      prop="name">
          <div class="form-item">
            <el-input v-model="product.language"
                      style="width: 100%;margin-tight: 1%"></el-input>
          </div>
        </el-form-item>

        <el-form-item label="课程重量"
                      prop="name">
          <el-input v-model="product.goods_kg">
            <span slot="suffix">克</span>
          </el-input>
        </el-form-item>

        <el-form-item label="课程品牌："
                      prop="name">
          <div class="form-item">
            <el-select v-model="product.goods_brand"
                       style="width: 25%;"
                       clearable>
              <el-option v-for="(item, index) in brand_list"
                         :key="item"
                         :label="item"
                         :value="index">
              </el-option>
            </el-select>
            <el-input v-model="product.search_brand"
                      style="width: 60%;margin-tight: 1%"></el-input>

            <p style="width: 20%;text-align: right; cursor: pointer;">搜索</p>
          </div>
        </el-form-item>
        <el-form-item label="课程详细大图："
                      style="width: 100%"
                      prop="name">
          <el-upload class="upload-pic"
                     :action="domain"
                     :data="QiniuData"
                     :on-remove="handleRemove"
                     :on-error="uploadError"
                     :on-success="uploadSuccess"
                     :before-remove="beforeRemove"
                     :before-upload="beforeAvatarUpload"
                     :limit="1"
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
        <el-form-item label="课程缩略图："
                      style="width: 100%"
                      prop="name">
          <el-upload class="upload-pic"
                     :action="domain"
                     :data="QiniuData2"
                     :on-remove="handleRemove2"
                     :on-error="uploadError2"
                     :on-success="uploadSuccess2"
                     :before-remove="beforeRemove2"
                     :before-upload="beforeAvatarUpload2"
                     :limit="1"
                     multiple
                     :on-exceed="handleExceed2"
                     :file-list="fileList2">
            <el-button size="small"
                       type="primary">选择图片</el-button>
          </el-upload>
          <div>
            <img class="pic-box"
                 :src="uploadPicUrl2"
                 v-if="uploadPicUrl2">
          </div>
        </el-form-item>

      </el-form>
    </div>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 销售属性 <span class="redColor"
            style="cursor: pointer;"
            @click="addCoum">[添加]</span> （注意：属性值选完图片后，文字也必须填写。空白属性将被视为放弃。）特别说明：属性价格仅普通课程及会员优惠有效，即批发，组合和预定下等无效
    </p>
    <el-form ref="form"
             :model="product"
             label-width="130px">
      <div v-for="(item, index) in addCoumArray"
           style="width: 100%"
           :key="index">
        <el-form-item label="属性类型："
                      style="width: 100%"
                      prop="displayName">
          <el-input v-model="form.displayName"
                    placeholder></el-input>
        </el-form-item>
        <el-form-item label="属性值："
                      style="width: 100%"
                      prop="displayName">
          <el-input v-model="form.displayName"
                    v-for="(items, i) in item.addRoumArray"
                    :key="i"
                    style="width: 10%;margin-right: 10px"
                    placeholder></el-input>
          <span class="redColor"
                style="cursor: pointer;"
                @click="addroum(index)">[添加]</span>
        </el-form-item>
      </div>
      <p style="cursor: pointer;margin-left: 20px;margin-bottom: 20px"
         @click="clearAll">↓ 变更属性库存设置 ↓ <span class="redColor">（属性修改后点击此按钮，重新设置对应的库存）</span></p>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 批发设置：<span style="cursor: pointer;margin-left: 20px;"
            class="redColor"
            @click="addPf">增加</span>
      <span style="cursor: pointer;margin-left: 20px;"
            class="redColor"
            @click="removePf">删除</span>
    </p>
    <el-form ref="form"
             :model="product"
             label-width="130px">
      <el-form-item label="批发数量："
                    style="width: 100%"
                    v-for="(item, index) in pf"
                    :key="index"
                    prop="name">
        <el-input v-model="item.wholesale1"
                  style="width: 25%"></el-input>
        <span style="width: 17.5%">—</span>
        <el-input v-model="item.wholesale2"
                  style="width: 25%"></el-input>
        <span style="width: 17.5%">批发价格</span>
        <el-input v-model="item.wholesale3"
                  style="width: 25%"></el-input>
      </el-form-item>

      <el-form-item label="批发数量："
                    style="width: 100%"
                    prop="name">
        <span style="width: 17.5%">大于</span>
        <el-input v-model="wholesale_p1"
                  style="width: 25%"></el-input>
        <span style="width: 17.5%">批发价格</span>
        <el-input v-model="wholesale_p2"
                  style="width: 25%"></el-input>
      </el-form-item>

    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 组合购买：
    </p>
    <el-form ref="form"
             :model="product"
             label-width="130px">
      <el-form-item label="组合课程："
                    style="width: 100%"
                    prop="name">
        <div class="form-item">
          <div class="item-list"
               style="width: 68px; height: 68px">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2848120264,2778704476&fm=26&gp=0.jpg"
                 style="width: 68px; height: 68px"
                 alt="">
          </div>
          <p style="line-height: 68px; margin: 0 20px">➕</p>
          <div class="item-list"
               style="width: 68px; height: 68px; margin-right: 20px; border: solid 1px #eee; text-align:center; line-height: 68px"
               v-for="(item, index) in 4"
               :key="index">
            ?
          </div>
        </div>
      </el-form-item>
      <el-form-item label="组合课程："
                    style="width: 100%"
                    prop="name">
        <div class="form-item">
          <div class="item-list"
               style="width: 68px; height: 68px">

            <el-input v-model="form.name"
                      style="width: 100%"></el-input>
          </div>
          <p style="line-height: 40px; margin: 0 20px">➕</p>
          <div class="item-list"
               style="width: 68px; height: 68px; margin-right: 20px;"
               v-for="(item, index) in 4"
               :key="index">
            <el-input v-model="form.name"
                      style="width: 100%"></el-input>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="组合商品搜索："
                    style="width: 100%"
                    prop="name">
        <div class="form-item">
          <el-input v-model="search_combine"
                    style="width: 40%"></el-input>
          <el-button type="primary"
                     @click="searchCombine"
                     style="float: right">确定</el-button>
          <span class="redColor"> （接索不到？请完善您的关键字）</span>
        </div>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 详细信息：
    </p>
    <el-form ref="form"
             :model="product"
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
    <el-form ref="form"
             :model="product"
             label-width="130px">

      <el-form-item label="相册图片："
                    style="width: 100%"
                    prop="name">
        <img v-for="item in photo"
             style="width: 100px; height: 100px; float: left;margin-right: 10px;"
             :key="item.imgid"
             :src="item.thumb"
             alt="">
        <el-upload class="upload-demo"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               @click="setGoodsItem"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'editGeneralMerchandise',

  data () {
    return {
      product: {
        goods_code: '',
        goods_key: '',
        goods_advance: '',
        goods_cost: '',
        goods_market_price: '',
        goods_kg: '',
        goods_stock: '',
        pt_price: '',
        goods_file1: '',
        goods_file2: '',
        goods_status: [],
        type: '',
        down_payment: '',
        search_brand: '',
        goods_category: '',
        goods_category1: '',
        goods_name: '',
        goods_sale_price: '',
        course_teacher: '',
        teacher_desc: '',
        expiredays: '',
        language: '',
        goods_brand: ''
      },
      search_combine: '',
      photo: '',
      content: '',
      editor: null,
      brand_list: [],
      q: '',
      dialogImageUrl: '',
      dialogVisible: false,

      form: {
        displayName: ''
      },

      addCoumArray: [],
      checkList: [],
      pf: [{
        wholesale1: '',
        wholesale2: '',
        wholesale3: ''
      }],
      wholesale_p1: '',
      wholesale_p2: '',
      height: window.innerHeight - 180 + 'px',

      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
      fileList: [],

      QiniuData2: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl2: "", //提交到后台图片地址
      fileList2: [],

      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址

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
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
      this.QiniuData2.token = res.data.token.token
    })

    this.editor.create(); // 创建富文本实例
    this.$store.commit('GET_CATEGORY_LIST')
    this.getGoodsItem()
    this.getAttPic()

  },

  methods: {
    // 编辑商品
    setGoodsItem () {
      let wholesale = [],
        wholesale_price = [];
      this.pf.forEach(item => {
        wholesale.push(item.wholesale1)
        wholesale.push(item.wholesale2)
        wholesale_price.push(item.wholesale3)
      })

      wholesale.push(this.wholesale_p1)
      wholesale_price.push(this.wholesale_p2)

      this.$api.setGoodsItem({
        uid: this.$route.query.uid,
        goods_cat: this.product.goods_category + ',' + this.product.goods_category1,
        goods_code: this.product.goods_code,
        goods_name: this.product.goods_name,
        goods_stock: this.product.goods_stock,
        goods_key: this.product.goods_key,
        goods_advance: this.product.goods_advance,
        goods_cost: this.product.goods_cost,
        goods_market_price: this.product.goods_market_price,
        goods_sale_price: this.product.goods_sale_price,
        type: this.product.type,
        goods_status: this.product.goods_status.join(','),
        down_payment: this.product.down_payment,
        course_teacher: this.product.course_teacher,
        teacher_desc: this.product.teacher_desc,
        expiredays: this.product.expiredays,
        language: this.product.language,
        goods_kg: this.product.goods_kg + '',
        goods_brand: this.product.goods_brand,
        goods_file2: this.uploadPicUrl,
        goods_file1: this.uploadPicUrl2,
        goods_main: this.editor.txt.html(),
        wholesale: wholesale.join(','),
        wholesale_price: wholesale_price.join(','),
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$route.push('/commodityInformation/knowledgeCommodity')
      })
    },

    handleRemove (file, fileList) {
      this.uploadPicUrl = "";
    },

    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'knowledge/' + file.name}`;
    },

    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
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

    handleRemove2 (file, fileList) {
      this.uploadPicUrl2 = "";
    },

    handleExceed2 (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload2 (file) {   //图片上传之前的方法
      this.QiniuData2.data = file;
      this.QiniuData2.key = `${'knowledge/' + file.name}`;
    },

    uploadSuccess2 (response, file, fileList) {  //图片上传成功的方法
      this.uploadPicUrl2 = `${this.qiniuaddr}${response.key}`;
    },

    uploadError2 (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },

    beforeRemove2 (file, fileList) {
      // return this.$confirm(`确定移除 ${ file.name }？`);
    },

    handlePreview () { },

    searchCombine () {
      this.$api.searchCombine({
        key: this.search_combine,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
      })
    },

    getSubList () {
      this.$store.commit('GET_SUB_LIST', this.product.goods_category)
    },

    getAttPic () {
      this.$api.getAttPic({
        att_cat: '[1]',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {

      })
    },

    getGoodsItem () {
      this.$api.getGoodsItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.product = res.data.product
        this.brand_list = res.data.brand_list
        this.photo = res.data.photo
        this.editor.txt.html(res.data.product.goods_main)

        this.uploadPicUrl = res.data.product.goods_file2
        this.uploadPicUrl2 = res.data.product.goods_file1
        res.data.product.goods_status = res.data.product.goods_status + ''
        this.product.goods_status = res.data.product.goods_status.split(',')
        this.product.goods_status = []
        if (this.product.hot_checked === 'checked') {
          this.product.goods_status.push("1")
        }
        if (this.product.best_checked === 'checked') {
          this.product.goods_status.push("2")
        }
        if (this.product.free_delivery_checked === 'checked') {
          this.product.goods_status.push("4")
        }


        // this.pf = [{
        //   wholesale1: '',
        //   wholesale2: '',
        //   wholesale3: ''
        // }]

        if (this.product.goods_category.length) {
          this.$store.commit('GET_SUB_LIST', this.product.goods_category)
        }

        res.data.product.wholesale_price
      })
    },

    addPf () {
      this.pf.push({
        wholesale1: '',
        wholesale2: '',
        wholesale3: ''
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

    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
.editGeneralMerchandise {
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