<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="评论列表"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
           <img src="@/assets/images/icon/index/more.png" />
        </template>
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="title">全部评论</div>
      <div class="comment">
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
      </div>
    </div>

    <!-- 底部我要评论 -->
    <div class="fix-foot">
      <div class="input">我也来说~</div>
      <ul>
        <li>
          <p>
            <img src="@/assets/images/icon/speak.png" alt />
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
            <img src="@/assets/images/icon/ding.png" alt />
          </p>
          <span>4</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .title {
    font-size: 0.42rem;
    font-weight: bold;
    margin: 0.2rem 0;
    margin-bottom: .8rem;
  }
  // 精彩品论
  .comment {
    .content:not(:first-child){
      padding-top: 0.4rem;
    }
    .content {
      padding: 0;
      display: flex;
      align-items: flex-start;
      padding-bottom: 0;
      border-bottom: 1px solid #f1f1f1;
      .con {
        padding-left: 0.2rem;
        flex:1;
        border: none;
        .top-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .top {
          display: flex;
          justify-content: space-between;
          .time {
            padding: 0;
            font-size: 0.24rem;
            color: #777;
          }
          .name {
            font-size: 0.32rem;
            font-weight: 400;
          }
          .top-right {
            font-size: 0.28rem;
            display: flex;
            align-items: center;
            img{
              width: .3rem;
              margin-left: 0.1rem;
            }
            color: #9c9c9c;
          }
        }
      }
    }
    .content-box {
      font-size: 0.3rem;
      display: inline-block;
      margin: 0.4rem 0;
      line-height: 0.4rem;
    }
    .title {
      color: #777;
      font-size: 0.24rem;
      margin-bottom: 0.4rem;
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
    width: 4.17rem;
    box-sizing: border-box;
    height: 0.77rem;
    text-align: center;
    font-size: 0.28rem;
    display: flex;
    color: #ccc;
    padding-left: 0.2rem;
    align-items: center;
    border-radius: 58px;
    background: #f7f7f7;
  }
  ul {
    display: flex;
    justify-content: space-around;
    flex: 1;
    align-items: center;
    li {
      display: flex;
      flex-direction: column;
      font-size: 0.24rem;
      text-align: center;
      color: #9c9c9c;
      img{
        height: .3rem;
        margin-bottom: 0.1rem;
      }
    }
  }
}
</style>