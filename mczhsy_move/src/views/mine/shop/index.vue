<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="我的小店" @click-left="onClickLeft" @click-right="setting">
        <template #right>
           <img src="@/assets/images/icon/index/setting.png"  style="height:.4rem" />
        </template>
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
import commodity from "./components/commodity";
import info from "./components/info";
import note from "./components/note";
import evaluate from "./components/evaluate";
import order from "./components/order";
export default {
  components: { commodity, info, note, evaluate, order },
  data() {
    return { 
      activeList: [
        { title: "商品", active: "commodity" },
        { title: "信息", active: "info" },
        { title: "笔记", active: "note" },
        { title: "评价", active: "evaluate" },
        { title: "订单", active: "order" }
      ],
      active: "commodity"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(active) {
      this.active = active;
    },
    setting(){
      this.$router.push({
        path: "/mine/small_shop/setting"
      })
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
    padding: 0.2rem;
    margin-bottom: 0.4rem;
    ul {
      display: flex;
      margin: 0.2rem 0;
      justify-content: space-between;
      align-items: center;
      width: 100%;
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