<template>
  <div class="topTop iconfont icon-huidaodingbu" @click="toTop()" v-show="isTop"></div>
</template>

<script>
export default {
  data() {
    return {
      isTop: false
    };
  },
  methods: {
    //根据防癌检测方案类型返回防癌检测方案标志
    toTop() {
      var timer = setInterval(function() {
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        if (osTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    }
  }
};
</script>

<style scoped lang="scss">
.topTop {
  width: 30px;
  height: 30px;
  position: fixed;
  right: 10px;
  bottom: 50px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 20;
  border-radius: 50%;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 30px;
}
</style>
