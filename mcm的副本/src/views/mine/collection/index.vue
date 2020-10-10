<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="收藏" @click-left="onClickLeft" @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/search.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in activeList" :key="index">
            <span
              :class="item.active == active?'active':''"
              @click="changeActive(item.active)"
            >{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>

    <keep-alive>
      <component :is="active" :data="data"></component>
    </keep-alive>
  </div>
</template>

<script>
import shop from "./components/shop"; //店铺
import contents from "./components/content"; //内容
import talent from "./components/talent"; //达人
import commodity from "./components/commodity"; //商品
export default {
  components: {
    shop,
    contents,
    talent,
    commodity
  },
  data() {
    return {
      activeList: [
        { title: "商品", active: "commodity" },
        { title: "店铺", active: "shop" },
        { title: "内容", active: "contents" },
        { title: "达人", active: "talent" }
      ],
      active: "commodity",
      dataList: [],
      data: []
    };
  },
  created() {
    this.active = localStorage.getItem("collectionActive")
      ? localStorage.getItem("collectionActive")
      : "commodity";
    this.init();
  },
  beforeDestroy() {
    localStorage.setItem("collectionActive", "commodity");
  },
  methods: {
    onClickRight() {},
    onClickLeft() {
      this.$router.go(-1);
    },
    init() {
      this.getCommodityList();
    },

    //获取商品的收藏数据
    getCommodityList() {
      this.$api.mine
        .getMyStarList({
          token: this.$store.state.token.token
        })
        .then(res => {
          this.dataList = res;
          // 获取收藏列表
          if (this.active != "commodity") {
            this.data = [];
            return;
          }
          this.data = res
        })
        .catch(err => {
          if (err.response.data.err_code == "401") {
            this.$toast.fail("未知错误，请稍后再试");
          }
        });
    },
    changeActive(active) {
      this.active = active;
      if (active != "commodity") {
        this.data = [];
      } else {
        this.data = this.dataList;
      }
      localStorage.setItem("collectionActive", this.active);
    }
  }
};
</script>
<style lang="less" scoped>
.center-nav {
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    padding: 0.2rem;
    margin-bottom: 0.6rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  li {
    font-size: 0.3rem;
    line-height: 0.3rem;
    padding: 0 0.3rem;
    color: #999;
    .active {
      font-size: 0.36rem;
      color: #000;
      font-weight: 600;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 60%;
        height: 3px;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.1rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
.main /deep/ .tip {
  font-size: 0.3rem;
  text-align: center;
  margin-top: 2rem;
  color: #777;
}
</style>