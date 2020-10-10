<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-text left-arrow @click-left="onClickLeft"></van-nav-bar>
    </div>

    <div class="warp">
      <div class="top-bg">
        <img src="@/assets/images/magazine/dynamic/u=2466454120,4012831513&fm=26&gp=0.jpg" alt />
      </div>

      <!-- 用户信息 -->
      <div class="admin">
        <div class="admin-t">
          <div class="icon">
            <img src="@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png" alt />
          </div>
          <div class="btn-list">
            <div class="big">
              <div>
                <van-icon name="plus" />
                <span>关注</span>
              </div>
            </div>
            <div class="small">
              <div>
                <i class="iconfont icon-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="name-a">
          <div class="name">默默大师 MOMO</div>
          <div class="live">
            <span class="live-name">直播号：MOMO</span>
            <span class="h">
              头条主页
              <van-icon name="arrow" size=".28rem" />
            </span>
          </div>
        </div>
        <div class="shop">
          <van-cell>
            <template #title>
              <div class="solt-vell">
                <van-icon name="shop" size=".28rem" />
                <span>商品橱柜</span>
              </div>
            </template>
            <template #default>
              <van-icon name="arrow" size=".28rem" />
            </template>
          </van-cell>
        </div>
      </div>
      <!-- 个性签名 -->
      <div class="autograph">
        <p>任何一件事</p>
        <p>只要坚持的够长久</p>
        <p>它就是无与伦比的美</p>
      </div>
      <!-- 年龄心别 -->
      <div class="sex-age">
        <div class="sex">
          <van-icon name="smile-o" size=".28rem" />
          <span>2岁</span>
        </div>
        <div class="adress">
          <span>苏州</span>
        </div>
      </div>

      <!-- 粉丝 获赞 关注 -->
      <div class="fans">
        <div>
          <span class="num">602.5w</span>获赞
        </div>
        <div>
          <span class="num">156</span>关注
        </div>
        <div>
          <span class="num">602.5w</span>粉丝
        </div>
      </div>

      <!-- 座屏 -->
      <div class="list">
        <div class="tab-bar">
          <ul>
            <li class="active">作品 602</li>
            <li>动态 155</li>
            <li>喜欢 156</li>
          </ul>
        </div>

        <div class="h-list">
          <div class="h">
            <van-icon name="smile-o" size=".28rem" />
            <span>古典舞</span>
            <van-icon name="arrow" size=".28rem" />
          </div>
          <div class="h">
            <van-icon name="smile-o" size=".28rem" />
            <span>广场舞</span>
            <van-icon name="arrow" size=".28rem" />
          </div>
        </div>

        <div class="list-z">
          <ul>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
            </li>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
            </li>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
            </li>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
            </li>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
            </li>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
            </li>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
            </li>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
            </li>
            <li><img src="@/assets/images/magazine/dynamic/ae121ab91485426d8b1a298080148830.jpeg" alt />
            <div class="like">
              <van-icon name="like-o" size=".26rem"/>
              <span class="num">120</span>
            </div>
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
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  #top {
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
.warp {
  padding-top: calc(2.37rem - 49px);
  .top-bg {
    height: 2.37rem;
    width: 100vw;
    max-width: 750px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .admin {
    .admin-t {
      padding: 0 0.35rem;
      display: flex;
      position: relative;
      top: -0.12rem;
      .icon {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 1.9rem;
          height: 1.9rem;
          border-radius: 1.79rem;
          background: #fff;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        img {
          width: 1.79rem;
          height: 1.79rem;
          position: relative;
          z-index: 9;
          border-radius: 1.5rem;
        }
      }
      .btn-list {
        display: flex;
        flex: 1;
        .big {
          flex: 1;
          div {
            width: 100%;
            padding: 0.2rem 0;
            border-radius: 1rem;
            background: #c3ab87;
            color: #fff;
          }
        }
        .small {
          div {
            width: 0.77rem;
            height: 0.77rem;
            border-radius: 1rem;
            color: #c3ab87;
            background: #f7f7f7;
            i{
              font-size: .3rem;
            }
          }
        }
        > div {
          div {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: 0.2rem;
          font-size: 0.26rem;
        }
      }
    }
    .name-a {
      padding: 0.1rem 0.35rem;
      .name {
        font-size: 0.42rem;
        font-weight: 600;
      }
      .live {
        padding: 0.1rem 0;
        display: flex;
        font-size: 0.24rem;
        justify-content: space-between;
        .h {
          display: flex;
          align-items: center;
          i {
            color: #969799;
          }
        }
      }
    }
    /deep/ .van-cell {
      padding-left: 0.35rem;
      padding-right: 0.35rem;
    }
    .solt-vell {
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      color: #c3ab87;
      i {
        margin-right: 0.1rem;
      }
    }
  }

  .autograph {
    padding: 0 0.35rem;
    font-size: 0.3rem;
    p {
      margin: 0.03rem 0;
    }
  }

  .sex-age {
    margin: 0.3rem 0;
    display: flex;
    padding: 0 0.35rem;
    div {
      display: flex;
      align-items: center;
      padding: 0.06rem 0.15rem;
      background: #f3f3f3;
      border-radius: 1rem;
      font-size: 0.24rem;
      margin-right: 0.2rem;
    }
  }

  .fans {
    display: flex;
    padding: 0 0.35rem;
    font-size: 0.28rem;
    color: #9C9C9C;
    div {
      margin-right: 0.2rem;
    }
    span {
      font-weight: 600;
      margin-right: 0.06rem;
      font-size: .28rem;
      color: #000;
    }
  }

  .list {
    margin-top: 0.4rem;
    .tab-bar {
      margin: 0.2rem 0;
      ul {
        display: flex;
        width: 80%;
        justify-content: space-around;
        margin: 0 auto;
        font-size: 0.3rem;
        color: #9c9c9c;
        .active {
          font-weight: 600;
          color: #000;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 40%;
            height: 0.06rem;
            background: #c3ab87;
            bottom: -0.1rem;
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
    }
    .h-list{
      padding: .2rem 0.35rem;;
      font-size: .24rem;
      display: flex;
      .h{
        display: flex;
        align-items: center;
        color:#C3AB87 ;
        margin-right: 0.2rem;
        width: 1.82rem;
        height: 0.74rem;
        justify-content: center;
        border: 1px solid #C3AB87;
        border-radius: 1rem;
      }
    }
  }

  .list-z{
    padding-bottom: 0.1rem;
    ul{
      display: grid;
      grid-template-columns: repeat(3,1fr);
      grid-gap: 0.1rem;
      li{
        position: relative;
        .like{
          display: flex;
          position: absolute;
          left: 0.1rem;
          bottom: 0.1rem;
          font-size: .24rem;
          color: #fff;
          span{
            margin-left: 0.05rem;
          }
        }
        img{
          width: 100%;
          height:2.8rem;
          border-radius: .04rem;

        }
      }
    }
  }
}
</style>