<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="新建相册" left-arrow @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <van-field
        v-model="message"
        rows="2"
        autosize
        type="textarea"
        show-word-limit
        placeholder="请填写相册名称"
      />
      <div class="private">
        <div>
          <img src="@/assets/images/icon/mine/space/diqiu.png" style="width:.3rem;margin-right:.1rem" />
          <span>公开</span>
        </div>
      </div>

      <div class="wrap">
        <div class="title">
          <span>个性主题</span>
          <div>
            普通相册
            <van-icon name="arrow-down" size=".26rem" color="#777" />
          </div>
        </div>

        <div class="theme">
          <div class="item">
            <div>
              <img src="@/assets/images/icon/mine/space/zt1.png" style="width:.9rem " />
            </div>
            <span>普通</span>
          </div>
          <div class="item">
            <div>
              <img src="@/assets/images/icon/mine/space/zt2.png" style="width:.9rem " />
            </div>
            <span>多人</span>
          </div>
          <div class="item">
            <div>
              <img src="@/assets/images/icon/mine/space/zt3.png" style="width:.9rem " />
            </div>
            <span>亲子</span>
          </div>
          <div class="item">
            <div>
              <img src="@/assets/images/icon/mine/space/zt4.png" style="width:.9rem " />
            </div>
            <span>旅游</span>
          </div>
          <div class="item">
            <div>
              <img src="@/assets/images/icon/mine/space/zt5.png" style="width:.9rem " />
            </div>
            <span>情侣</span>
          </div>
        </div>

        <div class="btn">
          <van-button round type="info" color="#c3ab87">完成</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 0.2rem 0.45rem;
  .wrap {
    padding-top: 0.4rem;
    .btn {
      display: flex;
      justify-content: center;
      margin-top: 0.4rem;
      .van-button {
        width: 3.93rem;
        height: 0.87rem;
      }
    }
    .theme {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 0.2rem;
      padding: 0.6rem 0 0.4rem 0;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        span {
          font-size: 0.24rem;
          color: #777777;
          margin-top: 0.2rem;
        }
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      span {
        font-size: 0.3rem;
        font-weight: 600;
      }
      div {
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        color: #777;
        .van-icon {
          margin-left: 0.1rem;
        }
      }
    }
  }
  .private {
    font-size: 0.3rem;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.4rem;
    margin: 0rem 0;
    div {
      background: #f7f7f7;
      padding: 0.1rem 0.2rem;
      display: flex;
      align-items: center;
      color: #999;
      border-radius: 1rem;
    }
  }
  .van-field {
    padding: 0.2rem 0;
    /deep/ textarea {
      font-size: 0.42rem;
    }
    &::after {
      border: none;
    }
  }
}
</style>