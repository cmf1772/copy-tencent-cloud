<template>
  <div class="editluckyDraw"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 操作：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="活动名称："
                    prop="name">
        <el-input v-model="form.name"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="所需积分："
                    prop="point">
        <el-input v-model="form.point"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="起始时间："
                    prop="start_time">
        <el-input v-model="form.start_time"
                  placeholder></el-input>
        <p> (时间格式示例：2014-7-1 18:00)</p>
      </el-form-item>
      <el-form-item label="终止时间："
                    prop="end_time">
        <el-input v-model="form.end_time"
                  placeholder></el-input>
        <p>(时间格式示例：2014-7-2 18:00)</p>

      </el-form-item>
      <el-form-item label="无奖概率："
                    prop="fail_rate">
        <el-input v-model="form.fail_rate"
                  placeholder></el-input>
      </el-form-item>
      <el-form-item label="无奖角度范围：">
        <div class="form-item">
          <el-input v-model="form.fail_degree_min"
                    style="width:45%"
                    placeholder></el-input>
          <p style="width:9%; text-aline:center">-</p>
          <el-input v-model="form.fail_degree_max"
                    style="width:45%"
                    placeholder></el-input>
        </div>
      </el-form-item>
      
      <!-- <el-form-item label="当前转盘："
                    prop="displayName">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596715099517&di=baab76f118586a673c47a1a6969795e4&imgtype=0&src=http%3A%2F%2Fwww.5tu.cn%2Fattachments%2Fmonth_1306%2F13062415125db0082fd56a0066.jpg"
             style="width: 200px; height: 200px"
             alt="">
      </el-form-item> -->
      <el-form-item label="转盘上传："
                    prop="displayName">
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
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i>上传活动奖品：
    </p>
    <div class="form-item">
      <el-form ref="form"
               label-width="130px">
        <el-form-item>
          <el-button @click="addPrize">添加</el-button>
          <el-button @click="delPrize">减少</el-button>
        </el-form-item>
        <el-form-item label="活动奖品："
                      style="width: 100%"
                      prop="displayName"
                      v-for="(item, index) in prizeData" :key="index">
          <span>奖项：</span>
          <el-input v-model="item.lucky_name"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <span>奖品名称：</span>
          <el-input v-model="item.goods_name"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <div class="form-item"
               style="margin: 10px 0">
            <span>奖品图样：</span>
            <el-upload class="upload-pic"
                :action="domain"
                :data="QiniuData"
                :on-remove="handleRemoveTwo"
                :on-error="uploadError"
                :on-success="uploadSuccessTwo"
                :before-upload="beforeAvatarUpload"
                :limit="1"
                multiple
                :on-exceed="handleExceed"
                :file-list="item.fileList">
              <el-button size="small"
                        type="primary">选择图片</el-button>
            </el-upload>
          </div>
          <span>概率权重：</span>
          <el-input v-model="item.rate"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <span>URL：</span>
          <el-input v-model="item.url"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <span>角度范围：</span>
          <el-input v-model="item.degree_min"
                    style="width:150px"
                    placeholder=""></el-input>
          -
          <el-input v-model="item.degree_max"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
          <span>排序：</span>
          <el-input v-model="item.od"
                    style="width:150px;margin-right:10px"
                    placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="注意："
                      prop="displayName">
          <div class="margin-bottom: 10px">1、奖品的角度要严格按照转盘图标正确标明 </div>
          <div class="margin-bottom: 10px">2、奖项的起始角度范围为[0,359]或[1,360] </div>
          <div class="margin-bottom: 10px">3、奖品的角度不能有重叠，否则可能会产生意外的效果</div>
          <div class="margin-bottom: 10px">4、转盘各个奖品的获奖概率可以不相等</div>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary"
               style="float: right"
               @click="save">确定</el-button>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'editluckyDraw',

  data () {
    return {
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
      prizeData: [{}],
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

      fileList: [],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: "", //提交到后台图片地址
      fileListTwo:[]
    }
  },

  mounted () {
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    if(this.$route.query.uid) {
      this.create()
    }
  },

  methods: {
    create() {
      this.$newApi.getLuckyActItem({
        uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data.lucky
        let obj = {
          name: res.data.lucky.img,
          url: res.data.lucky.img
        }
        this.uploadPicUrl = res.data.lucky.img
        this.fileList.push(obj)
        res.data.lucky_goods.forEach((item, index) => {
          console.log(item)
          item.fileList = []
          this.fileListTwo.push(item.goods_img)
          let obj = {
            name: item.goods_img,
            url: item.goods_img
          }
          item.fileList.push(obj)
        })
        this.prizeData = res.data.lucky_goods
      })
    },
    addPrize() {
      this.prizeData.push({})
    },
    delPrize() {
      if(this.fileListTwo.length == this.prizeData.length) {
        this.fileListTwo.pop()
      }
      this.prizeData.pop()
    },
    save() {
      console.log(this.prizeData)
      console.log(this.fileList)
      console.log(this.uploadPicUrl)
      console.log(this.fileListTwo)

      let lucky_name = ''
      let goods_name = ''
      let goods_img = ''
      let rate = ''
      let url = ''
      let degree_min = ''
      let degree_max = ''
      let od = ''
      this.prizeData.forEach((item, index) => {
        if(index == 0) {
          lucky_name = item.lucky_name
          goods_name = item.goods_name
          goods_img = this.fileListTwo[index]
          rate = item.rate
          url = item.url
          degree_min = item.degree_min
          degree_max = item.degree_max
          od = item.od
        }
        else{
          lucky_name += ',' + item.lucky_name
          goods_name += ',' + item.goods_name
          goods_img += ',' + this.fileListTwo[index]
          rate += ',' + item.rate
          url += ',' + item.url
          degree_min += ',' + item.degree_min
          degree_max += ',' + item.degree_max
          od += ',' + item.od
        }
      })

      if(this.$route.query.uid) {
        this.$newApi.setLuckyActItem({
          uid: this.$route.query.uid,
          name: this.form.name,
          point: String(this.form.point),
          start_time: this.form.start_time,
          end_time: this.form.end_time,
          fail_rate: String(this.form.fail_rate),
          fail_degree_min: String(this.form.fail_degree_min),
          fail_degree_max: String(this.form.fail_degree_max),
          img: this.uploadPicUrl,
          lucky_name: String(lucky_name),
          goods_name: String(goods_name),
          goods_img: String(goods_img),
          rate: String(rate),
          url: url,
          degree_min: String(degree_min),
          degree_max: String(degree_max),
          od: String(od),
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '添加成功'
            })
            this.$router.go(-1)
          }
        })
      }
      else{
        this.$newApi.addLuckyActItem({
          name: this.form.name,
          point: this.form.point,
          start_time: this.form.start_time,
          end_time: this.form.end_time,
          fail_rate: this.form.fail_rate,
          fail_degree_min: this.form.fail_degree_min,
          fail_degree_max: this.form.fail_degree_max,
          img: this.uploadPicUrl,
          lucky_name: lucky_name,
          goods_name: goods_name,
          goods_img: goods_img,
          rate: rate,
          url: url,
          degree_min: degree_min,
          degree_max: degree_max,
          od: od,
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

    handleRemoveTwo (file, fileList) {
      let index = this.fileListTwo.indexOf(`${this.qiniuaddr}${file.name}`)
      this.fileListTwo.splice(index, 1)
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
      console.log(response, file, fileList)
      this.uploadPicUrl = `${this.qiniuaddr}${file.name}`;
    },
    uploadSuccessTwo(response, file, fileList) {
      // console.log(response, file, fileList)
      let url = `${this.qiniuaddr}${file.name}`;
      this.fileListTwo.push(url)
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${'knowledge/' + file.name}`;
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
    width: 45%;
  }
}
.editluckyDraw {
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