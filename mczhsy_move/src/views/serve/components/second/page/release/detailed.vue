<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="发布" @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <keep-alive>
      <component :is="activeList[activeIndex-1]"></component>
    </keep-alive>
    <div class="next">
      <van-button round type="info" @click="next" color="#c3ab87">{{activeIndex == 2? '完成':'下一步'}}</van-button>
    </div>
  </div>
</template>

<script>
import first from "./components/first";
import twice from "./components/twice";
export default {
  components: {
    first,
    twice
  },
  data() {
    return {
      activeList: ["first", "twice"],
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
      if (this.activeIndex == 2) {
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
  margin-top: .33rem;
  margin-bottom: .69rem;
  font-size: .3rem;
  .van-button {
    width: 3.93rem;
    height: 0.87rem;
  }
}
</style>