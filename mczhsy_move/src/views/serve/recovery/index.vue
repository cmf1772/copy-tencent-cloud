<template>
  <div class="mian">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="回收"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/serve/house/locals.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 搜索 -->
    <div class="search-s">
      <search></search>
    </div>

    <!--功能入口-->
    <ul class="inavs">
      <li>
        <router-link to="/dynamic/follow">
          <img src="@/assets/images/icon/serve/recovery/ss.png"
               alt />
          <p>纸质</p>
        </router-link>
      </li>
      <li>
        <router-link to="/dynamic">
          <img src="@/assets/images/icon/serve/recovery/ss2.png"
               alt />
          <p>金属</p>
        </router-link>
      </li>
      <li>
        <router-link to="/problem">
          <img src="@/assets/images/icon/serve/recovery/ss3.png"
               alt />
          <p>塑料</p>
        </router-link>
      </li>
      <li>
        <router-link to="/broadcast">
          <img src="@/assets/images/icon/serve/recovery/ss4.png"
               alt />
          <p>织物</p>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="@/assets/images/icon/serve/recovery/ss5.png"
               alt />
          <p>手机</p>
        </router-link>
      </li>
    </ul>

    <!-- banner -->
    <div class="banner-s">
      <swipers :list="banner.bannerList"
               :option="banner.swiperOption"></swipers>
    </div>

    <!-- 模块 -->
    <div class="moudles">
      <div @click="goHome">
        <div>
          <img src="@/assets/images/icon/serve/recovery/ss6.png"
               alt />
        </div>
        <span class="title">上门回收</span>
        <span class="tips">一键呼叫、在线下单</span>
      </div>
      <div @click="code">
        <div>
          <img src="@/assets/images/icon/serve/recovery/ss7.png"
               alt />
        </div>
        <span class="title">扫码投递</span>
        <span class="tips">智能分类、智能回收</span>
      </div>
    </div>

    <div class="fn-list">
      <ul>
        <li>
          <van-cell is-link>
            <template #title>
              <div class="item">
                <img src="@/assets/images/icon/serve/recovery/ss8.png"
                     alt />
                <span class="custom-title">附近回收车</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link>
            <template #title>
              <div class="item">
                <img src="@/assets/images/icon/serve/recovery/ss9.png"
                     alt />
                <span class="custom-title">附近回收柜</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link>
            <template #title>
              <div class="item">
                <img src="@/assets/images/icon/serve/recovery/ss10.png"
                     alt />
                <span class="custom-title">回收价格表</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="myAmount">
            <template #title>
              <div class="item">
                <img src="@/assets/images/icon/serve/recovery/ss11.png"
                     alt />
                <span class="custom-title">我的环保积分</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link>
            <template #title>
              <div class="item">
                <img src="@/assets/images/icon/serve/recovery/ss12.png"
                     alt />
                <span class="custom-title">积分兑换商城</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="recycler">
            <template #title>
              <div class="item">
                <img src="@/assets/images/icon/serve/recovery/ss13.png"
                     alt />
                <span class="custom-title">加入美城回收</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="myOrder">
            <template #title>
              <div class="item">
                <img src="@/assets/images/icon/serve/recovery/ss13.png"
                     alt />
                <span class="custom-title">我的回收订单</span>
              </div>
            </template>
          </van-cell>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search";
import swipers from "@/components/swipers/swiper_component"; //大banner
export default {
  components: {
    search,
    swipers
  },
  data () {
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
          require("@/assets/images/serve/recovery/6630c6b553544f309dc0b69d73b0e177_th.jpeg"),
          require("@/assets/images/serve/recovery/6630c6b553544f309dc0b69d73b0e177_th.jpeg"),
          require("@/assets/images/serve/recovery/6630c6b553544f309dc0b69d73b0e177_th.jpeg"),
          require("@/assets/images/serve/recovery/6630c6b553544f309dc0b69d73b0e177_th.jpeg")
        ]
      }
    };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickRight () { },
    goHome () {
      this.$router.push({
        path: "/serve/recovery/home"
      });
    },
    code () {
      this.$router.push({
        path: "/serve/recovery/code"
      });
    },
    myAmount () {
      this.$router.push({
        path: "/serve/recovery/amount"
      });
    },
    recycler () {
      this.$router.push({
        path: "/serve/recovery/recycler"
      });
      // this.$router.push({
      //   path: "/serve/recovery/apply"
      // });
    },
    myOrder () {
      this.$router.push({
        path: "/serve/myOrder"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-s {
  padding: 0 0.45rem;
  margin: 0.2rem 0;
}
/*首页栏目入口*/
.inavs {
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.45rem;
  margin-bottom: 0.3rem;
  li {
    display: inline-block;
    text-align: center;
    width: 0.8rem;
  }
  li img {
    width: 0.83rem;
    height: 0.83rem;
  }
  li p {
    font-size: 0.24rem;
    color: #777;
    margin-top: 0.1rem;
  }
}

/*首页栏目入口 end*/

.banner-s {
  padding: 0 0.45rem;
  .banner {
    padding: 0;
    /deep/ img {
      height: 4.04rem;
    }
  }
}
.moudles {
  padding: 0 0.45rem;
  display: grid;
  margin: 0.2rem 0;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.2rem;
  > div:first-child div {
    background: linear-gradient(to right, #f7bc36, #fbd46a);
  }
  > div:last-child div {
    background: linear-gradient(to right, #6aa0fe, #3ebef0);
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 2px #f0f0f0;
    padding: 0.5rem;
    border-radius: 0.03rem;
    div {
      border-radius: 100%;
      width: 0.95rem;
      height: 0.95rem;
      background: #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.2rem;
      img {
        width: 0.95rem;
      }
    }

    .title {
      font-size: 0.3rem;
      font-weight: 600;
      margin: 0.1rem 0;
      color: #000;
    }
    span {
      font-size: 0.24rem;
      color: #999;
    }
  }
}
.fn-list {
  li {
    padding: 0.1rem 0;
    img {
      width: 0.6rem;
      height: 0.6rem;
    }
    .van-cell {
      align-items: center;
      padding-left: 0.45rem;
      padding-right: 0.45rem;
      /deep/ span {
        font-size: 0.3rem;
      }
    }
    .item {
      display: flex;
      align-items: center;
      .custom-title {
        margin-left: 0.1rem;
        font-weight: 600;
      }
    }
  }
}
</style>