<template>
  <div class="main">
    <!-- toubu  -->
    <div class="top">
      <van-nav-bar left-arrow title="特价" right-text="按钮" @click-left="onClickLeft">
        <template #right>
           <img src="@/assets/images/icon/index/search.png" />
           <img src="@/assets/images/icon/index/gouwuche.png" style="margin-left: 0.5rem" />
        </template>
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 导航 -->
    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in navList" :key="index">
            <span
              :class="item.active == active?'active':''"
              @click="changeActive(item.active)"
            >{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- banner -->
    <div class="banner-s">
      <swipers :list="banner.bannerList"></swipers>
    </div>

    <!-- 入口 -->
    <ul class="inavs">
      <li>
        <router-link to="/shop/special/coupon">
          <img src="@/assets/images/icon/shop/index/banner1.png" />
          <p>领券</p>
        </router-link>
      </li>
      <li>
        <router-link to="/shop/special/group">
         <img src="@/assets/images/icon/shop/index/banner2.png" />
          <p>团购</p>
        </router-link>
      </li>
      <li>
        <router-link to="/shop/special/seckill">
          <img src="@/assets/images/icon/shop/index/banner3.png" />
          <p>秒杀</p>
        </router-link>
      </li>
      <li>
        <router-link to="/shop/special/callage">
          <img src="@/assets/images/icon/shop/index/banner4.png" />
          <p>拼团</p>
        </router-link>
      </li>
      <li>
        <router-link to="/shop/special/auction">
          <img src="@/assets/images/icon/shop/index/banner5.png" />
          <p>拍卖</p>
        </router-link>
      </li>
    </ul>

    <div class="container">
      <div class="list">
        <div class="item ">
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
            <img src="@/assets/images/magazine/index/food/0137ae5a43798ca801206ed370fdb6.JPG@1280w_1l_2o_100sh.jpg" alt />
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
        <div class="item s-item">
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

          <div class="commit" style="margin-bottom:0.45rem">
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
        </div>
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
      navList: [
        { title: "美食", active: "1" },
        { title: "娱乐", active: "2" },
        { title: "美妆", active: "3" },
        { title: "服务", active: "4" },
        { title: "商超", active: "5" },
        { title: "艺术", active: "6" }
      ],
      active: "1",
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
          img: require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B38A454.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B3891B5.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: 60.6
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B387D97.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null
        }
      ],
      list2: [
        {
          img: require("@/assets/images/magazine/index/game/20170417114020164.jpg"),
          star: "密室逃脱",
          title: "屋有岛机械剧情密室",
          now_price: 366,
          old_price: null
        },
        {
          img: require("@/assets/images/magazine/index/game/131563120256982878.jpg"),
          star: "密室逃脱",
          title: "屋有岛机械剧情密室",
          now_price: 366,
          old_price: null
        },
        {
          img: require("@/assets/images/magazine/index/game/d68eea27b77644139500f6f6224cb6ff.jpeg"),
          star: "密室逃脱",
          title: "屋有岛机械剧情密室",
          now_price: 366,
          old_price: null
        },
        {
          img: require("@/assets/images/magazine/index/game/liKj8LJ2aS6VQ.jpg"),
          star: "密室逃脱",
          title: "屋有岛机械剧情密室",
          now_price: 366,
          old_price: null
        },
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(activeName) {
      this.active = activeName;
    },
    moreClick() {
      this.$router.push({
        path: "/shop/special/channel",
      });
    },
    detailed(){
       this.$router.push({
        path: "/shop/shop_detailed"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  .van-icon {
    margin-left: 0.2rem;
  }
  /deep/ .van-nav-bar__text {
    color: #000;
    font-size: 0.28rem;
    font-weight: 600;
  }
  /deep/ .van-nav-bar__right{
    margin-left: 0.5rem !important;
  }
}
// 导航
.center-nav {
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
  ul {
    display: flex;
    padding: 0.2rem .45rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.30rem;
    line-height: 0.3rem;
    color: #b5b5b5;
    .active {
      font-size: 0.36rem;
      font-weight: 600;
      color: #000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 0.4rem;
        height: .06rem;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.1rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
.banner-s {
  padding: 0 .45rem;
  .banner{
    padding: 0;
  }
  /deep/ img {
    height: 3.73rem;
  }
}
.inavs {
  overflow: hidden;
  text-align: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.3rem 0.45rem;
  li {
    display: inline-block;
    text-align: center;
    margin: 0 0.2rem;
  }
  li img {
    max-width: 0.45rem;
    max-height: .45rem;
  }
  li p {
    font-size: 0.24rem;
    color: #777;
  }
}
.container {
  .price {
    color: #c3ab87;
    font-size: .27rem;
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
        font-size: .24rem;
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
      grid-row-gap: .1rem;
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
          }
        }
        img {
          width: 100%;
          height: 3.14rem;
          border-radius: 0.03rem;
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
}
</style>