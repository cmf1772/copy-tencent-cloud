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
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/more2.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <!-- 可用积分 -->
      <div>

      
      <div class="price">
        <p class="tip">可用环保积分</p>
        <span class="num">500.65</span>
      </div>
      </div>

      <!-- 功能 -->
      <div class="inavs-warp">
        <ul class="inavs">
          <li>
            <router-link to="/dynamic/follow">
             <img src="@/assets/images/serve/recovery/recover/add.png" />
              <p>充值</p>
            </router-link>
          </li>
          <li>
            <router-link to="/dynamic">
              <img src="@/assets/images/serve/recovery/recover/zhuanzhang.png" />
              <p>转账</p>
            </router-link>
          </li>
          <li>
            <router-link to="/problem">
               <img src="@/assets/images/serve/recovery/recover/tixian.png" />
              <p>提现</p>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- 选择时间 -->
      <div class="date">
        <van-cell is-link>
          <template #title>
            <div class="title">
              <div>
                <span>本月</span>
              <van-icon name="play" size="12" />
              </div>
            </div>
          </template>
          <template #default>
            <div class="amount">
              <span>收入￥7038</span>
              <span>支出￥3668.6</span>
            </div>
          </template>
        </van-cell>
      </div>

      <!-- 收入明细 -->
      <div class="detailed">
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/serve/recovery/recover/huishou.png" />
              <div class="from">
                <span>上门回收</span>
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
              <img src="@/assets/images/serve/recovery/recover/wuping.png" />
              <div class="from">
                <span>物品转卖</span>
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
              <img src="@/assets/images/serve/recovery/recover/wuping.png" />
              <div class="from">
                <span>物品转卖</span>
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
              <img src="@/assets/images/serve/recovery/recover/huishou.png" />
              <div class="from">
                <span>上门回收</span>
                <span class="time">6-20 13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">+15</span>
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
     this.$router.go(-1)
    },
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.container {
  >div:not(.date){
    padding: 0 .45rem;
  }

  // 可用积分
  
  .price {
    border-radius: 2px;
    // background: linear-gradient(to right, #ccc, #232);
    background: url(../../../../assets/images/icon/serve/recovery/bg.png) no-repeat;
    background-size: 120% 130%;
    overflow: hidden;
    padding: 0.5rem 0.4rem;
    background-position: center center;
    color: #c3ab87;
    margin-top: 0.3rem;
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

  .inavs-warp {
    padding: 0.2rem;
    .inavs {
      text-align: center;
      margin: 0 auto;
      border-radius: 0.1rem;
      display: flex;
      justify-content: space-between;
      padding: 0.6rem 0.7rem;
      li {
        display: inline-block;
        text-align: center;
      }
      li img {
        width: 0.7rem;
        height: 0.7rem;
      }
      li p {
        font-size: 0.24rem;
        color: #777;
      }
    }
  }

  //间隔时间
  .date {
    .title {
      display: inline-block;
      background: #fff;
      padding: 0.05rem 0.3rem;
      border-radius: 30px;
      >div{
        display: flex;
        align-items: center;
      }
      span {
        margin: 0;
        font-size: .24rem;
      }
    }
    .van-cell {
      background: #f7f7f7;
      align-items: center;
      padding:.2rem 0.45rem;
    }
    .amount {
      display: flex;
      flex-direction: column;
      span {
        display: inline-block;
        line-height: 0.24rem;
        margin: .05rem 0;
      }
    }
  }

  .detailed {
    .van-cell {
      padding: 0.4rem 0.2rem;
      align-items: center;
    }
    .left {
      display: flex;
      align-items: center;
      img{
        border-radius: 1rem;
      }
    }
    .change {
      font-size: 0.39rem;
      color: #c3ab87;
      font-weight: bold;
    }
    .from {
      margin-left: 0.45rem;
      display: flex;
      flex-direction: column;
      span {
        font-size: 0.27rem;
        font-weight: 400;
      }
      .time {
        line-height: 0.32rem;
        color: #9C9C9C;
        font-size: 0.24rem;
        font-weight: 100;
        letter-spacing: 0.02rem;
      }
    }
  }
}
</style>