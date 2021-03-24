<template>
  <div class="optimizationAndRepair">
    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item, index) in tableData" :key="index" :label="item"></el-checkbox>
    </el-checkbox-group>
    <div class="buttom">
      <el-radio-group v-model="raido">
        <el-radio label="repair">修复表</el-radio>
        <el-radio label="optimize">优化表</el-radio>
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
      raido: 'repair',
      tableData: []
    }
  },
  mounted() {
    this.create()
  },
  methods: {
    create () {
       this.$newApi.getRepairTableList({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data
      })
    },
    submitForm() {
      this.$newApi.databaseRepair({
        tables: JSON.stringify(this.checkList.join(',')),
        operation: this.raido,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.code >= 0) {
          return this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          this.create()
          this.checkList = []
          return this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
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
    height: 480px;
    overflow: auto;
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