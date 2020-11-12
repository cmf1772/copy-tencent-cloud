<template>
  <div class="cardManage flexColumn">
    <p class="text">会员卡设置-会员卡管理</p>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="c_box">
        <div class="flexRC">
          <p class="text">会员卡功能</p>
          <p class="minText ml mr">未创建</p>
          <el-button type="primary"
                     class="ml"
                     size="mini"
                     plain>主要按钮</el-button>
        </div>
        <div class="mt">
          <p class="minText">注：1. 认证公众号支持微信原生会员卡功能</p>
          <p class="minText mt">2.会员卡功能创建后不可关闭</p>
        </div>
      </div>
      <div class="c_box"
           style="flex: 1">
        <p class="text">会员卡介绍</p>
        <p class="minText mt">通过在微信内植入会员卡，基于全国近10亿微信用户，帮助企业建立集品牌推广、会员管理、营销活动、统计报表于一体的微信会员管理平台。清晰记录企业用户的消费行为并进行数据分析；还可根据用户特征进行精细分类，从而实现各种模式的精准营销。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardManage'
}
</script>

<style lang="scss" scoped>
</style>
