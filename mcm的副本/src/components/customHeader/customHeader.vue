<template>
  <div class="header">
    <span class="s1" v-show="backShow" @click="goBack()">
      <font class="icon-fanhui iconfont"></font>
    </span>
    <span class="s2">{{ title }}</span>
    <div class="s3" v-show="isloginstate&&(!$store.state.isWechat)">
      <span class="s3_1 oe">Hello,{{ this.$store.state.user_name }}</span>
      <span class="s3_2" @click="$pageLoginOut()">安全退出</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_name: this.$store.state.user_name
    };
  },
  mounted() {},
  props: {
    title: {
      type: String,
      default: ""
    },
    backShow: {
      type: Boolean,
      default: true
    },
    isloginstate: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped lang="scss">
.header{line-height:1.3;font-weight: 700;color: #fff;padding:0.15rem 0;position: fixed;z-index: 10;left: 0;top: 0;width: 100%;background-image: linear-gradient(45deg, #0081ff, #1cbbb4);border: none;float: left;box-sizing:border-box;height:1rem;}
.header .s1{padding:0 15px;}
.header .s1 font{font-size:0.28rem}
.header .s2{font-size: 0.28rem;line-height:0.7rem;}
.header .s3{position: absolute;font-size:0.2rem;display:block;right:15px;top:50%;font-weight:normal;margin-top:-0.25rem;}
.header .s3_1{font-size:0.2rem;display:block;width:1.8rem;text-align:right;}
.header .s3_2{background: #F15353;border-radius:3px;padding:0.03rem 5px;float:right;margin-top:0.04rem;}
</style>