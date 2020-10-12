<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="写日志"
        right-text="发表"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <!-- 文本域 -->
      <div class="textarea">
        <van-cell-group>
          <van-field v-model="title" size="large" placeholder="日志标题" />
        </van-cell-group>
        <van-field v-model="message" rows="5" autosize type="textarea" placeholder="输入正文..." />
      </div>

      <div class="foot">
        <ul>
          <li>
            <img src="@/assets/images/icon/mine/space/img1.png" />
          </li>
          <li>
            <img src="@/assets/images/icon/mine/space/img2.png" />
          </li>
          <li>
            <img src="@/assets/images/icon/mine/space/img3.png" />
          </li>
          <li>
            <img src="@/assets/images/icon/mine/space/img4.png" />
          </li>
          <li>
            <img src="@/assets/images/icon/mine/space/img5.png" />
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
.container {
  padding: 0.2rem 0.45rem;
  .van-cell {
    padding: 0.2rem 0;
  }
  /deep/ textarea {
    font-size: 0.3rem;
  }
  /deep/ input {
    font-size: 0.42rem;
  }
}
.foot {
  position: fixed;
  width: 100%;
  left: 0;
  background: #fff;
  padding: .1rem 0;
  border-top: 1px solid #f1f1f1;
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
      img{
        max-width: .4rem;
      }
    }
  }
}
</style>