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
        <img src="@/assets/images/icon/shop/special/ms.png" />
      </div>
      <div class="price">
        <span class="old-p">￥200.00</span>
        <span class="now-p">￥150.00</span>
      </div>
      <div class="time">
        <span>距结束还剩</span>
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
          <span>收藏</span>
        </div>
      </div>

      <!-- 提示 -->
      <div class="tip">
        <p>99秒杀！【官方配件，正品保障，售后无忧】官方配件，正品保障，售后无忧官方配件，正品保障，售后无忧官方配件，正品保障，售后无忧</p>
        <div class="see">
          查看
          <van-icon name="arrow" />
        </div>
      </div>

      <!-- 承诺 -->
      <div class="detailed-list">
        <div class="item activity">
          <div class="name">活动</div>
          <div class="d-v">
            <div class="d-v-center">
              <div class="t-list">
                <div>满500减100</div>
                <div>满300减50</div>
                <div>满200减30</div>
              </div>
              <div class="d-v-v">
                <p>满188元减10元，包邮（限中国内地）</p>
                <p>该商品购买20件享优惠单价99/件，超出的部分亦可以享受大部分优惠</p>
                <p>满188元减10元，包邮（超出的部分亦可以享受大部分优惠</p>
              </div>
            </div>
            <div class="d-v-right">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
        </div>
        <div class="item check">
          <div class="name">已选</div>
          <div class="d-v">
            <div class="d-v-center">
              <div class="d-v-v">
                <p>满188元减10元，包邮（超出的部分亦可以享受大部分优惠</p>
              </div>
            </div>
            <div class="d-v-right">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
        </div>
        <div class="item give">
          <div class="name">送至</div>
          <div class="d-v">
            <div class="d-v-center">
              <div class="d-v-v">
                <div class="xx">
                  北京 昌平区 城区外 国网经济技术研究院
                  <div>
                    <div>
                      <van-icon name="smile-comment" size=".24rem" color="#c3ab87" />京东物流
                    </div>
                  </div>现货，23点前下单，预计明天（6月30日送达）
                </div>
              </div>
            </div>
            <div class="d-v-right">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
        </div>
        <div class="item price">
          <div class="name">送至</div>
          <div class="d-v">
            <div class="d-v-center">
              <div class="d-v-v">
                <p>免运费</p>
              </div>
            </div>
            <div class="d-v-right"></div>
          </div>
        </div>

        <div class="tips">
          <div>
            <van-icon name="certificate" color="#999" size=".26rem" />京东发货&店铺售后
          </div>
          <div>
            <van-icon name="certificate" color="#999" size=".26rem" />7天无理由退货
          </div>
          <div>
            <van-icon name="certificate" color="#999" size=".26rem" />211限时达
          </div>
        </div>
      </div>

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

      <!-- 问答 -->
      <div class="question">
        <div class="title">
          <div class="left">暂无问答</div>
          <div class="right">
            <van-icon name="arrow" size=".36rem" color="#999" />
          </div>
        </div>
        <div class="value">
          <van-icon name="question" />
          <span>商品好不好，问问买过的人</span>
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

      <!-- 推荐 -->
      <div class="comment">
        <div class="title">
          <div class="left">
            <span class="active">为你推荐</span>
            <span>排行榜</span>
          </div>
          <van-icon name="arrow" size=".36rem" color="#999" />
        </div>
        <!-- 精选好点商品 -->
        <div class="list">
          <div class="item" v-for="(item,index) in 3" :key="index" @click="detailed">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">壁挂式厨房垃圾桶壁挂式厨房垃圾桶壁挂式厨房垃圾桶</div>
            <div class="foot">
              <div class="price">
                <span class="now-p">￥30.26</span>
                <del class="old-p">￥50.52</del>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">壁挂式厨房垃圾桶壁挂式厨房垃圾桶壁挂式厨房垃圾桶</div>
            <div class="foot">
              <div class="price">
                <span class="now-p">￥30.26</span>
                <del class="old-p">￥50.52</del>
              </div>
              <!-- <div class="add">
                <van-icon name="plus" size=".3rem" />
              </div>-->
            </div>
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

      <div class="see">
        <div class="title">
          <span>看了又看</span>
          <van-icon name="arrow" size=".36rem" color="#999" />
        </div>
        <div class="list">
          <div class="item" v-for="(item,index) in 3" :key="index" @click="detailed">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">壁挂式厨房垃圾桶壁挂式厨房垃圾桶壁挂式厨房垃圾桶</div>
            <div class="foot">
              <div class="price">
                <span class="now-p">￥30.26</span>
                <del class="old-p">￥50.52</del>
              </div>
              <div class="add">看相似</div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
            <div class="name">壁挂式厨房垃圾桶壁挂式厨房垃圾桶壁挂式厨房垃圾桶</div>
            <div class="foot">
              <div class="price">
                <span class="now-p">￥30.26</span>
                <del class="old-p">￥50.52</del>
              </div>
              <div class="add">看相似</div>
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
        <div>加入购物车</div>
        <div @click="pay">立即购买</div>
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
    onClickRight() {}
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
    width: 0.84rem;
      height: 0.84rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .price {
    margin-left: 0.2rem;
    justify-content: space-between;
    flex: 1;
    margin-right: 0.2rem;
    border-right:1px solid #585858;
    .old-p {
      font-size: 0.4rem;
      display: block;
    }
    .now-p {
      font-size: 0.24rem;
      display: block;
    }
  }
  .time {
    font-size: 0.24rem;
    align-items: center;
    text-align: center;
    display: flex;
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
  padding-bottom: 0.5rem;
  .title {
    padding-top: 0.3rem;
    display: flex;
    align-items: flex-start;
    .name {
      font-size: 0.48rem;
    }
    .star {
      padding-top: 0.06rem;
      display: inline-flex;
      flex-direction: column;
      min-width: .8rem;
      align-items: center;
      span {
        font-size: 0.21rem;
        color: #999;
      }
    }
  }
  .tip {
    padding: 0.7rem 0;
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
    .see {
      color: #c3ab87;
      display: flex;
      align-items: center;
      .van-icon {
        padding-top: 0.02rem;
      }
    }
  }
  .detailed-list {
    border-bottom: 1px solid #eee;
    .item {
      margin-bottom: 0.4rem;
      display: flex;
      align-items: flex-start;
      .name {
        font-size: 0.3rem;
        font-weight: 600;
        padding-right: 0.3rem;
        text-align: center;
      }
      .d-v {
        flex: 1;
        display: flex;
        align-items: flex-start;
        .d-v-v {
          padding: 0.15rem 0;
          p {
            font-size: 0.27rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-height: 0.45rem;
          }
        }
        .t-list {
          display: flex;
          div {
            padding: .05rem 0.2rem;
            font-size: 0.2rem;
            color: #c3ab87;
            
            background:url(../../../../assets/images/icon/shop/special/bg.png) ;
            background-size: 100% 100%;
          }
          div:not(:last-child) {
            margin-right: 0.1rem;
          }
        }
      }
      .d-v-right {
        display: inherit;
      }
    }
    .check,
    .give,
    .price {
      .d-v {
        font-size: .27rem;
        .d-v-v {
          padding: 0;
          p {
            -webkit-line-clamp: 10;
            font-size: .27rem;
          }
        }
      }
    }
    .give {
      .d-v-v {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .xx {
          font-size: 0.27rem;
          div {
            display: inline-flex;
            > div {
              color: #c3ab87;
              font-size: 0.2rem;
              border: 1px solid #c3ab87;
              align-items: center;
              padding: 0 0.04rem;
              border-radius: 1rem;
              height: 0.26rem;
              display: inline-flex;
              margin-top: 0.05rem;
              line-height: 0.4rem;
            }
          }
        }
      }
    }

    .tips {
      display: flex;
      font-size: 0.2rem;
      color: #999;
      padding: 0.2rem 0 0.4rem 0;
      div {
        display: flex;
        align-items: center;
        margin-right: 0.2rem;
      }
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

  // 问答
  .question {
    .title {
      font-size: 0.42rem;
      font-weight: 600;
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
    .value {
      padding: 0.8rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.3rem;
      color: #515151;
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

  //推荐
  .comment {
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
      .left {
        font-size: 0.34rem;
        span {
          color: #999;
          margin-right: 0.2rem;
          font-weight: 600;
        }
        .active {
          font-size: 0.36rem;
          color: #000;
          position: relative;
          margin-right: 0.53rem;
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
    }
    .list {
      padding: 0.2rem 0;
      display: grid;
      margin: 0.3rem 0;
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
          border-radius: 0.05rem;
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
          }
          .now-p {
            font-size: 0.36rem;
          }
          .old-p {
            font-size: 0.2rem;
            color: #777;
            margin-left: 0.06rem;
          }
        }
      }
    }
  }

  // 商品详情
  .value-v {
    .title {
      font-size: 0.42rem;
      font-weight: 600;
      padding-top: 0;
      margin-bottom: 0.4rem;
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
        border-radius: .06rem;
      }
    }
    font-size: 0.27rem;
    line-height: 0.42rem;
    p {
      margin: 0.3rem 0;
    }
  }

  .see {
    padding-top: 1rem;
    .title {
      padding-top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.36rem;
        font-weight: 600;
      }
    }
    .list {
      padding: 0.2rem 0;
      display: grid;
      margin: 0.3rem 0;
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
            font-size: 0.2rem;
            color: #999;
          }
          .now-p {
            font-size: 0.36rem;
          }
          .old-p {
            font-size: 0.21rem;
            color: #777;
            margin-left: 0.06rem;
          }
        }
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
      align-items: center;
      justify-content: center;
      font-size: .3rem;
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