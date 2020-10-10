<template>
  <div class="nav-title">
    <div class="top-nav">
      <h5 class="second-title"> <slot name="left"></slot></h5>
      <div class="more" @click="forward"><slot name="right"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    urlName:{
      type:String,
      default:''
    }
  },
  data() {
    return {};
  },
  methods: {
    forward() {
      if(!this.urlName) return
      this.$router.push({
        name:this.urlName
      });
    }
  }
};
</script>
<style lang="less" scoped>
.top-nav {
  display: flex;
  justify-content: space-between;
  font-size: 0.24rem;
  align-items: center;
  margin-bottom: .36rem;
  h5 {
    font-size: 0.44rem;
  }
}
</style>