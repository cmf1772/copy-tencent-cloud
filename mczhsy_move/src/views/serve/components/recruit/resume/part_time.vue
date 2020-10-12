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

      <div class="student">
        <div :class="student?'active':''" @click="student = true">在校学生</div>
        <div :class="student?'':'active'" @click="student = false">社会人士</div>
      </div>

      <div class="bir pub" @click="show = true">
        <p>出生年份</p>
        <span>1995年</span>
      </div>

      <div class="phone pub" @click="show = true">
        <p>输入手机号</p>
        <div>
          <span>15152045854</span>
          <div class="rz">
            <van-icon name="passed" color="#c3ab87" size=".26rem" />已认证
          </div>
        </div>
      </div>
      <div class="btn">
        <van-button round color="#c3ab87" @click="createResume">立刻报名</van-button>
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
      student: true,
      show:false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }]
    };
  },
  methods: {
    onClickLeft() {
      history.go(-1);
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
          font-weight: 400;
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
  .student {
    display: flex;
    padding: 0.4rem 0;
    justify-content: center;
    div {
      width: 2.07rem;
      height: 0.65rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      background: #f7f7f7;
      font-size: 0.26rem;
      border: 1px solid transparent;
      margin: 0 0.2rem;
    }
    .active {
      background: #f7f7f7;
      color: #c3ab87;
      border: 1px solid #c3ab87;
    }
  }
  .phone {
    > div {
      display: flex;
      justify-content: center;
      margin-top: 0.15rem;
      .rz {
        display: flex;
        font-size: 0.18rem;
        align-items: center;
        background: #f9f6f3;

        padding: 0 0.05rem;
        color: #c3ab87;
        border: 1px solid #c3ab87;
        border-radius: 1rem;
      }
    }
  }
  .btn {
    display: flex;
    margin-top: 0.4rem;
    justify-content: center;
    .van-button {
      width: 3.93rem;
      height: 0.87rem;
      margin: 0 auto;
    }
  }
}
</style>