<template>
  <div class="menu">
    <div class="titleimg">
      <img src="@/assets/img/favicon.png"
           alt="">
    </div>
    <div :class="activeIndex === index ? 'active menuItem' : 'menuItem'"
         @click="changeRight(index, item)"
         v-for="(item, index) in menuData"
         :key="index">
      <div><i :class="item.icon"></i> {{item.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',

  props: ['menuData'],

  data () {
    return {
      activeIndex: 0
    }
  },

  methods: {
    changeRight (index, item) {
      this.activeIndex = index
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
.titleimg {
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 40px;
    height: 40px;
  }
}
.menuItem {
  width: 100%;
  height: 42px;
  display: flex;
  font-size: 14px;
  color: #757993;
  font-weight: 400;
  cursor: pointer;
  div {
    height: 42px;
    position: absolute;
    line-height: 42px;
    width: 120px;
    text-align: center;
    i {
      margin-right: 4px;
    }
  }
}

.active {
  color: #ffffff;
  :after {
    content: "";
    width: 4px;
    background: #fff;
    border-radius: 2px;
    position: absolute;
    right: 10px;
    top: 25%;
    bottom: 25%;
  }
}
</style>