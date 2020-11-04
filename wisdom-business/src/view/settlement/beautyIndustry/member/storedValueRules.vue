<template>
  <div class="storedValueRules flexColumn">
    <p class="text">储值规则</p>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC">
          <p class="text">储值功能开关--已开启</p>
          <el-button type="primary"
                     size="mini"
                     plain>编辑规则</el-button>
        </div>
        <p class="minText yellowColor mt">提示：您的储值规则未配置，请尽快编辑规则进行补充</p>
      </div>
      <div class="c_box">
        <p class="minText">余额使用规则：无限制</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'storedValueRules'
}
</script>

<style lang="scss" scoped>
</style>
