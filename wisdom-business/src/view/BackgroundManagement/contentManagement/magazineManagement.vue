<template>
  <div class="provider">

    <div class="table_bottom">
      <p style="width: 100px; height: 25px;text-aline:center;line-height: 25px;font-size: 12px;margin: 10px 0 10px 10px;font-size: 16px">栏目添加</p>
      <el-form ref="form"
               :model="formTop"
               label-width="130px">
        <el-form-item label="栏目编码（英文）："
                      prop="displayName">
          <el-input v-model="formTop.board_code"
                    placeholder="必须用英文"></el-input>
        </el-form-item>
        <el-form-item label="栏目标题："
                      prop="displayName">
          <el-input v-model="formTop.board_title"
                    placeholder="前台显示的栏目名称"></el-input>
        </el-form-item>
        <el-form-item label="排序："
                      prop="displayName">
          <el-input v-model="formTop.od"
                    placeholder></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary"
                 @click="addBoardItem"
                 style="float: right; width: 100px; margin-left: 30px">确定</el-button>
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
          <el-table-column prop="board_name_code"
                           show-overflow-tooltip
                           label="栏目名称（英文）"
                           width="180">
          </el-table-column>
          <el-table-column prop="board_title"
                           show-overflow-tooltip
                           label="栏目标题"
                           width="180">
          </el-table-column>
          <el-table-column prop="od"
                           show-overflow-tooltip
                           label="排序">
          </el-table-column>

          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="look(scope.$index, scope.row)">查看</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="editor(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delBoardItem(scope.$index, scope.row)">删除</el-button>
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
    <el-dialog title="栏目设定"
               :visible.sync="dialogVisible"
               width="50%"
               :before-close="handleClose">
      <el-form ref="form"
               :model="form"
               label-width="130px">
        <el-form-item label="栏目编码："
                      prop="displayName">
          <el-input v-model="form.board_code"
                    placeholder="必须用英文"></el-input>
        </el-form-item>
        <el-form-item label="栏目标题："
                      prop="displayName">
          <el-input v-model="form.board_title"
                    placeholder="前台显示的栏目名称"></el-input>
        </el-form-item>
        <el-form-item label="排序："
                      prop="displayName">
          <el-input v-model="form.od"
                    placeholder></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="setBoardItem">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'provider',

  data () {
    return {
      formTop: {
        board_code: '',
        board_title: '',
        od: '',
        parentid: '0',
      },

      dialogVisible: false,
      form: {
        board_code: '',
        board_title: '',
        od: '',
        parentid: '0',
      },
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      uid: '',
    }
  },

  mounted () {
    this.getArticlePageList()
  },

  methods: {
    addBoardItem () {
      this.$api.addBoardItem({
        board_title: this.formTop.board_title,
        board_code: this.formTop.board_code,
        parentid: this.formTop.parentid,
        od: this.formTop.od,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: '添加成功',
          type: 'success'
        });
        this.getArticlePageList()
      })
    },

    getArticlePageList () {
      this.$api.getArticlePageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    setBoardItem () {
      this.$api.setBoardItem({
        uid: this.uid,
        board_title: this.form.board_title,
        board_code: this.form.board_code,
        parentid: this.form.parentid,
        od: this.form.od,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.dialogVisible = false
        this.getArticlePageList()
      })
    },

    // 分装删除
    delBoardItem (i, r) {
      this.$api.delBoardItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getArticlePageList()
      })
    },



    add () {
      this.$router.push('/commodity/editConventionalKnowledge?nameType=添加商品')
    },

    look (i, r) {
      this.$router.push({
        path: '/contentManagement/informationManagement',
        query: {
          ps_name: r.board_name_code
        }
      })
    },


    editor (i, r) {
      this.dialogVisible = true
      this.$api.getBoardItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form.board_code = res.data.board_name_code
        this.form.board_title = res.data.board_title
        this.form.od = res.data.od
        this.uid = r.uid
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
  }
}
</script>


<style lang="scss" scoped>
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 20px;
  .el-form-item {
    width: 45%;
  }
}
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
