<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="广播"
        left-text
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
           <img src="@/assets/images/icon/index/add.png" alt="">
        </template>
        <template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template>
      </van-nav-bar>
    </div>
    <div class="search-s">
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
          <li @click="moreMenu">
            <span><van-icon name="more-o" size=".36rem" /></span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <keep-alive>
        <component :is="active"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
import recommend from "./components/recommend"; //推荐
import listen from "./components/listen"; //必听
import live from "./components/live"; //直播
import novel from "./components/novel"; //小说
import classroom from "./components/classroom"; //课堂
import emotion from "./components/emotion"; //情感
export default {
  components: { search, recommend,listen,live,novel,classroom,emotion },
  data() {
    return {
      navList: [
        { title: "推荐", active: "recommend" },
        { title: "必听", active: "listen" },
        { title: "直播", active: "live" },
        { title: "小说", active: "novel" },
        { title: "课堂", active: "classroom" },
        { title: "情感", active: "emotion" }
      ],
      active: "recommend"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({
        name:'releasefrequency'
      })
    },
    changeActive(active) {
      this.active = active;
    },
    moreMenu(){
      this.$router.push({
        name:'menu'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.search-s {
  margin: 0.2rem 0.45rem;
}
// 导航
.center-nav {
  padding: .5rem .45rem;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
    line-height: 0.3rem;
    color: #B5B5B5;
    .active {
      font-size: 0.36rem;
      font-weight: 600;
      color: #000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 80%;
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
.container{
  padding: 0 .45rem;
}
</style>