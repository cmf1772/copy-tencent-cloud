<template>
  <div class="attachment flexColumn">
    <div class="conent_box flexColumn"
         style="flex: 1; margin: 0">
      <div class="c_box">
        <p class="text">素材中心</p>
        <p class="minText">总容量：0（包含图片0、音频0、视频0）</p>
      </div>
      <div class="c_box flexColumn"
           style="flex: 1">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane label="图片"
                       name="first"></el-tab-pane>
          <el-tab-pane label="语音"
                       name="second"></el-tab-pane>
          <el-tab-pane label="视频"
                       name="third"></el-tab-pane>
        </el-tabs>
        <div class="flexJC">
          <div class="flexRC">
            <el-button size="mini"
                       class="mr">上传视频</el-button>
            <el-button size="mini"
                       class="mr ml">在线制作图片</el-button>
          </div>
          <p class="minText redColor">0/0容量紧张</p>
        </div>
        <div class="flex"
             style="flex: 1">
          <div style="width: 10%"
               class="conent_box">
            <div class="flexJC">
              <p class="text">未分组</p>
              <p class="minText">0</p>
            </div>
            <el-button size="mini"
                       class="mr mt">添加分组</el-button>
          </div>
          <div style="width: 90%; box-sizing:border-box; padding: 20px">
            <p class="minText">未分组</p>
            <div class="conent_box"
                 style="padding-bottom: 10px">
              <el-checkbox v-model="checked">全选</el-checkbox>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'attachment',
  data () {
    return {
      activeName: 'first',
      search: '',
      checked: false
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
