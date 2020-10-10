<template>
  <div class="container">
    <div class="title">新竹城2期男组团7#1208</div>
    <div class="map">
      <img src="@/assets/images/shop/1589886826(1).png" />
    </div>
    <div class="concat">
      <div class="list">
        <div class="time">
          <div class="l">
            <span>自取时间</span>
            <span class="timer">16：04</span>
          </div>
          <van-icon name="arrow" size=".28rem" />
        </div>
        <div class="phone">
          <div class="l">
            <span>预留电话</span>
            <span class="phone-num">12345678910</span>
          </div>
          <van-icon name="arrow" size=".28rem" />
        </div>
      </div>
      <div class="agreement">
        <van-radio-group v-model="radio">
          <van-radio name="1" shape="square" checked-color="#c3ab87" icon-size=".26rem">
            同意
            <span>《到店自取服务协议》</span>
          </van-radio>
        </van-radio-group>
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
  margin-top: 0.4rem;
 
  >div:not(.detailed){
    padding-left: 0.45rem;
    padding-right: 0.45rem;
    background: #fff;
  }
  .title {
    font-size: 0.36rem;
    font-weight: 600;
  }
  .map {
    img {
      width: 100%;
      height: 3.75rem;
    }
    padding: 0.4rem .2rem;
  }
  .concat {
    .list {
      display: flex;
      font-size: 0.24rem;
      .time {
        padding-right: 0.2rem;
      }
      .phone {
        padding-left: 0.2rem;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 80%;
          left: 0;
          background: #f0f0f0;
          transform: translate(-50%, 0);
        }
      }
      > div {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .27rem;
        div {
          display: flex;
          flex-direction: column;
          span:first-child {
            color: #999;
          }
        }
      }
    }
    .agreement {
      display: flex;
      align-items: center;
      font-size: .27rem;
      margin: .2rem 0;
      span{
        color: #c3ab87;
      }
    }
    padding-bottom: 0.1rem !important;
    margin-bottom: 0.2rem;
  }
}
</style>