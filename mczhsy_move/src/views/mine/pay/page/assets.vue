<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="我的资产" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="topbg"></div>
    <div class="container">
      <div class="a-list">
        <div class="item">
          <div class="l">
            <p>我的余额</p>
            <span>2500.25</span>
          </div>
          <div class="r">
            <p>昨日收益</p>
            <span class="add">+10.25</span>
          </div>
        </div>
        <div class="item">
          <div class="l">
            <p>通用金</p>
            <span>25200.25</span>
          </div>
          <div class="r">
            <p>昨日收益</p>
            <span class="reduce">-10.25</span>
          </div>
        </div>
        <div class="item">
          <div class="l">
            <p>环保金</p>
            <span>250.25</span>
          </div>
          <div class="r">
            <p>昨日收益</p>
            <span class="add">+10.25</span>
          </div>
        </div>
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
      this.$router.go(-1);
    },
    onClickRight() {}
  }
};
</script>


<style lang="less" scoped>
.container{
  padding: 0 .45rem;
  margin-top: 2.5rem;
  .a-list{
    position: relative;
    z-index: 9;
    .item{
      background: #fff;
      margin-bottom: 0.34rem;
      display: flex;
      justify-content: space-between;
      padding: .3rem;
      border-radius: 0.05rem;
      box-shadow: 0 0 10px 1px #efefef;
      .l{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        p{
          font-size: .24rem;
          color: #777;
        }
        span{
          font-size: .36rem;
          font-weight: 600;
        }
      }
      .r{
        text-align: right;
        p{
          font-size: .24rem;
          color: #777;
        }
        .reduce{
           font-size: .36rem;
           color: #777;
        }
        .add{
          font-size: .36rem;
           color: #c3ab87;
        }
      }
    }
  }
}
.topbg {
  background: url("../../..../../../../assets/images/icon/mine/pay/bg2.png");
  background-size: 100% 100%;
  width: 100vw;
  height: 4.42rem;
  position: absolute;
  top: 0;
  left: 0;
  .recruit {
    position: absolute;
    top: 0.8rem;
    right: 0;
    font-size: 0.2rem;
    display: flex;
    color: #fff;
    padding: 0.05rem 0.2rem;
    background: #c3ab87;
    border-radius: 1rem 0 0 1rem;
    align-items: center;
  }
}
.van-nav-bar {
  /deep/ .van-icon {
    font-size: 0.32rem;
    color: #fff;
  }
  background: transparent;
  &::after {
    border: none;
  }
}
</style>