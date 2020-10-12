<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <div class="right-menu-top">
            <img src="@/assets/images/icon/index/search.png" alt />
            <img src="@/assets/images/icon/index/more.png" alt />
          </div>
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <!-- 标题 -->
      <div class="question-title">
        <span>五一为什么连着放五天？</span>
      </div>

      <!-- 所有回答 -->
      <span class="show-more-answer" @click="moreAnswer">
        查看全部26个回答
        <van-icon name="arrow" />
      </span>

      <!-- 写回答  -->
      <div class="get-more">
        <div class="invitation">
          <van-icon name="contact" />邀请回答
        </div>
        <div class="me" @click="answer()">
          <van-icon name="edit" />我来回答
        </div>
      </div>

      <!-- 文章内容 -->
      <div class="content">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="name-user">
              <span class="name">正龙</span>
              <div class="time-star">
                <span>6-05 12:36</span>
                <span class="star">美妆博主</span>
              </div>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>

        <!-- 文章详情 -->
        <div class="con">
          <p>记录不一样的元宵节记录不一样的元宵节宵记录不一样的元宵节。记录不一样的元宵节节。记录不一样的元宵节记录不一样的元宵记录不一样的元宵节。</p>
          <p>记录不一样的元宵节记录不一样的元宵节宵记录不一样的元宵节。记录不一样的元宵节节。记录不一样的元宵节记录不一样的元宵记录不一样的元宵节。记录不一样的元宵节记录不一样的元宵节宵记录不一样的元宵节。记录不一样的元宵节节。记录不一样的元宵节记录不一样的元宵记录不一样的元宵节。</p>
          <p>记录不一样的元宵节记录不一样的元宵节宵记录不一样的元宵节。记录不一样的元宵节节。记录不一样的元宵节记录不一样的元宵记录不一样的元宵节。记录不一样的元宵节记录不一样的元宵节宵记录不一样的元宵节。记录不一样的元宵节节。记录不一样的元宵节记录不一样的元宵记录不一样的元宵节。记录不一样的元宵节记录不一样的元宵节宵记录不一样的元宵节。记录不一样的元宵节节。记录不一样的元宵节记录不一样的元宵记录不一样的元宵节。记录不一样的元宵节记录不一样的元宵节宵记录不一样的元宵节。记录不一样的元宵节节。记录不一样的元宵节记录不一样的元宵记录不一样的元宵节。</p>
        </div>

        <!-- 赞赏 -->
        <div class="appreciate">
          <div class="val">赞赏</div>
          <span class="tips">还没有人赞赏他，快来成为第一个吧</span>
        </div>

        <div class="comment new-comment">
          <div class="title">全部评论</div>
          <div class="content">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
            </div>
            <div class="con">
              <div class="top">
                <div class="top-left">
                  <span class="name">正龙</span>
                  <span class="time">02-09</span>
                </div>
                <div class="top-right">
                  7
                  <img src="@/assets/images/icon/ding.png" alt />
                </div>
              </div>
              <span class="content-box">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
            </div>
          </div>
          <div class="content">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
            </div>
            <div class="con">
              <div class="top">
                <div class="top-left">
                  <span class="name">正龙</span>
                  <span class="time">02-09</span>
                </div>
                <div class="top-right">
                  7
                  <img src="@/assets/images/icon/ding.png" alt />
                </div>
              </div>
              <span class="content-box">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
            </div>
          </div>
          <div class="content">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
            </div>
            <div class="con">
              <div class="top">
                <div class="top-left">
                  <span class="name">正龙</span>
                  <span class="time">02-09</span>
                </div>
                <div class="top-right">
                  7
                  <img src="@/assets/images/icon/ding.png" alt />
                </div>
              </div>
              <span class="content-box">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
            </div>
          </div>
          <div class="content">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
            </div>
            <div class="con">
              <div class="top">
                <div class="top-left">
                  <span class="name">正龙</span>
                  <span class="time">02-09</span>
                </div>
                <div class="top-right">
                  7
                  <img src="@/assets/images/icon/ding.png" alt />
                </div>
              </div>
              <span class="content-box">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>

              <div class="reply">
                <div class="reply-content">
                  <ul>
                    <li>
                      <span class="name">正龙</span>:
                      <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                    </li>
                    <li>
                      <span class="name">正龙</span>:
                      <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                    </li>
                    <li>
                      <span class="name">正龙</span>:
                      <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                    </li>
                  </ul>

                  <span class="more">--查看更多回复--</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部我要评论 -->
    <div class="fix-foot">
      <div class="input">
        <div class="up">
          <i class="iconfont icon-up"></i>
          <span>赞同 3.2 万</span>
        </div>
        <div class="down">
          <i class="iconfont icon-down"></i>
        </div>
      </div>
      <ul>
        <li>
          <p>
            <img src="@/assets/images/icon/ding.png" alt />
          </p>
          <span>4</span>
        </li>
        <li>
          <p>
            <img src="@/assets/images/icon/shoucang.png" alt />
          </p>
          <span>4</span>
        </li>
        <li>
          <p>
            <img src="@/assets/images/icon/speak.png" alt />
          </p>
          <span>4</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({
        name: "reproblem"
      });
    },
    answer() {
      this.$router.push({
        path: "/magazine/problem/answer"
      });
    },
    moreAnswer() {
      this.$router.push({
        name: "allanswer"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  /deep/ .right-menu-top {
    display: flex;
    align-items: center;
    img {
      height: 0.3rem;
      margin-left: 0.7rem;
    }
  }
}
.container {
  padding: 0 0.45rem;

  // 问题标题
  .question-title {
    margin: 0.2rem 0;
    font-size: 0.49rem;
    font-weight: bold;
  }

  //查看更多大啊
  .show-more-answer {
    font-size: 0.26rem;
    color: #c3ab87;
    letter-spacing: 0.03rem;
    display: flex;
    align-items: center;
    color: #a1a4af;
    margin: 0.54rem 0 0.43rem 0;
  }

  // 邀请回答 我来回答
  .get-more {
    width: 80%;
    margin: 0.2rem auto 0.6rem auto;
    display: flex;
    justify-content: space-around;
    div {
      padding: 0.1rem 0.4rem;
      font-size: 0.24rem;
      display: flex;
      align-items: center;
      border-radius: 31px;
      color: #c3ab87;
      border: 1px solid #c3ab87;
    }
  }
  // 作者
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0;
    margin-bottom: 0.7rem;
    .name-user {
      margin-left: 0.23rem;
    }
    .time-star {
      display: flex;
      font-size: 0.24rem;
      align-items: center;
      margin-top: 0.1rem;
      color: #a1a4af;
      .star {
        position: relative;
        &::before {
          width: 2px;
          height: 80%;
          border-radius: 1px;
          content: "";
          position: absolute;
          background: #f7f7f7;
          left: -0.1rem;
          top: 50%;
          transform: translate(0, -50%);
        }
      }
      span {
        margin-right: 0.2rem;
      }
    }
    .icon {
      width: 0.87rem;
      height: 0.87rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nick {
      display: flex;
      align-items: center;

      .name-user {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }
      .name {
        font-size: 0.32rem;
        font-weight: 400;
      }
    }
    .follow {
      background-color: #f8f5f0;
      color: #c3ab87;
      font-size: 0.28rem;
      width: 1.38rem;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
    }
  }

  // 内容
  .con {
    border-bottom: 1px solid #eee;
    p {
      font-size: 0.3rem;
      letter-spacing: 0.02rem;
      margin: 0.45rem 0;
      line-height: 0.48rem;
    }
  }

  // 赞赏
  .appreciate {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 0.6rem;
    .val {
      color: #fff;
      background: #c3ab87;
      font-size: 0.28rem;
      width: 1.65rem;
      height: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
    }
    span {
      font-size: 0.24rem;
      margin: 0.37rem;
      color: #a1a4af;
    }
  }

  // 评论
  .comment {
    margin-top: 1.16rem;
    padding-bottom: 1rem;
    .content {
      padding: 0;
      display: flex;
      align-items: flex-start;
      padding: 0.2rem 0;
      border-bottom: 1px solid #eee;
      .con {
        padding-left: 0.2rem;
        border: none;
        flex: 1;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .time {
            padding: 0;
            display: flex;
            color: #777;
            font-size: 0.24rem;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.05rem;
          }
          .name {
            font-size: 0.32rem;
            font-weight: 400;
          }
          .top-right {
            font-size: 0.22rem;
            display: flex;
            align-items: center;
            color: #9c9c9c;
            img {
              width: 0.3rem;
              margin-left: 0.1rem;
            }
          }
        }
      }
    }
    .content-box {
      margin: 0.2rem 0;
      margin-top: 0.4rem;
      margin-bottom: 0.5rem;
      font-size: 0.3rem;
      line-height: 0.36rem;
      display: inline-block;
    }
    .title {
      color: #777;
      font-size: 0.26rem;
      margin-bottom: 0.4rem;
    }
    .icon {
      width: 0.87rem;
      height: 0.87rem;
      margin-top: 0.1rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nick {
      display: flex;
      align-items: center;
    }
  }

  //回复
  .reply-content {
    background: #f7f7f7;
    padding: 0.2rem 0.1rem;
    font-size: 0.28rem;
    .name {
      color: #d2c1a9;
      margin-right: 0.1rem;
    }
    .more {
      color: #d2c1a9;
      font-size: 0.24rem;
    }
    li {
      margin-bottom: 0.4rem;
    }
  }
}

//底部固定
.fix-foot {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: #fff;
  display: flex;
  padding: 0.2rem;
  box-sizing: border-box;
  .input {
    display: flex;
    width: 60%;
    background: #f7f7f7;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .down {
      position: relative;
      padding-left: 0.1rem;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 70%;
        top: 50%;
        transform: translate(0, -50%);
        left: 0.1rem;
        background: #c3ab87;
      }
    }
    i {
      margin: 0 0.1rem;
      font-size: 0.32rem;
    }
    * {
      color: #c3ab87;
      font-size: 0.26rem;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    flex: 1;
    li {
      display: flex;
      flex-direction: column;
      font-size: 0.24rem;
      text-align: center;
      color: #9c9c9c;
      img {
        width: 0.3rem;
      }
    }
  }
}
</style>