<template>
  <div class="customerOrder">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单搜索：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="订购时间："
                    prop="name">
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
                    prop="name">
        <el-input v-model="form.ordersn"></el-input>
      </el-form-item>
      <el-form-item label="买家"
                    prop="name">
        <el-input v-model="form.m_id"></el-input>
      </el-form-item>
      <el-form-item label=""
                    prop="name">
        <el-button type="primary"
                   @click="change">订单查询</el-button>
      </el-form-item>
    </el-form>

    <div class="table"
         ref="table">
      <el-table :data="tableData"
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
                         label="退货商品">
          <template slot-scope="scope">
            <!-- @click="goOrder" -->
            <span  class="blueColor"
                  style="cursor: pointer;">{{scope.row.goods_name}}</span>
          </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="订单号">
          <template slot-scope="scope">
            <span style="cursor: pointer;">{{scope.row.ordersn}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="shop_name"
                         show-overflow-tooltip
                         label="买家">
            <template slot-scope="scope">
              <span style="cursor: pointer;">{{scope.row.m_id}}</span>
            </template>
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="商铺">
          <template slot-scope="scope">
            <span class=""
                  style="cursor: pointer;">{{scope.row.shop_name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="退货信息">
            <template slot-scope="scope">
              <div class="height: 200px;">
                <p>申请人：{{scope.row.m_id}}</p>
                <p>退货原因：{{scope.row.info1.img}}</p>
                <p>退货金额：{{scope.row.info1.money}}</p>
                <p>退货说明：{{scope.row.info1.reason}}</p> 
              </div>
          </template>  
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="状态"
                         prop="status_txt">
        </el-table-column>
        <el-table-column prop="register_date"
                         show-overflow-tooltip
                         label="申请时间">
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
               top="2hv">
      <div>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单详情：
        </p>
        <el-table :data="outData"
                  stripe>
          <el-table-column show-overflow-tooltip
                           label="商品名称">
            <template slot-scope="scope">
              <span class="blueColor"
                    style="cursor: pointer;">{{scope.row.goods_name}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="goods_attr"
                           show-overflow-tooltip
                           label="属性">
          </el-table-column>
          <el-table-column prop="buy_price"
                           show-overflow-tooltip
                           label="客户单价">
          </el-table-column>
          <el-table-column prop="buy_point"
                           show-overflow-tooltip
                           label="销售积分">
          </el-table-column>
          
          <el-table-column prop="buy_number"
                           show-overflow-tooltip
                           label="数量">
          </el-table-column>
        </el-table>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 退货信息：
        </p>
        <el-form ref="saleData"
                 :model="saleData"
                 label-width="130px">
          <el-form-item label="退货原因："
                        prop="">
            <span>{{saleData.info1.reason}}</span>
          </el-form-item>
          <el-form-item label="退货金额："
                        prop="">
            <span>{{saleData.info1.money}}</span>
          </el-form-item>
          <el-form-item label="图片："
                        prop="">
            <img :src="saleData.info1.img"
                 style="width: 200px;height: 200px"
                 alt="">
          </el-form-item>
          <el-form-item label="退货说明："
                        prop="name">
            <span>{{saleData.info1.memo}}</span>
          </el-form-item>
          <el-form-item label="物流公司："
                        prop="name">
            <span>{{saleData.info2.company}}</span>
          </el-form-item>
          <el-form-item label="	发货单号："
                        prop="name">
              <span>{{saleData.info2.delivery_code}}</span>
          </el-form-item>
          <el-form-item label="发货凭证："
                        prop="name">
            <img :src="saleData.info2.img"
                 style="width: 200px;height: 200px"
                 alt="">
          </el-form-item>
          <el-form-item label="退货收件："
                        prop="name">
            <div>
              地址：{{saleData.back_address}}
            </div>
            <div>
              收件人：{{saleData.consignee}}
            </div>
          </el-form-item>
          <el-form-item label="当前状态："
                        prop="name">
            <span class="redColor">{{saleData.consignee}}</span>
          </el-form-item>
        </el-form>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000" v-if="saleData.status == 3">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 卖家意见：
        </p>
        <el-form ref="returnRquest"
                 :model="returnRquest"
                 v-if="saleData.status == 3"
                 label-width="130px">
          <el-form-item label="是否同意："
                        prop="approval">
            <el-radio v-model="returnRquest.approval"
                      label="1">同意</el-radio>
            <el-radio v-model="returnRquest.approval"
                      label="2">拒绝</el-radio>
          </el-form-item>
          <el-form-item label="退货地址："
                        prop="back_address">
            <el-input v-model="returnRquest.back_address"></el-input>
          </el-form-item>
          <el-form-item label="收件人："
                        prop="consignee">
            <el-input v-model="returnRquest.consignee"
                      type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="拒绝理由："
                        prop="reject">
            <el-input v-model="returnRquest.reject"
                      type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                    v-if="saleData.status == 3"
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
      radio: '1',
      form: {},
      dialogVisible: false,
      value1: [],
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      height: 0,
      outData: [],
      saleData: {
        info1: {},
        info2: {}
      },
      returnRquest: {
        approval: '1',
        back_address: '',
        consignee: '',
        reject: ''
      }
    }
  },

  methods: {
    save() {
      this.$newApi.XZsetBackOrderItem({
        uid: this.saleData.uid,
        approval: this.returnRquest.approval,
        back_address: this.returnRquest.back_address,
        consignee: this.returnRquest.consignee,
        reject: this.returnRquest.reject,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        console.log(res)
        this.dialogVisible = false
      })
    },
    goOrder () {
      this.$router.push('/shopOrder/orderDetails')
    },

    editor (index, row) {
      this.outData = []
      console.log(index, row)
      this.$newApi.XZgetBackOrderItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        let obj = {}
        console.log(res.data)
        this.saleData = res.data.order_back
        // console.log(this.saleData.order_back.info1)
        obj = {
          ...res.data.order_goods
        }
        obj.goods_name = res.data.product.goods_name
        this.outData.push(obj)
      })
      this.dialogVisible = true
    },

    checkTrackQueryFun(index, row) {
      this.$newApi.XZdelBackOrderItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.create()
      })
    },

    change () {
      this.create()
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

    },

    create () {
      this.$newApi.XZgetBackOrderPageList({
        start_time: this.form.time ? this.form.time[0] : '',
        end_time: this.form.time ? this.form.time[1] : '',
        ordersn: this.form.ordersn,
        m_id:this.form.m_id,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
        page: this.currentPage,
        page_size: this.page_size,
      }).then(res => {
        this.tableData = res.data.items
        console.log(this.tableData)
        this.totalData = res.data.total_result
      })
    }
  },

  mounted () {
    this.create()
    this.height = this.$refs.table.clientHeight + 'px'
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss" scoped>
/deep/ .table{
  .el-table__row{
    td{
      height: 100px !important;
      .cell {
        height: 100% !important;
      }
      .el-table .cell.el-tooltip {
        height: 100%;
      }
      div{
        height: 100%;
      }
    }
  }
}


/deep/ .customerOrder{
  .table{
    .el-table::after{
      width: 0 !important;
    }
  } 
} 

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
