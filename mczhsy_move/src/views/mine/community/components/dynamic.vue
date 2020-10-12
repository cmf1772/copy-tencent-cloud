<template>
  <div class="wrap">
    <div class="list">
      <div class="item" @click="detailed">
        <div class="title-t">2月20日</div>
        <!--第一个幻灯片-->
        <div class="imgs-d">
          <swipers :list="banner.bannerList"></swipers>
        </div>
        <div class="like">
          <div class="zan">
            <div class="icon-list">
              <div>
                <img src="@/assets/images/index/banner1.jpg" />
              </div>
              <div style="right:.2rem">
                <img src="@/assets/images/index/banner2.jpg" />
              </div>
              <div style="right:.4rem">
                <img src="@/assets/images/index/banner3.jpg" />
              </div>
            </div>
            <span>等64次赞</span>
          </div>
          <div class="btn-list">
            <ul>
              <li>
                <span>
                  <img src="@/assets/images/icon/fenxiang.png" alt />
                </span>
              </li>
              <li>
                <span>
                  <img src="@/assets/images/icon/speak.png" alt />
                </span>
              </li>
              <li>
                <span>
                  <img src="@/assets/images/icon/ding.png" alt />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="s-title">记录不一样的元宵节</div>
        <div class="s-value">来自对面小姐姐颜值味道均在线来自对面小姐姐颜值味均在线的早饭的早饭</div>
        <div class="s-star">#新浪年度车##2019微博最佳</div>
        <div class="speak">
          <div class="s-s-title">评论</div>
          <div class="reply">
            <div class="reply-content">
              <ul>
                <li>
                  <span class="name">正龙</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
                <li>
                  <span class="name">正龙say</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
                <li>
                  <span class="name">abbb</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
              </ul>

              <span class="more">--查看更多回复8条</span>
            </div>
          </div>
        </div>
      </div>

      <div class="item" @click="detailed" v-for="(item,index) in 10" :key="index">
        <div class="title-t">2月20日</div>
        <!--第一个幻灯片-->
        <div class="imgs-d">
          <swipers :list="banner.bannerList"></swipers>
        </div>
        <div class="like">
          <div class="zan">
            <div class="icon-list">
              <div>
                <img src="@/assets/images/index/banner1.jpg" />
              </div>
              <div style="right:.2rem">
                <img src="@/assets/images/index/banner2.jpg" />
              </div>
              <div style="right:.4rem">
                <img src="@/assets/images/index/banner3.jpg" />
              </div>
            </div>
            <span>等64次赞</span>
          </div>
          <div class="btn-list">
            <ul>
              <li>
                <span>
                  <img src="@/assets/images/icon/fenxiang.png" alt />
                </span>
              </li>
              <li>
                <span>
                  <img src="@/assets/images/icon/speak.png" alt />
                </span>
              </li>
              <li>
                <span>
                  <img src="@/assets/images/icon/ding.png" alt />
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="s-title">记录不一样的元宵节</div>
        <div class="s-value">来自对面小姐姐颜值味道</div>
        <div class="s-star">#新浪年度车##2019微博最佳</div>
        <div class="speak">
          <div class="s-s-title">评论</div>
          <div class="reply">
            <div class="reply-content">
              <ul>
                <li>
                  <span class="name">正龙</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
                <li>
                  <span class="name">正龙say</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
                <li>
                  <span class="name">abbb</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
              </ul>

              <span class="more">--查看更多回复8条</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swipers from "@/components/swipers/swiper_component"; //大banner

export default {
  components: { swipers },
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
          require("@/assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg"),
          require("@/assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg"),
          require("@/assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg"),
          require("@/assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg")
        ]
      }
    };
  },
  methods: {
    detailed() {
      this.$router.push({
        path: "/mine/community/dynamic/detailed"
      });
    },
    create() {
      // window.localStorage.setItem('circle',false)
    }
  }
};
</script>

<style lang="less" scoped>
.wrap {
  .list {
    .item:not(:last-child) {
      padding-bottom: 0.6rem;
      border-bottom: 1px solid #eee;
    }
    .item:not(:first-child) {
      padding-top: 0.6rem;
    }
    .item {
      .speak {
        padding: 0.2rem 0;
        //回复
        .reply-content {
          background: #f7f7f7;
          padding: 0.2rem 0.1rem;
          font-size: 0.28rem;
          margin-top: 0.2rem;
          .name {
            color: #c3ab87;
          }
          .more {
            color: #988352;
            font-size: 0.22rem;
            letter-spacing: 0.03rem;
          }
          li {
            margin-bottom: 0.3rem;
          }
        }
        .s-s-title {
          margin-top: 0.3rem;
          font-size: 0.26rem;
          color: #777;
        }
      }
      .s-star {
        color: #988352;
        font-size: 0.23rem;
      }
      .s-value {
        font-size: 0.27rem;
        color: #777;
        margin: 0.15rem 0;
      }
      .s-title {
        font-size: 0.3rem;
        margin-top: 0.2rem;
      }
      .like {
        padding: 0.2rem 0;
        display: flex;
        justify-content: space-between;
        .zan {
          display: flex;
          align-items: center;
          span {
            font-size: 0.24rem;
            color: #777;
            margin-left: -0.3rem;
          }
          .icon-list {
            display: flex;
            div {
              position: relative;
              width: 0.48rem;
              height: 0.48rem;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 1rem;
              border: 1px solid #fff;
              img {
                width: 100%;
                height: 100%;
                border-radius: 1rem;
              }
            }
          }
        }
        .btn-list {
          width: 40%;
          ul{
            display: flex;
            justify-content: space-between;
          }
          img {
            width: 0.3rem;
          }
        }
      }
      .title-t {
        font-size: 0.42rem;
        font-weight: 600;
        padding: 0.2rem 0;
        padding-bottom: 0.46rem;
      }
      .imgs-d {
        .banner {
          padding: 0;
          width: 100%;
          /deep/ .swiper-slide {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 6.6rem;
          }
          /deep/ img {
            border-radius: 0.05rem;
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }
}
</style>