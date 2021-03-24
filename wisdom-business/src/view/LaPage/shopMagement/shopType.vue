<template>
  <div class="buyer_tion" :style="{ height: heights }">
    <div class="tion_top">
      <el-button type="primary" size="medium" @click="addType">新增类型</el-button>
      <el-button type="primary" size="medium" @click="delSelect">删除所选</el-button>
    </div>
    <div class="tion_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="name" label="类型名称"> </el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button type="text" size="small"  @click="nav(scope.row)">
              导航
            </el-button> 
            <el-button type="text" size="small"  @click="listPush(scope.row)">
              列表
            </el-button> 
            <el-button type="text" size="small"  @click="diction(scope.row)">
              权限
            </el-button> 
            <el-button type="text" size="small"  @click="edit(scope.row)">
              编辑
            </el-button>  
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
    <el-dialog
      :title="dialogVisibleTitle"
      :visible.sync="dialogVisible"
      width="30%"
      center
      :before-close="cancel">
      类型名称: <el-input v-model="value" style="width: 70%"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="save">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 100 + "px",
      tableHeight: null,
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      tableData: [],
      selectData: [],
      dialogVisibleTitle: '',
      dialogVisible: false,
      value: '',
      uid: ''
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("tion_top");
    this.tableHeight =
      window.innerHeight - 160 - inHeight[0].clientHeight + "px";
      this.create()
  },
  methods: {
    create() {
      this.$newApi.getTypePageList({  
        page: this.currentPage,
        page_size: this.page_size,
        name: '',
        order_type: 'asc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    addType() {
      this.dialogVisibleTitle = '新增类型'
      this.dialogVisible = true
    },
    edit(row) {
      this.uid = row.id
      this.value = row.name
      this.dialogVisibleTitle = '编辑类型'
      this.dialogVisible = true
      // this.$newApi.getTypeItem({
      //   uid: row.id,
      //   token: JSON.parse(this.$store.state.token).token,
      // }).then(res => {
      // })
    },
    save() {
      if(this.dialogVisibleTitle == '新增类型') {
        this.$newApi.addTypeItem({
          name: this.value,
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
            this.cancel()
            this.$message({
              type: 'success',
              message: '操作成功'
            })
          }
        })
      } else {
        this.$newApi.setAreaItem({
          uid: this.uid,
          name: this.value,
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
            this.cancel()
            this.$message({
              type: 'success',
              message: '操作成功'
            })
          }
        })
      }
      
    },
    cancel() {
      this.value = ''
      this.uid = ''
      this.dialogVisible = false
    },
    delMassage(row) {
      this.$newApi.delTypeItem({
        uid: row.id,
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
      if(this.selectData.length == 0) {
        return this.$message({
          type: 'error',
          message: '请选择要删除的数据'
        })
      }
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.id
        }
        else {
          arr += ',' + item.id
        }
      })
      this.$newApi.batDelTypeItem({
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
    diction(row) {
      this.$router.push({path: '/shopMagement/shopDiction', query: { id: row.id}})
    },
    listPush(row) {
      this.$router.push({path: '/shopMagement/shopList', query: { id: row.id}})
    },
    nav(row) {
      this.$router.push({path: '/shopMagement/shopNav', query: { id: row.id}})
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
      &:last-child {
        margin-right: 20px;
        margin-left: 0;
      }
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
