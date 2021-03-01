
<template>
  <div class="customerOrder">
    <el-tabs v-model="activeName"
             class="table_bottom"
             @tab-click="handleClick">
      <el-tab-pane label="所有订单"
                   name="1">
        <div>
          <div class="flex"
               :style="{'height': height}">
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
                               label="订单号码"
                               width="180">
              </el-table-column>
              <el-table-column prop="username"
                               show-overflow-tooltip
                               label="订购者"
                               width="180">
              </el-table-column>
              <el-table-column prop="goods_amount"
                               show-overflow-tooltip
                               label="商品金额">
              </el-table-column>
              <el-table-column prop="sh_price"
                               show-overflow-tooltip
                               label="运费">
              </el-table-column>
              <el-table-column prop="discount"
                               show-overflow-tooltip
                               label="折扣">
              </el-table-column>
              <el-table-column prop="goods_rest_amount"
                               show-overflow-tooltip
                               label="余款">
              </el-table-column>
              <el-table-column prop="goods_point"
                               show-overflow-tooltip
                               label="订单积分">
              </el-table-column>
              <el-table-column prop="shop_name"
                               show-overflow-tooltip
                               label="商家名称">
              </el-table-column>
              <el-table-column prop="status"
                               show-overflow-tooltip
                               label="订单状态">
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
                               @click="() => {
                                 dialogVisible = true
                                 uid = scope.row.uid
                               }">发货</el-button>
                    <el-button size="medium"
                               type="text"
                               class="redColor"
                               @click="checkTrackQueryFun(scope.$index, scope.row)">编辑</el-button>
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
                             :total="total">
              </el-pagination>
            </div>
          </div>
          <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#f30">
            <i class="el-icon-edit"
               style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单详细搜索：
          </p>
          <el-form ref="form"
                   :rules="rules"
                   :model="form"
                   label-width="130px">
            <el-form-item label="收货人："
                          prop="consignee">
              <el-input v-model="form.consignee"
                        placeholder></el-input>
            </el-form-item>
            <el-form-item label="订购人："
                          prop="username">
              <el-input v-model="form.username"
                        placeholder></el-input>
            </el-form-item>
            <el-form-item label="下单时间："
                          prop="time">
              <el-date-picker v-model="form.time"
                              style="width: 100%"
                              type="daterange"
                              value-format="yyyy-MM-dd"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="订单号："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
            <!-- <el-form-item label="供应商联系方式："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
            <el-form-item label="供应商地址："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item> -->
          </el-form>
          <el-button type="primary"
                     @click="getSellerOrderPageList"
                     style="float: right">确定</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="申请延期收获"
                   name="second">
        <div>
          <div class="flex"
               :style="{'height': height}">
            <el-table :data="tableDataList"
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
                               label="订单号码"
                               width="180">
              </el-table-column>
              <el-table-column prop="username"
                               show-overflow-tooltip
                               label="订购者"
                               width="180">
              </el-table-column>
              <el-table-column prop="goods_amount"
                               show-overflow-tooltip
                               label="金额">
              </el-table-column>
              <el-table-column prop="addtime"
                               show-overflow-tooltip
                               label="下单时间">
              </el-table-column>
              <!-- <el-table-column prop="address"
                               show-overflow-tooltip
                               label="延迟信息">
              </el-table-column> -->
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
                               class="yellowColor right20"
                               @click="Delaydelay(scope.$index, scope.row)">审核</el-button>
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
                             :total="totalList">
              </el-pagination>
            </div>
          </div>
          <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#f30">
            <i class="el-icon-edit"
               style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单详细搜索：
          </p>
          <el-form ref="form"
                   :rules="rules"
                   :model="form"
                   label-width="130px">
            <el-form-item label="订单号码："
                          prop="displayName">
              <el-input v-model="form.ordersn"
                        placeholder></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     @click="getSellerDelayOrderPageList"
                     style="float: right">确定</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="退货通道"
                   name="third">
        <div>
          <div class="flex"
               :style="{'height': height}">
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
                               label="退货商品"
                               width="180">
              </el-table-column>
              <el-table-column prop="name"
                               show-overflow-tooltip
                               label="订单号"
                               width="180">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="订单折扣">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="退货信息">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="状态">
              </el-table-column>
              <el-table-column prop="address"
                               show-overflow-tooltip
                               label="申请时间">
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
              <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
              <el-pagination @size-change="handleSizeChange"
                             @current-change="handleCurrentChangeFun"
                             :current-page="currentPage"
                             :page-sizes="[100, 200, 300, 400]"
                             :page-size="100"
                             layout="total, sizes, prev, pager, next, jumper"
                             :total="400">
              </el-pagination>
            </div>
          </div>
          <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#f30">
            <i class="el-icon-edit"
               style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 退货记录搜索：
          </p>
          <el-form ref="form"
                   :rules="rules"
                   :model="form"
                   label-width="130px">
            <el-form-item label="申请时间："
                          prop="displayName">
              <el-date-picker v-model="value1"
                              type="daterange"
                              range-separator="至"
                              start-placeholder="开始日期"
                              end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="申请人："
                          prop="displayName">
              <el-input v-model="form.displayName"
                        placeholder></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary"
                     style="float: right">确定</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="现场订单验证"
                   name="fourth">
        <p style="font-size: 15px; margin-bottom: 20px;font-weight: 360; color:#f30">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 现场订单验证：
        </p>
        <el-form ref="form"
                 :rules="rules"
                 :model="form"
                 label-width="130px">
          <el-form-item label="订单号："
                        prop="displayName">
            <el-input v-model="form.ordersn"
                      placeholder></el-input>
          </el-form-item>
          <el-form-item label="订单密码："
                        prop="displayName">
            <el-input v-model="form.code"
                      placeholder></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary"
                   @click="groupCheck"
                   style="float: right">确定</el-button>
      </el-tab-pane>
    </el-tabs>

    <el-dialog title="发货单号"
               :visible.sync="dialogVisible"
               width="30%"
               :before-close="handleClose">
      <el-input placeholder="发货单号"
                v-model="delivery_code"
                clearable>
      </el-input>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="delivery">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'customerOrder',

  data () {
    return {
      form: {
        displayName: '',
        ordersn: '',
        username: '',
        consignee: '',
        time: [],
        displayName: '',
        ordersn: '',
        code: '',
      },
      height: window.innerHeight - 500 + 'px',
      activeName: '1',
      tableData: [],
      tableDataList: [],
      currentPage: 1, //当前页数
      total: 1,
      totalList: 1, //总页数
      page_size: 10,
      uid: '',
      delivery_code: '',
      dialogVisible: false,
    }
  },

  methods: {
    groupCheck () {
      this.$api.Delaydelay({
        token: JSON.parse(this.$store.state.token).token,
        ordersn: this.form.ordersn,
        code: this.form.code,
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
      })
    },

    delivery () {
      this.$api.Delaydelay({
        token: JSON.parse(this.$store.state.token).token,
        uid: this.uid,
        delivery_code: this.delivery_code
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
        this.getSellerOrderPageList()
      })
    },

    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },

    Delaydelay (i, r) {
      this.$api.Delaydelay({
        token: JSON.parse(this.$store.state.token).token,
        uid: r.uid,
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
        this.getSellerDelayOrderPageList()
      })
    },

    getSellerDelayOrderPageList () {
      this.$api.getSellerDelayOrderPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        ordersn: this.form.ordersn,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableDataList = res.data.items
        this.totalList = res.data.total_result
      })
    },

    getSellerOrderPageList () {
      this.$api.getSellerOrderPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        status: '0',
        consignee: this.form.consignee,
        username: this.form.username,
        start_time: this.form.time[0],
        end_time: this.form.time[1],
        displayName: this.form.displayName,
        wait_for_ready: '0',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    add () {
      this.$router.push('/shopManagement/addModifyTheData?nameType=添加收货地址')

    },
    editor () {
      this.$router.push('/shopManagement/addModifyTheData?nameType=编辑编辑地址')
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getSellerOrderPageList()
      this.getSellerDelayOrderPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getSellerOrderPageList()
      this.getSellerDelayOrderPageList()
    },
  },

  mounted () {
    this.getSellerOrderPageList()
    this.getSellerDelayOrderPageList()
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}

.customerOrder {
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
