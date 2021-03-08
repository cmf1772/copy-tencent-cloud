
<template>
  <div class="friendshipConnection">
    <div class="table_bottom">
      <el-button slot="append"
                 type="primary"
                 icon="el-icon-plus"
                 style="width: 90px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                 @click="add">
        添加连接
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
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="网站名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="url"
                           show-overflow-tooltip
                           label="链接地址"
                           width="180">
          </el-table-column>
          <el-table-column prop="note"
                           show-overflow-tooltip
                           label="链接说明">
          </el-table-column>
          <el-table-column prop="displayorder"
                           show-overflow-tooltip
                           label="显示顺序">
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
                           @click="delLinkItem(scope.$index, scope.row)">删除</el-button>
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
  name: 'friendshipConnection',

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

  mounted () {
    this.getLinkPageList()
  },

  methods: {
    delLinkItem (i, r) {
      this.$api.delLinkItem({
        uid: r.id,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getLinkPageList()
      })
    },

    add () {
      this.$router.push('/shopManagement/editFriendshipConnection?nameType=添加友情连接')
    },

    editor (i, r) {
      this.$router.push({
        path: '/shopManagement/editFriendshipConnection',
        query: {
          nameType: "编辑友情连接",
          uid: r.id
        }
      })
    },

    getLinkPageList () {
      this.$api.getLinkPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'displayorder',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getLinkPageList()
    },

    handleSizeChange (val) {
      this.page_size = val;
      this.getLinkPageList()
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>

<style lang="scss" scoped>
.friendshipConnection {
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
