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
        <el-date-picker v-model="value1"
                        style="width: 100%"
                        type="daterange"
                        value-format="yyyy-MM-dd"
                        format="yyyy-MM-dd"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="订单号："
                    prop="od">
        <el-input v-model="form.od"></el-input>
      </el-form-item>
      <el-form-item label="收货人："
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="订单状态："
                    prop="name">
         <el-select v-model="form.status" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="买家ID："
                    prop="nameID">
        <el-input v-model="form.nameID"></el-input>
      </el-form-item>
      <el-form-item label=""
                    prop="name">
        <el-button type="primary" @click="create">订单查询</el-button>
      </el-form-item>
    </el-form>
    <div class="table"
         ref="table">
      <el-table :data="tableData"
                stripe
                :style="{'height' : height}">
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
                  @click="goOrder(scope.row)"
                  style="cursor: pointer;">{{scope.row.ordersn}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="username"
                         show-overflow-tooltip
                         label="买家">
        </el-table-column>
        <!-- <el-table-column show-overflow-tooltip
                         label="商铺">
          <template slot-scope="scope">
            <span class="blueColor"
                  style="cursor: pointer;">{{scope.row.date}}</span>
          </template>
        </el-table-column> -->
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
                         label="操作"
                         width="120"
                         min-width="60">
          <template slot-scope="scope">
            <div>

              <el-button size="medium"
                         type="text"
                         class="yellowColor right20"
                         @click="editor(scope.$index, scope.row)">修改</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor  right20"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
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
        <el-table :data="arr_goods"
                  stripe
                  max-height="200px">
          <el-table-column show-overflow-tooltip
                            prop="goods_name"
                           label="商品名称">
          </el-table-column>
          <el-table-column prop="goods_attr"
                           show-overflow-tooltip
                           label="属性">
          </el-table-column>
          <el-table-column prop="buy_price"
                           show-overflow-tooltip
                           label="单价">
          </el-table-column>
          <el-table-column prop="rest_price"
                           show-overflow-tooltip
                           label="余款单价">
          </el-table-column>
          <el-table-column prop="buy_point"
                           show-overflow-tooltip
                           label="销售积分">
          </el-table-column>
          <el-table-column prop="buy_number"
                           show-overflow-tooltip
                           label="购买数量">
          </el-table-column>
        </el-table>
        <p>商品总数: <span class="redColor">1</span> 商品总价: {{this.formData.order_info.goods_amount}} + 运费: {{this.formData.order_info.sh_price}} - 折扣金额：{{this.formData.order_info.discount}} = 订单总金额：<span class="redColor">{{this.formData.order_info.order_amount}}</span> (还有余款{{this.formData.order_info.goods_rest_amount}}未支付)</p>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 收货人信息：
        </p>
        <el-form ref="form"
                 :model="orderData"
                 label-width="130px">
          <el-form-item label="发货单号："
                        prop="delivery_code">
            <el-input v-model="orderData.delivery_code"></el-input>
          </el-form-item>
          <el-form-item label="收货人姓名："
                        prop="consignee">
            <el-input v-model="orderData.consignee"></el-input>
          </el-form-item>
          <el-form-item label="收货人手机："
                        prop="mobile">
            <el-input v-model="orderData.mobile"></el-input>
          </el-form-item>
          <el-form-item label="收货地址："
                        prop="address">
            <el-input v-model="orderData.address"></el-input>
          </el-form-item>
          <el-form-item label="配送方式："
                        prop="sh_uid">
            <el-select v-model="orderData.sh_uid" placeholder="请选择">
              <el-option
                v-for="item in sh_options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="运费："
                        prop="sh_price">
            <el-input v-model="orderData.sh_price"></el-input>
          </el-form-item>
          <el-form-item label="发票票头："
                        prop="invoice">
            <el-input v-model="orderData.invoice"></el-input>
          </el-form-item>
          <el-form-item label="买家："
                        prop="consignee">
            <el-input v-model="orderData.consignee"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码："
                        prop="zipcode">
            <el-input v-model="orderData.zipcode"></el-input>
          </el-form-item>
          <el-form-item label="客户留言："
                        prop="remark">
            <el-input v-model="orderData.remark"
                      type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单信息：
        </p>
        <el-form ref="form"
                 :model="orderData"
                 label-width="130px">
          <el-form-item label="订单状态："
                        prop="name">
            <el-select v-model="orderData.status" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="折扣金额："
                        prop="name">
            <el-input v-model="orderData.discount"></el-input>
          </el-form-item>
          <el-form-item label="管理员笔记："
                        prop="name">
            <el-input v-model="orderData.admin_memo"
                      type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
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
  name: 'customerOrder',
  data () {
    return {
      form: {
        name: '',
        status: '1',
        nameID: '',
        od:''
      },
      formData: {
        order_info:{
          goods_amount: ''
        }
      },
      orderData: {
      },
      arr_goods: [],
      dialogVisible: false,
      value1: [],
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      height: 0,
      options: [
        {
          value: '1',
          label: '待付款'
        },
        {
          value: '2',
          label: '已取消'
        },
        {
          value: '3',
          label: '已付款'
        },
        {
          value: '4',
          label: '已发货'
        },
        {
          value: '5',
          label: '已收货'
        },
        {
          value: '6',
          label: '已退货'
        }
      ],
      sh_options: [
        {
          value: 1,
          label: '快递'
        }
      ]
    }
  },

  methods: {
    create() {
      this.$newApi.WLgetOrderPageList({
        page: this.currentPage,
        page_size: this.page_size,
        status: this.form.status,
        username: this.form.nameID,  // 买家ID
        consignee: this.form.name,   // 收货人
        start_time: this.value1[0], // 下单开始时间
        end_time: this.value1[1],    // 下单结束时间
        ordersn: this.form.od,    // 订单号
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    order() {
      console.log(this.value1)
    },

    goOrder (row) {
      this.$router.push('/shopOrder/orderDetails?uid=' + row.uid + '&api=WLgetOrderItem')
    },

    editor (index, row) {
      this.dialogVisible = true
      this.$newApi.WLgetOrderItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.formData = res.data
        this.orderData = res.data.order_info
        this.orderData.status = String(this.orderData.status)
        this.arr_goods.push(res.data.arr_goods[92])
      })
    },

    checkTrackQueryFun(index, row) {
       this.$newApi.WLdelOrderItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },

    save() {
      this.$newApi.WLsetOrderItem({
        uid: this.orderData.uid,
        delivery_code: this.orderData.delivery_code,
        consignee: this.orderData.consignee,
        mobile: this.orderData.mobile,
        address: this.orderData.address,
        sh_uid: this.orderData.sh_uid,
        sh_price: String(this.orderData.sh_uid),
        invoice: this.orderData.invoice,
        zipcode: this.orderData.zipcode,
        remark: this.orderData.zipcode,
        status: this.orderData.status,
        discount: this.orderData.discount.slice(1),
        admin_memo: this.orderData.admin_memo,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.dialogVisible = false
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

    handleClose () {

    }
  },

  mounted () {
    this.height = this.$refs.table.clientHeight + 'px'
    this.create()
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
