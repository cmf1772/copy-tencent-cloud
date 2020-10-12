<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="拍卖"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/gouwuche.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 搜索 -->
    <div class="search-f">
      <search>
        <template v-slot:left>
          苏州·高新区
          <img src="@/assets/images/icon/index/down.png" style="width:.14rem" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/sean.png" alt />
        </template>
      </search>
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

    <div class="container">
      <div class="item" @click="detailed">
        <div class="img">
         <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
          <div class="auction-t">
            <van-icon name="warning" color="#fff" />拍卖中
          </div>
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="tip">
            <img src="@/assets/images/index/banner2.jpg" />
            <span>浙江佳宝拍卖</span>
          </div>
          <div class="price">
            <div class="l-p">
              当前价￥
              <span>1199</span>
            </div>
            <div class="l-r">5人出价</div>
          </div>
          <div class="foot">
            <div class="f-l">
              截拍:
              <span>今天19：00前</span>
            </div>
            <span>去出价</span>
          </div>
        </div>
      </div>
      <div class="item" @click="detailed">
        <div class="img">
         <img src="@/assets/images/magazine/index/food/p2466554335.jpg" />
          <div class="auction-t">
            <van-icon name="warning" color="#fff" />拍卖中
          </div>
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="tip">
            <img src="@/assets/images/index/banner2.jpg" />
            <span>浙江佳宝拍卖</span>
          </div>
          <div class="price">
            <div class="l-p">
              当前价￥
              <span>1199</span>
            </div>
            <div class="l-r">5人出价</div>
          </div>
          <div class="foot">
            <div class="f-l">
              截拍:
              <span>今天19：00前</span>
            </div>
            <span>去出价</span>
          </div>
        </div>
      </div>
      <div class="item" @click="detailed">
        <div class="img">
         <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
          <div class="auction-t">
            <van-icon name="warning" color="#fff" />拍卖中
          </div>
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="tip">
            <img src="@/assets/images/index/banner2.jpg" />
            <span>浙江佳宝拍卖</span>
          </div>
          <div class="price">
            <div class="l-p">
              当前价￥
              <span>1199</span>
            </div>
            <div class="l-r">5人出价</div>
          </div>
          <div class="foot">
            <div class="f-l">
              截拍:
              <span>今天19：00前</span>
            </div>
            <span>去出价</span>
          </div>
        </div>
      </div>
      <div class="item" @click="detailed">
        <div class="img">
         <img src="@/assets/images/magazine/index/food/p2466554335.jpg" />
          <div class="auction-t">
            <van-icon name="warning" color="#fff" />拍卖中
          </div>
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="tip">
            <img src="@/assets/images/index/banner2.jpg" />
            <span>浙江佳宝拍卖</span>
          </div>
          <div class="price">
            <div class="l-p">
              当前价￥
              <span>1199</span>
            </div>
            <div class="l-r">5人出价</div>
          </div>
          <div class="foot">
            <div class="f-l">
              截拍:
              <span>今天19：00前</span>
            </div>
            <span>去出价</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  data() {
    return {
      navList: [
        { title: "珠宝", active: "1" },
        { title: "玉器", active: "2" },
        { title: "文玩", active: "3" },
        { title: "房产", active: "4" },
        { title: "汽车", active: "5" },
        { title: "资产", active: "6" }
      ],
      active: "1"
    };
  },
  components: { search },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    changeActive(activeName) {
      this.active = activeName;
    },
    onClickRight() {},
    detailed() {
      this.$router.push({
        path: "/shop/special/auction/detailed"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-f {
  padding: 0.1rem 0.45rem;
}
// 导航
.center-nav {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  ul {
    display: flex;
    padding: 0.2rem 0.45rem;
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
        height: 0.06rem;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.2rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
.container {
  padding: 0 0.45rem;
  .item {
    margin: 0.1rem 0;
    padding: 0.2rem 0;
    display: flex;
    .img {
      position: relative;
      .auction-t {
        position: absolute;
        bottom: 0.1rem;
        left: 0.1rem;
        font-size: 0.18rem;
        background: #c3ab87;
        display: flex;
        align-items: center;
        padding: 0.01rem 0.06rem;
        border-radius: 1rem;
        color: #fff;
      }
      img {
        width: 2.26rem;
        height: 2.26rem;
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      padding: 0 0 0 0.3rem;
      .title {
        font-size: 0.3rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .tip {
        font-size: 0.24rem;
        display: flex;
        align-items: center;
        margin: 0.05rem 0;
        color: #999;
        img {
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 1rem;
          margin-right: 0.1rem;
        }
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.2rem;
        .l-p {
          color: #c3ab87;
          display: flex;
          align-items: center;
          font-size: 0.24rem;
          span {
            font-size: 0.39rem;
          }
        }
        .l-r {
          padding: 0 0.06rem;
          background-image: url(../../../../assets/images/icon/shop/index/me.png) !important;
          color: #c3ab87;
          font-size: 0.17rem;
          padding-left: 0.15rem;
          color: #c3ab87;
        }
      }
      .foot {
        .f-l {
          display: flex;
          align-items: center;
        }
        margin-top: auto;
        font-size: 0.2rem;
        display: flex;
        justify-content: space-between;
        span {
          color: #999;
          margin-left: 0.1rem;
        }
      }
    }
  }
  .item:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
}
</style>