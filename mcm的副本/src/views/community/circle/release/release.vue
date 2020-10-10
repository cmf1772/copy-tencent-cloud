<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="舌尖上的北京"
        right-text="发布"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ></van-nav-bar>
    </div>
    <div class="container">
      <div class="textarea">
        <van-field
          v-model="message"
          rows="5"
          type="textarea"
          placeholder="此刻所想..."
          show-word-limit
        />
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="list">
        <van-cell title="拓展链接" is-link />
        <van-cell title="添加位置" is-link />
        <p class="title">添加话题</p>
        <div class="star-list">
          
          <div>#零食分享</div>
          <div>#年味儿</div>
          <div>#年夜饭</div>
          <div>#探店</div>
          <div>#饮料酒水</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg", isImage: true }
      ]
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

<style scoped lang="less">
.container {
  padding: 0 0.45rem;
  .van-cell {
    padding: 0.33rem 0;
  }
  .van-uploader {
    margin-top: 0.2rem;
  }
  .list {
    /deep/ .van-cell__title:first-child span,.title {
      display: inline-block;
      color: #000;
      font-size: 0.3rem;
    }
  }
    .van-uploader /deep/ .van-uploader__wrapper{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: .3rem;
  }
  /deep/ .van-uploader__preview-image{
    width: 2rem;
    height: 2rem;
  }
  /deep/ .van-uploader__preview{
    margin:  0;
  }
  /deep/ .van-uploader__upload{
    width: 2rem;
    height: 2rem;
    margin: 0;
  }
  .star-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0.2rem;
    grid-row-gap: .32rem;
    font-size: 0.26rem;
    margin-top: 0.3rem;
    margin-bottom: 0.4rem;
    div {
      text-align: center;
      padding: 0.1rem 0.1rem;
      border-radius: 1rem;
      background: #f7f7f7;
      color: #c3ab87;
    }
  }
}
</style>