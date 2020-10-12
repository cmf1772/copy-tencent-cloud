<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
           <img src="@/assets/images/icon/index/arrow_white.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/speak_white.png" style="height:.4rem" />
        </template>
      </van-nav-bar>
    </div>
    <div class="topbg"></div>
    <div class="search">
      <div>
        <search></search>
      </div>
    </div>

    <div class="container">
      <!-- 地图找房 -->
      <div class="map">
        <div class="title">
          <div class="text">地图找房</div>
          <div class="arrow">
            <van-icon name="arrow" size=".32rem" color="#999" />
          </div>
        </div>
        <div class="content">
          <div class="value">
            <p>苏州中心旁·时代花园·2套在租</p>
            <p>3000元起</p>
          </div>
          <div class="img">
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
        </div>
      </div>
      <!-- 推荐经纪人 -->
      <div class="comment-user">
        <div class="title">
          <div class="text">推荐经纪人</div>
          <div class="arrow">
            <van-icon name="arrow" size=".32rem" color="#999" />
          </div>
        </div>
        <!-- 滚动图 -->
        <div class="banner">
          <swiper :options="option">
            <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
              <div class="free">
                <div class="show-img">
                  <img :src="item.icon" />
                </div>
                <span class="name">{{item.title}}</span>
                <span class="ability">{{item.ability}}</span>
                <van-rate
                  v-model="item.star"
                  size=".24rem"
                  color="#c3ab87"
                  disabled
                  disabled-color="#c3ab87"
                />
                <span class="adress">{{item.adress}}</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 特色房源 -->
      <div class="good-house">
        <div class="title">
          <div class="text">特色房源</div>
          <div class="arrow">
            <van-icon name="arrow" size=".32rem" color="#999" />
          </div>
        </div>
        <div class="good-list">
          <div class="item" v-for="(item,index) in 2" :key="index">
            <div class="name">
              <span>温馨易居</span>
              <p>黄金地段旁</p>
            </div>
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
          </div>
        </div>
        <div class="btn-ls">
          <div>小户型</div>
          <div>精装修</div>
          <div>南北通透</div>
          <div>准新房</div>
          <div>带电梯</div>
          <div>别墅</div>
          <div>民用水电</div>
          <div>带电梯</div>
        </div>
      </div>

      <!-- 推荐 -->
      <div class="comment">
        <div class="title">
          <div class="text">为你推荐</div>
        </div>
        <div class="screen">
          <div>
            全苏州
            <i class="iconfont icon-down"></i>
          </div>
          <div>
            租金
            <i class="iconfont icon-down"></i>
          </div>
          <div>
            户型
            <i class="iconfont icon-down"></i>
          </div>
          <div>
            筛选
            <i class="iconfont icon-down"></i>
          </div>
        </div>

        <div class="c-list">
          <div class="item" v-for="(item,index) in 15" :key="index">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
              <div class="shop-tip jx">优选</div>
            </div>
            <div class="center">
              <div class="name">
                <span class="mode">整租</span>
                <div class="h-name">时代花园 三室一厅一卫一厨啊啊啊啊啊啊啊啊</div>
              </div>
              <div class="adress">
                <span>三室次卧·40m²</span>
                <span>苏州中心</span>
              </div>
              <div class="adv-list">
                <div>配套齐全</div>
                <div>南北通透</div>
                <div>普通装修</div>
              </div>
              <div class="foot">
                <div class="local">
                 <img src="@/assets/images/icon/serve/house/locals.png" style="width:.19rem;margin-right:.05rem" alt=""> 虹桥路120号
                </div>
                <div class="price">
                  ￥
                  <span>199</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <pFooter></pFooter>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
