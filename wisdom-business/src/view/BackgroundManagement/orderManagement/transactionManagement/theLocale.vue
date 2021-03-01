<template>
  <div class="theLocale">
    <div class="table_bottom">
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 120px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        添加区域
      </el-button>
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
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="填加配送区域"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="所辖地区">
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
                           @click="editor(scope.$index, scope.row)">编辑</el-button>
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
                         @current-change="handleCurrentChanhgeFun"
                         :current-page="currentPage"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size="page_size"
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
  name: 'theLocale',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10
    }
  },

  methods: {
    // add () {
    //   this.$router.push('/transactionManagement/addTheLocale?nameType=新建配送区域  ')

    // },
    // editor () {
    //   this.$router.push('/transactionManagement/addTheLocale?nameType=修改配送区域  ')
    // },
    getShippingItem () {
      this.$api.getShippingItem({
        ship_uid: this.$route.query.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalList = res.data.total_result
      })
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
    this.getShippingItem()
  }
}
</script>

<style lang="scss" scoped>
.theLocale {
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
