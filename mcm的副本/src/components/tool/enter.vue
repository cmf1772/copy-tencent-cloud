<!--
 * @Author: liangsir
 * @Date: 2020-05-27 11:35:57
 * @LastEditors: liangsir
 * @LastEditTime: 2020-05-27 15:11:51
 * @Description: 
--> 
<template>
  <div class="enter">
    <span class="loginout enterli" @click="$pageLoginOut()"><font>安全退出</font></span>
    <a href="/mine" class="center enterli"><font>个人中心</font></a>
  </div>
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
.enter{width: 40px;position: fixed;right: 0;bottom: 250px;background: rgba(0, 0, 0, 0.6);z-index: 20;font-size: 12px;color: #fff;text-align: center;line-height: 30px;border-radius:4px 0  0 4px}
.enter{line-height:16px;}
.enterli{display:block;padding:5px 3px;}
.loginout{border-bottom:1px solid rgba(255, 255, 255, 0.2);}
.enter a{color:#fff;}
</style>



