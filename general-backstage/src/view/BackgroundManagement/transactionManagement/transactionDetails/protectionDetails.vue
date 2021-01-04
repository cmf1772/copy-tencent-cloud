<template>
  <div class="protectionDetails">
    <div class="top_button">
      <div class="top_left">
        <span>会员：</span>
        <el-input v-model="sName"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>时间：</span>
        <el-date-picker v-model="value1"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>

      </div>
      <div class="top_right">
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="create()">
          搜索
        </el-button>
      </div>
    </div>
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
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="money_id"
                           show-overflow-tooltip
                           label="会员"
                           width="180">
          </el-table-column>
          <el-table-column prop="money_reason"
                           show-overflow-tooltip
                           label="交易类型">
          </el-table-column>
          <el-table-column prop="type"
                           show-overflow-tooltip
                           label="支付类别">
          </el-table-column>
          <el-table-column prop="money_sess"
                           show-overflow-tooltip
                           label="交易单号">
          </el-table-column>
          <el-table-column prop="minus"
                           show-overflow-tooltip
                           label="收支">
          </el-table-column>
          <el-table-column prop="money_left"
                           show-overflow-tooltip
                           label="消保余额">
          </el-table-column>
          <el-table-column prop="register_date"
                           show-overflow-tooltip
                           label="创建时间">
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
  name: 'protectionDetails',

  data () {
    return {
      time: [],
      status: '',
      value: '',
      value1: [],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.xbGetMoneyPageList({
        page: this.currentPage,
        page_size: this.page_size,
        money_id: this.sName,
        b_time: this.value1[0],
        e_time: this.value1[1],
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
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
.protectionDetails {
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
</style>
