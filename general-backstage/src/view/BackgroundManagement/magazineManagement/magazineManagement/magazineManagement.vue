<template>
  <div class="magazineManagement">
    <div class="top_button">

      <div class="top_left">
        <span>栏目编码</span>
        <el-input placeholder="栏目编码必须为英文输入"
                  v-model="board_code"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>栏目标题</span>
        <el-input placeholder="填写栏目标题,标题为前台显示栏目名称"
                  v-model="board_name"
                  style="width: 200px"
                  clearable>
        </el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun">
          搜索
        </el-button>
      </div>
    </div>
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
          <el-table-column prop="board_name_code"
                           show-overflow-tooltip
                           label="栏目编码"
                           width="180">
          </el-table-column>
          <el-table-column prop="board_title"
                           show-overflow-tooltip
                           label="栏目标题">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="排序">
            <template slot-scope="scope">
              <div>
                <el-input placeholder="请输入标题关键字"
                          v-model=" scope.row.od"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="look(scope.$index, scope.row)">资讯管理</el-button>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="editor(scope.$index, scope.row)">修改</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delBoardItem(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
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

    <el-dialog title="栏目设置"
               :visible.sync="dialogVisible"
               width="300px"
               :before-close="handleClose">
      <el-form label-width="80px"
               :model="formLabelAlign">
        <el-form-item label="栏目编码">
          <el-input v-model="formLabelAlign.board_code"></el-input>
        </el-form-item>
        <el-form-item label="栏目标题">
          <el-input v-model="formLabelAlign.board_title"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="formLabelAlign.od"></el-input>
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
  name: 'magazineManagement',

  data () {
    return {
      board_name: '',
      board_code: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      dialogVisible: false,
      formLabelAlign: {
        board_code: '',
        board_title: '',
        od: '',
        uid: ''
      }
    }
  },

  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },

    look () {
      this.$router.push('/magazineManagement/editMagazineManagement?nameType=资讯管理')
    },

    editor (index, row) {
      this.formLabelAlign.board_code = row.board_name_code
      this.formLabelAlign.uid = row.uid
      this.formLabelAlign.board_title = row.board_title
      this.formLabelAlign.od = row.od
      this.dialogVisible = true
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getBoardPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getBoardPageList()
    },

    sesarchFun () {
      this.currentPage = 1
      this.getBoardPageList(true)
    },

    setBoardItem () {
      this.$api.setBoardItem({
        token: JSON.parse(this.$store.state.token).token,
        uid: this.formLabelAlign.uid,
        board_code: this.formLabelAlign.board_code,
        board_title: this.formLabelAlign.board_title,
        od: this.formLabelAlign.od
      }).then(res => {
        this.$message({
          showClose: true,
          message: '编辑成功',
          type: 'success'
        });
        this.dialogVisible = false
        this.getBoardPageList()
      })
    },

    delBoardItem (index, row) {
      this.$api.delBoardItem({
        token: JSON.parse(this.$store.state.token).token,
        uid: row.uid
      }).then(res => {
        this.$message({
          showClose: true,
          message: '删除成功',
          type: 'success'
        });
        this.getBoardPageList()
      })
    },

    getBoardPageList (flag) {
      let data = null
      if (flag) {
        data = {
          order_type: 'asc',
          order_field: 'uid',
          token: JSON.parse(this.$store.state.token).token,
          page: this.currentPage,
          page_size: this.page_size,
          board_name: this.board_name,
          board_code: this.board_code
        }
      } else {
        data = {
          order_type: 'asc',
          order_field: 'uid',
          token: JSON.parse(this.$store.state.token).token,
          page: this.currentPage,
          page_size: this.page_size
        }
      }
      this.$api.getBoardPageList(data).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    }
  },

  mounted () {
    this.getBoardPageList()
  }
}
</script>

<style lang="scss" scoped>
.magazineManagement {
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

    /deep/ .el-input__inner {
      border-color: #fff !important ;
    }
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
