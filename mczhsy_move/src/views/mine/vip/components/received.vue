<template>
  <div class="wrapper">
    <div class="list">
      <div class="item">
        <div class="title">附近可用</div>
        <div class="value white">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <span>电子公交卡</span>
              <p>苏州</p>
            </div>
          </div>
          <div class="foot">
            <div class="btn-list">
              <div>去刷吗</div>
              <div>小程序</div>
            </div>
          </div>
        </div>
        <div class="value blue">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <span>电子公交卡</span>
              <p>苏州</p>
            </div>
          </div>
          <div class="foot">
            <div class="btn-list">
              <div>去刷吗</div>
              <div>小程序</div>
            </div>
          </div>
        </div>
        <div class="value yellow">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <span>电子公交卡</span>
              <p>苏州</p>
            </div>
          </div>
          <div class="foot">
            <div class="btn-list">
              <div>去刷吗</div>
              <div>小程序</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">更多</div>
        <div class="value  black">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <span>海王星辰药房会员卡</span>
            </div>
          </div>
          <div class="foot"></div>
        </div>
        <div class="value yellow">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <span>优衣库会员卡</span>
            </div>
          </div>
          <div class="foot"></div>
        </div>
        <div class="value white">
          <div class="top">
            <div class="icon">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">
              <span>电子公交卡</span>
              <p>苏州</p>
            </div>
          </div>
          <div class="foot"></div>
        </div>
      </div>
    </div>
    <div style="margin-top: 1rem;" class="btn">
      <van-button round block type="info" color="#c3ab87" native-type="submit">领取更多会员卡优惠</van-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrapper {
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
      // background: skyblue;
      background-size: 107% 113%;
      padding: 0.35rem;
      background-position: center center;
      overflow: hidden;
      // box-shadow: 0 0 10px 1px #eee;
      border-radius: 0.1rem;
      height: 2rem;
      margin-bottom: 0.3rem;
      color: #fff;
      display: flex;
      flex-direction: column;
      .foot {
        margin-top: auto;
        display: flex;
        justify-content: flex-end;
        .btn-list {
          display: flex;
          align-items: center;
          font-size: 0.24rem;
          div {
            padding: 0.05rem 0.2rem;
            margin-left: 0.3rem;
            border: 1px solid #fff;
            border-radius: 1rem;
          }
        }
      }
      .top {
        display: flex;
        align-items: center;
        .name {
          padding-left: 0.2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          span {
            font-size: 0.28rem;
            font-weight: 600;
          }
          p {
            font-size: 0.24rem;
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