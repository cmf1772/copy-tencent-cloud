<template>
  <div class="editCouponManagement">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="驱动名称"
                    prop="name"
                    required>
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
        <el-checkbox v-model="checked">主站发布申请</el-checkbox>
      </el-form-item>
      <el-form-item label="面额"
                    prop="serviceName"
                    required>
        <el-input v-model="form.serviceName"
                  style="width: 600px;"><span slot="suffix">元</span></el-input>
      </el-form-item>

      <el-form-item label="有效期"
                    prop="serviceName"
                    required>
        <el-date-picker v-model="value1"
                        style="width: 600px;"
                        type="monthrange"
                        range-separator="至"
                        start-placeholder="起始时间"
                        end-placeholder="终止时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="分发方式"
                    prop="host"
                    required>
        <el-radio-group v-model="radio">
          <div>
            <el-radio :label="3">免费领取</el-radio>
          </div>
          <div style="margin-top:20px">
            <el-radio :label="6">
              用积分兑换 兑换价格<el-input v-model="form.name"
                        style="width: 200px;"></el-input>积分
            </el-radio>
          </div>
          <div style="margin-top:20px">
            <el-radio :label="9">购物返券 单笔订单满<el-input v-model="form.name"
                        style="width: 200px;"></el-input>元时赠送</el-radio>
          </div>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="使用条件"
                    prop="port"
                    required>
        单笔定单消费满<el-input v-model="form.name"
                  style="width: 200px;"></el-input> 元时使用
      </el-form-item>
      <el-form-item label="图片上传">
        <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                   list-type="picture-card"
                   :on-preview="handlePictureCardPreview"
                   :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          <!-- <div slot="tip"
               class="el-upload__tip">不上传，系统自动用商品详细图等比例压缩</div> -->
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%"
               :src="dialogImageUrl"
               alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="排序"
                    prop="port"
                    required>
        <el-input v-model="form.name"
                  style="width: 200px;"></el-input> （数字越大越靠前，最大为1000）
      </el-form-item>
      <el-form-item label="注意事项"
                    prop="port"
                    required>
        <el-input v-model="form.name"
                  style="width: 200px;"></el-input> <span class="redColor">优惠券发布之前请认真审核填写的信息，一旦发布，只能删除，无法进行修改。</span>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="onSubmit('form')"
                   :loading="submitBtn.loading">{{submitBtn.text}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import driverService from '../../service/driver'
export default {
  name: 'editCouponManagement',
  data () {
    return {
      radio: 3,
      value1: [],
      form: {
        name: '',
        serviceName: '',
        host: '',
        port: '',
        description: ''
      },
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        name: [
          { required: true, message: '请输入分组名称', trigger: 'blur' }
        ],
        serviceName: [
          { required: true, message: '请输入服务名称', trigger: 'blur' }
        ],
        host: [
          { required: true, message: '请输入主机IP', trigger: 'blur' }
        ],
        port: [
          { required: true, message: '请输入端口', trigger: 'blur' }
        ],
      }
    }
  },
  computed: {},
  methods: {
    goBack () {
      this.$router.go(-1);
    },
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // this.submitBtn.loading = true;
          // this.submitBtn.text = '处理中...';
          // driverService.add(this.form).then(res => {
          //     if (res.data.state === 1) {
          //         this.$message({message: "新增成功", type: 'success'});
          //         this.$router.go(-1);
          //     } else {
          //         throw new Error(res.data.msg);
          //     }
          // }).catch(error => {
          //     this.$message.error(error.message);
          // }).finally(() => {
          //     this.submitBtn.loading = false;
          //     this.submitBtn.text = '提交';
          // })
        } else {
          return false;
        }
      });
    }
  }
}
</script>
<style scoped>
.el-form {
  text-align: left !important;
}

.el-input__inner {
  width: 600px;
}

.el-date-editor {
  width: 290px !important;
}

.el-date-editor .el-input__inner {
  width: 100% !important;
}

.el-textarea__inner {
  width: 600px;
}
</style>
