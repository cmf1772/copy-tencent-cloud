<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="我的回收订单"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="search">
      <van-search v-model="value"
                  shape="round"
                  placeholder="请输入搜索关键词"
                  @search="onSearch" />
    </div>
    <div class="select">
      <div>
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1"
                             :options="option1" />
          <van-dropdown-item v-model="value2"
                             :options="option2" />
        </van-dropdown-menu>
      </div>
    </div>
    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in navList"
              :key="index">
            <span :class="item.active == active?'active':''"
                  @click="changeActive(item.active)">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <keep-alive>
      <component :is="active"></component>
    </keep-alive>

  </div>
</template>

<script>
import pay from "./order_components/pay";
import recovery from "./order_components/recovery";
import success from "./order_components/success";
export default {
  components: {
    pay,
    recovery,
    success
  },
  data () {
    return {
      option1: [
        { text: '设备位置', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      value1: 0,
      option2: [
        { text: '时间', value: 0 },
        { text: '2021-2-2', value: 1 },
        { text: '2021-2-1', value: 2 },
      ],
      value2: 0,

      navList: [
        { title: "待回收", active: "recovery" },
        { title: "待支付", active: "pay" },
        { title: "已完成", active: "success" }
      ],
      active: "recovery",
      value: ''
    };
  },
  methods: {
    onSearch (val) {
      Toast(val);
    },

    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () { },
    changeActive (active) {
      this.active = active;
    }
  }
};
</script>
<style lang="less" scoped>
.main {
  .van-tabs__nav--line {
    width: 60vw;
  }
}
.center-nav {
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    padding: 0.2rem;
    margin: 0.2rem 0;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
    margin: 0 0.45rem;
    line-height: 0.3rem;
    color: #b5b5b5;
    .active {
      font-size: 0.36rem;
      color: #000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 40%;
        height: 4px;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.1rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
</style>