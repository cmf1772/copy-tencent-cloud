<template>
  <div class="add_token">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
      class="token_form"
      label-position="left"
    >
      <el-form-item label="通证类型">
        <el-select v-model="form.type" placeholder="请选择通证类型" @change="typeChange">
          <el-option
            v-for="(item, index) in typeData"
            :key="index"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="form.num"></el-input>
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="form.basesn"></el-input>
      </el-form-item>
      <el-form-item label="适用商品">
        <el-select v-model="form.cate_fid" placeholder="请选择适用商品" @change="commChange">
          <el-option
            v-for="(item, index) in commodit"
            :key="index"
            :label="item.category_name"
            :value="item.uid"
          ></el-option>
        </el-select>
        <el-select v-model="form.cate_id" placeholder="请选择适用商品">
          <el-option
            v-for="(item, index) in comChildData"
            :key="index"
            :label="item.category_name"
            :value="item.uid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="有效期">
        <el-date-picker
          v-model="form.time"
          type="daterange"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <!-- 奖励区 -->
      <!-- 1 -->
      <el-form-item label="奖励规则" v-if="form.type == '1'">
        <div class="award_page">
          <el-select
            v-model="oneselForm.combo_rule"
            placeholder="选择奖励"
            style="width: 30%;"
            @change="comboChange"
          >
            <el-option
              v-for="(item, index) in awardData"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <div class="award_con" v-if="oneselForm.combo_rule == '1'">
            满 <el-input v-model="oneselForm.e_money"></el-input> 元， 送积分
            <el-input v-model="oneselForm.e_submoney"></el-input>
          </div>
          <div class="award_con" v-if="oneselForm.combo_rule == '2'">
            满 <el-input v-model="oneselForm.e_money"></el-input> 元， 送红包
            <el-input v-model="oneselForm.e_submoney"></el-input>
          </div>
        </div>
      </el-form-item>
      <!-- 2 -->
      <el-form-item label="购物金额" v-if="form.type == '2'">
        <div class="mony_con">
          满 <el-input v-model="oneselForm.e_amount"></el-input> 元可得
        </div>
      </el-form-item>
      <el-form-item label="分红规则" v-if="form.type == '2'">
        <div class="mony_con">
          总分红比例
          <el-select v-model="oneselForm.combo_rule" placeholder="选择奖励">
            <el-option
              v-for="(item, index) in proportionData"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          ，发行低于
          <el-input v-model="oneselForm.e_discount"></el-input> 份，可分红金额按
          <el-input v-model="oneselForm.e_money"></el-input> %计
        </div>
      </el-form-item>
      <!-- 3 -->
      <el-form-item label="规则" v-if="form.type == '3'">
        <div class="mony_con">
          用
          <el-input v-model="oneselForm.e_money"></el-input> 积分，可抵用
          <el-input v-model="oneselForm.e_submoney"></el-input> 元
        </div>
      </el-form-item>
      <!-- 4 -->
      <el-form-item label="使用规则" v-if="form.type == '4'">
        <div class="award_page">
          <el-select
            v-model="oneselForm.combo_rule"
            placeholder="选择奖励"
            style="width: 30%;"
          >
            <el-option label="面额" value="1"></el-option>
            <el-option label="折扣" value="2"></el-option>
          </el-select>
          <div class="award_con" v-if="oneselForm.combo_rule == '1'">
            面额 <el-input v-model="oneselForm.e_money"></el-input> 元， 兑换
            <el-input v-model="oneselForm.e_submoney"></el-input>
          </div>
          <div class="award_con" v-if="oneselForm.combo_rule == '2'">
            本卡享受折扣 <el-input v-model="oneselForm.e_discount"></el-input>%
          </div>
        </div>
      </el-form-item>
      <!-- 5 -->
      <el-form-item label="获取条件" v-if="form.type == '5'">
        <div class="award_page">
          <el-select v-model="oneselForm.combo_rule" style="width: 30%;" @change="comboChange">
            <el-option label="消费金额" value="1"></el-option>
            <el-option label="互动次数" value="2"></el-option>
          </el-select>
          <div class="award_con" v-if="oneselForm.combo_rule == '1'">
            满 <el-input v-model="oneselForm.e_money"></el-input>元
          </div>
          <div class="award_con" v-if="oneselForm.combo_rule == '2'">
            满 <el-input v-model="oneselForm.e_money"></el-input>次
          </div>
        </div>
      </el-form-item>
      <!-- 6 -->
      <el-form-item label="生效条件" v-if="form.type > 5">
        <el-select v-model="oneselForm.combo_rule" style="width: 30%;">
            <el-option label="无" value="0"></el-option>
            <el-option label="满减" value="1"></el-option>
            <el-option label="折扣" value="2"></el-option>
          </el-select>
      </el-form-item>
      <!-------  ↑↑↑↑↑↑↑↑↑↑↑  ------ -->
      <el-form-item label="样式图">
         <el-upload class="upload-pic"
                  :action="domain"
                  :data="QiniuData"
                  :on-remove="handleRemove"
                  :on-error="uploadError"
                  :on-success="uploadSuccess"
                  :before-upload="beforeAvatarUpload"
                  :limit="1"
                  multiple
                  :on-exceed="handleExceed"
                  :file-list="fileList">
          <el-button size="small"
                    type="primary">选择图片</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="描述">
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入内容"
          v-model="form.description"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发 布</el-button>
        <el-button @click="cancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      form: {},
      oneselForm: {},
      comChildData: [],
      commodit: [
        {
          label: '全部',
          value: '0'
        }
      ],
      typeData: [
        {
          label: "奖励通证",
          value: "1"
        },
        {
          label: "红利通证",
          value: "2"
        },
        {
          label: "券币通证",
          value: "3"
        },
        {
          label: "票证通证",
          value: "4"
        },
        {
          label: "权限通证",
          value: "5"
        },
        {
          label: "参议通证",
          value: "6"
        },
        {
          label: "服务通证",
          value: "7"
        },
        {
          label: "权益通证",
          value: "8"
        },
        {
          label: "商品通证",
          value: "9"
        },
        {
          label: "资产通证",
          value: "10"
        }
      ],
      awardData: [
        {
          value: "1",
          label: "奖励积分"
        },
        {
          value: "2",
          label: "奖励红包"
        }
      ],
      proportionData: [
        { value: "5", label: '5%' },
        { value: "10", label: '10%' },
        { value: "15", label: '15%' },
        { value: "20", label: '20%' },
        { value: "25", label: '25%' },
        { value: "30", label: '30%' },
        { value: "35", label: '35%' },
        { value: "40", label: '40%' },
        { value: "45", label: '45%' },
        { value: "50", label: '50%' },
      ],
      domain: this.$store.state.getUploadUrl, // 七牛云的上传地址（华东区）
      qiniuaddr: 'http://img.meichengmall.com/', // 七牛云的图片外链地址 七牛云空间的外链地址
      QiniuData: {
        key: "", //图片名字处理
        token: this.$store.state.upToken,//七牛云token
        data: {}
      },
      uploadPicUrl: '',
    };
  },
  mounted() {
    this.$api.getUploadToken().then(res => {
      this.QiniuData.token = res.data.token.token
    })
    this.$newApi.TZgetCategoryList({  
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.commodit = res.data
    })
  },
  methods: {
    onSubmit() {
      if(this.form.type == '1') {
        this.$newApi.TZaddPointItem1({  
          type_id: this.form.type,
          name: this.form.name,
          num: this.form.num,
          basesn: this.form.basesn,
          cate_id: this.form.cate_id,
          start_date: this.form.time[0],
          end_date: this.form.time[1],
          style: this.uploadPicUrl,
          description: this.form.description,
          combo_rule: this.oneselForm.combo_rule,
          e_money: this.oneselForm.e_money,
          e_submoney: this.oneselForm.e_submoney,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.err_msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.$router.go(-1)
          }
        })
      } else if(this.form.type == '2') {
        this.$newApi.TZaddPointItem2({  
          type_id: this.form.type,
          name: this.form.name,
          num: this.form.num,
          basesn: this.form.basesn,
          cate_id: this.form.cate_id,
          start_date: this.form.time[0],
          end_date: this.form.time[1],
          style: this.uploadPicUrl,
          description: this.form.description,
          e_amount: this.oneselForm.e_amount,
          combo_rule: this.oneselForm.combo_rule,
          e_discount: this.oneselForm.e_discount,
          e_money: this.oneselForm.e_money,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.err_msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.$router.go(-1)
          }
        })
      } else if(this.form.type == '3') {
        this.$newApi.TZaddPointItem3({  
          type_id: this.form.type,
          name: this.form.name,
          num: this.form.num,
          basesn: this.form.basesn,
          cate_id: this.form.cate_id,
          start_date: this.form.time[0],
          end_date: this.form.time[1],
          style: this.uploadPicUrl,
          description: this.form.description,
          e_money: this.oneselForm.e_money,
          e_submoney: this.oneselForm.e_submoney,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.err_msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.$router.go(-1)
          }
        })
      } else if(this.form.type == '4') {
        this.$newApi.TZaddPointItem4({  
          type_id: this.form.type,
          name: this.form.name,
          num: this.form.num,
          basesn: this.form.basesn,
          cate_id: this.form.cate_id,
          start_date: this.form.time[0],
          end_date: this.form.time[1],
          style: this.uploadPicUrl,
          description: this.form.description,
          combo_rule: this.oneselForm.combo_rule,
          e_money: this.oneselForm.e_money,
          e_submoney: this.oneselForm.e_submoney,
          e_discount: this.oneselForm.e_discount,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.err_msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.$router.go(-1)
          }
        })
      } else if(this.form.type == '5') {
        this.$newApi.TZaddPointItem5({  
          type_id: this.form.type,
          name: this.form.name,
          num: this.form.num,
          basesn: this.form.basesn,
          cate_id: this.form.cate_id,
          start_date: this.form.time[0],
          end_date: this.form.time[1],
          style: this.uploadPicUrl,
          description: this.form.description,
          combo_rule: this.oneselForm.combo_rule,
          e_money: this.oneselForm.e_money,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.err_msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.$router.go(-1)
          }
        })
      } else if(this.form.type > 5) {
        this.$newApi.TZaddPointItem6({  
          type_id: this.form.type,
          name: this.form.name,
          num: this.form.num,
          basesn: this.form.basesn,
          cate_id: this.form.cate_id,
          start_date: this.form.time[0],
          end_date: this.form.time[1],
          style: this.uploadPicUrl,
          description: this.form.description,
          combo_rule: this.oneselForm.combo_rule,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.err_msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.$router.go(-1)
          }
        })
      }
    },
    commChange() {
      this.$newApi.TZgetSubList({
        uid: this.form.cate_fid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.comChildData = res.data
      })
    },
    typeChange() {
      this.oneselForm = {}
    },
    comboChange() {
      this.$set(this.oneselForm, 'e_money', '')
      this.$set(this.oneselForm, 'e_submoney', '')
    },
    handlePreview() {},
    handleRemove() {},
    cancel() {
      this.$router.go(-1); //返回上一层
    },

    handleRemove (file, fileList) {
      this.uploadPicUrl = "";
    },
    uploadError (err, file, fileList) {    //图片上传失败时调用
      this.$message({
        message: "上传出错，请重试！",
        type: "error",
        center: true
      });
    },
    uploadSuccess (response, file, fileList) {  //图片上传成功的方法
      this.uploadPicUrl = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    beforeAvatarUpload (file) {   //图片上传之前的方法
      this.QiniuData.data = file;
      this.QiniuData.key = `${JSON.parse(this.$store.state.token).client_id}/adv/${file.name}`;
    },
    handleExceed (files, fileList) {
      this.$message.warning(
        `当前限制选择 1 张图片，如需更换，请删除上一张图片在重新选择！`
      );
    },
  }
};
</script>

<style lang="scss" scoped>
.add_token {
  background: #fff;
  max-height: 550px;
  overflow: auto;
  padding: 20px;
  /deep/ .token_form {
    width: 60%;
    .el-input {
      width: 40%;
    }
    .el-select {
      width: 40%;
      .el-input {
        width: 100%;
      }
    }
  }
  .award_page {
    display: flex;
    .award_con {
      display: flex;
      padding-left: 20px;
      .el-input {
        margin: 0 10px;
        width: 25%;
      }
    }
  }
  .mony_con {
    display: flex;
    .el-input {
      width: 10%;
      margin: 0 10px;
    }
    .el-select {
      width: 15%;
      .el-input {
      }
    }
  }
}
</style>
