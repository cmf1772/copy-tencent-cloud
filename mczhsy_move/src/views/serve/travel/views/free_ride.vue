<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="banner-d">
      <img src="@/assets/images/icon/serve/travel/bg.png" alt />
    </div>
    <div class="container">
      <div class="want-from shadow">
        <div class="want-from-tip">
          <div>
            <img src="@/assets/images/icon/serve/travel/want-from-tip.png" alt />
            <span>出行前完成乘客安全任务</span>
          </div>
          <van-icon name="arrow" size=".32rem" />
        </div>
        <div class="to">
          <div class="to-circle circle"></div>
          <van-cell-group>
            <van-field v-model="toAddress" @focus="checkAddress(true)" placeholder="请输入上车地点" />
          </van-cell-group>
        </div>
        <div class="from">
          <div class="from-circle circle"></div>
          <van-cell-group>
            <van-field v-model="fromAddress" @focus="checkAddress(false)" placeholder="请输入目的地" />
          </van-cell-group>
        </div>
      </div>
      <div class="security shadow">
        <div class="security-title">
          <p>安全课堂</p>
          <span>查看更多</span>
        </div>
        <div class="security-center">
          <div class="security-left">
            <div class="jg"></div>
            <div class="security-text">
              <p>夜间出行考试待完成</p>
              <span>完成安全考试，即可发布夜间行程</span>
            </div>
          </div>
          <div class="security-right">
            <img src="@/assets/images/icon/serve/travel/security-book.png" alt />
          </div>
        </div>
      </div>
      <div class="write">
        <div class="w-left shadow">
          <div class="text">
            <p>记录故事</p>
            <span>分享感动</span>
          </div>
          <img src="@/assets/images/icon/serve/travel/write.png" alt />
        </div>
        <div class="w-right shadow">
          <div class="text">
            <p>共建计划</p>
            <span>建议征集</span>
          </div>
          <img src="@/assets/images/icon/serve/travel/language.png" alt />
        </div>
      </div>
    </div>

    <div class="btn">
      <van-button round type="info" @click="appointment" color="#c3ab87">立即去预约</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toAddress: "电子科技-公交站",
      fromAddress: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    checkAddress(bol) {
      this.$router.push({
        path: "/serve/travel/check_address",
        query: {
          start: bol,
        },
      });
    },
    appointment() {
      this.$router.push({
        path: "/serve/travel/appointment",
      });
    },
  },
};
</script>

<style scoped lang="less">
.btn {
  display: flex;
  justify-content: center;
  .van-button {
    width: 4rem;
    height: 0.9rem;
    font-size: 0.3rem;
  }
}
.container {
  margin-top: 1.5rem;
  padding: 0 0.2rem;
  .shadow {
    box-shadow: 0 0.02rem 0.05rem 0.01rem #f0f0f0;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
    background: #fff;
  }
  .write {
    display: flex;
    > div {
      display: flex;
      flex: 1;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0.3rem;
      p {
        font-size: 0.3rem;
        font-weight: bold;
      }
      span {
        font-size: 0.24rem;
        color: #777;
        display: block;
        margin-top: 0.15rem;
      }
      img {
        width: 0.95rem;
        height: 0.95rem;
      }
    }
    .w-left {
      margin-right: 0.2rem;
    }
  }
  .security {
    padding-bottom: 0.6rem;
    .security-center {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .security-left {
        .jg {
          width: 0.22rem;
          height: 0.05rem;
          margin: 0.5rem 0;
          background: #c3ab87;
          border-radius: 0.02rem;
        }
        p {
          font-size: 0.36rem;
        }
        span {
          font-size: 0.24rem;
          color: #777;
          display: block;
          margin-top: 0.2rem;
        }
      }
      .security-right {
        width: 2.8rem;
        img {
          width: 100%;
        }
      }
    }
    .security-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 0.3rem;
      }
      span {
        font-size: 0.24rem;
        color: #777;
      }
    }
  }
  .want-from {
    box-sizing: border-box;

    padding-bottom: 0;
    .to,
    .from {
      display: flex;
      align-items: center;
      .van-cell-group {
        /deep/ .van-cell {
          padding: 0.25rem 0.2rem;
        }
      }
    }
    .to .circle {
      background: #c3ab87;
    }
    .circle {
      width: 0.16rem;
      height: 0.16rem;
      background: #333;
      border-radius: 1rem;
      margin-right: 0.2rem;
    }
    /deep/ input {
      font-size: 0.27rem;
    }
    .want-from-tip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f6f0e9;
      box-sizing: border-box;
      padding: 0.15rem 0.2rem;
      > div {
        display: flex;
        align-items: center;
      }
      span {
        font-size: 0.24rem;
        color: #777;
        margin-left: 0.2rem;
        display: block;
      }
      img {
        width: 0.45rem;
        height: 0.45rem;
      }
    }
  }
}
//修改框架 样式 权重不够 所以嵌套深
.main {
  #top {
    position: relative;
    z-index: 9;
    .van-nav-bar {
      background: transparent;
      &::after {
        display: none;
      }
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
  img {
    width: 100vw;
    height: 5.62rem;
  }
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
}
</style>