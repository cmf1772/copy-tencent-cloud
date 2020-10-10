<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="申请成为回收员"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 表单 -->
    <div class="form">
      <van-form validate-first
                @failed="onFailed"
                @submit="submitFormData">
        <van-field v-model="formData.name"
                   name="pattern"
                   label="姓名"
                   placeholder="请输入姓名"
                   :rules="[{ required: true, message: ' ' }]" />
        <van-field v-model="formData.phone"
                   name="validator"
                   label="手机"
                   @blur="judgePhoneType"
                   placeholder="请输入手机号"
                   :rules="[{ required: true, message: ' ' ,validator:judgePhoneType}]" />
        <van-field v-model="formData.idCard"
                   label="身份证"
                   name="asyncValidator"
                   placeholder="请输入身份证号"
                   :rules="[{ required: true, message: ' ' }]" />
        <van-field name="uploader">
          <template #input>
            <div class="uploader-wrap">
              <van-uploader v-model="formData.idCardBefore"
                            :max-count="1"
                            :after-read="afterReadBefore">
                <template #default>
                  <img src="@/assets/images/icon/serve/recovery/sfzz.png"
                       style="width:3.2rem;height:2.06rem"
                       alt />
                  <img src="@/assets/images/icon/serve/recovery/addsfz.png"
                       class="sfzadd"
                       alt />
                </template>
              </van-uploader>
              <van-uploader v-model="formData.idCardAfter"
                            :max-count="1"
                            :after-read="afterReadAfter">
                <template #default>
                  <img src="@/assets/images/icon/serve/recovery/sfzb.png"
                       style="width:3.2rem;height:2.06rem"
                       alt />
                  <img src="@/assets/images/icon/serve/recovery/addsfz.png"
                       class="sfzadd"
                       alt />
                </template>
              </van-uploader>
            </div>
          </template>
        </van-field>
        <!-- <van-cell is-link>
          <template #title>
            <van-field v-model="formData.type"
                       @focus="show = true"
                       placeholder="请选择回收类别"
                       label="回收类别"
                       :rules="[{ required: true, message: ' ' }]" />
          </template>
        </van-cell> -->
        <van-cell is-link>
          <van-field v-model="formData.area"
                     name="validator"
                     label="申请区域"
                     placeholder="请选择申请区域"
                     @focus="areaShow = true"
                     :rules="[{ required: true, message: ' ' }]" />
        </van-cell>
        <van-field v-model="formData.address"
                   label="详细住址"
                   name="asyncValidator"
                   placeholder="请输入详细住址"
                   :rules="[{ required: true, message: ' ' }]" />
        <van-field v-model="formData.contactPeople"
                   label="紧急联系人"
                   name="asyncValidator"
                   placeholder="如：张晓华"
                   :rules="[{ required: true, message: ' ' }]" />
        <van-field v-model="formData.contactPeoplePhone"
                   label="紧急联系电话"
                   name="asyncValidator"
                   placeholder="如：张晓华"
                   :rules="[{ required: true, message: ' ' }]" />
        <div class="btn"
             style="margin: 16px;">
          <van-button round
                      block
                      type="info"
                      native-type="submit">提交</van-button>
        </div>
      </van-form>
      <van-action-sheet v-model="show"
                        :actions="actions"
                        cancel-text="取消"
                        close-on-click-action
                        @select="checkedType"
                        @cancel="onCancel" />

      <van-popup v-model="areaShow"
                 round
                 position="bottom">
        <van-picker show-toolbar
                    ref="areaComponent"
                    title="选择回收区域"
                    :columns="areaList"
                    value-key="text"
                    @cancel="areaShow = false"
                    @change="onChangeArea"
                    @confirm="onConfirmArea" />
      </van-popup>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 接口绑定数据
      formData: {
        name: null,   //姓名
        phone: null,   //手机
        idCard: null,    // 身份证号码
        idCardBefore: [],   // 身份证正面照
        idCardAfter: [],    //身份证反面照
        type: null,  //  回收类型
        area: null,  // 回收区域
        address: null, //详细地址
        contactPeople: null, // 紧急联系人
        contactPeoplePhone: null,  //紧急联系人电话
        provinceId: null,  //省份id
        cityId: null   //城市id
      },
      text: "",
      fileUploaderUrlObj: {},
      show: false, // 选择回收类别
      actions: [{ name: '塑料' }, { name: '瓶子' }, { name: '衣物' }], // 类别种类

      areaObject: {}, //所有
      areaShow: false, // 选择回收区域
      areaList: [] //回收区域数据
    };
  },
  created () {
    // 先判断是否登录
    // 只有登录的人才能申请
    if (!this.$store.state.isLogin) {
      this.$toast.fail("请先登录");
      this.$router.replace({
        path: '/login'
      })
    }

    // 获取缓存当中的地址信息
    let addressData = JSON.parse(localStorage.getItem("_M_Address_Data"))
    this.formData.provinceId = addressData.province.id;
    this.formData.cityId = addressData.city.id;
    this.areaObject = addressData;

    // 获取文件上传地址
    this.$api.uploader
      .getUploaderFileUrl()
      .then((res) => {
        console.log(res);
        this.fileUploaderUrlObj = res;
      })
      .catch((err) => { });


    // 获取区域选择框
    this.$api.index
      .getAdressLocalList({
        pid: this.formData.cityId,
      })
      .then((res) => {
        this.areaObject['area'] = res;
        res.map(item => {
          this.areaList.push(
            { text: item.name }
          )
        })
        // this.getAreaTown(res[0],0)
        console.log(this.areaObject);
      });
  },
  methods: {
    // 提交表单函数
    submitFormData () {
      localStorage.setItem("_M_Recycler_Area", this.areaObject.province.name + "/" + this.areaObject.city.name + "/" + this.formData.area)
      this.$api.serve.recovery.becomeRecycler({
        uid: this.$store.state.user.user_id,  //user id
        province_id: this.areaObject.province.id,  //省份
        city_id: this.areaObject.city.id,  // 城市
        area_id: this.formData.areaId, //区域
        id_card: this.formData.idCard, //身份证
        mobile: this.formData.phone, //手机号码
        card_back: this.formData.idCardAfter[0].url,  //身份证正面照片
        card_front: this.formData.idCardBefore[0].url, //身份证反面照片
        address: this.formData.address,  // 回收区域
        link_name: this.formData.contactPeople,  //紧急联系人
        link_mobile: this.formData.contactPeoplePhone  //紧急联系人电话
      })
        .then(res => {
          this.$toast.success("申请成功，等待管理员审核");
          this.$router.go(-1)
        })
        .catch(err => {
          console.log(err);
        })
    },
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickRight () { },
    validator (val) {
      return /1\d{10}/.test(val);
    },
    // 身份证正面图上传
    afterReadBefore (file) {
      this.uploadImg(file.file, file, this.formData.idCardBefore);
    },
    // 省份证背面图上传
    afterReadAfter (file) {
      this.uploadImg(file.file, file, this.formData.idCardAfter);
    },
    // 上传文件函数
    uploadImg (file, fileCs, fileList) {
      let url = "";
      // 设置formdata 文件流
      var formdata = new FormData();
      formdata.append("file", file, file.name);
      formdata.append("token", this.fileUploaderUrlObj.token.token);
      // 拼接访问路径
      formdata.append(
        "key",
        "files/" +
        file.type.split("/")[0] +
        "/" +
        this.genID(6) +
        "_" +
        file.name
      );

      // 上传文件
      // 上传文件接口使用第三方
      // 传入文件流
      this.$api.uploader
        .fileUpload(
          this.fileUploaderUrlObj.token.upload_url.upload_url,
          formdata
        )
        .then((res) => {
          // 将 vant 中base64替换为真实路径
          fileList.splice(fileList.length - 1, 1, {
            url: "http://img.meichengmall.com/" + res.key,
          });

          if (this.formData.idCardAfter.length && this.formData.idCardBefore.length) {
            console.log(this.formData.idCardAfter);
            this.judgeIdCard();
          }
          // this.getFile(url)
        })
        .catch((err) => {
          console.log(err);
          fileCs.status = "failed";
          fileCs.message = "上传失败";
        });
    },
    // 随机名
    genID (length) {
      return Number(
        Math.random().toString().substr(3, length) + Date.now()
      ).toString(36);
    },

    // 验证身份证
    judgeIdCard () {
      this.$api.serve.recovery
        .judgeIdCard({
          front_img: this.formData.idCardBefore[0].url,
          back_img: this.formData.idCardAfter[0].url,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 取消选择类型
    onCancel () {

    },

    // 选择回收类型
    checkedType (actionName) {
      this.formData.type = actionName.name
    },

    // 验证手机类型
    judgePhoneType () {
      return (/^1[3456789]\d{9}$/.test(this.formData.phone))
    },

    getAreaTown (parentArea, index) {
      this.$api.index
        .getCountryLocalList({
          area_id: parentArea.id,
          city: this.areaObject.city.name,
          area: parentArea.name,
        })
        .then((res) => {
          res['全区'].unshift({ name: '全区', id: null })
          this.areaObject.area[index]['child'] = res;
          this.areaList[index]['children'] = [];

          res['全区'].map((item, i) => {
            this.$set(this.areaList[index]['children'], i, {
              text: item.name
            })
          })
          console.log(this.areaList);
        });
    },

    onConfirmArea () {
      console.log(this.$refs['areaComponent'].getIndexes());
      this.areaShow = false;
      this.formData['areaId'] = this.areaObject.area[this.$refs['areaComponent'].getIndexes()].id;
      console.log(this.formData['areaId']);
      this.formData.area = this.areaObject.province.name + "-" + this.areaObject.city.name + "-" + this.$refs['areaComponent'].getValues()[0].text
    },
    onChangeArea () {
      // 区域改变获取街道
      console.log(this.$refs['areaComponent'].getIndexes());
      let index = this.$refs['areaComponent'].getIndexes()[0]
      console.log(index);

      // town 设置乡镇
      // if( !this.areaObject.area[index]['child']){
      //   this.getAreaTown(this.areaObject.area[index],index)
      // }
    },
    onFailed (errorInfo) {
      console.log("failed", errorInfo);
    },
  },
};
</script>

<style lang="less" scoped>
.form {
  .van-cell {
    padding: 0.35rem 0.45rem;
    .uploader-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;
      /deep/ .van-uploader__preview {
        margin: 0;
        img,
        .van-uploader__preview-image {
          width: 3rem;
          height: 2.06rem;
        }
      }
    }
    .van-uploader {
      position: relative;
      /deep/ .sfzadd {
        width: 0.7rem;
        height: 0.7rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -0.35rem;
        margin-top: -0.35rem;
      }
    }
  }
  .van-cell--clickable {
    align-items: center;
    background: transparent;
    padding-right: 0.2rem;
    padding: 0;
  }
  .van-button--info {
    background: #c3ab87;
    width: 50vw;
    margin: 0.4rem auto;
    border: none;
  }
  .van-form {
    .btn {
      .van-button {
        width: 3.93rem;
        height: 0.87rem;
        padding: 0;
        font-size: 0.3rem;
      }
    }
    /deep/ .van-cell {
      /deep/ .van-cell__title {
        /deep/ span {
          font-size: 0.3rem;
          display: inline-block;
          width: 1.3rem;
        }
      }
    }
    /deep/ .van-cell:not(:nth-child(9)) {
      /deep/ .van-cell__title {
        /deep/ span {
          text-align-last: justify;
          text-align: justify;
        }
      }

      /deep/ .van-field__control {
        font-size: 0.3rem;
      }
      .van-cell__right-icon {
        right: 0.2rem;
      }
    }
  }
}
</style>