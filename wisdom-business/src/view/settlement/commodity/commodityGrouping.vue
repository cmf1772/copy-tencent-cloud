<template>
  <div class="listOfUnit  bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">商品分组 <span class="minText">拖拽可调整分组顺序，保存生效</span></p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="table">
        <div class="c_box mt flexJC">
          <el-button size="mini">展开全部</el-button>
          <el-button size="mini">新增一级分组</el-button>
        </div>

        <el-collapse v-model="activeNames"
                     @change="handleChange">
          <el-collapse-item title="一级分组"
                            class="c_box"
                            name="1">
            <div class="flex mb">
              <span>分组显示</span>
              <el-switch v-model="value"
                         active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </div>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
          <el-collapse-item title="mf分组"
                            class="c_box"
                            name="2">
            <div class="flex mb">
              <span>分组显示</span>
              <el-switch v-model="value"
                         active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </div>
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
            <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div class="btootm_paination c_box flexCC">
        <el-button size="mini"
                   type="primary">确认</el-button>
        <el-button size="mini">取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'listOfUnit',
  data () {
    return {
      value: true,
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>