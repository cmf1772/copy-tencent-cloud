<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        right-text="发布"
        title="发布评价"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <!-- 商品信息 -->
      <div class="good">
        <div class="icon">
          <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
        </div>
        <div class="center">
          <p class="name">翡翠玻璃种无暇无裂戒子18K翡翠玻璃种种种无暇无裂戒子18K翡翠玻璃种种...</p>
          <span class="type">颜色分类:卡其色41</span>
        </div>
      </div>
      <!-- 平分 -->
      <div class="star">
        <span>描述相符</span>
        <van-rate v-model="value" size=".39rem" color="#c3ab87" void-icon="star" void-color="#eee" />
        <p>非常好</p>
      </div>

      <!-- 评论区域 -->
      <div class="area">
        <van-field
          v-model="message"
          rows="4"
          autosize
          type="textarea"
          placeholder="从多个角度评价宝贝，可以帮助更多想买的人"
          show-word-limit
        />
      </div>

      <!-- 文件上传 -->
      <div class="upload">
        <van-uploader v-model="fileList" multiple />
      </div>

      <!-- 是否公开 -->
      <div class="see">
        <van-radio-group v-model="radio">
          <van-radio name="1" checked-color="#c3ab87" icon-size=".26rem">公开</van-radio>
        </van-radio-group>
        <div class="tip">
          公开头像昵称，大家可以看到我的主页
          <van-icon name="info-o" size=".26rem" color="#c3ab87" />
        </div>
      </div>

      <div class="evaluate">
        <span class="title">店铺评价</span>
        <div class="e-list">
          <div>
            <div class="title">描述相符</div>
            <van-rate
              v-model="value2"
              size=".39rem"
              color="#c3ab87"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div>
            <div class="title">物流服务</div>
            <van-rate
              v-model="value3"
              size=".39rem"
              color="#c3ab87"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div>
            <div class="title">服务态度</div>
            <van-rate
              v-model="value4"
              size=".39rem"
              color="#c3ab87"
              void-icon="star"
              void-color="#eee"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4,
      value2: 0,
      value4: 0,
      value3: 0,
      message: "",
      radio: "1",
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    onClickRight() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  > div {
    padding: 0.2rem 0.45rem;
  }
  .evaluate {
    .title {
      font-size: 0.27rem;
    }
    .e-list {
      margin-top: 0.4rem;
      > div {
        padding: 0.3rem 0;
        display: flex;
        .van-rate {
          margin-left: 0.2rem;
        }
      }
    }
  }
  .see {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.2rem #f7f7f7 solid;
    .tip {
      font-size: 0.24rem;
      align-items: center;
      display: flex;
      color: #777;
      .van-icon {
        margin-left: 0.05rem;
      }
    }
    .van-radio-group {
      /deep/ span {
        font-size: 0.24rem;
        color: #777;
      }
    }
  }
  .upload {
    .van-uploader /deep/ .van-uploader__wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.3rem;
    }
    /deep/ .van-uploader__preview-image {
      width: 2rem;
      height: 2rem;
    }
    /deep/ .van-uploader__preview {
      margin: 0;
    }
    /deep/ .van-uploader__upload {
      width: 2rem;
      height: 2rem;
      margin: 0;
    }
  }
  .area {
    .van-cell {
      padding: 0.2rem 0;
    }
  }
  .star {
    display: flex;
    align-items: center;
    .van-rate {
      margin: 0 0.2rem;
    }
    p,
    span {
      font-size: 0.24rem;
    }
    p {
      color: #999;
    }
  }
  .good {
    display: flex;
    .icon {
      img {
        width: 0.97rem;
        height: 0.97rem;
        border-radius: 0.03rem;
      }
    }
    .center {
      display: flex;
      flex-direction: column;
      padding-left: 0.2rem;
      padding: 0.06rem 0 0.06rem 0.2rem;
      justify-content: space-between;
      .name {
        font-size: 0.27rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .type {
        font-size: 0.24rem;
        color: #999;
      }
    }
  }
}
</style>