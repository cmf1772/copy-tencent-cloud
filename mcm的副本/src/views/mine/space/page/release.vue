<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="写说说"
        right-text="发布"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        placeholder="分享新鲜事..."
        show-word-limit
      />
      <van-uploader v-model="fileList" multiple :after-read="afterRead" :before-read="beforeRead" />
      <div class="tag-list">
        <div class="l-tags">
          <div>
            <img src="@/assets/images/icon/mine/space/tag.png" />
            <span>添加标签</span>
          </div>
          <div>
            <img src="@/assets/images/icon/mine/space/local.png" />
            <span>添加地址</span>
          </div>
        </div>
        <div class="r-tag">
          <img src="@/assets/images/icon/mine/space/diqiu.png" />
          <span>公开</span>
        </div>
      </div>

      <div class="app-list">
        <div class="l">
          <img src="@/assets/images/icon/mine/space/qq.png" />
          <img src="@/assets/images/icon/mine/space/pengyouquan.png" />
        </div>
        <div class="r">
          <img src="@/assets/images/icon/mine/space/shijian.png" />
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
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
      ],
      fileUploaderUrlObj: null, //上传地址
      date: null,
    };
  },
  created() {
    let date = new Date();

    //获取今天时间
    this.date =
      date.getFullYear() +
      "" +
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) +
      "" +
      (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
    this.$api.uploader
      .getUploaderFileUrl()
      .then((res) => {
        console.log(res);
        this.fileUploaderUrlObj = res;
      })
      .catch((err) => {});
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    //上传图片成功之后调用接口
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      this.uploadImg(file.file, file);
    },
    // 上传文件函数
    uploadImg(file, fileCs) {
      let url = "";
      // 设置formdata 文件流
      var formdata = new FormData();
      formdata.append("file", file, file.name);
      formdata.append("token", this.fileUploaderUrlObj.token.token);
      // 拼接访问路径
      formdata.append(
        "key",
        "files/" +
          file.type.split("/")[0] +
          "/" +
          this.date +
          "/" +
          this.genID(6) +
          "_" +
          file.name
      );

      // 上传文件
      // 上传文件接口使用第三方
      // 传入文件流
      this.$api.uploader
        .fileUpload(
          this.fileUploaderUrlObj.token.upload_url.upload_url,
          formdata
        )
        .then((res) => {
          console.log(res);
          // 将 vant 中base64替换为真实路径
          this.fileList.splice(this.fileList.length - 1, 1, {
            url: "http://img.meichengmall.com/" + res.key,
          });
          console.log(this.fileList);
          // this.getFile(url)
        })
        .catch(() => {
          fileCs.status = "failed";
          fileCs.message = "上传失败";
        });

      //普通传输 不使用七牛云
      // this.$api.uploader
      //   .fileUpload('/file/upload',formdata)
      //   .then(res => {
      //     console.log(res);
      //     url = res.filepath;
      //     this.getFile(url)
      //   })
      //   .catch(() => {});
    },
    // 随机名
    genID(length) {
      return Number(
        Math.random().toString().substr(3, length) + Date.now()
      ).toString(36);
    },

    //不使用七牛云需要访问接口 获取完整路径
    getFile(url) {
      console.log(url);
      this.$api.uploader
        .getFile({
          path: url,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {});
    },
    //文件上传之前的回调函数
    beforeRead(file) {
      return true;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.2rem 0.45rem;
  .van-cell {
    /deep/ textarea {
      font-size: 0.3rem;
    }
  }
  .app-list {
    padding: 0.3rem 0;
    display: flex;
    justify-content: space-between;
    img {
      max-width: 0.4rem;
    }
    .l {
      img {
        margin-right: 0.5rem;
      }
    }
  }
  .tag-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0;
    border-bottom: 1px solid #efefef;
    div {
      display: flex;
      align-items: center;
      img {
        max-width: 0.4rem;
        max-height: 0.4rem;
        margin-right: 0.09rem;
      }
      span {
        font-size: 0.27rem;
        color: #bcbcbc;
      }
    }
    .r-tag {
      border-radius: 1rem;
      padding: 0.08rem 0.2rem;
      background: #f7f7f7;
    }
    .l-tags {
      display: flex;
      div {
        margin-right: 0.2rem;
        border-radius: 1rem;
        padding: 0.08rem 0.2rem;
        background: #f7f7f7;
      }
    }
  }
  .van-field {
    padding: 0;
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
}
</style>