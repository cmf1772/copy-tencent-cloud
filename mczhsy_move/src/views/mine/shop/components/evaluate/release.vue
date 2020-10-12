<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="发表评价" @click-left="onClickLeft"></van-nav-bar>
    </div>
    <div class="container">
      <van-field
        v-model="message"
        rows="5"
        autosize
        type="textarea"
        placeholder="聊聊本次交易的感受..."
        show-word-limit
      />
      <van-uploader v-model="fileList" multiple />
      <div class="tag-list">
        <div class="l-tags">
          <div>
            <van-icon name="smile" size=".32rem" color="#fff" />
            <span>赏好评</span>
          </div>
          <div>
            <van-icon name="clear" color="#BCBCBC" size=".32rem" />
            <span>不赏</span>
          </div>
        </div>
      </div>
      <div class="tip">
        <van-icon name="info-o" color="#c3ab87" size=".26rem" />仅可修改一次，修改后请按照该类目运营圈子
      </div>
      <div class="btn">
        <van-button round type="info" color="#c3ab87">提交</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      fileList: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.2rem;
  .van-cell{
    padding: .2rem 0;
  }
  .btn {
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    .van-button {
      width: 3rem;
    }
  }
  .tip {
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    font-size: 0.2rem;
    color: #c3ab87;
    .van-icon {
      margin-right: 0.05rem;
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
      .van-icon {
        margin-right: 0.03rem;
      }
      span {
        font-size: 0.22rem;
        color: #bcbcbc;
      }
    }
    .l-tags {
      display: flex;
      div {
        margin-right: 0.2rem;
        border-radius: 1rem;
        padding: 0.08rem 0.2rem;
        background: #f7f7f7;
        display: flex;
        align-items: center;
      }
      div:first-child {
        background: #c3ab87;
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>