<template>
  <div class="shop_page" :style="{ height: heights }">
    <div class="page_top">
      会员ID
      <el-input v-model="value"></el-input>
      是否认证商铺
      <el-radio-group v-model="radios">
        <el-radio :label="0">全部</el-radio>
        <el-radio :label="1">未通过认证的商铺</el-radio>
        <el-radio :label="2">已通过认证的商铺</el-radio>
      </el-radio-group>
      <el-button type="primary" size="medium" @click="search">查询商铺</el-button>
    </div>
    <div class="page_con">
      <el-table :data="tableData" style="width: 100%" :max-height="tableHeight">
        <el-table-column prop="m_id" label="会员ID" align="center">
          <template slot-scope="scope">
            {{ scope.row.m_id }}
            {{scope.row.tag}}
          </template>
        </el-table-column>
        <el-table-column prop="shop_name" label="商铺名称" align="center">
        </el-table-column>
        <el-table-column label="身份证" align="center">
          <template slot-scope="scope">
            <el-link type="primary" @click="upCard(scope.row)">查看身份证</el-link>
            <el-link type="danger" @click="shClick(scope.row, 1)">个人认证</el-link>
          </template>
        </el-table-column>
        <el-table-column label="营业执照" align="center">
          <template slot-scope="scope">
            <el-link type="primary" @click="upLicence(scope.row)">查看营业执照</el-link>
            <el-link type="danger" @click="shClick(scope.row, 2)">实体认证</el-link>
          </template>
        </el-table-column>
        <el-table-column label="审核" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.audit">通过审核</span>
            <el-tooltip content="点击审核" placement="top" v-else>
              <i class="el-icon-edit-outline" @click="shClick(scope.row, 0)"></i>
            </el-tooltip>
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
      title="拒绝认证理由："
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <el-radio-group v-model="radio">
        <el-radio :label="'1'">完善商铺资料</el-radio>
        <el-radio :label="'2'">设置支付方式</el-radio>
        <el-radio :label="'3'">设置配送方式</el-radio>
        <el-radio :label="'4'">上传认证资料</el-radio>
        <el-radio :label="'5'">上传相应的有效证件，进行商铺认证</el-radio>
        <el-radio :label="'0'">其它拒绝理由</el-radio>
      </el-radio-group>
      <el-input
        v-if="radio == '0'"
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="inputValue">
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="noSave">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="认证审核"
      :visible.sync="rzdialogVisible"
      width="30%"
      :before-close="rzhandleClose">
      <span>确认通过认证？</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="goinRebise">通 过</el-button>
        <el-button @click="noRebise">不通过</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      radio: '1',
      radios: 0,
      value: "",
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      tableData: [],
      dialogVisible: false,
      rzdialogVisible: false,
      inputValue: '',
      uid: '',
      type: ''
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("page_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getSupCheckPageList({
        page: this.currentPage,
        page_size: this.page_size,
        ps_member: this.value,
        isSupplier: this.radios,
        order_type: 'desc',
        order_field: 'register_date',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    audit() {},
    handleClose() {
      this.dialogVisible = false
    },
    rzhandleClose() {
      this.rzdialogVisible = false
    },
    noSave() {
      if(this.type) {
        this.$newApi.deny_certify({
          uid: this.uid,
          type: this.type,
          deny_reason: this.radio,
          reason: this.radio == 0 ? this.inputValue : '',
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
              message: '认证成功'
            })
            this.dialogVisible = false
            this.radio = '1'
            this.inputValue = ''
          }
        })
      } 
      else {
        this.$newApi.deny_check({
          uid: this.uid,
          deny_reason: this.radio,
          reason: this.radio == 0 ? this.inputValue : '',
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
              message: '认证成功'
            })
            this.dialogVisible = false
            this.radio = '1'
            this.inputValue = ''
          }
        })
      }
    },
    cancel() {
      this.dialogVisible = false
    },
    noRebise() {
      this.rzdialogVisible = false
      this.dialogVisible = true
    },
    goinRebise() {
      this.rzdialogVisible = false
      if(this.type) {
        this.$newApi.certify_supplier({
          uid: this.uid,
          type: this.type,
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
              message: '认证成功'
            })
          }
        })
      } 
      else {
        this.$newApi.pass_supplier({
          uid: this.uid,
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
              message: '认证成功'
            })
          }
        })
      }
    },
    upCard(row) {
      if(row.up_id_card == '') {
        return this.$message({
          type: 'error',
          message: '没有上传身份证照片'
        })
      }
      let url = 'http://www.bjxmqy.com:9501/' + row.up_id_card
      window.open(url, '_blank')
    },
    upLicence(row) {
      if(row.up_licence == '') {
        return this.$message({
          type: 'error',
          message: '没有上传营业执照'
        })
      }
      let url = 'http://www.bjxmqy.com:9501/' + row.up_licence
      window.open(url, '_blank')
    },
    shClick(row, val) {
      this.uid = row.m_uid
      this.type = val
      this.rzdialogVisible = true
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
    search() {
      this.currentPage = 1
      this.page_size = 10
      this.create()
    }
  }
};
</script>

<style lang="scss" scoped>
.shop_page {
  border-radius: 4px;
  overflow: auto;
  .page_top {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    .el-input {
      width: 20%;
      margin-left: 10px;
      margin-right: 20px;
    }
    .el-radio-group {
      margin-left: 10px;
      .el-radio {
        margin-right: 10px;
      }
    }
  }
  .page_con {
    height: 520px;
    background: #fff;
    border-radius: 4px;
    overflow: auto;
    .el-table {
      .el-table__row {
        i {
          font-size: 20px;
          &:hover {
            cursor: pointer;
            color: #f00;
          }
        }
      }
    }
  }
}
.el-dialog{
  .el-radio-group{
    .el-radio{
      display: block;
      margin-bottom: 10px;
    }
  }
}

</style>
