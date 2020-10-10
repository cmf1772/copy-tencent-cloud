<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow :title="activeIndex  + '/3房源信息'" @click-left="onClickLeft">
      <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template></van-nav-bar>
    </div>
    <keep-alive>
      <component :is="activeList[activeIndex-1]"></component>
    </keep-alive>
    <div class="next">
      <van-button round type="info" @click="next" color="#c3ab87">{{activeIndex == 3? '完成':'下一步'}}</van-button>
    </div>
  </div>
</template>

<script>
import first from "./components/first";
import twice from "./components/twice";
import three from "./components/three";
export default {
  components: {
    first,
    twice,
    three
  },
  data() {
    return {
      activeList: ["first", "twice", "three"],
      activeIndex: 1
    };
  },
  methods: {
    onClickLeft() {
      if (this.activeIndex == 1) {
        this.$router.go(-1);
      } else {
        this.activeIndex--;
      }
    },
    next() {
      if (this.activeIndex == 3) {
      } else {
        this.activeIndex++;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.next {
  display: flex;
  justify-content: center;
  .van-button {
    width: 3.93rem;
    height: 0.87rem;
  }
  margin-bottom: 0.45rem;
}
</style>