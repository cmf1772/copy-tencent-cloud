<template>
  <div class="promotionCenter flexColumn">
    <p class="text">
      推广中心
    </p>
    <div class="conent_box flexJC">
      <div class="box s flexColumn mt mb"
           v-for="iem in 6">
        <div class="flexRC mb"
             style="padding: 10px 20px">
          <i class="iconfont el-icon-bank-card i mr"></i>
          <p class="text">广告推广</p>
        </div>
        <div class="text mt fontT"
             style="flex:1; padding: 0 20px">
          一站式移动广告投放平台，定向精准投放广告至微信公众号、朋友圈、腾讯社交广告，实现海量曝光、轻松吸
        </div>
        <div class="flexJC flexCC box1"
             style="padding: 0 20px">
          <p style="color: #2589FF">立即加入</p>
          <i class="iconfont el-icon-arrow-right"
             style="font-size: 18px; color: #fff"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'promotionCenter'
}
</script>

<style lang="scss" scoped>
.box {
  width: 32%;
  height: 230px;
  box-shadow: 1px 1px 5px #888888;
  border-radius: 10px;
  background: #fff;
  .i {
    font-size: 20px;
    color: #2489ff;
  }
  .fontT {
    line-height: 30px;
  }
  .box1 {
    height: 55px;
    justify-content: space-between !important;
    border-top: solid 1px #e2e6ea;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}
.box:hover {
  .box1 {
    background: #2489ff;
    p {
      color: #fff !important;
    }
  }
}
</style>