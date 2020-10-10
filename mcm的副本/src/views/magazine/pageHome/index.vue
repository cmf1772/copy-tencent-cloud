<template>
  <div class="main">
    <div class="bg"></div>
    <!--搜索框-->
    <div class="search"
         id="search">
      <keep-alive>
        <search placeholdertext="探索美好生活"
                @adressChange="adressChange"
                :popup="true">
          <template v-slot:left>
            {{adressText}}
            <img src="@/assets/images/icon/index/down.png"
                 style="width:.14rem" />
          </template>
        </search>
      </keep-alive>
    </div>

    <div class="banner">
      <div @click="$router.push('/dynamic/follow')">
        <img src="../../../assets/images/magazine/sys.png"
             alt="">
        <p>扫一扫</p>
      </div>
      <div @click="$router.push('/dynamic')">
        <img src="../../../assets/images/magazine/fk.png"
             alt="">
        <p>付款</p>
      </div>
      <div @click="$router.push('/serve/travel')">
        <img src="../../../assets/images/magazine/cx.png"
             alt="">
        <p>出行</p>
      </div>
      <div @click="$router.push('/serve/recovery')">
        <img src="../../../assets/images/magazine/hs.png"
             alt="">
        <p>回收</p>
      </div>
    </div>

    <div class="bannerALl">
      <!--功能入口-->
      <ul class="inavs">
        <li>
          <router-link to="/magazine/index">
            <div class="img">
              <img src="../../../assets/images/magazine/zz.png" />
            </div>
            <p>杂志</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/dynamic/follow">
            <div class="img">
              <img src="../../../assets/images/magazine/na1.png" />
            </div>
            <p>看看</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/dynamic">
            <div class="img">
              <img src="../../../assets/images/magazine/na2.png" />
            </div>
            <p>动态</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/problem">
            <div class="img">
              <img src="../../../assets/images/magazine/na3.png" />
            </div>
            <p>问答</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/broadcast">
            <div class="img">
              <img src="../../../assets/images/magazine/na4.png" />
            </div>
            <p>广播</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/video">
            <div class="img">
              <img src="../../../assets/images/magazine/na5.png" />
            </div>
            <p>视频</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/index">
            <div class="img">
              <img src="../../../assets/images/magazine/zz.png" />
            </div>
            <p>杂志</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/dynamic/follow">
            <div class="img">
              <img src="../../../assets/images/magazine/na1.png" />
            </div>
            <p>看看</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/dynamic">
            <div class="img">
              <img src="../../../assets/images/magazine/na2.png" />
            </div>
            <p>动态</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/problem">
            <div class="img">
              <img src="../../../assets/images/magazine/na3.png" />
            </div>
            <p>问答</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/broadcast">
            <div class="img">
              <img src="../../../assets/images/magazine/na4.png" />
            </div>
            <p>广播</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/video">
            <div class="img">
              <img src="../../../assets/images/magazine/na5.png" />
            </div>
            <p>视频</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/broadcast">
            <div class="img">
              <img src="../../../assets/images/magazine/na4.png" />
            </div>
            <p>广播</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/video">
            <div class="img">
              <img src="../../../assets/images/magazine/na5.png" />
            </div>
            <p>视频</p>
          </router-link>
        </li>
        <li>
          <router-link to="/magazine/more">
            <div class="img">
              <img src="../../../assets/images/magazine/gd.png" />
            </div>
            <p>更多</p>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="content">
      <img src="../../../assets/images/magazine/bannerBG/topBg.png"
           class="bgImg"
           alt="">

      <van-tabs v-model="active"
                color="#C3AB87">
        <van-tab title="资讯">
          <div class="tabContent">
            <div>
              <img src="../../../assets/images/magazine/bannerBG/b1.png"
                   alt="">
              <p>颜值爆表的渐变色蕾丝蛋卷一 个鸡蛋做一堆</p>
            </div>
            <div>
              <img src="../../../assets/images/magazine/bannerBG/b2.png"
                   alt="">
              <p>颜值爆表的渐变色蕾丝蛋卷一 个鸡蛋做一堆</p>
            </div>
            <div>
              <img src="../../../assets/images/magazine/bannerBG/b2.png"
                   alt="">
              <p>颜值爆表的渐变色蕾丝蛋卷一 个鸡蛋做一堆</p>
            </div>
            <div>
              <img src="../../../assets/images/magazine/bannerBG/b2.png"
                   alt="">
              <p>颜值爆表的渐变色蕾丝蛋卷一 个鸡蛋做一堆</p>
            </div>
            <div>
              <img src="../../../assets/images/magazine/bannerBG/b1.png"
                   alt="">
              <p>颜值爆表的渐变色蕾丝蛋卷一 个鸡蛋做一堆</p>
            </div>
            <div>
              <img src="../../../assets/images/magazine/bannerBG/b2.png"
                   alt="">
              <p>颜值爆表的渐变色蕾丝蛋卷一 个鸡蛋做一堆</p>
            </div>
            <div>
              <img src="../../../assets/images/magazine/bannerBG/b1.png"
                   alt="">
              <p>颜值爆表的渐变色蕾丝蛋卷一 个鸡蛋做一堆</p>
            </div>
          </div>
        </van-tab>
        <van-tab title="营销">内容 2</van-tab>
        <van-tab title="通证">内容 3</van-tab>
        <van-tab title="服务">内容 4</van-tab>
        <van-tab title="应用">内容 4</van-tab>
      </van-tabs>
    </div>

    <!-- 导航Lan -->

    <footer-bar></footer-bar>
  </div>
