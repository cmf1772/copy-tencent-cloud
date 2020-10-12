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
        <p>手机</p>
        <p>验证码登录</p>
      </div>
      <!-- clearable -->
      <van-form @submit="onSubmit">
        <van-field v-model="phone" name="手机号" left-icon="phone-o" placeholder="请输入手机号">
          <template #left-icon>
            <img
              src="@/assets/images/icon/mine/login/phone.png"
              style="width:.25rem;margin-right:.3rem"
            />
          </template>
        </van-field>
        <van-field v-model="code" name="验证码" left-icon="filter-o" clearable placeholder="请输入验证码">
          <template #left-icon>
            <img
              src="@/assets/images/icon/mine/login/code.png"
              style="width:.28rem;margin-right:.3rem"
            />
          </template>
          <template #button>
            <div class="code-show" @click="getPhoneCode">
              <span v-if="getCode">
                发送验证码
              </span>
              <span v-else>
                已发送({{secondsNum}})s
              </span>
            </div>
          </template>
        </van-field>
        <div class="ready">
          <span @click="loginByPassword">密码登录</span>

          <a href="javascript:;" @click="gorfet">忘记密码？</a>
        </div>

        <div style="margin: 16px;" class="btn">
          <van-button round block color="#C3AB87" native-type="submit">登录</van-button>
        </div>
        <a href="javascript:;" class="register" @click="register">没有账号？立即去注册</a>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      code: "",
      radio: "",
      secondsNum:60,
      getCode:true,
      timer:null
    };
  },
  created() {},
  deactivated() {
    // 清空数据
    this.phone = "";
    this.code = "";
    this.radio = "";
    clearInterval(this.timer);
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 获取验证码
    getPhoneCode(){
      if( this.judegPhone(this.phone)) return;
      this.$api.getMobileLoginCode({
        mobile:this.phone,
      })
      .then( res =>{
        this.getCode = false;
        this.code = res.code;
        this.timer = setInterval(() => {
          if( this.secondsNum <= 0){
            clearInterval(this.timer);
            this.getCode = true;
            this.secondsNum = 60;
            return;
          }
          this.secondsNum --
        }, 1000)
      })
    },

    // 登录
    onSubmit() {
      //是否阅读条款
      // if (this.radio != 1) {
      //   this.$toast("请勾选条款");
      //   return false;
      // }
      // /登录
      if( this.judegPhone(this.phone)) return;
      this.$api
        .loginByPhone({
          login_id: this.phone,
          mobile_code: this.code,
          platform: null
        })
        .then(res => {
          //如果出错
          if (res.err_code) {
            this.$toast.fail("出错了，请稍后再试");
            return;
          }

          //vuex 保存信息
          this.$store.commit("setUser", res.user);
          this.$store.commit("setUserLogin", 1);
          this.$store.commit("setToken", res.token);

          //用户详情
          this.$api
            .getUserInfo({ uid: res.user.user_id })
            .then(res => {
              // vuex 保存信息
              this.$store.commit("setUserInfo", res);

              //登陆成功 返回首页
              this.$toast.success("登陆成功");
              this.$router.replace({
                path: "/mine"
              });
            })
            .catch(err => {});
        })
        .catch(err => {
          console.log(err);
        });
    },


    // 正则手机号

    judegPhone(phone){
      if(!(/^1[3456789]\d{9}$/.test(this.phone))){
        this.$toast.fail("请输入正确的手机号");
        return true;
      }
      return false;
    },
    // loginByPassword 密码登录
    loginByPassword() {
      this.$router.replace({
        path: "/login"
      });
    },

    // //忘记密码
    gorfet() {
      this.$router.push({
        path: "/login/forgetpassword"
      });
    },

    // 注册页面
    register() {
      this.$router.push({
        path: "/register"
      });
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
      font-size: 0.57rem;
    }
  }
  .van-form {
    .van-cell {
      padding: 0.4rem 0;
      font-size: .3rem;
      /deep/ .van-field__button{
        font-size: .21rem;
        color: #c3ab87;
        background: #FDF6F4;
        border-radius: 1rem;
        border: .01rem #c3ab87 solid;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        width: 1.54rem;
        height: 0.6rem;
      }
    }
    margin-top: 1rem;
    /deep/ .van-icon {
      font-size: 0.32rem;
      margin: 0 0.1rem;
    }
    /deep/ input {
      font-size: 0.3rem;
    }
    a {
      font-size: 0.24rem;
      color: #c3ab87;
      text-align: right;
      float: right;
    }
    .ready {
      padding-top: 0.3rem;
      padding-bottom: 0.6rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.21rem;
        color: #777;
      }
      .van-radio__icon {
        padding: 0.1rem 0;
      }
      a {
        text-decoration: underline;
        font-size: 0.24rem;
        color: #c3ab87;
      }
      .van-radio {
        /deep/ .van-radio__icon {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0.3rem;
        }
        /deep/ i {
          font-size: 0.24rem;
        }
        /deep/ .van-radio__label {
          margin-left: 0;
        }
        /deep/ span {
          color: #c3ab87;
          font-size: 0.24rem;
        }
        padding: 0.2rem 0;
      }
    }
  }
  .btn {
    .van-button {
      width: 100%;
      height: 0.97rem;
      font-size: 0.39rem;
    }
  }
  .register {
    position: fixed;
    bottom: 0.45rem;
    text-align: center;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    color: #777 !important;
  }
}
</style>