<template>
  <div class="box bs flexColumn">
    <div class="flexJC">
      <p class="text">帮助引导</p>
      <p class="minText s">更多</p>
    </div>
    <el-divider></el-divider>
    <div class="flexColumn">
      <p class="text">功能介绍</p>
      <p class="minText">可在此处对单品进行新增、导入（支持批量导入）、修改分类、删除，也可按分类快速筛选单品列表。</p>
    </div>
    <el-divider></el-divider>
    <div class="flexColumn">
      <p class="text">使用指南</p>
      <ul class="flexColumn">
        <li class="textHover">单品库列表使用指南</li>
      </ul>
    </div>
    <el-divider></el-divider>
    <div class="flexColumn">
      <p class="text">使用指南</p>
      <ul class="flexColumn">
        <li class="textHover">单品库列表使用指南</li>
        <li class="textHover">单品库列表使用指南</li>
        <li class="textHover">单品库列表使用指南</li>
        <li class="textHover">单品库列表使用指南</li>
      </ul>
    </div>
    <el-divider></el-divider>
  </div>

</template>

<script>
export default {
  name: 'help'
}
</script>

<style lang="scss" scoped>
ul > li {
  line-height: 30px;
}
</style>