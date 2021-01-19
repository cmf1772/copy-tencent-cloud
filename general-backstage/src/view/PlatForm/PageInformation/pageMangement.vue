<template>
  <div class="nav_page" :style="{ height: heights }">
    <div class="navPage_top">
      <el-button size="medium" type="primary" @click="selectDel">删除所选</el-button>
      <el-button size="medium" type="primary" @click="addNav"
        >添加页面</el-button
      >
    </div>
    <div class="navPage_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight"  @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="page_subject" label="页面名称"> </el-table-column>
        <el-table-column prop="page_name" label="页面英文名称">
        </el-table-column>
        <el-table-column prop="register_date" label="登记日期"> </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
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
      fileList: [],
      dialogVisible: false,
      tableData: [
        {
          date: "2019-04-20 18:29",
          superior_column: "页面英文名称",
          column_name: "关于美城网"
        },
        {
          date: "2019-04-20 18:29",
          superior_column: "页面英文名称",
          column_name: "关于美城网"
        },
        {
          date: "2019-04-20 18:29",
          superior_column: "页面英文名称",
          column_name: "关于美城网"
        }
      ],
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      selectData: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      var inHeight = document.getElementsByClassName("navPage_top");
      this.tableHeight =
        window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    });
    this.create()
  },
  methods: {
     create() {
      this.$newApi.getPagePageList({
        page: this.currentPage,
        page_size: this.page_size,
        title: '',
        order_type: 'asc',
        order_field: 'page_name',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    edit(row) {
      this.$router.push({
        path: "/PlatForm/PageInformation/addPageMangement?uid=" + row.uid
      });
    },
    del(row){
      this.$newApi.delPageItem({
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
    selectDel() {
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
      this.$newApi.batDelPageItem({
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
          this.$message({
            type: 'success',
            message: '操作成功'
          })
          this.create()
        }
      })
    },
    handleSelectionChange(val) {
      this.selectData = val
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
    handleClose() {},
    addNav() {
      this.$router.push({
        path: "/PlatForm/PageInformation/addPageMangement"
      });
    },
    handlePreview() {},
    handleRemove() {},
    beforeRemove() {},
    handleExceed() {}
  }
};
</script>

<style lang="scss" scoped>
.nav_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .navPage_top {
    padding: 10px 0;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 5px;
    text-align: right;
    .el-button {
      &:last-child {
        margin-right: 20px;
      }
    }
  }
  .navPage_con {
    flex: 1;
    background: #fff;
  }
  .dislog_form {
    max-height: 50vh;
    overflow: auto;
    .el-form-item {
      .el-input {
        width: 80%;
      }
      .el-select {
        width: 80%;
      }
      .el-radio-group {
        .el-radio {
          flex: 1;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
