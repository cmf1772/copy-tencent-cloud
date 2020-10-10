<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow @click-left="onClickLeft">

        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="bg">
      <img src="@/assets/images/icon/mine/community/bg.png" />
      <div class="user">
        <div class="icon">
          <img src="@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png" />
        </div>
        <div class="center">
          <div class="name">舌尖上的北京</div>
          <div class="posts">
            <div>
              <van-icon name="friends-o" size=".28rem" color="#9c9c9c" />90
            </div>
            <div>
              <van-icon name="orders-o" size=".28rem" color="#9c9c9c" />20
            </div>
          </div>
          <div class="foot">
            <div>
              <span>21</span>
              今日帖子
            </div>
            <div>
              <span>100</span>
              新增会员
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="content">
        <!-- 每一篇文章 -->
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
            <div class="more" @click="show = true">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
            <div class="img-view">
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
          </div>

          
        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt /> 
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />
              </span>
            </li>
          </ul>
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
            <div class="more" @click="show = true">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          </div>

          
        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt /> 
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />
              </span>
            </li>
          </ul>
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
            <div class="more" @click="show = true">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
            <div class="img-view" :style="`grid-template-columns: repeat(1, 1fr);`">
              <img style="height:3.43rem" src="@/assets/images/index/banner1.jpg" />
            </div>
          </div>

          
        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt /> 
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />
              </span>
            </li>
          </ul>
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
            <div class="more" @click="show = true">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
            <div class="img-view">
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
              <img src="@/assets/images/index/banner1.jpg" />
            </div>
          </div>

          
        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt /> 
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />
              </span>
            </li>
          </ul>
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
            <div class="more" @click="show = true">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          </div>

          
        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt /> 
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />
              </span>
            </li>
          </ul>
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
            <div class="more" @click="show = true">
              <van-icon name="ellipsis" size=".32rem" />
            </div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
            <div class="img-view" :style="`grid-template-columns: repeat(1, 1fr);`">
              <img style="height:3.43rem" src="@/assets/images/index/banner1.jpg" />
            </div>
          </div>

          
        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt /> 
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />
              </span>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @cancel="onCancel"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '转发' }, { name: '编辑' }],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    onCancel(){}
  }
};
</script>

<style lang="less" scoped>
.wrap {
  padding: 3.5rem 0.45rem 0.3rem 0.45rem;
  // 每一篇
  .content {
    .item:not(:last-child) {
      padding-bottom: 0.4rem;
      border-bottom: 1px solid #eee;
    }
    .item:not(:first-child) {
      padding-top: 0.4rem;
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
        // border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
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
          font-weight: 600;
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
      padding: 0.2rem 0;
    }
    .img-view {
      padding: 0.1rem 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.1rem;
      img {
        width: 100%;
        height: 2.12rem;
        border-radius: 0.05rem;
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
      display: flex;
      justify-content: space-around;
      span {
        display: flex;
        align-items: center;
      }
      img {
        width: 0.3rem;
        margin-left: 0.6rem;
      }
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
  .user {
    display: flex;
    position: absolute;
    top: 50%;
    left: 0.4rem;
    align-items: flex-start;
    margin-top: -0.5rem;
    color: #9c9c9c;
    bottom: 0;
    .center {
      flex: 1;
      padding-left: 0.5rem;
      display: flex;
      flex-direction: column;
      height: 100%;
      padding-bottom: 0.3rem;
      box-sizing: border-box;
      .foot {
        display: flex;
        margin-top: auto;
        div {
          display: flex;
          flex-direction: column;
          font-size: 0.24rem;
          color: #9c9c9c;
          margin-right: 0.4rem;
          span {
            font-size: 0.3rem;
            color: #000;
            font-weight: bold;
          }
        }
      }
      .posts {
        display: flex;
        padding: 0.3rem 0;
        font-size: 0.22rem;
        padding-top: 0.15rem;
        div {
          display: flex;
          align-items: flex-end;
          padding: 0.05rem 0;
          color: #9c9c9c;
          margin-right: 0.4rem;
        }
      }
      .name {
        color: #fff;
        font-size: 0.42rem;
        font-weight: bold;
        color: #000;
      }
    }
    .icon {
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 1rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
      }
    }
  }
  padding: 0;
  width: 100vw;
  > img {
    width: 100vw;
    height: 4.65rem;
  }
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
</style>