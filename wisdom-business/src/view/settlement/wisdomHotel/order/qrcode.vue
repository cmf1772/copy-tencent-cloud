<template>
  <div class="qrcode flexColumn">
    <p class="text">扫码核销</p>
    <div class="conent_box flex"
         style="flex: 1">
      <div class="left flexC"
           style="width:50%">
        <el-input placeholder="请输入关键字"
                  style="width: 300px; margin: 0"
                  size="mini"
                  v-model="search"
                  class="input-with-select ml">
          <el-button slot="append"
                     size="mini"
                     icon="el-icon-search"></el-button>
        </el-input>
        <img src="@/assets/img/qrcode.png"
             style="width: 300px; margin-top: 15px"
             alt="">
      </div>
      <div class="right flexCC"
           style="width:50%;">
        <el-steps direction="vertical"
                  style="height:400px"
                  :active="1">
          <el-step title="搜索凭证"
                   description="请顾客出示凭证，然后搜索凭证"></el-step>
          <el-step title="校验"
                   description="微盟提供有效期验证，其他信息请自行核对"></el-step>
          <el-step title="核销完成"
                   description="完成核销操作后，该凭证将变成为已使用状态"></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qrcode'
}
</script>

<style lang="scss">
</style>
