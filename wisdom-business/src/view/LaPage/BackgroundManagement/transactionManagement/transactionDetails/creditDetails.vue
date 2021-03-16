<template>
  <div class="creditDetails">
    <div class="top_button">
      <div class="top_left">
        <span>指定会员明细：</span>
        <el-input v-model="sName"
                  style="width: 200px"
                  clearable>
        </el-input>
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
      <el-tabs v-model="activeName"
               @tab-click="handleClick(activeName)">
        <el-tab-pane label="所有记录"
                     name="0"></el-tab-pane>
        <el-tab-pane label="获取记录"
                     name="1"></el-tab-pane>
        <el-tab-pane label="使用记录"
                     name="2"></el-tab-pane>
        <el-tab-pane label="撤销记录"
                     name="3"></el-tab-pane>
      </el-tabs>
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
          <el-table-column prop="point_id"
                           show-overflow-tooltip
                           label="会员"
                           width="180">
          </el-table-column>
          <el-table-column prop="type"
                           show-overflow-tooltip
                           label="交易类型">
          </el-table-column>
          <el-table-column prop="point_sess"
                           show-overflow-tooltip
                           label="交易单号">
          </el-table-column>
          <el-table-column prop="point_add"
                           show-overflow-tooltip
                           label="收支">
          </el-table-column>
          <el-table-column prop="point_left"
                           show-overflow-tooltip
                           label="可用积分">
          </el-table-column>
          <el-table-column prop="reg_date"
                           show-overflow-tooltip
                           label="创建时间">
          </el-table-column>
          <el-table-column prop="status"
                           show-overflow-tooltip
                           label="状态">
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
  name: 'creditDetails',

  data () {
    return {
      activeName: 0,
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
      this.$newApi.getPointPageList({
        page: this.currentPage,
        page_size: this.page_size,
        t: this.activeName,
        ps_member: this.sName,
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    handleClick(val) {
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
  }
}
</script>

<style lang="scss" scoped>
.creditDetails {
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
