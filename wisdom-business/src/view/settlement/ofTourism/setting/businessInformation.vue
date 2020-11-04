<template>
  <div class="businessInformation flexColumn">
    <div class="flexColum"
         style="flex: 1; overflow: auto;">
      <div class="conent_box"
           style="padding-bottom: 10px">
        <p class="text mb mt ml">商户信息</p>
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm ">
          <el-form-item label="商户名称"
                        prop="name">
            <el-input v-model="ruleForm.name"
                      style="width: 500px"></el-input>
          </el-form-item>
          <el-form-item label="商户地址"
                        prop="region">
            <el-select v-model="ruleForm.region"
                       style="width: 500px"
                       placeholder="请选择活动区域">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间"
                        required>
            <div class="flexRC">
              <el-select v-model="ruleForm.region"
                         style="width: 250px"
                         placeholder="请选择活动区域">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
              <el-select v-model="ruleForm.region"
                         style="width: 250px"
                         placeholder="请选择活动区域">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </div>
          </el-form-item>
          <el-form-item label="商户LOGO"
                        required>
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%"
                   :src="dialogImageUrl"
                   alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="客服电话">
            <el-input v-model="ruleForm.name"
                      style="width: 500px"></el-input>
          </el-form-item>
          <el-form-item label="商户地址"
                        prop="region">
            <el-select v-model="ruleForm.region"
                       style="width: 500px"
                       placeholder="请选择活动区域">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="商户简介"
                        prop="desc">
            <el-input type="textarea"
                      style="width: 500px"
                      v-model="ruleForm.desc"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="conent_box"
           style="padding-bottom: 10px">
        <p class="text mt mb ml">运营人信息</p>
        <el-form :model="ruleForm"
                 :rules="rules"
                 ref="ruleForm"
                 label-width="100px"
                 class="demo-ruleForm ">
          <el-form-item label="姓名">
            <el-input v-model="ruleForm.name"
                      style="width: 500px"></el-input>
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model="ruleForm.name"
                      style="width: 500px"></el-input>
          </el-form-item>

          <el-form-item label="QQ号">
            <el-input v-model="ruleForm.name"
                      style="width: 500px"></el-input>
          </el-form-item>

          <el-form-item label="微信号">
            <el-input v-model="ruleForm.name"
                      style="width: 500px"></el-input>
          </el-form-item>

          <el-form-item label="邮箱">
            <el-input v-model="ruleForm.name"
                      style="width: 500px"></el-input>
          </el-form-item>

        </el-form>
      </div>
    </div>
    <div class="c_box mt flexC">
      <el-button type="primary">保存</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'businessInformation',
  data () {
    return {
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
      dialogImageUrl: '',
      dialogVisible: false,
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
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  },

  mounted () {

  }
}
</script>

<style lang="scss" scoped>
</style>
