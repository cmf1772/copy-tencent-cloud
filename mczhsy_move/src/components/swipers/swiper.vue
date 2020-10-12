<template>
  <div class="banner">
    <swiper :options="option">
      <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index" >
        <img :src="item.img" :alt="item.label" :title="item.label" @click="forWard(item.url)"/>
        <div class="text" v-if="textList.length">
          <p>{{textList[index].title}}</p>
          <span>{{textList[index].sub_title}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          pagination: {
            el: ".swiper-pagination"
          },
          loop: true
        };
      }
    },
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    textList:{
      type:Array,
      default:() =>{
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods:{
    forWard(url){
      console.log(url);
      this.$router.push({
        path:url
      })
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  // width: 98vw;
  margin: 0 auto;
  padding: 0.15rem;
  padding-bottom: 0;
  box-sizing: border-box;
  position: relative;
  /deep/ .swiper-slide{
    width: 100% !important;
    border-radius: .05rem;
    overflow: hidden;
  }
}
.banner img {
  width: 6.6rem;
  height: 6.44rem;
}
.swiper-pagination /deep/ .swiper-pagination-bullet {
  background: #fff;
  border-radius: 8px;
  opacity: 1;
}
.swiper-pagination /deep/ .swiper-pagination-bullet-active {
  background: #c3ab87;
  width: 16px;
  transition: 0.2s;
}
.text{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + .5px),calc(-50% + .5px));
  // top: 0;
  // left: 0;
  z-index: 9;
  flex-direction: column;
  color: #fff;
  p{
    text-align: center;
    font-size: .45rem;
  }
  span{
    font-size: .28rem;
    margin-top: 0.33rem;
    word-break:keep-all;
  }
}
</style>