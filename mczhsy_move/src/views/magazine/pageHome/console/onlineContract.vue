<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="网约工控制台"
                   left-text
                   left-arrow
                   @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="tip">
      <div class="tItem">
        <img src="@/assets/images/sys.jpg"
             alt="">
        <p>扫一扫</p>
      </div>
      <div class="tItem">
        <img src="@/assets/images/zc.jpg"
             alt="">
        <p>收款</p>
      </div>
      <div class="tItem">
        <img src="@/assets/images/rwm.jpg"
             alt="">
        <p>扫一扫</p>
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
        <div @click="$router.push('/serve/recovery/recycler')">
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
  name: 'onlineContract',

  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  width: 85%;
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
.tip {
  width: 85%;
  margin: 0 auto;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: solid #f1f1f1 1px;
  box-sizing: border-box;
  padding: 0 0.2rem;

  .tItem {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      width: 0.43rem;
      margin-bottom: 0.2rem;
    }
    > p {
      font-size: 0.24rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
    }
  }
}
</style>