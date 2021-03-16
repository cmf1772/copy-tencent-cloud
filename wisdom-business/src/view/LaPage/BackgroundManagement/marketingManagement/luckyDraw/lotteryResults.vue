<template>
  <div class="luckyDraw">
    <div class="top_button">
      <div class="top_left">
        <span>获奖单号：</span>
        <el-input placeholder="请输入内容"
                  class=""
                  v-model="title"
                  style="width:220px;;">
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-search"
                     @click="create()">
            点击查询
          </el-button>
        </el-input>
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
          <el-table-column prop="ordersn"
                           show-overflow-tooltip
                           label="获奖单号"
                           width="180">
          </el-table-column>
          <el-table-column prop="goods_name"
                           show-overflow-tooltip
                           label="奖品">
          </el-table-column>
          <el-table-column prop="reg_date"
                           show-overflow-tooltip
                           label="获奖时间">
          </el-table-column>
          <el-table-column prop="is_send"
                           show-overflow-tooltip
                           label="是否发货">
          </el-table-column>
          <el-table-column prop="m_id"
                           show-overflow-tooltip
                           label="获奖者">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="获奖者信息">‘
            <template slot-scope="scope">
              <div>
                姓名： {{scope.row.name}}
              </div>
              <div>
                地址： {{scope.row.address}}
              </div>
              <div>
                联系电话： {{scope.row.tel}}
              </div>
              <div>
                备注： {{scope.row.memo}}
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="150">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           v-if="scope.row.is_send == '未发货'"
                           @click="deliver(scope.$index, scope.row)">发货</el-button>
                <el-button size="medium"
                           type="text"
                           class="yellowColor"
                           @click="look(scope.$index, scope.row)">查看</el-button>
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
    <el-dialog title="修改获奖信息"
               :visible.sync="dialogVisible"
               width="70%"
               :before-close="handleClose">
      <el-form ref="form"
               :model="form"
               label-width="150px">
        <el-form-item label="获奖单号"
                      prop="name"
                      required>
          {{form.ordersn}}
        </el-form-item>
        <el-form-item label="奖项/奖品">
          {{formData.goods_name}}
        </el-form-item>
        <el-form-item label="获奖时间"
                      prop="driverId"
                      required>
          {{form.reg_date}}
        </el-form-item>
        <el-form-item label="是否发货"
                      prop="driverId"
                      required>
          {{form.is_send}}
        </el-form-item>
        <el-form-item label="获奖会员"
                      prop="driverId"
                      required>
          {{form.m_id}}
        </el-form-item>
        <el-form-item label="会员真实姓名">
          <el-input v-model="form.name"
                    rows="5"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.tel"
                    rows="5"></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="form.address"
                    rows="5"></el-input>
        </el-form-item>
        <el-form-item label="备注信息">
          <el-input type="textarea"
                    v-model="form.memo"
                    rows="5"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="save">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'luckyDraw',

  data () {
    return {
      dialogVisible: false,
      title: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      form: {
        name: '',
        address: '',
        tel: '',
        memo: ''
      },
      formData: {
        goods_name: ''
      },
      uid: ''
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getLuckyRecPageList({
        page: this.currentPage,
        page_size: this.page_size,
        ordersn: this.title,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },

    deliver(index, row) {
      this.$newApi.setCheckItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
        this.create()
      })
    },

    checkTrackQueryFun(index, row) {
      this.$newApi.delLuckyRecItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
        this.create()
      })
    },
    look (index, row) {
      this.uid = row.uid
      this.dialogVisible = true
      this.$newApi.getLuckyRecItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.form = res.data.lucky_rec
        this.formData = res.data.lucky_goods
      })
    },
    save() {
      this.$newApi.setLuckyRecItem({
        uid: this.uid,
        name: this.form.name,
        tel: this.form.tel,
        address: this.form.address,
        memo: this.form.memo,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        }
        else{
          this.$message({
            type: 'success',
            message: res.data.msg
          })
          this.dialogVisible = false
        }
      })
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
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        .img {
          width: 100px;
          height: 100%;
          cursor: pointer;
          > img {
            width: 100% !important;
            height: 100% !important;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.luckyDraw {
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
