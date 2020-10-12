<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar
        title="广播"
        left-text
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="@/assets/images/icon/index/mai.png" alt="">
        </template>
      </van-nav-bar>
    </div>

    <div class="center">
      <div class="warp">
        <img src="@/assets/images/index/banner4.jpg" />
      </div>
    </div>

    <div class="footer">
        <van-notice-bar
        background="transparent"
        color="#fff"
        text="推荐-FM9.3广州东音乐之声  推荐-FM9.3广州东音乐之声"
      />
      <div class="moudules">
        <img src="@/assets/images/icon/index/circle.png" alt="">
        <img src="@/assets/images/icon/index/prev.png" alt="">
        <img class="play" src="@/assets/images/icon/index/play.png" alt="">
        <img src="@/assets/images/icon/index/next.png" alt="">
        <img src="@/assets/images/icon/index/long.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
#top .van-nav-bar /deep/ *{color: #fff;}
#top .van-nav-bar /deep/ img{height: 0.35rem;}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #000;
  height: 100vh;
  /deep/ .van-nav-bar {
    background: transparent;
  }
  .van-hairline--bottom::after {
    border: none;
  }
  .van-notice-bar{
    padding: 0 .45rem;
  }
  /deep/ .van-nav-bar .van-icon,
  /deep/ .van-nav-bar__title,
  /deep/ .van-nav-bar__text {
    color: #fff;
  }
  background-color: #333; /* 浏览器不支持时显示 */
  background-image: linear-gradient(#54545c, #18191e);
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    .warp {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 300px;
      background: #333;
      border-radius: 100%;
    }
    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      animation: rotate 10s infinite linear;
    }
  }
  .footer{
    padding: .5rem 0;
  }
  .moudules{
    margin-top: 0.3rem;
    padding: 0 .45rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
      height: 0.4rem;
    }
    .play{
      height: 1rem;
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>