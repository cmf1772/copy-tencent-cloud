<template>
  <div class="main">
    <div class="container">
      <div class="list">
        <div class="item" @click="detailed" v-for="(item,index) in list " :key="index">
          <!-- 左边头像 -->
          <div class="icon">
            <img :src="item.icon" alt />
          </div>
          <div class="content">
            <div class="user">
              <!-- 姓名时间 -->
              <div class="name">
                <p>{{item.name}}</p>
                <div class="times">
                  <span class="day">{{item.d}}</span>
                  <span class="time">{{item.t}}</span>
                  <span class="star">待回收</span>
                </div>
              </div>
              <!-- 右边 -->
              <div class="btn"><img src="@/assets/images/icon/serve/recovery/phone.png" alt="" style="width:.2rem;margin-right:.05rem"> 拨打电话</div>
            </div>
            <p>订单编号:{{item.order}}</p>
            <p>上门地址:{{item.adress}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
        {
          icon:require('@/assets/images/index/banner4.jpg'),
          name:'李先生',
          d:'2020-1-36',
          t:'16:30',
          order:'15646646849498',
          adress:'成都市金牛区羊犀立交111222'
        },
      ]
    }
  },
  methods:{
    detailed(){
      this.$router.push({
        path: "/serve/recovery/order/detailed",
      })
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .item {
    padding: .4rem 0;
    display: flex;
    .icon {
      img {
        width: 1.03rem;
        height: 1.03rem;
        border-radius: 100%;
      }
    }
    .content{
      flex:1;
      padding-left: .2rem;
      .user{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name{
          >p{
            font-size: .3rem;
            font-weight: 400;
            color: #000;
          }
          display: flex;
          flex-direction: column;
          .times{
            font-size: .24rem;
            span:not(:last-child){
              color:#999;
              margin-right: 0.07rem;
            }
            .star{
              color:#C3AB87;
              position: relative;
              margin-left: .2rem;
              &::before{
                content:'';
                display: block;
                width: 1px;
                height: 100%;
                background: #C3AB87;
                position: absolute;
                left: -.1rem;
                top: 0;
              }
            }
          }
        }
        .btn{
          background: #f7f7f7;
          color: #C3AB87;
          width: 1.54rem;
          height: 0.48rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .21rem;
          border-radius: .5rem;
          border:#C3AB87 1px solid;
        }
        margin-bottom: 0.2rem;
      }
      p{
        font-size: .24rem;
        color: #999;
        margin: 0.02rem 0;
        
      }
    }
  }
}
</style>