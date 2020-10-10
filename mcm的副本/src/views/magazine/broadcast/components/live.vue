<template>
  <div @click="createLive">创建直播(可点击)</div>
</template>

<script>
export default {
  methods: {
    createLive() {
      this.$router.push({ path: "/magazine/broadcast/releaselive" });
    }
  }
};
</script>

<style>
</style>