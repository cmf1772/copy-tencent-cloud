<template>
  <div class="logisticsTools">
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
                         label="配送名称">
        </el-table-column>
        <el-table-column prop="desc"
                         show-overflow-tooltip
                         label="配送描述">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="150"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         v-if="scope.row.install === 0"
                         type="text"
                         @click="addShippingItem(scope.$index, scope.row)"
                         class="blueColor right20">安装</el-button>
              <el-button size="medium"
                         v-if="scope.row.install === 1"
                         type="text"
                         class="blueColor right20"
                         @click="editor(scope.$index, scope.row)">区域设置</el-button>
              <el-button size="medium"
                         v-if="scope.row.install === 1"
                         type="text"
                         class="redColor right20"
                         @click="delShippingItem(scope.$index, scope.row)">删除</el-button>
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
                       :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logisticsTools',

  data () {
    return {
      time: [],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10
    }
  },

  methods: {
    addShippingItem (i, r) {
      this.$api.addShippingItem({
        name: r.key,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          type: 'success',
          message: '安装成功'
        })
        this.getShippingList()
      })
    },

    delShippingItem (i, r) {
      this.$api.delShippingItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          type: 'success',
          message: '卸载成功'
        })
        this.getShippingList()
      })
    },

    getShippingList () {
      this.$api.getShippingList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = []
        res.data.forEach(i => {
          for (let key in i) {
            this.tableData.push({
              name: i[key].name,
              desc: i[key].desc,
              install: i[key].install,
              license: i[key].license,
              uid: i[key].uid,
              key: key
            })
          }
        })
        console.log(this.tableData)
        this.totalList = res.data.total_result
      })
    },
    add () {
      this.$router.push('/driver/edit?nameType=新建驱动')
    },

    editor (i, r) {
      this.$router.push('/transactionManagement/theLocale?uid=' + r.uid)
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      this.page_size = val;
      tableDataRenderFun(this);
      console.log(`每页 ${val} 条`);
    },
  },

  mounted () {
    this.getShippingList()
  }
}
</script>

<style lang="scss" scoped>
.logisticsTools {
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
