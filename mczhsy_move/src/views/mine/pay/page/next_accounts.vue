<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="转账" left-text left-arrow @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="user">
      <div class="icon">
        <img src="@/assets/images/magazine/index/finish/20171113151620_yndHu.jpeg" />
      </div>
      <span>默默大师</span>
    </div>
    <div class="container">
      <div class="title">充值金额</div>
      <div class="input-view">
        <img src="@/assets/images/icon/mine/pay/amount.png" style="width:.39rem;margin-right:.15rem"/>
        <van-field v-model="value" @focus="show = true" type="number" />
        <van-number-keyboard
          :show="show"
          theme="custom"
          v-model="value"
          extra-key="."
          close-button-text="转账"
          @blur="show = false"
          @input="onInput"
          @delete="onDelete"
        />
      </div>
      <div class="tip">添加转账说明</div>
      <!-- <div class="btn">
        <van-button round type="info">转账</van-button>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
.user {
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f7f7;
  .icon {
    width: 0.96rem;
    height: 0.96rem;
    border-radius: 1rem;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
  span {
    font-size: 0.3rem;
    margin-top: 0.28rem;
  }
}
.container {
  padding: 0.2rem .45rem;
  padding-top: 0.6rem;
  .tip {
    display: flex;
    align-items: center;
    color: #c3ab87;
    margin: 0.4rem 0;
    font-size: 0.2rem;
  }
  .input-view {
    display: flex;
    align-items: center;
    .van-cell {
      font-size: 0.46rem;
      padding-left: 0;
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
  }
  // .btn {
  //   margin-top: 1rem;
  //   display: flex;
  //   justify-content: center;

  //   .van-button {
  //     width: 3rem;
  //     background: #c3ab87;
  //     border: none;
  //   }
  // }
  .title {
    font-size: 0.27rem;
    font-weight: 600;
    padding: 0.2rem 0;
    padding-bottom: 0.4rem;
  }
}
</style>