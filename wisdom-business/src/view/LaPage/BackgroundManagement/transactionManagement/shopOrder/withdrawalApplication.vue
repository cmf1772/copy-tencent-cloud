<template>
  <div class="withdrawalApplication">
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  class="table"
                  style="width: 100%">
          <el-table-column prop="shop_name"
                           show-overflow-tooltip
                           label="商铺名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="shop_m_id"
                           show-overflow-tooltip
                           label="商铺管理员">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="账户信息">
            <template slot-scope="scope">
              <div>
                <p>{{scope.row.type ? '银行卡' : '支付宝'}}: {{scope.row.account}}</p>
                <p>{{scope.row.type ? '开户人' : '提现人'}}: {{scope.row.member_name}}</p>
                <p v-if="scope.row.type">开户行: {{scope.row.bank}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="money"
                           show-overflow-tooltip
                           label="提现金额">
          </el-table-column>
          <el-table-column prop="real_money"
                           show-overflow-tooltip
                           label="实收金额">
          </el-table-column>
          <el-table-column prop="reg_time"
                           show-overflow-tooltip
                           label="提现时间">
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
                           @click="editor(scope.$index, scope.row)">审核</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">驳回</el-button>
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
  </div>
</template>

<script>
export default {
  name: 'withdrawalApplication',

  data () {
    return {
      time: [],
      status: '',
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
      this.$newApi.getWithdrawPageList({
        page: this.currentPage,
        page_size: this.page_size,
        member_name: "",
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        console.log(res)
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    add () {
      this.$router.push('/device/edit?nameType=新建设备')

    },
    editor () {
      this.$router.push('/device/edit?nameType=修改设备')
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

/deep/ .table{
  .el-table__row{
    td{
      height: 80px !important;
      .cell {
        height: 100% !important;
      }
      .el-table .cell.el-tooltip {
        height: 100%;
      }
      div{
        height: 100%;
      }
    }
  }
}

.withdrawalApplication {
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
