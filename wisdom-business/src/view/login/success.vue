<template>
  <div class="success">
    <el-steps :active="3"
              finish-status="success"
              style="margin-top: 20px"
              simple>
      <el-step title="选择版本"></el-step>
      <el-step title="填写信息"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <div class="flexC box">
      <img src="@/assets/img/success.jpg"
           alt="">
      <p>恭喜，店铺创建成功</p>
      <el-button type="primary"
                 @click="$router.push('/survey')">进入店铺后台</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'success'
}
</script>

<style lang="scss" scoped>
.success {
  width: 1024px;
  margin: 0 auto;
  .box {
    width: 100%;
    height: 600px;
    > img {
      width: 70px;
    }

    > p {
      margin: 20px 0 40px 0;
    }
  }
}
</style>