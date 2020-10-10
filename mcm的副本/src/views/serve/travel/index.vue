<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-text left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #title>{{cityName}}</template>
        <template #right>
          <img src="@/assets/images/icon/index/speak.png" />
          <img src="@/assets/images/icon/index/sean.png" style="margin-left:.4rem" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
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
  </div>
</template>

<script>
import carpooling from "./pages/carpooling"; //拼车
import freeRide from "./pages/free_ride"; //顺风车
import taxi from "./pages/taxi"; //出租车
import bus from "./pages/bus"; //公交车
import driving from "./pages/driving"; //代驾
export default {
  components: {
    carpooling,
    freeRide,
    taxi,
    bus,
    driving,
  },
  data() {
    return {
      cityName: "",
      navList: [
        { title: "拼车", active: "carpooling" },
        { title: "顺风车", active: "freeRide" },
        { title: "出租车", active: "taxi" },
        { title: "公交车", active: "bus" },
        { title: "代驾", active: "driving" },
      ],
      active: "carpooling",
    };
  },
  created() {
    this.cityName = localStorage.getItem("adressText").split("·")[0];
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(active) {
      this.active = active;
    },
  },
};
</script>

<style scoped lang="less">
.center-nav {
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    width: 100%;
    padding: 0.2rem 0.45rem;
    margin: 0.2rem 0;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
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
        width: 40%;
        height: 0.06rem;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.1rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
</style>