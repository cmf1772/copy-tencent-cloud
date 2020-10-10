<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="音频发布"
        left-text
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="@/assets/images/icon/index/setting.png" alt="">
        </template>
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 主体 -->
    <div class="container">
      <!-- 中间发布内容 -->
      <div class="center">
        <div class="bg"></div>
        <div class="btn">
          <van-icon name="plus" />
          <span>添加文稿</span>
        </div>
        <div>
          <span class="tip">配上文稿，录起来更轻松</span>
        </div>
      </div>
      <div class="fixed">
        <ul class="inavs">
          <li>
            <router-link to>
              <img src="@/assets/images/magazine/icon1.png" />
              <p>音效</p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="@/assets/images/magazine/icon2.png" />
              <p>配乐</p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="@/assets/images/magazine/icon4.png" />
              
              <p>美化</p>
            </router-link>
          </li>
          <li>
            <router-link to>
              <img src="@/assets/images/magazine/icon3.png" />
              <p>特效</p>
            </router-link>
          </li>
        </ul>
        <div class="btn-view">
          <div class="time">00:00/90:00</div>
          <div class="center-btn">
            <div class="icon"></div>
          </div>
          <span>开始录音</span>
        </div>
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
.top /deep/ img{ width: 0.35rem;}
.fixed {
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 750px;
  margin: 0 auto;
  .btn-view {
    padding: 0.2rem .45rem;
    display: flex;
    border-top: 1px solid #f9f9f9;
    flex-direction: column;
    .time {
      margin-left: auto;
      font-size: 0.24rem;
    }
    .center-btn {
      display: flex;
      justify-content: center;
      .icon {
        height: 1.7rem;
        width: 1.7rem;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        border-radius: 50%;
        box-shadow: 0 0 10px 1px #ccc;
        background: url("../../../../assets/images/magazine/mkf.png") no-repeat;
        background-position: center center;
      }
    }
    span {
      font-size: 0.2rem;
      text-align: center;
      display: block;
      margin: 0.2rem 0;
      color: #2a2a2a;
    }
  }
  /*首页栏目入口*/
  .inavs {
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0.3rem .45rem;
  }
  .inavs li {
    display: inline-block;
    text-align: center;
    margin: 0 0.2rem;
  }
  .inavs li img {
    width: 0.6rem;
    height: 0.6rem;
  }
  .inavs li p {
    font-size: 0.21rem;
    color: #000;
  }
}
.center {
  height:55vh;
  max-height:  55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .bg {
    background: url("../../../../assets/images/magazine/bg.png") no-repeat;
    background-position: center center;
    width: 3rem;
    height: 1.7rem;
    margin-bottom: 0.2rem;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.17rem 0.85rem;
    font-size: 0.28rem;
    color: #9c9c9c;
    border: .02rem solid #F1F1F1;
  }
  .tip {
    font-size: 0.28rem;
    color: #9c9c9c;
    display: inline-block;
  }
}
</style>