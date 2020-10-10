<template>
  <div class="main">
    <div class="top">
      <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <img src="@/assets/images/icon/index/search.png" />
          <img src="@/assets/images/icon/index/xiangji.png" style="margin-left:.5rem" />
        </template>
        <template #left>
          <div class="left-top">
            <span class="title">分享</span>
            <span class="adress">苏州市</span>
          </div>
        </template>
      </van-nav-bar>
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

    <!-- 主体 -->
    <div class="content">
      <div class="item">
        <!-- 作者 -->
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <span class="name">正龙</span>
          </div>
          <div class="follow">关注</div>
        </div>

        <!-- 文章详情 -->
        <div class="con">
          <span class="sub-title">不一样的元宵节。不一样的元宵节。不一样的元宵节。</span>
          <p>内容内容内容内容内容内容内容。内容内容内容内容内容内容内容内容内。容内容内容内容内容内容内容内容内容内容内容内容内容内容。内容内容内容内容内容内容内容内容内。容内容内容内容内容内容内容</p>
        </div>

        <!-- 图片 -->
        <div class="img">
          <img src="@/assets/images/shop/ae121ab91485426d8b1a298080148830.jpeg" />
        </div>

        <!-- 推荐商品 -->
        <div class="commend">
          <div class="view">
            <img src="@/assets/images/shop/wechat8.jpg" />
          </div>
          <div class="content-v">
            <div class="title">壁挂式垃圾桶壁挂式垃圾桶壁挂式垃圾桶壁挂式垃圾桶</div>
            <div class="price">
              <div class="p">
                ￥
                <span>199</span>
              </div>
              <div class="go">前往购买</div>
            </div>
          </div>
        </div>

        <!-- 我的位置 -->
        <div class="adress-m">· 我在：苏州中心（星巴克）</div>

        <!-- 评论 -->
        <div class="speak" @click="commentList">
          <div class="t">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="name">默默:</div>
          </div>
          <div class="f">记录不一样的元宵节记录不一样的元宵节</div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="item" v-for="(i,j) in 5" :key="j">
        <!-- 作者 -->
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <span class="name">正龙</span>
          </div>
          <div class="follow">关注</div>
        </div>

        <!-- 文章详情 -->
        <div class="con">
          <span class="sub-title">不一样的元宵节。不一样的元宵节。不一样的元宵节。</span>
          <p>内容内容内容内容内容内容内容。内容内容内容内容内容内容内容内容内。容内容内容内容内容内容内容内容内容内容内容内容内容内容。内容内容内容内容内容内容内容内容内。容内容内容内容内容内容内容</p>
        </div>

        <!-- 图片 -->
        <div class="img">
          <img src="@/assets/images/shop/wechat7.jpg" />
        </div>

        <!-- 推荐商品 -->
        <div class="commend">
          <div class="view">
            <img src="@/assets/images/shop/wechat8.jpg" />
          </div>
          <div class="content-v">
            <div class="title">壁挂式垃圾桶壁挂式垃圾桶壁挂式垃圾桶壁挂式垃圾桶</div>
            <div class="price">
              <div class="p">
                ￥
                <span>199</span>
              </div>
              <div class="go">前往购买</div>
            </div>
          </div>
        </div>

        <!-- 我的位置 -->
        <div class="adress-m">· 我在：苏州中心（星巴克）</div>

        <!-- 评论 -->
        <div class="speak" @click="commentList">
          <div class="t">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="name">默默:</div>
          </div>
          <div class="f">记录不一样的元宵节记录不一样的元宵节</div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: "关注", active: "1" },
        { title: "上新", active: "2" },
        { title: "种草", active: "3" },
        { title: "视频", active: "4" },
        { title: "直播", active: "5" }
      ],
      active: "1"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    changeActive(activeName) {
      this.active = activeName;
    },
    onClickRight() {},
    commentList() {
      this.$router.push({
        path: "/shop/note/comment"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  /deep/ .left-top {
    display: flex;
    align-items: flex-end;
    * {
      display: inline-block;
    }
    .title {
      font-size: 0.42rem;
      font-weight: 600;
      color: #000;

      margin-right: 0.2rem;
    }
    .adress {
      font-size: 0.28rem;
      color: #222;
    }
  }
  .van-icon {
    margin-left: 0.2rem;
  }
}
// 导航
.center-nav {
  margin: 0.2rem 0;
  ul {
    display: flex;
    padding: 0.2rem 0.45rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.3rem;
    line-height: 0.3rem;
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
        bottom: -0.2rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
// //主体
.content {
  padding: 0 0.45rem;
  padding-bottom: 0.45rem;
  .item {
    padding: 0.51rem 0;
    // 作者
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.2rem 0;
      .icon {
        width: 0.92rem;
        height: 0.92rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nick {
        display: flex;
        align-items: center;
        .name {
          font-size: 0.32rem;
          margin-left: 0.22rem;
          font-weight: 600;
        }
      }
      .follow {
        background-color: #f8f5f0;
        color: #c3ab87;
        font-size: 0.3rem;
        width: 1.37rem;
        height: 0.63rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 33px;
      }
    }

    // 内容
    .con {
      padding-bottom: 0.2rem;
      border-bottom: 1px solid #eee;
      .sub-title {
        font-size: 0.36rem;
        color: #000;
        display: inline-block;
        line-height: 0.52rem;
      }

      p {
        font-size: 0.3rem;
        color: #515151;
        letter-spacing: 0.02rem;
        overflow: hidden;
        margin-top: 0.05rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
    .img {
      img {
        width: 100%;
        height: 6.6rem;
        border-radius: 0.06rem;
        max-width: 100%;
      }
    }
    .commend {
      margin: 0.2rem 0;
      display: flex;
      img {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 0.03rem;
      }
      .content-v {
        padding-left: 0.2rem;
        display: flex;
        font-size: 0.2rem;
        flex-direction: column;
        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          font-size: 0.27rem;
        }
        .price {
          display: flex;
          margin-top: auto;
          .p {
            font-size: 0.24rem;
            color: #c3ab87;
            span {
              font-size: 0.36rem;
              margin-left: -0.1rem;
            }
          }
          .go {
            color: #777;
          }
          align-items: flex-end;
          justify-content: space-between;
        }
      }
    }
    .adress-m {
      color: #9c9c9c;
      font-size: 0.26rem;
    }
    .speak {
      margin: 0.2rem 0;
      padding: 0.2rem;
      background: #f7f7f7;
      .t {
        display: flex;
        align-items: center;
        .name {
          font-size: 0.26rem;
          color: #777;
          margin-left: 0.17rem;
        }
        .icon {
          display: inline-flex;
          img {
            width: 0.38rem;
            height: 0.38rem;
            border-radius: 50%;
          }
        }
      }
      .f {
        font-size: 0.3rem;
        margin-top: 0.1rem;
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
        img {
          width: 0.3rem;
          margin-right: 0.1rem;
        }
      }
    }
  }
  .item:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
  .item:last-child {
    padding-bottom: 0;
  }
}
</style>