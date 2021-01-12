<template>
  <div class="guestBook">
    <el-tabs v-model="activeName"
             @tab-click="create()">
      <el-tab-pane label="供应留言"
                   name="0"></el-tab-pane>
      <el-tab-pane label="求购留言"
                   name="1"></el-tab-pane>
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
        <el-table-column prop="name"
                         show-overflow-tooltip
                         label="发布者">
        </el-table-column>
        <el-table-column prop="goods_name"
                         show-overflow-tooltip
                         label="项目名称">
        </el-table-column>
        <el-table-column prop="msg"
                         show-overflow-tooltip
                         label="留言内容">
        </el-table-column>
        <el-table-column prop="tel"
                         show-overflow-tooltip
                         label="联系方式">
        </el-table-column>
        <el-table-column prop="status"
                         show-overflow-tooltip
                         label="状态">
        </el-table-column>
        <el-table-column prop="register_date"
                         show-overflow-tooltip
                         label="留言时间">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="150"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="redColor  right20"
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
  </div>
</template>

<script>
export default {
  name: 'guestBook',

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
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      activeName: 0
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.BHgetWantMsgPageListVIP({
        page: this.currentPage,
        page_size: this.page_size,
        t: this.activeName,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    checkTrackQueryFun(index, row) {
      this.$newApi.BHdelWantMsgItemVIP({
        uid: row.uid,
        t: this.activeName,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
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
.guestBook {
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

    /deep/ .el-input__inner {
      border-color: #fff !important ;
    }
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
