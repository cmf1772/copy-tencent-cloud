<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="秒杀"
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
      <search></search>
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
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="progess">
            <div class="progess-v"></div>
            <div class="progess-t">已抢205件</div>
            <div class="progess-b">30%</div>
          </div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥199.00</span>
              <del class="old-p">￥320.00</del>
            </div>

            <div class="buying">马上抢</div>
          </div>
        </div>
      </div>
      <div class="item" @click="detailed">
        <div class="img">
           <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅优质双人火锅优质双人火锅优质双人火锅优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="progess m">
            <div class="progess-v"></div>
            <div class="progess-t">即将抢光</div>
            <div class="progess-b"></div>
          </div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥199.00</span>
              <del class="old-p">￥320.00</del>
            </div>

            <div class="buying">马上抢</div>
          </div>
        </div>
      </div>
      <div class="item" @click="detailed" v-for="(item,index) in 15" :key="index">
        <div class="img">
           <img src="@/assets/images/magazine/index/food/16B1B38A454.jpg" />
        </div>
        <div class="center">
          <div class="title">优质双人火锅优质双人火锅优质双人火锅</div>
          <div class="progess">
            <div class="progess-v"></div>
            <div class="progess-t">已抢205件</div>
            <div class="progess-b">48%</div>
          </div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥199.00</span>
              <del class="old-p">￥320.00</del>
            </div>

            <div class="buying">马上抢</div>
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
        path: "/shop/special/seckill/detailed"
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
        height:.06rem;
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
  padding-bottom: 0.45rem;
  .item {
    display: flex;
    padding: .42rem 0;
    border-bottom: 1px solid #f0f0f0;
    .img {
      img {
        width: 2.26rem;
        height: 2.26rem;
        border-radius: 0.04rem;
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      padding: 0 0 0 0.31rem;
      .title {
        font-size: 0.3rem;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .progess {
        width: 100%;
        border-radius: 1rem;
        background: transparent;
        position: relative;
        height: 0.25rem;
        background: #eee;
        margin: 0.2rem 0;
        .progess-v {
          position: absolute;
          background: #c3ab87;
          height: 100%;
          width: 48%;
          left: 0;
          top: 0;
          border-radius: 1rem;
        }
        .progess-t {
          position: absolute;
          color: #fff;
          font-size: 0.2rem;
          top: -0.02rem;
          left: 0.1rem;
          transform-origin: left center;
          transform: scale(0.8);
        }
        .progess-b {
          position: absolute;
          color: #c3ab87;
          font-size: 0.2rem;
          top: 0;
          right: 0.1rem;
          transform-origin: right center;
          transform: scale(0.8);
        }
      }
      .m {
        .progess-v {
          width: 93%;
        }
      }
    }
    .foot {
      margin-top: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price{
        display: inline-flex;
        align-items: center;
      }
      .now-p {
        color: #c3ab87;
        font-size: 0.39rem;
      }
      .old-p {
        font-size: 0.24rem;
        margin-left: 0.1rem;
        color: #939393;
      }
      .buying {
        display: inline-flex;
        font-size: 0.2rem;
        border: #eee solid 1px;
        border-radius: 1rem;
        width: 0.98rem;
        height: 0.37rem;
        color: #777;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .item:last-child{
    padding-bottom: 0;
    border: none;
  }
}
</style>