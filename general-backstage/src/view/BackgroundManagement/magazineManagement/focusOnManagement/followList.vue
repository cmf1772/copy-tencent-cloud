<template>
  <div class="provider">
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
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="UID"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="会员ID">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关注会员ID">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关注时间">
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChangeFun"
                         :current-page="currentPage"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size="100"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'provider',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      total: 0,
      page_size: 10,
    }
  },

  methods: {
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getFriendPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getFriendPageList()
    },

    getFriendPageList () {
      this.$api.getFriendPageList({
        token: JSON.parse(this.$store.state.token).token,
        order_type: 'asc',
        order_field: 'uid',
        page: this.currentPage,
        page_size: this.page_size
      }).then(res => {

      })
    }
  },

  mounted () {
    this.getFriendPageList()
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

.provider {
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
