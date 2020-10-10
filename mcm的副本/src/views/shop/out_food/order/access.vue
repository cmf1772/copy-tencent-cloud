<template>
  <div class="container">
    <div class="title">
      <div class="adress">
        <div class="a-t">
          <div class="a-t-l">
            <div>家</div>
            <span>新竹城2期男组团7#1208</span>
          </div>
          <div class="a-t-r">
            <van-icon name="arrow" size=".32rem"/>
          </div>
        </div>
        <div class="a-f">
          中年少女（女士）1234567890
        </div>
      </div>
      <div class="go">
        <div class="g-t">
          <span>
            立即送出
          </span>
          <div class="g-t-r">
            <span>约17：35送达</span><van-icon name="arrow" size=".32rem"/>
          </div>
        </div>
        <span>为减少时间，封闭管路时，请在地址中更新取餐地点</span>
      </div>
    </div>
    <detailed></detailed>
  </div>
</template>

<script>
import detailed from '../components/order_detailed'
export default {
  components:{
    detailed
  },
  data() {
    return {
      radio: ""
    };
  }
};
</script>

<style lang="less" scoped>
.container {
  background: #f7f7f7;
  margin-top: 0.6rem;
  > div:not(.detailed) {
    padding-left: 0.45rem;
    padding-right: 0.45rem;
    background: #fff;
  }
  .title{
    padding-bottom: 0.2rem;
    margin-bottom: 0.2rem;
    display: flex;
    flex-direction: column;
    .adress{
      display: flex;
      flex-direction: column;
      margin-bottom: 0.3rem;
      .a-t{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .a-t-l{
          font-size: .24rem;
          display: flex;
          align-items: center;
          div{
            background: #F6F2ED;
            font-size: .2rem;
            width: 0.28rem;
            height: 0.28rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.06rem;
            margin-right: 0.1rem;
            color: #c3ab87;
            border: 1px solid #c3ab87;
          }
          span{
            font-size: .36rem;
            font-weight: bold;
          }
        }
        .a-t-r{
          display: inline-flex;
        }
      }
      .a-f{
        font-size: .2rem;
        color: #999;
        margin-top: 0.05rem;
      }
    }
    .go{
      margin-top: 0.2rem;
       display: flex;
      flex-direction: column;
      .g-t{
        display: flex;
        justify-content: space-between;
        font-size: .3rem;
        .g-t-r{
          span{
            color: #c3ab87;
            margin-right: 0.1rem;
          }
          display: flex;
          align-items: center;
        }
      }
      >span{
         font-size: .2rem;
        color: #c3ab87;
        margin-top: 0.1rem;
      }
    }
  }
}
</style>