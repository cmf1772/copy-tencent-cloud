<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow title="美城会员" @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow_white.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="bg-t">
      <!-- <img src="@/assets/images/index/banner2.jpg" /> -->
    </div>
    <div class="container">
      <!-- <div class="pay-tip">
        <p>开通美城会员</p>
        <div>
          <span>专享9大特权</span>
        </div>
      </div>-->
      <div class="card">
        <!-- <img src="@/assets/images/icon/mine/vip/meicity.png" alt=""> -->
        <span></span>
        <div class="pay" @click="show = true">续费</div>
      </div>
      <div class="title">美城会员专享特权</div>
      <div class="list">
        <div class="item" v-for="(item,index) in dataList " :key="index">
          <div class="icon-wrap">
            <img :src="item.url" style="width:.8rem" />
          </div>
          <p>{{item.title}}</p>
          <span>{{item.sub_title}}</span>
        </div>
      </div>

      <div class="comment-list">
        <div class="title">联盟商家</div>
        <div class="c-list">
          <div class="item-c" v-for="(item,index) in list" :key="index">
            <div class="img">
              <img :src="item.img" alt />
            </div>
            <div class="foot">
              <span class="star">{{item.star}}</span>
              <span class="name">{{item.title}}</span>
              <div class="price-view">
                <span class="price">￥{{item.now_price}}</span>
                <del class="old-price" v-if="item.old_price">￥{{item.old_price}}</del>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-dialog v-model="show" title="标题">
      <template #title>
        <div class="h-title">
          <van-icon name="cross" size=".36rem" @click="show = false" />
          <span>请输入支付密码</span>
        </div>
      </template>
      <template #default>
        <div class="content">
          <div class="company">美城网科技有限公司</div>
          <div class="price">
            <img src="@/assets/images/icon/mine/pay/amount.png" style="width:.29rem" alt />
            199.
            <span>00</span>
          </div>
          <div class="status">
            <van-cell title="支付方式" value="中国银行储蓄卡(1587)" is-link />
          </div>
        </div>
        <van-password-input
          :show="showKeyboard"
          :value="value"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
      </template>
    </van-dialog>
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B387D97.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B38A454.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: 60.6
        },
        {
          img: require("@/assets/images/magazine/index/food/16B1B3891B5.jpg"),
          star: "COCO茶饮",
          title: "Mini泡泡柠檬草",
          now_price: 36.5,
          old_price: null
        }
      ],
      dataList: [
        {
          url: require("@/assets/images/icon/mine/vip/img1.png"),
          title: "95折",
          sub_title: "商家联名折扣"
        },
        {
          url: require("@/assets/images/icon/mine/vip/img2.png"),
          title: "满99",
          sub_title: "无限免邮费"
        },
        {
          url: require("@/assets/images/icon/mine/vip/img3.png"),
          title: "双倍积分",
          sub_title: "购物返积分"
        },
        {
          url: require("@/assets/images/icon/mine/vip/img4.png"),
          title: "充值专享",
          sub_title: "充值1000送100"
        },
        {
          url: require("@/assets/images/icon/mine/vip/img5.png"),
          title: "周二更优惠",
          sub_title: "享受更多折扣"
        },
        {
          url: require("@/assets/images/icon/mine/vip/img6.png"),
          title: "生日特权",
          sub_title: "当天赠全场8折券"
        },
        {
          url: require("@/assets/images/icon/mine/vip/img7.png"),
          title: "试吃特权",
          sub_title: "珍贵邀请试吃名额"
        },
        {
          url: require("@/assets/images/icon/mine/vip/img8.png"),
          title: "食材超级购",
          sub_title: "全站0.99元起"
        },
        {
          url: require("@/assets/images/icon/mine/vip/img9.png"),
          title: "专属服务",
          sub_title: "优先接入一站解决"
        }
      ],
      show: false,
      value: "",
      showKeyboard: false
    };
  },
  computed: {
    getImgUrlByIndex() {
      return function(index) {
        return `@/assets/images/icon/mine/vip/img${index + 1}.png`;
      };
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if(this.value.length >= 6){
        this.$router.push({
          path: "/mine/vip/success",
        })
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>

<style lang="less" scoped>
.van-number-keyboard{
  z-index: 9999 !important;
}
.van-dialog {
  /deep/ .van-hairline--top {
    display: none;
  }
  padding-bottom: 0.45rem;
  .h-title {
    padding: 0 0.4rem;
    font-size: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      flex: 1;
      justify-content: center;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.45rem 0;
    padding-bottom: 0;
    .price {
      font-size: 0.66rem;
      font-weight: bold;
      span {
        font-size: 0.42rem;
      }
    }
    .status {
      width: 100%;
      padding: 0 0.45rem;
      box-sizing: border-box;
    }
    .price {
      padding: 0.45rem 0;
    }
    .van-cell {
      font-size: 0.2rem;
      padding: 0.36rem 0;
      width: 100%;
      align-items: center;
    }
  }
}
.container {
  position: relative;
  z-index: 9;
  padding: 0 0.45rem;
  // padding-top: 0.3rem;
  padding-top: 0.7rem;
  .card {
    width: 100%;
    height: 2.83rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 0.35rem;
    background: url(../../../../assets/images/icon/mine/vip/meicity.png);
    background-size: 105% auto;
    background-position: center center;
    position: relative;
    .pay {
      width: 1.2rem;
      text-align: center;
      width: 1.5rem;
      margin-top: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0.53rem;
      margin-left: 0.3rem;
      font-size: 0.24rem;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 1rem;
    }
  }
  .c-list {
    margin: 0.2rem 0;
    margin-top: 0.3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.31rem;
    .item-c {
      .foot {
        padding: 0.15rem 0;
        font-size: 0.24rem;
        display: flex;
        flex-direction: column;
        .price {
          color: #c3ab87;
          font-size: 0.27rem;
        }
        .old-price {
          font-size: 0.18rem;
          color: #777;
          margin-left: 0.1rem;
        }
        .star {
          font-size: 0.2rem;
          color: #777777;
        }
        .name {
          font-size: 0.27rem;
          margin: 0.08rem 0;
          margin-bottom: 0.13rem;
        }
      }
      img {
        width: 100%;
        height: 3.14rem;
        border-radius: 0.05rem;
      }
    }
  }
  .title {
    font-size: 0.42rem;
    margin-top: 0.3rem;
    font-weight: bold;
  }
  .comment-list {
    font-size: 0.32rem;
    padding: 0.3rem 0;
  }
  .list {
    margin-top: 0.2rem;
    background: #fff;
    padding: 0.7rem 0.17rem;
    border-radius: 0.2rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.2rem;
    grid-row-gap: 0.4rem;
    box-shadow: 0 0 0.1rem 0.01rem #f0f0f0;
    .item {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .icon-wrap {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 1rem;
        border: 1px solid #c3ab87;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      p {
        font-size: 0.24rem;
        color: #777;
        margin-top: 0.15rem;
      }
      span {
        display: block;
        font-size: 0.21rem;
        color: #b5b5b5;
      }
    }
  }
  .pay-tip {
    width: 100%;
    justify-content: center;
    display: flex;
    text-align: center;

    flex-direction: column;
    align-content: center;
    p {
      color: #e1cdaf;
      font-size: 0.26rem;
      display: inline-block;
      position: relative;
      &::after,
      &::before {
        content: "";
        position: absolute;
        width: 10%;
        height: 1px;
        background: #e1cdaf;
        top: 50%;
      }
      &::after {
        right: 1.2rem;
      }
      &::before {
        left: 1.2rem;
      }
    }
    span {
      font-size: 0.36rem;
      font-weight: 600;
      background: linear-gradient(to right, #bba481, #ecd9bd, #bba481);
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}
//修改框架 样式 权重不够 所以嵌套深
.main {
  #top {
    position: relative;
    z-index: 9;
    /deep/ .van-nav-bar__title {
      color: #fff;
    }
    .van-nav-bar {
      /deep/ .van-nav-bar__left {
        i {
          color: #fff;
        }
      }
      /deep/ .van-nav-bar__right {
        i {
          color: #fff;
        }
      }
      &::after {
        border: none;
      }
      background-color: transparent;
    }
    .van-icon {
      margin-left: 0.2rem;
    }
  }
}
.bg-t {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3.71rem;
  width: 100vw;
  overflow: hidden;
  background: url(../../../../assets/images/icon/mine/vip/bg.png);
  background-size: 100% 150%;
  // img {
  //   width: 100%;
  //   height: 5.44rem;
  // }
}
</style>