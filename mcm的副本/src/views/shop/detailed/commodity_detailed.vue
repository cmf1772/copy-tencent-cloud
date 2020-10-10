<template>
  <div class="main" v-if="Object.keys(goodDeatils).length >= 0">
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
      <p class="title">{{goodDeatils.mm_mall_title}}</p>
      <div class="price">
        <span class="p-num" v-if="goodDeatils.product">{{goodDeatils.product.goods_market_price}}</span>
        <div class="j-num">
          <van-icon name="medal-o" />1390
        </div>
      </div>

      <!-- 用户评价 -->
      <div class="purchased">
        <div class="p-ciew">
          <div class="t">
            <div class="l">
              <span class="txt">已购</span>
              <span class="name">重力臂套装 x1</span>
            </div>
            <van-icon name="arrow" size=".32rem" />
          </div>
          <div class="f">满￥99包邮</div>
        </div>
        <div class="speak">
          <span>用户评价 {{speakList.length}}</span>
          <van-icon name="arrow" size=".32rem" />
        </div>
      </div>

      <!-- 用户评价详情 -->
      <div class="item" v-for="(item,index) in speakList" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img :src="item.member_image" />
            </div>
            <div class="star">
              <span class="name">{{item.from_id}}</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">{{item.comment}}</div>
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

      <!-- 商品详情 -->
      <div class="value-v" v-if="goodInfoData != null">
        <div class="box-1" v-html="goodInfoData.data">
        </div>
      </div>
      <div class="value-v" v-else>
        <div class="box-1">
          <img src="@/assets/images/shop/wechat3.jpg" alt />
          <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</p>
        </div>
        <div class="box-2">
          <div class="title">关于 NIO Life</div>
          <img src="@/assets/images/shop/wechat4.jpg" alt />
          <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</p>
        </div>
      </div>

      <!-- 同用户五福 -->
      <div class="serve">
        <span>用户服务</span>
        <van-icon name="arrow" size=".32rem" />
      </div>
    </div>

    <div class="fixed">
      <div class="left">
        <img src="@/assets/images/icon/shop/index/shop1.png" alt  @click="goShopKeeperInfo"/>
        <img  src="@/assets/images/icon/shop/index/listen1.png" alt />
        <img v-if="stared" src="@/assets/images/icon/shop/index/star_stared.png" alt />
        <img v-else src="@/assets/images/icon/shop/index/star1.png" alt @click="starGood" />
      </div>
      <div class="right">
        <div @click="addCarGood">加入购物车</div>
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
          require("@/assets/images/shop/wechat1.jpg"),
          require("@/assets/images/shop/wechat2.jpg"),
          require("@/assets/images/shop/wechat1.jpg"),
          require("@/assets/images/shop/wechat2.jpg")
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
      uid: null, //商品id
      supid: null,  //商铺id
      goodDeatils: {},  //商品详情
      speakList: [],  //评论列表
      goodInfoData :null,  //商品内容详情
      stared:false,
    };
  },
  created() {
    
    // 获取商品id 商铺id
    this.uid = this.$route.query.uid;
    this.supid = this.$route.query.supid;

    //请求商品数据
    this.$api.shop
      .getGoodDetails({
        uid: this.uid,
        supid: this.supid
      })
      .then(res => {
        //重置默认数据
        console.log(res);
        this.goodDeatils = res;
        this.banner.bannerList = [];

        res.arr_gallery.forEach(item => {
          this.banner.bannerList.push(item[1]);
        });

        this.getSpeakList(res);
        this.getGoodInfo(res);
      })
      .catch(err => {
        console.log(err);
        this.$toast.fail(err.err_msg);
      });

    console.log(this.$store.state.isLogin);
    if(this.$store.state.isLogin){
      let starList = this.$store.state.userStarList;
      starList.forEach((item) =>{
        if(item.uid == this.uid && item.supplier_id == this.supid){
          this.stared = true;
        }
      })
    }
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

    //判断是否登录
    judgeLogin(){
      console.log(this.$store.state.isLogin);
      if (!this.$store.state.isLogin) {
        this.$toast.fail("请先登录");
        return false;
      }
      return true
    },

    //收藏
    starGood() {
      if ( !this.judgeLogin()) return;
      this.$api.shop
        .starGood({
          uid: this.uid,
          supid: this.supid,
          module: this.goodDeatils.script,
          gt: this.goodDeatils.goods_table,
          t: 1,
          token: this.$store.state.token.token
        })
        .then(res => {
          this.$toast.success("收藏成功");
          console.log(res);
        });
    },
    

    // 前往商家
    goShopKeeperInfo(){
      this.$router.push({
        path:'/shop/shop_detailed',
        query:{
          uid : this.goodDeatils.supid
        }
      })
    },

    // 添加购物车
    addCarGood(){
      if( !this.judgeLogin() ) return;
      this.$api.shop.addCarGood({
        ps_num : 1,
        attr : '尺码:均码|颜色:卡其|100',
        g_uid : this.uid,
        gt : this.goodDeatils.goods_table,
        module : this.goodDeatils.script,
        token : this.$store.state.token.token,
        preorder : 0
      })
      .then( res => {
        console.log(res);
        this.$toast.success("添加购物车成功！")

        let timer = setTimeout( () => {
          this.$router.push({
            path:'/shop/car'
          })
          clearTimeout(timer)
        },500)
      })
      .catch( err => {
        console.log(err);
        this.$toast.fail(err.err_msg)
      })
    },


    //获取商品评论列表
    getSpeakList(item) {
      //获取商品 评论列表
      this.$api.shop
        .getGoodSpeak({
          g_uid: this.uid,
          supid: this.supid,
          gt: item.goods_table,
          cmd: "read"
        })
        .then(res => {
          this.speakList = res.data;
        })
        .catch(err => {
          this.$toast.fail(err.err_msg);
        });
    },

    //获取商品详情页面
    getGoodInfo(item) {
      this.$api.shop
        .getGoodInfoContent({
          uid: this.uid,
          supid: this.supid,
        })
        .then(res => {
          this.goodInfoData = res
          console.log(res);
        })
        .catch(err => {
          this.$toast.fail(err.err_msg);
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
  width: 100vw;
  .banner {
    padding: 0;
    /deep/ img {
      width: 100vw;
      height: 7.53rem;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.container {
  margin-top: calc(7.53rem - 49px);
  padding: 0 0.45rem;
  padding-top: 0.42rem;
  padding-bottom: 1rem;
  .title {
    font-size: 0.48rem;
  }
  .price {
    display: flex;
    font-size: 0.36rem;
    margin: 0.3rem 0;
    .j-num {
      display: flex;
      margin-left: 0.2rem;
      align-items: center;
    }
  }
  .p-ciew {
    margin: 0.3rem 0;
    display: flex;
    flex-direction: column;
    /deep/ span {
      font-size: 0.26rem;
    }
    /deep/ .name {
      font-size: 0.3rem;
    }
    .t {
      display: flex;
      justify-content: space-between;
    }
    .l {
      font-size: 0.26rem;
      margin-bottom: 0.1rem;
      .txt {
        color: #9c9c9c;
        margin-right: 0.2rem;
      }
    }
    .f {
      font-size: 0.21rem;
      color: #9c9c9c;
    }
  }
  .purchased {
    .speak {
      display: flex;
      justify-content: space-between;
      font-size: 0.3rem;
      padding: 0.2rem 0;
      align-items: center;
    }
  }
  .item:not(:last-child) {
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #f0f0f0;
  }
  .item {
    padding: 0.3rem 0;

    // 作者
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.2rem 0 0.1rem 0;
      .icon {
        width: 0.73rem;
        height: 0.73rem;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nick {
        display: flex;
        align-items: center;
        .star {
          display: flex;
          flex-direction: column;
          justify-content: center;
          .star-name {
            font-size: 0.2rem;
            margin-top: 0.05rem;
            margin-left: 0.1rem;
            color: #999;
          }
        }
        .name {
          font-size: 0.32rem;
          margin-left: 0.21rem;
          font-weight: 600;
        }
      }
      .follow {
        background-color: #f8f5f0;
        color: #c3ab87;
        font-size: 0.28rem;
        width: 1.37rem;
        height: 0.63rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 33px;
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
        grid-gap: 5px;
        li {
          img {
            width: 100%;
            border-radius: 0.05rem;
            overflow: hidden;
            height: 1.9rem;
          }
        }
      }
    }
    .footer {
      display: flex;
      padding: 0.3rem 0;
      padding-top: 0.1rem;
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
  .value-v {
    padding-top: 0.54rem;
    .box-1,
    .box-2 {
      border-top: 1px solid #eeeeee;
      padding: 0.2rem 0;
      .title {
        color: #c3ab87;
        text-align: center;
        margin: 0.2rem 0;
        font-size: 0.36rem;
        font-weight: bold;
      }
      /deep/ table{
        width: 100% !important;
      }
      /deep/ img {
        width: 100%;
        height: 5.5rem;
        height: auto !important;
        border-radius: 0.03rem;
      }
    }
    .box-2 {
      img {
        height: 3.7rem;
      }
    }
    font-size: 0.27rem;
    line-height: 0.42rem;
    p {
      margin: 0.3rem 0;
    }
  }
  .serve {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.3rem;
    padding: 0.3rem 0;
    border: 1px solid #eee;
    border-left: none;
    border-right: none;
    margin-bottom: 0.3rem;
  }
}
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 0.2rem 0.45rem;
  font-size: 0.24rem;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  .left {
    img {
      width: 0.4rem;
      margin-right: 0.3rem;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    div {
      width: 2.1rem;
      height: 0.87rem;
      font-size: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
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