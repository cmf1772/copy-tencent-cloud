<template>
  <div class="error">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="支付失败"
                   left-text
                   left-arrow
                   @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <img src="@/assets/images/serve/error.png"
           alt="">
      <p>订单支付失败</p>
    </div>

    <div class="bottom">
      <div class="botton"
           @click="error">
        重新支付
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',

  methods: {
    error () {
      this.$router.push('/serve/recovery/payment/paymentOrder')
    },
    onClickLeft () {
      this.$router.go(-1)

    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  .botton {
    width: 3.93rem;
    height: 0.87rem;
    border-radius: 0.44rem;
    background: #c4ac88;
    margin: 0 auto;
    line-height: 0.87rem;
    text-align: center;

    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 1.69rem;
    height: 1.69rem;
    margin-top: 2.11rem;
    margin-bottom: 0.71rem;
  }
  > p {
    font-size: 0.43rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    margin-bottom: 3.02rem;
  }
}
</style>