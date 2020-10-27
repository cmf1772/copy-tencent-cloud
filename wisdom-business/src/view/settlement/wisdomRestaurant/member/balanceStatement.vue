<template>
  <div class="balanceStatement flexColumn">
    <p class="text">储值规则</p>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="c_box">
        <el-input placeholder="请输入内容"
                  style="width: 300px"
                  size="mini"
                  v-model="search"
                  class="input-with-select">
          <el-button slot="append"
                     size="mini"
                     icon="el-icon-search"></el-button>
        </el-input>
        <div class="flexRC mt">
          <p class="mr minText">交易时间：</p>
          <el-date-picker v-model="value1"
                          size="mini"
                          style="width: 250px"
                          type="daterange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
          <p class="mr ml minText">交易门店：</p>
          <el-select v-model="shopValue"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="全部门店"
                       value="1"></el-option>
          </el-select>
          <p class="mr ml minText">支付方式：</p>
          <el-select v-model="shopValue"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="微信支付"
                       value="1"></el-option>
            <el-option label="支付宝支付"
                       value="2"></el-option>
            <el-option label="现金支付"
                       value="3"></el-option>
            <el-option label="其他支付"
                       value="1"></el-option>
          </el-select>
        </div>
        <div class="flexRC mt">
          <p class="mr minText">余额增加方式：</p>
          <el-select v-model="shopValue"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="充值"
                       value="1"></el-option>
            <el-option label="导入会员"
                       value="2"></el-option>
            <el-option label="新增会员"
                       value="3"></el-option>
            <el-option label="余额调整-增加"
                       value="4"></el-option>
          </el-select>
          <p class="mr ml minText">余额减少方式：</p>
          <el-select v-model="shopValue"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="付款"
                       value="1"></el-option>
            <el-option label="余额调整-减少"
                       value="3"></el-option>
            <el-option label="充值退款"
                       value="4"></el-option>
            <el-option label="补充交易"
                       value="5"></el-option>
          </el-select>
          <p class="mr ml minText">变动渠道：</p>
          <el-select v-model="shopValue"
                     style="width: 150px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="后台"
                       value="1"></el-option>
            <el-option label="APP"
                       value="2"></el-option>
            <el-option label="POS"
                       value="3"></el-option>
            <el-option label="第三方"
                       value="4"></el-option>
          </el-select>
        </div>
      </div>

      <div class="c_box flexJC">
        <p class="minText">本次共为您查询到 <span class="yellowColor">0</span> 笔流水</p>
        <el-button type="primary"
                   plain
                   size="mini">导出</el-button>
      </div>
      <div class="c_box flexC"
           style="flex: 1">
        <p class="minText">暂无数据</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'balanceStatement',

  data () {
    return {
      shopValue: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
