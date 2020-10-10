<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow right-text="按钮" @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <img
            src="@/assets/images/icon/index/search2.png"
            style="width:.4rem;height:auto;margin-left:.5rem"
          />
          <img
            src="@/assets/images/icon/index/xiangji2.png"
            style="width:.45rem;height:auto;margin-left:.5rem"
          />
        </template>
        <template #left>
          <img src="@/assets/images/icon/index/arrow_white.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="bg">
      <img src="@/assets/images/icon/mine/space/bg.png" />
      <div class="user">
        <div class="icon">
          <img src="@/assets/images/magazine/index/finish/20171113151620_yndHu.jpeg" />
        </div>
        <div class="name">90中年少女</div>
      </div>
      <div class="detailed">
        <ul>
          <li @click="release">
            <p>8</p>
            <span>说说</span>
          </li>
          <li @click="myFn('/mine/space/journal')">
            <p>109</p>
            <span>日志</span>
          </li>
          <li @click="myFn('/mine/space/album/index')">
            <p>50</p>
            <span>相册</span>
          </li>
          <li @click="myFn('/mine/space/message')">
            <p>8</p>
            <span>留言</span>
          </li>

          <li @click="myFn('/mine/space/visitor')">
            <el-badge :value="4" class="item-tag">
              <p>10999</p>
              <span>访客</span>
            </el-badge>
          </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="title">
        <div class="t-time">2020-05</div>
        <img src="@/assets/images/icon/mine/space/date.png" style="width:.34rem" />
      </div>
      <div class="say-list">
        <div class="item" v-for="(item,index) in 4" :key="index">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="star">
                <span class="name">默默大师</span>
                <span class="release-time">6-11 12:36</span>
              </div>
            </div>
            <div class="more">
              <van-icon name="ellipsis" size=".36rem" color="#777" />
            </div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
            <div class="photos">
              <ul
                :style="`grid-template-columns: repeat(${list.length < 2 ? 1:(list.length<5?2:3)},1fr);`"
              >
                <li v-for="(item,index) in list" :key="index">
                  <img :src="item.src" />
                </li>
              </ul>
            </div>
          </div>

          <div class="footer">
            <div class="see">浏览30次</div>
            <ul>
              <li>
                <span>
                  <img src="@/assets/images/icon/speak.png" alt /> 4
                </span>
              </li>
              <li>
                <span>
                  <img src="@/assets/images/icon/fenxiang.png" alt /> 4
                </span>
              </li>
              <li>
                <span>
                  <img src="@/assets/images/icon/ding.png" alt /> 4
                </span>
              </li>
            </ul>
          </div>

          <div class="speak">
            <span>评论</span>
            <div class="icon-list">
              <div style="left:.4rem">
                <img src="@/assets/images/index/banner1.jpg" />
              </div>
              <div style="left:.2rem">
                <img src="@/assets/images/index/banner2.jpg" />
              </div>
              <div>
                <img src="@/assets/images/index/banner3.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: require("@/assets/images/index/banner1.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        },
        {
          src: require("@/assets/images/index/banner1.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        },
        {
          src: require("@/assets/images/index/banner1.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        }
      ],
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    release() {
      this.$router.push({
        path: "/mine/space/release"
      });
    },
    myFn(path) {
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang="less" scoped>
.item-tag {
  /deep/ .el-badge__content {
    transform: translateY(-100%) translateX(0%);
  }
}
.container {
  margin-top: calc(4rem);
  padding: 0.4rem 0.45rem;
  // 每一篇
  .say-list {
    .item {
      padding-bottom:1rem;
    }
    .item:last-child{
      padding-bottom: 0.45rem;
    }
    .speak {
      background: #f2f2f2;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.1rem;
      height: 0.77rem;
      span {
        color: #bcbcbc;
        font-size: 0.28rem;
        margin-left: 0.1rem;
      }
      .icon-list {
        display: flex;
        div {
          position: relative;
          width: 0.5rem;
          height: 0.5rem;
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
    // 作者
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.2rem 0 0.1rem 0;
      .icon {
        width: 0.92rem;
        height: 0.92rem;
        // border-radius: 50%;
        overflow: hidden;
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
          .release-time {
            font-size: 0.2rem;
            margin-top: 0.05rem;
            margin-left: 0.2rem;
            color: #999;
          }
        }
        .name {
          font-size: 0.32rem;
          margin-left: 0.2rem;
        }
      }
      .more {
        .van-icon {
          transform: rotate(90deg);
        }
      }
    }
    .value {
      font-size: 0.3rem;
      padding: 0.3rem 0;
    }
    .photos {
      width: 100%;
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
            height: 2.1rem;
          }
        }
      }
    }
    .footer {
      display: flex;
      // padding: 0.2rem 0;
      padding-top: 0.3rem;
      padding-bottom: 0.4rem;
      font-size: 0.26rem;
      color: #999;
      .see {
        flex: 1;
        font-size: 0.26rem;
      }
      ul {
        width: 50%;
        display: flex;
        justify-content: space-between;
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
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    .t-time {
      font-size: 0.42rem;
      font-weight: bold;
    }
  }
}
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
          margin-left: 0.2rem;
        }
      }
      &::after {
        border: none;
      }
      background-color: transparent;
    }
  }
}
.bg {
  .detailed {
    position: absolute;
    bottom: 0;
    width: 100%;
    ul {
      display: flex;
      justify-content: space-between;
      padding: 0.2rem 0.45rem;
      li {
        color: #fff;
        text-align: center;
        p {
          font-size: 0.3rem;
        }
        span {
          font-size: 0.24rem;
        }
        span {
          display: block;
          margin-top: 0.05rem;
        }
      }
    }
  }
  .user {
    display: flex;
    position: absolute;
    top: 50%;
    left: 0.4rem;
    align-items: center;
    margin-top: -0.5rem;
    .name {
      color: #fff;
      font-size: 0.42rem;
      margin-left: 0.2rem;
    }
    .icon {
      width: 1.24rem;
      height: 1.24rem;
      border-radius: 1rem;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #fff;
      img {
        height: 100%;
      }
    }
  }
  padding: 0;
  width: 100vw;
  > img {
    width: 100vw;
    height: 5.25rem;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>