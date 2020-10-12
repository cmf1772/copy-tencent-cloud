<template>
  <div class="main">
    <div class=""></div>
    <!--搜索框-->
    <div class="search"
         id="search">
      <keep-alive>
        <search placeholdertext="探索美好生活"
                @adressChange="adressChange"
                :popup="true">
          <template v-slot:left>
            {{adressText}}
            <img src="@/assets/images/icon/index/down.png"
                 style="width:.14rem" />
          </template>
        </search>
      </keep-alive>
    </div>

    <div class="banner">
      <div @click="$router.push('/dynamic/follow')">
        <img src="@/assets/images/sys.jpg"
             alt="">
        <p>扫一扫</p>
      </div>
      <div @click="$router.push('/dynamic')">
        <img src="@/assets/images/rwm.jpg"
             alt="@/assets/images/rwm.jpg">
        <p>付款</p>
      </div>
      <div @click="$router.push('/serve/travel')">
        <img src="@/assets/images/dd.jpg"
             alt="">
        <p>订单</p>
      </div>
      <div @click="$router.push('/serve/recovery')">
        <img src="@/assets/images/zc.jpg"
             alt="">
        <p>资产</p>
      </div>
    </div>
    <!-- 导航Lan -->
    <van-swipe class="my-swipe"
               :autoplay="3000"
               indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <van-tabs v-model="active"
              color="#409EFF">
      <van-tab title="资讯">
        <div class="item_top"
             @click="$router.push('/console/index')">
          <p>管理控制台</p>
          <van-icon name="arrow" />
        </div>
        <div class="box">
          <div class="item"
               @click="$router.push('/console/business')"
               style="border-right: solid #F1F1F1 1px;border-bottom: solid #F1F1F1 1px;">
            <div>
              <p style="font-size: 0.3rem;font-family: PingFang SC;font-weight: bold;color: #000000;">商家</p>
              <p style="font-size: 0.2rem;font-family: PingFang SC;font-weight: bold;color: #777777;">控制台</p>
            </div>
            <img src="../../../assets/images/serve/recovery/ss4.png"
                 alt="">
          </div>
          <div class="item"
               style="border-bottom: solid #F1F1F1 1px;"
               @click="$router.push('/console/onlineContract')">
            <div>
              <p style="font-size: 0.3rem;font-family: PingFang SC;font-weight: bold;color: #000000;">网约工</p>
              <p style="font-size: 0.2rem;font-family: PingFang SC;font-weight: bold;color: #777777;">控制台</p>
            </div>
            <img src="../../../assets/images/serve/recovery/ss4.png"
                 alt="">
          </div>
          <div class="item">
            <div>
              <p style="font-size: 0.3rem;font-family: PingFang SC;font-weight: bold;color: #000000;">服务商</p>
              <p style="font-size: 0.2rem;font-family: PingFang SC;font-weight: bold;color: #777777;">控制台</p>
            </div>
            <img src="../../../assets/images/serve/recovery/ss4.png"
                 alt="">
          </div>
          <div class="item"
               style="border-left: solid #F1F1F1 1px;">
            <div>
              <p style="font-size: 0.3rem;font-family: PingFang SC;font-weight: bold;color: #000000;">城市站</p>
              <p style="font-size: 0.2rem;font-family: PingFang SC;font-weight: bold;color: #777777;">控制台</p>
            </div>
            <img src="../../../assets/images/serve/recovery/ss4.png"
                 alt="">
          </div>
        </div>

        <div class="item_top">
          <p>热门产品</p>
          <van-icon name="arrow" />
        </div>
        <!-- 导航Lan -->
        <van-swipe class="my-swipe"
                   :autoplay="3000"
                   indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <div class="item_top">
          <p>推荐应用</p>
          <van-icon name="arrow" />
        </div>

        <div class="itemShop"
             v-for="item in 9">
          <img src="../../../assets/images/shop/wechat1.jpg"
               alt="">
          <div class="right">
            <p>小米米家自动洗手机套装泡沫洗手机智能感应皂液器洗手液机家用...</p>
            <div class="rightItem">
              <div v-for="iegm in 2">
                免费试用
              </div>
            </div>
            <div class="rightBottom">
              <div>
                <p>￥199</p>
                <del>￥250</del>
              </div>
              <div>
                3200人在用
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="产品">产品</van-tab>
      <van-tab title="方案">方案</van-tab>
      <van-tab title="服务">服务</van-tab>
      <van-tab title="应用">应用</van-tab>
    </van-tabs>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import search from "@/components/search/searchPage"; //搜索
import swipers from "@/components/swipers/swiper_component"; //大banner
import swiper from "@/components/swipers/swiper"; //大banner
import smallSwipers from "@/components/swipers/swiper_free"; //小banner
import footerBar from "@/components/customFooter/customFooter"; //底部tabbar
import topNav from "@/components/nav/nav"; //模块头部
import getLocation from '@/mixins/getLocationMixin.js'

