<template>
  <div class="container">
    <div class="tips">
      4个直播
      <van-icon name="arrow-down" />
    </div>
    <div class="foot">
      <div class="left">
        <div class="commit">
          <div class="small-icon">
            <img src="@/assets/images/magazine/video/small-icon.png" alt />
          </div>
          <div class="right-text">
            <div class="small-title">萌宠家族必读</div>
            <div class="adress">
              <span>苏州市</span>
              <span>50.2w 人看过</span>
            </div>
          </div>
        </div>
        <div class="commit-text">@ 萌宠家族必读</div>
        <div class="collection">
          <span class="c-title">第六集</span>
          <span class="c-detailed">这个挑战真的很美</span>
          <span class="c-star">泼水节</span>
        </div>
        <div class="commit-text commit-text-2">@ 萌宠家族必读</div>
        <div class="l-foot">
          <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
        </div>
      </div>
      <div class="right">
        <div class="icon" @click="adminInfo">
          <img src="@/assets/images/magazine/dynamic/u=2466454120,4012831513&fm=26&gp=0.jpg" alt />
        </div>
        <ul>
          <li>
            <img src="@/assets/images/icon/index/heart.png" alt="">  
            <span class="num">1206</span>
          </li>
          <li>
            <img src="@/assets/images/icon/index/talk.png" alt="">  
            <span class="num">365</span>
          </li>
          <li>
            <img src="@/assets/images/icon/index/arrows.png" alt="">  
            <span class="num">39</span>
          </li>
        </ul>

        <div class="show-icon">
          <img src="@/assets/images/index/banner2.jpg" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    adminInfo(){
      this.$router.push({
        path: "/magazine/video/admin"
      })
    }
  }
};
</script>

<style lang="less" scoped>

// 主体
.container {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: url("../../../../assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(49px + 0.4rem);

  //直播提示
  .tips {
    font-size: 0.21rem;
    color: #efefef;
    background: rgba(0, 0, 0, 0.26);
    display: flex;
    align-items: center;
    padding: 0.05rem 0.2rem;
    border-radius: 1rem;
    .van-icon {
      margin-left: 0.02rem;
    }
  }

  // 底部
  .foot {
    margin-top: auto;
    display: flex;
    width: 100%;
    padding: 0.2rem 0.1rem;
    box-sizing: border-box;
    justify-content: space-between;


    //左边
    .left {
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      // 视频介绍
      .commit {
        display: flex;
        width: 3rem;
        padding: 0.05rem;
        border-radius: 0.03rem;
        background: rgba(0, 0, 0, 0.26);
        .small-icon {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          img {
            width: 0.3rem;
            height: 0.3rem;
          }
        }

        // 视频介绍右边文字
        .right-text {
          font-size: 0.24rem;
          margin-left: 0.05rem;
          color: #fff;
          .adress {
            font-size: 0.2rem;
            margin-top: 0.03rem;
            span {
              margin-right: 0.2rem;
              position: relative;
            }
            span:last-child::after {
              position: absolute;
              content: "";
              width: 0.02rem;
              height: 80%;
              background: #fff;
              left: -0.1rem;
              top: 50%;
              transform: translate(0, -50%);
            }
          }
        }
      }

      // //分类
      .commit-text {
        font-size: 0.30rem;
        font-weight: 600;
        margin: 0.1rem 0;
      }

      // 集数
      .collection {
        display: flex;
        font-size: 0.3rem;
        span {
          margin-right: 0.16rem;
          position: relative;
        }
        span:first-child::after {
          content: "";
          width: 0.01rem;
          height: 70%;
          position: absolute;
          right: -0.08rem;
          background: #fff;
          top: 50%;
          transform: translate(0, -50%);
        }
        span:last-child::before {
          content: "·";
          position: absolute;
          left: -0.08rem;
          font-size: 0.24rem;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }

      //分类2
      .commit-text-2 {
        margin-bottom: 0.2rem;
      }

      // 文字滚动
      .van-notice-bar{
        padding: 0;
        background: transparent;
        color: #fff;
      }
    }

    // 右边
    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      //头像
      .icon {
         width: 0.9rem;
          height: 0.9rem;
          border-radius: 1rem;
          border: 2px solid #fff;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        img {
          height: 100%;


        }
      }

      // 喜欢 评论 分享
      ul {
        margin: 0.3rem 0;
        li {
          justify-content: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          margin: 0.3rem 0;
          span {
            font-size: 0.26rem;
            color: #fff;
          }
          img{
            width: 0.7rem;
          }
        }
      }

      //视频旋转头像
      .show-icon {
        animation: retate 15s infinite linear;
        width: 0.94rem;
        height: 0.94rem;
        background: #363636;
        border-radius: 1rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 60%;
          height: 60%;
          border-radius: 1rem;
        }
      }
    }
  }
}

@keyframes retate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>