<template>
  <div class="main">
    <div class="nav">
      <top-nav>
        <template v-slot:left>美食</template>
        <template v-slot:right>
          <img src="@/assets/images/icon/index/xiangji.png" alt="">
        </template>
      </top-nav>
    </div>
    <div class="warp">
      <search>
      </search>

      <!-- 导航栏 -->
      <div class="title">
        <ul>
          <li class="active" @click="changeView('consulting')">咨询</li>
          <li>聚焦</li>
          <li>寻味</li>
          <li>人物</li>
          <li>专访</li>
        </ul>
      </div>

      <div :is="currentView"></div>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import topNav from "@/components/nav/nav"
import search from '@/components/search/search'
import consulting from './components/consulting'
import footerBar from '@/components/customFooter/customFooter'
export default {
  name: "food_index",
  components: {
    topNav,search,consulting,footerBar
  },
  data(){
    return{
      currentView: 'consulting'
    }
  },
  methods:{
    changeView(view){
      this.currentView = view
    }
  }
};
</script>

<style lang="less" scoped>

.main{
  padding: 0 .45rem;
  margin-bottom: 70px;
  
  .nav{
    padding-top: .25rem;
    margin-bottom: 0;
    /deep/ img{
      width: 0.4rem;
    }
  }
}
.title{
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 0;
    li{
      font-size: .34rem;
      color: #B5B5B5;
      font-family: PingFang SC;
      position: relative;
      transition: .2s;
    }
    .active{
      font-weight: bold;
      color: #000;
      position: relative;
      font-size: .36rem;
      &::after{
        content:'';
        width: 60%;
        position: absolute;
        height: .06rem;
        border-radius: 0.4rem;
        display: block;
        bottom: -0.15rem;
        transform:  translate(40%);
        background: #C3AB87;
      }
    }
  }
}
</style>