<template>
  <div class="order_page" :style="{ height: heights }">
    <div class="orderPage_top">
      <span>订单详情</span>
      <span>订单号: OD150046444763</span>
    </div>
    <div class="orderPage_table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="商品名称"> </el-table-column>
        <el-table-column prop="busay" label="属性"> </el-table-column>
        <el-table-column prop="price" label="价格">
          <template slot-scope="scope"> ￥{{ scope.row.price }} </template>
        </el-table-column>
        <el-table-column prop="jifen" label="销售积分">
          <template slot-scope="scope"> {{ scope.row.price }}积分 </template>
        </el-table-column>
        <el-table-column prop="num" label="购买数量"> </el-table-column>
      </el-table>
      <p>
        商品总数: {{ 1 }} 商品总价: ￥{{ 365.2 }} + 运费: ￥{{ 0.0 }} -
        折扣金额: ￥{{ 0.0 }} = 订单总金额: ￥{{ 365.2 }}
        (还有余款￥0.00未付)
      </p>
      <div class="dayin_btn">
        <el-button>打印</el-button>
      </div>
    </div>
    <div class="orderPage_con">
      <h3>收货人信息</h3>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
        <div class="orderCon_top">
          <el-form-item label="姓名" prop="name">{{
            ruleForm.name
          }}</el-form-item>
          <el-form-item label="手机" prop="iphone"
            >{{ ruleForm.iphone }}
          </el-form-item>
        </div>
        <div class="orderCon_top">
          <el-form-item label="收货地址" prop="address"
            >{{ ruleForm.address }}
          </el-form-item>
          <el-form-item label="邮政编码" prop="bianma">
            {{ ruleForm.bianma }}</el-form-item
          >
        </div>
        <div class="orderCon_top">
          <el-form-item label="发票票头" prop="fapiao">
            {{ ruleForm.fapiao }}</el-form-item
          >
          <el-form-item label="客户留言" prop="liuyan"
            >{{ ruleForm.liuyan }}
          </el-form-item>
        </div>
        <div class="orderCon_top">
          <el-form-item label="管理员笔记" prop="biji">
            {{ ruleForm.biji }}</el-form-item
          >
          <el-form-item label="发货单号" prop="danhao">
            {{ ruleForm.danhao }}</el-form-item
          >
        </div>
      </el-form>
    </div>

    <div class="orderPage_info">
      <h3>订单信息</h3>
      <el-form :model="form" ref="form" label-width="100px">
        <div class="orderCon_top">
          <el-form-item label="订单状态" prop="type">{{
            form.type
          }}</el-form-item>
          <el-form-item label="支付方式" prop="pay"
            >{{ form.pay }}
          </el-form-item>
        </div>
        <div class="orderCon_top">
          <el-form-item label="配送方式" prop="way">{{
            form.way
          }}</el-form-item>
          <el-form-item label="运费" prop="freight"
            >￥{{ form.freight }}
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 100 + "px",
      tableData: [
        {
          name: "的骄傲是偶的家具",
          busay: "大街上卡",
          price: "352.20",
          jifen: "352",
          num: 1
        },
        {
          name: "的骄傲是偶的家具",
          busay: "大街上卡",
          price: "352.20",
          jifen: "352",
          num: 1
        },
        {
          name: "的骄傲是偶的家具",
          busay: "大街上卡",
          price: "352.20",
          jifen: "352",
          num: 1
        }
      ],
      ruleForm: {
        name: "阿达阿萨德",
        iphone: "13359695858",
        address: "安徽省 合肥市 庐阳区 chengdushi",
        bianma: "610023",
        fapiao: "525555854568555",
        liuyan: "改机你",
        biji: "挺好",
        danhao: "85958456465156Ds558  "
      },
      form: {
        type: "待付款",
        pay: "微信",
        way: "快递",
        freight: "2.00"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.order_page {
  width: 100%;
  height: 100%;
  overflow: auto;
  .orderPage_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 4px;
  }
  .orderPage_table {
    background: #fff;
    margin-top: 5px;
    p {
      padding: 5px 0;
      text-align: center;
    }
    .dayin_btn {
      padding: 5px 0;
      text-align: right;
      .el-button {
        margin-right: 10px;
      }
    }
  }
  .orderPage_con {
    margin-top: 5px;
    background: #fff;
    border-radius: 4px;
    h3 {
      padding: 10px;
      box-sizing: border-box;
    }
    .el-form {
      .orderCon_top {
        display: flex;
        .el-form-item {
          flex: 1;
        }
      }
    }
  }
  .orderPage_info {
    margin-top: 5px;
    background: #fff;
    border-radius: 4px;
    h3 {
      padding: 10px;
      box-sizing: border-box;
    }
    .el-form {
      .orderCon_top {
        display: flex;
        .el-form-item {
          flex: 1;
        }
      }
    }
  }
}
</style>
