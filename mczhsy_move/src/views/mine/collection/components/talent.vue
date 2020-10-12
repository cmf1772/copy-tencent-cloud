<template>
  <div class="container">
    <div class="shop-list" v-if="data.length > 0">
      <div class="item">
        <div class="icon">
          <img src="@/assets/images/user.png" style="border-radius:0" />
        </div>
        <div class="center">
          <div class="name">
            <div class="text">默默大师</div>
            <div class="star">时尚达人</div>
          </div>
          <van-icon name="ellipsis" size=".32rem" color="#999" />
        </div>
      </div>
      <div class="item" v-for="(item,index) in 5" :key="index">
        <div class="icon">
          <img src="@/assets/images/index/banner2.jpg" />
          <img class="new-dy" src="@/assets/images/icon/mine/collection/hide.png" />
        </div>
        <div class="center">
          <div class="name">
            <div class="text">默默大师</div>
            <div class="star">时尚达人</div>
          </div>
          <van-icon name="ellipsis" size=".32rem" color="#999" />
        </div>
      </div>
    </div>
    <div class="tip" v-else>暂无收藏达人</div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array,
      default: () => {
         return [];
      }
    }
  },
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .shop-list {
    padding-bottom: 0.1rem;
    .item {
      display: flex;
      // align-items: center;
      padding: 0.23rem 0;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 85%;
        height: 1px;
        background: #efefef;
        right: 0;
        bottom: -0.1rem;
      }
      .icon {
        position: relative;
        .new-dy {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0.88rem;
          height: 0.29rem;
        }
        img:first-child {
          width: 0.87rem;
          height: 0.87rem;
          border-radius: 1rem;
        }
      }
      .center {
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        padding-left: 0.2rem;

        .name {
          height: 80%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .text {
            font-size: 0.26rem;
          }
          .star {
            font-size: 0.2rem;
            color: #777;
          }
        }
        .van-icon {
          transform: rotate(90deg);
        }
      }
    }
    .item:first-child{
      padding-top: 0;
    }
    .item:last-child{
      border: none;
    }
  }
}
</style>