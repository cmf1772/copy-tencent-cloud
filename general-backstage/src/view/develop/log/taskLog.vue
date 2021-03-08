<template>
  <div class="task_look" :style="{ height: heights }">
    <div class="task_con">
      <el-table
        :data="tableData"
        style="width: 100%; margin-top: 20px"
        :max-height="tableHeight"
      >
          <el-table-column prop="uid" label="ID" width="180" align="center">
          </el-table-column>
          <el-table-column prop="module" label="模块" align="center">
          </el-table-column>
          <el-table-column prop="action" label="动作" align="center">
          </el-table-column>
          <el-table-column prop="register_date" label="时间" align="center">
          </el-table-column>
          <el-table-column label="操作"
                         width="80">
          <template slot-scope="scope">
            <el-button type="text"
                       size="small"
                       style="color: #f00;"
                       @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="page_size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="totalData">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 220 + "px",
      input: "",
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      tableData: []
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create () {
      this.$newApi.getTaskLogPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.totalData = res.data.total_result
        this.tableData = res.data.items
      })
    },
    del(row) {
      this.$newApi.delTaskLogItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.create()
          }
      })
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.create()
    },
  }
};
</script>

<style lang="scss" scoped>
.task_look {
  background: #fff;
  overflow: auto;
}
</style>
