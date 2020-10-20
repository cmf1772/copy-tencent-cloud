<template>
  <div class="APPstore flexColumn">
    <p class="text">APP开店</p>
    <div class="conent_box"
         style="flex: 1">
      <div class="minText flexJC mt">
        <p>为满足在移动应用中搭建商城的需求，现提供将H5嵌入APP的解决方案：</p>
        <el-button type="primary"
                   plain
                   size="mini">查看开发文档</el-button>
      </div>
      <p class="text mt mb">· 方案一：通过接入SDK在APP内集成商城的H5页面;</p>
      <p class="text mb">· 方案二：直接将H5链接嵌入APP中;</p>
      <p class="minText mt mb">以上两种方案均可满足客户在APP中账号打通、选购商品、下单、支付的需求，不同点在于接入SDK可实现图片预览、选择文件等功能，后续更多功能也将通过SDK</p>
      <p class="minText">实现。基于用户体验和功能完整度，建议商户选用方案一，接入AppSDK</p>
      <p class="text mt mb"> <span style="color: red; margin: 0 10px">*</span> 使用此功能需开启H5环境前往开启</p>
      <p class="text mb"><span style="color: red; margin: 0 10px">*</span> APP渠道暂不支持拼团、砍价、分销、荐客有礼活动，将在后期陆续支持。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'APPstore'
}
</script>

<style lang="scss" scoped>
</style>
