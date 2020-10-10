<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="我的环保金"
        right-text="明细"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="amount-view">
        <div class="view">
          <div class="tip">环保金</div>
          <div class="amount">
            <div class="num">0.00</div>
          </div>
        </div>

        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <div class="change">
              <div class="left">
                <van-cell-group>
                  <van-field v-model="value" type="number" placeholder="请输入兑换金额" />
                </van-cell-group>
                <span class="tips">1环保金可兑换成1人民币</span>
              </div>
              <div class="right">
                <div class="btn">全部兑换</div>
              </div>
            </div>
          </template>
        </van-cell>
      </div>

      <div class="account">
        <van-cell is-link>
          <template #title>
            <span class="title">选择到账方式</span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <van-icon name="alipay" color="#009FE8" size="32" />
              <span>支付宝</span>
            </div>
          </template>
          <template #default>
            <span class="btn">添加</span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <van-icon name="wechat" color="#00C800" size="30" />
              <span>微信</span>
            </div>
          </template>
          <template #default>
            <span class="btn">添加</span>
          </template>
        </van-cell>
        <van-cell>
          <template #title>
            <div class="left">
              <van-icon name="card" color="#EABB00" size="30" />
              <span>银行卡</span>
            </div>
          </template>
          <template #default>
            <span class="btn">添加</span>
          </template>
        </van-cell>

        <div class="success">确认兑换</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { value: "" };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      this.$router.push({
        path:'/serve/recovery/detailed'
      })
    }
  }
};
</script>

<style lang="less" scoped>
.next {
  font-size: 0.26rem;
  color: #c3ab87;
}
.container {
  .van-cell{
    padding: .2rem .45rem;
    /deep/ input{
      font-size: .36rem;
    }
  }
  
  .amount-view {
    border-bottom: 0.2rem #f7f7f7 solid;
  }
  ////金额显示区
  .view {
    padding: 0.2rem 0;
    margin: 0.2rem 0;
    .tip {
      font-size: 0.24rem;
      text-align: center;
      color: #777777;
    }
    .amount {
      text-align: center;

      font-weight: 600;
      margin: 0.2rem 0;
      .num {
        font-size: 0.66rem;
      }
    }
  }

  //提现区
  .change {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .van-cell-group::after {
      border: none;
    }
    .van-cell {
      padding: 0.1rem 0;
    }
    .tips {
      font-size: 0.2rem;
      color: #c3ab87;
      margin-top: -.2rem;
    }
    .btn {
      width: 1.63rem;
      height: 0.54rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .24rem;
      border: 1px solid #c3ab87;
      color: #c3ab87;
      border-radius: 1rem;
    }
  }

  // 底部支持提现区
  .account {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .title {
      font-size: 0.3rem;
      font-weight: bold;
    }
    /deep/ .van-cell__value{
      display: flex;
      justify-content: flex-end;
    }
    .van-cell{
      padding: .3rem .45rem;
    }
    .btn{
      align-self: flex-end;
      width: 1.19rem;
      height: 0.54rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #c3ab87;
      color: #c3ab87;
      border-radius: 31px;
    }
    .success{
      background:#c3ab87;
      color: #f7f7f7;
      font-size: .3rem;
      width:  3rem;
      width: 3.93rem;
      height: 0.87rem;
      line-height: .87rem;
      text-align: center;
      margin: .6rem auto;
      border-radius: 38px;
      display: inline-block;
    }
    .left {
      display: flex;
      align-items: center;
      span {
        margin-left: 0.4rem;
        font-size: .3rem;
      }
    }
  }
}
</style>