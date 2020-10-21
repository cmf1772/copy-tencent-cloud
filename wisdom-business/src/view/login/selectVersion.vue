<template>
  <div class="selectVersion">
    <el-steps :active="1"
              finish-status="success"
              style="margin-top: 20px"
              simple>
      <el-step title="选择版本"></el-step>
      <el-step title="填写信息"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <div class="flexJC box mt">
      <div class="itemi">
        <span>基础版</span>
        <p>适用单个网店的商家</p>
        <div>
          单个线上网店，可一站式管理网店的店铺装修、商品、订单、营销、会员、资金等数据。
        </div>
        <el-button type="primary"
                   @click="goRegisteredF"
                   class="bo">开通店铺</el-button>
      </div>
      <div class="itemi">
        <span>专业版</span>
        <p>适用单个网店的商家</p>
        <div>
          单个线上网店，可一站式管理网店的店铺装修、商品、订单、营销、会员、资金等数据。
        </div>
        <el-button type="primary"
                   @click="goRegisteredF"
                   class="bo">开通店铺</el-button>
      </div>
    </div>

    <div class="help">
      版本功能对比
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectVersion',

  methods: {
    goRegisteredF () {
      this.$router.push('/registeredF')
    }
  }
}
</script>

<style lang="scss" scoped>
.selectVersion {
  width: 1024px;
  margin: 0 auto;
  .box {
    box-sizing: border-box;
    padding: 0 120px;
    .itemi {
      width: 380px;
      height: 370px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;
      color: #666;
      padding: 30px 50px 0;
      -webkit-box-shadow: 0 2px 10px #e5e5e5;
      box-shadow: 0 2px 10px #e5e5e5;
      > span {
        font-size: 24px;
        line-height: 32px;
        color: #000;
        font-weight: 700;
      }
      > p {
        font-size: 18px;
        margin-top: 20px;
      }
      > div {
        font-size: 14px;
        line-height: 20px;
        margin-top: 28px;
        text-align: left;
      }
      .bo {
        margin-top: 100px;
      }
    }
  }

  .help {
    text-align: center;
    margin: 40px 0px;
  }
}
</style>