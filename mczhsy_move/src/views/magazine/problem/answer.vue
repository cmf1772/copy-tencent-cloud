<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title
        right-text="发布"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ></van-nav-bar>
    </div>
    <div class="container">

      <!-- 问题标题 -->
      <div class="question-title">公务员买宝马3系过分吗？</div>

      <!-- 回答区域 -->
      <div class="answer-area">
        <van-field
          v-model="message"
          rows="5"
          autosize
          type="textarea"
          maxlength="1000"
          placeholder="详细描述您的知识、经验和见解吧"
        />
      </div>
    </div>

    <!-- 底部 -->
     <div class="foot">
        <ul>
          <li><van-icon name="photo-o" size=".36rem"/></li>
          <li><van-icon name="bar-chart-o" size=".36rem"/></li>
          <li><van-icon name="info-o" size=".36rem"/></li>
          <li><van-icon name="smile-o" size=".36rem"/></li>
          <li><van-icon name="music-o" size=".36rem"/></li>
          <li><van-icon name="add-o" size=".36rem"/></li>
        </ul>
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
      this.$router.go(-1)
    },
    onClickRight() {}
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 .45rem;
  .question-title {
    font-size: 0.36rem;
    font-weight: bold;
    padding: 0.2rem;
    padding-left: 0;
  }
  .van-cell{
    padding-left: 0;
    padding-right: 0;
  }
  .answer-area {
    margin-top: 0.2rem;
    /deep/ input::-webkit-input-placeholder {
      font-weight: 600;
      color: #c3ab87;
    }
  }
}

//底部
.foot {
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.26rem;
    li {
      padding: 0.2rem 0;
    }
  }
}
</style>