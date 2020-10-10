<template>
  <div class="next">
    <swiper :options="option">
      <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
        <div class="small-swiper">
          <div class="img-view">
            <img :src="item.cover" />
          </div>
          <div class="content">
            <span>{{item.board_subject}}</span>
            <span>{{item.sub_title1}}{{item.sub_title2}}{{item.sub_title3}}</span>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default: () => {
        return {
          slidesPerView: "auto",
          freeMode: true
        };
      }
    },
    list: {
      type: Array,
      default: () => {
        return [
          {
            cover: require("@/assets/images/index/banner1.jpg"),
            board_subject: "吃了就瘦的营养餐",
            sm_title: "摸摸大事推荐的美食"
          },
          {
            cover: require("@/assets/images/index/banner2.jpg"),
            board_subject: "吃了就瘦的营养餐",
            sm_title: "摸摸大事推荐的美食"
          },
          {
            cover: require("@/assets/images/index/banner3.jpg"),
            title: "吃了就瘦的营养餐",
            sm_title: "摸摸大事推荐的美食"
          },
          {
            cover: require("@/assets/images/index/banner4.jpg"),
            title: "吃了就瘦的营养餐",
            sm_title: "摸摸大事推荐的美食"
          }
        ];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.next {
  .swiper-container {
    padding: 0.33rem 0 0rem 0.45rem;
    margin-bottom: 1rem;
    /deep/ .swiper-slide {
      margin-right: 0.31rem;
      // width: auto !important;

      overflow: hidden;
    }
  }
  .small-swiper {
    text-align: center;
    // .img-view{
    //   w100p
    // }
    .content {
      padding: 0.4rem 0 0 0;
      display: flex;
      flex-direction: column;

      span:first-child {
        font-size: 0.32rem;
        font-weight: bold;
        color: #000;
        line-height: 0.57rem;
        -webkit-line-clamp: 2;
        margin-bottom: 0.18rem;
      }
      span {
        font-size: 0.26rem;
        display: inline-block;
        color: #777777;
        display: -webkit-box;
        overflow: hidden;

        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
    img {
      width: 4.29rem;
      height: 4.27rem;
      border-radius: 0.05rem;
    }
  }
}
</style>