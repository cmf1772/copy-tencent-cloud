<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="美食"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ><template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/gouwuche.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- search -->
    <div class="search-f">
      <search></search>
    </div>
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

    <!-- bannerk -->
    <div class="banner-t">
      <swipers :option="banner.swiperOption" :list="banner.bannerList"></swipers>
    </div>

    <!-- 帅选 -->
    <div class="screen">
      <div>
        品类
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        附近
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        排序
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        筛选
        <i class="iconfont icon-down"></i>
      </div>
    </div>

    <!-- 列表 -->
    <div class="list">
      <div class="item" v-for="(i,j) in 2" :key="j">
        <!-- <div class="title">
          <span class="text">美食</span>
          <span class="more" @click="moreClick">查看更多</span>
        </div> -->
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
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search";
import swipers from "@/components/swipers/swiper_component"; //大banner
export default {
  components: { search, swipers },
  data() {
    return {
      navList: [
        { title: "川菜", active: "good" },
        { title: "香菜", active: "beijing" },
        { title: "火锅", active: "emotion" },
        { title: "涮牛肚", active: "comic" },
        { title: "大盘鸡", active: "support" }
      ],
      active: "good",
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
        },
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
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {},
    detailed(){
       this.$router.push({
        path: "/shop/shop_detailed"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.banner-t{
  padding: .2rem .45rem;
  .banner{
    padding: 0;
    /deep/ img{
      height: 3.73rem !important;
    }
  }
}
// 导航
.center-nav {
  margin-bottom: 0.4rem;
  ul {
    display: flex;
    padding: 0.2rem  0.45rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
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
        height: 4px;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.2rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}

//search
.search-f {
  padding: 0.2rem;
  padding-bottom: 0.3rem;
}

// banner
.main .banner {
  /deep/ .swiper-container {
    img {
      height: 4rem;
    }
  }
}

.screen {
  margin: 0.8rem 0 0.4rem 0;
  padding: 0 0.45rem;
  font-size: 0.28rem;
  display: flex;
  justify-content: space-between;
  i {
    display: initial;
    font-size: 0.2rem;
  }
}

.list {
  padding: 0 .45rem;
  .price{
    color: #C3AB87 ;
  }
  .item {
    margin-top: 0.2rem;
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
  }
}
</style>