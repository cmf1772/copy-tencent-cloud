<template>
  <div class="progress">
    <div class="list flexRC">
      <div>
        <p class="text">店铺认证</p>
        <p class="minText mt">需要提供个人身份证号姓名</p>
        <el-button type="primary"
                   size="mini"
                   class="mt"
                   plain>立即认证</el-button>
      </div>
      <div class="item"
           :key="item"
           v-for="item in 3">
        <p class="minText">解除免费版用户访问</p>
        <p class="minText">H5数量限制</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'progress'
}
</script>

<style lang="scss" scoped>
.list {
  border: 1px solid #dddce2;
  border-radius: 4px;
  padding: 15px;
  height: 158px;
  .item {
    background-color: #f2f2f6;
    padding: 10px;
    height: 110px;
    width: 20%;
    margin-left: 20px;
  }
}
</style>
