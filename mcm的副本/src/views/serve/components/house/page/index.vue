<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
           <img src="@/assets/images/icon/index/arrow_white.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/speak_white.png" />
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
      <ul class="inavs">
        <li>
          <router-link to="/serve/house/whole-room">
            <img src="@/assets/images/icon/serve/house/img1.png" />
            <p>整租</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic/follow">
            <img src="@/assets/images/icon/serve/house/img2.png" />
            <p>合租</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic">
            <img src="@/assets/images/icon/serve/house/img3.png" />
            <p>个人房源</p>
          </router-link>
        </li>
        <li>
          <router-link to="/serve/recruit/part-job">
            <img src="@/assets/images/icon/serve/house/img4.png" />
            <p>押一付一</p>
          </router-link>
        </li>
        <li>
          <router-link to>
            <img src="@/assets/images/icon/serve/house/img5.png" />
            <p>房屋委托</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic/follow">
            <img src="@/assets/images/icon/serve/house/img6.png" />
            <p>写字楼</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic/follow">
            <img src="@/assets/images/icon/serve/house/img7.png" />
            <p>厂房仓库</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic">
            <img src="@/assets/images/icon/serve/house/img8.png" />
            <p>短租</p>
          </router-link>
        </li>
        <li>
          <router-link to="/serve/recruit/part-job">
            <img src="@/assets/images/icon/serve/house/img9.png" />
            <p>商铺</p>
          </router-link>
        </li>
        <li>
          <router-link to>
            <img src="@/assets/images/icon/serve/house/img10.png" />
            <p>租房签约</p>
          </router-link>
        </li>
      </ul>

      <!-- 精选好房 -->
      <div class="good-house">
        <div class="title">
          <div class="text">精选好房</div>
          <div class="arrow">
            <van-icon name="arrow" size=".32rem" color="#999" />
          </div>
        </div>
        <div class="good-list">
          <div class="item" v-for="(item,index) in 4" :key="index">
            <div class="name">
              <span>温馨易居</span>
              <p>黄金地段旁</p>
            </div>
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
          </div>
        </div>
      </div>

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
            <img src="@/assets/images/magazine/index/food/16B1B3891B5.jpg" />
          </div>
        </div>
      </div>

      <!-- 推荐 -->
      <div class="comment">
        <div class="title">
          <div class="text">精选好房</div>
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
              <div class="shop-tip pp">品牌</div>
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
import pFooter from "../components/public_footer";
export default {
  components: { search, pFooter },
  data() {
    return {};
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
  padding: 0 0.45rem;
  padding-bottom: 1rem;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .text {
      font-size: 0.42rem;
      font-weight: 600;
    }
  }

  // 好房
  .good-house {
    padding-bottom: 0.3rem;
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
            color: #999;
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
  }

  // 地图找房
  .map {
    margin-top: 0.3rem;
    .content {
      padding: 0.3rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 0.27rem;
        color: #777;
      }
      .img {
        img {
          width: 1.64rem;
          height: 1.64rem;
          border-radius: 1rem;
        }
      }
    }
  }

  .comment {
    .screen {
      margin: 0.3rem 0;
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
            // background-image: url(../../../../../assets/images/icon/shop/index/fuwu.png) !important;
          }
          .jx {
            background-image: url(../../../../../assets/images/icon/shop/index/xingxuan.png) !important;
          }
          .xd {
            background-image: url(../../../../../assets/images/icon/shop/index/xindian.png) !important;
          }
          .fw {
            background-image: url(../../../../../assets/images/icon/shop/index/fuwu.png) !important;
          }
          .pp {
            background-image: url(../../../../../assets/images/icon/shop/index/pingpai.png) !important;
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
  padding-bottom: 1.4rem;
}
.van-nav-bar {
  /deep/ .van-icon {
    font-size: 0.32rem;
    color: #fff;
  }
  /deep/ .van-nav-bar__right{
    img{
    width: .4rem !important;
    height: auto !important;
  }
  }
  background: transparent;
  &::after {
    border: none;
  }
}
.topbg {
  background: url("../../..../../../../../assets/images/serve/house/6630c6b553544f309dc0b69d73b0e177_th.jpeg");
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

.inavs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 0.3rem 0;
}
.inavs li {
  display: inline-block;
  text-align: center;
  margin-bottom: 0.4rem;
}
.inavs li img {
  width: 1.23rem;
  height:  1.23rem;
}
.inavs li p {
  font-size: 0.24rem;
  color: #777;
}
</style>