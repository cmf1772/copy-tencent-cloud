<template>
  <div class="success">
    <div class="top">
      <van-nav-bar title="预约成功"
                   left-text
                   left-arrow
                   @click-left="onClickRight">
        <template v-slot:left>
          <div></div>
        </template>
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <img src="@/assets/images/serve/success.png"
           alt="">
      <p>订单预约成功</p>
      <span>您的回收订单已提交，正等待回收员接单</span>
    </div>

    <div class="bottom">
      <div class="botton"
           @click="goDetial">
        查看订单
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'success',

  methods: {
    onClickRight () {
      this.$router.go(-1);
    },

    goDetial () {
      this.$router.push('/serve/myOrder')
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom {
  width: 100%;
  .botton {
    width: 3.93rem;
    height: 0.87rem;
    border-radius: 0.44rem;
    line-height: 0.87rem;
    text-align: center;
    background: #c4ac88;
    margin: 2rem auto 0;

    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #ffffff;
  }
}

.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 1.69rem;
    height: 1.69rem;
    margin-top: 2.11rem;
    margin-bottom: 0.71rem;
  }
  > p {
    font-size: 0.43rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0.52rem;
  }
  > span {
    font-size: 0.31rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #787878;
  }
}
</style>