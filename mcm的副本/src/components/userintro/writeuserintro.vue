<template>
  <div class="writeintro" :class="{ open: isDocOpen }">
    <div class="writeintrobody">
      <div class="head">
        <span class="s1" @click="docToggleOpen()">
          <font class="icon-fanhui iconfont"></font>
        </span>
        <span class="s2">完善您的检测信息</span>
      </div>
      <div class="writeintrobox">
        <van-form @submit="onSubmit">
          <van-field
            v-model="appoint_name"
            name="appoint_name"
            ref="appoint_name"
            label="检测姓名"
            placeholder="检测人姓名2-10位中文"
          />
          <van-field
            v-model="appoint_tel"
            name="appoint_tel"
            ref="appoint_tel"
            label="检测电话"
            maxlength="11"
            type="tel"
            placeholder="请输入检测人11位手机号码"
          />
          <van-field
            v-model="idcard"
            name="idcard"
            ref="idcard"
            label="身份证号"
            type="tel"
            placeholder="请输入您的身份证号码，仅用于购买保险"
          />
          <van-field name="sex" label="我的性别">
            <template #input>
              <van-radio-group v-model="sex" direction="horizontal">
                <van-radio name="男">男</van-radio>
                <van-radio name="女">女</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-model="age"
            name="age"
            ref="age"
            label="您的年龄"
            maxlength="3"
            type="tel"
            placeholder="请输入您的真实年龄"
          />
          <van-field
            v-model="height"
            name="height"
            ref="height"
            label="您的身高"
            maxlength="5"
            type="tel"
            placeholder="请输入您的身高信息（单位cm）"
          />
          <van-field
            v-model="weight"
            name="weight"
            ref="weight"
            label="您的体重"
            maxlength="5"
            type="tel"
            placeholder="请输入您的体重信息（单位kg）"
          />
          <van-field
            v-model="occupation"
            name="occupation"
            ref="occupation"
            label="您的职业"
            placeholder="请输入您的职业信息"
          />
          <van-field name="send_type" label="报告接收">
            <template #input>
              <van-radio-group v-model="send_type" direction="horizontal">
                <van-radio name="1">微信接收</van-radio>
                <van-radio name="2">邮箱接收</van-radio>
              </van-radio-group>
            </template>
          </van-field>
          <van-field
            v-model="send_account"
            name="send_account"
            ref="send_account"
            label="接收账号"
            placeholder="报告接收的账号信息（微信/电子邮件）"
          />
          <van-field
            v-model="send_address"
            name="send_address"
            ref="send_address"
            label="邮寄地址"
            placeholder="请输入您的收件地址"
          />
          <div class="btnbox flex-center">
            <van-button round block type="info" native-type="submit" class="btn"
              >立即保存</van-button
            >
            <span class="btn bg-grey" @click="docToggleOpen()">放弃填写</span>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order_id: this.$getQueryVariable("order_id"),
      appoint_name: "",
      appoint_tel: "",
      idcard: "",
      sex: "",
      age: "",
      height: "",
      weight: "",
      occupation: "",
      send_type: "",
      send_account: "",
      send_address: "",
      isDocOpen: false,
      isresult: false,
      cardetailed: {},
      number: "",
      hint: "请在上方输入框中输入健康卡卡号,获取健康卡信息"
    };
  },
  methods: {
    //开启关闭
    docToggleOpen() {
      this.isDocOpen = !this.isDocOpen;
    },

    //查询卡详情
    onSubmit(values) {
      let _this = this;
      //验证id信息
      values["order_id"] = _this.order_id;
      if (_this.$isblank(_this.order_id)) {
        this.$toast("没有找到订单信息，请退出重新进入！");
        return;
      }

      //验证姓名
      this.appoint_name = this.$trim(this.appoint_name);
      if (this.$valid(this.appoint_name, /^[\u4e00-\u9fa5]{2,10}$/)) {
        this.$toast("请输入检测人姓名,2-10位中文");
        this.$nextTick(() => {
          this.$refs.appoint_name.focus();
        });
        return false;
      }
      //验证电话
      this.appoint_tel = this.$trim(this.appoint_tel);
      if (this.$valid(this.appoint_tel, "tel")) {
        this.$toast("请输入检测人正确的11位手机号码");
        this.$nextTick(() => {
          this.$refs.appoint_tel.focus();
        });
        return false;
      }
      
        //验证身份证信息
      this.idcard = this.$trim(this.idcard);
      if (!this.$idNoFormatCheck(this.idcard)) {
        this.$toast("请输入正确的身份证号码");
        return false;
      }

      //验证性别
      this.sex = this.$trim(this.sex);
      if (this.$valid(this.sex, /^.{1}$/)) {
        this.$toast("请选择性别");
        return false;
      }

      //验证年龄
      this.age = this.$trim(this.age);
      if (this.$valid(this.age, /^([1-9]\d?|1[01]\d|120)$/)) {
        this.$toast("请输入正确的年龄信息");
        this.$nextTick(() => {
          this.$refs.age.focus();
        });
        return false;
      }

      //验证身高
      this.height = this.$trim(this.height);
      if (this.$valid(this.height, /^[0-9]+([.]{1}[0-9]+){0,1}$/)) {
        this.$toast("请输入正确的身高信息（单位cm）");
        this.$nextTick(() => {
          this.$refs.height.focus();
        });
        return false;
      } else {
        if (this.height < 100 || this.height > 230) {
          this.$toast("请输入正确的身高信息（单位kg）");
          this.$nextTick(() => {
            this.$refs.height.focus();
          });
          return false;
        }
      }

      //验证体重
      this.weight = this.$trim(this.weight);
      if (this.$valid(this.weight, /^[0-9]+([.]{1}[0-9]+){0,1}$/)) {
        this.$toast("请输入正确的身高信息（单位cm）");
        this.$nextTick(() => {
          this.$refs.weight.focus();
        });
        return false;
      } else {
        if (this.weight < 30 || this.weight > 150) {
          this.$toast("请输入正确的体重信息（单位kg）");
          this.$nextTick(() => {
            this.$refs.weight.focus();
          });
          return false;
        }
      }

      //验证职业
      this.occupation = this.$trim(this.occupation);
      if (this.$valid(this.occupation, /^.{2,30}$/)) {
        this.$toast("请输入正确的职业信息");
        this.$nextTick(() => {
          this.$refs.occupation.focus();
        });
        return;
      }

      //验证接收电子检测报告的方式
      this.send_type = this.$trim(this.send_type);
      if (this.$valid(this.send_type, /^.{1}$/)) {
        this.$toast("请选择接收电子检测报告的方式（微信/邮箱）");
        return false;
      }

      //验证接收电子报告的账号
      if (this.send_type == 1) {
        var rules = /^[A-Za-z0-9]{4,40}$/;
        var rulestxt = "请输入正确的接受电子检测报告的微信号";
      } else {
        var rules = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        var rulestxt = "请输入正确的接受电子检测报告的邮箱账号";
      }

      this.send_account = this.$trim(this.send_account);
      if (this.$valid(this.send_account, rules)) {
        this.$toast(rulestxt);
        this.$nextTick(() => {
          this.$refs.send_account.focus();
        });
        return false;
      }

      //验证纸质报告收件地址
      this.send_address = this.$trim(this.send_address);
      if (this.$valid(this.send_address, /^.{2,50}$/)) {
        this.$toast("请输入正确的纸质报告收件地址");
        this.$nextTick(() => {
          this.$refs.send_address.focus();
        });
        return;
      }
      const loading = this.$toast.loading({
        duration: 0,
        message: "正在更新信息...",
        forbidClick: true
      });
      this.$api
        .updateOrderUserIntro(values)
        .then(res => {
          loading.clear();
          this.docToggleOpen();
          this.$emit("reloadata", values);
        });
    },
    //改变显示状态
    changeisresult() {
      this.isresult = false;
    }
  }
};
</script>
<style lang="scss">
.writeintro .head{color:#fff;text-align:center;position: relative;height:0.8rem;line-height:0.8rem;}
.writeintro .head .s1{font-size:0.22rem;position: absolute;display:block;height:0.8rem;line-height:0.8rem;padding:0 10px;}
.writeintro .head .s1 font{font-size:0.24rem !important;display:block;height:0.8rem;line-height:0.8rem;}
.writeintro .head .s2{font-size:0.3rem;height:0.8rem;line-height:0.8rem;display: block;font-weight:700;}
.writeintro{position:fixed;width:100%;height:100%;left:0;top:0;background:#0081ff;transition: all .3s ease; -webkit-transition: all .3s ease;transform: translateX(-100%);-webkit-transform: translateX(-100%);z-index:100;}
.writeintrobody{height:100%;width:100%;}
.writeintro.open{display:block;transition: all .3s ease; -webkit-transition: all .3s ease;transform: translateX(0);-webkit-transform: translateX(0);}
.writeintro{width:100%;height:100%;}
.writeintrobox{width:95%;background:#fff;height: calc(100vh - 1rem);border-radius:3px;overflow: hidden;position: relative;margin:0 auto;overflow-y: auto;}
.writeintrobox .head2{height:50px;background:#F9F9F9;font-size:16px;line-height:50px;color:#0081ff;padding:0 10px;position: absolute;left:0;top:0;width:100%;box-sizing:border-box;z-index:1;}
.writeintrobox .head2 .iconfont{font-size:20px;margin-right:4px;position: relative;top:1px}
.writeintrobox .head2 em{float:right;font-size:20px}
.writeintrobox .btnbox{text-align:center;overflow: hidden;padding:20px 0;}
.writeintrobox .btnbox .btn{width:100px;padding: 6px 15px;height:auto;box-sizing:content-box;}
.writeintrobox .van-cell{overflow: hidden !important;}
</style>