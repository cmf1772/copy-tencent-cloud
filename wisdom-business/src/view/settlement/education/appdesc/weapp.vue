<template>
  <div class="weapp">
    <div class="bg_color minText"
         style="padding: 10px 0;">
      【重要通知】根据“微信小程序平台运营规范”，微信小程序内购买商品建议使用微信支付。查看详情
    </div>
    <p class="text">授权及发布小程序 <span class="minText blueColor">查看教程</span></p>
    <el-steps direction="vertical"
              style="height: 300px"
              :active="1">
      <el-step title="已注册微信小程序，立即授权发布"
               description="使用微信小程序管理员帐号扫码进行授权，授权过程中请勾选所有权限以确保小程序功能完整性。如未注册小程序，可以从公众号后台免微信认证创建小程序或直接前往“微信公众平台”注册企业主体的小程序帐号。官方注册小程序"></el-step>
      <el-step title="设置小程序支付方式"
               description="设置小程序支付方式开通微信支付能力，请提前完成店铺认证并且保证店铺主体和小程序主体一致了解支付方式"></el-step>
      <el-step title="完成所有准备，提交审核并发布小程序"
               description="提交微信审核（最长14个工作日），审核通过后即可立即发布版本"></el-step>
    </el-steps>
    <div class="conent_box">
      <p class="text">小程序动态</p>
      <div class="flexJC mt">
        <div class="flexJC mb"
             v-for="i in 6"
             :key="i"
             style="width: 45%">
          <p class="text">微信小程序客服消息支持自助菜单、消息撤回、解除消息数量限制等多个功能</p>
          <p class="minText">11-17</p>
        </div>
      </div>
    </div>

    <div class="mt">
      <p class="text">运营攻略 <span class="ml blueColor">查看更多</span></p>
      <div class="flexJC mt"
           style="width: 100%">
        <div class="boxs flexColumn"
             v-for="i in 4">
          <p class="text"
             style="flex:1">小程序新版本发布，支持开启七天无理由退货</p>
          <div class="flexJC">
            <div class="minText flexCC">
              <img src="https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4287656548,534952852&fm=26&gp=0.jpg"
                   style="width: 30px; height: 30px; border-radius: 30px;"
                   alt="">
              有赞产品动态
            </div>
            <p class="minText blueColor"
               style="margin-top: 8px">查看</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'weapp'
}
</script>

<style lang="scss" scoped>
.boxs {
  cursor: pointer;
  width: 24%;
  min-width: 214px;
  height: 112px;
  background: #fff;
  border-radius: 2px;
  border: 1px solid #dcdee0;
  box-sizing: border-box;
  padding: 12px 16px;
}
</style>
