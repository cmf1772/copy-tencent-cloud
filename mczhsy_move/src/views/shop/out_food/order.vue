<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="提交订单" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
           <img src="@/assets/images/icon/index/fenxiang2.png" />
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

    <keep-alive>
      <component :is="active"></component>
    </keep-alive>
  </div>
</template>

<script>
import access from "./order/access";
import distribution from "./order/distribution";
export default {
  components: {
    access,
    distribution
  },
  data() {
    return {
      navList: [
        { title: "外卖配送", active: "distribution" },
        { title: "到店自取", active: "access" }
      ],
      active: "distribution"
    };
  },
  methods: {
    changeActive(activeName) {
      this.active = activeName;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
    }
  }
};
</script>

<style lang="less" scoped>
// 导航
.center-nav {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  ul {
    display: flex;
    padding: 0.2rem .45rem;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
    margin: 0 10px;
    line-height: 0.3rem;
    color: #b5b5b5;
    .active {
      font-size: 0.34rem;
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
</style>