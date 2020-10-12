<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="发布提问"
        right-text="发布"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <!-- 文本域 -->
      <div class="textarea">
        <van-cell-group>
          <van-field v-model="title" size="large" placeholder="文章标题" />
        </van-cell-group>
        <van-field
          v-model="message"
          rows="5"
          autosize
          type="textarea"
          maxlength="1000"
          show-word-limit
          placeholder="请输入你的问题..."
        />
      </div>

      <!-- 照片墙 -->
      <div class="photos">
        <div class="warp">
          <van-uploader
            v-model="fileList"
            :after-read="afterRead"
            :before-read="beforeRead"
            max-count="9"
            multiple
            accept="file"
          />
        </div>
        <div class="next">金融保险</div>
      </div>

      <!-- 底部 -->
      <div class="foot">
        <ul>
          <li>
            <van-icon name="photo-o" size=".43rem" />
          </li>
          <li>
            <van-icon name="bar-chart-o" size=".43rem" />
          </li>
          <li>
            <van-icon name="info-o" size=".43rem" />
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
      title: "",
      message: "",
      // dialogImageUrl: "",
      // dialogVisible: false
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

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
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
.top {
  img {
    width: 0.32rem;
  }
}
.main {
  .container {
    padding: 0 0.45rem;
  }
  .van-cell {
    padding-left: 0;
    padding-right: 0;
  }
  /deep/ .van-cell {
    input {
      font-size: 0.3rem;
    }
  }
  /deep/ .van-cell:first-child {
    input {
      font-size: 0.42rem;
    }
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
  .photos {
    box-sizing: border-box;

    & > .warp {
      padding-bottom: 0.4rem;
      border-bottom: 1px #efefef solid;
    }
    .next {
      font-size: 0.27rem;
      padding: 0.15rem 0.3rem;
      background: #f7f7f7;
      color: #c3ab87;
      margin-top: 0.2rem;
      display: inline-block;
      border-radius: 32px;
    }
  }
  /deep/ .van-uploader__wrapper > div:nth-child(3n) {
    margin: 0;
  }
}

.foot {
  position: fixed;
  width: 100%;
  left: 0;
  background: #fff;
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
      .van-icon {
        font-weight: 600;
      }
    }
  }
}
</style>