<template>
  <div class="lineSetUp">
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
                客户是否能维权
              </div>
              <div>
                <el-switch v-model="value"
                           size="mini"
                           active-color="#13ce66"
                           inactive-color="#ff4949">
                </el-switch>
              </div>
            </div>

            <div class="flexRC">
              <div style="width: 100px"
                   class="minText">
                待确认订单规则
              </div>
              <div class="flexRC mt">
                <p class="minText">待确认订单维权扣除订单金额</p>
                <el-input v-model="input"
                          style="width: 120px"
                          size="mini"
                          placeholder="请输入内容"></el-input>
                <p class="minText">%违约金</p>
              </div>
            </div>

            <div class="flexRC mt mb">
              <div style="width: 100px"
                   class="minText">
                已确认订单规则
              </div>
              <div class="flexRC">
                <p class="minText">行程前</p>
                <el-input v-model="input"
                          style="width: 120px"
                          size="mini"
                          placeholder="请输入内容"></el-input>
                <p class="minText">天及以上扣除订单金额</p>
                <el-input v-model="input"
                          style="width: 120px"
                          size="mini"
                          placeholder="请输入内容"></el-input>

                <p class="minText">%违约金</p>
              </div>
            </div>

            <div class="flexRC">
              <div style="width: 100px"
                   class="minText">
              </div>
              <div class="flexRC">
                <el-button type="primary"
                           plain
                           size="mini">添加</el-button>
              </div>
            </div>

            <div class="flexRC mt mb">
              <div style="width: 100px"
                   class="minText">
                已完成订单规则
              </div>
              <div class="flexRC">
                <p class="minText">已完成以后扣除订单金额</p>
                <el-input v-model="input"
                          style="width: 120px"
                          size="mini"
                          placeholder="请输入内容"></el-input>
                <p class="minText">天及以上扣除订单金额</p>
                <el-input v-model="input"
                          style="width: 120px"
                          size="mini"
                          placeholder="请输入内容"></el-input>

                <p class="minText">%违约金</p>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="标签"
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
      <el-tab-pane label="负责城市"
                   name="third">
        <div class="conent_box"
             style="padding: 20px 0 20px 20px">
          <div class="flexRC">
            <div style="width: 100px"
                 class="text">
              出发地城市
            </div>
            <div class="flexRC"
                 style="flex: 1">

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
  name: 'lineSetUp',
  data () {
    return {
      activeName: 'first',
      input: '120',
      value: true
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
