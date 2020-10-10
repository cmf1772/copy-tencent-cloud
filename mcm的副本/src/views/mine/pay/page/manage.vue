<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="支付管理" left-text left-arrow @click-left="onClickLeft" >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <van-cell-group>
        <van-cell title="实名认证" value="已认证" is-link />
        <van-cell title="修改支付密码" is-link />
        <van-cell title="忘记支付密码" is-link />
        <van-cell title="指纹支付" label="开启后，转账或消费时，可通过验证指纹快速完成付款" >
          <template #default>
            <van-switch v-model="checked1" size=".24rem" active-color="#c3ab87"/>
          </template>
        </van-cell>
        <van-cell
          title="允许通过手机号向我转账"
          label=""
        >
          <template #label>
            <div class="value">
                他人可进入“收付款>向银行卡或手机号转账”，向你的微信绑定银行卡转账收款将存于零钱，开启即同意<span>服务协议</span>
            </div>
          </template>
          <template #default>
            <van-switch v-model="checked" size=".24rem" active-color="#c3ab87"/>
          </template>
        </van-cell>
        <van-cell title="扣费服务" is-link />
        <van-cell title="转账到账时间" value="实时到账" is-link />
        <van-cell title="红包退款方式" value="退回原支付方式" is-link />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      checked:false,
      checked1:false,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    myFn(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang="less" scoped>
.van-cell{
  padding: .36rem .45rem;
  font-size: .3rem;
  /deep/ .value{
    span{
      color:#c3ab87;
      font-size: .21rem;
    }
  }
  /deep/ .van-cell__value{
    flex: none;
    min-width: .6rem;
  }
}
</style>