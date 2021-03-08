<template>
  <div class="editConventionalKnowledge"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 商品分类：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="主站分类："
                    prop="displayName">
        <div class="flex">
          <el-select v-model="form.goods_category_pid"
                     style="width: 50%"
                     @change="changeFun"
                     clearable>
            <el-option v-for="(item, index) in getBoardPageList"
                       :key="index"
                       :label="item.board_title"
                       :value="item.uid"></el-option>
          </el-select>
          <el-select v-model="form.goods_cat"
                     style="width: 50%"
                     clearable>
            <el-option v-for="(item, index) in getBoardPageListChildren"
                       :key="index"
                       :label="item.board_title"
                       :value="item.uid"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item label="分类选择："
                    prop="displayName">
        <el-select v-model="form.supplier_cat"
                   style="width: 100%"
                   clearable>
          <el-option v-for="(item, index) in supplier_cat_all"
                     :key="index"
                     :label="item.category_name"
                     :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="多重分类："
                    prop="displayName">
        <el-select v-model="form.supplier_cat2"
                   style="width: 100%"
                   clearable>
          <el-option v-for="(item, index) in supplier_cat_all"
                     :key="index"
                     :label="item.category_name"
                     :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="多重分类："
                    prop="displayName">
        <el-select v-model="form.supplier_cat3"
                   style="width: 100%"
                   clearable>
          <el-option v-for="(item, index) in supplier_cat_all"
                     :key="index"
                     :label="item.category_name"
                     :value="item.uid"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="筛选属性 -"
                    prop="displayName">
      </el-form-item>

      <el-form-item label="当前状态"
                    prop="displayName">
        未发布
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 基本信息：
    </p>
    <div class="form-item">
      <div class="img"
           style="width: 200px;text-align: center;">
        <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2848120264,2778704476&fm=26&gp=0.jpg"
             style="width: 200px"
             alt="">
        <p class="hovertext"
           style="cursor: pointer;">查看原商品信息</p>
      </div>
      <el-form ref="form"
               :model="form"
               label-width="130px">
        <el-form-item label="商品名称："
                      style="width: 100%"
                      prop="displayName">
          <el-input v-model="form.goods_name"
                    placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="进货价："
                      prop="name">
          <div class="form-item">
            <el-input v-model="form.goods_cost"
                      style="width: 60%;margin-tight: 1%"></el-input>
            <p style="width: 20%;text-align: right; ">加价率：</p>
            <el-select v-model="form.province"
                       style="width: 25%;"
                       clearable>
              <el-option label="0%"
                         value="shanghai"></el-option>
              <el-option label="10%"
                         value="shanghai"></el-option>
              <el-option label="20%"
                         value="shanghai"></el-option>
              <el-option label="30%"
                         value="shanghai"></el-option>
              <el-option label="40%"
                         value="shanghai"></el-option>
              <el-option label="50%"
                         value="shanghai"></el-option>
              <el-option label="60%"
                         value="shanghai"></el-option>
              <el-option label="70%"
                         value="shanghai"></el-option>
              <el-option label="80%"
                         value="shanghai"></el-option>
              <el-option label="90%"
                         value="shanghai"></el-option>
              <el-option label="100%"
                         value="shanghai"></el-option>
              <el-option label="150%"
                         value="shanghai"></el-option>
              <el-option label="200%"
                         value="shanghai"></el-option>
              <el-option label="300%"
                         value="shanghai"></el-option>
            </el-select>
          </div>
        </el-form-item>
        <el-form-item label="市场价"
                      prop="name">
          <el-input v-model="form.goods_market_price">
            <span slot="suffix">元</span>
          </el-input>
        </el-form-item>
        <el-form-item label="团购价格："
                      prop="name">
          <div class="form-item">
            <el-input v-model="form.goods_sale_price"
                      style="width: 100%;margin-tight: 1%">
              <span slot="suffix">元</span>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="商品重量："
                      prop="name">
          <el-input v-model="form.goods_kg">
            <span slot="suffix">克</span>
          </el-input>
        </el-form-item>
        <el-form-item label="起止时间："
                      prop="name">
          <el-date-picker v-model="form.date"
                          type="daterange"
                          value-format="yyyy-MM-dd"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="商品显示："
                      prop="name">
          <el-checkbox-group v-model="form.goods_status">
            <el-checkbox label="1">热门</el-checkbox>
            <el-checkbox label="2">推荐</el-checkbox>
            <el-checkbox label="4">免邮</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="商品编码："
                      prop="name">
          <el-input v-model="form.goods_code"></el-input>
        </el-form-item>
        <el-form-item label="商品品牌："
                      prop="name">
          <div class="form-item">
            <el-select v-model="form.goods_brand"
                       style="width: 25%;"
                       clearable>
              <el-option v-for="(item, index) in getBoardPageList"
                         :key="index"
                         :label="item.board_title"
                         :value="item.uid"></el-option>
            </el-select>
            <el-input v-model="form.search_brand"
                      style="width: 60%;margin-tight: 1%"></el-input>

            <p style="width: 20%;text-align: right; cursor: pointer;">搜索</p>
          </div>
        </el-form-item>
        <el-form-item label="商品详细大图："
                      style="width: 100%"
                      prop="name">
          <el-upload class="upload-pic mt"
                     :action="domain"
                     :data="QiniuData"
                     :on-error="uploadError"
                     :on-success="uploadSuccessGoodsFile2"
                     :before-remove="beforeRemove"
                     :before-upload="beforeAvatarUpload"
                     :limit="1"
                     multiple
                     :on-exceed="handleExceed"
                     :file-list="fileList">
            <el-button size="small"
                       type="primary">选择图片</el-button>
          </el-upload>
          <img :src="qiniuaddr + form.goods_file2"
               style="width: 50px; height: 50px"
               alt="">
        </el-form-item>
        <el-form-item label="商品缩略图："
                      style="width: 100%"
                      prop="name">
          <el-upload class="upload-pic mt"
                     :action="domain"
                     :data="QiniuData"
                     :on-error="uploadError"
                     :on-success="uploadSuccessGoodsFile1"
                     :before-remove="beforeRemove"
                     :before-upload="beforeAvatarUpload"
                     :limit="1"
                     multiple
                     :on-exceed="handleExceed"
                     :file-list="fileList">
            <el-button size="small"
                       type="primary">选择图片</el-button>
          </el-upload>
          <img :src="qiniuaddr + form.goods_file1"
               style="width: 50px; height: 50px"
               alt="">
        </el-form-item>
        <el-form-item label="总库存："
                      prop="name">
          <el-input v-model="form.goods_stock">
            <span slot="suffix">件</span>
          </el-input>
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
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 详细信息：
    </p>
    <el-form ref="form"
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
             :model="form"
             label-width="130px">
      <el-form-item label="相册图片："
                    style="width: 100%"
                    prop="name">
        <el-upload class="upload-pic mt"
                   :action="domain"
                   :data="QiniuData"
                   :on-error="uploadError"
                   :on-success="uploadSuccessGallery"
                   :before-remove="beforeRemove"
                   :before-upload="beforeAvatarUpload"
                   multiple
                   :on-exceed="handleExceed"
                   :file-list="fileList">
          <el-button size="small"
                     type="primary">选择图片</el-button>
        </el-upload>
        <img :src="qiniuaddr + form.gallery"
             style="width: 50px; height: 50px"
             alt="">
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 商品SEO：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="商品关键字："
                    prop="displayName">
        <el-input v-model="form.goods_key"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="商品描述："
                    prop="displayName">
        <el-input v-model="form.goods_advance"
                  placeholder></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               @click="addTgGoodsItem"
               style="float: right">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'editConventionalKnowledge',

  data () {
    return {
      form: {
        supplier_cat: '',
        supplier_cat2: '',
        supplier_cat3: '',
        goods_category_pid: '',
        goods_cat: '',
        goods_code: '',
        filter_attr: '',
        goods_name: '',
        goods_stock: '',
        goods_key: '',
        goods_advance: '',
        goods_cost: '',
        goods_market_price: '',
        goods_sale_price: '',
        type: '1',
        goods_status: [],
        goods_kg: '',
        goods_brand: '',
        goods_file2: '',
        goods_file1: '',
        attr_val: '',
        attr_store: '',
        goods_main: '',
        date: [],
        start_date: '',
        end_date: '',
        gallery: '',
      },
      fileList: [],
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/',
      addCoumArray: [],

      getBoardPageList: [],
      getBoardPageListChildren: [],
      supplier_cat_all: [],
      height: window.innerHeight - 100 + 'px',
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
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    this.getBoardPageListFun()
    this.getCategoryPageList()
    if (this.$route.query.uid) {
      this.getTgGoodsItem(this.$route.query.uid)
    }
  },

  methods: {
    getTgGoodsItem (uid) {
      this.$api.getTgGoodsItem({
        uid: uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form = {
          supplier_cat: res.data.product.supplier_cat,
          supplier_cat2: res.data.product.supplier_cat2,
          supplier_cat3: res.data.product.supplier_cat3,
          goods_category_pid: res.data.product.goods_category_pid,
          goods_cat: res.data.product.goods_cat,
          goods_code: res.data.product.goods_code,
          filter_attr: res.data.product.filter_attr,
          goods_name: res.data.product.goods_name,
          goods_stock: res.data.product.goods_stock,
          goods_key: res.data.product.goods_key,
          goods_advance: res.data.product.goods_advance,
          goods_cost: res.data.product.goods_cost,
          goods_market_price: res.data.product.goods_market_price,
          goods_sale_price: res.data.product.goods_sale_price,
          type: '1',
          goods_status: [],
          goods_kg: res.data.product.goods_kg + '',
          goods_brand: res.data.product.goods_brand,
          goods_file2: res.data.product.goods_file2,
          goods_file1: res.data.product.goods_file1,
          attr_val: res.data.product.attr_val,
          attr_store: res.data.product.attr_store,
          goods_main: res.data.product.goods_main,
          date: [res.data.product.start_date, res.data.product.end_date],
          gallery: res.data.photo[0].thumb
        }

        this.editor.txt.html(res.data.product.goods_main)
        this.changeFun()
      })
    },

    getCategoryPageList () {
      this.$api.getCategoryPageList({
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.supplier_cat_all = res.data.items
      })
    },

    getBoardPageListFun () {
      this.$api.getBoardPageList({
        order_field: "od",
        order_type: "desc",
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.getBoardPageList = res.data.items
      })
    },

    changeFun () {
      this.$api.getBoardPageSubList({
        order_field: "uid",
        order_type: "asc",
        pid: this.form.goods_category_pid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form.goods_cat = ''
        this.getBoardPageListChildren = res.data.items
      })
    },

    addTgGoodsItem () {
      let data = {
        supplier_cat: this.form.supplier_cat,
        supplier_cat2: this.form.supplier_cat2,
        supplier_cat3: this.form.supplier_cat3,
        goods_category_pid: this.form.goods_category_pid,
        goods_cat: this.form.goods_cat,
        goods_code: this.form.goods_code,
        filter_attr: this.form.filter_attr,
        goods_name: this.form.goods_name,
        goods_stock: this.form.goods_stock,
        goods_key: this.form.goods_key,
        goods_advance: this.form.goods_advance,
        goods_cost: this.form.goods_cost,
        goods_market_price: this.form.goods_market_price,
        goods_sale_price: this.form.goods_sale_price,
        type: this.form.type,
        goods_status: this.form.goods_status.join(','),
        goods_kg: this.form.goods_kg,
        goods_brand: this.form.goods_brand,
        goods_file2: this.form.goods_file2,
        goods_file1: this.form.goods_file1,
        attr_val: this.form.attr_val,
        attr_store: this.form.attr_store,
        goods_main: this.editor.txt.html(),
        start_date: this.form.date[0],
        end_date: this.form.date[1],
        gallery: this.form.gallery,
        token: JSON.parse(this.$store.state.token).token
      }

      if (this.$route.query.uid) {
        data['uid'] = this.$route.query.uid
        this.$api.setTgGoodsItem({
          ...data
        }).then(res => {
          this.$message({
            message: res.data.msg,
            type: "success",
          });
          this.$router.push('/commodity/bulkGoods')
        })
      } else {
        this.$api.addTgGoodsItem({ ...data }).then(res => {
          this.$message({
            message: res.data.msg,
            type: "success",
          });
          this.$router.push('/commodity/bulkGoods')
        })
      }

    },

    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },

    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id + '/goods/' + file.name}`;
    },


    uploadSuccessGoodsFile2 (response, file, fileList) {  //图片上传成功的方法
      this.form.goods_file2 = `${response.key}`;
    },

    uploadSuccessGoodsFile1 (response, file, fileList) {  //图片上传成功的方法
      this.form.goods_file1 = `${response.key}`;
    },

    uploadSuccessGallery (response, file, fileList) {  //图片上传成功的方法
      this.form.gallery = `${response.key}`;
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
</style>