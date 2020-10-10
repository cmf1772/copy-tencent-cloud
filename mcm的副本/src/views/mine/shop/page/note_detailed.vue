<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="动态详情" @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="author">
        <div class="nick">
          <div class="icon">
           <img src="@/assets/images/user.png" />
          </div>
          <div class="star">
            <span class="name">正龙</span>
            <div class="time">02-07 发布</div>
          </div>
        </div>
        <div class="more" @click=" show = true">
          <van-icon name="ellipsis" size=".36rem" />
        </div>
      </div>
      <div class="img-view">
        <img src="@/assets/images/magazine/index/finish/20171113151620_yndHu.jpeg" />
      </div>
      <div class="value">
        <p>现在的车都是这么多显示器吗？</p>
        <span>这么多开着不影响驾驶吗</span>
      </div>
      <div class="time">刚刚</div>
    </div>
    <!-- 底部我要评论 -->
    <div class="fix-foot">
      <div class="input">说点什么</div>
      <ul>
        <li>
          <p>
            <img src="@/assets/images/icon/ding.png" style="height:.32rem" alt />
          </p>
          <span>4</span>
        </li>
        <li>
          <p>
            <img src="@/assets/images/icon/speak.png" style="height:.32rem" alt />
          </p>
          <span>4</span>
        </li>
        <li @click=" show = true">
          <p>
           <img src="@/assets/images/icon/fenxiang.png" style="height:.32rem" alt />
          </p>
          <span>4</span>
        </li>
      </ul>
    </div>
    <!-- 分享 -->
    <van-share-sheet v-model="show" title="立即分享给好友" :options="options" @select="onSelect" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" }
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" }
        ]
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSelect(option) {
      Toast(option.name);
      this.show = false;
    }
  }
};
</script>

<style lang="less" scoped>
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
    width: 60%;
    padding-left: 0.2rem;
    font-size: 0.28rem;
    display: flex;
    color: #ccc;
    align-items: center;
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
.container {
  padding: 0.2rem .45rem;
  .time {
    font-size: 0.24rem;
    color: #777;
  }
  .value {
    padding: 0.3rem 0;
    p {
      font-size: 0.3rem;
    }
    span {
      font-size: 0.27rem;
      display: block;
      margin-top: 0.1rem;
      color: #777;
    }
  }
  .img-view {
    margin: 0.45rem 0;
    height: 6.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
  border-radius: 0.05rem; 
  overflow: hidden;
    img {
      height: 100%;
      
      
    }
  }
  // 作者
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0 0.1rem 0;
    .icon {
      width: 0.87rem;
      height: 0.87rem;
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
        margin-left: 0.21rem;
        .time {
          font-size: 0.2rem;
          color: #777;
        }
      }
      .name {
        font-size: 0.3rem;
        font-weight: 600;
      }
    }
    .more {
      .van-icon {
        transform: rotate(90deg);
      }
    }
  }
}
</style>