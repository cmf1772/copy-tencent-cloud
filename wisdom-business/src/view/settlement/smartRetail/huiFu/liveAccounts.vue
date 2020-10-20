<template>
  <div class="liveAccounts flexColumn">
    <p class="text">应收账单</p>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="c_box">
        <p class="minText">待收款 <span style="color: #2589FF">¥0</span></p>
      </div>
      <div class="flexC"
           style="flex: 1">
        <div class="flexC">
          <p class="text">您当前有来自直播平台的待收款，请补全收款银行账号便于直播平台向您付款</p>
          <el-button type="primary"
                     class="mt"
                     size="mini">新增银行账号</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'liveAccounts',
}
</script>

<style lang="scss" scoped>
</style>