<template>
  <div class="head_page">
    <div class="headPage_top">
      <el-button size="medium" type="primary" @click="addHead">
        添加总店
      </el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="名称"> </el-table-column>
      <el-table-column prop="province" label="省份"> </el-table-column>
      <el-table-column prop="city" label="城市"> </el-table-column>
      <el-table-column prop="county" label="区域"> </el-table-column>
      <el-table-column label="操作" width="130">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">管理员</el-button>
          <el-button type="text" size="small" style="color: #f00;" @click="del(scope.row)">删除</el-button>
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

    <el-dialog
      title="添加总店"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleCnacel"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="区域">
          {{ $route.query.name }}
        </el-form-item>
        <el-form-item label="总店名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogSave"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="总店管理员"
      :visible.sync="dialogDinger"
      width="30%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="ruleform" label-width="80px">
        <el-form-item label="总店">
          {{ ruleform.shop_name }}
        </el-form-item>
        <el-form-item label="登录名">
          <el-input v-model="ruleform.member_id"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="ruleform.member_pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="ruleform.re_member_pass"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dislogSave"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      dialogDinger: false,
      form: {
        name: ""
      },
      ruleform: {},
      currentPage: 1,
      page_size: 10,
      totalData: 0,
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getCityShopPageList({
        page: this.currentPage,
        page_size: this.page_size,
        area: this.$route.query.name,
        order_type: 'asc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    addHead() {
      this.dialogVisible = true;
    },
    edit(row) {
      this.dialogDinger = true
      this.$newApi.ZDgetAdminItem({
        cid: row.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.ruleform = res.data
        this.ruleform.shop_name = row.name
        this.ruleform.id = row.id
        this.ruleform.city = row.county
        if(row.county == '') {
          this.ruleform.city = row.city
          if(this.ruleform.city == '') {
            this.ruleform.city = row.province
          }
        }
      })
    },
    dislogSave() {
      this.$newApi.ZDaddAdminItem({
        uid: this.ruleform.uid,
        cid: this.ruleform.id,
        city: this.ruleform.city,
        member_id: this.ruleform.member_id,
        member_pass: this.ruleform.member_pass,
        re_member_pass: this.ruleform.re_member_pass,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        // this.ruleform = res.data
        // this.ruleform.shop_name = row.name
        // this.ruleform.id = row.id
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.create()
          this.handleClose()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })  
    },
    dialogSave() {
      this.$newApi.addCityShopItem({
        area: this.$route.query.name,
        name: this.form.name,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.dialogVisible = false;
        this.form = {}
        if(res.data.err_code >= 0) {
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
    handleClose() {
      this.dialogDinger = false
      this.ruleform = {}
    },
    handleCnacel() {
      this.dialogVisible = false;
      this.form = {}
    },
    del(row) {
      this.$newApi.delCityShopItem({
        uid: row.id,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
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
.head_page {
  width: 100%;
  height: 100%;
  overflow: auto;
  .headPage_top {
    width: 100%;
    background: #fff;
    border-radius: 4px;
    padding: 10px 0;
    text-align: right;
    margin-bottom: 5px;
    .el-button {
      margin-right: 20px;
    }
  }
}
</style>
