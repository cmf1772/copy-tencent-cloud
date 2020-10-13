<template>
  <div class="collection flexColumn">
    <p class="text">付款配置</p>
    <div class="conent_box"
         style="flex: 1">
      <p class="minText">请选择您要配置的付款产品!!</p>
      <div class="box flexRC">
        <div class="item flexCC mr mt s">
          <div class="boxs">
            <img src="@/assets/img/phone.jpg"
                 alt="">
            <p class="text mt mb">企业微信支付</p>
            <p class="minText mt "> </p>
            <p class="bottoms mt"
               style="margin-top: 40px !important">查看官方说明</p>
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