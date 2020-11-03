<template>
  <div class="ofGoods flexColumn">
    <p class="text">商品分类</p>
    <div class="conent_box flexC"
         style="flex: 1">
      <img src="@/assets/img/none.jpg"
           style="width: 120px"
           alt="">
      <p class="minText mt">暂无分类，赶紧新增一个吧</p>
      <el-button type="primary"
                 class="mt"
                 size="mini">新增一级分类</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ofGoods'
}
</script>

<style lang="scss" scoped>
</style>