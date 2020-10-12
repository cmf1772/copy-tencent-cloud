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
        <p>注册账号</p>
      </div>
      <!-- clearable -->
      <van-form @submit="onSubmit">
        <van-field v-model="phone" name="手机号" placeholder="请输入手机号" />
        <div style="margin-top:.8rem;" class="btn">
          <van-button round block color="#C3AB87" native-type="submit">下一步</van-button>
        </div>
      </van-form>
      <van-radio-group >
        <van-checkbox  v-model="radio" icon-size=".24rem" checked-color="#C3AB87">用户注册协议</van-checkbox >
      </van-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      radio: false
    };
  },
  mounted() {},
  deactivated(){
    this.phone = "";
    this.radio = false;
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      if (this.radio != 1) {
        this.$toast("请勾选条款");
        return false;
      }
      this.$api.getMobileRegisterCode({ mobile: this.phone }).then(res => {
        this.$router.push({
          name: "writecode",
          params: {
            phone: this.phone
          }
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 1rem 0.45rem 0 0.45rem;
  .title {
    p {
      font-weight: 400;
      font-size: 0.57rem;
    }
  }
  .van-form {
    .van-cell {
      padding-left: 0;
      padding-right: 0;
    }
    /deep/ input {
      font-size: 0.3rem;
    }
    margin-top: 1rem;
    /deep/ .van-icon {
      font-size: 0.32rem;
      margin: 0 0.1rem;
    }
    
  }
  .van-radio-group{
     justify-content: center;
  }
   .van-checkbox  {
        /deep/ .van-checkbox__icon  {
          display: flex;
          align-items: center;
          justify-content: center;
          height: auto;
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
  .btn {
    margin-top: 1.2rem !important;

    .van-button {
      width: 100%;
      height: 0.97rem;
      font-size: 0.39rem;
    }
  }
}
</style>