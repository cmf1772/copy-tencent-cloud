<template>
  <div class="advertisingManagement">
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="title"
                           show-overflow-tooltip
                           label="标题"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="广告信息">
            <template slot-scope="scope">
              <div>
                位置：{{scope.row.module}} > {{scope.row.other_param}} > {{scope.row.pos}}
              </div>
              <div>
                长宽：{{scope.row.wh}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="相关图片">
            <template slot-scope="scope">
              <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.pic"></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="其他信息">
            <template slot-scope="scope">
                <p>显示类别:<a @click="stype(scope.row)">测试类别</a></p>
                <p>申请人:{{scope.row.m_id}}</p>
                <p>申请天数:{{scope.row.days}}</p>
            </template>
          </el-table-column>
          <el-table-column prop="expire"
                           show-overflow-tooltip
                           label="退回理由">
            <template slot-scope="scope">
              <el-input
                type="textarea"
                :rows="2"
                placeholder="请输入内容"
                v-model="scope.row.back_reason">
              </el-input>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class=""
                           @click="chack(scope.row)">审核</el-button>
                <el-button size="medium"
                           type="text"
                           class=""
                           @click="back(scope.row)">驳回</el-button>
                <el-button size="medium"
                           type="text"
                           class="yellowColor"
                           @click="edit(scope.row)">查看</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
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
    </div>

    <el-dialog
      title="广告申请查看"
      :visible.sync="dialogVisible"
      width="40%"
      center>
      <el-form :model="formInline" class="demo-form-inline" label-width="80px">
        <div class="display">
          <el-form-item label="申请人">
            {{formInline.m_id}}
          </el-form-item>
          <el-form-item label="商铺名称">
            {{formInline.shop_name}}
          </el-form-item>
        </div>
        <div class="display">
          <el-form-item label="申请天数">
            {{formInline.days}}
          </el-form-item>
          <el-form-item label="申请时间">
            {{formInline.reg_time}}
          </el-form-item>
        </div>
        <el-form-item label="当前状态">
          {{formInline.status}}
        </el-form-item>
        <el-form-item label="相关内容">
          <div>
            <p>
              广告类型:{{formInline.show_cat}}
            </p>
            <p>
              显示标题:{{formInline.title}}
            </p>
            <p>
              链接地址:<a @click="stype(formInline)">{{formInline.url}}</a> 
            </p>
            <p>
              相关图片:<el-image
                        style="width: 100px; height: 100px"
                        :src="formInline.pic"></el-image>
            </p>
          </div>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'advertisingManagement',

  data () {
    return {
      time: [],
      radio: '-1',
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      configData: [],
      configTwoData: [],
      configThreeData: [],
      moduleOne: '',
      moduleTwo: '',
      moduleThree: '',
      dialogVisible: false,
      formInline: {}
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getApplyPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    chack(row) {
      this.$newApi.checkApplyItem({
        uid: row.uid,
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
              message: '操作成功'
            })
            this.create()
          }
      })
    },

    back(row) {
      this.$newApi.backApplyItem({
        uid: row.uid,
        back_reason: row.back_reason,
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
              message: '操作成功'
            })
            this.create()
          }
      })
    },

    checkTrackQueryFun(row) {
      this.$newApi.delApplyItem({
        uid: row.uid,
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
              message: '操作成功'
            })
            this.create()
          }
      })
    },

    sesarchFun() {
      this.currentPage = 1
      this.create()
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

    stype(row) {
      if(row.url.indexOf('http') == -1) {
        window.location.href = 'http://' + row.url
      } else {
        window.location.href = row.url
      }
    },

    edit (row) {
      this.dialogVisible = true
      this.$newApi.getApplyItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.formInline = Object.assign(res.data.ad_apply, res.data.info, res.data.member)
      })
    },
    look () {
      this.$router.push('/marketHome/details')
    },
  }
}
</script>

<style lang="scss" scoped>
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}
.el-table{
  /deep/ .el-tooltip{
    height: 100px !important;
  }
}
.advertisingManagement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
    overflow: auto;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
.el-form{
  .display{
    display: flex;
    .el-form-item{
      flex: 1;
    }
  }
}
a{
  &:hover{
    color: #f00;
    cursor: pointer;
    border-bottom: 1px solid #f00;
  }
}
</style>
