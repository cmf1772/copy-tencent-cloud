<template>
  <div class="theHttp"
       :style="{'height': height}">
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 域名设置：
    </p>
    <el-form ref="form"
             :rules="rules"
             :model="form"
             label-width="130px">
      <el-form-item label="二级域名"
                    prop="displayName">
        {{getSecTl}} <span class="redColor">修改需要管理员</span>
      </el-form-item>
    </el-form>
    <p style="font-size: 15px; margin-bottom: 10px;font-weight: 360; color:#000">
      <i class="
       el-icon-edit"
         style="color: #f5a623 !important;font-weight: 360;margin-right: 10px"></i> 域名设置：
    </p>
    <el-form ref="form"
             :model="form"
             label-width="130px">
      <el-form-item label="顶级域名"
                    style="width: 100%"
                    prop="displayName">
        <div class="form-item">
          <el-input v-model="form.domain_name"
                    placeholder=""></el-input>
          <el-button type="primary"
                     @click="setTldItem">确定</el-button>
        </div>
        <div>
          <p>例 ：www.mydomain.com</p>
          请确认域名是否已通过备案，并做好域名解析。有问题可咨询客服13810173183
        </div>
      </el-form-item>
      <el-form-item label="状态	"
                    style="width: 100%"
                    prop="displayName">
        未审核
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: 'theHttp',

  data () {
    return {
      form: {
        domain_name: ''
      },
      height: window.innerHeight - 100 + 'px',
      getSecTl: '',
    }
  },

  mounted () {
    this.getSecTldItem()
    this.getTldItem()
  },

  methods: {
    getSecTldItem () {
      this.$api.getSecTldItem({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.form.domain_name = res.data

      })
    },

    getTldItem () {
      this.$api.getTldItem({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.getSecTl = res.data.domain_name
      })
    },

    setTldItem () {
      this.$api.setTldItem({
        domain_name: this.form.domain_name,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          type: 'success',
          message: res.data.msg
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .el-form-item {
    width: 45%;
  }
}
.theHttp {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px 100px;
  overflow: auto;
}

.upload-wrap {
  width: 100%;
  height: 40px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  span {
    z-index: 1;
    line-height: 40px;
    color: #4bb3ff;
    font-size: 16px;
    margin-left: 30px;
  }
  input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    z-index: 2;
  }
}
</style>