<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
import footerBar from "@/components/customFooter/customFooter"; //底部tabbar
export default {
  data() {
    return {};
  },
  mounted() {
    // this.$setWxShare();
  },
  beforeCreate() {
    // this.$judgeUserAgent();
    // this.$setSalespersonUnique();
  }
};
</script>
<style lang="less">
@import url("../node_modules/mint-ui/lib/style.css");
@import url("../node_modules/vant/lib/index.css");
@import url("~@/assets/css/iconfont.css");
@import url("~@/assets/css/common.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  font-size: 28px;
  overflow-x: hidden;
}

body {
  margin: 0;
  font-size: 28px;
  font-family: PingFang SC;
}

#app {
  font-family: PingFang SC;
  .van-nav-bar__right {
    color: #c3ab87;
    span {
      color: #c3ab87;
    }
    i {
      color: #777;
    }
  }
  .van-nav-bar__left {
    font-size: 0.44rem;
    color: #777;
    i {
      color: #777;
    }
  }
  .van-nav-bar__title {
    font-weight: 600;
  }
  /deep/ .van-picker__confirm,/deep/ .van-picker__cancel{
    color: #c3ab87;
  }
}
// vant的dialog提示框中的文字
.van-dialog__message {
  font-size: 18px;
}
#app .van-nav-bar {
  padding: 0 0.45rem;
  margin-top: 0.4rem;
  .van-nav-bar__title {
    font-size: 0.34rem;
  }
  .van-nav-bar__left {
    left: 0.45rem;
    padding-left: 0;
  }
  .van-nav-bar__right {
    right: 0.45rem;
    padding-right: 0;
    img {
      margin-left: 0.7rem;
    }
  }
  img {
    height: 0.32rem;
    width: auto;
  }
}
</style>
