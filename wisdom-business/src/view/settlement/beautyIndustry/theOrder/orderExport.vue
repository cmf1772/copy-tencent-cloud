<template>
  <div class="flexColumn">
    <p class="text">订单导出</p>
    <div class="bg_color"
         style="padding: 10px">
      <p class="minText mb">注意：</p>
      <p class="minText mb">1、勾选项越多对应的数据量越多，导出所需要的准备时间越长，可能因数据量过大导致导出失败；</p>
      <p class="minText mb">2、目前功能只支持，支付状态为“已支付” 和 退款状态为“已退款”订单信息的导出；</p>
      <p class="minText mb">3、订单导出只做公共字段展示，不同业务订单中的细节字段请至各业务订单中进行导出；</p>
      <p class="minText">4、券订单存在一笔订单发起了多笔退款单，此处不支持退款单导出；已退款券订单的具体退款金额和退款单，请至“券订单”-“退款单”中进行</p>
    </div>
    <div class="conent_box">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="选择门店"
                      prop="name">
          <el-select v-model="ruleForm.region"
                     style="width: 70%;"
                     placeholder="请选择活动区域">
            <el-option label="总店"
                       value="shanghai"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单类型"
                      prop="region">
          <div class="flexRC">
            <el-checkbox-group v-model="checkedCities"
                               @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities"
                           :label="city"
                           :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form-item>
        <el-form-item label="选择时间"
                      required>
          <div class="flexRC">
            <el-select v-model="ruleForm.region"
                       placeholder="请选择活动区域">
              <el-option label="总店"
                         value="shanghai"></el-option>
            </el-select>
            <el-date-picker type="date"
                            placeholder="选择日期"
                            v-model="ruleForm.date1"
                            style="width: 70%;"></el-date-picker>
          </div>
        </el-form-item>

        <el-form-item label="状态"
                      prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="已支付"></el-radio>
            <el-radio label="已退款"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderExport',
  data () {
    return {
      checkedCities: ['上海', '北京'],
      cities: ['食堂', '外卖', '秒付', '买单收款', 'APP收款', 'APP补充收益', 'POS', '卡劵销售', '会员订单', '第三方点餐', '积分商城', '第三方订单'],
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
