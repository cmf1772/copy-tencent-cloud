<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar
        left-text="米屋官方旗舰店"
        right-text="管理"
      >
        <template #right>
          <div class="right-menu-top">
            <div class="follow" @click="followShop">{{followed}}</div>
            <div>
              <van-icon name="ellipsis" size=".32rem" color="#C6B08E" />
              <van-icon color="#C6B08E" name="cross" size=".32rem" @click="backPrev" />
            </div>
          </div>
        </template>
        <template #left>
          <div class="left-title">
            <span class="title">{{shopKeeperInfo.shop_name}}</span>
            <van-icon name="arrow" size=".24rem" />
          </div>
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="nav">
        <div class="center-nav">
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/index/search.png" alt />
              </span>
            </li>
            <li v-for="(item,index) in navList" :key="index">
              <span
                :class="item.active == active?'active':''"
                @click="changeActive(item.active)"
              >{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="banner-t">
        <swipers :options="banner.swiperOption" :list="banner.bannerList"></swipers>
      </div>

      <div class="nav sub-nav">
        <div class="center-nav">
          <ul>
            <li v-for="(item,index) in subNavList" :key="index">
              <span :class="item.title == subNavActive?'active':''">{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="list" v-if="shopKeeperCategory.length">
        <div class="item" v-for="(item,index) in shopKeeperCategory" :key="index">
          <div class="title">
            <span>{{item.category_name}}</span>
            <van-icon name="arrow" size=".32rem" />
          </div>
          <div class="content">
            <div class="item-g" v-for="(c,i) in 4" :key="i" @click="commodityDetailed">
              <div class="img">
                <img src="@/assets/images/magazine/index/clothes/1585904813(1).png" />
              </div>
              <p>AFV情人节限量联名宽春秋印花短袖T胥</p>
              <div class="foot">
                <div class="price">
                  <span class="now-p">￥199.00</span>
                  <del class="old-p">￥320.00</del>
                </div>
                <van-icon name="plus" size=".28rem" color="#9C9C9C" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pub-footer></pub-footer>
  </div>
</template>

<script>
import swipers from "@/components/swipers/swiper_component"; //大banner
import pubFooter from "../components/footer";
export default {
  components: { swipers, pubFooter },
  data() {
    return {
      navList: [
        { title: "推荐", active: "good" },
        { title: "新平", active: "beijing" },
        { title: "特价", active: "emotion" },
        { title: "咨询", active: "comic" },
        { title: "笔记", active: "support" },
        { title: "圈子", active: "support" }
      ],
      subNavList: [
        { title: "上衣" },
        { title: "风衣" },
        { title: "外套" },
        { title: "裤子" },
        { title: "鞋子" },
        { title: "毛衣" }
      ],
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
          require("@/assets/images/shop/wechat1.jpg"),
          require("@/assets/images/shop/wechat2.jpg"),
          require("@/assets/images/shop/wechat1.jpg"),
          require("@/assets/images/shop/wechat2.jpg")
        ]
      },
      active: "good",
      subNavActive: "上衣",
      uid: null,
      shopKeeperInfo: {},
      shopKeeperCategory: [],
      followed:'关注',
    };
  },
  created() {
    // 初始化
    this.init();
  },
  methods: {
    // 初始化
    init() {
      this.getShopKeeperInfo(); //获取店家详情
      this.getShopKeeperCategory(); //获取店家商品分类
    },

    //获取店家详情
    getShopKeeperInfo() {
      console.log(this.$route.query.uid);
      if (!this.$route.query.uid) {
        this.$toast.fail("未知错误，请稍后再试");
        return;
      }

      // 设置值 获取数据
      this.uid = this.$route.query.uid;
      this.$api.shop
        .getShopKeeperInfo({
          uid: this.uid
        })
        .then(res => {
          this.shopKeeperInfo = res;
          console.log(res);
        });
    },

    // 收藏店铺
    followShop(){
      if( !this.judgeLogin()) return;

      this.$api.shop
        .starGood({
          supid: this.uid,
          uid : this.$store.state.user.user_id,
          module: 'shop',
          gt: 'mvm_member_shop',
          t: 0,
          token: this.$store.state.token.token
        })
        .then(res => {
          this.$toast.success("关注成功");
          this.followed = "已关注"
          console.log(res);
        });
    },

    //获取店家商品分类
    getShopKeeperCategory() {
      this.$api.shop.getShopKeeperCategory({
        supid : this.uid
      })
      .then( res => {
        this.shopKeeperCategory = res
        console.log(res);
      })
      .catch( err => {
        console.log(err);
      })
    },

    //判断是否登录
    judgeLogin() {
      console.log(this.$store.state.isLogin);
      if (!this.$store.state.isLogin) {
        this.$toast.fail("请先登录");
        return false;
      }
      return true;
    },

    backPrev() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(activeName) {
      this.active = activeName;
    },

    // 商品详情页面
    commodityDetailed() {
      this.$router.push({
        path: "/shop/commodity_detailed"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.banner-t {
  padding: 0 0.45rem;
  .banner {
    padding: 0;
  }
}
#top /deep/ .van-nav-bar__left {
  font-size: 0.3rem;
  color: #000;
  font-weight: 400;
}
.main {
  /deep/ .van-nav-bar__text {
    color: #000;
    font-size: 0.24rem;
  }
  .left-title {
    display: flex;
    align-items: center;
  }
  .right-menu-top {
    display: flex;
    align-items: center;
    .follow {
      span {
        display: block;
      }
    }
    div {
      max-height: 0.3rem;
      padding: 0.1rem 0.2rem;
      margin-left: 0.2rem;
      display: flex;
      background: #f9f6f3;
      color: #c6b08e;
      align-items: center;
      border-radius: 1rem;
      /deep/ .van-icon:last-child {
        margin-left: 0.2rem;
        &::after {
          content: "";
          position: absolute;
          width: 1px;
          height: 70%;
          top: 50%;
          left: -0.1rem;
          background: #ccc;
          transform: translate(0, -50%);
        }
      }
    }
  }
}
.container {
  // 导航
  .center-nav {
    margin-bottom: 0.2rem;
    ul {
      display: flex;
      padding: 0.3rem 0.45rem;
      justify-content: space-between;
      align-items: center;
    }
    li {
      font-size: 0.3rem;
      line-height: 0.3rem;
      color: #b5b5b5;
      img {
        width: 0.35rem;
      }
      .active {
        font-weight: 600;
        color: #000;
        font-size: 0.36rem;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 0.4rem;
          height: 4px;
          border-radius: 1px;
          background: #c3ab87;
          bottom: -0.2rem;
          right: 50%;
          transform: translate(50%, 0);
        }
      }
    }
  }
  .sub-nav {
    margin-bottom: 0.94rem;
    li {
      font-size: 0.28rem;
      .active {
        font-size: 0.28rem;
        color: #000;
        position: relative;
        &::after {
          display: none;
        }
      }
    }
  }
  .list {
    padding: 0 0.45rem;
    padding-bottom: 1.35rem;
    .item {
      .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 0.32rem;
        .item-g {
          margin-bottom: 0.2rem;
          font-size: 0.24rem;
          .foot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .now-p {
              color: #c3ab87;
              font-size: 0.24rem;
            }
            .old-p {
              font-size: 0.21rem;
              margin-left: 0.1rem;
              color: #939393;
            }
          }
          p {
            font-size: 0.27rem;
            margin: 0.1rem 0 0.15rem 0;
          }
          img {
            width: 100%;
            height: 3.14rem;
            border-radius: 0.03rem;
          }
        }
      }
      .title {
        margin: 0.4rem 0;
        span {
          font-size: 0.42rem;
          font-weight: 600;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
}
</style>