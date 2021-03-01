
<template>
  <div class="evaluationOfTheBuyer">
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
        <el-table-column prop="shop_name"
                         show-overflow-tooltip
                         label="商品名称">
        </el-table-column>
        <el-table-column prop="supplier_id"
                         show-overflow-tooltip
                         label="所属商铺">
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
                         width="150"
                         min-width="60">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="blueColor right20"
                         @click="onChange(scope.$index, scope.row)">商家评价</el-button>
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
      <el-radio v-model="level"
                label="1">好评</el-radio>
      <el-radio v-model="level"
                label="0">中评</el-radio>
      <el-radio v-model="level"
                label="-1">差评</el-radio>
      <el-input placeholder="请输入评价"
                class="mt"
                v-model="comment"
                clearable>
      </el-input>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="setCommentItem">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'evaluationOfTheBuyer',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      dialogVisible: false,
      comment: '',
      uid: '',
      level: ''
    }
  },

  methods: {
    onChange (i, r) {
      this.uid = r.uid
      this.dialogVisible = true
      this.comment = ''
    },

    setCommentItem () {
      this.$api.setCommentItem({
        uid: this.uid,
        comment: this.comment,
        level: this.level,
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

    getSellerCommentPageList () {
      this.$api.getSellerCommentPageList({
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
      this.getSellerCommentPageList()
    },

    handleSizeChange (val) {
      this.page_size = val;
      this.getSellerCommentPageList()
    },
  },

  mounted () {
    this.getSellerCommentPageList()
  },
}
</script>

<style lang="scss" scoped>
.evaluationOfTheBuyer {
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
