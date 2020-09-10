<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="top">
      <van-nav-bar title="上门地址"
                   left-text
                   left-arrow
                   @click-left="onClickLeft"
                   @click-right="onClickRight">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/serve/house/locals.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="from">
      <van-form validate-first
                @failed="onFailed">
        <van-field v-model="value1"
                   name="pattern"
                   label="联系姓名"
                   placeholder="请输入姓名" />
        <van-field v-model="value2"
                   name="validator"
                   label="手机号码"
                   placeholder="请输入手机号码" />
        <div class="set">
          <van-field v-model="address"
                     name="asyncValidator"
                     label="上门地址"
                     placeholder="请输入上门地址" />
          <div class="check"
               @click="setAdress">
            <van-icon name="location-o"
                      size="18" />请选择
          </div>
        </div>
        <van-field v-model="value4"
                   name="asyncValidator"
                   label="详细地址"
                   placeholder="请输入上门详细地址" />
        <div style="margin: 16px;">
          <van-button round
                      block
                      type="info"
                      native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: "",
      value2: "",
      address: "",
      value4: "",
      dataList: [
        {
          "uid": 153,
          "is_buy": "checked",
          "consignee": "shaoshibing",
          "address": "成都市郫都区双柏路6号",
          "province": "四川省",
          "city": "成都市",
          "county": "郫县",
          "mobile": "18200218721",
          "zipcode": "610023"
        },
      ],
    };
  },
  created () {
    if (localStorage.getItem("checkedLocation")) {
      let location = JSON.parse(localStorage.getItem("checkedLocation"));
      this.address = location.address
      localStorage.removeItem("checkedLocation")
    }
    this.getUserAddress()
  },
  methods: {
    getUserAddress () {
      // this.dataList.forEach((item, index) => {
      //   if (item.is_buy === 'checked') {
      //     this.radio = index
      //   }
      // })
      let index = this.$route.query.index
      // this.value1 = this.dataList[index].consignee
      // this.value2 = this.dataList[index].mobile
      // this.address = this.dataList[index].address
      // this.value4 = this.dataList[index].province + this.dataList[index].city + this.dataList[index].county + this.dataList[index].address
      this.$api.mine.getMyShopAdressList({
        token: this.$store.state.token.token
      })
        .then(res => {
          this.value1 = res[index].consignee
          this.value2 = res[index].mobile
          this.address = res[index].address
          this.value4 = res[index].province + res[index].city + res[index].county + res[index].address
          // this.dataList = res
        })
        .catch(err => {

        })
    },
    onClickLeft () {
      this.$router.go(-1);
    },
    onClickRight () { },
    onFailed () { },
    setAdress () {
      this.$router.push({
        name: "map",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.from {
  padding: 0 0;
}
.van-cell {
  padding: 0.3rem 0.45rem;
  /deep/ span {
    font-size: 0.3rem;
  }
  /deep/ input {
    font-size: 0.3rem;
  }
}
.van-button {
  width: 3.93rem;
  height: 0.87rem;
  border: none;
  margin: 0.45rem auto;
  background: #c3ab87;
}
.set {
  display: flex;
  align-items: center;

  .check {
    width: 1.55rem;
    display: flex;
    align-items: center;
    margin-right: 0.2rem;
    font-size: 0.2rem;
    min-width: 1rem;
    background: #f7f7f7;
    color: #c3ab87;
    border: #c3ab87 1px solid;
    padding: 0.03rem 0.1rem;
    border-radius: 20px;
  }
}
</style>