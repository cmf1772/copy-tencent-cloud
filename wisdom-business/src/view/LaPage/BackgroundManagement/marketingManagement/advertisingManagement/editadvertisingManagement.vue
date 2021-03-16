<template>
  <div class="shop_list">
    <el-form ref="form" :model="form" label-width="120px" label-position="left">
      <el-form-item label="广告位置">
        广告模块:
        <el-select v-model="moduleOne" placeholder="请选择活动区域" style="width: 10%;" @change="configChange">
          <el-option v-for="(item, index) in configData" :key="index" :label="item.module" :value="item.module"></el-option>
        </el-select>
        其它参数:
        <el-select v-model="moduleTwo" placeholder="请选择活动区域" style="width: 10%;">
          <el-option v-for="(item, index) in configTwoData" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        广告位置:
        <el-select v-model="moduleThree" placeholder="请选择活动区域" style="width: 10%;">
          <el-option v-for="(item, index) in configThreeData" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="广告类型">
        <el-radio-group v-model="form.ad_type" @change="typeChange">
          <el-radio label="0">商品广告</el-radio>
          <el-radio label="1">商铺广告</el-radio>
          <el-radio label="2">其它类型广告</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-select v-model="province"
                  clearable
                  style="width: 10%;"
                  @change="changeCity"
                  placeholder="所在省">
          <el-option v-for="(item, index) in $store.state.cityList"
                    :key="index"
                    :label="item.name"
                    :value="item.id"></el-option>
        </el-select>
        <el-select v-model="city"
                  style="margin-left:0;width: 10%;"
                  clearable
                  placeholder="所在市">
          <el-option v-for="(item, index) in $store.state.areaList"
                    :key="index"
                    :label="item.name"
                    :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否总置顶">
        <el-radio-group v-model="form.is_top_all">
          <el-radio label="0">否</el-radio>
          <el-radio label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>


      <!-- 1 -->
      <el-form-item label="" v-if="form.ad_type == 0">
        <el-radio-group v-model="form.goods_type">
          <el-radio label="0">销售型普通商品</el-radio>
          <el-radio label="4">促销商品</el-radio>
          <el-radio label="5">团购商品</el-radio>
          <el-radio label="6">积分换购商品</el-radio>
          <el-radio label="7">拍卖商品</el-radio>
          <el-radio label="8">展示型商品</el-radio>
        </el-radio-group>
        <div>
          搜索商品:<el-input style="width:20%;margin-left:20px;" v-model="searchInput"></el-input><el-button @click="searchData">确定</el-button>
          <el-select v-model="goodsInfo"
                  clearable
                  style="margin-left:0;width: 40%;"
                  @change="goodsInfoChange"
                  placeholder="搜索商品">
          <el-option v-for="(item, index) in goodsData"
                    :key="index"
                    :label="item.goods_name"
                    :value="item.uid"></el-option>
          </el-select>
          <el-image
            style="width: 200px; height: 200px;display: block;"
            :src="form.now_goods_img"></el-image>
        </div>
        商品图 <el-upload class="upload-pic"
                  :action="domain"
                  :data="QiniuData"
                  :on-remove="handleRemove"
                  :on-error="uploadError"
                  :on-success="uploadSuccess"
                  :before-upload="beforeAvatarUpload"
                  :limit="1"
                  multiple
                  :on-exceed="handleExceed"
                  :file-list="fileList">
          <el-button size="small"
                    type="primary">选择图片</el-button>
        </el-upload>
        
      </el-form-item>
      <div class="form_display" v-if="form.ad_type == 0">
        <el-form-item label="商品名">
          <el-input v-model="form.goods_name"></el-input>
        </el-form-item>
        <el-form-item label="商品ID">
          <el-input v-model="goodsInfo" disabled></el-input>
        </el-form-item>
      </div>
      <div class="form_display" v-if="form.ad_type == 0">
        <el-form-item label="商家名称">
          <el-input v-model="form.goods_shop_name"></el-input>
        </el-form-item>
        <el-form-item label="简短描述">
          <el-input type="textarea" v-model="form.goods_desc" style="width: 70%;"></el-input>
        </el-form-item>
      </div>


      <!-- 2 -->
      <el-form-item label="" v-if="form.ad_type == 1">
        <div>
          搜索商家:<el-input style="width:20%;margin-left:20px;" v-model="shopInput"></el-input><el-button @click="searchShop">确定</el-button>
          <el-select v-model="shopInfo"
                  clearable
                  @change="shopDataChange"
                  style="margin-left:0;width: 40%;"
                  placeholder="搜索商家">
          <el-option v-for="(item, index) in shopData"
                    :key="index"
                    :label="item.shop_name"
                    :value="item.m_uid"></el-option>
        </el-select>
        <p>商家logo</p>
         <el-upload class="upload-pic"
                  :action="domain"
                  :data="QiniuData"
                  :on-remove="handleRemove"
                  :on-error="uploadError"
                  :on-success="uploadSuccess"
                  :before-upload="beforeAvatarUpload"
                  :limit="1"
                  multiple
                  :on-exceed="handleExceed"
                  :file-list="fileList">
          <el-button size="small"
                    type="primary">选择图片</el-button>
        </el-upload>
        <el-image
          style="width: 200px; height: 200px;display: block;"
          :src="form.now_shop_logo"></el-image>
        </div>
      </el-form-item>
      <div class="form_display" v-if="form.ad_type == 1">
        <el-form-item label="商家名称">
          <el-input v-model="form.shop_name"></el-input>
        </el-form-item>
        <el-form-item label="商家ID">
          <el-input v-model="shopInfo" disabled></el-input>
        </el-form-item>
      </div>
      <el-form-item label="商家描述" v-if="form.ad_type == 1">
          <el-input type="textarea" v-model="form.shop_desc" style="width: 32%;"></el-input>
      </el-form-item>

      <!-- 3 -->
      <el-form-item v-if="form.ad_type == 2">
        广告插图
          <el-upload class="upload-pic"
                  :action="domain"
                  :data="QiniuData"
                  :on-remove="handleRemove"
                  :on-error="uploadError"
                  :on-success="uploadSuccess"
                  :before-upload="beforeAvatarUpload"
                  :limit="1"
                  multiple
                  :on-exceed="handleExceed"
                  :file-list="fileList">
          <el-button size="small"
                    type="primary">选择图片</el-button>
        </el-upload>
        <el-image
          style="width: 200px; height: 200px;display: block;"
          :src="form.now_ad_pic"></el-image>
      </el-form-item>
      <div class="form_display" v-if="form.ad_type == 2"> 
        <el-form-item label="广告标题">
          <el-input v-model="form.ad_title"></el-input>
        </el-form-item>
        <el-form-item label="显示类别">
          <el-input v-model="form.show_cat"></el-input>
        </el-form-item>
      </div>
      <div class="form_display" v-if="form.ad_type == 2"> 
        <el-form-item label="广告链接">
          <el-input v-model="form.ad_url"></el-input>
        </el-form-item>
        <el-form-item label="摘要">
          <el-input v-model="form.desc"></el-input>
        </el-form-item>
      </div>

      
      <div class="form_display"> 
        <el-form-item label="积分">
          <el-input v-model="form.price" placeholder="申请一天所需积分"></el-input>
        </el-form-item>
        <el-form-item label="长宽">
          <el-input v-model="form.wh"></el-input>
        </el-form-item>
      </div>
      <div class="form_display">
        <el-form-item label="排序">
          <el-input v-model="form.order"></el-input>
        </el-form-item>
        <el-form-item label="前台显示">
          <el-input v-model="form.tip"></el-input>
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button @click="$router.go(-1)">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        ad_type: '0'
      },
      province: '',
      city: '',
      county: '',
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: '',
      fileList: [],
      checkAuto: {},
      configData: [],
      configTwoData: [],
      configThreeData: [],
      moduleOne: '',
      moduleTwo: '',
      moduleThree: '',
      searchInput: '',
      shopInput: '',
      goodsData: [],
      shopData: [],
      goodsInfo: '',
      shopInfo: ''
    }
  },
  watch: {
  },
  mounted() {
    this.$store.commit('GET_CITY')
    this.$newApi.getInitData({
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.configData = res.data.ad_config
    })
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    if(this.$route.query.uid != 'add') {
      this.$newApi.getRcmAdItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        
        if(res.data.adInfo.ad_type == 0) {
          this.form = Object.assign(res.data.goods, res.data.adInfo)
          this.$set(this.form, 'goods_shop_name', this.form.shop_name)
          this.$set(this.form, 'goods_desc', this.form.desc)
          this.$set(this, 'goodsInfo', this.form.goods_id)
          this.$set(this.form, 'goods_type', String(this.form.goods_type))
          this.$set(this.form, 'now_goods_img', this.form.img)
        }
        else if(res.data.adInfo.ad_type == 1) {
          this.form = Object.assign(res.data.shop, res.data.adInfo)
          this.$set(this, 'shopInfo', this.form.shop_id)
          this.$set(this, 'now_shop_logo', this.form.logo)
        }
        else if(res.data.adInfo.ad_type == 2) {
          this.form = Object.assign(res.data.ad, res.data.adInfo)
          this.$set(this.form, 'ad_title', this.form.title)
          this.$set(this.form, 'ad_url', this.form.url)
          this.$set(this.form, 'now_ad_pic', this.form.pic)
        }

        if(this.form.is_top_checked_all == 'checked') {
          this.$set(this.form, 'is_top_all', '1')
        } else {
          this.$set(this.form, 'is_top_all', '0')
        }
        
        this.$set(this.form, 'order', this.form.ad_order)
        this.form.ad_type = String(this.form.ad_type)

        this.$set(this, 'moduleOne', this.form.module)
        setTimeout(() => {
          this.configTwoData =  this.configData[this.moduleOne].other_param
          this.configThreeData = this.configData[this.moduleOne].pos

          this.$set(this, 'moduleTwo', Number(this.form.other_param))
          this.$set(this, 'moduleThree', this.form.pos)

          this.province = Number(this.form.province)
          this.$store.commit('GET_CITY', { id: this.province, name: 'areaList' })
          this.city =  Number(this.form.city)
        }, 100)
      })
    }
  },
  methods: {
    onSubmit() {
      let img_url1 = '', img_url2 = '', img_url3 = ''
      if(this.form.ad_type == 0) {
        img_url1 = this.uploadPicUrl
      } else if (this.form.ad_type == 1) {
        img_url2 = this.uploadPicUrl
      } else if (this.form.ad_type == 2) {
        img_url3 = this.uploadPicUrl
      }
      let goods_types = 0
      if(this.form.ad_type !== 0) {
        goods_types = 0
      }
      else {
        goods_types = this.form.goods_type
      }
      if(this.form.uid) {
        this.$newApi.setRcmAdItem({
          uid: this.form.uid,
          module: this.moduleOne,
          other_param: String(this.moduleTwo),
          pos: this.moduleThree,
          ad_type: Number(this.form.ad_type),
          province: String(this.province),
          city: String(this.city),
          is_top_all: this.form.is_top_all,
          goods_type: goods_types,
          goods_img: img_url1,
          now_goods_img: this.form.now_goods_img,
          goods_name: this.form.goods_name,
          goods_id: this.goodsInfo,
          goods_shop_name: this.form.goods_shop_name,
          goods_desc: this.form.goods_desc,
          shop_logo:  img_url2,
          now_shop_logo: this.form.now_shop_logo,
          shop_name: this.form.shop_name,
          shop_id: this.shopInfo,
          shop_desc: this.form.shop_desc,
          ad_pic: img_url3,
          now_ad_pic: this.form.now_ad_pic,
          ad_title: this.form.ad_title,
          show_cat: this.form.show_cat,
          ad_url: this.form.ad_url,
          desc: this.form.desc,
          price: String(this.form.price),
          wh: this.form.wh,
          order: this.form.order,
          tip: this.form.tip,
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
            this.$router.go(-1)
          }
        })
      } else {
        this.$newApi.addRcmAdItem({
          module: this.moduleOne,
          other_param: String(this.moduleTwo),
          pos: this.moduleThree,
          ad_type: Number(this.form.ad_type),
          province: String(this.province),
          city: String(this.city),
          is_top_all: this.form.is_top_all,
          goods_type: goods_types,
          goods_img: img_url1,
          now_goods_img: this.form.now_goods_img,
          goods_name: this.form.goods_name,
          goods_id: this.goodsInfo,
          goods_shop_name: this.form.goods_shop_name,
          goods_desc: this.form.goods_desc,
          shop_logo:  img_url2,
          now_shop_logo: this.form.now_shop_logo,
          shop_name: this.form.shop_name,
          shop_id: this.shopInfo,
          shop_desc: this.form.shop_desc,
          ad_pic: img_url3,
          now_ad_pic: this.form.now_ad_pic,
          ad_title: this.form.ad_title,
          show_cat: this.form.show_cat,
          ad_url: this.form.ad_url,
          desc: this.form.desc,
          price: this.form.price,
          wh: this.form.wh,
          order: this.form.order,
          tip: this.form.tip,
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
            this.$router.go(-1)
          }
        })
      }
    },

    typeChange() {
      this.$set(this.form, 'goods_name', '')
      this.$set(this.form, 'now_goods_img', '')
      this.$set(this.form, 'goods_shop_name', '')
      this.$set(this.form, 'goods_desc', '')
      this.$set(this, 'goodsInfo', '')

      this.$set(this.form, 'shop_name', '')
      this.$set(this.form, 'now_shop_logo', '')
      this.$set(this.form, 'shop_desc', '')
      this.$set(this, 'shopInfo', '')

      this.$set(this.form, 'ad_title', '')
      this.$set(this.form, 'show_cat', '')
      this.$set(this.form, 'ad_url', '')
      this.$set(this.form, 'desc', '')

      this.fileList = []
      this.uploadPicUrl = ''
    },

    goodsInfoChange() {
      for(var item in this.goodsData) {
          console.log(item)
        if(item == this.goodsInfo) {
          // this.form.goods_name = this.goodsData[item].goods_name
          // this.form.now_goods_img = this.goodsData[item].photo  
          // this.form.goods_shop_name = this.goodsData[item].shop_name  
          // this.form.goods_desc = this.goodsData[item].goods_advance  
          this.$set(this.form, 'goods_name', this.goodsData[item].goods_name)
          this.$set(this.form, 'now_goods_img', this.goodsData[item].photo)
          this.$set(this.form, 'goods_shop_name', this.goodsData[item].shop_name)
          this.$set(this.form, 'goods_desc', this.goodsData[item].goods_advance)
        }
      }
    },

    shopDataChange() {
      for(var item in this.shopData) {
        if(item == this.shopInfo) {
          // this.form.shop_name = this.shopData[item].shop_name
          // this.form.now_shop_logo = this.shopData[item].shop_logo  
          // this.form.shop_desc = this.shopData[item].shop_intro 
          this.$set(this.form, 'shop_name', this.shopData[item].shop_name)
          this.$set(this.form, 'now_shop_logo', this.shopData[item].shop_logo)
          this.$set(this.form, 'shop_desc', this.shopData[item].shop_intro)

        }
      }
    },

    configChange() {
      this.moduleTwo = ''
      this.moduleThree = ''
      if(this.configData[this.moduleOne]) {
        this.configTwoData =  this.configData[this.moduleOne].other_param
        this.configThreeData = this.configData[this.moduleOne].pos
      }
    },

    searchData() {
      this.$newApi.searchGoods({
        goods_type: this.form.goods_type,
        keyword: this.searchInput,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.goodsData = res.data.goods_info
      })
    },

    searchShop() {
      this.$newApi.searchShop({
        keyword: this.shopInput,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.shopData = res.data.shop_info
      })
    },

    changeCity () {
      this.city = ''
      this.county = ''
      this.$store.commit('GET_CITY', { id: this.province, name: 'areaList' })
    },

    changeAreaList () {
      this.county = ''
      this.$store.commit('GET_CITY', { id: this.city, name: 'county' })
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
      this.uploadPicUrl = `${this.qiniuaddr}${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },
  }
}
</script>

<style lang="scss" scoped>
.shop_list {
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  .list_top {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding-top: 5px;
    .el-form {
      .top_content {
        display: flex;
        .el-form-item {
          flex: 1;
          .el-input {
            width: 60%;
          }
        }
      }
    }
  }
  .list_con {
    margin-top: 5px;
    flex: 1;
  }
}
.form_display{
  display: flex;
  .el-form-item {
    flex: 1;
    .el-input{
      width: 70%;
    }
  }
}
</style>