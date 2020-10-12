<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="支付管理" left-text left-arrow @click-left="onClickLeft" >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="tip">
        <p>设置支付密码</p>
        <span>请设置微信支付密码，用于支付验证</span>
      </div>
      <van-password-input :value="value" :length="4" :focused="showKeyboard" @focus="showKeyboard = true" />
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showKeyboard: true,
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-top: 1.5rem;
  .van-password-input{
    margin-top: 0.4rem;
  }
  .tip {
    display: flex;
    text-align: center;
    flex-direction: column;
    p {
      font-size: 0.42rem;
      margin-bottom: 0.4rem;
      font-weight: bold;
    }
    span {
      font-size: 0.3rem;
      font-weight: 400;
    }
  }
}
</style>