<template>
  <div class="takeOut flexColumn">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="订单管理"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexColumn"
               ref="c_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flexJC ">
                <div class="flexRC">
                  <i class="el-icon-refresh s"></i>
                  <el-select v-model="shopValue"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             class="ml"
                             placeholder="请选择">
                    <el-option label="全部门店"
                               value="1"></el-option>
                  </el-select>
                  <el-select v-model="shopValue"
                             class="ml"
                             style="width: 100px"
                             size="mini"
                             slot="prepend"
                             placeholder="请选择">
                    <el-option label="订单状态"
                               value="1"></el-option>
                    <el-option label="未处理"
                               value="2"></el-option>
                    <el-option label="已接单"
                               value="3"></el-option>
                    <el-option label="已完成"
                               value="4"></el-option>
                    <el-option label="已取消"
                               value="5"></el-option>
                    <el-option label="已拒绝"
                               value="6"></el-option>
                    <el-option label="已作废"
                               value="7"></el-option>
                    <el-option label="已完成就餐"
                               value="8"></el-option>
                  </el-select>
                  <el-button size="mini"
                             class="ml">导出csv文件</el-button>
                </div>
                <el-input placeholder="请输入内容"
                          style="width: 300px"
                          size="mini"
                          v-model="search"
                          class="input-with-select ml">
                  <el-button slot="append"
                             size="mini"
                             icon="el-icon-search"></el-button>
                </el-input>
              </div>
            </div>
            <div class="table flexC"
                 style="flex: 1">
              <p class="text">暂无数据</p>
            </div>

          </div>
        </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      type: '1',
      shopValue: '1',
      state: [{
        value: '1',
        label: '更多'
      }, {
        value: '2',
        label: '修改装修权限'
      }, {
        value: '3',
        label: '修改线上库存模式'
      }, {
        value: '4',
        label: '修改线下库存模式'
      }, {
        value: '5',
        label: '修改门店权限'
      }, {
        value: '6',
        label: '修改发票模版'
      }, {
        value: '7',
        label: '修改分成方案'
      }],
      width: 0
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  },
  mounted () {
    this.width = this.$refs.c_box.clientWidth
  }
}
</script>

<style lang="scss">
.el-tabs .el-tabs__content {
  flex: 1;
  .el-tab-pane {
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
</style>