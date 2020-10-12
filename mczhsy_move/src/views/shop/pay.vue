<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="支付订单" left-arrow @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="tip">
        <div class="shop-name">
          <div class="title">华莱士·拳击汉堡（红丰店）外卖订单</div>
          <van-icon name="arrow" size=".32rem" />
        </div>
        <div class="price">
          ￥
          <span>{{amount}}</span>
        </div>
        <div class="time">
          支付剩余时间
          <span>14:23</span>
        </div>
      </div>
      <div class="pay-list">
        <van-radio-group v-model="radio">
          <ul>
            <li>
              <div class="left">
                <img src="@/assets/images/icon/shop/index/outfood/yue.png" alt />
                <span>余额支付</span>
              </div>
              <div class="right">
                <van-radio name="1" icon-size=".24rem" checked-color="#C3AB87"></van-radio>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="@/assets/images/icon/shop/index/outfood/vip.png" alt />
                <span>会员支付</span>
              </div>
              <div class="right">
                <van-radio name="2" icon-size=".24rem" checked-color="#C3AB87"></van-radio>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="@/assets/images/icon/shop/index/outfood/card.png" alt />
                <span>通证支付</span>
              </div>
              <div class="right">
                <van-radio name="3" icon-size=".24rem" checked-color="#C3AB87"></van-radio>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="@/assets/images/icon/shop/index/outfood/wechat.png" alt />
                <span>微信支付</span>
              </div>
              <div class="right">
                <van-radio name="4" icon-size=".24rem" checked-color="#C3AB87"></van-radio>
              </div>
            </li>
            <li>
              <div class="left">
                <img src="@/assets/images/icon/shop/index/outfood/ali.png" alt />
                <span>支付宝支付</span>
              </div>
              <div class="right">
                <van-radio name="5" icon-size=".24rem" checked-color="#C3AB87"></van-radio>
              </div>
            </li>
          </ul>
        </van-radio-group>
      </div>
      <div class="pay-btn">确认支付</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      item:{},
      amount:null
    };
  },
  created(){
    // this.item = this.$route.params.item ? JSON.stringify(this.$route.params.item): {},
    console.log(this.$route.params.amount);
    this.amount = !isNaN(this.$route.params.amount) ? this.$route.params.amount : null;
    this.item = this.$route.params.item ? this.$route.params.item : null;
    console.log(this.item);
    //  Object.keys(this.item).length == 0 || 
    if(this.amount == null){
      this.$toast.fail("未知错误，请稍后再试");
      this.$router.go(-1)
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .tip {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.24rem;
    padding: 0.4rem 0;
    margin-bottom: 0.2rem;
    .shop-name {
      display: flex;
      align-items: center;
      color: #777777;
      .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 4.4rem;
        font-size: 0.3rem;
      }
    }
    .price {
      margin: 0.3rem 0;
      font-size: 0.44rem;
      span {
        font-size: 0.66rem;
        font-weight: 600;
      }
    }
    .time {
      color: #777777;
    }
  }
  .pay-list {
    li {
      display: flex;
      height: 1.2rem;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        img {
          max-width: 0.5rem;
        }
        span {
          font-size: 0.3rem;
          margin-left: 0.58rem;
        }
      }
      .right {
        /deep/ .van-radio {
          padding: 0.3rem 0;
        }
      }
    }
  }
  .pay-btn {
    width: 2rem;
    font-size: 0.3rem;
    text-align: center;
    background: #c3ab87;
    margin: 0 auto;
    margin-top: 0.4rem;
    width: 3.93rem;
    height: 0.87rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    color: #fff;
  }
}
</style>