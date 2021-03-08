<template>
  <div :style="{ height: heights }" class="trust_page">
    <el-table :data="tableData" style="width: 100%" :height="tableHeight">
      <el-table-column prop="shop_name" label="申请商铺名" width="150">
      </el-table-column>
      <el-table-column prop="name" label="联系人" width="100">
      </el-table-column>
      <el-table-column prop="sellshow" label="商铺类型"> </el-table-column>
      <el-table-column prop="shop_cat" label="商铺分类"> </el-table-column>
      <el-table-column prop="tel" label="联系电话"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="medium"
            type="text"
            class="redColor  right20"
            @click="handleDelete(scope.row)"
            >删除</el-button
          >
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
      tableHeight: window.innerHeight - 200 + "px",
      tableData: [],
      currentPage: 1,
      page_size: 10,
      totalData: 0
    };
  },
  mounted () {
      this.create()
  },
  methods: {
    create() {
      this.$newApi.getShopApplyPageList({  
        page: this.currentPage,
        page_size: this.page_size,
        order_type: 'asc',
        order_field: 'm_uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
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

    handleDelete(row) {
      this.$newApi.delSupApplyItem({  
        supid: row.m_uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
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
    }
  }
};
</script>

<style lang="scss" scoped>
.trust_page {
  overflow: auto;
}
</style>
