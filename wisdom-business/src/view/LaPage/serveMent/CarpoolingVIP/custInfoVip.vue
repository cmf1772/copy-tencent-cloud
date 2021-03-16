<template>
  <div class="busMess_page" :style="{ height: heights }">
    <div class="busPage_top">
      <el-button
        type="text"
        :style="btn_type ? 'color: #409EFF' : ''"
        @click="tableChange(0)"
        >供应留言</el-button
      >
      <el-button
        type="text"
        :style="!btn_type ? 'color: #409EFF' : ''"
        @click="tableChange(1)"
        >求购留言</el-button
      >
      <el-button
        type="primary"
        size="medium"
        style="float: right;margin-right: 20px;color: #fff;"
        @click="delSelect"
        >删除所选</el-button
      >
    </div>
    <div class="busPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight" @selection-change="handleSelectionChange">
        <el-table-column
        type="selection"
        width="55">
      </el-table-column>
        <el-table-column prop="approval_date" label="发布者"> </el-table-column>
        <el-table-column prop="goods_name" label="项目名称"> </el-table-column>
        <el-table-column prop="msg" label="留言内容"> </el-table-column>
        <el-table-column label="联系方式">
          <template slot-scope="scope">
            <p>联系姓名:{{ scope.row.name }}</p>
            <p>联系电话:{{ scope.row.tel }}</p>
            <p>联系地址:{{ scope.row.address }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态"> </el-table-column>
        <el-table-column prop="register_date" label="留言时间"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="color: #f00;" @click="del(scope.row)"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      btn_type: true,
      currentPage: 1,
      page_size: 10,
      title: 0,
      tableData: [],
      selectData: [],
      totalData: 0
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("busPage_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    this.create()
  },
  methods: {
   create() {
      this.$newApi.LYgetWantMsgPageListVIP({
        page: this.currentPage,
        page_size: this.page_size,
        t: this.title,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
   },
   tableChange(val) {
     this.title = val
     this.create()
      if (!val) {
        this.btn_type = true;
      } else {
        this.btn_type = false;
      }
   },
   handleSelectionChange(val) {
     this.selectData = val
   },
   delSelect() {
     let arr = ''
     this.selectData.forEach((item, index) => {
       if(index == 0) {
         arr = item.uid
       }
       else {
         arr += ',' + item.uid
       }
     })
     this.$newApi.LYbatDelWantMsgItemVIP({
        uid: arr,
        t: this.title,
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
        }
        this.create()
      })
   },
   del(row) {
      this.$newApi.LYdelWantMsgItemVIP({
        uid: row.uid,
        t: this.title,
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
        }
        this.create()
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
.busMess_page {
  width: 100%;
  display: flex;
  flex-direction: column;
  .busPage_top {
    padding: 10px 0;
    .el-button {
      color: #999;
    }
  }
  .busPage_con {
    background: #fff;
    flex: 1;
  }
}
</style>
