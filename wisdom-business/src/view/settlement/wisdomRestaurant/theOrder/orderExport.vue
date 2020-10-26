<template>
  <div class="flexColumn">
    <p class="text">订单导出</p>
    <div class="bg_color"
         style="padding: 10px">
      <p class="minText mb">注意：</p>
      <p class="minText mb">1、勾选项越多对应的数据量越多，导出所需要的准备时间越长，可能因数据量过大导致导出失败；</p>
      <p class="minText mb">2、目前功能只支持，支付状态为“已支付” 和 退款状态为“已退款”订单信息的导出；</p>
      <p class="minText mb">3、订单导出只做公共字段展示，不同业务订单中的细节字段请至各业务订单中进行导出；</p>
      <p class="minText">4、券订单存在一笔订单发起了多笔退款单，此处不支持退款单导出；已退款券订单的具体退款金额和退款单，请至“券订单”-“退款单”中进行</p>
    </div>
    <div class="conent_box">

    </div>
  </div>
</template>

<script>
export default {
  name: 'orderExport'
}
</script>

<style lang="scss" scoped>
</style>
