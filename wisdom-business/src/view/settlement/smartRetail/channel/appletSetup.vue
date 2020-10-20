<template>
  <div class="appletSetup flexColumn">
    <p class="text">小程序设置</p>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="c_box flexC"
           style="flex: 1">
        <p class="text">将微信小程序绑定店铺，提升交易量</p>
        <div class="flexJC mt"
             style="width: 100%">
          <div class="item flexC">
            <img src="@/assets/img/yes.jpg"
                 alt="">
            <el-button type="primary"
                       class="mt"
                       size="mini">已有小程序，立即绑定</el-button>
            <p class="minText mt mb">为保证所有功能的正常使用，</p>
            <p class="minText">授权时请把所有权限统一授权给微盟</p>
          </div>
          <div class="item flexC">
            <img src="@/assets/img/no.jpg"
                 alt="">
            <el-button class="mt"
                       size="mini">没有小程序，立即申请</el-button>
            <p class="minText mt mb">请在微信公众平台申请新的小程序，</p>
            <p class="minText">成功后再到微盟进行绑定</p>
          </div>
        </div>
        <div class="item mt flexJC"
             style="width: 100%; height: 80px">
          <div class="flexCC">
            <img src="@/assets/img/no.jpg"
                 style="width: 30px"
                 class="mr"
                 alt="">
            <p class="minText s">小程序绑定教程</p>
          </div>
          <div class="flexCC">
            <img src="@/assets/img/no.jpg"
                 style="width: 30px"
                 class="mr"
                 alt="">
            <p class="minText s">小程序绑定注意事项</p>
          </div>
          <div class="flexCC">
            <img src="@/assets/img/no.jpg"
                 style="width: 30px"
                 class="mr"
                 alt="">
            <p class="minText s">不同小程序类型的功能区别</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appletSetup'
}
</script>

<style lang="scss" scoped>
.item {
  width: 48%;
  box-sizing: border-box;
  padding: 10px;
  border: solid #e3e2e5 1px;
  height: 300px;
  border-radius: 4px;
  > img {
    width: 60px;
  }
}
</style>
