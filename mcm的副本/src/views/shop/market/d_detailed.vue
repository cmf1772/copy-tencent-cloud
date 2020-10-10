<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template #right>
           <img src="@/assets/images/icon/index/code.png" style="width:.5rem;height:auto" />
           <img src="@/assets/images/icon/index/more_white.png" style="height:.4rem;"  />

        </template>
        <template #left>
           <img src="@/assets/images/icon/index/arrow_white.png" />

        </template>
      </van-nav-bar>
    </div>
    <div class="bg-t">
      <img src="@/assets/images/magazine/index/finish/20171113151620_yndHu.jpeg" />
    </div>
    <div class="admin">
      <div class="zm">
        <span>
          <van-icon name="thumb-circle" color="#02A3E7" />芝麻信用
        </span>
        <span>极好</span>
      </div>
      <div class="user">
        <div class="icon">
          <span>
           <img src="@/assets/images/magazine/index/finish/20171113151620_yndHu.jpeg" />
          </span>
        </div>
        <div class="name">
          <span class="name-t">90中年少女</span>
          <span class="nick-name">昵称：90中年少女</span>
          <div class="rz">
            <div>
              <van-icon name="smile-o" />已认证
              <van-icon name="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div class="value">
        <p>刚刚来到集市</p>
        <p>90后射手座女生，艺术行业，限制的东西有任何瑕疵都会提前讲清楚，欢迎大家私聊</p>
      </div>
      <div class="foot">
        <div class="f-l">
          <span>8超赞</span>
          <span>108超赞</span>
          <span>50粉丝</span>
        </div>
        <div class="talk" @click="release">
          <van-icon name="chat" color="#fff" />聊一聊
        </div>
      </div>
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
    <div class="content-l">
      <div class="title">
        <span>服饰</span>
        <van-icon name="arrow" size=".32rem" />
      </div>
      <div class="list">
        <div class="item" v-for="(item,index) in 13" :key="index" @click="detailed">
          <div class="img">
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
          <div class="name">AFV情人节联名款春秋印花 短袖T恤</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="add">
              <van-icon name="plus" size=".3rem" />
            </div>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/images/index/banner1.jpg" />
          </div>
          <div class="name">AFV情人节联名款春秋印花 短袖T恤</div>
          <div class="foot">
            <div class="price">
              <span class="now-p">￥30.26</span>
              <del class="old-p">￥50.52</del>
            </div>
            <div class="add">
              <van-icon name="plus" size=".3rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 精选好点商品 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { title: "商品48", active: "1" },
        { title: "分类12", active: "2" },
        { title: "动态10", active: "3" },
        { title: "评价10", active: "4" }
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
    release() {
      this.$router.push({
        path: "/shop/market/release/good"
      });
    }
  }
};
</script>

<style lang="less" scoped>
//修改框架 样式 权重不够 所以嵌套深
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
    /deep/ .left-top {
      display: flex;
      align-items: flex-end;
      * {
        display: inline;
      }
      .title {
        font-size: 0.28rem;
        font-weight: 600;
        color: #000;
        margin-right: 0.2rem;
      }
    }
    .van-icon {
      margin-left: 0.2rem;
    }
  }
}
.bg-t {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6.19rem;
  &::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.4);
    display: block;
    filter: blur(2px);
  }
  filter: blur(2px);
  overflow: hidden;
  img {
    
    height: 100%;
  }
}
.admin {
  padding: 0 0.45rem;
  padding-top: 0.8rem;
  position: relative;
  .zm {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    font-size: 0.24rem;
    padding: 0.05rem 0.2rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 1rem 0 0 1rem;
    span:first-child {
      display: flex;
      align-items: center;
      margin-right: 0.3rem;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 1px;
        height: 80%;
        background: #fff;
        right: -0.15rem;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
  }
  .user {
    display: flex;
    color: #fff;
    align-items: center;
    .icon {
      border-radius: 1rem;
      border: .02rem solid #fff;
      span {
        position: relative;
        display: inline-block;
        width: 1.24rem;
        height: 1.24rem;
        display: flex;
        align-items: center;
        justify-content: center;
         border-radius: 1rem;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 105%;
          height: 105%;
          border-radius: 100%;
          background: #fff;
          transform: translate(-50%, -50%);
        }
      }
      
      img {
        height: 100%;
        position: relative;
        z-index: 99;
       
      }
    }
    .name {
      flex: 1;
      padding-left: 0.2rem;
      .name-t {
        font-size: 0.28rem;
        font-size: 0.42rem;
      }

      .nick-name {
        font-size: 0.3rem;
      }
    }

    .rz {
      display: inline-flex;
      div {
        font-size: 0.2rem;
        margin-top: 0.1rem;
        display: inline-flex;
        align-items: center;
        padding: 0rem 0.2rem;
        border-radius: 1rem;
        border: 1px solid #fff;
      }
    }
  }
  .value {
    font-size: 0.27rem;
    color: #fff;
    margin-top: 0.3rem;
    p {
      line-height: 0.36rem;
    }
  }
  .foot {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.2rem;
    .f-l {
      span {
        color: #fff;
        font-size: 0.3rem;
        font-weight: bold;
        margin-right: 0.2rem;
      }
    }
    .talk {
      font-size: 0.26rem;
      display: flex;
      align-items: center;
      color: #fff;
      width: 1.44rem;
      height: 0.54rem;
      justify-content: center;
      border-radius: 1rem;
      border: 1px solid #fff;
    }
  }
  .name {
    display: flex;
    flex-direction: column;
  }
}
// 导航
.center-nav {
  margin-top: 0.6rem;
  margin-bottom: 0.2rem;
  ul {
    display: flex;
    padding: 0.2rem .45rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.30rem;
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
.content-l {
  padding: 0 0.45rem;
  padding-top: 1rem;
  .title {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 0.42rem;
      font-weight: 600;
    }
    align-items: center;
  }
  .list {
    padding: 0.2rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.32rem;
    .item {
      display: flex;
      flex-direction: column;
      font-size: 0.2rem;
      padding-bottom: 0.3rem;
      img {
        width: 100%;
        height: 3.13rem;
        border-radius: .04rem;
      }
      .adress,
      .foot {
        display: flex;

        justify-content: space-between;
      }
      .name {
        font-size: 0.27rem;
        font-weight: 400;
        margin-top: 0.15rem;
        margin-bottom: 0.15rem;
      }
      .foot {
        align-items: center;
        .now-p,
        .num {
          font-size: 0.22rem;
          color: #c3ab87;
        }
        .add {
          display: inherit;
        }
        .now-p {
          font-size: 0.32rem;
        }
        .old-p {
          font-size: 0.18rem;
          color: #777;
          margin-left: 0.06rem;
        }
      }
    }
  }
}
</style>