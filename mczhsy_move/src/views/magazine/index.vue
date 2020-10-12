<template>
  <div class="main">
    <!--logo-->
    <div class="logo">
      <img src="../../assets/images/icon/logo_img.png" />
      <span>美城茂</span>
    </div>
    <!--logo end-->

    <!--搜索框-->
    <div class="search" id="search">
      <keep-alive>
        <search placeholdertext="探索美好生活" @adressChange="adressChange" :popup="true">
          <template v-slot:left>
            {{adressText}}
            <img src="@/assets/images/icon/index/down.png" style="width:.14rem" />
          </template>
          <template #right>
            <img src="@/assets/images/icon/index/sean.png" alt />
          </template>
        </search>
      </keep-alive>
    </div>
    <!--搜索框 end-->

    <!--功能入口-->
    <ul class="inavs">
      <li>
        <router-link to="/magazine/dynamic/follow">
          <img src="../../assets/images/magazine/na1.png" />
          <p>看看</p>
        </router-link>
      </li>
      <li>
        <router-link to="/magazine/dynamic">
          <img src="../../assets/images/magazine/na2.png" />
          <p>动态</p>
        </router-link>
      </li>
      <li>
        <router-link to="/magazine/problem">
          <img src="../../assets/images/magazine/na3.png" />
          <p>问答</p>
        </router-link>
      </li>
      <li>
        <router-link to="/magazine/broadcast">
          <img src="../../assets/images/magazine/na4.png" />
          <p>广播</p>
        </router-link>
      </li>
      <li>
        <router-link to="/magazine/video">
          <img src="../../assets/images/magazine/na5.png" />
          <p>视频</p>
        </router-link>
      </li>
    </ul>
    <!--功能入口 end-->

    <!--第一个幻灯片-->
    <div class="banner" id="banner">
      <swiper :list="banner1.bannerList"></swiper>
    </div>
    <!--第一个幻灯片 end-->

    <!-- 正文开始 -->
    <section>
      <div class="title">
        <h5>发现美好生活</h5>
        <span class="sub-title">Discover a good life</span>
      </div>

      <div v-if="categoryList.length < 1" class="loading">
        <van-loading size="24px">加载中...</van-loading>
      </div>
      <div v-else>
        <!-- 美妆 -->
        <div class="nav-title" v-for="(item,index) in categoryList" :key="index">
          <top-nav urlName="food_index">
            <template v-slot:left>{{item.board_title}}</template>
            <template v-slot:right>
              <van-icon name="arrow" size="20" color="#000" />
            </template>
          </top-nav>
          <swiper :list="item.ad_app" :textList="item.label"></swiper>
          <small-swipers :list="item.list" :option="nextSwiper.option"></small-swipers>
        </div>
      </div>
    </section>

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
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
  mixins:[ getLocation ],
  data() {
    return {
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
  mounted() {
    
  },
  created() {
    // 请求banner图
    this.$api.index.getBanner().then(res => {
      this.banner1.bannerList = res;
    });

    // 获取分类咨询
    this.getCategoryList();

    
  },
  methods: {
    //跳转
    forward(name) {
      this.$router.push({
        name
      });
    },


    // 获取分类咨询
    getCategoryList() {
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
.main {
  margin-bottom: 1.6rem;
  /deep/ .more {
    display: flex;
    align-items: center;
    // justify-content: space-between;
  }
}
/*logo*/
.logo {
  text-align: center;
  padding: 0.5rem 0;
  span {
    font-size: 0.38rem;
    font-weight: bold;
  }
}
.logo img {
  height: 0.68rem;
}
/*logo end*/
/*首页栏目入口*/
.inavs {
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
  padding: 0.3rem 0.45rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.inavs li {
  display: inline-block;
  text-align: center;
  width: 0.8rem;
}
.inavs li img {
  width: 0.4rem;
  height: auto;
}
.inavs li p {
  font-size: 0.24rem;
  color: #777;
}
/*首页栏目入口 end*/

// 正文开始
.title {
  text-align: center;
  padding: 0.52rem 0 1rem 0;
  h5 {
    font-size: 0.32rem;
  }
  .sub-title {
    font-size: 0.21rem;
    display: block;
  }
}
.top-nav {
  display: flex;
  align-items: center;
}
.nav-title > *:not(.next) {
  padding: 0 0.45rem;
}
.nav-title {
  /deep/ .swiper-slide {
    margin-right: 0 !important;
    .small-swiper {
      margin-right: 0.32rem;
      img {
        width: auto;
        border-radius: 0;
      }
      .img-view {
        width: 100%;
        overflow: hidden;
        border-radius: 0.05rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  /deep/ .swiper-slide:last-child {
    .small-swiper {
      padding-right: 0.13rem;
    }
  }
  /deep/ .banner {
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0;
}
.main > #banner {
  padding: 0 0.45rem;
  /deep/ .banner {
    width: auto;
    padding: 0;
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: auto;
    }
  }
}
#search {
  padding: 0 0.65rem;
}
</style>
