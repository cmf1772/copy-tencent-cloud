<template>
  <div class="Classification flexColumn">
    <div class="flexJC">
      <p class="minText"><span class="text">单品库分类</span> 同级分类可拖拽调整排序</p>
      <el-popover placement="top-start"
                  title="说明"
                  width="200"
                  class="minText"
                  trigger="hover"
                  content="说明。。。。。。。">

        <p slot="reference"
           class="minText">说明</p>
      </el-popover>
    </div>
    <div class="bs mt flex c_box"
         style="flex: 1">
      <div class="itemBox flexC mr">
        <ul style="flex: 1">

        </ul>
        <div class="buttom mb s">
          新增分类
        </div>
      </div>
      <div class="itemBox flexC mr">
        <ul style="flex: 1">

        </ul>
        <div class="buttom mb s">
          新增分类
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Classification'
}
</script>

<style lang="scss" scoped>
.itemBox {
  width: 220px;
  height: 100%;
  border: 1px solid #e3e2e5;
  .buttom {
    color: #fff !important;
    background-color: #2589ff;
    height: 30px;
    width: 180px;
    text-align: center;
    line-height: 30px;

    font-size: 12px;
    border-radius: 4px;
  }
}
</style>