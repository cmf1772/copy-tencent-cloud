<template>
  <div class="performanceSetting  flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="基础设置"
                   name="first">
        <div class="conent_box">

        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理"
                   name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理"
                   name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿"
                   name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'performanceSetting',
  data () {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>