</template>

<script>
import search from "@/components/search/searchPage"; //搜索
import swipers from "@/components/swipers/swiper_component"; //大banner
import swiper from "@/components/swipers/swiper"; //大banner
import smallSwipers from "@/components/swipers/swiper_free"; //小banner
import footerBar from "@/components/customFooter/customFooter"; //底部tabbar
import topNav from "@/components/nav/nav"; //模块头部
import getLocation from '@/mixins/getLocationMixin.js'

export default {
  components: {
    search,
    swiper,
    swipers,
    smallSwipers,
    footerBar,
    topNav
  },
  mixins: [getLocation],
  data () {
    return {
      banner1: {
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
          require("@/assets/images/magazine/index/banner1.jpg"),
          require("@/assets/images/magazine/index/banner2.jpg"),
          require("@/assets/images/magazine/index/banner3.jpg"),
          require("@/assets/images/magazine/index/banner4.jpg"),
          require("@/assets/images/magazine/index/banner5.jpg")
        ]
      },
      active: 0,
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
      nextSwiper: {
        option: {
          slidesPerView: 1.56,
          // spaceBetween:20,
          freeMode: true
        }
      }
    };
  },
  mounted () {

  },
  created () {
    // 请求banner图
    this.$api.index.getBanner().then(res => {
      this.banner1.bannerList = res;
    });

    // 获取分类咨询
    this.getCategoryList();


  },
  methods: {
    //跳转
    forward (name) {
      this.$router.push({
        name
      });
    },


    // 获取分类咨询
    getCategoryList () {
      this.$api.index
        .getNewsList({
          city: this.adressText.split("·")[0]
        })
        .then(res => {
          this.categoryList = res;
        })
        .catch(err => {
          console.log(err);
        });
    },

  }
};
</script>


<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
}
#search {
  padding: 0 0.25rem;
  margin-top: 0.45rem;
}

.bannerALl {
  width: 7.05rem;
  // height: 4.52rem;
  border-radius: 0.2rem;
  background: #fff;
  margin: 0.4rem auto;
  .inavs {
    display: flex;
    flex-wrap: wrap;
    > li {
      font-size: 0.2rem;
      display: flex;
      width: 1.4rem;
      flex-direction: column;
      align-items: center;
      margin-top: 0.5rem;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .img {
        width: 0.35rem;
        height: 0.5rem;
      }

      img {
        width: 0.35rem;
      }

      p {
        // margin-top: 0.1rem;
      }
    }
  }
}

.content {
  width: 7.05rem;
  // height: 4.52rem;
  border-radius: 0.2rem;
  background: #fff;
  margin: 0.4rem auto;
  .bgImg {
    width: 100%;
    border-radius: 0.1rem;
    margin-bottom: 0.3rem;
  }

  .tabContent {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
    padding-top: 20px;

    > :nth-child(even) {
      margin-left: 0.65rem;
      // background: red;
    }
    > div {
      // flex: 1;
      width: 3.19rem;
      > img {
        width: 100%;
        height: 3.19rem;
      }

      > p {
        font-size: 0.25px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
        margin-top: 0.1rem;
        line-height: 0.4rem;
      }
    }
  }
}

.banner {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 0.7rem;
  margin-top: 0.5rem;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.2rem;

    > img {
      width: 0.54rem;
      height: 0.54rem;
    }

    > p {
      margin-top: 0.1rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #777777;
    }
  }
}

.bg {
  height: 5.82rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #dfdfdf, #ffffff);
  z-index: -1;
}
</style>
