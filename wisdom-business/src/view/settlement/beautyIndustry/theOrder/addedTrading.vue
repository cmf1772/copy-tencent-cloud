<template>
  <div class="addedTrading flexColumn">
    <p class="text">
      补充交易订单
    </p>

    <div class="conent_box flexColumn"
         style="flex: 1;">
      <div class="c_box flexJC">
        <div class="flexRC">
          <el-input placeholder="请输入内容"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
          <p class="ml minText">下单时间</p>
          <el-date-picker v-model="value1"
                          class="ml"
                          size="mini"
                          style="width: 250px"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
          <p class="ml minText">下单时间</p>
          <el-select v-model="shopValue"
                     class="ml"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="全部"
                       value="1"></el-option>
            <el-option label="全部门店"
                       value="2"></el-option>
          </el-select>
        </div>
        <el-button size="mini">导出订单数据</el-button>
      </div>
      <div class="table flexC"
           style="flex: 1">
        <p class="minText">暂无数据</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'addedTrading',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
