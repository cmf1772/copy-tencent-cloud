<template>
  <div class="footer flex-around">
    <router-link to="/index"
                 replace
                 :class="{'on':setActive('/index')}">
      <div class="img-view">
        <img src="@/assets/images/icon/index/magazine.png"
             alt
             class="s1" />
        <img src="@/assets/images/icon/index/magazine_checked.png"
             class="s2"
             alt />
      </div>
      <span class="s2-text">首页</span>
    </router-link>
    <router-link to="/community"
                 replace
                 :class="{'on':setActive('/community')}">
      <div class="img-view">
        <img src="@/assets/images/icon/index/community.png"
             alt
             class="s1" />
        <img src="@/assets/images/icon/index/community_checked.png"
             class="s2"
             alt />
      </div>
      <span class="s2-text">社区</span>
    </router-link>
    <router-link to="/shop"
                 replace
                 :class="{'on':setActive('/shop')}">
      <div class="img-view">
        <img src="@/assets/images/icon/index/shop.png"
             alt
             class="s1" />
        <img src="@/assets/images/icon/index/shop_checked.png"
             class="s2"
             alt />
      </div>
      <span class="s2-text">商店</span>
    </router-link>
    <router-link to="/serve"
                 replace
                 :class="{'on':setActive('/serve')}">
      <div class="img-view">
        <img src="@/assets/images/icon/index/serve.png"
             alt
             class="s1" />
        <img src="@/assets/images/icon/index/serve_checked.png"
             class="s2"
             alt />
      </div>
      <span class="s2-text">服务</span>
    </router-link>
    <router-link to="/mine"
                 replace
                 :class="{'on':setActive('/mine')}">
      <div class="img-view">
        <img src="@/assets/images/icon/index/mine.png"
             alt
             class="s1" />
        <img src="@/assets/images/icon/index/mine_checked.png"
             class="s2"
             alt />
      </div>
      <span class="s2-text">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user_name: this.$store.state.user_name
    };
  },
  mounted () { },
  computed: {
    setActive () {
      return function (path) {
        return this.$route.path.includes(path);
      };
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
  padding: 0.15rem 0;
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0 0 2px rgba($color: #000000, $alpha: 0.2);
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
  img {
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