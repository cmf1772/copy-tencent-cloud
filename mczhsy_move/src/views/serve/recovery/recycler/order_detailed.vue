<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="订单详情"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight"><template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <van-cell title="订单编号"
                value="123456789984"
                size="large" />
      <van-cell title="订单日期"
                value="2020-6-13 16:45"
                size="large" />
      <van-cell title="订单状态"
                value="待处理"
                size="large" />
      <van-cell title="电    话">
        <template #default>
          <div class="phone">
            <span>12345678910</span>
            <div class="btn"> <img src="@/assets/images/icon/serve/recovery/phone.png"
                   alt=""
                   style="width:.2rem;margin-right:.05rem">拨打电话</div>
          </div>
        </template>
      </van-cell>
      <van-cell title="地    址"
                value="四川省成都市金六区亚聂超拆12321"
                size="large" />
      <van-cell title="品    类">
        <template #default>
          <div class="category">
            <div>塑料</div>
            <div>玻璃</div>
            <div>纸</div>
          </div>
        </template>
      </van-cell>
      <van-cell title="备    注"
                value="备注杯子懂啊懂啊"
                size="large" />
      <van-cell title="预计上门时间"
                value=" 2020-09-06"
                size="large" />
      <van-cell title="预计回收环保金"
                value="¥99环保金"
                size="large" />
    </div>
    <div class="bottom">
      <!-- 在预计上门时间当天0点显示在相应订单详情页，回收员点击“支付环保金”按钮后弹出金额输入框如下： -->
      <van-button type="danger"
                  @click="goOrder"
                  round>支付环保金</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () { },

    goOrder () {
      this.$router.push('/serve/recovery/payment/paymentOrder')
    }
  }
};
</script>

<style lang="less" scoped>
.bottom {
  width: 100%;
  text-align: center;
  margin: 0.1rem 0;
}
.container {
  .van-cell {
    padding: 0.35rem 0.45rem;
    align-items: center;
  }
  .van-cell:nth-child(3) {
    /deep/ .van-cell__value span {
      color: #c3ab87;
    }
  }
  /deep/ .van-cell__title {
    max-width: 1.2rem;
    text-align-last: justify;
    text-align: justify;
    span {
      font-size: 0.3rem;
      color: #777777;
    }
  }
  /deep/ .van-cell__value {
    text-align: left;
    color: #333;
    align-items: center;
    padding-left: 0.4rem;
    font-size: 0.3rem;
  }
  .category {
    display: flex;
    div {
      width: 1rem;
      font-size: 0.26rem;
      text-align: center;
      width: 1.3rem;
      height: 0.65rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #eee;
      margin-right: 0.2rem;
      color: #000;
      border-radius: 1rem;
    }
  }
  .phone {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn {
      background: #f7f7f7;
      color: #c3ab87;
      font-size: 0.24rem;
      padding: 0.06rem 0.2rem;
      border-radius: 1rem;
      border: 1px solid #c3ab87;
    }
  }
}
</style>