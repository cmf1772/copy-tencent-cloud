<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-text left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #title>
          <div class="center">
            <van-icon name="music" color="#fff" size=".32rem" />
            <span>选择音乐</span>
          </div>
        </template>
       <template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="fn-v">
        <ul>
          <li>
            <img src="@/assets/images/icon/index/rotate.png" alt=""> 
            <span class="text">翻转</span>
          </li>
          <li>
             <img src="@/assets/images/icon/index/off.png" alt=""> 
            <span class="text">速度关</span>
          </li>
          <li>
             <img src="@/assets/images/icon/index/eyemo.png" alt=""> 
            <span class="text">滤镜</span>
          </li>
          <li>
             <img src="@/assets/images/icon/index/cool.png" alt=""> 
            <span class="text">美化</span>
          </li>
          <li>
             <img src="@/assets/images/icon/index/time.png" alt=""> 
            <span class="text">倒计时</span>
          </li>
        </ul>
      </div>

      <div class="foot">
        <div class="btn-list">
          <div class="small-img">
            <img src="@/assets/images/magazine/index/food/16B1B384664.jpg" alt />
            <span>道具</span>
          </div>
          <div class="center-btn"></div>
          <div class="small-img">
            <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" alt />
            <span>上传</span>
          </div>
        </div>

        <div class="fn-text-list">
          <ul>
            <li>拍照</li>
            <li>拍60秒</li>
            <li class="active">拍15秒</li>
            <li>影集</li>
            <li>开直播</li>
          </ul>
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
    onClickRight() {
      this.$router.push({
        path: "/magazine/video/releasevideo"
      });
    }
  }
};
</script>

<style lang="less" scoped>
//修改框架 样式 权重不够 所以嵌套深
.main {
  max-width: 750px;
  position: relative;
  height: 100vh;
  #top {
    .van-nav-bar {
      /deep/ .van-nav-bar__left {
        i {
          color: #fff;
        }
      }
      /deep/ .van-nav-bar__right {
        i {
          color: #fff;
        }
      }
      &::after {
        border: none;
      }
      background-color: transparent;
    }
    .center {
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      color: #fff;
      justify-content: center;
      span {
        margin-left: 0.1rem;
      }
    }
  }
}
// 主体
.container {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: url("../../../assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(49px + 0.4rem);
  .fn-v {
    position: absolute;
    top: 0.2rem;
    right: 0.32rem;
    ul {
      li {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin: 0 0 0.4rem 0;
        span {
          font-size: 0.22rem;
          color: #fff;
        }
        img {
          width: 0.53rem;
        }
      }
    }
  }
  .foot {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: 0.3rem;
    .btn-list {
      width: 80%;
      margin: 0 auto;
      padding-bottom: 0.3rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .small-img {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          font-size: .22rem;
          color: #fff;
          margin-top: 0.05rem;
        }
        img {
          width: 0.6rem;
          height: 0.6rem;
        }
      }
      .center-btn{
        width:1.2rem;
        height: 1.2rem;
        background: #fff;
        border-radius: 1.2rem;
        position: relative;
        &::after{
          position: absolute;
          width: 1.4rem;
          height: 1.4rem;
          background: rgba(228, 228, 228, 0.548);
          content:'';
          display: block;
          border-radius: 1.4rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
        }
      }
    }
    .fn-text-list{
      margin: .3rem 0;
      display: flex;
      justify-content: center;
      ul{
        width: 80%;
        display: flex;
        font-size: .29rem;
        justify-content: space-around;
        color: #DCDCDC;
        position: relative;
        &::after{
          position: absolute;
          width: 0.15rem;
          height: 0.15rem;
          content: '';
          left: 50%;
          bottom: -.25rem;
          background: #fff;
          transform: translate(-50%);
          border-radius: .15rem;
        }
        .active{
          color: #fff;
        }
      }
    }
  }
}
</style>