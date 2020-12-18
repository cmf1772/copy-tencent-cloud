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
      <el-form-item label="卖家："
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
                         label="订单号">
          <template slot-scope="scope">
            <span class="blueColor"
                  @click="goOrder"
                  style="cursor: pointer;">{{scope.row.goods_code}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="shop_name"
                         show-overflow-tooltip
                         label="买家">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="商铺">
          <template slot-scope="scope">
            <span class="blueColor"
                  style="cursor: pointer;">{{scope.row.shop_name}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="付款方式">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="金额">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="余款">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="订单积分">
        </el-table-column>
        <el-table-column prop="date"
                         show-overflow-tooltip
                         label="订单状态">
        </el-table-column>
        <el-table-column prop="date"
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
        <el-table :data="tableData"
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
                           label="客户单价">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="销售积分">
          </el-table-column>
        </el-table>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 退货信息：
        </p>
        <el-form ref="form"
                 :model="form"
                 label-width="130px">
          <el-form-item label="退货原因："
                        prop="name">
            <span>不要</span>
          </el-form-item>
          <el-form-item label="退货金额："
                        prop="name">
            <span>￥1.00</span>
          </el-form-item>
          <el-form-item label="图片："
                        prop="name">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2800361346,2907707833&fm=26&gp=0.jpg"
                 style="width: 200px;height: 200px"
                 alt="">
          </el-form-item>
          <el-form-item label="退货说明："
                        prop="name">
            <!-- <el-input v-model="form.name"></el-input> -->
          </el-form-item>
          <el-form-item label="物流公司："
                        prop="name">
            <!-- <el-input v-model="form.name"></el-input> -->
          </el-form-item>
          <el-form-item label="	发货单号："
                        prop="name">
            <!-- <el-input v-model="form.name"></el-input> -->
          </el-form-item>
          <el-form-item label="发货凭证："
                        prop="name">
            <!-- <el-input v-model="form.name"></el-input> -->
            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2833261185,1598448584&fm=26&gp=0.jpg"
                 style="width: 200px;height: 200px"
                 alt="">
          </el-form-item>
          <el-form-item label="	退货收件："
                        prop="name">
            <!-- <el-input v-model="form.name"></el-input> -->
            <div>
              地址：
            </div>
            <div>
              收件人：
            </div>
          </el-form-item>
          <el-form-item label="当前状态："
                        prop="name">
            <!-- <el-input v-model="form.name"></el-input> -->
            <span class="redColor">等待卖家审核</span>
          </el-form-item>
        </el-form>
        <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
          <i class="el-icon-edit"
             style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 卖家意见：
        </p>
        <el-form ref="form"
                 :model="form"
                 label-width="130px">
          <el-form-item label="是否同意："
                        prop="name">
            <el-radio v-model="radio"
                      label="1">同意</el-radio>
            <el-radio v-model="radio"
                      label="2">拒绝</el-radio>
          </el-form-item>
          <el-form-item label="退货地址："
                        prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="收件人："
                        prop="name">
            <el-input v-model="form.name"
                      type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="拒绝理由："
                        prop="name">
            <el-input v-model="form.name"
                      type="textarea"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="dialogVisible = false">确 定</el-button>
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
      form: {
        time: [],
        ordersn: '',
        m_id: ''
      },
      dialogVisible: false,
      value1: [],
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      height: 0
    }
  },

  methods: {
    goOrder () {
      this.$router.push('/shopOrder/orderDetails')
    },

    editor () {
      this.dialogVisible = true
    },

    release () {
      this.$router.push('/commodityInformation/releaseknowledgeCommodity?nameType=发布广告')
    },

    change () {
      this.getBackOrderPageList()
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getBackOrderPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getBackOrderPageList()
    },

    handleClose () {

    },

    getBackOrderPageList () {
      this.$api.getBackOrderPageList({
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
      })
    }
  },

  mounted () {
    this.getBackOrderPageList()
    this.height = this.$refs.table.clientHeight + 'px'
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
