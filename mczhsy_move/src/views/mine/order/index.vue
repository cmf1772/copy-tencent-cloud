<template>
  <div class="main">
    <div class="top">
      <van-nav-bar right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/more.png" style="width:auto;height:.4rem" />
        </template>
        <template #title>
          <div class="search-s">
            <search></search>
          </div>
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="title">
        <ul>
          <li class="active">全部</li>
          <li>待付款</li>
          <li>待发货</li> 
          <li>待收获</li>
          <li @click="release">待评价</li>
        </ul>
      </div>

      <div class="o-list" v-if="orderList.length > 0">
        <div
          class="item"
          v-for="(item) in orderList"
          @click.prevent="detailed(item)"
          :key="item.addtime"
        >
          <div class="info">
            <div class="title">
              <div class="name-v">
                <van-icon name="shop-o" size=".32rem" />
                <div class="shop-name">名品代购小铺</div>
                <van-icon name="arrow" size=".26rem" color="#999" />
              </div>
              <div class="o-status">{{item.status}}</div>
            </div>
            <div class="center">
              <div class="img">
                <img :src="item.order_goods[0].goods_file1" />
              </div>
              <div class="content">
                <div class="c-t">
                  <div class="g-name">
                    <p>{{item.order_goods[0].goods_name}}</p>
                  </div>

                  <div class="amount">
                    <div class="a-t">
                      ￥
                      <span>199.50</span>
                    </div>
                    <div class="num">×1</div>
                  </div>
                </div>
                <div class="type">
                  <div class="span">{{item.order_goods[0].goods_attr}}</div>
                </div>
                <div class="advantage">
                  <div>7天无理由退货</div>
                </div>
              </div>
            </div>
          </div>
          <div class="insurance">
            <span class="y-i">运费险</span>
            <span class="t-i">退换货可自动理赔</span>
            <span class="c-i">已出单</span>
          </div>
          <div class="amount-a">
            <div class="amount-s">
              <div class="amount-y">
                总价￥
                <span>{{item.goods_amount}}</span>，优惠￥
                <span>{{item.goods_rest_amount}}</span>，
              </div>
              <div class="amount-pay">
                实付款￥
                <span>{{item.goods_amount}}</span>
              </div>
            </div>
          </div>
          <div class="foot">
            <div class="more">
              <van-icon name="ellipsis" size=".36rem" />
            </div>
            <div class="btn-s">
              <div>申请开票</div>
              <div>查看物流</div>
              <div class="confirm">确认收货</div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-tip">
        暂无订单
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  components: {
    search
  },
  data() {
    return {
      orderList: [],
      currPage: 1,
      allOrderItemNum: 0,
      getData: false
    };
  },

  activated() {
    if (this.$store.state.token == null) {
      this.orderList = [];
      this.allOrderItemNum = 0;
      this.getData = false;
      console.log(1);
      return;
    }
    if (!this.getData) {
      console.log(2);
      this.$api.mine
        .getOrderList({
          page: this.currPage,
          token: this.$store.state.token.token
        })
        .then(res => {
          console.log(res.items);
          this.orderList = res.items;
          this.allOrderItemNum = res.total_result;
          this.getData = true;
        });
    }
  },
  deactivated() {
    this.orderList = [];
    this.allOrderItemNum = 0;
    this.getData = false;
  },
  methods: {
    onClickRight() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    detailed(item) {
      this.$router.push({
        path: "/mine/order/detailed",
        query: {
          item: JSON.stringify(item)
        }
      });
    },
    release() {
      this.$router.push({
        path: "/mine/order/release"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .o-list {
    background: #f7f7f7;

    .item:not(:last-child) {
      margin-bottom: 0.2rem;
    }
    .item {
      padding: 0.2rem 0.45rem;
      background: #fff;
      .info {
        display: flex;
        flex-direction: column;
        .title {
          padding: 0.2rem 0;
          padding-bottom: 0.35rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;

          .name-v {
            display: flex;
            align-items: center;
            font-size: 0.3rem;
            .shop-name {
              font-weight: 600;
              margin-right: 0.1rem;
            }
          }
          .o-status {
            font-size: 0.24rem;
            color: #c6b08e;
          }
        }
        .center {
          display: flex;
          .content {
            padding-left: 0.3rem;
            display: flex;
            flex-direction: column;
            .c-t {
              display: flex;
              margin-bottom: 0.1rem;
              .g-name {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 0.27rem;
                font-weight: 400;
              }
              .amount {
                display: flex;
                flex-direction: column;
                font-size: 0.24rem;
                justify-content: center;
                .a-t {
                  display: flex;
                  span {
                    font-size: 0.27rem;
                  }
                }
                .num {
                  align-self: flex-end;
                  font-size: 0.2rem;
                  color: #777;
                }
              }
            }
            .type {
              font-size: 0.2rem;
              color: #999;
              margin-bottom: 0.1rem;
            }
            .advantage {
              margin-top: auto;
              display: inline-flex;
              div {
                background: #f7f7f7;
                color: #c3ab87;
                font-size: 0.2rem;
                padding: 0.05rem 0.1rem;
                padding-bottom: 0;
                border-radius: 1rem;
              }
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
      }
      .insurance {
        display: flex;
        font-size: 0.24rem;
        margin-top: 0.6rem;
        justify-content: flex-end;
        span {
          margin-left: 0.48rem;
        }
        .t-i {
          color: #777;
        }
        .c-i {
          color: #c3ab87;
        }
      }
      .amount-a {
        display: flex;
        margin-top: 0.15rem;
        font-size: 0.24rem;
        flex-direction: row-reverse;
        .amount-s {
          display: flex;
          align-items: center;
          color: #000;
          span {
            font-size: 0.3rem;
            margin-left: -0.1rem;
          }
        }
        .amount-y {
          color: #777;
          span {
            font-size: 0.3rem;
            margin-left: -0.1rem;
          }
        }
      }
      .foot {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        justify-content: space-between;
        .btn-s {
          display: flex;
          font-size: 0.24rem;
          div {
            width: 1.58rem;
            height: 0.52rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.2rem;
            margin-left: 0.2rem;
            border: 1px solid #efefef;
            border-radius: 1rem;
          }
          .confirm {
            border: 1px solid #c3ab87;
            color: #c3ab87;
          }
        }
      }
    }
  }
  .title {
    padding: 0 0.45rem;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0;
      margin: 0.3rem 0;
      li {
        font-size: 0.34rem;
        color: #999;
      }
      .active {
        font-size: 0.36rem;
        color: #000;
        font-weight: 600;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 0.4rem;
          height: 3px;
          background: #c3ab87;
          bottom: -0.12rem;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  .order-tip{
    font-size: .3rem;
    color: #777;
    margin-top: 2rem;
    text-align: center;
  }
}
.main {
  .top {
    .van-nav-bar {
      display: flex;
      align-items: center;
      /deep/ .van-icon {
        color: #999;
      }
      /deep/ .van-nav-bar__title {
        max-width: 75%;
      }
      /deep/ .van-field__body {
        font-weight: 500;
      }
    }
  }
}
</style>