<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="团购"
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
      <div class="list">
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat2.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat6.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat8.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat7.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat5.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat4.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat3.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat2.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/shop/wechat6.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
          </div>
        </div>
        <div class="item">
          <div class="img">
             <img src="@/assets/images/shop/wechat8.jpg" />
          </div>
          <div class="adress">
            <div class="title">
              <van-icon name="shop-o" />迷物优选
            </div>
            <div class="km">沙河1.2km</div>
          </div>
          <div class="name">壁挂式厨房垃圾桶</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="num">销量368</div>
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
        path: "/shop/shop_detailed"
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
  margin-bottom: 0.3rem;
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
        bottom: -0.1rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
.container {
  padding: 0 0.45rem;
  padding-bottom: 0.45rem;
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.32rem;
    .item {
      display: flex;
      flex-direction: column;
      font-size: 0.21rem;
      padding-bottom: 0.1rem;
      img {
        width: 100%;
        height: 3.14rem;
        border-radius: 0.03rem;
      }
      .adress,
      .foot {
        display: flex;
        justify-content: space-between;
      }
      .adress{
        color: #777;
        padding-top: 0.27rem;
        padding-bottom: 0.2rem;
        .title{
          display: flex;
          align-items: center;
        }
        .van-icon{
          font-size: .24rem;
          margin-right: 0.06rem;
        }
      }
      .name{
        font-size: .27rem;
        font-weight: 400;
        margin-bottom: 0.3rem;
      }
      .foot{
        align-items: center;
        .now-p,.num{
          font-size: .21rem;
          color: #C3AB87;
        }
        .now-p{
          font-size: .27rem;
        }
        .old-p{
          font-size: .18rem;
          color: #777;
          margin-left: 0.06rem;
        }
      }
    }
  }
}
</style>