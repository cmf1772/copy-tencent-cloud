<template>
  <div class="main">
    <div class="top"
         id="top">
      <van-nav-bar left-text="服务"
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #right>
          <img src="@/assets/images/icon/index/xiangji.png" />
        </template>
        <template #left>
          <div class="left-top">
            <span class="title">服务</span>
          </div>
        </template>
      </van-nav-bar>
    </div>

    <!--搜索框-->
    <div class="search-s">
      <search @adressChange="adressChange">
        <template v-slot:left>
          {{adressText}}
          <img src="@/assets/images/icon/index/down.png"
               style="width:.14rem" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/sean.png"
               alt />
        </template>
      </search>
    </div>

    <ul class="inavs">
      <li>
        <router-link to="/serve/travel">
          <img src="@/assets/images/icon/serve/index/chuxing.png" />
          <p>出行</p>
        </router-link>
      </li>
      <li>
        <router-link to="/dynamic">
          <img src="@/assets/images/icon/serve/index/shansong.png" />
          <p>闪送</p>
        </router-link>
      </li>
      <li>
        <router-link to="/serve/recovery">
          <img src="@/assets/images/icon/serve/index/huishou.png" />
          <p>回收</p>
        </router-link>
      </li>
      <li>
        <router-link to="/broadcast">
          <img src="@/assets/images/icon/serve/index/chongdian.png" />
          <p>充电</p>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="@/assets/images/icon/serve/index/yihu.png" />
          <p>一呼</p>
        </router-link>
      </li>
    </ul>

    <!--第一个幻灯片-->
    <div class="banner-s">
      <swipers :list="banner.bannerList"></swipers>
    </div>

    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in navList"
              :key="index">
            <span :class="item.active == active?'active':''"
                  @click="changeActive(item.active)">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>

    <recruit></recruit>
    <house></house>
    <footer-bar></footer-bar>
  </div>
</template>

<script>

import search from "@/components/search/search"; //搜索
import footerBar from "@/components/customFooter/customFooter"; //底部tabbar
import swipers from "@/components/swipers/swiper_component"; //大banner
import recruit from "./components/recruit/index";
import second from "./components/second/index";
import house from "./components/house/index";
import car from "./components/car/index";
import pets from "./components/pets/index";
import getLocation from '@/mixins/getLocationMixin.js'
export default {
  components: { search, footerBar, swipers, recruit, house, car, second, pets },
  mixins: [getLocation],
  data () {
    return {
      navList: [
        { title: "招聘", active: "recruit" },
        { title: "房产", active: "house" },
        { title: "汽车", active: "" },
        { title: "二手", active: "second" },
        { title: "宠物", active: "" }
      ],
      active: "recruit",
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
          require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
        ]
      },
    };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickRight () { },
    onFailed () { },
    changeActive (active) {
      if (!active) return;
      // this.active = active;
      const name = active;
      this.$router.push({
        name
      });
    },
  }
};
</script>

<style lang="less" scoped>
.main {
  margin-bottom: 1.66rem;
  /deep/ .van-nav-bar__text {
    color: #000;
    font-size: 0.28rem;
    font-weight: 600;
  }
  #top {
    /deep/ .left-top {
      display: flex;
      align-items: flex-end;
      * {
        display: inline-block;
        color: #000;
      }
      .title {
        font-size: 0.42rem;
        font-weight: 600;

        margin-right: 0.2rem;
      }
    }
  }
}
.search-s {
  padding: 0 0.45rem;
  margin: 0.1rem 0;
}
/*首页栏目入口*/
.inavs {
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.55rem;
}
.inavs li {
  display: inline-block;
  text-align: center;
}
.inavs li img {
  max-width: 0.42rem;
  max-height: 0.42rem;
}
.inavs li p {
  font-size: 0.24rem;
  color: #777;
}
/*首页栏目入口 end*/

.banner-s {
  padding: 0 0.45rem;
  .banner {
    padding: 0;

    /deep/ img {
      height: 6.44rem;
    }
  }
}

.center-nav {
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    width: 100%;
    padding: 0.2rem 0.45rem;
    margin: 0.2rem 0;
    margin-top: 0.6rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
    line-height: 0.3rem;
    color: #999;
    .active {
      font-size: 0.36rem;
      color: #000;
      font-weight: 600;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 40%;
        height: 0.06rem;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.1rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
</style>