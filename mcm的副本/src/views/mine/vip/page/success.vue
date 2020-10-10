<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="支付成功" left-text left-arrow @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
      <div class="container">
        <img src="@/assets/images/icon/mine/vip/success.png" alt />
        <div class="tip">
          <span>美城网会员开通成功</span>
          <div class="time">
            美城网会员有效期截止
            <span>2020-7-31</span>
          </div>
        </div>
      </div>
      <div class="btn-list">
        <div>我的会员</div>
        <div>回到首页</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
  .container{
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      width: 1.64rem;
      height: 1.64rem;
    }
    span{
      display: block;
    }
    .tip {
      margin-top: 0.8rem;
      text-align: center;
      span{
      font-size: .42rem;
      
    }
    }
    .time{
      margin-top: 0.3rem;
      font-size: .3rem;
      span{
        color: #c3ab87;
        font-size: .3rem;
        display: inline-block;
      }
    }
  }
  .btn-list{
    display: flex;
    padding: 0 .45rem;
    justify-content: space-between;
    div{
      width: 3.08rem;
      height: 0.9rem;
      border: 1px solid #c3ab87;
      border-radius: 1rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: .3rem;
    }
    div:first-child{
      color: #c3ab87;
    }
    div:last-child{
      background: #c3ab87;
      color: #fff;
    }
  }
</style>