import pFooter from "./components/public_footer";
export default {
  components: { search, pFooter },
  data() {
    return {
      option: {
        slidesPerView:2.4,
        spaceBetween: 20,
        freeMode: true
      },
      list: [
        {
          icon: require("@/assets/images/user.png"),
          title: "李莉莉",
          ability: "我爱我家，更爱索佳，加油奥利给！",
          star: 4,
          adress: "苏州 - 高新区"
        },
        {
          icon: require("@/assets/images/user.png"),
          title: "李莉莉",
          ability: "我爱我家，更爱索佳，加油奥利给！",
          star: 4,
          adress: "苏州 - 高新区"
        },
        {
          icon: require("@/assets/images/user.png"),
          title: "李莉莉",
          ability: "我爱我家，更爱索佳，加油奥利给！",
          star: 4,
          adress: "苏州 - 高新区"
        },
        {
          icon: require("@/assets/images/user.png"),
          title: "李莉莉",
          ability: "我爱我家，更爱索佳，加油奥利给！",
          star: 4,
          adress: "苏州 - 高新区"
        },
        {
          icon: require("@/assets/images/user.png"),
          title: "李莉莉",
          ability: "我爱我家，更爱索佳，加油奥利给！",
          star: 4,
          adress: "苏州 - 高新区"
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    detailed() {
      this.$router.push({
        path: "/serve/recruit/detailed"
      });
    },
    recruit() {
      this.$router.push({
        path: "/serve/recruit/release"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 1.2rem;
  >div:not(.comment-user){
    
  padding: 0 0.45rem;
  }
  .comment-user{
    .title{
      padding: 0 .45rem;
    }
    .banner{
      /deep/ .swiper-container{
        padding: .15rem .45rem;
      }
    }
  }
  // //滚动图
  .free {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem;
    padding-right: 0.35rem;
    margin-bottom: 0.8rem;
    // w2.1rem
    // border: 1px solid #000;
    box-shadow: 0 0 .1rem .02rem #f0f0f0;
    .name {
      font-size: 0.3rem;
      color: #040a28;
    }
    .ability {
      color: #a1a4af;
      font-size: 0.22rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      margin-bottom: 0.2rem;
    }
    .adress {
      font-size: 0.2rem;
      color: #999;
      margin-top: 0.05rem;
    }
    span {
      font-size: 0.26rem;
      margin-bottom: 0.1rem;
    }
    .show-img {
      width: 1.03rem;
      margin: 0.2rem 0 0.4rem 0;
      margin-bottom: 0.3rem;
      height: 1.03rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .follow {
      margin: 0.2rem 0 0.2rem 0;
      font-size: 0.24rem;
      padding: 0.1rem 0.4rem;
      background: #c3ab87;
      color: #fff;
      border-radius: 32px;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      font-size: 0.42rem;
      font-weight: bold;
    }
  }

  // 好房
  .good-house {
    padding-bottom: 0.3rem;
    margin-bottom: 0.8rem;
    .good-list {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 0.2rem;
      padding: 0.4rem 0;
      .item {
        display: flex;
        box-shadow: 0 0 10px 1px #ddd;
        justify-content: space-around;
        padding: 0.25rem 0.2rem;
        align-items: center;
        border-radius: 0.06rem;
        .name {
          display: flex;
          flex-direction: column;
          span {
            font-size: 0.3rem;
            font-weight: 600;
          }
          p {
            font-size: 0.24rem;
            color: #777;
          }
        }
        .img {
          img {
            width: 0.95rem;
            height: 0.95rem;
            border-radius: 1rem;
          }
        }
      }
    }
    .btn-ls {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0.2rem;
      padding-bottom: 0.3rem;
      div {
        background: #f7f7f7;
        border-radius: 1rem;
        text-align: center;
        padding: 0.16rem 0.1rem;
        font-size: 0.24rem;
      }
    }
  }

  // 地图找房
  .map {
    .content {
      padding: 0.3rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .8rem;
      p {
        font-size: 0.27rem;
        color: #777;
      }
      .img {
        img {
          width: 1.3rem;
          height: 1.3rem;
          border-radius: 1rem;
        }
      }
    }
  }

  .comment {
    .screen {
      margin: 0.6rem 0;
      font-size: 0.28rem;
      display: flex;
      justify-content: space-between;
      i {
        display: initial;
        font-size: 0.2rem;
      }
    }
    .c-list {
      
      .item:not(:last-child){
        border-bottom: 1px solid #efefef;
      }
      .item {
        padding:.42rem 0 ;
        
        display: flex;
        .shop-tip {
            position: absolute;
            padding: 0.05rem 0.2rem;
            left: 0.2rem;
            height: 0.35rem;
            top: 0.0rem;
            padding-top: 0;
            padding-bottom: 0.1rem;
            display: flex;
            align-items: center;
            transform: translate(0, -20%);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            font-size: 0.18rem;
            color: #fff;
            // background-image: url(../../../../assets/images/icon/shop/index/fuwu.png) !important;
          }
          .jx {
            background-image: url(../../../../assets/images/icon/shop/index/xingxuan.png) !important;
          }
          .xd {
            background-image: url(../../../../assets/images/icon/shop/index/xindian.png) !important;
          }
          .fw {
            background-image: url(../../../../assets/images/icon/shop/index/fuwu.png) !important;
          }
          .pp {
            background-image: url(../../../../assets/images/icon/shop/index/pingpai.png) !important;
          }
        .img {
          position: relative;
          img {
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 0.03rem;
          }
        }
        .center {
          display: flex;
          padding-left: 0.3rem;
          flex-direction: column;
          .name {
            display: flex;
            align-items: center;
            font-size: 0.3rem;
            .h-name {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
            .mode{
              flex: 1;
              min-width: .6rem;
              margin-right: 0.2rem;
              position: relative;
              &::after{
                content:'';
                position: absolute;
                width: 1px;
                height: 80%;
                right: -0.09rem;
                top: 50%;
                transform: translate(0,-50%);
                background: #ddd;
              }
            }
          }
          .adress{
            display: flex;
            font-size: .24rem;
            margin: .08rem 0 .12rem 0;
            color: #777;
            span{
              margin-right: 0.15rem;
            }
          }
          .adv-list{
            display: flex;
            font-size: .2rem;
            div{
              background: #f7f7f7;
              border-radius: 1rem;
              padding: 0rem .15rem;
              margin-right: 0.05rem;
              color: #777;
            }
          }
          .foot{
            display: flex;
            justify-content: space-between;
            margin-top: auto;
            align-items: center;
            font-size: .2rem;
            .local{
              display: flex;
              align-items: center;
              color: #777;
            }
            .price{
              color: #C6B08E;
              span{
                font-size: .39rem;
              }
            }
          }
        }
      }
    }
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
.topbg {
  background: url("../../../../assets/images/serve/house/6630c6b553544f309dc0b69d73b0e177_th.jpeg");
  background-size: 100% 100%;
  width: 100vw;
  height: 3.33rem;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 45px 45px;
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
.main > .search {
  padding: 0 0.45rem;
  position: relative;
  z-index: 999;
  padding-bottom: 0.2rem;
  margin-top: 1.6rem;
  > div {
    box-shadow: 0px 0 10px 1px #ccc;
    border-radius: 1rem;
  }
}
</style>