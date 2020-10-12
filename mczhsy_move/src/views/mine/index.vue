<template>
  <div class="mian">
    <div class="top">
      <van-nav-bar @click-right="onClickRight">
        <template #right>
          <img src="@/assets/images/icon/index/speak.png" />
          <img src="@/assets/images/icon/index/xiangji.png" style="margin-left:.5rem" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="admin login" v-if="user">
        <div class="icon">
          <img src="@/assets/images/user.png" />
        </div>
        <div class="name">
          <span>{{user.member_name}}</span>
          <div class="card">
            <div class="user_id">
              <p>账号:</p>
            <p class="card-num">{{user.member_id}}</p>
            </div>
            <div class="right">
              <van-icon name="qr" size=".38rem" />
              <van-icon name="arrow"  size=".32rem"  />
            </div>
          </div>
        </div>
      </div>
      <div class="admin" v-else>
        <div class="icon" @click="login">
          <img src="@/assets/images/icon/mine/index/icon_nologin.png" />
        </div>
        <div class="name">
          <div class="btn">未登录，点击头像登录</div>
        </div>
      </div>
      <ul class="inavs">
        <li>
          <router-link to="/dynamic/follow">
            <img src="@/assets/images/icon/mine/index/bigbar1.png" />
            <p>扫一扫</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic">
            <img src="@/assets/images/icon/mine/index/bigbar2.png" />
            <p>付款</p>
          </router-link>
        </li>
        <li>
          <router-link to="/problem">
            <img src="@/assets/images/icon/mine/index/bigbar3.png" />
            <p>收款</p>
          </router-link>
        </li>
        <!-- <li>
          <router-link to="/broadcast">
            <img src="@/assets/images/icon/mine/index/bigbar4.png" />
            <p>卡券</p>
          </router-link>
        </li> -->
      </ul>

      <div class="fn-list">
        <ul>
          <li>
            <van-cell is-link @click="myFn('/mine/info')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar9.png" />
                  <span class="custom-title">我的信息</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link @click="myFn('/mine/order')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar1.png" />
                  <span class="custom-title">订单</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link @click="myFn('/mine/collection')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar2.png" />
                  <span class="custom-title">收藏</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link @click="myFn('/mine/pay')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar3.png" />
                  <span class="custom-title">支付</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link @click="myFn('/mine/space')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar4.png" />
                  <span class="custom-title">空间</span>
                </div>
              </template>
            </van-cell>
          </li>
          <!-- <li>
            <van-cell is-link @click="myFn('/mine/magazine')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar5.png" />
                  <span class="custom-title">杂志</span>
                </div>
              </template>
            </van-cell>
          </li> -->
          <!-- <li>
            <van-cell is-link @click="myFn('/mine/community')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar6.png" />
                  <span class="custom-title">社区</span>
                </div>
              </template>
            </van-cell>
          </li> -->
          <li>
            <van-cell is-link @click="myFn('/mine/small_shop')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar7.png" />
                  <span class="custom-title">小店</span>
                </div>
              </template>
            </van-cell>
          </li>
          <li>
            <van-cell is-link @click="myFn('/mine/vip')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar8.png" />
                  <span class="custom-title">会员</span>
                </div>
              </template>
            </van-cell>
          </li>
          <!-- <li>
            <van-cell is-link @click="myFn('/mine/card')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar9.png" />
                  <span class="custom-title">通证</span>
                </div>
              </template>
            </van-cell>
          </li> -->
          <li>
            <van-cell is-link @click="myFn('/mine/setting')">
              <template #title>
                <div class="item">
                  <img src="@/assets/images/icon/mine/index/smallbar10.png" />
                  <span class="custom-title">设置</span>
                </div>
              </template>
            </van-cell>
          </li>
        </ul>
      </div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import footerBar from "@/components/customFooter/customFooter"; //底部tabbar
export default {
  components: { footerBar },
  data() {
    return {
      user: null,
      loginBol: true
    };
  },
  activated() {
    // this.$toast('成功')
    // 获取用户信息
    this.user =
      localStorage.getItem("_M_User_Info") == "undefined"
        ? false
        : JSON.parse(localStorage.getItem("_M_User_Info"));
    console.log(this.user);
    if (this.user) {
      this.loginBol = false;
    }
    console.log(this.$store.state.isLogin);
  },
  methods: {
    onClickRight() {},
    login() {
      this.$router.push({
        name: "login"
      });
    },
    myFn(path) {
      if (!this.$store.state.isLogin) {
        this.$toast.fail("请登录");
        this.$router.push({
          path: "/login"
        });
        return;
      }
      this.$router.push({
        path
      });
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  .van-icon {
    margin-left: 0.2rem;
  }
}
.container {
  padding: 0 0rem;
  padding-bottom: 70px;
  .admin {
    padding: 0.2rem 0 0.7rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      margin-right: 0.3rem;
      img {
        width: 1.45rem;
        height: 1.45rem;
      }
    }
    .name {
      margin: 0.2rem 0;
      text-align: center;
      span {
        font-size: 0.36rem;
        font-weight: 600;
      }
      .btn {
        font-size: 0.3rem;
        padding: 0.2rem 0;
      }
      .card {
        margin-top: 0.1rem;
        display: flex;
        align-items: center;
        font-size: 0.24rem;
        color: #777777;
        p {
          display: inline-block;
          line-height: 0.32rem;
        }
        .card-num {
          margin: 0 0.1rem;
        }
      }
    }
  }
  .login{
    padding-left: .45rem;
    padding-right: 0.45rem;
    justify-content: flex-start;
    .name{
      flex: 1;
      margin: 0;
      text-align: left;
      span{
        font-size: .42rem;
      }
      .card{
        font-size: .27rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .right{
          display: flex;
          align-items: center;
          .van-icon{
            margin-left: .2rem;
          }
        }
      }
    }
  }
  .inavs {
    overflow: hidden;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    padding: 0 0.3rem .7rem 0.3rem;
    li {
      display: inline-block;
      text-align: center;
      margin: 0 0.2rem;
    }
    li img {
      width: 0.4rem;
    }
    li p {
      font-size: 0.24rem;
      color: #777;
    }
  }

  .fn-list {
    .van-cell {
      padding: 0.26rem 0.45rem;
    }
    li {
      padding: 0.1rem 0;
      .item {
        display: flex;
        align-items: center;
        img {
          max-width: 0.39rem;
          max-height: 0.38rem;
          margin-right: 0.28rem;
        }
      }
      span {
        font-size: 0.3rem;
      }
    }
  }
}
</style>