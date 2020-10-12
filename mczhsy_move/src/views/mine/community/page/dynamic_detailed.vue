<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="动态详情" @click-left="onClickLeft"></van-nav-bar>
    </div>
    <div class="wrap">
      <div class="author">
        <div class="nick">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <div class="star">
            <span class="name">正龙</span>
            <div class="time">02-07 发布</div>
          </div>
        </div>
        <div class="more">
          <van-icon name="ellipsis" size=".32rem" />
        </div>
      </div>
      <div class="img-view">
        <swipers :list="banner.bannerList" :option="banner.option"></swipers>
        <div class="img-tip"><img src="@/assets/images/icon/mine/community/tipbg.png" /></div>
      </div>
      <div class="like">
        <div class="zan">
          <div class="icon-list">
            <div>
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div style="right:.2rem">
              <img src="@/assets/images/index/banner2.jpg" />
            </div>
            <div style="right:.4rem">
              <img src="@/assets/images/index/banner3.jpg" />
            </div>
          </div>
          <span>等64次赞</span>
        </div>
        <div class="btn-list">
          <div>
              <img src="@/assets/images/icon/mine/community/like.png" style="height:.48rem;"  />
              赞
            </div>
            <div>
              <img src="@/assets/images/icon/mine/community/talk.png" style="height:.48rem;" />
              评论
            </div>
            <div>
              <img src="@/assets/images/icon/mine/community/fenxiang.png" style="height:.42rem;"  />
              分享
            </div>
        </div>
      </div>
      <div class="speak">
        <div class="title">全部评论</div>
        <div class="nick">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <div class="star">
            <div class="top">
              <div class="user">
                <div class="name">正龙</div>
                <div class="time">02-21</div>
              </div>
              <div class="top-right">
                7
               <img src="@/assets/images/icon/ding.png" style="width:.3rem;margin-left:.1rem" alt />
              </div>
            </div>
            <div class="content">记录不一样的元宵节。记录不一样的元宵节记录。</div>
          </div>
        </div>
        <div class="nick">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <div class="star">
            <div class="top">
              <div class="user">
                <div class="name">正龙</div>
                <div class="time">02-21</div>
              </div>
              <div class="top-right">
                7
               <img src="@/assets/images/icon/ding.png" style="width:.3rem;margin-left:.1rem" alt />
              </div>
            </div>
            <div class="content">记录不一样的元宵节。记录不一样的元宵节记录。</div>
          </div>
        </div>

        <div class="s-tip">共368条评论</div>
      </div>
      <!-- 底部我要评论 -->
      <div class="fix-foot">
        <div class="input">喜欢就评论告诉TA~</div>
        <ul>
          <li>
            <p>
              <img src="@/assets/images/icon/fenxiang.png" style="height:.3rem;" alt />
            </p>
            <span>4</span>
          </li>
          <li>
            <p>
              <img src="@/assets/images/icon/speak.png" style="height:.3rem;" alt />
            </p>
            <span>4</span>
          </li>
          <li>
            <p>
              <img src="@/assets/images/icon/ding.png" style="height:.3rem;" alt />
            </p>
            <span>4</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import swipers from "@/components/swipers/swiper_component"; //大banner
export default {
  components: {
    swipers
  },
  data() {
    return {
      banner: {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination"
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          loop: true
        },
        bannerList: [
          require("@/assets/images/index/banner1.jpg"),
          require("@/assets/images/index/banner2.jpg"),
          require("@/assets/images/index/banner3.jpg"),
          require("@/assets/images/index/banner4.jpg")
        ]
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.wrap {
  padding: 0.2rem .45rem;
  padding-bottom: .8rem;
  //底部固定
  .fix-foot {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: #fff;
    display: flex;
    padding: 0.2rem .45rem;
    box-sizing: border-box;
    .input {
      width: 60%;
      text-align: center;
      font-size: 0.24rem;
      display: flex;
      color: #ccc;
      align-items: center;
      justify-content: center;
      border-radius: 58px;
      background: #f7f7f7;
    }
    ul {
      display: flex;
      justify-content: space-around;
      flex: 1;
      li {
        display: flex;
        flex-direction: column;
        font-size: 0.24rem;
        text-align: center;
        color: #9c9c9c;
        .van-icon {
          font-size: 0.32rem;
        }
      }
    }
  }
  .nick {
    display: flex;
    align-items: center;
    .name {
      margin-left: 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.28rem;
    }
    .icon {
      width: 0.73rem;
      height: 0.73rem;
      min-width: 0.73rem;
      display: flex;
      align-items: center;
      justify-content: center;
      // border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 作者
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0 0.4rem 0;
    .icon {
      width: 0.73rem;
      height: 0.73rem;
       min-width: 0.73rem;
      display: flex;
      align-items: center;
      justify-content: center;
      // border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nick {
      display: flex;
      align-items: center;
      .star {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 0.21rem;
        .time {
          font-size: 0.2rem;
          color: #777;
        }
      }
      .name {
        font-size: 0.32rem;
        font-weight: 600;
        margin: 0;
      }
    }
    .more {
      .van-icon {
        transform: rotate(90deg);
      }
    }
  }
  .speak {
    padding: 0.3rem 0;
    .s-tip{
      font-size: .2rem;
      display: flex;
      justify-content: center;
      color: #BCBCBC;
      margin: 0.2rem 0;
    }
    .title {
      font-size: 0.42rem;
      padding-bottom: 0.4rem;
      font-weight: 600;
    }
    .nick {
      align-items: flex-start;
      padding: .3rem 0;
    }
    .nick:not(:last-child) {
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #eee;
    }
    .nick:not(:first-child) {
      padding-top: 0.3rem;
    }
    .icon{
      width: 0.87rem;
      height: 0.87rem;
    }
    .star {
      display: flex;
      padding-left: 0.3rem;
      flex-direction: column;
      .content {
        font-size: 0.26rem;
        padding: 0.2rem 0;
      }
      .top {
        display: flex;
        height: 0.7rem;
        align-items: center;
        justify-content: space-between;
        .user {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .name {
            margin: 0;
            font-size: .32rem;
          }
          .time {
            font-size: 0.2rem;
            color: #777;
          }
        }
        .top-right {
          font-size: 0.26rem;
          display: flex;
          align-items: flex-end;
          color: #9c9c9c;
        }
      }
    }
  }
  .like {
    padding: 0.2rem 0;
    display: flex;
    justify-content: space-between;
    .zan {
      display: flex;
      align-items: center;
      span {
        font-size: 0.2rem;
        color: #777;
        margin-left: -0.3rem;
      }
      .icon-list {
        display: flex;
        div {
          position: relative;
          width: 0.48rem;
          height: 0.48rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          border: 1px solid #fff;
          img {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
          }
        }
      }
    }
    .btn-list {
      display: flex;
      align-items: center;
      div {
        display: flex;
        font-size: 0.22rem;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 0.5rem;
        padding-bottom: 0.1rem;
        height: .85rem;
        color: #777;
        flex-direction: column;
        margin-left: 0.3rem;
      }
    }
  }
  .img-view {
    margin: .2rem 0;
    position: relative;
    .img-tip {
      position: absolute;
      top: 0.2rem;
      left: 0.5rem;
      z-index: 9;
      img{
        width: 3rem;
      }
    }
    .banner {
      width: 100%;
      padding: 0;
    }
  }
}
</style>