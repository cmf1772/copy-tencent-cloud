<template>
  <div class="footer flex-around">
    <router-link to="/serve/second/index" replace :class="{'on':setActive('/index')}">
      <div class="wrap">

      
      <div class="img-view">
        <img src="@/assets/images/icon/serve/house/home.png" alt class="s1" />
        <img src="@/assets/images/icon/serve/house/home_checked.png" class="s2" alt />
      </div>
      <span class="s2-text">首页</span></div>
    </router-link>
    <router-link to="/serve/second/release" replace :class="{'on':setActive('/release')}">
      <div class="wrap">

      
      <div class="img-view">
        <img src="@/assets/images/icon/serve/house/add.png" alt class="s1" />
        <img src="@/assets/images/icon/serve/house/add_checked.png" class="s2" alt />
      </div>
      <span class="s2-text">发房源</span></div>
    </router-link>
    <router-link to="/serve/second/mine" replace :class="{'on':setActive('/mine')}">
      <div class="wrap">

      
      <div class="img-view">
        <img src="@/assets/images/icon/serve/house/mine.png" alt class="s1" />
        <img src="@/assets/images/icon/serve/house/mine_checked.png" class="s2" alt />
      </div>
      <span class="s2-text">我的</span></div>
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
  padding: 0.2rem 0;
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
}
.wrap{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer .on {
  color: #000;
  font-weight: bold;
}
.footer span {
  display: block;
  text-align: center;
}
.footer .s2-text {
  font-size: 0.2rem;
}
.img-view {
  max-width: 0.4rem;
  min-height: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
     width: auto;
     max-width: 100%;
    display: block;
  }
}
.footer .s2 {
  display: none;
}
.on .s1 {
  font-size: 0.4rem;
  display: none;
}
.on .s2 {
  display: block;
}
.on .s2-text {
  font-weight: bold;
}
</style>