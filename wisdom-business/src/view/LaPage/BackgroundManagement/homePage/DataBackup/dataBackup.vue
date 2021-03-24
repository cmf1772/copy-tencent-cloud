<template>
  <div class="dataBackup">
    <div class="table_bottom">
      <p>分卷备份设置 每个分卷文件大小：
        <el-input v-model="totalsize"
                  style="width: 200px"
                  clearable>
        </el-input>
        KB
      </p>
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 120px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        开始备份数据
      </el-button>
      <div class="flex">
        <el-table :data="tableData"
                  @selection-change="handleSelectionChange"
                  stripe
                  height="300"
                  style="width: 100%">
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column prop="tables"
                           show-overflow-tooltip
                           label="数据库表">
          </el-table-column>
          <el-table-column prop="results"
                           show-overflow-tooltip
                           label="记录条数">
          </el-table-column>
          <el-table-column prop="size"
                           show-overflow-tooltip
                           label="大小 [共 ****M]">
          </el-table-column>
        </el-table>
      </div>
      <!-- <div>
        分卷备份设置 每个分卷文件大小：<el-input v-model="totalsize"></el-input> <el-button>开始备份数据</el-button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataBackup',

  data () {
    return {
      time: [],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      totalsize: '',
      arr: '',
      sum: ''
    }
  },

  mounted() {
    this.create()
  },  

  methods: {
    create () {
       this.$newApi.getDataBaseList({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.tables.forEach((item, index) => {
          let obj = {}
          obj.tables = res.data.tables[index]
          obj.results = res.data.results[index]
          obj.size = res.data.size[index]
          this.tableData.push(obj)
        })
          this.totalsize = res.data.totalsize
      })
    },
    handleSelectionChange(val) {
      let arr = '', sum = 0
      val.forEach((item, index) => {
        sum = Number(sum) + Number(item.size)
        if(index == 0) {
          arr = item.tables
        } else {
          arr += ',' + item.tables
        }
      }) 
      this.arr = arr
      this.sum = sum
    },
    add () {
      this.$newApi.databaseExport({
        sizeLimit: '2048',
        tables: this.arr,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.code >= 0) {
          return this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          return this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },
    editor () {
      this.$router.push('/driver/edit?nameType=修改驱动')
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>

<style lang="scss" scoped>
.dataBackup {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
