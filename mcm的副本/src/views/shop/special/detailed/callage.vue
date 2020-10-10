<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow right-text="按钮" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow_white.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/speak_white.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="banner-d">
      <swipers :option="banner.swiperOption" :list="banner.bannerList"></swipers>
    </div>

    <div class="remaining">
      <div class="img">
        <img src="@/assets/images/icon/shop/special/qg.png" />
      </div>
      <div class="price">
        <div class="t">
          <span class="now-p">￥8.80</span>
          <del class="old-p">￥150</del>
          <span class="remment">仅剩20件</span>
        </div>
        <div class="f">累计已拼200件</div>
      </div>
      <div class="time">
        <span>限时秒杀</span>
        <div class="times">
          <div class="h">15</div>:
          <div class="m">32</div>:
          <div class="s">49</div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- 标题 -->
      <div class="title">
        <div class="name">
          coco 志云官方配件 + 接收器 + 遥控手柄
          <span class="commit">小编推荐</span>
        </div>
      </div>

      <!-- 提示 -->
      <div class="tip">
        <p>商品售完时未能拼单者视为抢购失败，将发起退款</p>
      </div>

      <!-- 放心购 -->
      <div class="security">
        <div class="title">
          <van-icon name="gold-coin" color="#fff" size=".32rem" />放心购
        </div>
        <div class="advantage">闪电退款·全场包邮· 48小时发货</div>
        <van-icon name="arrow" size=".32rem " color="#999" />
      </div>

      <!-- 排行 -->
      <div class="ranking">
        <div class="r-title">
          <van-icon name="diamond" color="#c3ab87" />T恤销售榜第
          <span>1</span>名
        </div>
        <van-icon name="arrow" size=".32rem " color="#999" />
      </div>
      <!-- 评价 -->
      <!-- 评价 -->
      <div class="evaluate">
        <div class="e-title">
          <div class="left">评价 20+</div>
          <div class="right">
            <span>好评率100%</span>
            <van-icon name="arrow" size=".36rem" color="#999" />
          </div>
        </div>

        <div class="item" v-for="(item,index) in 2" :key="index">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="star">
                <div class="name">正龙</div>
                <div class="star-name">
                  <van-rate
                    v-model="value"
                    size=".24rem"
                    color="#c3ab87"
                    disabled
                    disabled-color="#c3ab87"
                    void-icon="star"
                    void-color="#eee"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
            <div class="photos">
              <ul :style="`grid-template-columns: repeat(${list.length < 2 ? 1:3},1fr);`">
                <li v-for="(item,index) in list" :key="index">
                  <img :src="item.src" :style="{'height':list.length == 1?'5rem':'1.9rem'}" />
                </li>
              </ul>
            </div>
          </div>

          <div class="footer">
            <span class="category">鳞甲发射器 + 鳞甲接收器 + 体感遥控手柄</span>
          </div>
        </div>
      </div>

      <!-- 店铺介绍 -->
      <div class="shopkeeper">
        <div class="introduce">
          <div class="icon">
            <img src="@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png" />
          </div>
          <div class="center">
            <div class="title">G·Y·M运动旗舰店</div>
            <div class="star">
              <div class="star-view">
                店铺星级
                <van-rate
                  v-model="value"
                  size=".24rem"
                  color="#c3ab87"
                  disabled
                  disabled-color="#c3ab87"
                  void-icon="star"
                  void-color="#eee"
                />
              </div>
              <div class="fans">2.3w人关注</div>
              <van-icon name="arrow" size=".32rem" />
            </div>
            <div class="evaluate">
              <div class="ev">
                评价
                <span>2.09 低</span>
              </div>
              <div class="logistics">
                物流
                <span>8.09 低</span>
              </div>
              <div class="sales">
                售后
                <span>8.70 低</span>
              </div>
            </div>
          </div>
        </div>
        <div class="t-list">
          <div>满500减100</div>
          <div>满300减50</div>
          <div>满200减30</div>
        </div>
        <div class="jg">
          <img src="@/assets/images/shop/wechat1.jpg" />
        </div>
        <div class="concat">
          <div class="concat-us">
            <van-icon name="service-o" />
            <span>联系客服</span>
          </div>
          <div class="concat-us">
            <van-icon name="shop-o" />
            <span>进店逛逛</span>
          </div>
        </div>
      </div>

      <!-- 详情 -->
      <div class="value-v">
        <div class="title">详情</div>
        <div class="box-1">
          <img src="@/assets/images/index/banner1.jpg" alt />
          <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</p>
        </div>
      </div>
    </div>
    <div class="fixed">
      <div class="left">
        <img src="@/assets/images/icon/shop/index/listen1.png" alt="">
        <img src="@/assets/images/icon/shop/index/gouwuche.png" alt="">
        <img src="@/assets/images/icon/shop/index/shop1.png" alt="">
      </div>
      <div class="right">
        <div>
          <span>￥25</span>单独购买
        </div>
        <div @click="pay">
          <span>￥15</span>发起拼单
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swipers from "@/components/swipers/swiper_component"; //大banner
export default {
  components: {
    swipers
  },
  data() {
    return {
      banner: {
        swiperOption: {
          pagination: {
            el: ".swiper-pagination"
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false
          },
          loop: true
        },
        bannerList: [
          require("@/assets/images/index/banner1.jpg"),
          require("@/assets/images/index/banner2.jpg"),
          require("@/assets/images/index/banner3.jpg"),
          require("@/assets/images/index/banner4.jpg")
        ]
      },
      list: [
        {
          src: require("@/assets/images/index/banner1.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        },
        {
          src: require("@/assets/images/index/banner3.jpg")
        }
      ],
      value: 5
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    detailed() {},
    pay() {}
  }
};
</script>

<style lang="less" scoped>
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
  }
}
.banner-d {
  .banner {
    padding: 0;
    width: 100vw;
    /deep/ img {
      width: 100vw;
      height: 7.54rem;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.remaining {
  margin-top: 6.2rem;
  
  display: flex;
  background: #000;
  justify-content: space-between;
  padding: 0.23rem 0.45rem;
  color: #fff;
  .img {
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
  .price {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    padding-left: 0.2rem;
    .t {
      display: flex;
      align-items: flex-end;
      font-size: 0.24rem;
      .now-p {
        font-size: 0.32rem;
      }
      .old-p {
        margin: 0 0.1rem;
      }
    }
    .f {
      font-size: 0.24rem;
    }
  }
  .time {
    font-size: 0.24rem;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .times {
      display: flex;
      align-items: center;
      div {
        font-size: 0.24rem;
        color: #000;
        margin: 0 0.05rem;
        width: 0.37rem;
        height: 0.37rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        background: #c3ab87;
      }
    }
  }
}

.container {
  padding: 0 0.45rem;
  padding-bottom: 1rem;
  .title {
    padding-top: 0.3rem;
    display: flex;
    align-items: flex-start;
    .name {
      font-size: 0.45rem;
      .commit {
        padding: 0 0.06rem;
          background-image: url(../../../../assets/images/icon/shop/index/me.png) !important;
          color: #c3ab87;
          font-size: 0.17rem;
          padding-left: 0.15rem;
          color: #c3ab87;
      }
    }
  }
  .tip {
    padding: 0.4rem 0;
    font-size: 0.24rem;
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      color: #999;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-height: 0.36rem;
    }
  }
  // 放心购
  .security {
    display: flex;
    font-size: 0.27rem;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0 0.3rem 0;
    .title {
      color: #fff;
      border-radius: 0.06rem;
      display: flex;
      align-items: center;
      background: #c3ab87;
      padding: 0.05rem 0.1rem;
      .van-icon {
        margin-right: 0.05rem;
      }
    }
    .advantage {
      color: #c3ab87;
      margin-right: auto;
      margin-left: 0.1rem;
    }
  }
  .ranking {
    padding: 0.4rem 0 0.3rem 0;
    display: flex;
    justify-content: space-between;
    font-size: 0.27rem;
    align-items: center;
    span {
      color: #c3ab87;
    }
  }
  .evaluate {
    padding-top: 0.4rem;
    .e-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.2rem;
      .left {
        font-size: 0.42rem;
        font-weight: 600;
      }
      .right {
        display: flex;
        align-items: center;
        span {
          font-size: 0.24rem;
          color: #999;
        }
      }
    }
    // 评论
    .item {
      border-bottom: 1px solid #eee;
      padding-bottom: 0.4rem;
      margin-bottom: 0.6rem;
      // 作者
      .author {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.2rem 0 0.1rem 0;
        .icon {
          width: 0.73rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 0.2rem;
          height: 0.73rem;
          // border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .nick {
          flex: 1;
          display: flex;
          align-items: center;
          .star {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .star-name {
              font-size: 0.2rem;
              margin-top: 0.05rem;
              color: #999;
              display: flex;
            }
          }
          .name {
            font-size: 0.28rem;
            display: flex;
            justify-content: space-between;
            // margin-left: 0.1rem;
            align-items: center;
            font-weight: 600;
            .time {
              font-size: 0.2rem;
              color: #999;
            }
          }
        }
      }
      .value {
        font-size: 0.3rem;
        padding: 0.2rem 0;
      }
      .photos {
        width: 100%;
        padding: 0.2rem 0;
        ul {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: .15rem;
          li {
            img {
              width: 100%;
              border-radius: 0.05rem;
              overflow: hidden;
              height: 2.1rem;
            }
          }
        }
      }
      .footer {
        display: flex;
        padding: 0.2rem 0;
        font-size: 0.24rem;

        color: #999;
      }
    }
  }

   // 店铺介绍
  .shopkeeper {
    .introduce {
      display: flex;
      .icon {
        img {
          width: 1.51rem;
          height: 1.51rem;
          border-radius: 1rem;
        }
      }
      .center {
        flex: 1;
        padding-left: 0.33rem;
        .title {
          font-size: 0.32rem;
          padding-top: 0;
          padding-bottom: 0.15rem;
        }
        .star {
          display: flex;
          align-items: center;
          font-size: 0.2rem;
          justify-content: space-between;
          .star-view {
            display: flex;
            align-items: center;
            .van-rate {
              margin-left: 0.1rem;
            }
          }
          .fans {
            color: #999;
          }
        }
        .evaluate {
          padding-top: 0.1rem;
          display: flex;
          font-size: 0.2rem;
          div {
            margin-right: 0.1rem;
            span {
              color: #c3ab87;
            }
          }
        }
      }
    }
    .t-list {
      display: flex;
      align-items: center;
      padding: 0.2rem 0;
      margin-top: .16rem;
      margin-bottom: .26rem;
      div {
        width: 1.74rem;
        height: 0.37rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1rem;
        border: #c3ab87 solid 1px;
        color: #c3ab87;
        font-size: 0.2rem;
        margin-right: 0.1rem;
      }
    }
    .jg {
      width: 100%;
      padding: 0.1rem 0 0.3rem 0;
      height: 2.62rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        
        width: 100%;
        border-radius: 0.05rem;
      }
    }
    .concat {
      display: flex;
      justify-content: center;
      margin-top: 0.47rem;
      margin-bottom: 1rem;
      > div {
        width: 2.18rem;
        height: 0.6rem;
        font-size: 0.26rem;
        border-radius: 1rem;
        border: #eee solid 1px;
        margin: 0 0.82rem;
      }
    }
  }

  // 商品详情
  .value-v {
    .title {
      font-size: 0.4rem;
      font-weight: 600;
      padding-top: 0;
    }
    .box-1,
    .box-2 {
      padding: 0.2rem 0;
      .title {
        color: #c3ab87;
        text-align: center;
        margin: 0.2rem 0;
      }
      img {
        width: 100%;
        height: 4rem;
      }
    }
    font-size: 0.27rem;
    line-height: 0.42rem;
    p {
      margin: 0.3rem 0;
      color: #515151;
    }
  }
}

// 固定
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  font-size: 0.24rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem .45rem;
  background: #fff;
  .left {
    img{
      height: 0.4rem;
      margin-right: 0.2rem;
    }
  }
  .left {
    .van-icon {
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    div {
      width: 2.1rem;
      height: 0.87rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: .27rem;

    }
    div:first-child {
      border-radius: 1rem 0 0 1rem;
      border: 1px solid #eee;
    }
    div:last-child {
      border-radius: 0 1rem 1rem 0;
      background: #c3ab87;
      color: #fff;
    }
  }
}
</style>