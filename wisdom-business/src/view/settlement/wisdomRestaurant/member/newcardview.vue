<template>
  <div class="newcardview flexColumn">
    <p class="text">会员卡</p>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <p class="text">会员卡状态</p>
      <div class="c_box mt">
        <p class="minText">微盟会员卡: <span class="redColor">未创建</span> (未配置)</p>
        <p class="minText mt">微信会员卡: <span class="redColor">未创建</span> (未配置)</p>
      </div>
      <div class="c_box flexC"
           style="flex: 1">
        <p class="text">您尚未创建会员卡，赶快去创建吧～</p>
        <el-button type="primary"
                   class="mt"
                   size="mini">创建会员卡</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newcardview'
}
</script>

<style lang="scss" scoped>
</style>
