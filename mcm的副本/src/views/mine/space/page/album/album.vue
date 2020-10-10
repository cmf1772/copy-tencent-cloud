<template>
  <div class="main">
    <pub-head></pub-head>
    <div class="container">
      <div class="list">
        <div class="item" v-for="(item,index) in 20" :key="index">
          <div class="img">
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
          <div class="title">产品相册</div>
          <span class="num">4张</span>
        </div>
      </div>
    </div>
    <div class="release" @click="release">
      <van-icon name="plus" size=".6rem"/>
    </div>
    <pub-foot></pub-foot>
  </div>
</template>

<script>
import pubHead from "./components/publichead";
import pubFoot from "./components/publicfoot";
export default {
  components: { pubHead, pubFoot },
  methods:{
    release(){
      this.$router.push({
        path: "/mine/space/album/release",
      })
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.2rem .45rem;
  padding-bottom: 70px;
  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.17rem;
    .item {
      img {
        width: 100%;
        height: 3.14rem;border-radius: 0.05rem;
      }
      .title {
        font-size: 0.27rem;
        font-weight: bold;
        margin-top: 0.1rem;
      }
      .num {
        font-size: 0.2rem;
        color: #777;
        display: block;
        margin-bottom: 0.2rem;
      }
    }
  }
}
.release {
  position: fixed;
  right: 0.45rem;
  bottom: 1.8rem;
  display: flex;
  flex-direction: column;
  font-size: 0.24rem;
  text-align: center;
  justify-content: center;
  width: 1.4rem;
  height: 1.4rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 30px 1px #ccc;
}
</style>