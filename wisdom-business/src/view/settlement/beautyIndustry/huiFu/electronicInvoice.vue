<template>
  <div class="electronicInvoice flexColumn">
    <p class="text">电子发票开通</p>
    <div class="conent_box"
         style="flex: 1">
      <p class="minText"
         style="color: red">注册或绑定前请先至微盟服务市场完成购买，否则会造成发票服务无法使用。</p>
      <div class="box flexRC">
        <div class="item flexCC mr mt s"
             v-for="i in 3">
          <div class="boxs">
            <img src="@/assets/img/phone.jpg"
                 alt="">
            <p class="text mt">票通</p>
            <p class="bottoms mt ">购买链接</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'electronicInvoice'
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