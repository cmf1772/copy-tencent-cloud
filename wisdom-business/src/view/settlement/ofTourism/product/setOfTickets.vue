<template>
  <div class="setOfTickets">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="订单"
                   name="first">
        <div class="conent_box"
             style="padding: 20px">
          <p class="text">订单信息</p>

          <div class="flexRC mt">
            <p class="minText">系统关闭订单规则未支付订单</p>
            <el-input v-model="input"
                      style="width: 120px"
                      size="mini"
                      placeholder="请输入内容"></el-input>
            <p class="minText">分钟以后关闭订单</p>
          </div>
        </div>
        <div class="conent_box">
          <p class="text">维权设置</p>
          <div class="mt"
               style="padding: 20px">
            <div class="flexRC">
              <div style="width: 100px"
                   class="minText">
                退票规则
              </div>
              <div class="flexRC">
                <el-radio v-model="radio"
                          label="1">不可退</el-radio>
                <el-radio v-model="radio"
                          label="2">随时退（随时退不扣违约金）</el-radio>
                <el-radio v-model="radio"
                          label="3">有条件退</el-radio>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="城市"
                   name="second">
        <div class="conent_box"
             style="padding: 20px 0 20px 20px">
          <div class="flexRC">
            <div style="width: 100px"
                 class="text">
              参团性质
            </div>
            <div class="flexRC"
                 style="flex: 1">
              <div class="box minText s">
                跟团游
                <i class="el-icon-close"></i>
              </div>
              <div class="box minText s">
                跟团游
                <i class="el-icon-close"></i>
              </div>
              <p class="blueColor minText s">添加</p>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'setOfTickets',
  data () {
    return {
      activeName: 'first',
      input: '120',
      value: true,
      radio: '1'
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
.box {
  background: #fff;
  border-radius: 4px;
  border: solid #fff 1px;
  margin-right: 20px;
  width: 100px;
  text-align: center;
  line-height: 30px;
  height: 30px;
}
.box:hover {
  border: solid #2589ff 1px;
}
</style>
