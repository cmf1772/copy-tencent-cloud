<template>
  <div class="behavior flexColumn">
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 3"
                        :key="item">
        <div class="flexJC"
             style="width: 100%; height: 100%">
          <div class="boxs flexColumn"
               v-for="i in 3"
               :key="i"
               style=" background: #edf4ff; width: 32%">
            <div class="flexJC">
              <p class="text">需重点召回客户：0</p>
              <div class="left minText">
                深耕
              </div>
            </div>
            <p class="minText mt"
               style="flex: 1">历史下单数和客单价都高于平均，但近90天...</p>
            <el-button type="primary"
                       style="width: 150px"
                       size="mini">立即新建</el-button>

          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div style="flex: 1"
         class="flexC">
      <p class="minText">当前还没有任何计划，快选择人群创建计划吧</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'behavior'
}
</script>

<style lang="scss" scoped>
.boxs {
  box-sizing: border-box;
  padding: 20px;
  .left {
    color: rgb(245, 166, 35);
    border-color: rgb(245, 166, 35);
    border: 1px solid;
  }
}
</style>
