<template>
  <div class="recommendedSettings">
    <div class="top_button">
      <el-button type="primary"
                @click="add()">
          添加等级
        </el-button>
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
          <el-table-column prop="group_name"
                           show-overflow-tooltip
                           label="等级名称">
          </el-table-column>
          <el-table-column prop="max_points"
                           show-overflow-tooltip
                           label="积分上限">
          </el-table-column>
          <el-table-column prop="min_points"
                           show-overflow-tooltip
                           label="积分下限">
          </el-table-column>
          <el-table-column prop="is_admin"
                           show-overflow-tooltip
                           label="等级类型">
            <template slot-scope="scope">
              <span> 
                {{scope.row.is_admin ? '管理员等级' : '会员等级'}}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="is_tg"
                           show-overflow-tooltip
                           label="是否推广等级">
              <template slot-scope="scope">
                <span> 
                  {{scope.row.is_tg ? '是' : '否'}}
                </span>
              </template>
          </el-table-column>
          <el-table-column prop="degree"
                           show-overflow-tooltip
                           label="等级高低">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           width="100px"
                           label="操作">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor"
                           @click="editor(scope.$index, scope.row)">修改</el-button>
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

    <el-dialog
      :title="addType ? '添加等级' : '编辑等级'"
      :visible.sync="dialogVisible"
      center
      width="50%"
      :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="120px">
        <div class="form_fix">
          <el-form-item label="等级名称">
            <el-input v-model="form.group_name"></el-input>
          </el-form-item>
          <el-form-item label="等级高低">
            <el-input v-model="form.degree"></el-input>
          </el-form-item>
        </div>
        <div class="form_fix">
          <el-form-item label="积分上限">
            <el-input v-model="form.max_points"></el-input>
          </el-form-item>
          <el-form-item label="积分下限">
            <el-input v-model="form.min_points"></el-input>
          </el-form-item>
        </div>
        <div class="form_fix">
          <el-form-item label="等级类型">
            <el-radio-group v-model="form.is_admin">
              <el-radio label="0">会员等级</el-radio>
              <el-radio label="1">管理员等级</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="是否推广等级">
            <el-radio-group v-model="form.is_tg">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: 'recommendedSettings',

  data () {
    return {
      addType: true,
      dialogVisible: false,
      form: {},
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getLevelList({
        page: this.currentPage,
        page_size: this.page_size,
        group_name: '',
        is_admin: '',
        is_tg: '',
        order_type: 'desc',
        order_field: 'group_id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    add () {
      this.dialogVisible = true
      this.addType = true
    },
    editor (index, row) {
      this.dialogVisible = true
      this.addType = false
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
/deep/ .el-form{
  margin-right: 40px;
  .form_fix{
    display: flex;
    .el-form-item{
      width: 50%;
    }
  }
}

.el-table {
  flex: 1;
  overflow: auto;

  /deep/ .el-input__inner {
    border-color: #fff !important ;
  }
}

.recommendedSettings {
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
    // display: flex;
    // justify-content: space-between;
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
