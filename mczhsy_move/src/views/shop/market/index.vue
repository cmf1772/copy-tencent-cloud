<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        right-text="按钮"
        title="集市"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <div class="right-menu-top">
            <van-icon name="scan" size=".32rem" />
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="search-o">
      <search></search>
    </div>
    <div class="banner-o">
      <swipers :list="banner.bannerList"></swipers>
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

    <div class="list">
      <div class="item">
        <div class="title">吃喝</div>
        <div class="img">
          <img src="@/assets/images/magazine/index/food/u=2525721197,2106052897&fm=214&gp=0.jpg" />
          <div class="tip">
            <p>专属午后时光</p>
            <p>欢迎来到你的午后时光补充能量</p>
          </div>
        </div>
        <div class="imgs">
          <div class="item-c" v-for="(c,c1) in 3" :key="c1">
             <img src="@/assets/images/magazine/index/food/16B1B3891B5.jpg" />
            <div class="name">黄焖鸡米饭黄萌鸡米饭那黄焖鸡米饭黄萌鸡米饭那</div>
            <div class="price">￥36</div>
          </div>
          <div class="item-c" v-for="(c,c1) in 3" :key="c1">
             <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
            <div class="name">黄焖鸡米饭黄萌鸡米饭那黄焖鸡米饭黄萌鸡米饭那</div>
            <div class="price">￥36</div>
          </div>
        </div>
        <div class="more">
          <span @click="more">查看跟多</span>
        </div>
      </div>
      <div class="item">
        <div class="title">玩乐</div>
        <div class="img">
          <img src="@/assets/images/magazine/index/game/banner1.png" />
          <div class="tip">
            <p>专属午后时光</p>
            <p>欢迎来到你的午后时光补充能量</p>
          </div>
        </div>
        <div class="imgs">
          <div class="item-c" v-for="(c,c1) in 6" :key="c1">
             <img src="@/assets/images/magazine/index/game/131563120256982878.jpg" />
            <div class="name">密室逃脱</div>
            <div class="price">￥36</div>
          </div>
        </div>
        <div class="more">
          <span @click="more">查看跟多</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
import swipers from "@/components/swipers/swiper_component"; //大banner
export default {
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
          require("@/assets/images/shop/0ae31b06dcd2a3dc3da5c2bab9c4756154d9ef0a3b98a-WlVNMq_fw658.jpg"),
          require("@/assets/images/shop/0ae31b06dcd2a3dc3da5c2bab9c4756154d9ef0a3b98a-WlVNMq_fw658.jpg"),
          require("@/assets/images/shop/0ae31b06dcd2a3dc3da5c2bab9c4756154d9ef0a3b98a-WlVNMq_fw658.jpg"),
          require("@/assets/images/shop/0ae31b06dcd2a3dc3da5c2bab9c4756154d9ef0a3b98a-WlVNMq_fw658.jpg"),
        ]
      },
      navList: [
        { title: "美食", active: "1" },
        { title: "娱乐", active: "2" },
        { title: "美妆", active: "3" },
        { title: "服务", active: "4" },
        { title: "商超", active: "5" },
        { title: "艺术", active: "6" }
      ],
      active: "1"
    };
  },
  components: {
    search,
    swipers
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(activeName) {
      this.active = activeName;
    },
    more(){
      this.$router.push({
        path: "/shop/market/list"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  margin-top: 0.5rem;
  padding: 0 0.45rem;
  .item {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 0.42rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    .img {
      position: relative;
      .tip {
        width: 80%;
        text-align: center;
        color: #fff;
        position: absolute;
        font-size: 0.45rem;
        p:last-child {
          font-size: 0.28rem;
          margin-top: 0.2rem;
        }
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      img {
        width: 100%;
        border-radius: .04rem;
        height: 6.44rem;
      }
    }
    .imgs {
      margin-top: 0.3rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: .29rem;
      img {
        width: 100%;
        height: 2.01rem;
        border-radius: .04rem;
      }
      .item-c {
        display: flex;
        flex-direction: column;
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-size: .27rem;
          margin: .1rem 0;
        }
        .price{
          font-size: .27rem;
          color: #C3AB87;
        }
      }
    }
    .more{
      display: flex;
      justify-content: center;
      margin: .3rem 0 .5rem 0 ;
      span{
        display: inline-block;
        font-size: .3rem;
        width: 2.68rem;
        height: 0.71rem;
        text-align: center;
        line-height: .71rem;
        border-radius: 1rem;
        border: 1px solid #efefef;
      }
    }
  }
}
// 导航
.center-nav {
  margin-top: 0.5rem;
  margin-bottom: 1.2rem;
  ul {
    display: flex;
    padding: 0.2rem .45rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.3rem;
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
.search-o {
  padding: 0.2rem .45rem;
}
.banner-o {
  padding: 0 .45rem;
  .banner{
    padding:0;
  }
  /deep/ img {
    height:4.04rem;
  }
}
</style>