<template>
  <div class="enterpriseWeChat flexColumn">
    <p class="text">企业微信授权</p>
    <div class="conent_box"
         style="flex: 1">
      <p class="minText">您可以将以下应用托管授权到您创建的企业微信，以便于您的团队成员可直接使用相应功能。</p>
      <div class="box flexRC">
        <div class="item flexCC mr mt s"
             v-for="i in 1">
          <div class="boxs">
            <img src="@/assets/img/phone.jpg"
                 alt="">
            <p class="text mt">微盟智慧零售</p>
            <p class="minText mt mb">助力零售企业人、货、场数字化，提升经营效率。</p>
            <p class="bottoms mt ">添加</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enterpriseWeChat'
}
</script>

<style lang="scss" scoped>
.item {
  .boxs {
    text-align: center;
  }
  width: 180px;
  height: 290px;
  background: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  img {
    width: 60px;
    height: 60px;
  }
  .bottoms {
    font-size: 14px;
    color: #2489ff;
  }
}

.item:hover {
  border: solid 1px #2489ff;
}
</style>