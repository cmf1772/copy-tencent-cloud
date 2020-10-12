<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="扫码投递"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
       <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/sean.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="center">
        <div class="title">
          <div class="author">
            <div class="icon">
              <img src="@/assets/images/index/banner4.jpg" alt />
            </div>
            <div class="name">
              <div class="nick">
                <span>默默大师</span>
                <img src="@/assets/images/icon/index/woman.png" style="width:.2rem" alt="">
              </div>
              <div class="adress">
                <span>江苏</span>
                <span>苏州</span>
              </div>
            </div>
          </div>
        </div>
        <div class="code">
          <img src="@/assets/images/serve/recovery/code.png" alt />
        </div>
      </div>
      <div class="foot">
        <span class="tips">将二维码展示到扫码口即可开门</span>
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
      this.$router.go(-1)
    },
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  padding: 0.5rem;
  box-sizing: border-box;
  height: calc(100vh - 46px);
  padding-bottom: 0;
  .center {
    padding: 1rem .7rem .6rem .7rem;
    background: #fff;
    box-shadow: 0 0 .2rem .01rem #f0f0f0;
  }
  .author {
    align-items: center;
    display: flex;
    .icon {
      margin-right: 0.2rem;
      img {
        width: .96rem;
        height: .96rem;
        border-radius: 100%;
      }
    }
    .name {
      font-size: 0.24rem;
      .nick {
        display: inline-block;
        display: flex;
        align-items: center;
        span {
          font-size: 0.3rem;
          font-weight: 600;
          margin-right: 0.1rem;
        }
      }
      .adress {
        margin-top: 0.05rem;
        color: #999;
        * {
          margin-right: 0.2rem;
        }
      }
    }
  }
  .code {
    display: flex;
    justify-content: center;
    img {
      margin: 0.7rem 0;
      width: 4.24rem;
      height: 4.24rem;
    }
  }
  .foot {
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    .tips {
      font-size: 0.27rem;
      color: #34393F;
      margin: auto;
    }
  }
}
</style>