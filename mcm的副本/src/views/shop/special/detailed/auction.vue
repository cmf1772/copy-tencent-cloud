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
        <img src="@/assets/images/icon/shop/special/pm.png" />
      </div>
      <div class="price">
        <div class="t">起拍价</div>
        <div class="f">￥1000</div>
      </div>
      <div class="time">
        <span>限时拍卖</span>
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
        <div class="name">coco 志云官方配件 + 接收器 + 遥控手柄</div>
        <div class="star">
          <img src="@/assets/images/icon/shop/special/like.png" style="width:.46rem" />
          <span>分享</span>
        </div>
      </div>

      <!-- 提示 -->
      <div class="tip">起购价￥1,000</div>

      <div class="people">
        <div>
          围观
          <span>6500</span>次
        </div>
        <div>
          报名
          <span>8</span>人
        </div>
        <div>
          销量
          <span>460</span>
        </div>
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
        <ul>
          <li>
            <p>拍卖类型</p>
            <span>增加拍</span>
          </li>
          <li>
            <p>起拍价</p>
            <span>￥1,000</span>
          </li>
          <li>
            <p>加价幅度</p>
            <span>￥1,000</span>
          </li>
          <li>
            <p>结束时间</p>
            <span>6-10 14:30</span>
          </li>
          <li>
            <p>延时周期</p>
            <span>5分/次</span>
          </li>
          <li>
            <p>保证金</p>
            <span>￥0</span>
          </li>
          <li>
            <p>开拍时间</p>
            <span>6-9 14:30</span>
          </li>
          <li>
            <p>保留价</p>
            <span>无</span>
          </li>
        </ul>
      </div>

      <!-- 店铺介绍 -->
      <!-- 店铺介绍 -->
      <div class="shopkeeper">
        <div class="introduce">
          <div class="icon">
            <img
              src="@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"
            />
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
        <div class="title">
          <div class="active">拍品描述</div>
          <div>拍品参数</div>
          <div>帮助及保障</div>
        </div>
        <div class="box-1">
          <img src="@/assets/images/index/banner1.jpg" alt />
          <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</p>
        </div>
      </div>

      <div class="like">
        <div class="title">
          <span>猜你喜欢</span>
          <van-icon name="arrow" size=".36rem" color="#999" />
        </div>
        <div class="list">
          <div class="item" @click="detailed" v-for="(item,index) in 4" :key="index">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">壁垃圾桶壁挂式厨房垃圾桶</div>
            <div class="foot">
              <div class="price">
                <span class="now-p">当前 ￥30.26</span>
              </div>
            </div>
          </div>
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
          <span>￥1000</span>单独购买
        </div>
        <div @click="pay">
          <span style="font-size:.2rem">本产品免缴保证金</span>参加拍卖
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
    pay() {
      this.$router.push({
        path: "/shop/special/auction/detailed/hall"
      });
    }
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
      font-size: 0.24rem;
    }
    .f {
      font-size: 0.32rem;
    }
  }
  .time {
    font-size: 0.24rem;
    align-items: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    &::after {
      position: absolute;
      content: "";
      height: 100%;
      width: 1px;
      background: #585858;
      left: -0.2rem;
      top: 50%;
      transform: translate(0, -50%);
    }
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
  padding-bottom: 0.8rem;
  padding-bottom: 1.4rem;
  .title {
    padding-top: 0.3rem;
    display: flex;
    align-items: flex-start;
    .name {
      font-size: 0.45rem;
    }
    .star {
      padding-top: 0.06rem;
      display: inline-flex;
      flex-direction: column;
      min-width: .8rem;
      align-items: center;
      span {
        font-size: 0.24rem;
        color: #999;
      }
    }
  }
  .tip {
    font-size: 0.22rem;
    color: #c3ab87;
    display: inline-block;
    padding: 0.05rem 0.2rem;
    border-radius: 1rem;
    border: 1px solid #c3ab87;
    margin: 0.4rem 0;
  }

  .people {
    display: flex;
    margin-bottom: 0.7rem;
    font-size: 0.24rem;
    justify-content: space-between;
    p {
      min-width: 1rem;
    }
    span {
      color: #c3ab87;
    }
  }
  // 放心购
  .security {
    display: flex;
    font-size: 0.24rem;
    margin-bottom: 0.6rem;
    align-items: center;
    justify-content: space-between;
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
    }
  }
  .ranking {
    padding: 0.4rem 0 0.2rem 0;
    font-size: 0.27rem;
    margin-bottom: 1rem;
    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      li {
        display: flex;
        padding: 0.1rem 0;
        margin-bottom: 0.1rem;
        align-items: center;
        p {
          min-width: 1rem;
        }
      }
    }
    span {
      padding-left: 0.15rem;
      color: #999;
    }
  }

  // 店铺介绍
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
      margin-top: 0.16rem;
      margin-bottom: 0.26rem;
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

  .list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.32rem;
    .item {
      display: flex;
      flex-direction: column;
      font-size: 0.2rem;
      padding-bottom: 0.3rem;
      img {
        width: 100%;
        height: 3.14rem;
        border-radius: .06rem;
      }
      .adress,
      .foot {
        display: flex;

        justify-content: space-between;
      }
      .name {
        font-size: 0.27rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-weight: 600;
        margin-top: 0.15rem;
        margin-bottom: 0.15rem;
      }
      .foot {
        align-items: center;
        .now-p,
        .num {
          font-size: 0.22rem;
          color: #c3ab87;
        }
        .add {
          display: inherit;
          color: #c3ab87;
        }
        .now-p {
          font-size: 0.32rem;
        }
        .old-p {
          font-size: 0.2rem;
          color: #777;
          margin-left: 0.06rem;
        }
      }
    }
  }
  // 商品详情
  .value-v {
    margin: 0.3rem 0;
    
    .title {
      font-size: 0.34rem;
      padding-top: 0;
      display: flex;
      margin-bottom: 0.6rem;
      color: #999;
      justify-content: space-between;
      .active {
        font-size: 0.36rem;
        color: #000;
        position: relative;
        font-weight: 600;
        &::after {
          content: "";
          position: absolute;
          width: 0.4rem;
          height: 2px;
          background: #c3ab87;
          bottom: -0.1rem;
          left: 50%;
          transform: translate(-50%, 0);
        }
      }
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
        height: 3.69rem;
      }
    }
    font-size: 0.27rem;
    line-height: 0.42rem;
    p {
      margin: 0.3rem 0;
      color: #515151;
    }
  }
  .like {
    .title {
      padding-top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.3rem;
      span {
        font-size: 0.4rem;
        font-weight: 600;
      }
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