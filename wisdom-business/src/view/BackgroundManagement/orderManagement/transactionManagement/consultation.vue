<template>
  <div class="consultation">
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
        <el-table-column prop="goods_name"
                         show-overflow-tooltip
                         label="商品名称">
        </el-table-column>
        <el-table-column prop="reject"
                         show-overflow-tooltip
                         label="驳回理由">
        </el-table-column>
        <el-table-column prop="expire"
                         show-overflow-tooltip
                         label="时间">
        </el-table-column>
        <el-table-column prop="roll"
                         show-overflow-tooltip
                         label="评论者">
        </el-table-column>
        <el-table-column prop="status"
                         show-overflow-tooltip
                         label="状态">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="180"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         @click="setCheckItem(scope.$index, scope.row)"
                         class="blueColor right20">审核</el-button>
              <el-button size="medium"
                         type="text"
                         class="blueColor right20"
                         @click="onChange(scope.$index, scope.row)">留言</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor right20"
                         @click="delCommentItem(scope.$index, scope.row)">删除</el-button>
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
    <el-dialog title="提示"
               :visible.sync="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <el-input placeholder="请输入内容"
                v-model="reply"
                clearable>
      </el-input>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="setReplyItem">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'consultation',

  data () {
    return {
      dialogVisible: false,
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      reply: '',
      uid: ''
    }
  },

  methods: {
    onChange (i, r) {
      this.uid = r.uid
      this.dialogVisible = true
      this.reply = ''
    },

    setReplyItem () {
      this.$api.setReplyItem({
        uid: this.uid,
        reply: this.reply,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
        this.dialogVisible = false
        this.getMyCommentPageList()
      })
    },

    setCheckItem (i, r) {
      this.$api.setCheckItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
        this.getMyCommentPageList()
      })
    },

    delCommentItem (i, r) {
      this.$api.delCommentItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        this.getMyCommentPageList()
      })
    },

    getMyCommentPageList () {
      this.$api.getMyCommentPageList({
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

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getMyCommentPageList()
    },

    handleSizeChange (val) {
      this.page_size = val;
      this.getMyCommentPageList()
    },
  },

  mounted () {
    this.getMyCommentPageList()
  },
}
</script>

<style lang="scss" scoped>
.consultation {
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
