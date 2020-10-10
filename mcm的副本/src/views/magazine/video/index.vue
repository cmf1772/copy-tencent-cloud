<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-text left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #title>
          <div class="center" @click="changeActive">
            <span :class="active == 'follow'?'active':''">关注</span>
            <span :class="active == 'follow'?'':'active'">推荐</span>
          </div>
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/search2.png" alt="">
        </template>
      </van-nav-bar>
    </div>
    <keep-alive>
      <component :is="active"></component>
    </keep-alive>
  </div>
</template>

<script>
import follow from "./components/follow";
import commend from "./components/commend";
export default {
  components: {
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
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({
        path: "/magazine/video/releasevideo"
      })
    },
    changeActive() {
      this.active = this.active == "follow" ? "commend" : "follow";
    }
  }
};
</script>
<style lang="less" scoped>
//修改框架 样式 权重不够 所以嵌套深
.main {
  #top {
    /deep/ img{width: 0.33rem;}
    .van-nav-bar {
      margin-top: 0;
      display: flex;
      align-items: center;
      padding-top: 0.35rem;
      /deep/ .van-nav-bar__left {
        top: 0.35rem;
        i {
          color: #fff;
        }
      }
      /deep/ .van-nav-bar__right {
        top: 0.35rem;
        i {
          color: #fff;
        }
      }
      &::after {
        border: none;
      }
      background-color: transparent;
    }
  }
}
.top .center {
  font-size: 0.34rem;
  display: flex;
  justify-content: center;
  span {
    margin: 0 0.22rem;
    color: #ccc;
    position: relative;
  }
  .active {
    font-size: 0.36rem;
    color: #fff;

    &::after {
      left: 50%;
      width: 0.36rem;
      height: 0.06rem;
      content: "";
      bottom: 0;
      display: block;
      height: 4px;
      border-radius: 1px;
      position: absolute;
      background: #c3ab87;
      transform: translate(-50%,10%);
    }
  }
}
.main {
  height: 100vh;
  position: relative;
}
</style>