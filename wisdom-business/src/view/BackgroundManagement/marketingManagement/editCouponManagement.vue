<template>
  <div class="editCouponManagement">
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="150px">
      <el-form-item label="优惠券名称"
                    prop="name">
        <el-input v-model="form.name"
                  style="width: 600px;"></el-input>
        <!-- <el-checkbox v-model="checked">主站发布申请</el-checkbox> -->
      </el-form-item>
      <el-form-item label="主站发布"
                    prop="serviceName">
        <el-radio-group v-model="form.main">
          <el-radio :label="0">否</el-radio>
          <el-radio :label="1">是</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="面额"
                    prop="serviceName">
        <el-input v-model="form.discount"
                  style="width: 600px;"><span slot="suffix">元</span></el-input>
      </el-form-item>

      <el-form-item label="有效期"
                    prop="serviceName">
        <el-date-picker v-model="form.time"
                        style="width: 600px;"
                        type="monthrange"
                        value-format="yyyy-MM-dd"
                        range-separator="至"
                        start-placeholder="起始时间"
                        end-placeholder="终止时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="分发方式"
                    prop="host">
        <el-radio-group v-model="form.handout_type">
          <div>
            <el-radio :label="0">免费领取</el-radio>
          </div>
          <div style="margin-top:20px">
            <el-radio :label="1">
              用积分兑换 兑换价格<el-input v-model="form.change_point"
                        style="width: 200px;"></el-input>积分
            </el-radio>
          </div>
          <div style="margin-top:20px">
            <el-radio :label="2">购物返券 单笔订单满
              <el-input v-model="form.rtn_price"
                        style="width: 200px;">
              </el-input>元时赠送
            </el-radio>
          </div>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="使用条件"
                    prop="port">
        单笔定单消费满<el-input v-model="form.price_lbound"
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
                    prop="port">
        <el-input v-model="form.od"
                  style="width: 200px;"></el-input> （数字越大越靠前，最大为1000）
      </el-form-item>
      <!-- <el-form-item label="注意事项"
                    prop="port"
                    >
        <el-input v-model="form.name"
                  style="width: 200px;"></el-input> <span class="redColor">优惠券发布之前请认真审核填写的信息，一旦发布，只能删除，无法进行修改。</span>
      </el-form-item> -->
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
        main: 0,
        discount: '',
        time: [],
        handout_type: 0,
        change_point: '',
        rtn_price: '',
        price_lbound: '',
        coupon_img: 'cs',
        od: '',
      },
      submitBtn: {
        loading: false,
        text: '提交'
      },
      rules: {
        // name: [
        //   { : true, message: '请输入分组名称', trigger: 'blur' }
        // ],
        // serviceName: [
        //   { : true, message: '请输入服务名称', trigger: 'blur' }
        // ],
        // host: [
        //   { : true, message: '请输入主机IP', trigger: 'blur' }
        // ],
        // port: [
        //   { : true, message: '请输入端口', trigger: 'blur' }
        // ],
      }
    }
  },
  computed: {},

  mounted () {
    let uid = this.$route.query.uid
    if (uid) {
      this.getCouponItem(uid)
    }
  },

  methods: {
    goBack () {
      this.$router.go(-1);
    },

    getCouponItem (uid) {
      this.$api.getCouponItem({
        uid: uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        // 没数据
      })
    },

    onSubmit (formName) {
      switch (this.form.handout_type) {
        case 0:
          this.form.change_point = ''
          this.form.rtn_price = ''
          break;
        case 1:
          this.form.rtn_price = ''
          break
        case 2:
          this.form.change_point = ''
          break;
      }

      if (this.$route.query.uid) {
        this.$api.setCouponItem({
          uid: this.$route.query.uid,
          name: this.form.name,
          main: this.form.main,
          discount: this.form.discount,
          start_date: this.form.time[0],
          end_date: this.form.time[1],
          handout_type: this.form.handout_type,
          change_point: this.form.change_point,
          rtn_price: this.form.rtn_price,
          price_lbound: this.form.price_lbound,
          coupon_img: this.form.coupon_img,
          od: this.form.od,
          token: JSON.parse(this.$store.state.token).token
        }).then(res => {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.$router.push('/marketingManagement/couponManagement')
        })
      } else {
        this.$api.addCouponItem({
          name: this.form.name,
          main: this.form.main,
          discount: this.form.discount,
          start_date: this.form.time[0],
          end_date: this.form.time[1],
          handout_type: this.form.handout_type,
          change_point: this.form.change_point,
          rtn_price: this.form.rtn_price,
          price_lbound: this.form.price_lbound,
          coupon_img: this.form.coupon_img,
          od: this.form.od,
          token: JSON.parse(this.$store.state.token).token
        }).then(res => {
          this.$message({
            type: 'success',
            message: '添加成功'
          })
          this.$router.push('/marketingManagement/couponManagement')
        })
      }

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
