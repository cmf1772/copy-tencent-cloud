<template>
  <div class="wrapper">
    <div class="list">
      <div class="item">
        <div class="value white">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <span>美城会员</span>
              <div class="pay" @click="payVip">去开通</div>

            </div>
          </div>
        </div>
        <div class="value black">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <div>
                <span>QQ会员</span>
                <p>有效期 2020-7-20</p>
              </div>
              <div class="pay" @click="detailed">查看</div>
            </div>
          </div>
        </div>
        <div class="value yellow">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <span>爱奇艺会员</span>
              <div class="pay" @click="payVip">去开通</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    payVip(){
      this.$router.push({
        path: "/mine/vip/open"
      })
    },
    detailed(){
      this.$router.push({
        path: "/mine/vip/details"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  margin-top: .3rem;
  .btn {
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
    .van-button {
      width: 4rem;
    }
  }
  .title {
    font-size: 0.32rem;
    margin: 0.3rem 0;
  }
  .item {
    display: flex;
    flex-direction: column;
    .value {
      background-size: 107% 113%;
      padding: 0.35rem;
      background-position: center center;
      overflow: hidden;
      box-shadow: 0 0 10px 1px #eee;
      border-radius: 0.1rem;
      padding: 0.35rem;
      height: 2rem;
      margin-bottom: 0.3rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      .top {
        display: flex;
        align-items: center;
        .name {
          padding-left: 0.2rem;
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            font-size: 0.28rem;
            font-weight: 600;
            display: block;
          }
          p{
            font-size: .24rem;
          }
          .pay{
            width: 1.2rem;
            text-align: center;
            width: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 0.53rem;
            margin-left: 0.3rem;
            font-size: .24rem;
            border: 1px solid #fff;
            border-radius: 1rem;
          }
        }
        .icon {
          border-radius: 1rem;
          box-sizing: border-box;
          border: 2px solid #fff;
          overflow: hidden;
          width: 0.9rem;
          height: 0.9rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .white {
    background: url(../../../../assets/images/icon/mine/vip/white.png);
  }
  .blue {
    background: url(../../../../assets/images/icon/mine/vip/blue.png);
  }
  .black {
    background: url(../../../../assets/images/icon/mine/vip/black.png);
  }
  .yellow {
    background: url(../../../../assets/images/icon/mine/vip/yellow.png);
  }
}
</style>