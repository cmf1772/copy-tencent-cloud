<template>
  <div class="enrollment flexColumn">
    <div style="flex: 1">
      <p class="text">学员信息</p>
      <el-divider></el-divider>
      <div class="flexRC">
        <el-button type="primary"
                   size="mini">选择学员</el-button>
      </div>
      <p class="text mt">转出课程</p>
      <el-divider></el-divider>
      <div class="flexRC">
        <el-button type="primary"
                   size="mini"
                   disabled="true">选择转出课程</el-button>
      </div>
      <p class="text mt">转出课程</p>
      <el-divider></el-divider>
      <div class="flexRC">
        <el-button type="primary"
                   size="mini"
                   disabled="true">转入课程</el-button>
      </div>
      <p class="text mt">其他信息</p>
      <el-divider></el-divider>
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="办理日期"
                      prop="pass">
          <el-date-picker v-model="value1"
                          style="width: 320px"
                          size="mini"
                          class="mr"
                          type="datetimerange"
                          :picker-options="pickerOptions"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期"
                          align="right">
          </el-date-picker>
          <p class="minText">如果是按收款后生效的课程，则从该收款日期开始算有效期</p>
        </el-form-item>
        <el-form-item label="收银员"
                      prop="checkPass">
          <el-input v-model="ruleForm.checkPass"
                    size="mini"
                    style="width: 350px"></el-input>
        </el-form-item>
        <el-form-item label="课程顾问"
                      prop="age">
          <el-select v-model="search"
                     clearable
                     class="mr ml"
                     size="mini"
                     placeholder="请选择">
            <el-option label="全部"
                       value="1">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="老师"
                      prop="age">
          <el-select v-model="search"
                     clearable
                     class="mr ml"
                     size="mini"
                     placeholder="请选择">
            <el-option label="全部"
                       value="1">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注"
                      prop="age">
          <el-input type="textarea"
                    style="width: 350px"
                    v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="c_box flexJC">
      <div></div>
      <div class="flexRC">
        <p class="minText">应收总计：<span class="redColor"> 0.00</span></p>
        <el-button type="primary"
                   class="ml"
                   size="mini">确认转课</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'enrollment',
  data () {
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
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
