<template>
  <div class="assistant">
    <div class="conent_box flexCC">
      <el-progress type="circle"
                   class="mr"
                   :percentage="60"></el-progress>
      <div class="ml">
        <p class="text"
           style="font-size: 18px">
          共检测33项内容，其中6项可优化
        </p>
        <p class="minText">
          快去优化提高店铺质量吧
        </p>
        <el-button type="primary"
                   size="mini"
                   class="mt"
                   plain>开始检测</el-button>
      </div>
    </div>
    <el-collapse v-model="activeNames"
                 class="mt"
                 @change="handleChange">
      <el-collapse-item title="待完成的任务"
                        name="1">
        <div style="box-sizing:border-box; padding: 20px">
          <div>
            <i class="el-icon-s-operation blueColor"></i>
            店铺基础
          </div>
          <div class="text flexJC boxs">
            未完成店铺认证 <p class="minText blueColor s">立即优化</p>
          </div>
          <div class="text flexJC boxs">
            未填写店铺地图定位 <p class="minText blueColor s">立即优化</p>
          </div>
          <div class="text flexJC boxs">
            未填写客服电话 <p class="minText blueColor s">立即优化</p>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="待激活的任务"
                        name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="已完成的任务"
                        name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'assistant',
  data () {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    handleChange (val) {
      console.log(val);
    }
  }
}
</script>

<style lang="scss">
.boxs {
  width: 98%;
  float: right;
  border-bottom: solid 1px #ccc;
  line-height: 40px;
}
</style>
