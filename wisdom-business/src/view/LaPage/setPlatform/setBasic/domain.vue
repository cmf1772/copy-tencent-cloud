<template>
  <div class="domain_page" :style="{ height: heights }">
    <div class="domain_top">
      <el-input placeholder="www|mydomain|shop|fff" v-model="value"></el-input>
      <el-button type="primary" @click="save">提交</el-button>
      <span><i class="el-icon-warning-outline"></i>多个域名用|分隔</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      value: ""
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getDomainItem({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.value = res.data.domain
      })
    },
    save() {
      this.$newApi.setDomainItem({
        subdomain: this.value,  
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
    }
  }
};
</script>

<style lang="scss" scoped>
.domain_page {
  overflow: auto;
  background: #fff;
  border-radius: 4px;
  .domain_top {
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
    .el-input {
      width: 25%;
    }
    span {
      width: 23%;
      line-height: 33px;
      display: inline-block;
      background: rgb(221, 225, 230);
      height: 100%;
      padding: 0 10px;
      display: flex;
      align-items: center;
      i {
        font-size: 20px;
        margin-right: 10px;
        color: rgb(235, 162, 5);
      }
    }
  }
}
</style>
