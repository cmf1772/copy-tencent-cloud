<template>
  <div class="storeStting flexColumn">
    <p class="text">门店储值设置</p>
    <div class="conent_box"
         style="flex: 1">
      <div style="height: 400px;width: 300px">
        <el-steps direction="vertical"
                  :active="3">
          <el-step title="创建门店分组"
                   description="如，多个门店间储值卡共享，可将此多门店分为一组还未分组，则前往创建门店分组如，每个门店独立运营储值卡可以通过快速分组，快速将每个门店划分为独立小组   "></el-step>
          <el-step title="创建/管理门店储值卡"
                   description="每个小组可以创建1张门店储值卡"></el-step>
          <el-step title="用户购卡成功，下单时选择门店储值卡进行抵扣使用"
                   description="门店储值卡为门店独立资产，其金额不会合并至通用的“会员储值余额”;用户在下单时将分开使用门店储值卡和余额储值。"></el-step>
        </el-steps>
      </div>
      <div class="flexCC mt">
        <el-button type="primary"
                   class="mt"
                   size="mini">创建门店储值卡</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'storeStting'
}
</script>

<style lang="scss" scoped>
.conent_box {
  box-sizing: border-box;
  padding: 50px 0 0 80px;
}
</style>
