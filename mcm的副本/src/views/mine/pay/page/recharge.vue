<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="充值" left-text left-arrow @click-left="onClickLeft" >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="mode">
        <div class="title">充值方式</div>
        <div class="list">
          <van-radio-group v-model="radio">
            <div class="item">
              <div class="icon">
                <img src="@/assets/images/icon/mine/pay/ali.png" />
              </div>
              <div class="center">
                <div class="name">支付宝</div>
                <van-radio name="1" checked-color="#c3ab87" icon-size=".3rem"></van-radio>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <img src="@/assets/images/icon/mine/pay/wechat.png" />
              </div>
              <div class="center">
                <div class="name">微信</div>
                <van-radio name="2" checked-color="#c3ab87" icon-size=".3rem"></van-radio>
              </div>
            </div>
          </van-radio-group>
        </div>
      </div>

      <div class="amount-num">
        <div class="title">充值金额</div>
        <div class="input-view">
          <img src="@/assets/images/icon/mine/pay/amount.png" />
          <van-field v-model="value" @focus="show = true" type="number" />
        </div>
        <van-number-keyboard
          :show="show"
          theme="custom"
          v-model="value"
          extra-key="."
          close-button-text="充值"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
        />
      </div>

      <div class="change">
        <div class="icon">
          <van-icon name="gem" color="#FFC402" size=".4rem" />
        </div>
        <div class="center">
          <div class="name">
            <p>可提现到零钱通</p>
            <span>有收益，可直接用于消费</span>
          </div>
          <van-icon name="arrow" size=".32rem" color="#999" />
        </div>
      </div>

      <div class="btn">
        <van-button round type="info">充值</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      value: "",
      show: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onInput() {},
    onDelete() {}
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.2rem .45rem 0 .45rem;
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
  .title {
    font-size: 0.27rem;
    font-weight: bold;
    padding: 0.2rem 0;
  }
  .change {
    margin-top: 0.4rem;
    display: flex;
    padding: 0.2rem 0;
    border-bottom: 1px solid #f7f7f7;
    .icon {
      background: #f7f7f7;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
    .center {
      display: flex;
      padding-left: 0.2rem;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      .name {
        display: flex;
        flex-direction: column;
        p {
          font-size: 0.3rem;
        }
        span {
          font-size: 0.21rem;
          color: #999;
        }
      }
    }
  }
  .input-view {
    display: flex;
    align-items: center;
    img{
      width: 0.39rem;
      margin-right: 0.15rem;
    }
    .van-cell {
      font-size: 0.46rem;
      padding-left: 0;
    }
  }
  .van-number-keyboard {
    /deep/ .van-key--close {
      background: #c3ab87;
      border: none;
      &::after {
        border: none;
      }
    }
  }
  .list {
    margin-bottom: 0.4rem;
    .item {
      display: flex;
      align-items: center;
      padding: 0.34rem 0;
      .icon {
        display: flex;
        align-items: center;
        img{
        width: 0.52rem;
      }
      }
      .center {
        padding-left: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
        .name {
          font-size: 0.26rem;
        }
      }
    }
  }
}
</style>