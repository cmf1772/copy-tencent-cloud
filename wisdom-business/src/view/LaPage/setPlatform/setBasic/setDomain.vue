<template>
  <div class="setDomain_page" :style="{ height: heights }">
    <el-table :data="tableData" style="width: 100%" :max-height="tableHeight">
      <el-table-column prop="date" label="顶级域名" align="center">
        <template slot-scope="scope">
          <el-input v-model="scope.row.domain_name" @blur="statusChange(scope.row, scope.row.domain_name)"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="shop_name" label="申请店铺" align="center">
      </el-table-column>
      <el-table-column prop="m_id" label="会员ID" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" style="color: #f00;" @click="del(scope.row)">删除</el-button>
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
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 210 + "px",
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
    create() {
      this.$newApi.getTldPageList({
        page: this.currentPage,
        page_size: this.page_size,
        domain_name: '',
        domain_name: '',
        is_check: '',
        order_type: 'desc',
        order_field: 'is_check',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.totalData = res.data.total_result
        this.tableData = res.data.items
      })
    },
    statusChange(row, val) {
      this.$newApi.setTldItem({
        supid: row.supplier_id,
        domain_name: val,
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
            message: '编辑成功'
          })
        }
      })
    },
    del(row) {
      this.$newApi.delTldItem({
        uid: row.supplier_id,
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
            message: '删除成功'
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
.setDomain_page {
  background: #fff;
  border-radius: 4px;
  overflow: auto;
}
</style>
