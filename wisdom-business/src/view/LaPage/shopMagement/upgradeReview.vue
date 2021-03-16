<template>
  <div class="buyer_tion" :style="{ height: heights }">
    <div class="tion_con">
      <el-table :data="tableData" :height="tableHeight" style="width: 100%">
        <el-table-column prop="member_id" label="申请会员ID" width="180">
        </el-table-column>
        <el-table-column prop="shop_name" label="商铺" width="180">
        </el-table-column>
        <el-table-column prop="ordersn" label="申请号"> </el-table-column>
        <el-table-column prop="shop_level" label="申请等级"> </el-table-column>
        <el-table-column prop="amount" label="金额"> </el-table-column>
        <el-table-column prop="reg_date" label="申请时间"> </el-table-column>
        <el-table-column prop="" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 170 + "px",
      currentPage: 1,
      page_size: 100000,
      tableData: []
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getShopUpdatePageList({
        page: this.currentPage,
        page_size: this.page_size,
        member_id: '',
	      ordersn: '',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
      })
    },
    handleClick(row) { 
      this.$newApi.SJsetCheckItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
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
    },
    handleSizeChange() {},
    handleCurrentChangeFun() {}
  }
};
</script>

<style lang="scss" scoped>
.buyer_tion {
  width: 100%;
  height: calc(100% - 50px);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  .tion_top {
    padding: 10px 0;
    background: #fff;
    border-radius: 4px;
    text-align: right;
    .el-button {
      margin-right: 20px;
    }
  }
  .tion_con {
    flex: 1;
    overflow: auto;
    background: #fff;
    margin-top: 5px;
  }
}
</style>
