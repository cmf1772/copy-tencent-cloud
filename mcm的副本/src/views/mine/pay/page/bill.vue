<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar
        title="我的收益"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="@/assets/images/icon/index/more.png" />
        </template>
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="mode">
        全部交易类型
        <van-icon name="play" size="12" />
      </div>
      <!-- 选择时间 -->
      <div class="date">
        <van-cell is-link>
          <template #title>
            <div class="title">
              <span>2020年5月</span>
              <van-icon name="play" size="12" />
            </div>
          </template>
          <template #default>
            <div class="amount">
              <span>收入:￥7038</span>
              <span>支出:￥3668.6</span>
            </div>
          </template>
        </van-cell>
      </div>

      <!-- 收入明细 -->
      <div class="detailed">
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/icon/mine/pay/pays.png" />
              <div class="from">
                <span>零钱提现-微信</span>
                <span class="time">6-20 13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">+15</span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/icon/mine/pay/card.png" />
              <div class="from">
                <span>零钱提现-交通银行 (0523)dsdadsadsadsadsa.</span>
                <span class="time">6-20 13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">+15</span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/icon/mine/pay/alis.png" />
              <div class="from">
                <span>零钱提现-支付宝</span>
                <span class="time">6-20 13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">+15</span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/index/banner1.jpg" />
              <div class="from">
                <span>转账-转给默默大师</span>
                <span class="time">6-20 13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">+15</span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/index/banner1.jpg" />
              <div class="from">
                <span>转账-转给默默大师</span>
                <span class="time">6-20 13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="reduce">-15</span>
          </template>
        </van-cell>
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
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.container {
  .mode {
    padding: 0.2rem 0.45rem;
    font-size: 0.28rem;
    .van-icon {
      transform: rotate(90deg);
      margin-left: 0.05rem;
    }
  }
  //间隔时间
  .date {
    padding: 0.2rem 0.45rem;
    background: #f7f7f7;
    .title {
      display: inline-block;
      background: #fff;
      padding: 0.05rem 0.3rem;
      border-radius: 30px;
      font-size: 0.24rem;
      font-family: Microsoft YaHei;
      letter-spacing: 0.05rem;
      span {
        margin: 0;
      }
      .van-icon {
        transform: rotate(90deg);
      }
    }
    .van-cell {
      background: #f7f7f7;
      align-items: center;
      padding: 0;
    }
    .amount {
      display: flex;
      flex-direction: column;
      span {
        display: inline-block;
        line-height: 0.36rem;
        margin-right: 0.05rem;
        font-size: 0.24rem;
      }
    }
  }

  .detailed {
    padding-top: 0.3rem;
    .van-cell {
      padding: 0.4rem 0.45rem;
      align-items: center;
      /deep/ .van-cell__value{
        flex: none;
        align-self: flex-end;
      }
    }
    .left {
      display: flex;
      align-items: center;
      img {
        min-width: 0.83rem;
        width: 0.83rem;
        min-height: 0.83rem;
        height: 0.83rem;
        border-radius: 1rem;
        margin-right: 0.4rem;
      }
    }
    .change {
      font-size: 0.39rem;
      color: #c3ab87;
    }
    .reduce {
      font-size: 0.39rem;
      color: #000;
    }
    .from {
      display: flex;
      flex-direction: column;
      
      span {
        font-size: 0.27rem;
        font-weight: 600;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .time {
        line-height: 0.32rem;
        color: #999;
        font-size: 0.24rem;
        font-weight: 400;
        letter-spacing: 0.02rem;
      }
    }
  }
}
</style>