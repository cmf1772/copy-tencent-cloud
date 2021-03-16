<template>
  <div class="executeSQL">
    <p class="redColor">请把要执行的SQL语句粘贴到下面的文本框[务必按专家教程操作]</p>

    <el-input v-model="SQL"
              type="textarea"
              :autosize="{ minRows: 22, maxRows: 4}"
              style="width: 100%;margin-top: 20px"></el-input>
    <el-button type="primary"
               style="float: right;margin-top: 20px"
               @click="submitForm('ruleForm')">执行SQL</el-button>
  </div>
</template>

<script>
export default {
  name: 'executeSQL',
  data () {
    return {
      SQL: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.executeSQL {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 20px;
  overflow: hidden;
}
</style>