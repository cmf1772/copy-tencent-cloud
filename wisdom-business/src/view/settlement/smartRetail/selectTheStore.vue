<template>
  <div class="selectTheStore">
    <div class="title">
      请选择需要创业的店铺
    </div>
    <div class="flex">
      <div class="item flexColumn mt mr"
           v-for="item in nameJson"
           :key="item">
        <div class="bg"></div>
        <div class="top">
          <span>{{item.name}}</span>
          <p>解决网上开店的所有问题</p >
        </div>
        <div class="bottoms">
          适用于
          <p>需要搭建线上商城的商家</p >
        </div>
        <div class="button"
             @click="goRegisteredF(item.id)">
          立即开店
        </div>
      </div>
    </div>
    <div class="one">
      以上店铺类型都可开通微信小程序
    </div>
    <div class="two">
      不知道选哪个？欢迎拨打开店咨询热线：**** - **** ****
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectTheStore',

  data () {
    return {
      nameJson: []
    }
  },

  methods: {
    goRegisteredF (id) {
      this.$router.push({
        path: '/selectVersion',
        query: {
          id: id
        }
      })
    },

    getShopApplyPageList () {
      this.$api.getTypeList().then(res => {
        this.nameJson = res.data
      })
    }
  },

  mounted () {
    this.getShopApplyPageList()
  }
}
</script>

<style lang="scss" scoped>
.selectTheStore {
  width: 1024px;
  margin: 0 auto;
  .title {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 40px 0px 30px 0;
  }

  .one {
    padding-top: 20px;
    font-size: 16px;
    text-align: center;
  }

  .two {
    margin-top: 30px;
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 50px;
  }

  .item:hover {
    .button {
      background: #155bd4;
      color: #fff;
    }
  }

  .item {
    width: 164px;
    height: 300px;
    position: relative;
    margin-left: 20px;
    border-radius: 6px;
    border: 1px solid #e5e5e5;
    background-color: #fff;
    .bg {
      background-image: url(https://img.yzcdn.cn/yzedu/shop/lingshou@3x.png);
      height: 161px;
      width: 164px;
      background-size: 100% 100%;
      background-position: bottom;
      text-align: center;
      position: relative;
    }
    .bottoms {
      color: #666;
      font-size: 12px;
      text-align: center;
      line-height: 24px;
      padding-top: 19px;
    }
    .button {
      color: #323233;
      background-color: #fff;
      display: inline-block;
      height: 32px;
      line-height: 30px;
      font-size: 14px;
      padding: 0 16px;
      border-radius: 2px;
      font-family: inherit;
      border: 1px solid #155bd4;
      text-align: center;
      vertical-align: middle;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.3s;
      width: 110px;
      margin: 20px auto 0px;
    }
    .top {
      width: 100%;
      position: absolute;
      top: 0%;
      left: 0%;
      text-align: center;
      padding-top: 30px;
      > span {
        padding-top: 30px;
        font-size: 20px;
        color: #fff;
      }
      > p {
        font-size: 12px;
        padding-top: 11px;
        line-height: 20px;
        color: #fff;
      }
    }
  }
}
</style>