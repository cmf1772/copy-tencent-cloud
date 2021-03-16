<template>
  <div class="buyer_tion" :style="{ height: heights }">
    <div class="tion_top">
      <el-button type="primary" size="medium" @click="addType">新增商铺</el-button>
    </div>
    <div class="tion_con">
      <el-table :data="tableData" style="width: 100%" :height="tableHeight">
        <el-table-column prop="type_id" label="商铺类型ID"> </el-table-column>
        <el-table-column prop="name" label="类型名称"> </el-table-column>
        <el-table-column prop="update_money" label="升级费用(元)"> </el-table-column>
        <el-table-column prop="allow_goods_items" label="商品数量(个)"> </el-table-column>
        <el-table-column prop="allow_upload_size" label="商品空间(MB)"> </el-table-column>
        <el-table-column prop="allow_page_items" label="页面数量(页)"> </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
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
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="商铺类型ID" prop="type_id">
          <!-- <el-input v-model="form.type_id"></el-input> -->
          <el-select v-model="form.type_id" placeholder="请选择">
            <el-option
              v-for="item in typeData"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商铺等级名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="升级费用(元)" prop="update_money">
          <el-input v-model="form.update_money"></el-input>
        </el-form-item>
        <el-form-item label="商品数量(个)" prop="allow_goods_items">
          <el-input v-model="form.allow_goods_items"></el-input>
        </el-form-item>
        <el-form-item label="商品空间(MB)" prop="allow_upload_size">
          <el-input v-model="form.allow_upload_size"></el-input>
        </el-form-item>
        <el-form-item label="页面数量(页)" prop="allow_page_items">
          <el-input v-model="form.allow_page_items"></el-input>
        </el-form-item>
      </el-form>
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
      uid: '',
      form: {},
      typeData: []
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("tion_top");
    this.tableHeight =
      window.innerHeight - 160 - inHeight[0].clientHeight + "px";
      this.create()
    this.$newApi.getTypePageList({  
      page: 1,
      page_size: 1000000,
      name: '',
      order_type: 'asc',
      order_field: 'id',
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.typeData = res.data.items
    })
  },
  methods: {
    create() {
      this.$newApi.getMemberSetPageList({  
        page: this.currentPage,
        page_size: this.page_size,
        name: '',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    addType() {
      this.dialogVisibleTitle = '新增商铺权限'
      this.dialogVisible = true
    },
    edit(row) {
      this.dialogVisibleTitle = '编辑商铺权限'
      this.dialogVisible = true
      this.$newApi.getMemberSetItem({  
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
      })
    },
    save() {
      if(this.dialogVisibleTitle == '新增商铺权限') {
        this.$newApi.addMemberSetItem({
          type_id: this.form.type_id,
          name: this.form.name,
          update_money: this.form.update_money,
          allow_goods_items: this.form.allow_goods_items,
          allow_upload_size: this.form.allow_upload_size,
          allow_page_items: this.form.allow_page_items,
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
        this.$newApi.setMemberSetItem({
          uid: this.form.uid,
          type_id: this.form.type_id,
          name: this.form.name,
          update_money: this.form.update_money,
          allow_goods_items: this.form.allow_goods_items,
          allow_upload_size: this.form.allow_upload_size,
          allow_page_items: this.form.allow_page_items,
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
      this.form = {}
      this.dialogVisible = false
    },
    delMassage(row) {
      this.$newApi.delMemberSetItem({
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
