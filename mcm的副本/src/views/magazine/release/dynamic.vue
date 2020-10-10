<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="发动态"
        left-text
        right-text="发布"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
      <template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template></van-nav-bar>
    </div>
    <div class="container">
      <!-- 发表用户 -->
      <div class="user">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" /> 
            </div>
            <div class="star">
              <span class="name">正龙</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 文本域 -->
      <div class="textarea">
        <van-field
          v-model="message"
          rows="5"
          type="textarea"
          placeholder="分享新鲜事..."
          show-word-limit
        />
      </div>
      <div class="content-foot">
        <span>
          <van-icon name="location-o" size=".28rem" />我在这里
        </span>
        <span>
          <van-icon name="manager-o" size=".28rem" />公开
        </span>
      </div>

      <div class="foot">
        <ul>
          <li>
            <img src="@/assets/images/icon/dynamic/photo.png" alt="">
          </li>
          <li>
           <img src="@/assets/images/icon/dynamic/jin.png" alt="">
          </li>
          <li>
           <img src="@/assets/images/icon/dynamic/aite.png" alt="">
          </li>
          <li>
            <img src="@/assets/images/icon/dynamic/gif.png" alt="">
          </li>
          <li>
            <img src="@/assets/images/icon/dynamic/smail.png" alt="">
          </li>
          <li>
            <img src="@/assets/images/icon/dynamic/add.png" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
export default {
  components: {
    quillEditor
  },
  data() {
    return {
      message: "",
      editorOption: {
        modules: {
          toolbar: []
        }
      }
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    onEditorBlur() {
      //失去焦点事件
    },
    onEditorFocus() {
      //获得焦点事件
    },
    onEditorChange() {
      //内容改变事件
    }
  }
};
</script>
<style lang="less" scoped>
.top{
  /deep/ img{
    height: 0.32rem;
  }
}
.textarea {
  /deep/ .ql-toolbar {
    display: none;
  }
  /deep/ .ql-container.ql-snow {
    border: none;
    min-height: 200px;
    max-height: 475px;
    border-bottom: 1px solid #efefef;
    margin-bottom: 0.2rem;
  }
}
.van-field{
   padding-left: 0;
    padding-right: 0;
  /deep/ input{
    font-size: .3rem;
  }
}
// 作者
.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0 0.1rem 0;
  .icon {
    width: .68rem;
    height:.68rem;
    overflow: hidden;
        display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nick {
    display: flex;
    align-items: center;
    .star {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .name {
      font-size: 0.24rem;
      margin-left: 0.16rem;
      font-weight: 600;
    }
  }
}
.van-field /deep/ textarea {
  border-bottom: #efefef 1px solid;
}
.container {
  padding: 0 0.45rem;
}
.content-foot {
  display: flex;
  justify-content: space-between;
  span {
    padding: 0.1rem 0.4rem;
    background: #f7f7f7;
    font-size: 0.27rem;
    border-radius: 32px;
    color: #bcbcbc;
    display: flex;
    align-items: center;
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
     img{
       width: 0.3rem;
     }
    }
  }
}
</style>