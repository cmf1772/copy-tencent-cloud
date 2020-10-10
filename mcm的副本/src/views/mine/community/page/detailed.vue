<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="我的社区" @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <img src="@/assets/images/icon/index/more.png" />
        </template>
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="nav">
        <div class="center-nav">
          <ul>
            <li v-for="(item,index) in activeList" :key="index">
              <span
                :class="item.active == active?'active':''"
                @click="changeActive(item.active)"
              >{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="wrap">
        <div class="posts-detailed">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <div class="name">正龙</div>
            </div>
          </div>
          <div class="title">
            <span>记录不一样的元宵节</span>
          </div>
          <div class="img-view">
            <img src="@/assets/images/index/banner1.jpg" />
            <img src="@/assets/images/index/banner1.jpg" />
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
          <div class="tip">
            <div>#随手拍北京</div>
          </div>
          <div class="foot">
            <span class="time">20分钟前</span>
          </div>
        </div>

        <div class="speak">
          <div class="title">全部评论</div>
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <div class="top">
                <div class="user">
                  <div class="name">正龙</div>
                  <div class="time">02-21</div>
                </div>
                <div class="top-right">
                  7
                  <img src="@/assets/images/icon/ding.png" alt style="width:.3rem;margin-left:.1rem" />
                </div>
              </div>
              <div class="content">记录不一样的元宵节。记录不一样的元宵节记录。</div>
            </div>
          </div>
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <div class="top">
                <div class="user">
                  <div class="name">正龙</div>
                  <div class="time">02-21</div>
                </div>
                <div class="top-right">
                  7
                  <img src="@/assets/images/icon/ding.png" alt style="width:.3rem;margin-left:.1rem" />
                </div>
              </div>
              <div class="content">记录不一样的元宵节。记录不一样的元宵节记录。</div>
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
              <img src="@/assets/images/icon/fenxiang.png" style="width:.3rem;margin-left:.1rem" alt />
            </p>
            <span>4</span>
          </li>
          <li>
            <p>
             <img src="@/assets/images/icon/ding.png"  style="width:.3rem;margin-left:.1rem" alt />
            </p>
            <span>4</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeList: [
        { title: "动态", active: "dynamic" },
        { title: "交友", active: "friends" },
        { title: "圈子", active: "circles" },
        { title: "视频", active: "videos" },
        { title: "直播", active: "live" }
      ],
      active: "circles"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(active) {}
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  padding-bottom: 1.2rem;
  .speak {
    padding: 0.3rem 0;
    padding-top: 0.5rem;
    .title {
      font-size: 0.42rem;
      padding-bottom: 0.4rem;
      font-weight: 600;
    }
    .nick {
      align-items: flex-start;
    }
    .nick:not(:last-child) {
      padding: .45rem 0;
      border-bottom: 1px solid #eee;
    }
    .nick:not(:first-child) {
      padding: .45rem 0;
    }
    .star {
      display: flex;
      padding-left: 0.3rem;
      flex-direction: column;
      .content {
        font-size: 0.3rem;
        padding: 0.2rem 0;
      }
      .top {
        display: flex;
        height: 0.7rem;
        align-items: center;
        justify-content: space-between;
        .user {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .name {
            margin: 0;
            font-size: .32rem;
            font-weight: 400;
          }
          .time {
            font-size: 0.2rem;
            color: #777;
          }
        }
        .top-right {
          font-size: 0.26rem;
          display: flex;
          align-items: flex-end;
          color: #9c9c9c;
        }
      }
    }
  }
  .nick {
    display: flex;
    align-items: center;
    
    .name {
      margin-left: 0.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.28rem;
    }
    .icon {
      width: 0.87rem;
      height: 0.87rem;
      min-width: 0.87rem;
      // border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .posts-detailed {
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #eee;

    .foot {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .time {
        font-size: 0.2rem;
        color: #939393;
      }
    }
    .tip {
      padding-bottom: 0.2rem;
      display: flex;
      div {
        padding: 0.1rem 0.2rem;
        color: #bcbcbc;
        font-size: 0.24rem;
        background: #f7f7f7;
        border-radius: 1rem;
        margin-right: 0.1rem;
      }
    }
    .img-view {
      padding: 0.3rem 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.12rem;
      img {
        width: 100%;
        height: 2.12rem;
        border-radius: 0.05rem;
      }
    }
    .title {
      display: flex;
      padding-top: 0.3rem;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.26rem;
      }
    }
  }
  .center-nav {
    display: flex;
    justify-content: center;
    padding: 0.2rem 0;
    margin-bottom: 0.4rem;
    ul {
      display: flex;
      margin: 0.2rem 0;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    li {
      font-size: 0.34rem;
      line-height: 0.3rem;
      color: #999;
      .active {
        font-size: 0.36rem;
        color: #000;
        font-weight: 600;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 0.5rem;
          height: 3px;
          border-radius: 1px;
          background: #c3ab87;
          bottom: -0.1rem;
          right: 50%;
          transform: translate(50%, 0);
        }
      }
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
  left: 0;
  padding: 0.2rem .45rem;
  box-sizing: border-box;
  .input {
    width: 70%;
    text-align: center;
    font-size: 0.28rem;
    display: flex;
    color: #ccc;
    align-items: center;
    padding-left: 0.2rem;
    justify-content: flex-start;
    border-radius: 58px;
    background: #f7f7f7;
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
      .van-icon {
        font-size: 0.32rem;
      }
    }
  }
}
</style>