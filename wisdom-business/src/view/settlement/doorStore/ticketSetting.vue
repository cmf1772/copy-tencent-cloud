<template>
  <div class="ticketSetting bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">小票设置</p>
    </div>
    <div class="conent_box flexJC"
         style="flex: 1;    overflow: hidden;">
      <div class="left"
           style="width: 40%; height: 100%">
        <img src="@/assets/img/fp.png"
             style="width: 100%; height: 100%"
             alt="">
      </div>
      <div class="right"
           style="width: 59%; height: 100%">
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm">
          <el-form-item label="小票规格"
                        prop="name">
            <el-radio v-model="radio"
                      label="1">58mm</el-radio>
            <el-radio v-model="radio"
                      label="2">80mm</el-radio>
          </el-form-item>
          <el-form-item label="自动打印"
                        prop="region">
            <el-switch v-model="ruleForm.region"
                       active-color="#13ce66"
                       inactive-color="#ff4949">
            </el-switch>
          </el-form-item>
          <el-form-item label="打印张数"
                        required>
            <el-input v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="底部文字"
                        prop="desc">
            <el-input type="textarea"
                      v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="推广二维码"
                        prop="desc">
            <p>
              <span class="minText">访问线上店铺</span>
              <el-switch v-model="ruleForm.region"
                         active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </p>
            <p>
              <span class="minText">开通会员卡</span>
              <el-switch v-model="ruleForm.region"
                         active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </p>
            <p>
              <span class="minText">关注公众号</span>
              <el-switch v-model="ruleForm.region"
                         active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticketSetting',
  data () {
    return {
      radio: '1',
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