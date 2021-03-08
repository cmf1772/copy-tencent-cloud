<template>
  <div class="buyer_tion" :style="{ height: heights }">
    <div class="tion_top">
      <el-button type="primary" size="medium" @click="delSelect">删除所选</el-button>
    </div>
    <div class="tion_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="module" label="所评商品" width="180">
        </el-table-column>
        <el-table-column prop="comment" label="评价内容" width="180">
        </el-table-column>
        <el-table-column prop="level" label="评价等级"> </el-table-column>
        <el-table-column prop="from_id" label="评价人"> </el-table-column>
        <el-table-column prop="to_id" label="被评价人"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="color: #f00;" @click="delMassage(scope.row)">
              删除
            </el-button>
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
      tableHeight: null,
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      tableData: [],
      selectData: []
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("tion_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
      this.create()
  },
  methods: {
    create() {
      this.$newApi.MJgetCommentPageList({
        page: this.currentPage,
        page_size: this.page_size,
        keyword: '',
	      menu_id: '',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    delMassage(row) {
      this.$newApi.MJdelMsgItem({
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
          this.create()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    },
    delSelect() {
      console.log(this.selectData)
      if(this.selectData.length == 0) {
        return this.$message({
          type: 'error',
          message: '请选择要删除的数据'
        })
      }
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.uid
        }
        else {
          arr += ',' + item.uid
        }
      })
      this.$newApi.MJbatDelMsgItem({
        uid: arr,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.create()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    },
    handleSelectionChange(row) { 
      this.selectData = row
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
