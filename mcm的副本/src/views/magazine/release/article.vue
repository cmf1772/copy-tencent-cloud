<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="发文章"
        right-text="下一步"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ><template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template></van-nav-bar>
    </div>
    <div class="container">
      <!-- 发表用户 -->
      <div class="user">
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
      </div>

      <!-- 文本域 -->
      <div class="textarea">
        <van-cell-group>
          <van-field v-model="title" size="large" placeholder="文章标题" />
        </van-cell-group>
        <van-field v-model="message" rows="5" autosize type="textarea" placeholder="输入正文..." />
      </div>

      <div class="foot">
        <ul>
          <li>
            <van-icon name="photo-o" size=".41rem" />
          </li>
          <li>
            <van-icon name="bar-chart-o" size=".41rem" />
          </li>
          <li>
            <van-icon name="info-o" size=".41rem" />
          </li>
          <li>
            <van-icon name="smile-o" size=".41rem" />
          </li>
          <li>
            <van-icon name="music-o" size=".41rem" />
          </li>
          <li>
            <van-icon name="add-o" size=".41rem" />
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
      message: "",
      title: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {}
  }
};
</script>
<style lang="less" scoped>
// 作者
.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0 0.1rem 0;
  margin-bottom: 0.5rem;
  .icon {
    width: 0.68rem;
    height: 0.68rem;
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
      font-size: 0.24rem;
      margin-left: 0.16rem;
    }
  }
}
.textarea {
  /deep/ input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #aab2bd;
    /* placeholder字体大小  */
    font-size: 0.3rem;
    color: #999;
  }
  /deep/ .van-cell-group::after {
    border: none;
  }
}
.container {
  padding: 0 0.45rem;
  /deep/ .textarea {
    font-size: 0.42rem;
    .van-cell {
      ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #bcbcbc;
        font-size: 0.3rem;
      }
    }
    .van-cell:first-child {
      ::-webkit-input-placeholder {
        /* WebKit browsers */
        color: #bcbcbc;
        font-size: 0.42rem;
      }
    }
  }
  .van-cell {
    padding: 0.2rem 0;
  }
  .van-cell-group /deep/ input {
    font-size: 0.32rem;
  }
}
.foot {
  position: fixed;
  width: 100%;
  left: 0;
  background: #fff;
  bottom: 0;
  box-sizing: border-box;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.26rem;
    li {
      padding: 0.2rem 0;
      font-size: 0.32rem;
      .van-icon {
        font-weight: 600;
      }
    }
  }
}
.top{
  /deep/ img{
    height: 0.32rem;
  }
}
</style>