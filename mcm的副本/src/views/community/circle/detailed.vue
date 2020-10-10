<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
           <img src="@/assets/images/icon/index/fenxiang1.png" />
            <img src="@/assets/images/icon/index/gengduo2.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="warp">
      <div class="top-bg">
        <img src="@/assets/images/magazine/dynamic/u=2466454120,4012831513&fm=26&gp=0.jpg" alt />
      </div>

      <!-- 用户信息 -->
      <div class="club">
        <div class="club-t">
          <div class="icon">
            <img src="@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png" alt />
          </div>
          <div class="name">
            <div class="title">舌尖上的中国</div>
            <div class="detailed-c">
              <span>1645成员</span>
              <span>264贴子</span>
              <div class="g">
                <span>公告</span>
                <van-icon name="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="star-list">
        <div>#零食分享</div>
        <div>#年味儿</div>
        <div>#年夜饭</div>
        <div>#探店</div>
        <div>全部</div>
      </div>

      <div class="container">
        <div class="center-nav">
          <ul>
            <li>
              <span class="active">最新</span>
            </li>
            <li>精华</li>
          </ul>
        </div>
        <div class="list">
           <div class="item">
            <div class="author">
              <div class="nick">
                <div class="icon">
                  <img src="@/assets/images/user.png" /> 
                </div>
                <div class="star">
                  <span class="name">正龙</span>
                </div>
              </div>
            </div>
            <div class="item-value">
              <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>

              <div class="photos">
                <ul
                  :style="`grid-template-columns: repeat(${1 < 2 ? 1:(1<5?2:3)},1fr);`"
                >
                  <li>
                    <img src="@/assets/images/index/banner1.jpg" :style="{'height':'auto','width':'100%'}" />
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer">
              <div class="time">#年味儿</div>
              <ul></ul>
            </div>
          </div>
          <div class="item">
            <div class="author">
              <div class="nick">
                <div class="icon">
                  <img src="@/assets/images/user.png" /> 
                </div>
                <div class="star">
                  <span class="name">正龙</span>
                </div>
              </div>
            </div>
            <div class="item-value">
              <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>

              <div class="photos">
                <ul
                  :style="`grid-template-columns: repeat(${2 < 2 ? 1:(1<5?2:3)},1fr);`"
                >
                  <li>
                    <img src="@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png" :style="{'height':'100%','width':'auto','min-width':'100%'}" />
                  </li>
                  <li>
                    <img src="@/assets/images/magazine/problem/u=116606011,2221389896&fm=26&gp=0.jpg" :style="{'height':'100%','width':'auto'}"/>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer">
              <div class="time">#年味儿</div>
              <ul></ul>
            </div>
          </div>
          <div class="item" v-for="(item,index) in 8" :key="index">
            <div class="author">
              <div class="nick">
                <div class="icon">
                  <img src="@/assets/images/user.png" /> 
                </div>
                <div class="star">
                  <span class="name">正龙</span>
                </div>
              </div>
            </div>
            <div class="item-value">
              <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>

              <div class="photos">
                <ul
                  :style="`grid-template-columns: repeat(${list.length < 2 ? 1:(list.length<5?2:3)},1fr);`"
                >
                  <li v-for="(item,index) in list" :key="index">
                    <img :src="item.src" :style="{'height':list.length == 1?'6.6rem':'2.8rem'}" />
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer">
              <div class="time">#年味儿</div>
              <ul></ul>
            </div>
          </div>
        </div>
      </div>

      <div class="release" @click="release">
        <van-icon name="edit" size=".45rem" />
        <span>发帖</span>
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
          src: require("@/assets/images/index/banner1.jpg")
        },
        {
          src: require("@/assets/images/index/banner1.jpg")
        },
        {
          src: require("@/assets/images/index/banner1.jpg")
        }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    release(){
      this.$router.push({
        path: "/community/circle/release"
      })
    }
  }
};
</script>

<style lang="less" scoped>
//修改框架 样式 权重不够 所以嵌套深
.main {
  height: 100vh;
  position: relative;
  #top {
    .van-icon {
      margin-left: 0.2rem;
    }
    .van-nav-bar {
      background-color: transparent;
      margin-top: 0;
      padding-top: .35rem;
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
    }
  }
}

.warp {
 
  padding-top: calc(2.36rem - 1.6rem);
  
  .top-bg {
    height: 2.36rem;
    width: 100vw;
    max-width: 750px;
    position: absolute;
    overflow: hidden;
    top: 0;
    img {
      width: 100%;
    }
  }

  .club {
    .club-t {
      padding: 0 0.45rem;
      display: flex;
      position: relative;
      align-items: flex-end;
      top: -0.12rem;
      .icon {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 1.85rem;
          height: 1.85rem;
          border-radius: 1.3rem;
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
      .name {
        display: flex;
        margin-left: 0.36rem;
        flex-direction: column;
        padding-bottom: 0.1rem;
        .title {
          font-size: 0.42rem;
          font-weight: 600;
        }
        .detailed-c {
          display: flex;
          margin-top: 0.1rem;
          color: #9c9c9c;
          font-size: 0.26rem;
          > span {
            margin-right: 0.2rem;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              width: 1px;
              height: 60%;
              right: -0.1rem;
              top: 50%;
              transform: translate(0, -50%);
              background: #9c9c9c;
            }
          }
          div {
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }

  .star-list {
    padding: 0 0.45rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.2rem;
    font-size: 0.26rem;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
    div {
      text-align: center;width: 1.5rem;
      height: 0.54rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      background: #f7f7f7;
      color: #c3ab87;
    }
  }
}
.container {
   padding: 0 .45rem;
   .item{
    padding: .45rem 0;
    border-bottom: 1px solid #f7f7f7;
   }
   .item:first-child{
     padding-top: 0;
   }
   .item:last-child{
     border: none;
   }
  // 作者
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0 0.1rem 0;
    .icon {
      width: 0.73rem;
      height: 0.73rem;
      display: flex;
      align-items: flex-start;
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
      }
      .name {
        font-size: 0.32rem;
        margin-left: 0.2rem;
        font-weight: 400;
        font-family:Microsoft YaHei;
      }
    }
  }
  .value {
    font-size: 0.3rem;
    padding: 0.2rem 0;
  }
  .photos {
    width: 100%;
    ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      li {
        height: 2.82rem;
        border-radius: 0.05rem;
        overflow: hidden;
        img {
          height: auto;
          
          overflow: hidden;
          height: auto;
        }
      }
    }
  }
  .footer {
    display: flex;
    padding: 0.3rem 0;
    padding-bottom: 0;
    font-size: 0.26rem;
    color: #999;
    .time {
      flex: 1;
      font-size: 0.28rem;
    }
    ul {
      width: 30%;
      display: flex;
      justify-content: space-around;
      span {
        display: flex;
        align-items: center;
      }
      .van-icon {
        font-size: 0.3rem;
        margin-right: 0.03rem;
      }
    }
  }
  // 导航
  .center-nav {
    margin-bottom: 0.5rem;
    ul {
      display: flex;
      padding: 0.2rem;
      padding-left: 0;
      align-items: center;
    }
    li {
      font-size: 0.34rem;
      margin: 0 10px;
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
}
.release{
  position: fixed;
  right: 0.45rem;
  bottom: 0.45rem;
  display: flex;
  flex-direction: column;
  font-size: .24rem;
  text-align: center;
  justify-content: center;
  width: 1.3rem;
  height: 1.3rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 30px 1px #ccc;
}
</style>