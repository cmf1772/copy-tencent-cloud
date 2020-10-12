<template>
  <div class="footer flex-around">
    <router-link to="" replace :class="{'on':setActive('/index')}">
      <span class="s1 iconfont icon-book"></span>
      <span class="s2">首页</span>
    </router-link>
    <router-link to="" replace :class="{'on':setActive('/community')}">
      <span class="s1 iconfont icon-dialog"></span>
      <span class="s2">全部</span>
    </router-link>
    <router-link to="" replace :class="{'on':setActive('/shop')}">
      <span class="s1 iconfont icon-shop"></span>
      <span class="s2">分类</span>
    </router-link>
    <router-link to="" replace :class="{'on':setActive('/serve')}">
      <span class="s1 iconfont icon-fuwu"></span>
      <span class="s2">客服</span>
    </router-link>
    <router-link to="" replace :class="{'on':setActive('/mine')}">
      <span class="s1 iconfont icon-mine"></span>
      <span class="s2">会员</span>
    </router-link>


  </div>
</template>

<script>
export default {
  data() {
    return {
      user_name: this.$store.state.user_name,
    };
  },
  mounted() {
    
  },
  computed:{
    setActive(){
      return function(path) {
        return this.$route.path.includes(path);
      }
      
    }
  },
  props: {
    checked: {
      type: Number,
      default: 0
    },
    footerShow: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  padding: 0.1rem 0;
  background: #fff;
  box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
}
.footer .on {
  // color: #000;
  // font-weight: bold;
}
.footer span {
  display: block;
  text-align: center;
}
.footer .s1 {
  font-size: .4rem;
}
.footer .s2 {
  font-size: .2rem;
}
</style>