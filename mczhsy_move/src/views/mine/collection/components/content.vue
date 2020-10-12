<template>
  <div class="container">
    <div class="c-list" v-if="data.length > 0">
      <div class="item" v-for="(item,index) in 15" :key="index">
        <div class="img">
          <img src="@/assets/images/mine/collection/img.jpg" />
        </div>
        <div class="center">
          <div class="title">98平米小户型巧妙设计，120妙设计...</div>
          <div class="value-c">
            <div>98平米的小户型，经过巧妙设计，轻松 打造出120平米三室两厅</div>
          </div>
          <div class="foot">
            <div class="headliness">
              商城头条
            </div>
            <div class="time">2020-05-16
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tip" v-else>暂无收藏内容</div>
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
  .c-list {
    padding-bottom: 0.1rem;
    .item:not(:last-child) {
      padding-bottom: 0.4rem;
    }
    .item {
      display: flex;
      border-bottom: .01rem solid #f0f0f0;
      padding: .42rem 0;
      .img {
        img {
          width: 2.26rem;
          height: 2.26rem;
          border-radius: 0.06rem;
        }
      }
      .center {
        padding-left: 0.2rem;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 0.3rem;
          margin-bottom: 0.05rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
        }
        .value-c {
          font-size: 0.24rem;
          color: #777;
          display: flex;
          margin-top: 0.05rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .foot {
          margin-top: auto;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          .headliness {
            background-image: url(../../../../assets/images/icon/shop/index/me.png) !important;
             color: #c3ab87;
             font-size: .17rem;
             padding-left: 0.15rem;
          }
          .time {
            font-size: .21rem;
            color: #777777;
          }
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