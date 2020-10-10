<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="title">
        <p>验证码已发送至</p>
      </div>
      <div class="phone-time">
        <van-cell :title="phone">
          <template #default>
            <span class="time">{{secends}}s</span>
          </template>
        </van-cell>
      </div>
      <!-- clearable -->
      <van-password-input
        :value="value"
        :focused="showKeyboard"
        :length="4"
        :mask="false"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
      <div style="margin-top:.8rem;" class="btn">
        <van-button round block color="#C3AB87" @click="goHome">下一步</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      value: "",
      showKeyboard: false,
      phone: null,
      secends: 60,
      timer: null
    };
  },
  activated() {
    this.phone = this.$route.params.phone;
    console.log(this.phone);
    this.timer = setInterval(() => {
      this.secends--;
      if (this.secends <= 0) {
        clearInterval(this.timer);
      }
    }, 1000);
    if (!this.phone) {
      this.$toast.fail("出错了，请稍后再试");
      this.$router.replace({
        path: "/mine"
      });
    }
  },
  deactivated() {
    this.secends = 60;
    clearInterval(this.timer);
  },
  beforeDestroy() {
    this.secends = 60;
    clearInterval(this.timer);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onInput(ev) {
      this.value += ev;
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    goHome() {
      this.$api
        .register({
          login_id: this.phone,
          pass1: "123456",
          mobile_code: this.value
        })
        .then(res => {
          this.$toast.success(" 用户名为手机号,密码为123456");
          this.$router.push({
            path: "/login"
          });
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 1rem 0.45rem 0 0.45rem;
  .title {
    margin-bottom: 1rem;
    p {
      font-weight: 400;
      font-size: 0.57rem;
    }
  }
  .van-cell {
    padding-left: 0;
    padding-right: 0;
  }
  .phone-time {
    margin: 0.2rem 0;
  }
  .van-form {
    .time {
      color: #c3ab87;
      font-size: 0.24rem;
    }
    margin-top: 0.6rem;
    /deep/ .van-icon {
      font-size: 0.32rem;
      margin: 0 0.1rem;
    }
  }
  .btn {
    .van-button {
      width: 100%;
      height: 0.97rem;
      font-size: 0.39rem;
    }
  }
}
</style>