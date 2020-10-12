<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="发现圈子" left-text left-arrow @click-left="onClickLeft"></van-nav-bar>
    </div>

    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in navList" :key="index">
            <span
              :class="item.active == active?'active':''"
              @click="changeActive(item.active)"
            >{{item.title}}</span>
          </li>
          <li>
            <span>
              <img src="@/assets/images/icon/community/more.png" alt="">
            </span>
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
import good from "./components/good";
import beijing from "./components/beijing";
import emotion from "./components/emotion";
import comic from "./components/comic";
import support from "./components/support";
export default {
  components:{good,beijing,emotion,comic,support},
  data() {
    return {
      navList: [
        { title: "编辑看好", active: "good" },
        { title: "北京", active: "beijing" },
        { title: "情感", active: "emotion" },
        { title: "动漫", active: "comic" },
        { title: "自营", active: "support" }
      ],
      active: "good"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(activeName) {
      console.log(
        activeName
      );
      
      this.active = activeName;
    }
  }
};
</script>
<style lang="less" scoped>
// 导航
.center-nav {
  margin-bottom: 0.6rem;
  ul {
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
    margin: 0 10px;
    line-height: 0.3rem;
    color: #b5b5b5;
    img{
      width: 0.39rem;
    }
    .active {
      font-size: 0.36rem;
      font-weight: 600;
      color: #000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: .4rem;
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