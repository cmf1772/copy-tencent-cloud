<template>
  <div class="marketingCenter">
    <div v-for="iem in 10">
      <p class="text mt mb">店铺促销</p>
      <div class="flexRC mt">
        <div class="flexRC box mr s mt"
             v-for="item in 20">
          <i class="iconfont el-icon-house i ml mr"></i>
          <div class="flexColumn">
            <p class="text">优惠卷</p>
            <p class="minText overHidden"
               style="width: 135px">券动客心，营销必备券动客心，营销必备</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marketingCenter'
}
</script>

<style lang="scss" scoped>
.marketingCenter {
  overflow: auto;
}
.box {
  border: 1px solid #dddce2;
  border-radius: 4px;
  padding: 10px;
  height: auto;
  width: 200px;
}

.box:hover {
  background: #dddce2;
}
.i {
  width: 40px;
  height: 40px;
  background: #ff7d99;
  text-align: center;
  line-height: 40px;
  border-radius: 4px;
  color: #fff;
  font-size: 21px;
}
</style>