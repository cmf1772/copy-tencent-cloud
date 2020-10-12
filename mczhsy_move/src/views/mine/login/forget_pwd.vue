<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="title">
        <p>忘记密码</p>
      </div>
      <!-- clearable -->
      <van-form @submit="onSubmit">
        <van-field v-model="phone" name="手机号" placeholder="请输入手机号" />
        <div style="margin-top:.8rem;">
          <van-button round block color="#C3AB87" native-type="submit">下一步</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$api.getMobileForgetPasswordCode({
        mobile: this.phone,
      })
      .then( res => {
        // this.$notify({ type: 'warning', message: '当前接口正在重置中' });
        this.$router.replace({
          name: "resultpassword",
          params: {
            phone: this.phone,
            code: res.code
          }
        })
      })
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 1rem 0.45rem 0 0.45rem;
  .title {
    margin-bottom: 1rem;
    p {
      font-weight: 400;
      font-size: .57rem;
    }
  }
  .van-form {
    .van-cell {
      padding-left: 0;
      padding-right: 0;
      /depp/ input{
        font-size: .3rem;
      }
    }
    margin-top: 1rem;
    /deep/ .van-icon {
      font-size: 0.32rem;
      margin: 0 0.1rem;
    }
  }
}
</style>