<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="我的收货地址" left-text left-arrow @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="list">
        <div class="item" v-for="(item,index) in dataList" :key="index">
          <div class="item-top">
            <div class="name">收货人:{{item.consignee}}</div>
            <div class="phone">{{item.mobile}}</div>
          </div>
          <div class="adress-val">收货地址：{{item.city}}{{item.county}}{{item.address}}</div>
        </div>
      </div>
      <div style="margin-top: auto;" class="btn">
        <van-button round block type="info" color="#c3ab87" native-type="submit">新增收货地址</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dataList:[],
    }
  },
  created(){
    this.$api.mine.getMyShopAdressList({
      token: this.$store.state.token.token
    })
    .then( res => {
      this.dataList = res
    })
    .catch( err => {

    })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onFailed() {}
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  .btn{
    display: flex;
    justify-content: center;
    .van-button{
      width: 4rem;
    }
  }
  .list {
    .item:not(:last-child) {
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #eee;
    }
    .item:not(:first-child) {
      padding-top: 0.3rem;
    }
    .item {
      display: flex;
      flex-direction: column;
      .item-top {
        padding: 0.2rem 0 0.1rem 0;
        display: flex;
        justify-content: space-between;
        font-size: 0.3rem;
        font-weight: 400;
      }
      .adress-val {
        font-size: 0.24rem;
        color: #777;
      }
    }
  }
}
</style>