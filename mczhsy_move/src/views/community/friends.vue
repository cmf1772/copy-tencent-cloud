<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="交友"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ><template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/xiangji.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="set-t">
        <div class="left">
          <div class="set">
            <span>筛选</span>
            <i class="iconfont icon-down"></i>
          </div>
          <div class="adress">
            <van-icon name="location-o" />苏州市
          </div>
        </div>
        <div class="right">
          <span>谁喜欢我</span>
          <div class="icon-list">
            <div>
              <span style="transform:translate(-0,0)">
                <img src="@/assets/images/index/banner2.jpg" alt />
              </span>
            </div>
            <div>
              <span style="transform:translate(-30%,0)">
                <img src="@/assets/images/index/banner1.jpg" alt />
              </span>
            </div>
            <div>
              <span style="transform:translate(-60%,0)">
                <img src="@/assets/images/index/banner3.jpg" alt />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="value">
        <div class="img-view">
          <img src="@/assets/images/community/bcc02d00886d516073eaf92ac426118b.jpeg" />
        </div>
        <div class="like">
          <p>120</p>
          <span>剩余喜欢</span>
        </div>
        <div class="foot">
          <div class="left">
            <p class="name">默默大师也...</p>
            <div class="adress">
              <span class="km">23.35km</span>
              <span class="adress-t">苏州市 · 高新区</span>
            </div>
            <div class="sex">
              <div class="age">
                <van-icon name="friends-o" />5岁
              </div>
              <span class="z">狮子座</span>
            </div>
            <div class="small">
              <div>
                <img src="@/assets/images/index/banner1.jpg" />
              </div>1/3
            </div>
          </div>
          <div class="right">
            <ul>
              <li>
               <img src="@/assets/images/icon/index/heart.png" />
                <span class="num">喜欢</span>
              </li>
              <li>
                <img src="@/assets/images/icon/community/prev.png" />
                <span class="num">上一个</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
    },
  }
};
</script>
<style lang="less" scoped>
.top{
  /deep/ img{
    width: .4rem;
  }
}

// 主体
.container {
  box-sizing: border-box;
  height: calc(100vh - 49px);
  padding: 0.4rem 0.45rem 0.45rem 0.45rem;
  display: flex;
  flex-direction: column;

  // 中间图片加文字
  .value {
    overflow: hidden;
    margin-top: 0.2rem;
    flex: 1;
    position: relative;

    // //大图
    .img-view {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }

    // 右上角喜欢
    .like {
      position: absolute;
      display: inline-block;
      font-size: 0.18rem;
      color: #fff;
      transform: rotate(45deg);
      right: -1rem;
      top: -1.08rem;
      width: 2rem;
      height: 2rem;
      padding-bottom: 0.1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      p {
        font-size: 0.26rem;
      }
      z-index: 1;
      background: #c3ab87;
    }

    // 地步 
    .foot {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.2rem;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      .left {
        font-size: 0.24rem;
        color: #fff;
        .name {
          font-size: 0.45rem;
          font-weight: bold;
        }
        .adress {
          margin: 0.2rem 0;
          .km {
            margin-right: 0.4rem;
            position: relative;
            font-size: .3rem;
            &::after {
              content: "";
              position: absolute;
              width: 1px;
              height: 80%;
              right: -0.2rem;
              top: 50%;
              transform: translate(-50%, -50%);
              background: #fff;
            }
          }
          .adress-t{
            font-size: .27rem;
          }
        }
        .sex {
          display: flex;
          padding: 0 0.2rem;
          .age {
            margin-right: 0.2rem;
          }
        }
        .small {
          margin-top: 0.2rem;
          display: flex;
          align-items: center;
          margin-left: 0.1rem;
          margin-bottom: 0.1rem;
          div {
            margin-right: 0.2rem;
            position: relative;
            z-index: 9;
            &::after {
              content: "";
              position: absolute;
              width: 0.7rem;
              height: 0.7rem;
              background: #fff;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            img {
              width: 0.6rem;
              height: 0.6rem;
              position: relative;
              z-index: 9;
            }
          }
        }
      }
      .right {
        ul {
          li {
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            margin: 0.3rem 0;
            margin-bottom: 0;
            span {
              font-size: 0.24rem;
              color: #fff;
            }
            img{
              width: 0.7rem;
            }
          }
        }
      }
    }
  }
  .set-t {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      font-size: 0.24rem;
      .set {
        display: flex;
        align-items: flex-end;

        font-size: 0.28rem;
        position: relative;
        margin-right: 0.4rem;
        &::after {
          content: "";
          position: absolute;
          height: 80%;
          width: 1px;
          background: #cccccc;
          right: -0.2rem;
          top: 50%;

          transform: translate(-1px, -50%);
        }
        i {
          font-size: 0.2rem;
          margin-left: 0.05rem;
          transform: translate(0, -5%);
        }
      }
      .adress {
        border-radius: 1rem;
        background: #f7f7f7;
        color: #c3ab87;
        font-size: 0.2rem;
        padding: 0.05rem 0.1rem;
        .van-icon {
          margin-right: 0.1rem;
        }
      }
      div {
        display: flex;
        align-items: center;
      }
    }
    .right {
      span {
        font-size: 0.24rem;
      }
      > span {
        font-size: 0.2rem;
      }
      display: flex;
      align-items: center;
      .icon-list {
        margin-right: -0.2rem;
        margin-left: 0.1rem;
        display: flex;
        align-items: center;
        div {
          display: inherit;
          span {
            display: inline-block;
            position: relative;
            display: inline-block;
            &::after {
              position: absolute;
              content: "";
              background: #fff;
              width: 110%;
              left: 50%;
              top: 50%;
              height: 110%;
              transform: translate(-50%, -50%);
              border-radius: 100%;
            }
          }
          img {
            width: 0.6rem;
            height: 0.6rem;
            position: relative;
            z-index: 1;
            border-radius: 1rem;
          }
        }
        div:not(:first-child) {
          span {
            transform: translate(-50%, 0);
          }
        }
      }
    }
  }
}
</style>