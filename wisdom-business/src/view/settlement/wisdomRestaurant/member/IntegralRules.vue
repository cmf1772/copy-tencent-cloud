<template>
  <div class="IntegralRules flexColumn">
    <p class="text">积分规则</p>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="c_box"
           style="flex: 1">
        <div class="flexJC mb">
          <p class="text">积分发放</p>
          <el-button type="primary"
                     size="mini"
                     plain>编辑规则</el-button>
        </div>
        <p class="minText">发放渠道：主要包括消费有礼、首次消费、领卡有礼、储值规则、签到、营销插件等；可以根据需要在每个渠道中分别设置对应的积分发放规则。</p>
        <p class="text mb mt">积分消耗</p>
        <p class="minText">积分抵现功能：已关闭</p>
        <p class="text mb mt">积分过期与清除</p>
        <p class="minText">永久有效</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntegralRules'
}
</script>

<style lang="scss" scoped>
</style>
