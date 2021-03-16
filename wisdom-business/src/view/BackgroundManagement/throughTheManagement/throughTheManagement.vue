<template>
  <div class="provider">
    <div class="table_bottom">
      <div class="table-title">
        <strong>数据占比统计：</strong> <br>
        <span>领券 0/0个，占比 0% </span>
        <span>核销 0/0个，占比 0%</span>
      </div>
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 120px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        申请通证
      </el-button>
      <div class="c_box">
        <el-tabs v-model="status"
                 @tab-click="handleClick">
          <el-tab-pane label="全部"
                       name="99"></el-tab-pane>
          <el-tab-pane label="已审核"
                       name="0"></el-tab-pane>
          <el-tab-pane label="待审核"
                       name="1"></el-tab-pane>
          <el-tab-pane label="未通过"
                       name="2"></el-tab-pane>
          <el-tab-pane label="已过期"
                       name="3"></el-tab-pane>
        </el-tabs>
      </div>
      <div :style="{'height': height, 'overflow': 'auto'}">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="通证名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="type_name"
                           show-overflow-tooltip
                           label="类型">
          </el-table-column>
          <el-table-column prop="style"
                           show-overflow-tooltip
                           label="样式">
          </el-table-column>
          <el-table-column prop="num"
                           show-overflow-tooltip
                           label="数量">
          </el-table-column>
          <el-table-column prop="cate_id"
                           show-overflow-tooltip
                           label="适用商品">
          </el-table-column>
          <el-table-column prop="start_date"
                           show-overflow-tooltip
                           label="有效期限开始">
          </el-table-column>
          <el-table-column prop="end_date"
                           show-overflow-tooltip
                           label="有效期限结束">
          </el-table-column>
          <el-table-column prop="rule_name"
                           show-overflow-tooltip
                           label="规则">
          </el-table-column>
          <el-table-column prop="receive"
                           show-overflow-tooltip
                           label="领券数">
          </el-table-column>
          <el-table-column prop="rec_rate"
                           show-overflow-tooltip
                           label="核销率">
          </el-table-column>
        </el-table>
      </div>
      <div class="btootm_paination c_box">
        <el-pagination @size-change="handleSizeChange"
                       @current-change="handleCurrentChangeFun"
                       :current-page="currentPage"
                       :page-sizes="[10, 20, 30, 40]"
                       :page-size="page_size"
                       layout="total, sizes, prev, pager, next, jumper"
                       :total="total">
        </el-pagination>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'provider',

  data () {
    return {
      status: '99',
      time: [],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      height: window.innerHeight - 400 + 'px'
    }
  },

  methods: {
    add () {
      this.$router.push('/throughTheManagement/editThroughTheManagement?nameType=申请通证')
    },

    editor () {
      this.$router.push('/throughTheManagement/editThroughTheManagement?nameType=修改设备')
    },

    handleClick () {
      this.getPointPageList()
    },

    getPointPageList () {
      this.$api.getPointPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'id',
        cate_id: this.cate_id,
        status: this.status,
        ps_subject: this.ps_subject,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getPointPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getPointPageList()
    },
  },

  mounted () {
    this.getPointPageList()
  }
}
</script>

<style lang="scss" scoped>
.table-title {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  > span {
    margin-right: 30px;
  }
}
.provider {
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
  .el-tabs {
    height: 100%;
    .el-tabs__content {
      height: 100%;
    }
  }
  .el-table {
    flex: 1;
    overflow: auto;
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
