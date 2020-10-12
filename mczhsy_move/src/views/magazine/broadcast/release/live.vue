<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="创建直播"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="add-icon">
        <div class="icon">
          <img src="@/assets/images/magazine/photo.png"
               alt="">
          <span>添加</span>
        </div>
      </div>
      <div class="tips">一张好的封面是疑因观众的开始哦~</div>
      <div class="input">
        <van-field v-model="value"
                   placeholder="取个拉风的标题吧" />
        <van-field v-model="value"
                   placeholder="请输入本场话题" />
        <van-cell title="直播分类"
                  value="内容">
          <template #default>
            <div class="select">
              综合 - 财商
              <van-icon name="arrow-down"
                        size=".32rem" />
            </div>
          </template>
        </van-cell>
        <van-cell title="通知粉丝">
          <template #default>
            <van-switch v-model="checked"
                        active-color="#C3AB87"
                        inactive-color="#EDEDED"
                        size=".26rem" />
          </template>
        </van-cell>
      </div>
      <div class="fixed">
        <div class="btn-list">
          <div class="btn-left">创建预告</div>
          <div class="btn-right">开始直播</div>
        </div>
        <div class="agreement">
          <van-radio-group v-model="radio">
            <van-radio name="1"
                       icon-size=".36rem"
                       checked-color="#C3AB87">我已阅读并同意<span>《美城智慧商业直播服务协议》</span></van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { value: '', value2: '', checked: true, radio: '0' };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () { }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .add-icon {
    display: flex;
    justify-content: center;
    padding: 0.3rem 0;
    .icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 2.16rem;
      width: 2.16rem;
      background: #f7f7f7;
      border-radius: 1rem;
      span {
        font-size: 0.26rem;
        color: #bcbcbc;
      }
    }
  }
  .tips {
    text-align: center;
    font-size: 0.28rem;
    color: #9c9c9c;
  }
  .input {
    padding: 0.3rem 0 0.2rem 0;
    .van-cell {
      padding: 0.2rem 0;
      /deep/ span {
        font-size: 0.3rem;
      }
    }
    .select {
      display: flex;
      align-items: center;
      color: #333;
      margin-left: auto;
      justify-content: flex-end;
      i {
        margin-left: 0.1rem;
      }
    }
  }
  .fixed {
    position: fixed;
    max-width: 750px;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    right: 0;
    .btn-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 0 0.45rem;
      font-size: 0.3rem;
      grid-gap: 0.44rem;
      div {
        padding: 0.25rem 0;
        text-align: center;
        border-radius: 1rem;
      }
      .btn-left {
        border: 1px #c3ab87 solid;
        color: #c3ab87;
      }
      .btn-right {
        background: #c3ab87;
        color: #fff;
      }
    }
    .agreement {
      display: flex;
      justify-content: center;
      padding: 0.4rem 0;
      align-items: center;
      font-size: 0.24rem;
      /deep/ .van-radio__label {
        margin-left: 0.05rem;
      }
      /deep/ .van-radio {
        align-items: center;
      }
      span {
        color: #c3ab87;
      }
    }
  }
}
</style>