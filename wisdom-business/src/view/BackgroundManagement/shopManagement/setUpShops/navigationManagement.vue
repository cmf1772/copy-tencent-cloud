
<template>
  <div class="navigationManagement">
    <div class="table_bottom">
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 90px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        添加导航
      </el-button>
      <div class="tabs">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane label="查看全部"
                       name=""></el-tab-pane>
          <el-tab-pane label="顶部导航"
                       name="head"></el-tab-pane>
          <el-tab-pane label="底部导航"
                       name="foot"></el-tab-pane>
        </el-tabs>
      </div>
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
          <el-table-column prop="title"
                           show-overflow-tooltip
                           label="栏目名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="view"
                           show-overflow-tooltip
                           label="排序">
          </el-table-column>
          <el-table-column prop="pos"
                           show-overflow-tooltip
                           label="栏目类型">
          </el-table-column>
          <el-table-column prop="target"
                           show-overflow-tooltip
                           label="窗口类型">
            <template slot-scope="scope">
              <div>
                {{scope.row.target === 1 ? '新窗口' : '本窗口'}}
              </div>
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
                           class="yellowColor right20"
                           @click="editor(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delNavItem(scope.$index, scope.row)">删除</el-button>
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
  </div>
</template>

<script>
export default {
  name: 'navigationManagement',

  data () {
    return {
      activeName: '',
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
    }
  },

  methods: {
    getNavPageList () {
      this.$api.getNavPageList({
        pos: this.activeName == 0 ? '' : this.activeName,
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'view',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    delNavItem (i, r) {
      this.$api.delNavItem({
        uid: r.nid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: '删除成功',
          type: 'success'
        });
        this.getNavPageList()
      })
    },

    handleClick () {
      this.getNavPageList()
    },

    add () {
      this.$router.push('/setUpShops/editNavigationManagement?nameType=添加导航')

    },
    editor (i, r) {
      this.$router.push({
        path: '/setUpShops/editNavigationManagement',
        query: {
          nameType: '编辑导航',
          uid: r.nid
        }
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  },

  mounted () {
    this.getNavPageList()
  }
}
</script>

<style lang="scss" scoped>
.navigationManagement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
