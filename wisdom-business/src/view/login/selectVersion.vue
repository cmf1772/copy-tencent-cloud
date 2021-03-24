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
    <div class="flexJC box mt"
         v-if="json.length">
      <div class="itemi"
           v-for="item in json"
           :key="item">
        <span>{{item.name}}</span>
        <p>适用单个网店的商家</p >
        <div>
          单个线上网店，可一站式管理网店的店铺装修、商品、订单、营销、会员、资金等数据。
        </div>
        <el-button type="primary"
                   @click="goRegisteredF(item)"
                   class="bo">开通店铺</el-button>
      </div>
    </div>

    <div class="flex box mt"
         style="justify-content: center;margin-top: 50"
         v-if="!json.length">
      暂无数据
    </div>

    <div class="help">
      版本功能对比
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectVersion',

  data () {
    return {
      json: []
    }
  },

  methods: {
    goRegisteredF (item) {
      this.$router.push({
        path: '/registeredF',
        query: {
          id: this.$route.query.id,
          type_id: item.id
        }
      })
    },

    getShopLevelList () {
      this.$api.getShopLevelList({
        type_id: this.$route.query.id
      }).then(res => {
        this.json = res.data
      })
    }
  },

  mounted () {
    this.getShopLevelList()
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