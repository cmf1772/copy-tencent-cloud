<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="集市" @click-left="onClickLeft"></van-nav-bar>
    </div>
    <div class="search-o">
      <search></search>
    </div>

    <div class="screen">
      <div>
        综合排序
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        信用有限
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        区域
        <i class="iconfont icon-down"></i>
      </div>
      <div>
        筛选
        <i class="iconfont icon-down"></i>
      </div>
    </div>

    <!-- 精选好点商品 -->
    <div class="list">
      <div class="item" v-for="(item,index) in 13" :key="index" @click="detailed">
        <div class="img">
          <img src="@/assets/images/shop/wechat1.jpg" />
        </div>
        <div class="name">
          AFV情人节联名款春秋印花短袖T恤
        </div>
        <div class="foot">
          <div class="price">
            <span class="now-p">￥30.26</span>
            <del class="old-p">￥50.52</del>
          </div>
          <div class="add">
            <van-icon name="plus" size=".3rem" />
          </div>
        </div>
      </div>
      <div class="item">
        <div class="img">
          <img src="@/assets/images/shop/wechat1.jpg" />
        </div>
        <div class="name">
          AFV情人节联名款春秋印花短袖T恤
        </div>
        <div class="foot">
          <div class="price">
            <span class="now-p">￥30.26</span>
            <del class="old-p">￥50.52</del>
          </div>
          <div class="add">
            <van-icon name="plus" size=".3rem" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  components: {
    search
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    detailed() {
      this.$router.push({
        path: "/shop/market/detailed"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-o {
  padding: 0.2rem 0.45rem;
}
.screen {
  margin: 0.3rem 0;
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
  padding: 0.2rem 0.45rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.32rem;
  .item {
    display: flex;
    flex-direction: column;
    font-size: 0.2rem;
    padding-bottom: 0.3rem;
    img {
      width: 100%;
      height: 3.13rem;
      border-radius: 0.05rem;
    }
    .adress,
    .foot {
      display: flex;

      justify-content: space-between;
    }
    .name {
      font-size: 0.27rem;
      font-weight: 600;
      margin-top: 0.15rem;
      margin-bottom: 0.15rem;
    }
    .foot {
      align-items: center;
      .now-p,
      .num {
        font-size: 0.22rem;
        color: #c3ab87;
      }
      .add {
        display: inherit;
      }
      .now-p {
        font-size: 0.3rem;
      }
      .old-p {
        font-size: 0.18rem;
        color: #777;
        margin-left: 0.06rem;
      }
    }
  }
}
</style>