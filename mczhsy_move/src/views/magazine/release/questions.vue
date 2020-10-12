<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="发布问题"
        right-text="发布"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ><template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template></van-nav-bar>
    </div>

    <div class="container">
      <!-- 问题标题 -->
      <div class="questions-title">
        <van-cell-group>
          <van-field v-model="title" size="large" placeholder="输入问题并以问号结束" />
        </van-cell-group>
      </div>

      <!-- 中间体是 -->
      <div class="warp-center">
        <div class="center">
          <div class="title-ce">
            <div class="left">
              <img src="@/assets/images/index/banner4.jpg" />
              <span>让你的第一个提问获得更多解答</span>
            </div>
            <div class="right"><van-icon name="cross" /></div>
          </div>
          <div class="value">
            <span>保持文字简练，表达清仓问题的关键点</span>
            <span>添加合适的话题，让问题更好沟通</span>
            <span>确保问题没有被提问过</span>
          </div>
        </div>
      </div>

      <!-- 玄天问题 -->
      <div class="question-content">
        <div class="over">
          <van-field
            v-model="message"
            rows="5"
            autosize
            type="textarea"
            maxlength="1000"
            placeholder="对问题补充说明 可以更快获得答案（选填）"
          />
        </div>
      </div>

      <div class="topic">
        <van-icon name="plus" />话题（至少选择一个）
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
      title: "",
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
.container{
   padding: 0 .45rem;
   .van-cell{
     padding-left: 0;
     padding-right: 0;
   }
}
.questions-title {
  /deep/ input::-webkit-input-placeholder {
    /* placeholder颜色  */
    color: #aab2bd;
    /* placeholder字体大小  */
    font-size: 0.42rem;
    color: #bcbcbc;
  }
}
.center {
  padding: 0.2rem;
  background: #f7f7f7;
  margin: .6rem 0 .5rem 0;
  .title-ce {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      span {
        font-size: 0.24rem;
      }
      img {
        width: .3rem;
        height: .3rem;
        border-radius: 10px;
        margin-right: .05rem;
      }
    }
    .right {
      font-size: 0.36rem;
    }
  }
  .value {
    padding: 0.2rem 0.1rem 0 0.1rem;
    display: flex;
    flex-direction: column;
    span {
      font-size: 0.24rem;
      line-height: 0.5rem;
      padding-left: 0.2rem;
      position: relative;
      &::before {
        content: "";
        width: 3px;
        height: 3px;
        display: block;
        position: absolute;
        background: #000;
        left: 0;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 50%;
      }
    }
  }
}

// 玄天问题
.question-content {
  .over {
    border-bottom: 1px solid #efefef;
  }
  .van-cell {
    ::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #bcbcbc;
      font-size: 0.3rem;
    }
  }
}

// 选择话题
.topic{
  width: 50%;
  color: #C3AB87;
  margin-top: 0.3rem;
  background: #f7f7f7;
  padding: .1rem .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 31px;
  font-size: .24rem;
  .van-icon{
    margin-right: 0.1rem;
  }
}

// 底部
.foot {
  position: fixed;
   width: 100%;
   background: #fff;
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
      font-size: .32rem;
      .van-icon{
        font-weight: 600;
      }
    }
  }
}
</style>