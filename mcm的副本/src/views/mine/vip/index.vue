<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="会员中心" left-text left-arrow @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="nav">
        <div class="center-nav">
          <ul>
            <li v-for="(item,index) in activeList" :key="index">
              <span
                :class="item.active == active?'active':''"
                @click="changeActive(item.active)"
              >{{item.title}}</span>
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
import received from "./components/received";
import business from "./components/business";
import platform from "./components/platform";
export default {
  components: {
    received,
    business,
    platform
  },
  data() {
    return {
      activeList: [
        { title: "已领会员", active: "received" },
        { title: "商家会员", active: "business" },
        { title: "平台会员", active: "platform" }
      ],
      active: "received"
    };
  },
  methods: {
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
    padding: 0 0.2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.6rem;
    ul {
      display: flex;
      margin: 0.2rem 0;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    li {
      font-size: 0.3rem;
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
          width: 0.5rem;
          height: 3px;
          border-radius: 1px;
          background: #c3ab87;
          bottom: -0.1rem;
          right: 50%;
          transform: translate(50%, 0);
        }
      }
    }
  }
}
</style>