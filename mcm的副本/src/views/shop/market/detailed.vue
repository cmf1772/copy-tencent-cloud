<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow right-text="按钮" @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <div class="right-menu-top">
            <van-icon name="info-o" size=".32rem" />
          </div>
        </template>
        <template #left>
           <img src="@/assets/images/icon/index/arrow_white.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="banner-d">
      <swipers :option="banner.swiperOption" :list="banner.bannerList"></swipers>
    </div>

    <div class="container">
      <!-- 标题和价格 -->
      <p class="title">NOMI 我AI学习重力臂</p>
      <div class="price">
        <span class="p-num">￥193</span>
        <div class="j-num">
          <van-icon name="medal-o" />1390
        </div>
      </div>

      <!-- 用户评价 -->
      <div class="purchased">
        <div class="p-ciew" @click="dDetailed">
          <div class="t">
            <div class="l">
              <span class="txt"></span>
              <span class="name">NOMI</span>
            </div>
            <div class="r">
              <img src="@/assets/images/shop/shopkeeper.png" alt="" style="width:.8rem;margin-right:.2rem">
              <van-icon name="arrow" size=".32rem" />
            </div>
            
          </div>
          <div class="f">·快递 包邮</div>
        </div>
        <div class="p-ciew">
          <div class="t">
            <div class="l">
              <span class="txt">已购</span>
              <span class="name">重力臂套装 x1</span>
            </div>
            <van-icon name="arrow" size=".32rem" />
          </div>
        </div>
        <div class="speak">
          <span>用户评价 2</span>
          <van-icon name="arrow" size=".32rem" />
        </div>
      </div>

      <!-- 用户评价详情 -->
      <div class="item" v-for="(item,index) in 2" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">正龙</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          <div class="photos">
            <ul :style="`grid-template-columns: repeat(${list.length < 2 ? 1:3},1fr);`">
              <li v-for="(item,index) in list" :key="index">
                <img :src="item.src" :style="{'height':list.length == 1?'6.4rem':'2.1rem'}" />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <van-icon name="cluster-o" />4
              </span>
            </li>
            <li>
              <span>
                <van-icon name="good-job-o" />4
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 商品详情 -->
      <div class="value-v">
        <div class="box-1">
          <img src="@/assets/images/index/banner1.jpg" alt />
          <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</p>
        </div>
        <div class="box-2">
          <div class="title">关于 NIO Life</div>
          <img src="@/assets/images/index/banner2.jpg" alt />
          <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</p>
        </div>
      </div>
    </div>

    <div class="fixed">
      <div class="left">
        <img src="@/assets/images/icon/shop/index/listen1.png" alt="">
        <img src="@/assets/images/icon/shop/index/gouwuche.png" alt="">
        <img src="@/assets/images/icon/shop/index/star1.png" alt="">
      </div>
      <div class="right">
        <div>加入购物车</div>
        <div @click="pay">立即购买</div>
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
      },
      list: [
        {
          src: require("@/assets/images/shop/wechat1.jpg")
        },
        {
          src: require("@/assets/images/shop/wechat1.jpg")
        },
        {
          src: require("@/assets/images/shop/wechat1.jpg")
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    pay() {
      this.$router.push({
        path: "/shop/pay"
      });
    },
    dDetailed(){
      this.$router.push({
        path:'/shop/market/d_detailed'
      })
    }
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
  margin-top: calc(7.53rem - .49rem);
  padding: 0 0.45rem;
  padding-bottom: 1rem;
  .title {
    font-size: 0.48rem;
  }
  .price {
    display: flex;
    font-size: 0.36rem;
    margin: 0.1rem 0;
    .j-num {
      display: flex;
      margin-left: 0.2rem;
      align-items: center;
    }
  }
  .p-ciew {
    padding: 0.2rem 0;
    display: flex;
    flex-direction: column;
    .t {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .l {
      font-size: 0.26rem;
      margin-bottom: 0.1rem;
      
      .txt {
        color: #9c9c9c;
        margin-right: 0.2rem;
        font-size: .21rem;
      }
      .name{
        font-size: .3rem;
      }
      .txt:empty{
        margin-right: 0;
      }
    }
    .f {
      font-size: 0.21rem;
      color: #9c9c9c;
    }
  }
  .purchased {
    margin-bottom: 0.6rem;
    .speak {
      display: flex;
      justify-content: space-between;
      font-size: 0.3rem;
      padding: 0.2rem 0;
    }
  }
  .item {padding-bottom: 0.35rem;
  margin-bottom: 0.35rem;
  border-bottom: 1px solid #f1f1f1;
    // 作者
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.2rem 0 0.1rem 0;
      .icon {
        width: 0.73rem;
        height: 0.72rem;
        display: flex;
        align-items: center;
        justify-content: center;
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
          .star-name {
            font-size: 0.2rem;
            margin-top: 0.05rem;
            margin-left: 0.1rem;
            color: #999;
          }
        }
        .name {
          font-size: 0.32rem;
          margin-left: 0.21rem;
          font-weight: 600;
        }
      }
      .follow {
        background-color: #f8f5f0;
        color: #c3ab87;
        font-size: 0.24rem;
        width: 1.37rem;
        height: 0.63rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 33px;
      }
    }
    .value {
      font-size: 0.3rem;
      padding: 0.2rem 0;
      letter-spacing: .05rem;
    }
    .photos {
      width: 100%;
      padding: 0.2rem 0;
      ul {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: .15rem;
        li {
          img {
            width: 100%;
            border-radius: 0.05rem;
            overflow: hidden;
            height: 1.9rem;
          }
        }
      }
    }
    .footer {
      display: flex;
      padding-top: 0.1rem;
      font-size: 0.26rem;
      color: #999;
      .time {
        flex: 1;
        font-size: 0.24rem;
      }
      ul {
        width: 30%;
        display: flex;
        justify-content: space-around;
        span {
          display: flex;
          align-items: center;
        }
        .van-icon {
          font-size: 0.3rem;
          margin-right: 0.03rem;
        }
      }
    }
  }
  .value-v {
    .box-1,
    .box-2 {
      border-top: 1px solid #eeeeee;
      padding: 0.2rem 0;
      .title {
        color: #c3ab87;
        text-align: center;
        margin: 0.2rem 0;
      }
      img {
        width: 100%;
        height: 4rem;
      }
    }
    font-size: 0.24rem;
    line-height: 0.42rem;
    .box-1{
      border: none;
      padding-top: 0;
      img{
        height: 5.5rem;
        border-radius: .04rem;
      }
    }
    p {
      margin: 0.3rem 0;
      font-size: .27rem;
    }
  }
  .serve {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.26rem;
    padding: 0.3rem 0;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
  }
}
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
  background: #fff;
  box-shadow: 0 -.1rem .05rem .01rem #f7f7f7;
  .left {
    img{
      height: 0.4rem;
      margin-right: 0.2rem;
    }
  }
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
</style>