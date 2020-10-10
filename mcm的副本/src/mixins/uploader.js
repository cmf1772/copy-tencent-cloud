
export default {
  data() {
    return {
      fileList: [],
      fileUploaderUrlObj:{}
    };
  },
  created() {
    this.$api.uploader
      .getUploaderFileUrl()
      .then((res) => {
        console.log(res);
        this.fileUploaderUrlObj = res;
      })
      .catch((err) => {});
  },
  methods: {
    
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
    
  },
};