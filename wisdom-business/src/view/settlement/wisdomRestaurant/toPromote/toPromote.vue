<template>
  <div class="toPromote flexColumn">
    <p class="text">预留信息</p>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="flexJC box">
        <div class="c_box flexColumn">
          <img src="@/assets/img/gg.jpg"
               class="mt mb"
               style="width: 40px"
               alt="">
          <p class="text mb">微信朋友圈广告</p>
          <p class="minText mb"
             style="font-size: 14px">指出现在微信朋友圈的广告</p>
          <p class="minText"
             style="margin-bottom: 20px">广告融入生活场景，让用户知道、喜欢您的品牌，通过互动链接品牌与用户，提升品牌认知并传播。</p>
        </div>
        <div class="c_box flexColumn">
          <img src="@/assets/img/wx.jpg"
               class="mt mb"
               style="width: 40px"
               alt="">
          <p class="text mb">微信公众号广告</p>
          <p class="minText mb"
             style="font-size: 14px">指出现在微信公众号文章底部的广告</p>
          <p class="minText"
             style="margin-bottom: 20px">以文章内容的形式出现在公众号文章中，支持多维度组合定向投放，实现高效率转化。</p>
        </div>
        <div class="c_box flexColumn">
          <img src="@/assets/img/tx.jpg"
               class="mt mb"
               style="width: 40px"
               alt="">
          <p class="text mb">普通展示广告</p>
          <p class="minText mb"
             style="font-size: 14px">指出现QQ空间、QQ客户端、手机QQ浏览器、应用宝、腾讯新闻、腾讯视频应用的广告</p>
          <p class="minText"
             style="margin-bottom: 20px">贯穿用户每日24小时真实生活。</p>
        </div>
      </div>
      <div class="c_box box_o"
           style="flex: 1;">
        <p class="text"
           style="margin: 20px 0;">预约您的专属营销顾问
        </p>
        <div class="flexCC"
             style="margin-bottom: 20px;">
          <p class="minText mr">姓名</p>
          <el-input placeholder="请输入内容"
                    v-model="input"
                    size="mini"
                    style="width: 150px"
                    clearable>
          </el-input>
          <p class="minText ml mr">姓名</p>
          <el-input placeholder="请输入内容"
                    v-model="input"
                    size="mini"
                    style="width: 150px"
                    clearable>
          </el-input>
        </div>
        <el-button type="primary"
                   style="margin-bottom: 20px;"
                   size="mini">立即预约</el-button>
        <p class="minText"
           style="margin-bottom: 20px;">您也可以拨打我们的免费咨询电话，详细了解我们为您定制的推广方案</p>
        <p class="minText"><i class="el-icon-phone-outline"></i> ***-***-****</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toPromote'
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  > div {
    width: 30%;
  }
}
.box_o {
  text-align: center;
}
</style>
