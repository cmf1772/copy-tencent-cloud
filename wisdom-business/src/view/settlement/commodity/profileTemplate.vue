<template>
  <div class="profileTemplate flexColumn">
    <div class="c_box ">
      <p class="text mt">档案模版</p>
    </div>
    <div class="conent_box flexC"
         style="flex: 1">
      <img src="@/assets/img/error.jpg"
           style="width: 200px"
           alt="">
      <p class="text mt">商品档案会帮助导购员更快的熟悉</p>
      <p class="text ">商品知识点，从而提高线下交易额</p>
      <el-button type="primary"
                 size="mini"
                 style="margin: 40px 0 30px">新建模版</el-button>
      <p class="minText mt">使用方法：</p>
      <p class="minText">1. 点击 <span style="color: #2589FF">新建模版</span> 2. 进入商品库列表批量为商品设置档案模版，或者在创建商品的拓展信息处设置档案模版</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profileTemplate'
}
</script>

<style lang="scss" scoped>
</style>