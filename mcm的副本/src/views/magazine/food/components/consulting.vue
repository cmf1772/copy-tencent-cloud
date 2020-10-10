<template>
  <div class="content">
    <div class="item" v-for="(item,index) in list" :key="index" @click="details(index)">
      <img :src="item.src" />
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          src: require("@/assets/images/magazine/index/food/933b4079103743d094261ae6ca733fa4_th.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/16B1B387D97.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/16B1B38A454.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/p2466554335.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/933b4079103743d094261ae6ca733fa4_th.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/16B1B387D97.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/16B1B38A454.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/16B1B3891B5.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/933b4079103743d094261ae6ca733fa4_th.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        },
        {
          src: require("@/assets/images/magazine/index/food/p2466554335.jpg"),
          title: "吃了就瘦的营养餐吃了就瘦的营养餐吃了就瘦的营养餐"
        }
      ]
    };
  },
  methods: {
    details(id) {
      this.$router.push({
        path: "/magazine/food/consulting",
        query: {
          id
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.content {
  margin-top: 0.2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.22rem;
  .item {
    img {
      width: 100%;
      border-radius: .05rem;
      height: 3.19rem;
      overflow: hidden;
    }
    span {
      padding-top: 0.24rem;
      padding-bottom: 0.44rem;
      display: block;
      font-size: .25rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: .3rem;
    }
  }
}
</style>