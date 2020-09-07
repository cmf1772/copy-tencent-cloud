<template>
  <div class="paymentOrder">
    <div class="top">
      <van-nav-bar title="支付订单"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight"><template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <p>支付金额</p>
      <div> <span>￥</span> 55.53</div>
    </div>
    <div class="select">
      <p>支付方式</p>
      <div class="item">
        <div class="left">
          <img src="@/assets/images/serve/wx.png"
               alt="">
          微信
        </div>
        <div class="right">
          <van-radio-group v-model="radio">
            <van-radio name="1"
                       checked-color="#07c160"></van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <img src="@/assets/images/serve/zf.png"
               alt="">
          支付宝
        </div>
        <div class="right">
          <van-radio-group v-model="radio">
            <van-radio name="2"
                       checked-color="#07c160"></van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="botton"
           @click="payment">
        立即支付
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'paymentOrder',
  data () {
    return {
      radio: '1'
    }
  },

  methods: {
    payment () {
      // 如果成功
      this.$router.push('/serve/recovery/payment/success')
      //失败
      // this.$router.push('/serve/recovery/payment/error')
    },

    onClickLeft () {
      this.$router.go(-1)
    },
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  .botton {
    width: 3.93rem;
    height: 0.87rem;
    border-radius: 0.44rem;
    line-height: 0.87rem;
    background: #c4ac88;
    text-align: center;

    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}
.select {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.45rem;
  > p {
    font-size: 0.27px;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0.48rem;
  }
  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.64rem;
    align-items: center;

    .left {
      display: flex;
      font-size: 0.31rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #000000;
      align-items: center;

      > img {
        width: 0.58rem;
        height: 0.58rem;
        margin-right: 0.5rem;
      }
    }
  }
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.8rem;
  padding-bottom: 1.68rem;
  > p {
    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #787878;
    margin-bottom: 0.15rem;
  }
  > div {
    font-size: 0.44rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    line-height: 0.88rem;
    > span {
      font-size: 0.3rem;
    }
  }
}
</style>