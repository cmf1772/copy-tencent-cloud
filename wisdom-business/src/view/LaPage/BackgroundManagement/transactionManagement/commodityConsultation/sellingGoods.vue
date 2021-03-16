<template>
  <div class="sellingGoods">
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  class="table"
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
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="咨询内容"
                           width="180">
            <template slot-scope="scope">
              <div>
                <p>{{scope.row.comment_body}}</p>
                <p>店主回复: {{scope.row.reply}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="m_id"
                           show-overflow-tooltip
                           label="咨询者">
          </el-table-column>
          <el-table-column prop="register_date"
                           show-overflow-tooltip
                           label="咨询时间">
          </el-table-column>
          <el-table-column prop="app"
                           show-overflow-tooltip
                           label="状态">
            <template slot-scope="scope">
              <span class="colorBtn" @click="appClick(scope.row)">
                {{scope.row.app}}
              </span>
            </template>      
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="150"
                           min-width="60">
            <template slot-scope="scope">
              <div>
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
  </div>
</template>

<script>
export default {
  name: 'sellingGoods',

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
      this.$newApi.getCommentPageList({
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

    checkTrackQueryFun(index, row) {
      this.$newApi.delCommentItem({
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

    appClick(row) {
      this.$newApi.setCommentItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.create()
      })
    }
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
  .colorBtn{
    color: #4bb3ff;
    &:hover{
      cursor: pointer;
    }
  }
}

.sellingGoods {
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
