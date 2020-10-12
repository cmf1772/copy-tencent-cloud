<template>
  <div class="main">
    <!-- toubu  -->
    <div class="top">
      <van-nav-bar left-arrow title="竞价大厅" right-text="按钮" @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/search.png" />
          <img src="@/assets/images/icon/index/gouwuche.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="time-tip">
      <van-icon name="clock" size=".28rem" color="#c3ab87" />正在进行时，还剩
      <van-count-down :time="10*60*60*1000" />结束
    </div>

    <div class="container">
      <div class="good">
        <div class="img">
          <img src="@/assets/images/index/banner1.jpg" />
        </div>
        <div class="center">
          <div class="name">翡翠玻璃种无暇无裂戒指-18K黑金镶嵌</div>
          <div class="foot">
            <div class="now-p">
              <p>当前价</p>
              <span>￥</span>
              <span class="price">1000</span>
            </div>
            <div class="detailed">查看详情</div>
          </div>
        </div>
      </div>
      <div class="center">
        <van-stepper v-model="price" />
        <div class="tip">您即将出价1000元</div>
        <div class="btn">
          <van-button round color="#c3ab87">立即出价</van-button>
        </div>
      </div>
      <van-steps direction="vertical" active-color="#c3ab87" :active="0">
        <van-step>
          拍品起拍价<span>￥1000</span>
        </van-step>
        <van-step>
           竞价时间为<span>23.20</span>小时
        </van-step>
        <van-step>
          竞拍正式开始咯！
        </van-step>
      </van-steps>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 1000,
      active:2
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    moreClick() {
      this.$router.push({
        path: "/shop/special/channel"
      });
    },
    detailed() {
      this.$router.push({
        path: "/shop/shop_detailed"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.top {
  .van-icon {
    margin-left: 0.2rem;
  }
  /deep/ .van-nav-bar__text {
    color: #000;
    font-size: 0.28rem;
    font-weight: 600;
  }
}
.time-tip {
  align-items: center;
  display: flex;
  font-size: 0.24rem;
  padding: 0.2rem .45rem;
  background: #f7f4ef;
  .van-icon {
    margin-right: 0.1rem;
  }
  .van-count-down {
    margin: 0 0.1rem;
  }
}
.container {
  .good {
    padding: 0.4rem 0.45rem;
    display: flex;
    .img {
      img {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 0.02rem;
      }
    }
    .center {
      font-size: 0.24rem;
      padding-left: 0.2rem;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 0 !important;
      padding-left: 0.3rem !important;
      flex: 1;
      .name {
        font-size: 0.3rem;
      }
      .foot {
        margin-top: auto;
        display: flex;
        color: #999;
        align-items: flex-end;
        justify-content: space-between;
        .now-p {
          display: flex;
          align-items: center;
          .price {
            font-size: 0.39rem;
          }
          span {
            color: #c3ab87;
          }
        }
        .detailed {
          border-radius: 1rem;
          border: 1px solid #eee;
          padding: 0.05rem 0.2rem;
        }
      }
    }
  }
  .center {
    background: #f7f7f7;
    padding: 0.45rem 0.45rem 0.3rem 0.45rem;
    .van-stepper {
      display: flex;
      justify-content: space-between;
      /deep/ * {
        background: transparent;
      }
      /deep/ button {
        font-size: 0.45rem;
      }
      /deep/ .van-stepper__input {
        flex: 1;
        font-size: 0.6rem;
      }
    }
    .tip {
      font-size: 0.24rem;
      padding: 0.2rem 0;
      display: flex;
      color: #b5b5b5;
      justify-content: center;
    }
    .btn {
      .van-button {
        width: 4.2rem;
        height: 0.87rem;
        margin: 0 auto;
      }
      display: flex;
      justify-content: center;
      padding: 0.3rem 0 0 0;
    }
  }
  .van-steps{
    padding: .3rem .45rem 0 1rem;
    .van-step{
      font-size: .24rem;
      color: #000;
    }
  }
}
</style>