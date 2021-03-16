<template>
  <div class="man_look" :style="{ height: heights }">
    <div class="man_top">
      <div>
        订单筛选:
        <el-select v-model="value" placeholder="订单筛选" size="medium" @change="statusChange">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="status" placeholder="订单状态" size="medium" @change="statusChange">
          <el-option
            v-for="item in statusData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <!-- <el-button type="primary" size="medium">确 认</el-button> -->
      </div>
    </div>
    <div class="man_con">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        :max-height="tableHeight"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          prop="ordersn"
          label="订单号"
          width="80"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="username" label="买家" width="80" align="center">
        </el-table-column>
        <el-table-column
          prop="shop_name"
          label="商铺"
          width="120"
          align="center"
        >
        </el-table-column>
        <el-table-column
          prop="pay_name"
          label="付款方式"
          width="80"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="goods_amount" label="金额" align="center">
        </el-table-column>
        <el-table-column prop="goods_rest_amount" label="余款" align="center">
        </el-table-column>
        <el-table-column prop="goods_point" label="订单积分" align="center">
        </el-table-column>
        <el-table-column prop="status" label="订单状态" align="center">
        </el-table-column>
        <el-table-column prop="addtime" label="下单时间" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
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
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      value: "0",
      status: '1',
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      options: [
        {
          value: "0",
          label: "通证销售订单"
        },
        {
          value: "1",
          label: "通证使用订单"
        }
      ],
      statusData: [
        {
          label: '待付款',   
          value: '1'
        },
        {
          label: '已取消',   
          value: '2'
        },{
          label: '已付款',   
          value: '3'
        },{
          label: '已发货',   
          value: '4'
        },{
          label: '已收货',   
          value: '5'
        },{
          label: '已退货',   
          value: '6'
        },
      ],
      tableData: [
        {
          order_num: "457845",
          buyer: "阿瓜",
          shop_store: "美家商品",
          pay_method: "支付宝",
          money: "12220",
          sapre_money: "22300",
          integral: "52300",
          status: "完成",
          time: "2020-6-30"
        },
        {
          order_num: "457845",
          buyer: "阿瓜",
          shop_store: "美家商品",
          pay_method: "支付宝",
          money: "12220",
          sapre_money: "22300",
          integral: "52300",
          status: "完成",
          time: "2020-6-30"
        },
        {
          order_num: "457845",
          buyer: "阿瓜",
          shop_store: "美家商品",
          pay_method: "支付宝",
          money: "12220",
          sapre_money: "22300",
          integral: "52300",
          status: "完成",
          time: "2020-6-30"
        },
        {
          order_num: "457845",
          buyer: "阿瓜",
          shop_store: "美家商品",
          pay_method: "支付宝",
          money: "12220",
          sapre_money: "22300",
          integral: "52300",
          status: "完成",
          time: "2020-6-30"
        }
      ]
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("man_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
      this.create()
  },
  methods: {
    create() {
      this.$newApi.TZgetOrderPageList({  
        page: this.currentPage,
        page_size: this.page_size,
        status: this.status,
        username: '',
        consignee: '',
        start_time: '',
        end_time: '',
        ordersn: '',
        type: this.value,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    statusChange() {
      this.currentPage = 1
      this.page_size = 10
      this.create()
    },
    handleSelectionChange() {},
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.create()
    }
  }
};
</script>

<style lang="scss" scoped>
.man_look {
  background: #fff;
  height: 610px;
  border-radius: 4px;
  .man_top {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
  .man_con {
  }
  .btn {
    margin-top: 10px;
  }
}
</style>
