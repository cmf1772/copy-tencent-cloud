<template>
  <div class="optimizationAndRepair">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="mvm_ad_apply"></el-checkbox>
      <el-checkbox label=" mvm_community"></el-checkbox>
      <el-checkbox label="mvm_admin_menu"></el-checkbox>
      <el-checkbox label="mvm_ask_order"></el-checkbox>
      <el-checkbox label=" mvm_badmin_table"></el-checkbox>
      <el-checkbox label="mvm_brand_statistics"></el-checkbox>
      <el-checkbox label="mvm_brand_statistics"></el-checkbox>
      <el-checkbox label=" mvm_cart_table"></el-checkbox>
      <el-checkbox label=" mvm_brand_table"></el-checkbox>
      <el-checkbox label="mvm_brand_statistics"></el-checkbox>
      <el-checkbox label=" mvm_goods_auction_detail"></el-checkbox>
      <el-checkbox label=" mvm_daren_comment"></el-checkbox>
      <el-checkbox label="mvm_brand_statistics"></el-checkbox>
    </el-checkbox-group>
    <div class="buttom">
      <el-radio-group v-model="raido">
        <el-radio label="1">修复表</el-radio>
        <el-radio label="2">优化表</el-radio>
      </el-radio-group>
      <el-button type="primary"
                 @click="submitForm('ruleForm')">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'optimizationAndRepair',
  data () {
    return {
      checkList: [],
      raido: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.optimizationAndRepair {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
  .el-checkbox-group {
    display: flex;
    flex-wrap: wrap;
    .el-checkbox {
      width: 30%;
      margin-bottom: 20px;
    }
  }
  .buttom {
    width: 100%;
    margin: 10px 0;
    text-align: center;
  }
}
</style>