<template>
  <div class="topicManagement">
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
        <el-table-column show-overflow-tooltip
                         width="180"
                         label="封面">
          <template slot-scope="scope">
            <div class="img">
              <img :src="scope.row.image"
                   alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="fmember_id"
                         show-overflow-tooltip
                         label="会员">
        </el-table-column>

        <el-table-column prop="title"
                         show-overflow-tooltip
                         label="标题">
        </el-table-column>
        <el-table-column prop="content"
                         width="180"
                         show-overflow-tooltip
                         label="内容">
        </el-table-column>
        <el-table-column prop="address"
                         show-overflow-tooltip
                         label="标签">
        </el-table-column>
        <el-table-column prop="zan_count"
                         show-overflow-tooltip
                         label="点赞量">
        </el-table-column>
        <el-table-column prop="comment_count"
                         show-overflow-tooltip
                         label="评论量">
        </el-table-column>
        <el-table-column prop="money"
                         width="180"
                         show-overflow-tooltip
                         label="赞赏金额">
        </el-table-column>
        <el-table-column prop="agree"
                         show-overflow-tooltip
                         label="赞同">
        </el-table-column>
        <el-table-column prop="disagree"
                         show-overflow-tooltip
                         label="不赞同">
        </el-table-column>
        <el-table-column prop="add_time"
                         width="180"
                         show-overflow-tooltip
                         label="关注时间">
        </el-table-column>

      </el-table>
      <div class="btootm_paination">
        <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
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
      this.getAskPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getAskPageList()
    },

    getAskPageList () {
      this.$api.getAskPageList({
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
    this.getAskPageList()
  }
}
</script>


<style lang="scss" scoped>
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        .img {
          width: 100%;
          height: 100%;
          cursor: pointer;
          display: flex;
          overflow-x: auto;
          > img {
            width: 100px !important;
            margin-right: 20px;
            height: 100% !important;
          }
        }
      }
    }
  }
}
</style>

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
