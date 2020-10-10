<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="设置" @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="fn-list">
        <ul>
          <li>
            <van-cell is-link @click="userInfo" title="个人信息" label="头像、昵称、收货地址" :center="true"></van-cell>
          </li>
          <li>
            <van-cell
              is-link
              @click="security"
              title="账号与安全"
              :center="true"
              label="修改密码、修改手机号码、账号绑定管理"
            ></van-cell>
          </li>
          <li>
            <van-cell is-link @click="paySetting" title="支付设置" :center="true"></van-cell>
          </li>
          <li>
            <van-cell is-link title="通用" :center="true"></van-cell>
          </li>
        </ul>
      </div>
      <div class="btn">
        <van-button round type="info" color="#c3ab87" @click="quitUser">退出账号</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    userInfo() {
      this.$router.push({
        path: "/mine/setting/info"
      });
    },
    quitUser() {
      this.$dialog.confirm({
        title: "退出账号",
        message: "您确定要退出当前账号吗"
      })
        .then(() => {
          this.$store.commit("setUserLogin",0); //清空登录状态
          this.$store.commit("setUserInfo",null); //清空用户详情
          this.$store.commit("setToken",null);  //清空Token
          this.$store.commit("setUser",null); //清空用户
          this.$toast.success("注销成功~");
          this.$router.replace({
            path:'/login'
          })
          // on confirm
        })
        .catch(() => {
          return;
        });
    },
    paySetting() {
      this.$router.push({
        path: "/mine/setting/pay"
      });
    },
    security() {
      this.$router.push({
        path: "/mine/setting/security"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 0.8rem;
    .van-button {
      width: 4.2rem;
      height: 0.87rem;
    }
  }
  .fn-list {
    padding: 0.2rem 0;
    .van-cell {
      padding: 0.36rem 0;
      font-size: 0.3rem;
      /deep/ .van-cell__label {
        font-size: 0.21rem;
      }
    }
    li {
      .item {
        display: flex;
        align-items: center;
        img {
          width: 0.42rem;
          height: 0.42rem;
        }
        .custom-title {
          margin-left: 0.1rem;
        }
      }
    }
  }
}
</style>