<template>
  <div class="displayProducts">
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="联系人"
                           width="180">
          </el-table-column>
          <el-table-column prop="tel"
                           show-overflow-tooltip
                           label="电话/手机">
          </el-table-column>
          <el-table-column prop="shop_name"
                           show-overflow-tooltip
                           label="询单商铺">
          </el-table-column>
          <el-table-column prop="reg_time"
                           show-overflow-tooltip
                           label="登记时间">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="150"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="look(scope.$index, scope.row)">查看</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
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
    <el-dialog title="询单查看"
               :visible.sync="dialogVisible"
               width="60%"
               :before-close="handleClose">
      <div>
        <el-form ref="form"
                 :model="form"
                 label-width="130px">
          <el-form-item label="联系人："
                        prop="name">
            {{form.name}}
          </el-form-item>
          <el-form-item label="联系电话："
                        prop="mobile">
            {{form.mobile}}
          </el-form-item>
          <el-form-item label="手机："
                        prop="tel">
            {{form.tel}}
          </el-form-item>
          <el-form-item label="email："
                        prop="email">
            {{form.email}}
          </el-form-item>
          <el-form-item label="联系地址："
                        prop="address">
            {{form.address}}
          </el-form-item>
          <el-form-item label="公司名称："
                        prop="invoice">
            {{form.invoice}}
          </el-form-item>
          <el-form-item label="留言："
                        prop="msg">
            {{form.msg}}
          </el-form-item>
          <el-form-item label="登记时间："
                        prop="reg_time">
            {{form.reg_time}}
          </el-form-item>
          <el-form-item label="IP："
                        prop="ip">
            {{form.ip}}
          </el-form-item>
          <el-form-item label="询单商铺："
                        prop="shop_name">
            {{form.shop_name}}
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <!-- <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button> -->
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'displayProducts',

  data () {
    return {
      time: [],
      status: '',
      dialogVisible: false,
      options: [
        { value: '', label: '全部' },
        { value: 0, label: '离线' },
        { value: 1, label: '在线' },
        { value: 2, label: '维护' },
        { value: 3, label: '故障' },
        { value: 4, label: '失效' },
      ],
      sName: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }],
      form: {

      },
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10
    }
  },
  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getAskOrderPageList({
        page: this.currentPage,
        page_size: this.page_size,
        keyword: "",
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    look (index, row) {
      this.$newApi.getAskOrderItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data
      })
      this.dialogVisible = true
    },

    checkTrackQueryFun(index, row) {
      this.$newApi.delAskOrderItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.create()
      })
    },

    add () {
      this.$router.push('/device/edit?nameType=新建设备')

    },
    editor () {
      this.$router.push('/device/edit?nameType=修改设备')
    },

    handleClose() {
      
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
}
</script>

<style lang="scss" scoped>
.displayProducts {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

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
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
