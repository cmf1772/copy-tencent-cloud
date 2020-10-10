<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow right-text="按钮" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
           <img src="@/assets/images/icon/index/arrow_white.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/fenxiang1.png" style="width:.4rem;height:auto" />
           <img src="@/assets/images/icon/index/star2.png" style="margin-left:.5rem" />
           <img src="@/assets/images/icon/index/more_white.png" style="margin-left:.5rem" />
           <img src="@/assets/images/icon/index/speak_white.png" style="margin-left:.5rem" />
        </template>
      </van-nav-bar>
    </div>
    <div class="banner-d">
      <swipers :option="banner.swiperOption" :list="banner.bannerList"></swipers>
    </div>

    <div class="container">
      <!-- 标题 -->
      <div class="title">
        <span class="mode">整租</span>
        <span class="name">正大宝龙精装修三室一厅出租三室一厅出租</span>
      </div>
      <div class="time">
        <span>更新 ： 2020-06-08</span>
        <span>浏览 ： 60人</span>
      </div>

      <!-- 方式 面积 -->
      <div class="mode-b">
        <div>
          <p>2500/月</p>
          <span>押一付三</span>
        </div>
        <div>
          <p>三室一厅一卫</p>
          <span>房型</span>
        </div>
        <div>
          <p>135平米</p>
          <span>面积</span>
        </div>
      </div>

      <!-- 简洁 -->
      <div class="btn-l">
        <div>配套齐全</div>
        <div>精装修</div>
      </div>

      <!-- 介绍 -->
      <div class="adv-list">
        <div>
          <p>装修</p>
          <span>精装修</span>
        </div>
        <div>
          <p>朝向</p>
          <span>南北</span>
        </div>
        <div>
          <p>类型</p>
          <span>普通住宅</span>
        </div>
        <div>
          <p>楼层</p>
          <span>11F/28F</span>
        </div>
      </div>

      <!-- 地图介绍 -->
      <div class="map">
        <div class="m-title">
          <div class="m-name">小区·正大宝龙（二期）</div>
          <van-icon name="arrow" color="#777" size=".32rem" />
        </div>
        <div class="tip">本小区本户型租金参考价2000-2800元</div>

        <div class="map-view">
          <img src="@/assets/images/icon/serve/house/1589886826(1).png" />
        </div>
      </div>

      <!-- 管家 -->
      <div class="housekeeper">
        <div class="h-content">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <div class="center">
            <div class="c-top">
              <div class="left">
                <span class="name">张茉茉</span>
                <span class="compony">北京链家地产经纪有限公司</span>
              </div>
              <van-icon name="arrow" size=".32rem" color="#999" />
            </div>
            <div class="foot">
              <div>
                <van-icon name="friends" color="#c3ab87" size=".26rem" />
                <span>营业执照</span>
              </div>
              <div>
                <van-icon name="card" color="#c3ab87" size=".26rem" />
                <span>从业信息卡</span>
              </div>
            </div>
          </div>
        </div>

        <div class="star">
          <div class="l-star">
            <span class="fraction">4.0</span>
            <van-rate
              v-model="value"
              size=".24rem"
              color="#c3ab87"
              disabled
              disabled-color="#c3ab87"
            />
          </div>
          <div class="keeper-adv">
            <div>
              <p>较快</p>
              <span>微聊回复</span>
            </div>
            <div>
              <p>较好</p>
              <span>房源质量</span>
            </div>
            <div>
              <p>较好</p>
              <span>用户口碑</span>
            </div>
          </div>
        </div>

        <div class="appointment">
          <p>未收到过预约看房</p>
          <span>经纪人未收到过预约看房，赶紧预约起来吧！</span>
        </div>
      </div>

      <!-- 公司简介 -->
      <div class="compony-v">
        <div class="title">公司简介</div>
        <div class="content-v">
          <p>因云鸟配送集团业务扩张，现急需合作司机 承包经营X东、X桔单车、X拜单车等公司以及全国各城周边100公里的货物运输。</p>
          <p>因云鸟配送集团业务扩张，现急需合作司机 承包经营X东、X桔单车、X拜单车等公司以及全国各城周边100公里的货物运输。</p>
        </div>
      </div>
    </div>
    <div class="fixed">
      <div class="left">
        <img src="@/assets/images/icon/serve/house/date.png" style="width:.44rem" alt="">
      </div>
      <div class="right">
        <div>在线聊</div>
        <div>打电话</div>
      </div>
    </div>
    <div class="release" @click="release">
      <img src="@/assets/images/icon/serve/house/question.png" alt="">
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
      value: 4,
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
      },
      list: [
        {
          src: require("@/assets/images/index/banner1.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        },
        {
          src: require("@/assets/images/index/banner3.jpg")
        }
      ]
    };
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
//修改框架 样式 权重不够 所以嵌套深
.main {
  #top {
    position: relative;
    z-index: 9;
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
  }
}
.banner-d {
  .banner {
    padding: 0;
    width: 100vw;
    /deep/ img {
      width: 100vw;
      height: 7.53rem;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.container {
  margin-top:6.93rem;
  padding: 0 0.45rem;
  padding-bottom: 1.5rem;
  .title {
    font-size: 0.48rem;
    .mode {
      margin-right: 0.3rem;
      min-width: 1rem;
      position: relative;
      font-weight: 600;
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 80%;

        right: -0.2rem;
        top: 50%;
        transform: translate(0, -50%);
        background: #777;
      }
    }
  }
  .time {
    padding: 0.3rem 0;
    font-size: 0.2rem;
    color: #999;
    span {
      margin-right: 0.3rem;
    }
    span:first-child {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 80%;
        right: -0.15rem;
        background: #ddd;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .mode-b {
    padding: 0.4rem 0;
    border: 1px solid #efefef;
    border-left: none;
    border-right: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    div:not(:last-child) {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        right: 0;
        background: #efefef;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    p {
      font-size: 0.3rem;
      color: #c3ab87;
    }
    span {
      font-size: 0.24rem;
      display: block;
      margin-top: 0.1rem;
      color: #777;
    }
  }

  .btn-l {
    display: flex;
    padding: 0.4rem 0;
    border-bottom: 1px solid #efefef;
    div {
      font-size: 0.26rem;
      padding: 0.1rem 0.4rem;
      border-radius: 1rem;
      background: #f7f7f7;
      margin-right: 0.2rem;
    }
  }

  .adv-list {
    padding: 0.4rem 0;
    display: grid;
    border-bottom: 1px solid #efefef;
    grid-template-columns: repeat(2, 1fr);
    div {
      display: flex;
      align-items: center;
      padding: 0.1rem 0;
      p,
      span {
        font-size: 0.3rem;
      }
      p {
        color: #777;
        margin-right: 0.2rem;
      }
    }
  }

  .map {
    padding: 0.4rem 0;
    border-bottom: 1px solid #efefef;
    .m-title {
      display: flex;
      font-size: 0.32rem;
      justify-content: space-between;
      align-items: center;
      .m-name {
        margin-top: 0.3rem;
        font-size: .42rem;
        font-weight: 600;
      }
    }
    .tip {
      font-size: 0.24rem;
      color: #999;
      padding: 0.2rem 0;
    }
    .map-view {
      margin-top: 0.1rem;
      img {
        height: 3.75rem;
        width: 100%;
        border-radius: 0.03rem;
      }
    }
  }
  .housekeeper {
    padding: 0.4rem 0;
    margin-top: 0.3rem;
    border-bottom: 1px solid #efefef;
    .h-content {
      display: flex;
      .icon {
        img {
          width: 1.18rem;
          height: 1.18rem;
        }
      }
      .center {
        padding-left: 0.2rem;
        flex: 1;
        .c-top {
          display: flex;
          justify-content: space-between;
          .left {
            display: flex;
            flex-direction: column;
            .name {
              font-size: 0.3rem;
              font-weight: 400;
            }
            .compony {
              font-size: 0.24rem;
              color: #999;
            }
          }
        }
        .foot {
          display: flex;
          margin-top: 0.1rem;
          font-size: 0.2rem;
          div {
            color: #c3ab87;
            display: flex;
            align-items: center;
            border-radius: 1rem;
            padding: 0 0.05rem;
            margin-right: 0.1rem;
            border: 1px solid #c3ab87;
          }
        }
      }
    }

    .star {
      display: flex;
      padding: 0.6rem 0;
      align-items: flex-end;
      .l-star {
        display: flex;
        flex-direction: column;
        align-items: center;
        .fraction {
          font-size: 0.45rem;
        }
      }
      .keeper-adv {
        padding-left: 0.2rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        flex: 1;
        text-align: center;
        div:not(:last-child) {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 1px;
            height: 100%;
            background: #efefef;
            right: 0;
            top: 50%;
            transform: translate(0, -50%);
          }
        }
        p {
          color: #c3ab87;
          font-size: 0.3rem;
        }
        span {
          font-size: 0.24rem;
          color: #999;
          margin-top: 0.1rem;
          display: block;
        }
      }
    }

    .appointment {
      padding: 0.2rem 0 0 0;
      p {
        font-size: 0.3rem;
      }
      span {
        font-size: 0.24rem;
        color: #999;
        display: block;
        padding-top: 0.1rem;
      }
    }
  }
  .compony-v {
    padding: 0.4rem 0;
    .title {
      margin-top: 0.4rem;
      font-size: 0.42rem;
      font-weight: bold;
    }
    .content-v {
      padding: 0.4rem 0 0 0;
      p {
        font-size: 0.27rem;
        line-height: 0.38rem;
        letter-spacing: .05rem;
      }
      p:not(:last-child) {
        margin-bottom: 0.2rem;
      }
    }
  }
}
// 固定
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  font-size: 0.24rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem .45rem;
  box-shadow: 0 -.1rem .1rem .01rem #f0f0f0;
  background: #fff;
  .left {
    .van-icon {
      margin-right: 0.2rem;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    div {
     width: 2.1rem;
     height: 0.87rem;
     display: flex;
     align-items: center;
     justify-content: center;
     font-size: .3rem;
    }
    div:first-child {
      border-radius: 1rem 0 0 1rem;
      border: 1px solid #eee;
    }
    div:last-child {
      border-radius: 0 1rem 1rem 0;
      background: #c3ab87;
      color: #fff;
    }
  }
}
.release {
  position: fixed;
  right: 0.3rem;
  bottom: 1.6rem;
  font-size: 0.24rem;
  text-align: center;
  width: 1.8rem;
  height: 1.8rem;
  img{
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>