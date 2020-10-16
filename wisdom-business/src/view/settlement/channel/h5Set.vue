<template>
  <div class="h5Set flexColumn">
    <p class="text">H5设置</p>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box flexC ">
        <div class="flexC">
          <p class="text">H5环境</p>
          <el-button type="primary"
                     class="mt"
                     size="mini">立即开启</el-button>
          <p class="minText mt mb"> 开启H5后，买家在移动端网页中，可直接通过手机号验证登录，完成购买</p>
        </div>
      </div>
      <div style="flex: 1"
           class="c_box flex">
        <div class="minText"
             style="margin: 0 20px">
          说明
        </div>
        <div class="minText">
          <p class="mb">1、启用非微信H5渠道时，以下内容需注意</p>
          <p class="mt"><span style="color: red; margin: 0 10px">*</span> 如需在非微信H5渠道使用线上支付，则需先配置H5网页支付。<span class="s"
                  style="color: #2589ff">查看配置</span></p>
          <p class="mt mb"><span style="color: red; margin: 0 10px">*</span> 非微信H5渠道下的用户在进行交易或个人相关信息管理时，需使用手机号注册为客户。</p>
          <p class="mb">2、只启用非微信H5渠道时，以下依赖微信的功能不支持使用。</p>
          <p class="mt"><span style="color: red; margin: 0 10px">*</span> 卡券同步至微信功能。</p>
          <p class="mt"><span style="color: red; margin: 0 10px">*</span> 营销中心-高级群发、模板消息群发功能。</p>
          <p class="mt"><span style="color: red; margin: 0 10px">*</span> 营销中心-素材管理同步素材至微信功能。</p>
          <p class="mt mb"><span style="color: red; margin: 0 10px">*</span> 系统设置-消息通知中公众号及小程序模板消息功能。</p>

          <p class="mb">3、在非微信H5渠道下，以下功能暂不支持使用。</p>
          <p class="mt"><span style="color: red; margin: 0 10px">*</span> 数据分析-客流分析</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h5Set'
}
</script>

<style lang="scss" scoped>
</style>
