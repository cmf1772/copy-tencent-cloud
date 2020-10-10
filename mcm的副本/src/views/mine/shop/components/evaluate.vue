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
import all from "./evaluate/all";
import good from "./evaluate/good";
import haveImage from "./evaluate/have_image";
export default {
  components: { all, good, haveImage },
  data() {
    return {
      activeList: [
        { title: "全部", active: "all" ,num:65},
        { title: "好评", active: "good" ,num:32},
        { title: "有图", active: "haveImage",num:12 }
      ],
      active: "all"
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
      width: 100%;
    }
    li {
      font-size: 0.27rem;
      line-height: 0.3rem;
      width: 1.27rem;
      height: 0.56rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: #777;
      background: #f7f7f7;
      border-radius: 1rem;
      margin-right: .2rem;
    }
    .active {
      color: #fff;
      background: #c3ab87;
    }
  }
}
</style>