<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="发布简历" @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="name">
        <div class="icon">
          <img src="@/assets/images/icon/serve/recruit/icon-user.png" />
          <span>编辑头像</span>
        </div>
        <div class="nk-name">
          <div class="real-name">
            <span>真实姓名</span>
            <p>默默大师</p>
          </div>
          <div class="sex">
            <van-radio-group v-model="radio">
              <van-radio name="man" icon-size=".26rem" checked-color="#c3ab87">男</van-radio>
              <van-radio name="woman" icon-size=".26rem" checked-color="#c3ab87">女</van-radio>
            </van-radio-group>
          </div>
        </div>
      </div>
      <div class="phone">
        <p>输入手机号</p>
        <van-radio-group v-model="phone">
          <van-radio name="1" icon-size=".26rem" checked-color="#c3ab87">15152045854</van-radio>
        </van-radio-group>
      </div>
      <div class="study">
        <div @click="show = true">
          <p>出生年份</p>
          <span>1995年</span>
        </div>
        <div @click="show = true">
          <p>最高学历</p>
          <span>本科</span>
        </div>
        <div @click="show = true">
          <p>工作时间</p>
          <span>应届生</span>
        </div>
      </div>
      <div class="intention pub" @click="show = true">
        <p>选择求职意向</p>
        <span>UI设计</span>
      </div>
      <div class="protect pub" @click="show = true">
        <p>隐私保护</p>
        <span>所有招聘方</span>
      </div>

      <div class="btn">
        <van-button round color="#c3ab87" @click="createResume">创建并投递</van-button>
      </div>
    </div>
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      close-on-click-action
      @cancel="onCancel"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "man",
      phone: "1",
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }]
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onCancel() {
      Toast("取消");
    },
    onClickRight() {},
    createResume() {
      this.$router.push({
        path: "/serve/recruit/resume/create"
      });
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 0 0.2rem;
  padding-top: 0.4rem;
  .name {
    display: flex;
    justify-content: center;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid #eee;
    .icon {
      display: flex;
      align-items: center;
      flex-direction: column;
      img {
        width: 1.51rem;
        height: 1.51rem;
        border-radius: 1rem;
      }
      span {
        font-size: 0.24rem;
        margin-top: 0.1rem;
        color: #777777;
      }
    }
    .nk-name {
      padding-left: 0.8rem;
      display: flex;
      flex-direction: column;
      .real-name {
        span {
          font-size: 0.24rem;
          color: #777777;
          margin-bottom: 0.1rem;
        }
        p {
          font-size: 0.36rem;
        }
      }
      .sex {
        margin-top: auto;
        .van-radio-group {
          display: flex;
          font-size: 0.3rem;
          .van-radio {
            margin-right: 0.15rem;
          }
        }
      }
    }
  }
  .phone {
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #eee;
    p {
      font-size: 0.24rem;
      color: #777;
      margin-bottom: 0.1rem;
    }
    .van-radio-group {
      font-size: 0.24rem;
      .van-radio {
        flex-direction: row-reverse;
        /deep/ span {
          margin-right: 0.1rem;
          font-size: 0.36rem;
          font-weight: 400;
          color: #000;
        }
      }
    }
  }
  .study {
    padding: 0.4rem 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #eee;
    div {
      text-align: center;
      p {
        font-size: 0.24rem;
        color: #777;
      }
      span {
        font-size: 0.36rem;
        display: block;
      }
    }
  }
  .pub {
    padding: 0.4rem 0;
    text-align: center;
    p {
      font-size: 0.24rem;
      color: #777;
    }
    span {
      font-size: 0.36rem;
      display: block;
    }
    border-bottom: 1px solid #eee;
  }
  .btn {
    display: flex;
    margin-top: 0.4rem;
    justify-content: center;
    .van-button {
      width: 4rem;
      margin: 0 auto;
    }
  }
}
</style>