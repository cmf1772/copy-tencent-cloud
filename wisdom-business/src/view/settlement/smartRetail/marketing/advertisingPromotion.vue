<template>
  <div class="advertisingPromotion flexColumn">
    <p class="text">广告推广</p>
    <div class="conent_box "
         style="flex: 1; text-align:center">
      <img src="@/assets/img/none.jpg"
           alt="">
      <p class="minText mt"
         style="text-align: center; line-height: 20px">通过“广告推广”可知道推广出去的商品或页面带来的流量以及最终的销量、销售额转化情况。应用场景：设置想推广的商品或页面，生成二维码或链接形式进而投放，客户通过扫码或打开链接查看推广内容，达到最终购买消费。</p>
      <el-button type="primary"
                 class="mt">立即创建</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advertisingPromotion'
}
</script>

<style lang="scss" scoped>
img {
  width: 120px;
  margin-top: 20%;
}
</style>