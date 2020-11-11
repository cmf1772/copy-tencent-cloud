<template>
  <div class="acSet flexColumn">
    <p class="text">业务-住宿设置</p>

    <div class="conent_box"
         style="flex: 1">
      <p class="text">基本信息</p>
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="150px"
               class="demo-ruleForm">
        <el-form-item label="最晚可预订时间"
                      prop="name">
          <el-select v-model="ruleForm.region"
                     size="mini"
                     placeholder="请选择活动区域">
            <el-option label="今日"
                       value="shanghai"></el-option>
            <el-option label="次日"
                       value="beijing"></el-option>
          </el-select>
          <el-time-picker v-model="value1"
                          size="mini"
                          :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
                          placeholder="任意时间点">
          </el-time-picker>
          <span class="minText">超过该时间，客户不能预订当天房间</span>
        </el-form-item>
        <el-form-item label="最多可预订数"
                      prop="region">
          <el-input placeholder="请输入内容"
                    style="width: 350px"
                    size="mini"
                    v-model="input2">
            <template slot="append">个</template>
          </el-input>
          <span class="minText">单个订单最多可预订房间数，不填则不限</span>
        </el-form-item>
        <el-form-item label="最多可预订数"
                      required>
          <el-input placeholder="请输入内容"
                    style="width: 350px"
                    size="mini"
                    v-model="input2">
            <template slot="append">天</template>
          </el-input>
          <span class="minText">订单最多可预订房晚，不填则默认60天 ; 可填写1~60天</span>
        </el-form-item>
        <el-form-item label="预订日期范围"
                      required>
          <el-input placeholder="请输入内容"
                    style="width: 350px"
                    size="mini"
                    v-model="input2">
            <template slot="append">天</template>
          </el-input>
          <span class="minText">订房日期范围；可填写 1~85 天。例：若今天是9号，填写2天，可订11号前离店的订单</span>
        </el-form-item>
        <el-form-item label="预订确认"
                      required>
          <el-radio-group v-model="ruleForm.resource">
            <div class="flexRC">
              <el-radio label="不需要，系统自动确认并"></el-radio>
              <el-select v-model="ruleForm.region"
                         size="mini"
                         placeholder="请选择活动区域">
                <el-option label="分配房号"
                           value="shanghai"></el-option>
                <el-option label="不分配房号"
                           value="beijing"></el-option>
              </el-select>
            </div>
            <div class="flexRC mt">
              <el-radio label="需要，商家在后台确认预订并"></el-radio>
              <el-select v-model="ruleForm.region"
                         size="mini"
                         placeholder="请选择活动区域">
                <el-option label="分配房号"
                           value="shanghai"></el-option>
                <el-option label="不分配房号"
                           value="beijing"></el-option>
              </el-select>
              <span class="minText ml mr">，且超过</span>
              <el-input placeholder="请输入内容"
                        style="width: 200px"
                        size="mini"
                        v-model="input2">
                <template slot="append">分钟</template>
              </el-input>
              <span class="minText ml mr">后未处理则自动</span>
              <el-select v-model="ruleForm.region"
                         size="mini"
                         placeholder="请选择活动区域">
                <el-option label="确定预定"
                           value="shanghai"></el-option>
                <el-option label="拒绝预定"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="预订须知"
                      prop="desc">
          <el-input type="textarea"
                    style="width: 500px"
                    v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="预订须知确认"
                      prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="关闭"></el-radio>
            <el-radio label="启动"></el-radio>
            <span class="minText">启用后，订单提交前，会弹窗告知用户预订须知，需用户手动确认。</span>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="预留信息"
                      prop="delivery">
          <el-switch v-model="ruleForm.delivery"></el-switch>
          <span class="minText">启用后，订单提交前，会弹窗告知用户预订须知，需用户手动确认。</span>
          <div>
            <el-input placeholder="信息名称"
                      style="width: 150px"
                      size="mini"
                      v-model="input2">
            </el-input>
            <el-input placeholder="操作"
                      style="width: 150px"
                      size="mini"
                      v-model="input2">
            </el-input>
          </div>
          <el-button size="mini">添加字段</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     @click="submitForm('ruleForm')">保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'acSet',
  data () {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
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
