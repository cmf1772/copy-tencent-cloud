<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow title="订单详情" @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/more.png" style="width:auto;height:.4rem" />
        </template>
      </van-nav-bar>
    </div>
    <div class="bg-t">
      <img src="@/assets/images/icon/mine/order/bg.png" />
      <div class="tip">
        <p>卖家已发货</p>
        <span>还剩1天1时自动确认</span>
      </div>
    </div>

    <div class="container warp" v-if="orderItem != null">
      <!-- 物流信息 -->
      <div class="info-list">
        <div class="item" style="padding-top:.39rem">
          <div class="icon">
            <img src="@/assets/images/icon/mine/order/status.png" />
          </div>
          <div class="center">
            <p>[自提柜]您的快件被快递员取出，请等待快递员与您联系，电话15145698565如需联递员与您联系，电话15145698565如需联...</p>
            <span class="time">{{orderItem.add_time}}</span>
          </div>
          <van-icon name="arrow" color="#999" size=".32rem" />
        </div>
        <div class="item about">
          <div class="icon">
            <img src="@/assets/images/icon/mine/order/local.png" />
          </div>
          <div class="center">
            <div class="name">
              <span>默默大师</span>
              <p>86-{{orderItem.mobile}}</p>
            </div>
            <div class="info">[自提柜]您的快件被快递员取出，请等待快递员与您联系，电话15145698565如需联递员与您联系，电话15145698565如需联...</div>
          </div>
        </div>
      </div>
      <!-- 商家信息 -->
      <div class="shopkeeper">
        <div class="content" @click="goodDetailed">
          <div class="title">
            <van-icon name="shop-o" size=".32rem" />
            <div class="shop-name">名品代购小铺</div>
            <van-icon name="arrow" size=".32rem" color="#d0d0d0" />
          </div>
          <div class="center">
            <div class="img">
              <img :src="orderItem.order_goods[0].goods_file1" />
            </div>
            <div class="c-v">
              <div class="c-v-center">
                <div class="name">{{orderItem.order_goods[0].goods_name}}</div>
                <span class="type">{{orderItem.order_goods[0].goods_attr}}</span>
                <div class="adv-list">
                  <span>七天无理由退换</span>
                  <span>捐赠0.02元</span>
                </div>
              </div>
              <div class="c-v-right">
                ￥
                <span>{{orderItem.goods_amount}}</span>
              </div>
            </div>
          </div>
          <div class="retreat">退货</div>
          <div class="amount">
            <div>
              <p>商品总价</p>
              <span>{{orderItem.order_amount}}</span>
            </div>
            <div>
              <p>运费(快递)</p>
              <span>{{orderItem.goods_rest_amount}}</span>
            </div>
          </div>
          <div class="real-pay">
            <p>实付款</p>
            <div>
              ￥
              <span>{{orderItem.goods_amount}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 订单信息 -->
      <div class="info-order">
        <span class="title">订单信息</span>
        <div class="o-list">
          <div class="item">
            <div class="o-l-title">订单编号:</div>
            <span>{{orderItem.ordersn}}</span>
            <p>复制</p>
          </div>
          <div class="item">
            <div class="o-l-title">支付宝交易号:</div>
            <span>102588965745226658941025889651</span>
          </div>
          <div class="item">
            <div class="o-l-title">创建时间:</div>
            <span>{{orderItem.add_time}}</span>
          </div>
          <div class="item">
            <div class="o-l-title">支付时间:</div>
            <span>2020-05-24 12:10:00</span>
          </div>
          <div class="item ts">
            <div class="o-l-title">投诉商家</div>
            <van-icon name="arrow" size=".28rem" color="#999" />
          </div>
        </div>
        <div class="concat">
          <div>
            <img src="@/assets/images/icon/mine/order/listen.png" />联系卖家
          </div>
          <div>
            <img src="@/assets/images/icon/mine/order/phone.png" />拨打电话
          </div>
        </div>
      </div>

      <!-- 猜你喜欢 -->
      <div class="comment">
        <div class="title">您可能还喜欢</div>
        <div class="content">
          <div
            class="item-g"
            v-for="(item) in commentList"
            :key="item.uid"
            @click="commentGoodDetails(item.uid,item.supid)"
          >
            <div class="img">
              <img :src="item.goods_file1" />
            </div>
            <p>{{item.goods_name}}</p>
            <div class="foot">
              <div class="price">
                <span class="now-p">￥{{item.goods_sale_price}}</span>
                <p class="old-p">1人购买</p>
              </div>
              <van-icon name="plus" size=".28rem" color="#9C9C9C" />
            </div>
          </div>
          <div class="item-g">
            <div class="img">
              <img src="@/assets/images/magazine/index/food/16B1B3891B5.jpg" />
            </div>
            <p>AFV情人节限量联名宽春秋印花短袖T胥</p>
            <div class="foot">
              <div class="price">
                <span class="now-p">￥18</span>
                <p class="old-p">1人购买</p>
              </div>
              <van-icon name="plus" size=".28rem" color="#9C9C9C" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container warp" v-else>
      <!-- 物流信息 -->
      <div class="info-list">
        <div class="item">
          <div class="icon">
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
          <div class="center">
            <p>[自提柜]您的快件被快递员取出，请等待快递员与您联系，电话15145698565如需联递员与您联系，电话15145698565如需联...</p>
            <span class="time">2020-6-20 12:00:00</span>
          </div>
          <van-icon name="arrow" color="#999" size=".32rem" />
        </div>
        <div class="item about">
          <div class="icon">
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
          <div class="center">
            <div class="name">
              <span>默默大师</span>
              <p>86-1234567890</p>
            </div>
            <div class="info">[自提柜]您的快件被快递员取出，请等待快递员与您联系，电话15145698565如需联递员与您联系，电话15145698565如需联...</div>
          </div>
        </div>
      </div>
      <!-- 商家信息 -->
      <div class="shopkeeper">
        <div class="content">
          <div class="title">
            <van-icon name="shop-o" size=".26rem" />
            <div class="shop-name">名品代购小铺</div>
            <van-icon name="arrow" size=".26rem" color="#999" />
          </div>
          <div class="center">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="c-v">
              <div class="c-v-center">
                <div class="name">翡翠玻璃种无暇无裂戒子18K</div>
                <span class="type">卡其灰41</span>
                <div class="adv-list">
                  <span>七天无理由退换</span>
                  <span>捐赠0.02元</span>
                </div>
              </div>
              <div class="c-v-right">
                ￥
                <span>199.50</span>
              </div>
            </div>
          </div>
          <div class="retreat">退货</div>
          <div class="amount">
            <div>
              <p>商品总价</p>
              <span>￥199.50</span>
            </div>
            <div>
              <p>运费(快递)</p>
              <span>￥0.00</span>
            </div>
          </div>
          <div class="real-pay">
            <p>实付款</p>
            <div>
              ￥
              <span>199.50</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 订单信息 -->
      <div class="info-order">
        <span class="title">订单信息</span>
        <div class="o-list">
          <div class="item">
            <div class="o-l-title">订单编号:</div>
            <span>102588965745226658941</span>
            <p>复制</p>
          </div>
          <div class="item">
            <div class="o-l-title">支付宝交易号:</div>
            <span>102588965745226658941025889651</span>
          </div>
          <div class="item">
            <div class="o-l-title">创建时间:</div>
            <span>2020-05-24 12:00:00</span>
          </div>
          <div class="item">
            <div class="o-l-title">支付时间:</div>
            <span>2020-05-24 12:10:00</span>
          </div>
          <div class="item ts">
            <div class="o-l-title">投诉商家</div>
            <van-icon name="arrow" size=".28rem" color="#999" />
          </div>
        </div>
        <div class="concat">
          <div>
            <van-icon name="service-o" size=".42rem" color="#c3ab87" />联系卖家
          </div>
          <div>
            <van-icon name="phone-circle-o" size=".42rem" color="#c3ab87" />拨打电话
          </div>
        </div>
      </div>

      <!-- 猜你喜欢 -->
      <div class="comment">
        <div class="title">猜你喜欢</div>
        <div class="content">
          <div class="item-g" v-for="(c,i) in 4" :key="i">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <p>AFV情人节限量联名宽春秋印花短袖T胥</p>
            <div class="foot">
              <div class="price">
                <span class="now-p">￥199.00</span>
                <p class="old-p">1人购买</p>
              </div>
              <van-icon name="plus" size=".28rem" color="#9C9C9C" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed">
      <div>延长收货</div>
      <div>查看物流</div>
      <div class="confirm">确认收货</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderItem: null, //当前订单
      commentList: []
    };
  },
  activated() {
    // 获取当前商品
    this.orderItem =
      this.$route.query.item == 0 ? null : JSON.parse(this.$route.query.item);
    console.log(this.orderItem);
    if (this.orderItem == null) return;
    this.$api.shop
      .getItemAbout({
        uid: this.orderItem.order_goods[0].g_uid,
        supid: this.orderItem.order_goods[0].supplier_id
      })
      .then(res => {
        this.commentList = res;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    onClickRight() {},
    onClickLeft() {
      this.$router.go(-1);
    },

    //商品详情
    goodDetailed() {
      // console.log(this.orderItem);
      // this.$api.getGoodDetails()
      this.$router.push({
        path: "/shop/commodity_detailed",
        query: {
          uid: this.orderItem.order_goods[0].g_uid,
          supid: this.orderItem.order_goods[0].supplier_id
        }
      });
    },

    //推荐商品详情
    commentGoodDetails(uid, supid) {
      this.$router.push({
        path: "/shop/commodity_detailed",
        query: {
          uid,
          supid
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.32rem 0.45rem;
  display: flex;
  justify-content: flex-end;
  box-shadow: 0 -0.1rem 0.1rem 0.01rem #f0f0f0;
  font-size: 0.24rem;
  background: #fff;
  div {
    width: 1.58rem;
    height: 0.52rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    border: 1px solid #efefef;
    margin-left: 0.2rem;
  }
  .confirm {
    color: #c3ab87;
    border-color: #c3ab87;
  }
}
.warp {
  padding: 0;
  padding-bottom: 1.16rem;
}
.container {
  margin-top: calc(3rem - 46px);
  background: #f7f7f7;

  .comment {
    padding: 0 0.45rem;
    margin-bottom: 0.2rem;
    background: #fff;
    padding-top: 0.5rem;
    .title {
      font-size: 0.32rem;
      font-weight: 600;
    }
    .content {
      padding-top: 0.3rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.32rem;
      .item-g {
        margin-bottom: 0.2rem;
        font-size: 0.27rem;
        > p {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        .foot {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .price {
            display: flex;
            align-items: center;
          }
          .now-p {
            color: #c3ab87;
            font-size: 0.32rem;
          }
          .old-p {
            font-size: 0.2rem;
            margin: 0;
            margin-left: 0.1rem;

            color: #939393;
          }
        }
        p {
          margin: 0.1rem 0 0.15rem 0;
        }
        img {
          width: 100%;
          height: 3.14rem;
          border-radius: 0.03rem;
        }
      }
    }
  }
  .info-order {
    padding: 0 0.45rem;
    margin-bottom: 0.2rem;
    background: #fff;
    padding-bottom: 0.3rem;
    .title {
      font-size: 0.3rem;
      font-weight: 600;
      padding-bottom: 0.48rem;
    }
    .concat {
      margin-top: 0.3rem;
      display: flex;
      justify-content: space-around;
      div {
        display: flex;
        margin: 0 0.4rem;
        font-size: 0.27rem;
        color: #999;
        align-items: center;
        position: relative;
        img {
          max-width: 0.4rem;
          height: auto;
          margin-right: 0.15rem;
        }
      }
      div:first-child {
        &::after {
          position: absolute;
          content: "";
          width: 1px;
          height: 80%;
          background: #efefef;
          right: -0.4rem;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .o-list {
      padding-top: 0.2rem;
      .item {
        padding: 0.2rem 0;
        display: flex;
        align-items: center;
        .o-l-title {
          font-size: 0.24rem;
          min-width: 1.7rem;
        }
        span {
          font-size: 0.24rem;
        }
        p {
          font-size: 0.24rem;
          color: #c3ab87;
          margin-left: auto;
        }
      }
      .ts {
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .info-list {
    margin-bottom: 0.2rem;
    padding: 0 0.45rem;
    background: #fff;
    .item {
      padding: 0.3rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .icon {
        img {
          width: 0.61rem;
          height: 0.61rem;
          border-radius: 1rem;
        }
      }
      .center {
        flex: 1;
        padding: 0 0.2rem;
        padding-left: 0.25rem;
        p,
        .info {
          font-size: 0.27rem;
          color: #c3ab87;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        span {
          color: #777;
          font-size: 0.24rem;
          display: block;
          margin-top: 0.15rem;
        }
      }
    }
    .about {
      .center {
        display: flex;
        flex-direction: column;
        .name {
          display: flex;
          align-items: flex-end;
          margin-bottom: 0.2rem;
          span {
            font-size: 0.27rem;
            margin-top: 0;

            color: #000;
          }
          p {
            color: #999;
            font-size: 0.2rem;
            margin-left: 0.15rem;
          }
        }
        .info {
          color: #000;
        }
      }
    }
  }
  .shopkeeper {
    margin-bottom: 0.2rem;
    background: #fff;
    padding: 0.2rem 0.45rem;
    padding-top: 0.38rem;
    .content {
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        margin-bottom: 0.35rem;
        align-items: center;
        font-size: 0.26rem;
        .shop-name {
          font-weight: 600;
          font-size: 0.3rem;
          margin-right: 0.1rem;
        }
      }
      .center {
        display: flex;

        .c-v {
          display: flex;
          flex: 1;
          justify-content: space-between;

          .c-v-center {
            padding-left: 0.3rem;
            display: flex;
            flex-direction: column;
            .name {
              font-size: 0.27rem;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              overflow: hidden;
              -webkit-box-orient: vertical;
            }
            .type {
              font-size: 0.2rem;
              color: #777;
              margin-top: 0.1rem;
              margin-bottom: 0.1rem;
            }

            .adv-list {
              display: inline-flex;
              justify-content: space-between;
              span {
                display: inline-block;
                background: #f7f7f7;
                color: #c3ab87;
                font-size: 0.21rem;
                padding: 0.07rem 0.1rem;
                border-radius: 1rem;
              }
            }
          }
          .c-v-right {
            font-size: 0.25rem;
            display: flex;
            color: #c3ab87;
            align-items: flex-start;
          }
        }
        .img {
          img {
            width: 1.72rem;
            height: 1.72rem;
            border-radius: 0.06rem;
          }
        }
      }
      .retreat {
        font-size: 0.24rem;
        margin: 0.3rem 0 0.5rem 0;
        width: 1.58rem;
        height: 0.52rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        border: 1px solid #efefef;
        align-self: flex-end;
      }
      .amount {
        display: flex;
        padding: 0.15rem 0 0 0;
        flex-direction: column;
        div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0rem;
          p {
            font-size: 0.24rem;
            margin-bottom: 0.1rem;
            color: #777;
          }
          span {
            font-size: 0.21rem;
            color: #777;
          }
        }
      }
      .real-pay {
        display: flex;
        padding: 0.41rem 0 0.2rem 0;
        justify-content: space-between;
        p {
          font-size: 0.27rem;
        }
        div {
          display: flex;
          color: #c3ab87;
          align-items: center;
          font-size: 0.21rem;
          span {
            margin-left: -0.05rem;
            font-size: 0.3rem;
          }
        }
      }
    }
  }
}
//修改框架 样式 权重不够 所以嵌套深
.main {
  #top {
    position: relative;
    z-index: 9;
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
  img {
    width: 100%;
    height: 3.45rem;
  }
  .tip {
    position: absolute;
    bottom: 0.63rem;
    left: 0.81rem;
    color: #000;
    p {
      font-size: 0.3rem;
      font-weight: bold;
    }
    span {
      font-size: 0.21rem;
      display: block;
      margin-top: 0.23rem;
    }
  }
}
</style>