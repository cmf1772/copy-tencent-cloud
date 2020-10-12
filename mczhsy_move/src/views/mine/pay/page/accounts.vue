<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="转账" left-text left-arrow @click-left="onClickLeft" >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container warp">
      <div class="title">对方账户</div>
      <div class="input-view">
          <van-field v-model="value" placeholder="美城账户/手机号码" />
          <div class="tx">
             <img src="@/assets/images/icon/mine/pay/friends.png" />
          </div>
      </div>
      <div class="tip">
        <van-icon name="info-o" color="#c3ab87" size=".24rem"/>钱将实时转入对方账户，无法退款
      </div>

      <div class="btn">
        <van-button round type="info" @click="nextAccounts">下一步</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    nextAccounts(){
      this.$router.push({
        path: "/mine/pay/nextaccounts"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.warp {
  padding: 0.2rem .45rem;
  .btn {
    margin-top: 1rem;
    display: flex;
    justify-content: center;

    .van-button {
      width: 3.93rem;
      height: 0.87rem;
      background: #c3ab87;
      border: none;
    }
  }
  .tip{
    display: flex;
    align-items: center;
    color: #c3ab87;
    margin: .4rem 0;
    .van-icon{
      margin-right: 0.1rem;
    }
    font-size: .2rem;
  }
  .input-view{
    .van-cell{
    font-size: .32rem;
    padding: .2rem 0;
    /deep/ input{
      font-size: .36rem;
    }
  }
    display: flex;
    align-items: center;
    .tx{
      img{
        width: 1.43rem;
        height: 0.48rem;
      }
    }
  }
  .title {
    font-size: 0.27rem;
    font-weight: 600;
    padding: 0.3rem 0;
  }
  
}
</style>