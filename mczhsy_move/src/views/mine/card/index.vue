<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="通证" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/gouwuche.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="nav">
        <div class="center-nav">
          <ul>
            <li
              v-for="(item,index) in activeList"
              :key="index"
              :class="item.active == active?'active':''"
            >
              <span @click="changeActive(item.active)">{{item.title}}{{item.num}}</span>
            </li>
          </ul>
        </div>
      </div>
      <keep-alive>
        <component :is="active"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import myCard from "./page/my";
import cardTransition from "./page/transaction";
export default {
  components: {
    myCard,
    cardTransition
  },
  data() {
    return {
      activeList: [
        { title: "我的通证", active: "myCard" },
        { title: "通证交易", active: "cardTransition" }
      ],
      active: "myCard"
    };
  },
  methods: {
    onClickRight() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    changeActive(active) {
      this.active = active;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .center-nav {
    display: flex;
    justify-content: center;
    padding: .2rem 0;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    li {
      font-size: 0.26rem;
      font-weight: bold;
      line-height: 0.3rem;
      margin: 0 0.28rem;
      width: 1.8rem;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      color: #777;
      background: #f7f7f7;
      border-radius: 1rem;
      // margin-right: 0.26rem;
    }
    .active {
      color: #c3ab87;
      border-color: #c3ab87;
    }
  }
}
</style>