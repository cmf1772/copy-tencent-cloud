<template>
  <div class="customerOrder">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单搜索：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="下单时间："
                    prop="name">
        <el-date-picker v-model="form.time"
                        style="width: 100%"
                        type="daterange"
                        range-separator="至"
                        value-format="yyyy-MM-dd"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="订单号："
                    prop="name">
        <el-input v-model="form.ordersn"></el-input>
      </el-form-item>
      <el-form-item label="收货人："
                    prop="name">
        <el-input v-model="form.consignee"></el-input>
      </el-form-item>
      <el-form-item label="订单状态："
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="买家ID："
                    prop="name">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label=""
                    prop="name">
        <el-button type="primary"
                   @click="selectFun">订单查询</el-button>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单统计：
    </p>
    <div class="top-list">
      <ul>
        <li>今日订单数：{{protact.order_today}}个</li>
        <li>周订单数：{{protact.order_week}}个</li>
        <li>月订单数：{{protact.order_month}}个</li>
        <li>今日交易金额：{{protact.order_today_amount}}元</li>
        <li>周交易金额：{{protact.order_week}}元</li>
        <li>月交易金额：{{protact.order_month_amount}}元</li>
      </ul>
    </div>
    <div class="table"
         ref="table">
      <el-table :data="tableData"
                stripe
                max-height="400px">
        <el-table-column show-overflow-tooltip
                         type="index"
                         width="50"
                         label="序号">
          <template slot-scope="scope">
            <!-- {{(currentPage-1)*10+scope.$index+1}} -->
            {{scope.$index+1}}
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="订单号">
          <template slot-scope="scope">
            <span class="blueColor"
                  style="cursor: pointer;">{{scope.row.ordersn}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="username"
                         show-overflow-tooltip
                         label="买家">
        </el-table-column>
        <el-table-column prop="shop.shop_name"
                         show-overflow-tooltip
                         label="商铺">
        </el-table-column>
        <el-table-column prop="pay_name"
                         show-overflow-tooltip
                         label="付款方式">
        </el-table-column>
        <el-table-column prop="goods_amount"
                         show-overflow-tooltip
                         label="金额">
        </el-table-column>
        <el-table-column prop="goods_rest_amount"
                         show-overflow-tooltip
                         label="余款">
        </el-table-column>
        <el-table-column prop="goods_point"
                         show-overflow-tooltip
                         label="订单积分">
        </el-table-column>
        <el-table-column prop="status"
                         show-overflow-tooltip
                         label="订单状态">
        </el-table-column>
        <el-table-column prop="addtime"
                         show-overflow-tooltip
                         label="下单时间">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         style="width: 200px"
                         label="操作">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="yellowColor right20"
                         @click="editor(scope.$index, scope.row)">修改</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor  right20"
                         @click="zsdelOrderItem(scope.$index, scope.row)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
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

    <el-dialog title="订单详情"
               :visible.sync="dialogVisible"
               width="60%"
               top="2hv"
               :before-close="handleClose">
      <div>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单详情：
        </p>
        <el-table :data="arrAll.arr_ship"
                  stripe
                  max-height="200px">
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="商品名称">
            <template slot-scope="scope">
              <span class="blueColor"
                    style="cursor: pointer;">{{scope.row.date}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="买家">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="属性">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="单价">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="余款单价">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="销售积分">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="购买数量">
          </el-table-column>
        </el-table>
        <p>商品总数: <span class="redColor">1</span> 商品总价: ￥890.00 + 运费: ￥0.00 - 折扣金额：￥0.00 = 订单总金额：<span class="redColor">￥890.00</span> (还有余款￥0.00未支付)</p>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 收货人信息：
        </p>
        <el-form ref="form"
                 :model="arrAll.order_info"
                 label-width="130px">
          <el-form-item label="发货单号："
                        prop="name">
            <el-input v-model="arrAll.order_info.delivery_code"></el-input>
          </el-form-item>
          <el-form-item label="收货人姓名："
                        prop="consignee">
            <el-input v-model="arrAll.order_info.consignee"></el-input>
          </el-form-item>
          <el-form-item label="收货人手机："
                        prop="name">
            <el-input v-model="arrAll.order_info.mobile"></el-input>
          </el-form-item>
          <el-form-item label="收货地址："
                        prop="name">
            <el-input v-model="arrAll.order_info.address"></el-input>
          </el-form-item>
          <el-form-item label="配送方式："
                        prop="name">
            <el-input v-model="arrAll.order_info.sh_uid"></el-input>
          </el-form-item>
          <el-form-item label="运费："
                        prop="name">
            <el-input v-model="arrAll.order_info.sh_price"></el-input>
          </el-form-item>
          <el-form-item label="发票票头："
                        prop="name">
            <el-input v-model="arrAll.order_info.invoice"></el-input>
          </el-form-item>
          <el-form-item label="买家："
                        prop="name">
            <el-input v-model="arrAll.order_info.username"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码："
                        prop="name">
            <el-input v-model="arrAll.order_info.zipcode"></el-input>
          </el-form-item>
          <el-form-item label="客户留言："
                        prop="name">
            <el-input v-model="arrAll.order_info.remark"
                      type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单信息：
        </p>
        <el-form ref="form"
                 :model="form"
                 label-width="130px">
          <el-form-item label="订单状态："
                        prop="name">
            <el-input v-model="arrAll.order_info.status"></el-input>
          </el-form-item>
          <el-form-item label="折扣金额："
                        prop="name">
            <el-input v-model="arrAll.order_info.discount"></el-input>
          </el-form-item>
          <el-form-item label="管理员笔记："
                        prop="name">
            <el-input v-model="arrAll.order_info.admin_memo"
                      type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="right">确 定</el-button>
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
        username: '',
        consignee: '',
        time: [],
        ordersn: ''
      },
      protact: {
        order_today: '',
        order_today_amount: '',
        order_week: '',
        order_week_amount: '',
        order_month: '',
        order_month_amount: ''
      },
      dialogVisible: false,
      value1: [],
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      height: 0,
      page_size: 10,
      arrAll: {
        arr_goods: [],
        order_info: [],
        arr_ship: [],
        order_menu: "",
        order_status: [],
        sel_ship: "",
        total_goods_num: 1
      },
      uid: 0,
    }
  },

  methods: {
    goOrder () {
      this.$router.push('/shopOrder/orderDetails')
    },

    editor (i, r) {
      this.uid = r.uid
      this.$api.zsgetOrderItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.arrAll = res.data
      })
      this.dialogVisible = true
    },

    zsdelOrderItem (i, r) {
      this.$api.zsdelOrderItem({
        token: JSON.parse(this.$store.state.token).token,
        uid: r.uid
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.zsgetOrderPageList()
      })
    },

    right () {
      this.$api.zssetOrderItem({
        uid: this.uid,
        delivery_code: this.arrAll.order_info.delivery_code,
        consignee: this.arrAll.order_info.consignee,
        mobile: this.arrAll.order_info.mobile,
        address: this.arrAll.order_info.address,
        sh_uid: this.arrAll.order_info.sh_uid,
        sh_price: this.arrAll.order_info.sh_price.indexOf('￥') !== -1 ? this.arrAll.order_info.sh_price.slice(1) : this.arrAll.order_info.sh_price,
        invoice: this.arrAll.order_info.invoice,
        zipcode: this.arrAll.order_info.zipcode,
        remark: this.arrAll.order_info.remark,
        status: this.arrAll.order_info.status,
        discount: this.arrAll.order_info.discount.lenght ? this.arrAll.order_info.discount.indexOf('￥') !== -1 ? this.arrAll.order_info.discount.slice(1) : this.arrAll.order_info.discount : '0.00',
        admin_memo: this.arrAll.order_info.admin_memo,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.dialogVisible = false
      })
    },

    release () {
      this.$router.push('/commodityInformation/releaseknowledgeCommodity?nameType=发布广告')
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.zsgetOrderPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.zsgetOrderPageList()
    },

    handleClose () {

    },

    selectFun () {
      this.zsgetOrderPageList()
    },

    zsgetOrderPageList () {
      this.$api.zsgetOrderPageList({
        status: '1',
        username: this.form.username,
        consignee: this.form.consignee,
        start_time: this.form.time[0],
        end_time: this.form.time[1],
        ordersn: this.form.ordersn,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
        page: this.currentPage,
        page_size: this.page_size,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
        this.protact = {
          order_today: res.data.order_today,
          order_today_amount: res.data.order_today_amount,
          order_week: res.data.order_week,
          order_week_amount: res.data.order_week_amount,
          order_month: res.data.order_month,
          order_month_amount: res.data.order_month_amount
        }
      })
    }
  },

  mounted () {
    this.height = this.$refs.table.clientHeight + 'px'
    this.zsgetOrderPageList()
  }
}
</script>

<style lang="scss" scoped>
.customerOrder {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  .top-list {
    margin-top: 10px;
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33.3%;
        box-sizing: border-box;
        padding-left: 50px;
        margin-bottom: 10px;
      }
    }
  }
  .table {
    flex: 1;
    overflow: auto;
    .el-table {
      overflow: auto;
    }
  }
}

.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
</style>
