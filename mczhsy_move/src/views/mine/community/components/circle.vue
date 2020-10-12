<template>
  <div class="wrap">
    <div class="btn-list">
      <div v-for="(item,index) in activeList " @click="changeActive(item.active)" :key="index" :class="item.active == active?'active':''">
        {{item.title}}
      </div>
    </div>

    <keep-alive>
      <component :is="active"></component>
    </keep-alive>
  </div>
</template>

<script>
import posts from "./assembly/posts";
import circless from "./assembly/circle";
import circleLeader from "./assembly/circle_leader";
export default {
  components: { posts, circless, circleLeader },
  data() {
    return {
      activeList: [
        { title: "我的帖子", active: "posts" },
        { title: "我的圈子", active: "circless"},
        { title: "我是圈主", active: "circleLeader" },
      ],
      active: "posts"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(active) {
      this.active = active;
    }
  },
  created(){
    if(window.localStorage.getItem('circle') != 'false') this.active = 'circleLeader';
  }
};
</script>

<style lang="less" scoped>
.wrap{
  .btn-list {
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    margin-bottom: 0.2rem;
    div {
      background: #f7f7f7;
      width: 1.8rem;
      height: .6rem;
      font-size: .26rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      border: 1px solid transparent;
    }
    .active {
      background: #f9f6f3;
      color: #c3ab87;
      border: 1px solid #c3ab87;
    }
  }
}
</style>