<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="环保积分明细"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/search.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <!-- //标题分类 -->
      <div class="title">
        <span>分类</span>
        <van-icon name="play" size="12" />
      </div>


      <!-- 选择时间 -->
      <div class="date">
        <van-cell is-link>
          <template #title>
            <div class="title">
              <span>本月</span>
              <van-icon name="play" size="12" />
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
              <img src="@/assets/images/icon/serve/recovery/ss14.png" alt="">
              <div class="from">
                <span>上门回收</span>
                <span class="time">6-20 13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">
              +15
            </span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/icon/serve/recovery/ss15.png" alt="">
              <div class="from">
                <span>积分兑换</span>
                <span class="time">6-20 13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">
              +15
            </span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/icon/serve/recovery/ss16.png" alt="">
              <div class="from">
                <span>扫码投递</span>
                <span class="time">6-20   13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">
              +15
            </span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <img src="@/assets/images/icon/serve/recovery/ss17.png" alt="">
              <div class="from">
                <span>扫码投递</span>
                <span class="time">6-20   13:25</span>
              </div>
            </div>
          </template>
          <template #default>
            <span class="change">
              +15
            </span>
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
    onClickRight() {
      this.$router.push({
        path: "/serve/recovery/detailed"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  .title {
    display: flex;
    padding: 0.2rem 0;
    span {
      font-size: 0.3rem;
      margin-left: 0.45rem;
    }
    i {
      transform: rotate(90deg);
    }
  }

  //间隔时间
  .date{
    margin-bottom: 0.57rem;
    .title{
      display: inline-block;
      background: #fff;
      padding: .05rem .2rem;
      border-radius: 30px;
      span{
        margin: 0;
        font-size: .24rem;
      }
      
    }
    .van-cell{
      background: #f7f7f7;
      align-items: center;
      padding: .2rem .45rem;
    }
    .amount{
      display: flex;
      flex-direction: column;
      span{
        display: inline-block;
        line-height: .24rem;
        margin: .05rem 0;
      }
    }
  }

  .detailed{
    img{
      width: 0.83rem;
      height: 0.83rem;
      margin-right: 0.44rem;
    }
    .van-cell{
      padding: .2rem .45rem;
      align-items: center;
    }
    .left{
      display: flex;
      align-items: center;
    }
    .change{
      font-size: .39rem;
      color: #C3AB87;
      font-weight: bold;
    }
    .from{
      margin-left: 0.2rem;
      display: flex;
      flex-direction: column;
      span{
        font-size: .27rem;
        font-weight: 400;
      }
      .time{
        line-height: .32rem;
        color:#9c9c9c;
        font-size: .24rem;
        font-weight: 400;
      letter-spacing: .02rem;
      }
    }
  }
}
</style>