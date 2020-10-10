<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="默默大师"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/ld.png"
               style="height:.4rem" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 入口文件 -->
    <div class="inavs-warp">
      <!--功能入口-->
      <ul class="inavs">
        <li>
          <router-link to="/dynamic/follow">
            <img src="@/assets/images/serve/recovery/recover/sean.png" />
            <p>扫一扫</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic">
            <img src="@/assets/images/serve/recovery/recover/pay.png" />
            <p>付积分</p>
          </router-link>
        </li>
        <li>
          <router-link to="/problem">
            <img src="@/assets/images/serve/recovery/recover/give.png" />
            <p>收积分</p>
          </router-link>
        </li>
        <li>
          <router-link to="/broadcast">
            <img src="@/assets/images/serve/recovery/recover/add.png" />
            <p>冲积分</p>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 功能模块 -->
    <div class="fn-list">
      <ul>
        <li>
          <van-cell is-link
                    @click="myOrder">
            <template #title>
              <div class="item">
                <img src="@/assets/images/serve/recovery/recover/ss1.png"
                     alt />
                <span class="custom-title">我的订单</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="myGz">
            <template #title>
              <div class="item">
                <img src="@/assets/images/serve/recovery/recover/ss1.png"
                     alt />
                <span class="custom-title">回收柜列表</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="getOrder">
            <template #title>
              <div class="item">
                <img src="@/assets/images/serve/recovery/recover/ss1.png"
                     alt />
                <span class="custom-title">抢单</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="myProfit">
            <template #title>
              <div class="item">
                <img src="@/assets/images/serve/recovery/recover/ss2.png"
                     alt />
                <span class="custom-title">我的收益</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="myCabinet">
            <template #title>
              <div class="item">
                <img src="@/assets/images/serve/recovery/recover/ss3.png"
                     alt />
                <span class="custom-title">我的柜子</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link>
            <template #title>
              <div class="item">
                <img src="@/assets/images/serve/recovery/recover/ss4.png"
                     alt />
                <span class="custom-title">附进仓库</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="info">
            <template #title>
              <div class="item">
                <img src="@/assets/images/serve/recovery/recover/ss5.png"
                     alt />
                <span class="custom-title">个人信息</span>
              </div>
            </template>
          </van-cell>
        </li>
        <li>
          <van-cell is-link
                    @click="meInfo">
            <template #title>
              <div class="item">
                <img src="@/assets/images/serve/recovery/recover/ss5.png"
                     alt />
                <span class="custom-title">我的信息</span>
              </div>
            </template>
          </van-cell>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { value: "" };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickRight () { },
    myGz () {
      this.$router.push('/serve/recovery/index')
    },
    info () {
      this.$router.push({
        path: "/serve/recovery/apply_toExamine",
      });
    },
    myOrder () {
      this.$router.push({
        path: "/serve/recovery/order",
      });
    },
    myProfit () {
      this.$router.push({
        path: "/serve/recovery/profit",
      });
    },
    meInfo () {
      this.$router.push({
        path: "/serve/recovery/recycler_detailed",
      });
    },
    getOrder () {
      this.$router.push({
        path: "/serve/recovery/getorder",
      });
    },
    myCabinet () {
      this.$router.push({
        path: "/serve/recovery/cabinet",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.inavs-warp {
  padding: 0.2rem 0.45rem;
  /*首页栏目入口*/
  .inavs {
    box-shadow: 0 0 15px 1px rgba(219, 219, 219, 0.582);
    text-align: center;
    margin: 0 auto;
    border-radius: 0.1rem;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0rem;
    li {
      display: inline-block;
      text-align: center;
    }
    li img {
      width: 0.7rem;
      height: 0.7rem;
    }
    li p {
      font-size: 0.24rem;
      color: #777;
    }
  }

  /*首页栏目入口 end*/
}
.fn-list {
  margin-top: 0.4rem;
  li {
    .item {
      display: flex;
      align-items: center;
      .custom-title {
        margin-left: 0.1rem;
        font-weight: 600;
      }
    }
  }
  .van-cell {
    padding: 0.25rem 0.45rem;
    align-items: center;
  }
}
</style>