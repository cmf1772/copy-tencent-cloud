<template>
  <div class="success">
    <div class="top">
      <van-nav-bar title="支付成功"
                   left-text
                   left-arrow
                   @click-right="onClickRight">
        <template v-slot:left>
          <div></div>
        </template>
        <template #right>
          完成
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <img src="@/assets/images/serve/success.png"
           alt="">
      <p>订单支付成功</p>
    </div>
    <div class="message">
      <div class="item">
        <img src="@/assets/images/serve/zf.png"
             alt="">
        <div>
          <p>支付方式</p>
          <span>支付宝付</span>
        </div>
      </div>

      <div class="item">
        <img src="@/assets/images/serve/zfje.png"
             alt="">
        <div>
          <p>支付金额</p>
          <span>50.50元</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'success',

  methods: {
    onClickRight () {
      this.$router.push('/serve/recovery/order')
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  box-sizing: border-box;
  padding: 0 1.23rem;
  justify-content: space-between;
  .item {
    display: flex;
    align-items: center;
    > img {
      width: 0.57rem;
      height: 0.57rem;
      margin-right: 0.34rem;
    }

    > div {
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #787878;
      line-height: 0.35rem;

      > span {
        color: #000000;
      }
    }
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
    margin-bottom: 1.02rem;
  }
}
</style>