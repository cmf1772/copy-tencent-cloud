<template>
  <div class="business">
    <div class="top">
      <van-nav-bar title="填写回收信息"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/sean.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="box">
      <div class="item"
           v-for="item in 6">
        <img src="@/assets/images/one.jpg"
             alt="">
        <p>卖家待付款</p>
      </div>
    </div>

    <ul class="list">
      <li>
        <div>
          <img src="@/assets/images/icon/waimai.png"
               alt="">
          <div>
            <p>外卖</p>
            <p>控制台</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/images/icon/chuxing.png"
               alt="">
          <div>
            <p>出行</p>
            <p>控制台</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/images/icon/shansong.png"
               alt="">
          <div>
            <p>闪送</p>
            <p>控制台</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/images/icon/kuaidi.png"
               alt="">
          <div>
            <p>快递</p>
            <p>控制台</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/images/icon/huishou.png"
               alt="">
          <div>
            <p>回收</p>
            <p>控制台</p>
          </div>
        </div>
      </li>
      <li>
        <div>
          <img src="@/assets/images/icon/yihu.png"
               alt="">
          <div>
            <p>一呼</p>
            <p>控制台</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'business',
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickRight () { },
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  border-top: solid #f1f1f1 1px;
  margin: 0 auto;
  > :nth-child(odd) {
    > div {
      border-right: solid 1px #f1f1f1;
    }
  }
  > li {
    width: 49%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #f1f1f1;
    > div {
      width: 100%;
      height: 1.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        width: 0.52rem;
        height: 0.42rem;
        margin-right: 0.3rem;
      }
      > div {
        :first-child {
          font-size: 0.3rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: #000000;
          line-height: 0.4rem;
        }
        :last-child {
          font-size: 0.25rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: #777777;
          line-height: 0.4rem;
        }
      }
    }
  }
}
.box {
  width: 85%;
  height: 3.31rem;
  background: #f5f8ff;
  box-shadow: 0px 0.03rem 0.16rem 0px rgba(0, 0, 0, 0.1);
  border-radius: 0.14rem;
  margin: 0.4rem auto;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 33.33%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 0.43rem;
    }
    > p {
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
      margin-top: 0.2 rem;
    }
  }
}
</style>