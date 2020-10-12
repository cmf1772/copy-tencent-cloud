<template>
  <div class="main">
    <!-- 导航 -->
    <div class="top">
      <van-nav-bar left-text left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" alt />
        </template>
        <template #title>
          <div class="center" @click="changeActive">
            <span :class="active == 'follow'?'active':''">关注</span>
            <span :class="active == 'follow'?'':'active'">推荐</span>
          </div>
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/xiangji.png" alt />
        </template>
      </van-nav-bar>
    </div>
    <!-- 搜索 -->
    <div class="search">
      <search>
        <template v-slot:right>
          <span class="all">
            全部
            <van-icon name="info-o" size=".26rem" style="margin-left:.03rem" />
          </span>
        </template>
      </search>
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
import follow from "./components/follow";
import commend from "./components/commend";
export default {
  components: {
    search,
    follow,
    commend
  },
  data() {
    return {
      active: "follow"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    changeActive() {
      this.active = this.active == "follow" ? "commend" : "follow";
    }
  }
};
</script>

<style scoped  lang="less">
.top {
  img {
    height: 0.32rem;
  }
}
.top .center {
  font-size: 0.36rem;
  display: flex;
  justify-content: center;
  span {
    margin: 0 0.2rem;
    color: #ccc;
    position: relative;
  }
  .active {
    font-size: 0.36rem;
    color: #000;

    &::after {
      width: 80%;
      content: "";
      bottom: 0;
      display: block;
      height: 4px;
      border-radius: 1px;
      position: absolute;
      background: #c3ab87;
      transform: translate(10%);
    }
  }
}
.search {
  margin: 0.2rem 0;
  padding: 0 0.2rem;
  .all {
    display: flex;
    align-items: center;
    color: #020202;
  }
}
</style>