export default {
  components: {
    search,
    swiper,
    swipers,
    smallSwipers,
    footerBar,
    topNav
  },
  mixins: [getLocation],
  data () {
    return {
      active: 1,
      banner1: {
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
          require("@/assets/images/magazine/index/banner1.jpg"),
          require("@/assets/images/magazine/index/banner2.jpg"),
          require("@/assets/images/magazine/index/banner3.jpg"),
          require("@/assets/images/magazine/index/banner4.jpg"),
          require("@/assets/images/magazine/index/banner5.jpg")
        ]
      },
      active: 0,
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
      nextSwiper: {
        option: {
          slidesPerView: 1.56,
          // spaceBetween:20,
          freeMode: true
        }
      }
    };
  },
  mounted () {

  },
  created () {
    // 请求banner图
    this.$api.index.getBanner().then(res => {
      this.banner1.bannerList = res;
    });

    // 获取分类咨询
    this.getCategoryList();

  },
  methods: {
    //跳转
    forward (name) {
      this.$router.push({
        name
      });
    },


    // 获取分类咨询
    getCategoryList () {
      this.$api.index
        .getNewsList({
          city: this.adressText.split("·")[0]
        })
        .then(res => {
          this.categoryList = res;
        })
        .catch(err => {
          console.log(err);
        });
    },

  }
};
</script>


<style scoped lang="less">
.itemShop {
  width: 85%;
  margin: 0 auto;
  border-bottom: solid 1px #f1f1f1;
  display: flex;
  padding: 0.3rem 0;
  .right {
    display: flex;
    flex-direction: column;
    > p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;

      font-size: 0.27rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 0.4rem;
    }

    .rightItem {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      > div {
        width: 1.5rem;
        background: #f7f7f7;
        height: 0.3rem;
        font-size: 0.21rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #777777;
        line-height: 0.3rem;
        text-align: center;
        border-radius: 0.15rem;
        margin-right: 0.2rem;
        margin-top: 0.2rem;
      }
    }
    .rightBottom {
      display: flex;
      justify-content: space-between;
      font-size: 0.21rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
      line-height: 0.48rem;
      > div {
        display: flex;
        align-items: center;
        > p {
          font-size: 0.37rem !important;
          font-family: PingFang SC;
          font-weight: bold;
          color: #409eff;
          line-height: 0.48rem;
        }
      }
    }
  }
  > img {
    width: 2rem;
    height: 2rem;
    border-radius: 0.2rem;
    margin-right: 0.2rem;
  }
}
.box {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  // box-sizing: border-box;
  // padding: 0 0.7rem;
  margin: 0 auto;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .item {
    width: 49%;
    display: flex;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
    > div {
      width: 1rem;
      height: 0.6rem;
      margin-right: 0.5rem;
    }
    > img {
      width: 0.7rem;
      border-radius: 100%;
    }
  }
}

.item_top {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.45rem auto;
  > p {
    font-size: 0.35rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
  }
  i {
    font-size: 0.3rem;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  margin-top: 0.2rem;
}

.main {
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
}
#search {
  padding: 0 0.25rem;
  margin-top: 0.45rem;
}

.bannerALl {
  width: 7.05rem;
  // height: 4.52rem;
  border-radius: 0.2rem;
  background: #fff;
  margin: 0.4rem auto;
  .inavs {
    display: flex;
    flex-wrap: wrap;
    > li {
      font-size: 0.2rem;
      display: flex;
      width: 1.4rem;
      flex-direction: column;
      align-items: center;
      margin-top: 0.5rem;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .img {
        width: 0.35rem;
        height: 0.5rem;
      }

      img {
        width: 0.35rem;
      }

      p {
        // margin-top: 0.1rem;
      }
    }
  }
}

.content {
  width: 7.05rem;
  // height: 4.52rem;
  border-radius: 0.2rem;
  background: #fff;
  margin: 0.4rem auto;
  .bgImg {
    width: 100%;
    border-radius: 0.1rem;
    margin-bottom: 0.3rem;
  }

  .tabContent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    padding-top: 20px;

    > :nth-child(even) {
      margin-left: 0.65rem;
      // background: red;
    }
    > div {
      // flex: 1;
      width: 3.19rem;
      > img {
        width: 100%;
        height: 3.19rem;
      }

      > p {
        font-size: 0.25px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
        margin-top: 0.1rem;
        line-height: 0.4rem;
      }
    }
  }
}

.banner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.7rem;
  margin-top: 0.5rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.2rem;

    > img {
      width: 0.54rem;
      height: 0.54rem;
    }

    > p {
      margin-top: 0.1rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
    }
  }
}

.bg {
  height: 5.82rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #dfdfdf, #ffffff);
  z-index: -1;
}
</style>
