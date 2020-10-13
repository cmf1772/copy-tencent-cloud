<template>
  <div class="collection flexColumn">
    <p class="text">收款配置</p>
    <div class="conent_box"
         style="flex: 1">
      <p class="minText">请选择您要配置的收款场景!</p>
      <div class="box flexRC">
        <div class="item flexCC mr mt s"
             v-for="i in 2">
          <div class="boxs">
            <img src="@/assets/img/phone.jpg"
                 alt="">
            <p class="text mt">公众号微信</p>
            <p class="minText mt mb">微盟作为微信支付服务商，代商户申请微信支付账号。</p>
            <!-- <p class="bottoms mt ">查看指引</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'collection'
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