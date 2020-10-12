<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="支付中心" left-text left-arrow @click-left="onClickLeft" >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <van-cell-group>
        <van-cell title="实名认证" value="已认证" is-link />
        <van-cell title="修改支付密码" is-link />
        <van-cell title="急速支付" label="急速支付，快人一步" >
          <template #default>
            <van-switch v-model="checked1" size=".24rem" active-color="#c3ab87"/>
          </template>
        </van-cell>
        <van-cell title="小额免密" label="开启后，支付时无需输入密码或指纹" >
          <template #default>
            <van-switch v-model="checked2" size=".24rem" active-color="#c3ab87"/>
          </template>
        </van-cell>
        <van-cell title="自动扣款" is-link />
        <van-cell
          title="指纹支付"
          label=""
        >
          <template #label>
            <div class="value">
                开启后，支付时无需输入密码或指纹同意<span>《指纹服务协议》</span>
            </div>
          </template>
          <template #default>
            <van-switch v-model="checked" size=".24rem" active-color="#c3ab87"/>
          </template>
        </van-cell>
        <van-cell title="常见问题" is-link />
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
      checked2:false,
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
  /deep/ .van-cell__title{
    font-weight: 400;
  }
  /deep/ .value{
    span{
      color:#c3ab87;
      font-size: .2rem;
    }
  }
  /deep/ .van-cell__value{
    flex: none;
    min-width: .6rem;
    
  }
  /deep/ .van-cell__label{
        font-size: .21rem;
      }
}
</style>