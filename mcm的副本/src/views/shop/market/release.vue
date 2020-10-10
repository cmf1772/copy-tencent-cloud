<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="发布"
        right-text="发布"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ></van-nav-bar>
    </div>
    <!-- 文本域 -->
    <div class="textarea">
      <van-cell-group>
        <van-field v-model="title" size="large" placeholder="标题" />
      </van-cell-group>
      <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        maxlength="1000"
        show-word-limit
        placeholder="请输入商品介绍..."
      />
    </div>

    <!-- 照片墙 -->
    <div class="photos">
      <div class="warp">
        <van-uploader v-model="fileList" max-count="9" multiple />
      </div>
      <div class="next">
        <div>
          <img src="@/assets/images/icon/shop/local.png" style="width:.28rem;margin-right:.1rem"  alt="">苏州·高新区
        </div>
      </div>
    </div>
    <div class="container">
      <van-cell  title="价格" is-link>
        <template #title>
          <img src="@/assets/images/icon/shop/banner4.png" style="width:.4rem" alt="">
          <span>价格</span>
        </template>
        <template #default>
          <div class="right">
            <span class="price">￥0.00</span>
          </div>
        </template>
      </van-cell>
      <van-cell  title="同款宝贝" is-link>
        <template #title>
          <img src="@/assets/images/icon/shop/baobei2.png" style="width:.4rem"  alt="">
          <span>同款宝贝</span>
        </template>
        <template #default>
          <div class="right">
            <span>关联后可推给有需要的人</span>
          </div>
        </template>
      </van-cell>
      <van-cell  title="更多信息" is-link>
        <template #title>
          <img src="@/assets/images/icon/shop/info.png" style="width:.4rem"  alt="">
          <span>更多信息</span>
        </template>
        <template #default>
          <div class="right">
            <span>女士服装</span>
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      message: "",
      // dialogImageUrl: "",
      // dialogVisible: false
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        { url: "https://cloud-image", isImage: true },
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: .45rem;
  .van-cell {
    padding: 0.36rem 0 !important;
    align-items: center;
    /deep/ span{
      font-size: .3rem;
    }
    /deep/ i {
      font-size: 0.45rem;
    }

    /deep/ .van-cell__title {
      flex: none;
      display: flex;
      align-items: center;
      span{
        margin-left: .3rem;
      }
    }
    /deep/ .van-cell__value {
      flex: 1;
    
    }
    
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: auto;
    img {
      height: 1rem;
      width: 1rem;
      border-radius: 1rem;
    }
    span {
      color: #777;
    }
    .price {
      color: #c3ab87;
    }
    .van-icon {
      font-weight: 600;
    }
  }
}
.main {
  .photos {
    padding: 0 0.45rem;
    box-sizing: border-box;

    & > .warp {
      padding-bottom: 0.4rem;
      border-bottom: 1px #efefef solid;
    }
    .next {
      div {
        font-size: 0.27rem;
        padding: 0.1rem 0.2rem;
        background: #f7f7f7;
        align-items: center;
        color: #c3ab87;
        margin-top: 0.2rem;
        display: inline-flex;
        border-radius: 32px;
      }
    }
  }
  .van-cell{
    padding: .2rem .45rem;
  }
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
  /deep/ input {
    font-size: 0.42rem;
  }
  /deep/ textarea {
    font-size: 0.3rem;
  }
}
</style>