<template>
  <div class="batch-refund flexColumn">
    <p class="text">批量退款</p>
    <div class="bg_color"
         style="padding: 10px">
      <p class="minText mb">允许店铺的高级管理员进行批量退款操作，每天可以进行三次批量退款，每次订单数不超过10000笔订单。</p>
      <p class="minText blueColor s">使用教程</p>
    </div>
    <el-button type="primary"
               size="mini"
               style="width: 100px"
               class="mb">批量退款</el-button>
    <div class="c_box minText flexC"
         style="flex: 1">
      还没有相关数据
    </div>
  </div>
</template>

<script>
export default {
  name: 'batch-refund'
}
</script>

<style lang="scss" scoped>
</style>
