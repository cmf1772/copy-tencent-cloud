<template>
  <div class="all">
    <!-- -->
    <div class="top">
      <van-nav-bar title="地址管理"
                   left-text
                   left-arrow
                   @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <div class="itemList"
           v-for="(item, index) in dataList"
           :key="index">
        <div class="title">
          <div class="left">
            <span>{{item.consignee}}</span> {{item.mobile}}
          </div>
          <div class="right"
               v-if="item.is_buy === 'checked'">
            默认
          </div>
        </div>
        <div class="address">{{item.province + item.city + item.county + item.address}}</div>
        <div class="bottom">
          <van-radio-group v-model="radio"
                           style="margin-right: 0.1rem">
            <van-radio :name="index"
                       checked-color="#C3AB87">设为默认</van-radio>
          </van-radio-group>
          <div class="rightBotton">
            <p @click="edit(index)">
              <img src="@/assets/images/serve/recovery/bj.png"
                   alt=""> 编辑
            </p>
            <p>
              <img src="@/assets/images/serve/recovery/del.png"
                   alt=""> 删除
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="addAddress">
      <span @click="edit">新增回收地址</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addressM',

  data () {
    return {
      radio: 0,
      dataList: [

      ],
    }
  },

  methods: {
    getUserAddress () {
      // this.dataList.forEach((item, index) => {
      //   if (item.is_buy === 'checked') {
      //     this.radio = index
      //   }
      // })
      this.$api.mine.getMyShopAdressList({
        token: this.$store.state.token.token
      })
        .then(res => {
          res.forEach((item, index) => {
            if (item.is_buy === 'checked') {
              this.radio = index
            }
          })
          this.dataList = res
        })
        .catch(err => {

        })
    },

    onClickLeft () {
      this.$router.go(-1);
    },

    edit (index) {
      if (!index) index = 0
      this.$router.push({
        path: '/serve/recovery/home/update_adress?index=' + index,

      })
    }
  },

  created () {
    this.getUserAddress()
  },
}
</script>

<style lang="scss" scoped>
.all {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: auto;
  }

  .addAddress {
    span {
      display: block;
      width: 3.93rem;
      height: 0.87rem;
      border-radius: 0.44rem;
      background: #c3ab87;

      font-size: 0.3rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 0.87rem;
      text-align: center;
      margin: 0 auto;
      margin-bottom: 0.2rem;
    }
  }
}
.itemList {
  width: 6.5rem;
  margin: 0.6rem auto;

  .bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: solid #f1f1f1 1px;
    border-bottom: solid #f1f1f1 1px;
    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #9c9c9c;
    line-height: 0.36rem;
    padding: 0.18rem 0;

    .rightBotton {
      display: flex;
      > p {
        display: flex;
        align-items: center;
        margin-left: 0.25rem;
        img {
          width: 0.23rem;
          height: 0.23rem;
          margin-right: 0.1rem;
        }
      }
    }
  }

  .address {
    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #777777;
    line-height: 0.36rem;
    margin-bottom: 0.33rem;
  }

  .title {
    width: 100%;
    display: flex;
    height: 0.36rem;

    font-size: 0.24rem;
    font-family: PingFang SC;
    font-weight: 400;
    color: #777777;
    line-height: 0.36rem;
    margin-bottom: 0.31rem;
    justify-content: space-between;

    span {
      font-size: 0.3rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #000000;
      margin-right: 0.2rem;
    }

    .right {
      width: 0.84rem;
      height: 0.36rem;
      border: 1px solid #c3ab87;
      border-radius: 0.18rem;
      line-height: 0.36rem;
      text-align: center;

      font-size: 0.21rem;
      font-family: PingFang SC;
      font-weight: 400;
      color: #c3ab87;
    }
  }
}
</style>