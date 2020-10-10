<template>
  <div class="tabbar">
    <div class="back">
      <span>back</span>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="menu" @click="bindShowMenu">
      <slot name="menu">

      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {
    bindShowMenu(){
      this.$emit('bindMenu','')
    }
  }
}
</script>

<style scoped>
.tabbar {display: flex; justify-content: space-between;align-items: center;}
.menu{min-width: .5rem;}
</style>