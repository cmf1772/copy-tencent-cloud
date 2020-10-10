<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow right-text="按钮" @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <img src="@/assets/images/icon/index/fenxiang1.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="banner-d">
      <swipers :option="banner.swiperOption" :list="banner.bannerList"></swipers>
    </div>

    <div class="container">
      <!-- 标题和价格 -->
      <p class="title">COCO柠檬茶</p>
      <div class="price">
        <span class="p-num">￥193</span>
        <div class="j-num">
          <van-icon name="medal-o" />1390
        </div>
      </div>
      <div class="month">
        <span>月售452</span>
        <div class="rz">点评推荐</div>
      </div>
      <!-- 用户评价 -->
      <div class="purchased">
        <div class="p-ciew">
          <div class="t">
            <div class="l">
              <span class="txt">已选</span>
              <span class="name">原为半塘 x1</span>
            </div>
            <van-stepper v-model="value" integer />
          </div>
          <div class="f">满￥99包邮</div>
        </div>
        <!-- 导航 -->
        <div class="nav">
          <div class="center-nav">
            <ul>
              <li v-for="(item,index) in navList" :key="index">
                <span
                  :class="item.active == active?'active':''"
                  @click="changeActive(item.active)"
                >{{item.title}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="m-title">
        <span>外卖详情</span>
      </div>
      <!-- 商品详情 -->
      <div class="value-v">
        <div class="box-2">
          <!-- <div class="title">关于 NIO Life</div> -->
          <div class="img-view">
            <img src="@/assets/images/magazine/index/food/u=2525721197,2106052897&fm=214&gp=0.jpg" alt />
            <p>NIO Life</p>
          </div>
          <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</p>
        </div>
      </div>

      <div class="m-title">
        <span>外卖评价 2</span>
        <div class="screen-list">
          <div class="active">全部54</div>
          <div>最新</div>
          <div>
            <van-icon name="good-job-o" />52
          </div>
          <div>
            <van-icon name="good-job-o" />2
          </div>
          <div>有图</div>
        </div>
        <div class="tip">
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1" checked-color="#c3ab87" icon-size=".24rem">只看有内容的评价</van-radio>
          </van-radio-group>
        </div>
      </div>
      <!-- 用户评价详情 -->
      <div class="item" v-for="(item,index) in 2" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <div class="name">
                正龙
                <div class="time">2020-6-13 20:35</div>
              </div>
              <div class="star-name">
                <span>
                  <van-icon name="good-job" size=".24rem" color="#c3ab87" />了该商品
                </span>
                <span>规格/份</span>
              </div>
            </div>
          </div>
        </div>
        <div class="item-value">
          <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          <div class="photos">
            <ul :style="`grid-template-columns: repeat(${list.length < 2 ? 1:3},1fr);`">
              <li v-for="(item,index) in list" :key="index">
                <img :src="item.src" :style="{'height':list.length == 1?'6.6rem':'2.1rem'}" />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <van-icon name="cluster-o" />4
              </span>
            </li>
            <li>
              <span>
                <van-icon name="good-job-o" />4
              </span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 同用户五福 -->
      <div class="collocation">
        <span>外卖搭配</span>
        <van-icon name="arrow" size=".32rem" />
      </div>

      <div class="coll-list" v-for="(i,j) in 2" :key="j">
        <div class="list">
          <div class="item">
            <div class="img">
              <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
            </div>
            <div class="name">壁挂式厨房垃圾桶</div>
            <div class="foot">
              <div class="price">
                <div class="now-p">
                  ￥
                  <span>30.26</span>/份
                </div>
              </div>
              <div class="add">
                <van-icon name="plus" size=".3rem" />
              </div>
            </div>
          </div>
          <div class="item">
            <div class="img">
              <img src="@/assets/images/magazine/index/food/201892241933668.jpg" />
            </div>
            <div class="name">壁挂式厨房垃圾桶</div>
            <div class="foot">
              <div class="price">
                <div class="now-p">
                  ￥
                  <span>30.26</span>/份
                </div>
              </div>
              <div class="add">
                <van-icon name="plus" size=".3rem" />
              </div>
            </div>
          </div>
        </div>
        <div class="l-foot">
          <div class="left-c">
            <div class="l-top">
              1人套餐
              <span>（已满35减8）</span>
            </div>
            <div class="l-bottom">
              实付
              <div class="s-pay">
                ￥
                <span>40.5</span>
              </div>
            </div>
          </div>
          <div class="right-c">
            <div>立即购买</div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed">
      <div class="left">
        <img src="@/assets/images/icon/shop/index/listen1.png" alt="">
        <img src="@/assets/images/icon/shop/index/gouwuche.png" alt="">
      </div>
      <div class="right">
        <div class="f-price">
          <div class="ft">
            ￥
            <span>55</span>
          </div>
          <span>另需配送费5.5，支持支取</span>
        </div>
        <div @click="pay" class="pay">去结算</div>
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
          require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          require("@/assets/images/magazine/index/food/16B1B384664.jpg")
        ]
      },
      list: [
        {
          src: require("@/assets/images/shop/wechat1.jpg")
        },
        {
          src: require("@/assets/images/shop/wechat1.jpg")
        },
        {
          src: require("@/assets/images/shop/wechat1.jpg")
        }
      ],
      value: 1,
      navList: [
        { title: "详情", active: "1" },
        { title: "评价", active: "2" },
        { title: "搭配", active: "3" }
      ],
      active: "1",
      radio: "1"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    pay() {
      this.$router.push({
        path: "/shop/pay"
      });
    },
    changeActive(activeName) {
      this.active = activeName;
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
// 导航
.center-nav {
  margin: 0.6rem 0;
  margin-bottom: .8rem;
  ul {
    display: flex;
    padding: 0.2rem 0;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
    line-height: 0.3rem;
    margin-right: 0.8rem;
    color: #b5b5b5;
    .active {
      font-size: 0.36rem;
      font-weight: 600;
      color: #000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 0.4rem;
        height: 4px;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.1rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
.banner-d {
  padding: 0;
  .banner {
    padding: 0;
    width: 100vw;
    /deep/ img {
      width: 100%;
      height: 7.53rem;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.container {
  margin-top: calc(7.53rem - 0.49rem);
  padding: 0 0.45rem;
  padding-bottom: 1rem;
  .title {
    font-size: 0.48rem;
    font-weight: bold;
  }
  .price {
    display: flex;
    font-size: 0.36rem;
    margin: 0.1rem 0;
    .j-num {
      display: flex;
      margin-left: 0.2rem;
      align-items: center;
    }
  }
  .month {
    font-size: 0.24rem;
    display: flex;
    span {
      margin-right: 0.2rem;
    }
    .rz {
      background-image: url(../../../assets/images/icon/shop/index/me.png) !important;
      color: #c3ab87;
      font-size: 0.17rem;
      color: #c3ab87;
      font-size: 0.2rem;
      padding: 0.01rem 0.06rem;
      padding-left: 0.15rem;
    }
  }
  .m-title {
    margin-top: 0.8rem;
    span {
      font-size: 0.42rem;
      font-weight: 600;
    }
    .screen-list {
      margin: 0.2rem 0;
      display: flex;
      font-size: 0.2rem;
      div {
        font-size: 0.18rem;
        display: flex;
        align-items: center;
        padding: 0.05rem 0.2rem;
        background: #f7f7f7;
        border-radius: 1rem;
        margin-right: 0.1rem;
        color: #777;
      }
      .active {
        background: #c3ab87;
        color: #fff;
      }
    }
    .tip {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
      /deep/ .van-radio__label {
        font-size: 0.2rem;
        padding-top: 0.04rem;
        color: #777;
      }
    }
  }
  .p-ciew {
    margin: 0.3rem 0;
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
    .t {
      display: flex;
      justify-content: space-between;
    }
    .l {
      font-size: 0.26rem;
      margin-bottom: 0.1rem;
      .txt {
        color: #9c9c9c;
        margin-right: 0.26rem;
      }
      .name {
        font-size: 0.3rem;
      }
    }
    .f {
      font-size: 0.21rem;
      color: #9c9c9c;
    }
  }
  // 评论
  .purchased {
    .speak {
      display: flex;
      justify-content: space-between;
      font-size: 0.26rem;
      padding: 0.2rem 0;
    }
  }

  // 评论
  .item {
    // 作者
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.2rem 0 0.1rem 0;
      .icon {
        width: 0.73rem;
        height: 0.73rem;
        display: flex;
        align-items: center;
        justify-content: center;
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
            margin-left: 0.1rem;
            color: #999;
            display: flex;
            span:first-child {
              margin-right: 0.3rem;
              position: relative;
              display: flex;
              align-items: center;
              &::after {
                content: "";
                position: absolute;
                height: 60%;
                width: 1px;
                background: #999;
                right: -0.15rem;
                top: 50%;
                transform: translate(0, -50%);
              }
            }
          }
        }
        .name {
          font-size: 0.27rem;
          display: flex;
          justify-content: space-between;
          margin-left: 0.1rem;
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
      letter-spacing: 0.05rem;
    }
    .photos {
      width: 100%;
      padding: 0.2rem 0;
      ul {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 0.15rem;
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
      padding: 0.3rem 0;
      font-size: 0.26rem;
      color: #999;
      .time {
        flex: 1;
        font-size: 0.24rem;
      }
      ul {
        width: 30%;
        display: flex;
        justify-content: space-around;
        span {
          display: flex;
          align-items: center;
        }
        .van-icon {
          font-size: 0.3rem;
          margin-right: 0.03rem;
        }
      }
    }
  }

  // 商品详情
  .value-v {
    .box-1,
    .box-2 {
      border-top: 1px solid #eeeeee;
      padding: 0.2rem 0;
      .title {
        color: #c3ab87;
        text-align: center;
        margin: 0.2rem 0;
      }
      .img-view{
        height: 3.7rem;
        width: 100%;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        p{
          font-size: .54rem;
          color: #fff;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(calc(-50% - .5px),calc(-50% - .5px));
        }
      }
      img {
        width: 100%;
      }
    }
    .box-2{
      padding-bottom: 0;
    }
    font-size: 0.27rem;
    line-height: 0.42rem;
    p {
      margin: 0.3rem 0;
    }
  }

  // 搭配title
  .collocation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.42rem;
    padding: 0.1rem 0;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
    border-bottom: none;
    padding-top: 0.6rem;
  }

  // 搭配列表
  .coll-list {
    margin-bottom: 0.4rem;
    .list {
      padding: 0.2rem 0;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.32rem;
      .item {
        display: flex;
        flex-direction: column;
        font-size: 0.2rem;
        img {
          width: 100%;
          height: 3.14rem;
          border-radius: 0.04rem;
        }
        .adress,
        .foot {
          display: flex;

          justify-content: space-between;
        }
        .name {
          font-size: 0.27rem;
          font-weight: 400;
          margin-top: 0.15rem;
          margin-bottom: 0.15rem;
        }
        .foot {
          align-items: center;
          .now-p,
          .num {
            font-size: 0.24rem;
            color: #c3ab87;
          }
          .add {
            display: inherit;
          }
          .now-p {
            align-items: flex-end;
            display: flex;
            span {
              font-size: 0.36rem;
            }
          }
        }
      }
    }
    .l-foot {
      display: flex;
      align-items: center;
      .left-c {
        display: flex;
        flex-direction: column;
        > div {
          margin: 0.05rem 0;
          display: flex;
          font-size: 0.26rem;
          div,
          span {
            color: #c3ab87;
          }
          .s-pay span {
            font-size: 0.28rem;
          }
        }
      }
      .right-c {
        margin-left: auto;
        div {
          font-size: 0.26rem;
          width: 1.86rem;
          height: 0.65rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: #c3ab87;
          color: #fff;
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
  padding: 0.3rem 0.45rem;
  box-shadow: 0 -0.05rem 0.2rem 0.01rem #f0f0f0;
  background: #fff;
  .left {
    img{
      height: 0.4rem;
      margin-right: 0.2rem;
    }
  }
  .left {
    padding-right: 0.3rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      right: 0.25rem;
      top: 50%;
      background: #999;
      width: 1px;
      height: 80%;
      transform: translate(0, -50%);
    }
    .van-icon {
      margin-right: 0.2rem;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .f-price {
      font-size: 0.2rem;
      > span {
        color: #777;
      }
      .ft {
        color: #c3ab87;
        span {
          font-size: 0.32rem;
        }
      }
    }
    .pay {
      width: 2.1rem;
      height: 0.87rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      background: #c3ab87;
      color: #fff;
      font-size: 0.3rem;
    }
  }
}
</style>