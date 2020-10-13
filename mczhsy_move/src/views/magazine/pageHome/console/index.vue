<template>
  <div class="cosole">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="控制台"
                   left-text
                   left-arrow
                   @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="box">
      <div class="item"
           @click="$router.push('/console/business')"
           style="border-right: solid #F1F1F1 1px;border-bottom: solid #F1F1F1 1px;">
        <div>
          <p style="font-size: 0.3rem;font-family: PingFang SC;font-weight: bold;color: #000000;">商家</p>
          <p style="font-size: 0.2rem;font-family: PingFang SC;font-weight: bold;color: #777777;">控制台</p>
        </div>
        <img src="@/assets/images/serve/recovery/ss4.png"
             alt="">
      </div>
      <div class="item"
           style="border-bottom: solid #F1F1F1 1px;"
           @click="$router.push('/console/onlineContract')">
        <div>
          <p style="font-size: 0.3rem;font-family: PingFang SC;font-weight: bold;color: #000000;">网约工</p>
          <p style="font-size: 0.2rem;font-family: PingFang SC;font-weight: bold;color: #777777;">控制台</p>
        </div>
        <img src="@/assets/images/serve/recovery/ss4.png"
             alt="">
      </div>
      <div class="item">
        <div>
          <p style="font-size: 0.3rem;font-family: PingFang SC;font-weight: bold;color: #000000;">服务商</p>
          <p style="font-size: 0.2rem;font-family: PingFang SC;font-weight: bold;color: #777777;">控制台</p>
        </div>
        <img src="@/assets/images/serve/recovery/ss4.png"
             alt="">
      </div>
      <div class="item"
           style="border-left: solid #F1F1F1 1px;">
        <div>
          <p style="font-size: 0.3rem;font-family: PingFang SC;font-weight: bold;color: #000000;">城市站</p>
          <p style="font-size: 0.2rem;font-family: PingFang SC;font-weight: bold;color: #777777;">控制台</p>
        </div>
        <img src="@/assets/images/serve/recovery/ss4.png"
             alt="">
      </div>
    </div>

    <div class="tip">
      <div class="left">
        <p style="font-size: 0.36rem;font-family: PingFang SC;font-weight: 400;color: #000000;">还没加入？</p>
        <p style="font-size: 0.24rem;font-family: PingFang SC;font-weight: 400;color: #777777;margin-top: 0.2rem">即刻入驻，开启智慧商业新时代 </p>
      </div>
      <img src="@/assets/images/none.jpg"
           alt="">
    </div>

    <ul class="list">
      <li class="item">
        <div>
          <van-icon name="shopping-cart-o" />
          <p>商家入驻</p>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="item">
        <div>
          <van-icon name="chat-o" />
          <p>网约工入驻</p>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="item">
        <div>
          <van-icon name="user-o" />
          <p>服务商入驻</p>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="item">
        <div>
          <van-icon name="contact" />
          <p>开发者入驻</p>
        </div>
        <van-icon name="arrow" />
      </li>
      <li class="item">
        <div>
          <van-icon name="hotel-o" />
          <p>城市站加盟</p>
        </div>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'console',
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="scss" scoped>
.list {
  width: 85%;
  margin: 0 auto;
  .item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    > div {
      display: flex;
      height: 100%;
      align-items: center;
      > i {
        font-size: 0.3rem;
        margin-right: 0.3rem;
      }
      > p {
        font-size: 0.28rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }
    }
    > i {
      font-size: 0.28rem;
    }
  }
}
.box {
  width: 85%;
  display: flex;
  flex-wrap: wrap;

  margin: 0.3rem auto;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  .item {
    width: 49%;
    display: flex;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
    > div {
      width: 1rem;
      height: 0.6rem;
      margin-right: 0.5rem;
    }
    > img {
      width: 0.7rem;
      border-radius: 100%;
    }
  }
}
.tip {
  width: 85%;
  display: flex;
  height: 2rem;
  flex-wrap: wrap;
  margin: 0.3rem auto;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 2rem;
    margin-left: 0.2rem;
  }
}
</style>