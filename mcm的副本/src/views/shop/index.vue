<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-text="商店"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="@/assets/images/icon/index/gouwuche.png" />
        </template>
        <template #left>
          <div class="left-top">
            <span class="title">商店</span>
          </div>
        </template>
      </van-nav-bar>
    </div>

    <!-- 搜索 -->
    <div class="search-s">
      <search @adressChange="adressChange">
        <template v-slot:left>
          {{adressText}}
          <img src="@/assets/images/icon/index/down.png" style="width:.14rem" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/sean.png" alt />
        </template>
      </search>
    </div>

    <!-- 功能入口 -->
    <ul class="inavs">
      <li>
        <router-link to="/shop/outfood">
          <img src="@/assets/images/shop/waimai.png" />
          <p>外卖</p>
        </router-link>
      </li>
      <li>
        <router-link to="/shop/special">
          <img src="@/assets/images/shop/tejia.png" />
          <p>特价</p>
        </router-link>
      </li>
      <li>
        <router-link to="/shop/market">
          <img src="@/assets/images/shop/jishi.png" />
          <p>集市</p>
        </router-link>
      </li>
      <li>
        <router-link to="/shop/note">
          <img src="@/assets/images/shop/biji.png" />
          <p>笔记</p>
        </router-link>
      </li>
      <li>
        <router-link to="/magazine/broadcast/releaselive">
          <img src="@/assets/images/shop/zhibo.png" />
          <p>直播</p>
        </router-link>
      </li>
    </ul>
    <!-- banner -->
    <div class="banner-t">
      <swiper :list="banner.bannerList"></swiper>
    </div>

    <div class="container">
      <div class="list">
        <!-- <div class="item">
          <div class="title">
            <span class="text">美食</span>
            <span class="more" @click="moreClick">查看更多</span>
          </div>
          <div class="content">
            <div class="item-c" v-for="(item,index) in list" @click="detailed" :key="index">
              <div class="img">
                <img :src="item.img" alt />
              </div>
              <div class="foot">
                <span class="star">{{item.star}}</span>
                <span class="name">{{item.title}}</span>
                <div class="price-view">
                  <span class="price">￥{{item.now_price}}</span>
                  <del class="old-price" v-if="item.old_price">￥{{item.old_price}}</del>
                </div>
              </div>
            </div>
          </div>

          <div class="commit">
            <img
              src="@/assets/images/magazine/index/food/0137ae5a43798ca801206ed370fdb6.JPG@1280w_1l_2o_100sh.jpg"
              alt
            />
            <div class="star-t">
              <span>7折</span>
              <span>轻食</span>
            </div>
            <span class="name">四合一蔬菜沙拉</span>
            <div class="price-view">
              <span class="price">￥32.5</span>
              <del class="old-price">￥56.3</del>
            </div>
          </div>
        </div>-->
        <div class="item" v-for="(item,index) in dataList.goodsCat" :key="index">
          <div class="title">
            <span class="text">{{item.category_name}}</span>
            <span class="more" @click="moreClick">查看更多</span>
          </div>
          <div class="content">
            <div
              class="item-c"
              v-for="(child,index) in item.list"
              @click="detailed(child)"
              :key="index"
            >
              <div class="img">
                <img :src="child.goods_file1" alt />
              </div>
              <div class="foot">
                <span class="star">{{item.category_name}}</span>
                <span class="name">{{child.goods_name}}</span>
                <div class="price-view">
                  <span class="price">￥{{child.goods_sale_price}}</span>
                  <del class="old-price" v-if="item.old_price">￥{{item.old_price}}</del>
                </div>
              </div>
            </div>
          </div>

          <div class="commit">
            <img
              src="@/assets/images/magazine/index/food/0137ae5a43798ca801206ed370fdb6.JPG@1280w_1l_2o_100sh.jpg"
              alt
            />
            <div class="star-t">
              <span>7折</span>
              <span>轻食</span>
            </div>
            <span class="name">四合一蔬菜沙拉</span>
            <div class="price-view">
              <span class="price">￥32.5</span>
              <del class="old-price">￥56.3</del>
            </div>
          </div>
        </div>

        <!-- <div class="item s-item">
          <div class="title">
            <span class="text">娱乐</span>
            <span class="more" @click="moreClick">查看更多</span>
          </div>
          <div class="content">
            <div class="item-c" v-for="(item,index) in list2" @click="detailed" :key="index">
              <div class="img">
                <img :src="item.img" alt />
              </div>
              <div class="foot">
                <span class="star">{{item.star}}</span>
                <span class="name">{{item.title}}</span>
                <div class="price-view">
                  <span class="price">￥{{item.now_price}}</span>
                  <del class="old-price" v-if="item.old_price">￥{{item.old_price}}</del>
                </div>
              </div>
            </div>
          </div>

          <div class="commit">
            <img src="@/assets/images/magazine/index/food/0137ae5a43798ca801206ed370fdb6.JPG@1280w_1l_2o_100sh.jpg" alt />
            <div class="star-t">
              <span>7折</span>
              <span>密室逃脱</span>
            </div>
            <span class="name">屋有岛机械剧情密室</span>
            <div class="price-view">
              <span class="price">￥32.5</span>
              <del class="old-price">￥56.3</del>
            </div>
          </div>
        </div>-->
      </div>
      <div v-if="Object.keys(dataList) < 1" class="loading">
        <van-loading size="24px">加载中...</van-loading>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import footerBar from "@/components/customFooter/customFooter"; //底部tabbar
