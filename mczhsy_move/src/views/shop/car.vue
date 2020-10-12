<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="购物车"
        :right-text="rightText"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 主体 -->
    <div class="container" :style="{'padding-bottom':edit?'1.45rem':'.45rem'}">
      <div class="list" v-if="Object.keys(carObject).length > 0 && carObject.cart_list.length">
        <van-swipe-cell v-for="(item,index) in carObject.cart_list" :key="index">
          <div class="item">
            <div class="shop-name">
              <van-radio-group v-if="edit">
                <van-checkbox
                  v-model="checkedArr[index]"
                  checked-color="#C3AB87"
                  icon-size=".32rem"
                ></van-checkbox>
              </van-radio-group>
              <van-icon name="shop-o" />名品代购小铺
              <van-icon name="arrow" size=".24rem" color="#777" />
            </div>
            <div class="center">
              <div class="left">
                <van-radio-group v-if="edit">
                  <van-checkbox
                    v-model="checkedArr[index]"
                    checked-color="#C3AB87"
                    icon-size=".32rem"
                  ></van-checkbox>
                </van-radio-group>
                <img :src="item.goods_file1" />
              </div>
              <div class="right">
                <span class="title" @click="detailed(item)">{{item.goods_name}}</span>
                <div class="screen">
                  <div>
                    <!-- 卡其色
                    <van-icon name="arrow-down" />-->
                    {{item.attr}}
                  </div>
                </div>
                <div class="price">
                  <span class="price-t">￥{{item.ori_price * item.cart_num}}</span>
                  <van-stepper v-model="item.cart_num" integer @change="changeGoodNum(item)" />
                </div>
              </div>
            </div>
          </div>
          <template #right>
            <van-button square type="danger" text="删除" @click="delCartGood(index)" />
            <van-button square type="primary" text="结算" @click="pay(index)" />
          </template>
        </van-swipe-cell>
      </div>

      <div v-else class="no-car-tips">暂时没有添加任何商品</div>
    </div>
    <div class="fix-bottom" v-if="edit">
      <div class="left">
        <van-radio-group>
          <van-checkbox
            v-model="checkedAll"
            checked-color="#C3AB87"
            icon-size=".32rem"
            @click="checkedAllGoods"
          ></van-checkbox>
        </van-radio-group>
        <div class="check">
          已选：
          <span>{{checkedNum}}件</span>
        </div>
        <div class="amount">
          总价：
          <span>￥{{checkedAmount}}</span>
        </div>
      </div>
      <div class="right">
        <div class="canel" @click="delCartGood">删除</div>
        <div class="pay" @click="pay">付款</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      value: 1,
      carObject: {}, //购物车对象
      checkedArr: [], //选中列表
      checkedNum: 0, //选中个数
      checkedAmount: 0, //选中商品价格
      edit: false, //是否可选中
      rightText: "管理", //右上角提示
      checkedAll: false //全选false
    };
  },

  // 激活
  activated() {
    // 初始化数据
    this.init();
    
  },

  // 卸载
  deactivated() {
    this.carObject = {};
    this.checkedAmount = 0;
    this.checkedNum = 0;
    this.edit = false;
    this.checkedAll = false;
    this.rightText = "管理";
  },

  // 观察
  watch: {
    // 查看选中状态
    checkedArr: function(val) {
      this.resultData(val);

      let success = true;
      val.forEach(item => {
        if (!item) {
          success = false;
        }
      });
      this.checkedAll = success;
    }
  },

  // 方法
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.edit = !this.edit;
      if (this.edit) {
        this.rightText = "取消";
      } else {
        this.rightText = "管理";
      }
    },

    // 初始化数据 以及删除购物车 页面回显
    init() {
      if (this.$store.state.isLogin) {
        this.$api.shop
          .getCarList({
            token: this.$store.state.token.token
          })
          .then(res => {
            console.log(res);
            this.carObject = res;
            //选中数组
            this.checkedArr.length = this.carObject.cart_list.length;
            this.checkedArr.fill(false, 0);
            console.log(this.checkedArr);
          })
          .catch(err => {
            if (err.response.data.err_code == 401) {
              this.$api
                .refreshToken({
                  refresh: this.$store.state.token.refresh
                })
                .then(res => {
                  this.$store.commit("setToken", res);
                  this.init();
                })
                .catch(err => {
                  this.$toast.fail("未知错误，请稍后再试");
                });
              return;
            }
          });
      } else {
        this.$toast.fail("请先登录");
        this.$router.replace({
          path: "/login"
        });
      }
    },

    //全选商品
    checkedAllGoods() {
      console.log(this.checkedAll);
      if (this.checkedAll) {
        this.checkedArr.forEach((item, index) => {
          this.$set(this.checkedArr, index, true);
        });
      } else {
        this.checkedArr.forEach((item, index) => {
          this.$set(this.checkedArr, index, false);
        });
      }
      console.log(this.checkedArr);
    },

    // 重置数据
    resultData(array) {
      console.log(111);
      this.checkedNum = 0;
      this.checkedAmount = 0;
      array.forEach((item, index) => {
        if (item) {
          this.checkedNum++;
          this.checkedAmount +=
            this.carObject.cart_list[index].ori_price *
            this.carObject.cart_list[index].cart_num;
        }
      });
    },

    //删除购物车
    delCartGood(itemIndex) {
      console.log(typeof itemIndex);
      if (typeof itemIndex == "number") {
        this.delCartGoodSuccessTip(this.delCartGoodApi(itemIndex));
      } else {
        if (this.checkedNum == 0) {
          this.$toast.fail("请选择商品");
          return;
        }
        this.delCartGoodByCheckBox();
      }
    },

    //根据选中的商品进行删除
    delCartGoodByCheckBox() {
      //后端只能单个删除  批量删除
      let success = true;
      this.checkedArr.forEach((item, index) => {
        if (item) {
          if (!this.delCartGoodApi(index)) {
            success = false;
          }
        }
      });
      this.delCartGoodSuccessTip(success);
    },

    // 删除购物车api函数
    delCartGoodApi(index) {
      let success = true;
      this.$api.shop
        .cancelCar({
          uid: this.carObject.cart_list[index].uid,
          token: this.$store.state.token.token
        })
        .then(res => {
          console.log(res);
          success = true;
        })
        .catch(e => {
          success = false;
        });
      return success;
    },

    //删除购物车提示
    delCartGoodSuccessTip(bol) {
      if (bol) {
        this.$toast.success("删除成功");
        this.checkedNum = 0;
        this.checkedAmount = 0;
        this.checkedAll = false;
        //使用宏任务 解决与后端查找数据时间冲突
        let timer = setTimeout(() => {
          // 页面回显
          this.init();
          clearTimeout(timer);
        }, 500);
      } else {
        this.$toast.fail("未知原因，请稍后重试");
      }
    },

    //改变商品数量
    changeGoodNum(item) {
      console.log(item);
      this.$api.shop
        .changeGoodNumber({
          uid: item.uid,
          num: item.cart_num,
          token: this.$store.state.token.token
        })
        .then(res => {
          this.resultData(this.checkedArr);
        });
    },

    // 跳转到支付页面
    pay(itemIndex) {
      if (typeof itemIndex == "number") {
        this.payApi(String(this.carObject.cart_list[itemIndex].uid),this.carObject.cart_list[itemIndex].ori_price * this.carObject.cart_list[itemIndex].cart_num,this.carObject.cart_list[itemIndex])
      } else {
        if (this.checkedNum == 0) {
          this.$toast.fail("请选择商品");
          return;
        }
        let cart_uids = "";
        let price = 0
        this.checkedArr.forEach((item, index) => {
          if (item) {
            console.log(this.carObject.cart_list[index]);
            cart_uids += this.carObject.cart_list[index].uid + ",";
            price += parseInt(this.carObject.cart_list[index].ori_price * this.carObject.cart_list[index].cart_num)
          }
        });
        this.payApi(cart_uids,price,this.checkedArr[0])
        console.log(cart_uids);
      }
    },

    //pay API 函数
    payApi(cart_uids,amount,item) {
      this.$api.shop
        .parCarGoods({
          cart_uids,
          token: this.$store.state.token.token
        })
        .then(res => {
          console.log(res);
          this.$router.push({
            name: "pay",
            params: {
              amount,
              item
            }
          });
        })
        .catch(err => {
          console.log(err.response);
        });
    },

    // 进入详情页
    detailed(item) {
      this.$router.push({
        path: "/shop/commodity_detailed",
        query: {
          uid: item.g_uid,
          supid: item.supplier_id
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  padding-bottom: 0.45rem;
  .van-radio-group{
    margin-right: 0.3rem;
  }
  .list {
    padding: 0.2rem 0 0 0;
    /deep/ .van-swipe-cell__right {
      display: flex;
      align-items: flex-end;
      padding-left: 0.2rem;
    }
    .item {
      margin-bottom: 0.8rem;
      .shop-name {
        display: flex;
        align-items: center;
        font-size: 0.3rem;
        .van-icon:last-child{
          margin-left: .1rem;
        }
      }

      .center {
        padding-top: 0.2rem;
        margin-bottom: 0.2rem;
        display: flex;
        align-items: flex-start;
      }
      .left {
        display: flex;
        align-items: center;
        img {
          border-radius: 0.05rem;
          width: 1.72rem;
          height: 1.72rem;
          margin-right: 0.3rem;
        }
        
      }
      .right {
        display: flex;
        flex-direction: column;
        font-size: 0.24rem;
        flex: 1;
        height: 1.72rem;
        .title {
          font-size: 0.27rem;
          margin-bottom: 0.05rem;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .screen {
          font-size: 0.2rem;
          margin: 0rem 0;
          color: #777;
          div {
            padding: 0rem 0.1rem;
            background: #f7f7f7;
            display: inline-block;
            border-radius: 1rem;
          }
        }
        .tips {
          font-size: 0.2rem;
          color: #c3ab87;
          margin: 0.05rem 0;
        }
        .price {
          display: flex;
          align-items: center;
          margin-top: auto;
          justify-content: space-between;
          .price-t {
            font-size: 0.3rem;
            color: #c3ab87;
          }
          /deep/ .van-stepper__minus,
          /deep/ .van-stepper__plus {
            width: 0.4rem;
            height: 0.4rem;
          }
          /deep/ .van-stepper__input {
            width: 0.45rem;
            height: 0.4rem;
          }
        }
      }
    }
    .item:last-child {
      margin-bottom: 0;
    }
  }
  .no-car-tips {
    color: #777;
    font-size: 0.27rem;
    text-align: center;
    margin-top: 2rem;
  }
}
.fix-bottom {
  position: fixed;
  bottom: 0;
  // padding: 0 .45rem;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0.2rem 0.45rem;
  background: #fff;
  box-shadow: 0 -0.1rem 0.1rem 0.1rem #f0f0f0;
  .left {
    font-size: 0.24rem;
    display: flex;
    align-items: center;
    flex: 1;
    .check {
      margin-left: 0.1rem;
    }
    div {
      display: flex;
    }
    span {
      font-size: 0.27rem;
      display: block;
    }
    .amount {
      margin-left: 0.1rem;
      span {
        color: #c3ab87;
      }
    }
  }
  .right {
    display: flex;
    div {
      padding: 0 0.4rem;
      border-radius: 1rem;
      border: 1px solid #f7f7f7;
      font-size: 0.27rem;
      padding: 0.15rem 0.5rem;
    }
    .pay {
      background: #c3ab87;
      color: #fff;
      margin-left: 0.05rem;
    }
  }
}
</style>