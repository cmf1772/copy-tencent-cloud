<template>
  <div class="orderDetails">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单详情：
    </p>
    <el-table :data="arr_goods"
              stripe
              max-height="100px">
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
    <el-button size="medium"
               type="text"
               class="redColor">打印</el-button>
    <p>商品总数: <span class="redColor">1</span> 商品总价: {{this.formData.order_info.goods_amount}} + 运费: {{this.formData.order_info.sh_price}} - 折扣金额：{{this.formData.order_info.discount}} = 订单总金额：<span class="redColor">{{this.formData.order_info.order_amount}}</span> (还有余款{{this.formData.order_info.goods_rest_amount}}未支付)</p>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000;margin-top: 10px;">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 收货人信息：
    </p>
    <div class="top-list">
      <ul>
        <li>姓名：{{orderData.consignee}}</li>
        <li>手机：{{orderData.mobile}}</li>
        <li>收货地址：{{orderData.address}}</li>
        <li>邮政编码：{{orderData.zipcode}}</li>
        <li>发票票头： {{orderData.invoice}}</li>
        <li>客户留言： {{orderData.remark}}</li>
        <li>管理员笔记： {{orderData.admin_memo}}</li>
        <li>发货单号：{{orderData.delivery_code}}</li>
      </ul>
    </div>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000;margin-top: 10px;">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 订单信息：
    </p>
    <div class="top-list">
      <ul>
        <li>订单状态：{{orderData.status}}</li>
        <li>支付方式：{{orderData.pay_name}}</li>
        <li>配送方式：{{orderData.sh_uid}}</li>
        <li>运费：{{orderData.sh_price}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderDetails',
  data() {
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
          value: '1',
          label: '快递'
        }
      ]
    }
  },
  mounted() {
    console.log(this.$route.query.uid)
    this.$newApi.getOrderItem({
      uid: this.$route.query.uid,
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.formData = res.data
      this.orderData = res.data.order_info
      this.arr_goods.push(res.data.arr_goods[92])
      switch(this.orderData.status) {
        case 1:
              this.orderData.status = '待付款'
              break
        case 2:
              this.orderData.status = '已取消'
              break
        case 3:
              this.orderData.status = '已付款'
              break
        case 4:
              this.orderData.status = '已发货'
              break
        case 5:
              this.orderData.status = '已收货'
              break
        case 6:
              this.orderData.status = '已退货'
              break      
      }
      switch(this.orderData.sh_uid) {
        case 1:
              this.orderData.sh_uid = '快递'
              break     
      }
    })
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.orderDetails {
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
        width: 50%;
        box-sizing: border-box;
        padding-left: 50px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
