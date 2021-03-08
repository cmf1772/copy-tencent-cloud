<template>
  <div class="score_page" :style="{ height: heights }">
    <el-form ref="ruleForm" :model="ruleForm" label-width="140px">
      <el-form-item label="商品库使用积分" prop="mm_storage_point">
        <el-input v-model="ruleForm.mm_storage_point"></el-input>
      </el-form-item>
      <el-form-item label="商品库分发积分" prop="mm_storage_send_point">
        <el-input v-model="ruleForm.mm_storage_send_point"></el-input>
      </el-form-item>

      <el-form-item label="团购活动申请积分" prop="mm_groupgd_point">
        <el-input v-model="ruleForm.mm_groupgd_point"></el-input>
      </el-form-item>
      <el-form-item label="积分汇申请积分" prop="mm_changegd_point">
        <el-input v-model="ruleForm.mm_changegd_point"></el-input>
      </el-form-item>
      <el-form-item label="拍卖申请积分" prop="mm_auction_point">
        <el-input v-model="ruleForm.mm_auction_point"></el-input>
      </el-form-item>
      <el-form-item label="积分购买价格" prop="mm_buy_point">
        <el-input v-model="ruleForm.mm_buy_point"></el-input>分/元
      </el-form-item>

      <el-form-item label="消保金最低额度" prop="mm_member_money">
        <el-input v-model="ruleForm.mm_member_money"></el-input>元
      </el-form-item>
      <el-form-item label="提现手续费比例" prop="mm_withdraw_rate">
        <el-input v-model="ruleForm.mm_withdraw_rate"></el-input>%
        <span style="color: #f00;">(从当笔提现资金中扣除)</span>
      </el-form-item>
      <el-form-item label="延迟收货最长时间" prop="mm_max_delay">
        <el-input v-model="ruleForm.mm_max_delay"></el-input>天
      </el-form-item>
      <el-form-item label="自动确认收货" prop="mm_order_confirm">
        <el-input v-model="ruleForm.mm_order_confirm"></el-input>天
      </el-form-item>
      <el-form-item label="创建生活圈的数量" prop="mm_open_community">
        <el-input v-model="ruleForm.mm_open_community"></el-input>个
      </el-form-item>
      <el-form-item label="生活圈会员数量限制" prop="mm_join_community">
        <el-input v-model="ruleForm.mm_join_community"></el-input>个
      </el-form-item>
      <el-form-item label="商户优惠券数量" prop="mm_shop_coupon">
        <el-input v-model="ruleForm.mm_shop_coupon"></el-input>
      </el-form-item>
      <div class="foot_btn">
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      ruleForm: {}
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getSettingItem({
        type: 'show_set',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        res.data.forEach((item, index) => {
          this.$set(this.ruleForm, `${item.cf_name}`, item.cf_value)
        })
      })
    },
    submitForm(formName) {
      this.$newApi.setSettingItem({
        type: 'show_set',
        mm_storage_point: this.ruleForm.mm_storage_point,
        mm_storage_send_point: this.ruleForm.mm_storage_send_point,
        mm_groupgd_point: this.ruleForm.mm_groupgd_point,
        mm_changegd_point: this.ruleForm.mm_changegd_point,
        mm_auction_point: this.ruleForm.mm_auction_point,
        mm_buy_point: this.ruleForm.mm_buy_point,
        mm_member_money: this.ruleForm.mm_member_money,
        mm_withdraw_rate: this.ruleForm.mm_withdraw_rate,
        mm_max_delay: this.ruleForm.mm_max_delay,
        mm_order_confirm: this.ruleForm.mm_order_confirm,
        mm_open_community: this.ruleForm.mm_open_community,
        mm_join_community: this.ruleForm.mm_join_community,
        mm_shop_coupon: this.ruleForm.mm_shop_coupon,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '设置成功'
            })
          }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped>
.score_page {
  overflow: auto;
  background: #fff;
  border-radius: 4px;
  .el-form {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    box-sizing: border-box;
    .el-form-item {
      width: 50%;
      .el-input {
        width: 60%;
      }
    }
    .kefu_wang {
      width: 100%;
      .el-input {
        width: 40%;
      }
    }
    .foot_btn {
      width: 100%;
      padding-left: 140px;
      box-sizing: border-box;
    }
  }
}
</style>
