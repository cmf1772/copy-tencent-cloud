<template>
  <div class="shopList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">全部标签</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="条件标签" name="condition">
            <div class="c_box">
              <el-button>新增标签</el-button>
            </div>
            <div class="c_box" style="overflow: hidden;">
              <!-- 沉默客户 -->
              <el-col :span="5">
                <el-card shadow="never">
                  <div>
                    <span>沉默客户</span>
                    <span>（未开启）</span>
                  </div>
                  <div>从未支付的客户</div>
                  <div>人数：<span>0</span></div>
                  <el-col :span="8" :offset="16">
                    <el-button>关闭</el-button>
                  </el-col>
                </el-card>
              </el-col>
              <!-- 发展客户 -->
              <el-col :span="5">
                <el-card shadow="never">
                  <div>
                    <span>发展客户</span>
                    <span>（未开启）</span>
                  </div>
                  <div>支付订单数在1-3的客户</div>
                  <div>人数：<span>0</span></div>
                  <el-col :span="8" :offset="16">
                    <el-button>关闭</el-button>
                  </el-col>
                </el-card>
              </el-col>
              <!-- 成熟客户 -->
              <el-col :span="5">
                <el-card shadow="never">
                  <div>
                    <span>成熟客户</span>
                    <span>（未开启）</span>
                  </div>
                  <div>支付订单数在4-10的客户</div>
                  <div>人数：<span>0</span></div>
                  <el-col :span="8" :offset="16">
                    <el-button>关闭</el-button>
                  </el-col>
                </el-card>
              </el-col>
              <!-- 重要客户 -->
              <el-col :span="5">
                <el-card shadow="never">
                  <div>
                    <span>重要客户</span>
                    <span>（未开启）</span>
                  </div>
                  <div>支付订单数在11及以上的客户</div>
                  <div>人数：<span>0</span></div>
                  <el-col :span="8" :offset="16">
                    <el-button>关闭</el-button>
                  </el-col>
                </el-card>
              </el-col>
              <el-row>
                <el-col :span="24">
                  <span>自定义条件标签</span>
                  <span>最多添加20个</span>
                </el-col>
                <el-col :span="24">
                  暂无数据
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="手动标签" name="manual">
            <div class="c_box" style="overflow: hidden;">
              <el-col :span="12">
                <el-button>新增标签</el-button>
              </el-col>
              <el-col :span="4" :offset="6">
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </el-col>
              <el-col :span="2">
                <el-button>搜索</el-button>
              </el-col>
            </div>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'allCustoms',
  data () {
    return {
      activeName: 'condition'
    }
  },

  methods: {
    handleClick () {

    }
  }
}
</script>

<style lang="scss" scoped>
.shopList {
  width: 100%;
  height: 100%;
  .conent_box {
    background: #f2f2f6 !important;
    border-radius: 5px !important;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
    margin-top: 10px;
  }

  .button {
    background: #d3e7ff !important;
    color: #2589ff !important;
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
    font-size: 12px;
  }
}
</style>