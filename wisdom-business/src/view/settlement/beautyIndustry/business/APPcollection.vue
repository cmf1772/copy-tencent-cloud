<template>
  <div class="checkPayment flexColumn">
    <p class="text">
      APP收款
    </p>
    <div class="conent_box"
         style="flex: 1">
      <p class="minText">下单支付基本功能如下“图一”，如需使用会员等级、券、积分、余额等，可以在“优惠活动”中设置“优惠规则”。</p>
      <div class="flexCC">
        <div class="item one">
          <img src="@/assets/img/appLeft.jpg"
               alt="">
          <p class="mt">基本下单支付页面</p>
        </div>
        <div class="item">
          <img src="@/assets/img/appRight.jpg"
               alt="">
          <p class="mt">设置了下单优惠规则</p>
        </div>
      </div>

      <div class="flexC">
        <el-button type="primary"
                   style="margin-top: 30px">去创建 优惠活动</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkPayment'
}
</script>

<style lang="scss" scoped>
.item {
  width: 250px;
  margin-top: 100px;
  text-align: center;
  > img {
    width: 100%;
  }
}
.one {
  margin-right: 80px;
}
</style>
