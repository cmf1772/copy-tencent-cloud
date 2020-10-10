<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow right-text="取消" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <div class="city">
            {{addressText}}
            <i class="iconfont icon-down"></i>
          </div>
        </template>
        <template #title>
          <search :placeholdertext="startOrEnd" :popup="false">
            <template #left-icon>
              <div></div>
            </template>
          </search>
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="address-list">
        <div class="home-company">
          <div class="share">
            <img src="@/assets/images/icon/serve/travel/home.png" alt />
            <div class="text">
              <p>家</p>
              <span>设置家的地址</span>
            </div>
          </div>
          <div class="share">
            <img src="@/assets/images/icon/serve/travel/company.png" alt />
            <div class="text">
              <p>公司</p>
              <span>设置公司的地址</span>
            </div>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/time.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司</p>
            <span>江苏省苏州市高新区金山路111号111号</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/time.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司（体育中心店）</p>
            <span>江苏省苏州市高新区金山路111号江苏省苏州市高新区金高新区金高新区金...</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/local.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司</p>
            <span>江苏省苏州市高新区金山路111号江苏省高新区金江苏省苏州市高新区金山路111号江苏省高新区金</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/local.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司（体育中心店）</p>
            <span>江苏省苏州市江苏省高新区金</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/local.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司</p>
            <span>江苏省苏州市高新区金山路111号江苏省高新区金江苏省苏州市高新区金山路111号江苏省高新区金</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/local.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司（体育中心店）</p>
            <span>江苏省苏州市江苏省高新区金</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/local.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司</p>
            <span>江苏省苏州市高新区金山路111号江苏省高新区金江苏省苏州市高新区金山路111号江苏省高新区金</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/local.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司（体育中心店）</p>
            <span>江苏省苏州市江苏省高新区金</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/local.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司</p>
            <span>江苏省苏州市高新区金山路111号江苏省高新区金江苏省苏州市高新区金山路111号江苏省高新区金</span>
          </div>
        </div>
        <div class="address-item share">
          <img src="@/assets/images/icon/serve/travel/local.png" alt />
          <div class="text">
            <p>江苏古德电子科技有限公司（体育中心店）</p>
            <span>江苏省苏州市江苏省高新区金</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search";
export default {
  components: {
    search,
  },
  data() {
    return {
      startOrEnd: "",
      addressText: "",
    };
  },
  created() {
    this.startOrEnd = this.$route.query.start ? "选择出发点" : "选择终点";
    // 获取缓存中是否有地址
    this.addressText = localStorage.getItem("adressText")
      ? localStorage.getItem("adressText").split("·")[0]
      : "苏州";
  },
  methods: {
    onClickLeft() {},
    onClickRight() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.3rem 0.2rem;
  background: #f7f7f7;
  .address-list {
    padding: 0.3rem;
    background: #fff;
    .address-item {
      margin: 0.5rem 0;
    }
    .address-item:last-child{
      margin-bottom: 0;
    }
    .share {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      p {
        font-size: 0.3rem;
      }
      span {
        font-size: 0.27rem;
        display: block;
        margin-top: 0.05rem;
        color: #777;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
      img {
        width: 0.2rem;
        margin-right: 0.3rem;
      }
    }
    .home-company {
      display: flex;
      justify-content: space-between;
    }
  }
}
.main {
  #top {
    /deep/ .search {
      background: transparent;
    }
    .van-nav-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    /deep/ .van-nav-bar__title {
      max-width: auto;
      .van-search__content {
        background: transparent;
      }
    }
    /deep/ .van-nav-bar__right {
      position: relative;
      right: 0;
    }
    /deep/ .van-nav-bar__left {
      font-size: 0.28rem;
      color: #000;
      position: relative;
      left: 0;
      .city {
        display: flex;
        align-items: center;
      }
      &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 50%;
        width: 0.02rem;
        background: #cccccc;
        height: 0.33rem;
        transform: translate(0, -50%);
      }
    }
  }
}
</style>