import search from "@/components/search/search"; //搜索
import swiper from "@/components/swipers/swiper"; //大banner
import swipers from "@/components/swipers/swiper_component"; //大banner
import getLocation from '@/mixins/getLocationMixin.js'
export default {
  components: {
    footerBar,
    search,
    swipers,
    swiper,
  },
  mixins:[ getLocation ],
  data() {
    return {
      banner: {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination",
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          loop: true,
        },
        bannerList: [
          require("@/assets/images/shop/ae121ab91485426d8b1a298080148830.jpeg"),
          require("@/assets/images/shop/ae121ab91485426d8b1a298080148830.jpeg"),
          require("@/assets/images/shop/ae121ab91485426d8b1a298080148830.jpeg"),
          require("@/assets/images/shop/ae121ab91485426d8b1a298080148830.jpeg"),
        ],
      },
      list: [
        {
          img: require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null,
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B38A454.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null,
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B3891B5.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: 60.6,
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B387D97.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null,
        },
      ],
      list2: [
        {
          img: require("@/assets/images/magazine/index/game/20170417114020164.jpg"),
          star: "密室逃脱",
          title: "屋有岛机械剧情密室",
          now_price: 366,
          old_price: null,
        },
        {
          img: require("@/assets/images/magazine/index/game/131563120256982878.jpg"),
          star: "密室逃脱",
          title: "屋有岛机械剧情密室",
          now_price: 366,
          old_price: null,
        },
        {
          img: require("@/assets/images/magazine/index/game/d68eea27b77644139500f6f6224cb6ff.jpeg"),
          star: "密室逃脱",
          title: "屋有岛机械剧情密室",
          now_price: 366,
          old_price: null,
        },
        {
          img: require("@/assets/images/magazine/index/game/liKj8LJ2aS6VQ.jpg"),
          star: "密室逃脱",
          title: "屋有岛机械剧情密室",
          now_price: 366,
          old_price: null,
        },
      ],
      dataList: {},
    };
  },
  created() {
    this.$api.shop.getFloorBanner().then((res) => {
      this.banner.bannerList = res;
    });

    this.$api.shop.getGoodList().then((res) => {
      console.log(res);
      this.dataList = res;
    });
  },
  methods: {
    onClickLeft() {},
    onClickRight() {
      this.$router.push({
        path: "/shop/car",
      });
    },
    moreClick() {
      this.$router.push({
        path: "/shop/channel",
      });
    },

    detailed(item) {
      this.$router.push({
        path: "/shop/commodity_detailed",
        query: {
          uid: item.uid,
          supid: item.supplier_id,
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.banner-t {
  padding: 0.2rem 0.45rem;
  padding-top: 0;
  .banner {
    padding: 0;
  }
}
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.45rem 0;
}
.main {
  margin-bottom: 70px;
  /deep/ .van-nav-bar__text {
    color: #000;
    font-size: 0.28rem;
    font-weight: 600;
  }
  .top {
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
    padding: 0.3rem 0.45rem;
    li {
      display: inline-block;
      text-align: center;
      width: 0.8rem;
    }
    li img {
      width: 0.44rem;
    }
    li p {
      font-size: 0.24rem;
      color: #777;
    }
  }
}
.container {
  .price {
    color: #c3ab87;
    font-size: 0.27rem;
  }
  .old-price {
    font-size: 0.2rem;
    margin-left: 0.1rem;
    color: #939393;
  }
  padding: 0.3rem 0.45rem;
  padding-bottom: 0;
  .item {
    margin-top: 0.2rem;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .text {
        font-size: 0.42rem;
        font-weight: bold;
      }
      .more {
        color: #777777;
        font-size: 0.24rem;
      }
      span {
        font-size: 0.24rem;
      }
    }
    .content {
      margin: 0.2rem 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.31rem;
      grid-row-gap: 0.1rem;
      .item-c {
        .foot {
          padding: 0.15rem 0;
          font-size: 0.24rem;
          display: flex;
          flex-direction: column;
          .star {
            font-size: 0.2rem;
            color: #777777;
          }
          .name {
            font-size: 0.27rem;
            margin: 0.08rem 0;
            margin-bottom: 0.13rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
        img {
          width: 100%;
          height: 3.14rem;
          border-radius: 0.05rem;
        }
      }
    }
    .commit {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      .star-t {
        span {
          color: #777777;
          position: relative;
          margin-right: 0.3rem;
        }
        span:last-child::before {
          content: "";
          width: 1px;
          height: 80%;
          position: absolute;
          left: -0.15rem;
          background: #f0f0f0;
          transform: translate(-50%, -50%);
          top: 50%;
        }
      }
      .name {
        font-size: 0.26rem;
        margin: 0.08rem 0;
      }
      .price-view {
        margin-top: -0.15rem;
      }
      img {
        width: 100%;
        height: 3.13rem;
      }
      span {
        font-size: 0.24rem;
        margin: 0;
      }
    }
  }
  .s-item {
    .img {
      height: 3.14rem;
      width: 3.14rem;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 0.05rem;
      img {
        height: 100% !important;
        width: auto !important;
      }
    }
  }
}
</style>