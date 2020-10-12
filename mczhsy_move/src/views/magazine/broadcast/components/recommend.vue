<template>
  <div class="main">


    <!-- banner -->
    <div class="banner-s">
      <swipers :list="bannerList" :option="swiperOption"></swipers>
    </div>

    <div class="container">
      <div class="title">推荐</div>
      <div class="list">
        <div class="commit" @click="play" v-for="(item,index) in commitList2" :key="index">
          <div class="img-view">
            <img :src="item.src">
          </div>
          <span class="text">
            {{item.text}}
          </span>
      </div>
      </div>
      
      <div class="title">必听</div>
      <div class="list">
        <div class="commit " v-for="(item,index) in commitList" :key="index">
          <div class="img-view">
            <img :src="commitList[index].src">
          </div>
          <span class="text">
            {{commitList[index].text}}
          </span>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import swipers from "@/components/swipers/swiper_component"; //大banner
export default {
  components: {  swipers },
  data() {
    return {
      bannerList: [
        require("@/assets/images/magazine/music/0ae31b06dcd2a3dc3da5c2bab9c4756154d9ef0a3b98a-WlVNMq_fw658.jpg"),
        require("@/assets/images/magazine/music/banner1.jpg"),
        require("@/assets/images/magazine/music/6630c6b553544f309dc0b69d73b0e177_th.jpeg"),
        require("@/assets/images/magazine/music/40288a3f4c511992014c51221d340002.jpg")
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          // delay: 2000,
          disableOnInteraction: false
        },
        loop: true
      },
      commitList:[
        { src:require("@/assets/images/magazine/music/img1.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/img2.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/img3.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/img4.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/img5.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/img6.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
      ],
      commitList2:[
        { src:require("@/assets/images/magazine/music/u=1996809251,1732198728&fm=26&gp=0.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/u=2466454120,4012831513&fm=26&gp=0.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/u=2564955121,1381089475&fm=26&gp=0.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/20200421103230.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/u=2466454120,4012831513&fm=26&gp=0.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
        { src:require("@/assets/images/magazine/music/u=2564955121,1381089475&fm=26&gp=0.jpg"), text:'颜值报表的渐变色蛋卷一个鸡蛋做一堆'},
      ]
    };
  },
  methods: {
    play(){
      this.$router.push({
        name:'play'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.search {
  margin: 0.2rem 0;
  padding: 0 0.2rem;
}
.main > .banner-s {
  margin: 0.2rem 0;
  /deep/ img {
    max-height: 200px;
    border-radius: 5px;
  }
}

// 主要内容
.container{
  .banner-s{
    
    padding: 0;
    .banner{
      padding:0;
    }
  }
  .title{
    font-size: .42rem;
    font-weight: 600;
    margin-top: 1.15rem;
    margin-bottom: 0.42rem;
  }
  .list{
    margin: .2rem 0;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: .22rem;
    .img-view{
      width: 3.19rem;
      height: 3.19rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      overflow: hidden;
      position: relative;
      &::before{
        content:'';
        width: .4rem;
        height: .25rem;
        background: url('../../../../assets/images/icon/index/video.png');
        background-size: 100% 100%;
        z-index: 999;
        position: absolute;
        left: .2rem;
        bottom: .2rem;
      }
    }
    img{
      height: 100%;
      width: auto;
      border-radius: 5px;
    }
    .text{
      font-size: .25rem;
      padding: .1rem 0;
      margin-bottom: 0.15rem;
      display: inline-flex;
      line-height: .3rem;
    }
  }
}
</style>