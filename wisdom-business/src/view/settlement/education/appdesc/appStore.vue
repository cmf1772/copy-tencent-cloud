<template>
  <div class="e_appStore">
    <div class="c_box flex">
      <img src="@/assets/img/app.png"
           style="width: 128px;height: 128px;margin-right: 15px"
           alt="">
      <div style="flex: 1">
        <p class="text"
           style="font-size: 18px;">App开店</p>
        <p class="minText">通过SDK方案快速、低成本地把有赞店铺接入到已有的App里</p>
        <div class="conent_box">
          <p class="text mb">价格：<span class="blueColor">￥49800.00 - ￥99600.00</span></p>
          <p class="text mb ">促销：<span class="blueColor">礼包</span>2020年App开店1年期新签优惠</p>
          <div class="text mb flexRC mt">
            版本：
            <div class="flex">
              <div class="item mr flexCC">1年</div>
              <div class="item flexCC">2年</div>
            </div>
          </div>
          <el-button type="primary">立即预约</el-button>
        </div>

      </div>
    </div>
    <div class="c_box flex">
      <div class="flexJC"
           style="width: 100%">
        <p class="text">应用详情</p>
        <p class="minText">应用服务专线：****-********，服务时间：9:00-22:00</p>
      </div>
      <img src="https://img.yzcdn.cn/upload_files/2019/10/30/FiT18F9JROdNH-dhB1QuLhh93Tlq.png"
           alt=""
           class="mt"
           style="width: 100%">
    </div>
  </div>
</template>

<script>
export default {
  name: 'e_appStore'
}
</script>

<style lang="scss" scoped>
.item {
  border: 1px solid #dcdee0;
  border-radius: 2px;
  color: #646566;
  cursor: pointer;
  display: inline-block;
  margin: 0 8px 8px 0;
  padding: 5px 8px;
  text-align: center;
  width: 116px;
  box-sizing: border-box;
}
</style>
