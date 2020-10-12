<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="我要招人"
        left-text
        left-arrow
        right-text="取消"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
      <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <van-cell title="我要招聘" value="新媒体运营" size="large">
        <template #right-icon>
          <van-icon name="search" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="月薪" value="3000-5000元" size="large">
        <template #right-icon>
          <van-radio-group v-model="radio">
            <van-radio name="1" icon-size=".32rem" checked-color="#c3ab87">面议</van-radio>
          </van-radio-group>
        </template>
      </van-cell>
      <van-cell title="福利待遇" value="包吃包住" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="职位描述" value="负责公司微信推广，公众号运营等内容" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="学历要求" value="本科以上" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="工作年限" value="1-3年" size="large">
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="工作地点" value="上海浦东虹梅路123号" size="large">
        <template #right-icon>
          <van-icon name="location-o" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <van-cell title="联系电话" value="13338789876" size="large">
        <template #right-icon>
          <van-icon name="cross" style="line-height: inherit;" size=".32rem" color="#ddd" />
        </template>
      </van-cell>
      <div class="btn">
        <van-button round type="info" color="#c3ab87">发布</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { radio: "1" };
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
  .van-cell {
    padding: 0.3rem 0.45rem;
    align-items: flex-start;
  }
  .van-radio-group /deep/ span{
    color: #999;
    
  }
  /deep/ .van-cell__title {
    max-width: 1.2rem;
    text-align-last: justify;
    text-align: justify;
    span {
      font-size: .3rem;
      color: #666;
    }
  }
  .van-cell:nth-child(5) {
    .van-cell__title {
      text-align-last: left;
      text-align: left;
    }
  }
  /deep/ .van-cell__value {
    text-align: left;
    font-size: .3rem;
    color: #000;
    padding-left: 0.4rem;
    padding-top: 0.04rem;
  }
  .imgs {
    padding: 0.1rem 0.2rem;
    border: 1px solid #ccc;
    img {
      margin: 0.1rem 0;
      width: 100%;
      max-height: 200px;
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    padding: 0.4rem 0;
    .van-button {
      width: 3.93rem;
      height: 0.87rem;
    }
  }
}
</style>