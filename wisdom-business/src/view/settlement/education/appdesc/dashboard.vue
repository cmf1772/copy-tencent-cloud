<template>
  <div class="weapp">
    <img src="https://b.yzcdn.cn/public_files/d73915863305a29eea4c6bd6be6f7442.png"
         alt=""
         style="width: 100%">
    <p class="text">授权及发布百度小程序 <span class="minText blueColor">查看教程</span></p>
    <el-steps direction="vertical"
              class="mt"
              style="height: 300px"
              :active="1">
      <el-step title="已注册微信小程序，立即授权发布"
               description="使用微信小程序管理员帐号扫码进行授权，授权过程中请勾选所有权限以确保小程序功能完整性。如未注册小程序，可以从公众号后台免微信认证创建小程序或直接前往“微信公众平台”注册企业主体的小程序帐号。官方注册小程序"></el-step>
      <el-step title="设置小程序支付方式"
               description="设置小程序支付方式开通微信支付能力，请提前完成店铺认证并且保证店铺主体和小程序主体一致了解支付方式"></el-step>
      <el-step title="完成所有准备，提交审核并发布小程序"
               description="提交微信审核（最长14个工作日），审核通过后即可立即发布版本"></el-step>
    </el-steps>

    <div class="mt">
      <p class="text">运营攻略 <span class="ml blueColor">查看更多</span></p>
      <div class="flexJC mt"
           style="width: 100%">
        <div class="boxs flexC"
             v-for="i in 6"
             :key="i">
          <img src="../../../../assets/img/two.png"
               style="width: 100px"
               alt="">
          <p class="minText"
             style="margin-top: 10px">戴尔商城</p>
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
</style>
