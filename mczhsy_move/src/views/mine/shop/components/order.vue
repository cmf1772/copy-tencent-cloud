<template>
  <div class="main">
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
import buy from "./order/buy";
import sell from "./order/sell";
export default {
  components: { buy, sell, },
  data() {
    return {
      activeList: [
        { title: "我买到的", active: "buy" },
        { title: "我卖出的", active: "sell"},
      ],
      active: "buy"
    };
  },
  methods: {
    changeActive(active) {
      this.active = active;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .center-nav {
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    li {
      font-size: 0.26rem;
      line-height: 0.3rem;
      margin: 0 .2rem;
      width: 1.8rem;
      height: 0.56rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: #777;
      background: #f7f7f7;
      border-radius: 1rem;
      margin-right: .2rem;
      border: 1px solid transparent;
    }
    .active {
      color: #c3ab87;
      border-color: #c3ab87;
    }
  }
}
</style>