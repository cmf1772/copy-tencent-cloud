<template>
  <div class="topicManagement">
    <div class="flex">
      <el-table :data="tableData"
                stripe
                style="width: 100%">
        <el-table-column show-overflow-tooltip
                         type="index"
                         width="50"
                         label="ID">
          <template slot-scope="scope">
            <!-- {{(currentPage-1)*10+scope.$index+1}} -->
            {{scope.$index+1}}
          </template>
        </el-table-column>
        <el-table-column prop="ask_title"
                         show-overflow-tooltip
                         label="问答标题">
        </el-table-column>

        <el-table-column prop="fmember_id"
                         show-overflow-tooltip
                         label="评论会员">
        </el-table-column>
        <el-table-column prop="content"
                         width="180"
                         show-overflow-tooltip
                         label="内容">
        </el-table-column>
        <el-table-column prop="add_time"
                         width="180"
                         show-overflow-tooltip
                         label="评论时间">
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
  name: 'topicManagement',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10
    }
  },

  methods: {
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getCommentPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getCommentPageList()
    },

    getCommentPageList () {
      this.$api.getCommentPageList({
        token: JSON.parse(this.$store.state.token).token,
        order_type: 'asc',
        order_field: 'id',
        page: this.currentPage,
        page_size: this.page_size
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    }
  },

  mounted () {
    this.getCommentPageList()
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

.topicManagement {
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
</style>
