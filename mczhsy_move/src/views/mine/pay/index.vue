<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar
        title="支付"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/more.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <!-- 可用积分 -->
      <div class="price-view">
        <div class="price">
          <p class="tip">可用余额（元）</p>
          <span class="num">5990.65</span>
        </div>
        <div class="guarantee">
          资金安全保障中
          <van-icon name="arrow" color="#fff" size=".24rem" />
        </div>
      </div>

      <!-- 功能 -->
      <div class="inavs-warp">
        <ul class="inavs">
          <li>
            <router-link to="/mine/pay/recharge">
              <img src="@/assets/images/icon/mine/pay/add.png" />
              <p>充值</p>
            </router-link>
          </li>
          <li>
            <router-link to="/mine/pay/accounts">
              <img src="@/assets/images/icon/mine/pay/zhuan.png" />
              <p>转账</p>
            </router-link>
          </li>
          <li>
            <router-link to="/mine/pay/withdrawal">
              <img src="@/assets/images/icon/mine/pay/tixian.png" />
              <p>提现</p>
            </router-link>
          </li>
        </ul>
      </div>

      <div class="fn-list">
        <ul>
          <li>
            <van-cell is-link @click="myFn('/mine/pay/bill')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/pay/img1.png" />
                  <span class="custom-title">账单</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link  @click="myFn('/mine/pay/assets')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/pay/img2.png" />
                  <span class="custom-title">资产</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link>
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/pay/img3.png" />
                  <span class="custom-title">余额</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link @click="myFn('/mine/pay/authentication')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/pay/img4.png" />
                  <span class="custom-title">认证</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link @click="myFn('/mine/pay/setting')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/pay/img5.png" />
                  <span class="custom-title">设置</span>
                </div>
              </template>
            </van-cell>
          </li>
          
          <li>
            <van-cell is-link @click="myFn('/mine/pay/manage')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/pay/img1.png" />
                  <span class="custom-title">管理</span>
                </div>
              </template>
            </van-cell>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { value: "" };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    myFn(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
    padding:.2rem 0.45rem;

  // 可用余额
  .price-view {
    position: relative;
    .guarantee {
      position: absolute;
      right: 0rem;
      top: 50%;
      transform: translate(0, -50%);
      font-size: 0.2rem;
      background: #c3ab87;
      display: flex;
      align-items: center;
      color: #fff;
      border-radius: 1rem 0 0 1rem;
      padding: 0.1rem 0.2rem;
    }
    .price {
      border-radius: .05rem;
      background:url(../../../assets/images/icon/mine/pay/bg.png);
      background-size: 110% 110%;
      background-position: center center;
      padding: 0.4rem 0.4rem;

      color: #c3ab87;
      .num {
        font-size: 0.66rem;
        font-weight: 600;
        margin: 0.1rem 0 0.4rem 0;
        display: inline-block;
      }
      .tip {
        font-size: 0.27rem;
      }
    }
  }
  .fn-list {
    li {
      padding: 0.1rem 0;
      /deep/ .van-cell{
        padding-left: 0;
        padding-right: 0;
      }
      .item {
        display: flex;
        align-items: flex-start;
        img {
          width: 0.6rem;
          height: 0.6rem;
        }
        .custom-title {
          margin-left: 0.25rem;
          font-size: .3rem;
        }
      }
    }
  }
  .inavs-warp {
    padding: 0.2rem;
    .inavs {
      text-align: center;
      margin: 0 auto;
      border-radius: 0.1rem;
      display: flex;
      justify-content: space-between;
      padding: 0.4rem 0.7rem;
      li {
        display: inline-block;
        text-align: center;
      }
      li img {
        width: 0.42rem;
        height: 0.42rem;
      }
      li p {
        font-size: 0.24rem;
        color: #777;
      }
    }
  }
}
</style>