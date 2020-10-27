<template>
  <div class="integralStrategy flexColumn"
       style="">
    <p class="text">积分活动</p>
    <div class="conent_box"
         style="flex: 1">
      <p class="text">赚积分</p>
      <div class="bg_color minText"
           style="padding: 10px">注：下方的营销活动均可被设置为积分任务，但前提是您设置的活动奖品必须包含积分；此处仅做查看，您可到相应模块中设置活动</div>
      <div class="c_box">
        <div v-for="i in 9">
          <p class="text mb mt">新手快速赚积分</p>
          <div class="flexRC">
            <div class="box"
                 v-for="i in 10">
              <img src="@/assets/img/o.png"
                   alt="">
              <p class="text">领卡有礼</p>
              <p class="minText mt">正在进行任务数量：<span class="yellowColor">0</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'integralStrategy'
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid #e3e2e5;
  border-radius: 4px;
  padding: 10px;
  width: 200px;
  margin-left: 10px;
  margin-top: 10px;
  > img {
    width: 64px;
  }
}
.conent_box {
  overflow: auto;
}
</style>
