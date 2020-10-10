<template>
  <div class="container">
    <div class="shop-list" v-if="data.length > 0">
      <div class="item" v-for="(item,index) in 12" :key="index">
        <div class="icon">
          <img src="@/assets/images/user.png" />
        </div>
        <div class="center">
          <div class="name">永和豆浆旗舰店</div>
          <van-icon name="ellipsis" size=".32rem" color="#999"/>
        </div>
      </div>
    </div>
    <div class="tip" v-else>暂无收藏店铺</div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array,
      default: () => {
         return [];
      }
    }
  },
}
</script>

<style lang="less" scoped>

.container{
  padding:0 .45rem;
  .shop-list{
    padding-bottom: 0.1rem;
    .item{
      display: flex;
      align-items: center;
      padding: .23rem 0;
      position: relative;
      margin-bottom: 0.01rem;
        &::after{
          content:'';
          position: absolute;
          width: 85%;
          height: 1px;
          background: #efefef;
          right: 0;
          bottom: -.1rem;
        }
      .icon{
        img{
          width: 0.87rem;
          height: 0.87rem;
          // border-radius: 1rem;
        }
      }
      .center{
        display: flex;
        flex:1;
        justify-content: space-between;
        align-items: center;
        padding-left: 0.3rem;
        
        .name{
          font-size: .32rem;
        }
        .van-icon{
          transform: rotate(90deg);
        }
      }
    }
    .item:first-child{
      padding-top: 0;
    }
    .item:last-child{
      padding-bottom: .45rem;
    }
  }
}
</style>