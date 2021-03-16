<template>
  <div class="specialPage"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 专场场次：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="专场场次："
                    prop="displayName">
        <div class="check">
          <input type="checkbox" id="sel2" value="专场一" v-model="checkedCitie[1]" @change="checkChange(1)"><span @click="zcChange(1)">专场一</span>
          <input type="checkbox" id="sel2" value="专场二" v-model="checkedCitie[2]" @change="checkChange(2)"><span @click="zcChange(2)">专场二</span>
          <input type="checkbox" id="sel2" value="专场三" v-model="checkedCitie[3]" @click="checkChange(3)"><span @click="zcChange(3)">专场三</span>
          <input type="checkbox" id="sel2" value="专场四" v-model="checkedCitie[4]" @click="checkChange(4)"><span @click="zcChange(4)">专场四</span>
          <input type="checkbox" id="sel2" value="专场五" v-model="checkedCitie[5]" @click="checkChange(5)"><span @click="zcChange(5)">专场五</span>
        </div>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 顶部推广：
    </p>
    <div class="form-item">
      <el-form ref="form"
               :model="form"
               label-width="130px">
        <el-form-item label="当前推广："
                      style="width: 100%"
                      prop="displayName">
          <img :src="qiniuaddr + bkimgo"
               style="width:400px;"
               alt="">
          <!-- <i class="el-icon-close redColor"
             style="font-size: 18px"></i> -->
        </el-form-item>
        <el-form-item label="顶部推广设置："
                      style="width:100%"
                      prop="name">
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
          背景颜色：<el-input v-model="top_ad_color" style="width: 30%;"></el-input>
        </el-form-item>
        <el-form-item label="当前顶部推荐："  
                      style="width:100%"
                      prop="displayName">
          <div class="form-item">
            <div style="margin-right: 20px">
              <img :src="qiniuaddr + bkimgt"
                   style="width:200px;"
                   alt="">
              <!-- <i class="el-icon-close redColor"
                 style="font-size: 18px"></i> -->
            </div>
            <div>
              <img :src="qiniuaddr + bkimgr"
                   style="width:200px;"
                   alt="">
              <!-- <i class="el-icon-close redColor"
                 style="font-size: 18px"></i> -->
            </div>
          </div>
        </el-form-item>
        <el-form-item label="顶部按钮设置："
                      prop="displayName">
          <p>图片</p>
          <el-upload class="upload-pic"
                    :action="domain"
                    :data="QiniuData"
                    :on-remove="handleRemoveTwo"
                    :on-error="uploadError"
                    :on-success="uploadSuccessTwo"
                    :before-upload="beforeAvatarUploadTwo"
                    :limit="1"
                    multiple
                    :on-exceed="handleExceed"
                    :file-list="fileListTwo">
            <el-button size="small"
                      type="primary">选择图片</el-button>
          </el-upload>
          <p>图片高亮</p>
          <el-upload class="upload-pic"
                    :action="domain"
                    :data="QiniuData"
                    :on-remove="handleRemoveThree"
                    :on-error="uploadError"
                    :on-success="uploadSuccessThree"
                    :before-upload="beforeAvatarUploadThree"
                    :limit="1"
                    multiple
                    :on-exceed="handleExceed"
                    :file-list="fileListThree">
            <el-button size="small"
                      type="primary">选择图片</el-button>
          </el-upload>
          <el-button style="margin-top:10px" @click="topItemClick">提交数据</el-button>
        </el-form-item>
      </el-form>
    </div>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 页面背景：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="页面背景颜色："
                    prop="displayName">
        <div class="form-item">
          <el-input v-model="bk_color"></el-input>
        </div>
      </el-form-item>
    </el-form>
    <el-button @click="backColorClick">提交数据</el-button>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 楼层使用：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="楼层使用："
                    style="width: 100%"
                    prop="displayName">
        <el-checkbox-group v-model="checkedCities">
          <el-checkbox v-for="item in cities1"
                       :label="item.value"
                       :key="item.value">{{item.label}}</el-checkbox>
        </el-checkbox-group>
        <el-button @click="setLevel">设置</el-button>
      </el-form-item>
    </el-form>
    <div v-for="index in 7" :key="index">
      <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
        <i class="el-icon-edit"
          style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 楼层 {{index}}：
      </p>
      <el-form ref="form"
              :model="form"
              label-width="130px">
          <el-form-item label="当前楼标："
                        style="width: 100%"
                        prop="displayName">
            <img :src="qiniuaddr + ceiling[index]"
                style="width:400px;"
                alt="">
            <!-- <i class="el-icon-close redColor"
              style="font-size: 18px"></i> -->
          </el-form-item>
          <el-form-item label="楼标设置："
                        style="width:100%"
                        prop="name">
            <el-upload class="upload-pic"
                      :action="domain"
                      :data="QiniuDatac[index]"
                      :on-remove="handleRemovec.bind(null, {'index':index})"
                      :on-error="uploadError"
                      :on-success="uploadSuccessc.bind(null, {'index':index})"
                      :before-upload="beforeAvatarUploadc.bind(null, {'index':index})"
                      :limit="1"
                      multiple
                      :on-exceed="handleExceed"
                      :file-list="imageData[index]">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
            <el-button size="small" @click="imgUpload(index)">上传图片</el-button>
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'specialPage',

  data () {
    return {
      cities1: [
        {
          label: '第一层',
          value: '1'
        }, {
          label: '第二层',
          value: '2'
        }, {
          label: '第三层',
          value: '3'
        }, {
          label: '第四层',
          value: '4'
        }, {
          label: '第五层',
          value: '5'
        }, {
          label: '第六层',
          value: '6'
        }, {
          label: '第七层',
          value: '7'
        },
      ],
      checkedCitie: {},
      checkedCities: [],
      radio: '1',
      backColor: '',
      dialogImageUrl: '',
      dialogVisible: false,
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
      color1: '',
      top_ad_color: '',
      bk_color: '',
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

      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: '',
      fileList: [],

      QiniuDataTwo: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrlTwo: '',
      fileListTwo: [],

      QiniuDataThree: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrlThree: '',
      fileListThree: [],
      bkimgo: '',
      bkimgt: '',
      bkimgr: '',
      ceiling: {},
      imgDad: {},

      QiniuDatac: {
        '1': {
          key: "", //图片名字处理
          token: this.$store.state.upToken,//七牛云token
          data: {}
        },
        '2': {
          token: this.$store.state.upToken,//七牛云token
        },
        '3': {
          token: this.$store.state.upToken,//七牛云token
        },
        '4': {
          token: this.$store.state.upToken,//七牛云token
        },
        '5': {
          token: this.$store.state.upToken,//七牛云token
        },
        '6': {
          token: this.$store.state.upToken,//七牛云token
        },
        '7': {
          token: this.$store.state.upToken,//七牛云token
        }
      },
      uploadPicUrlData: {},
      imageData: {},
    }
  },

  mounted () {
    this.zcChange(1)
  },

  methods: {
    // 设置专场
    checkChange(index) {
      this.$newApi.setOnSalePageTopicUse({
        topic_use: index,
        op: this.checkedCitie[index] ? 'add' : 'del',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
      })
    },
    // 跳转专场
    zcChange(index) {
      this.fileList = []
      this.fileListTwo = []
      this.fileListThree = []
      this.$newApi.getIndexFloorItem({
        topic: index,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.checkedCities = res.data.arr_level_use

        for(let obj in res.data.onsale_data.ceiling) {
          this.ceiling[obj] = res.data.onsale_data.ceiling[obj].data
        }

        this.uploadPicUrl = res.data.onsale_data.top_ad[0].data
        this.bkimgo = res.data.onsale_data.top_ad[0].data
        this.fileList.push({name: res.data.onsale_data.top_ad[0].data, url: res.data.onsale_data.top_ad[0].data})

        this.uploadPicUrlTwo = res.data.onsale_data.top_btn[0].data
        this.bkimgt = res.data.onsale_data.top_btn[0].data
        this.fileListTwo.push({name: res.data.onsale_data.top_btn[0].data, url: res.data.onsale_data.top_btn[0].data})
        
        this.uploadPicUrlThree = res.data.onsale_data.top_btn_hl[0].data
        this.bkimgr = res.data.onsale_data.top_btn_hl[0].data
        this.fileListThree.push({name: res.data.onsale_data.top_btn_hl[0].data, url: res.data.onsale_data.top_btn_hl[0].data})

        this.top_ad_color = res.data.onsale_data.top_ad_color[0].data
        this.bk_color = res.data.onsale_data.bk_color[0].data
      })
    },

    // 设置顶部推荐信息
    topItemClick() {
      this.$newApi.setOnSalePageTopItem({
        topic: this.radio,
        top_ad: this.uploadPicUrl,
        top_ad_color: this.top_ad_color,
        top_btn: this.uploadPicUrlTwo,
        top_btn_hl: this.uploadPicUrlThree,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.error >= 0) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },

    // 设置背景颜色
    backColorClick() {
      this.$newApi.setOnSalePageBkColor({
        topic: this.radio,
        bk_color: this.bk_color,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.error >= 0) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },

    // 设置楼层使用
    setLevel() {
      let arr = ''
      this.checkedCities.forEach((item, index) => {
        if(index == 0) {
          arr = item
        } else {
          arr += ',' + item
        }
      })
      this.$newApi.setOnSalePageLevelUse({
        topic: this.radio,
        level_use: arr,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
      })
    },

    // 设置楼顶和楼标
    imgUpload(index) {
       this.$newApi.setOnSalePageCeiling({
        topic: this.radio,
        level: index,
        ceiling: this.uploadPicUrlData[index],
        link: this.uploadPicUrlData[index],
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.error >= 0) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },

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
      this.uploadPicUrl = "";
    },
    uploadError (err, file, fileList) {    //图片上传失败时调用
      if(!file) return
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      if(!file) return
      this.uploadPicUrl = `${this.qiniuaddr}${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      if(!file) return  
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },

    handleRemoveTwo (file, fileList) {
      this.uploadPicUrlTwo = "";
    },
    uploadSuccessTwo (response, file, fileList) {  //图片上传成功的方法
      if(!file) return
      this.uploadPicUrl = `${this.qiniuaddr}${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    beforeAvatarUploadTwo (file) {   //图片上传之前的方法
      if(!file) return  
      this.QiniuDataTwo.data = file;
      this.QiniuDataTwo.key = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },

    handleRemoveThree (file, fileList) {
      this.uploadPicUrlThree = "";
    },
    uploadSuccessThree (response, file, fileList) {  //图片上传成功的方法
      if(!file) return
      this.uploadPicUrl = `${this.qiniuaddr}${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    beforeAvatarUploadThree (file) {   //图片上传之前的方法
      if(!file) return  
      this.QiniuDataThree.data = file;
      this.QiniuDataThree.key = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },

    handleRemovec (obj, file, fileList) {
      this.uploadPicUrlData[obj.index] = ''
    },
    uploadSuccessc (obj, response, file, fileList) {  //图片上传成功的方法
      if(!file) return
      this.uploadPicUrlData[obj.index] = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    beforeAvatarUploadc (obj, file) {   //图片上传之前的方法
      if(!file) return  
      this.QiniuDatac[obj.index].data = file;
      this.QiniuDatac[obj.index].key = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
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
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    // width: 45%;
  }
}
.specialPage {
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

.check{
  input{
    &:hover{
      cursor: pointer;
    }
  }
  span{
    margin:0 10px;
    &:hover{
      cursor: pointer;
      color: #f00;
      border-bottom: 1px solid #f00;
    }
  }
  span:visited{
    color: #fcc;
  }
}
</style>