<template>
  <div class="storeSettings">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="网店设置"
                   name="first">
        <div class="conent_box"
             style="padding-bottom: 10px">
          <p class="text mb">网店设置</p>
          <div class="mt flexRC mb">
            <p class="minText mr">网店模式</p>
            <el-radio-group v-model="radio">
              <el-radio :label="3">单网店模式</el-radio>
              <el-radio :label="6">多网店模式</el-radio>
              <el-radio :label="9">导流门店模式</el-radio>
            </el-radio-group>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="页面设置"
                   name="second">error</el-tab-pane>
      <el-tab-pane label="网店功能"
                   name="third">error</el-tab-pane>
      <el-tab-pane label="海淘设置"
                   name="fourth">error</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'storeSettings',
  data () {
    return {
      activeName: 'first',
      radio: 3
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
