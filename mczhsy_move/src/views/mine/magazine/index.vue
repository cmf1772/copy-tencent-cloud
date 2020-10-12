<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="我的杂志" @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <img src="@/assets/images/icon/index/xiangji.png" />
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
import articles from "./components/article";
import dynamic from "./components/dynamic";
import question from "./components/question";
import broadcast from "./components/broadcast";
import videos from "./components/video";
export default {
  components: { articles, dynamic, question, broadcast, videos },
  data() {
    return {
      activeList: [
        { title: "文章", active: "articles" },
        { title: "动态", active: "dynamic" },
        { title: "问答", active: "question" },
        { title: "广播", active: "broadcast" },
        { title: "视频", active: "videos" }
      ],
      active: "articles"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
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
    padding:.2rem 0;
    padding-bottom: 0.4rem;
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