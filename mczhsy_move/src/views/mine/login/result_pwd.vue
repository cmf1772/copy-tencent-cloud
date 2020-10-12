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
        <p>请填写登录密码</p>
      </div>
      <!-- clearable -->
      <van-form @submit="onSubmit">
        <van-field v-model="password" type="password" name="登录密码" placeholder="请输入登录密码" />
        <span class="tips">请填写6-20位数字及密码组合</span>
        <div style="margin-top:.8rem;">
          
          <van-button round block color="#C3AB87" native-type="submit">完成</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      password:'',
      code:'',
    };
  },
  activated() {
    this.phone = this.$route.params.phone;
    this.code = this.$route.params.code;
    this.timer = setInterval(() => {
      this.secends--;
      if (this.secends <= 0) {
        clearInterval(this.timer);
      }
    }, 1000);
    if (!this.phone || !this.code) {
      this.$toast.fail("出错了，请稍后再试");
      this.$router.replace({
        path: "/mine"
      });
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      this.$api.resultPassword({
        login_id:this.phone,
        pass1: this.password,
        pass2: this.password,
        mobile_code:String(this.code)
      })
      .then( res => {
        console.log(res);
        this.$toast.success("密码修改成功");
        this.$router.replace({
          path:'/login'
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
      padding: .2rem 0;
    }
    .tips{
      font-size: .24rem;
      color: #9C9C9C;
    }
    /deep/ input{
      font-size: .3rem;
    }
    margin-top: 1rem;
    /deep/ .van-icon {
      font-size: 0.32rem;
      margin: 0 0.1rem;
    }
  }
}
</style>