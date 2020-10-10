<template>
  <div class="paybox"
       :class="{open:isDocOpen}">
    <div class="payboxbody">
      <div class="head">
        <span class="s1"
              @click="docToggleOpen()">
          <font class="icon-fanhui iconfont"></font>
        </span>
        <span class="s2">收款码</span>
      </div>
      <div class="paycontent">
        <div class="head2">
          <span class="iconfont icon-saoma"></span>
          <span>向恩贝尔付款</span>
          <em class="money"><span>¥</span> {{ $fmtMoney(this.pay_price) }} </em>
        </div>
        <div class="imgbox flex-center">
          <div class="img">
            <div class="i">
              <span class="isScanPaySuccess icon-chenggong iconfont"
                    v-if="isScanPaySuccess"></span>
              <img :src="this.pay_qrcode" />
            </div>
            <div class="txt flex-center">
              <font class="iconfont icon-wxpay"></font>打开微信，扫一扫
            </div>
          </div>
        </div>
        <div class="foot">
          <p>{{this.pay_title}}</p>
          <p class="p2">No.{{this.pay_open_ordernumber}}</p>
          <p class="p2">支付成功后工作人员将会帮助您完成采血服务</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pay_qrcode: "",
      pay_title: "",
      pay_price: 0,
      pay_open_ordernumber: "",
      isDocOpen: false,
      isScanPaySuccess: false
    };
  },
  mounted () { },
  methods: {
    //查看协议
    docToggleOpen () {
      this.isDocOpen = !this.isDocOpen;
    }
  },
};
</script>
<style scoped lang="scss">
.paybox .head {
  color: #fff;
  text-align: center;
  position: relative;
  height: 0.8rem;
  line-height: 0.8rem;
}
.paybox .head .s1 {
  font-size: 0.22rem;
  position: absolute;
  display: block;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 10px;
}
.paybox .head .s1 font {
  font-size: 0.24rem !important;
  display: block;
  height: 0.8rem;
  line-height: 0.8rem;
}
.paybox .head .s2 {
  font-size: 0.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  display: block;
  font-weight: 700;
}
.paybox {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #2bad67;
  z-index: 102;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  transform: translateX(-100%);
  -webkit-transform: translateX(-100%);
}
.paybox.open {
  display: block;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  transform: translateX(0);
  -webkit-transform: translateX(0);
}
.paybox .flex-center {
  width: 100%;
  height: 100%;
}
.paybox .paycontent {
  width: 95%;
  background: #fff;
  height: calc(100vh - 1rem);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  margin: 0 auto;
}
.paybox .paycontent {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  z-index: 11;
}
.paybox .paycontent .head2 {
  height: 50px;
  background: #f9f9f9;
  font-size: 16px;
  line-height: 50px;
  color: #2bad67;
  padding: 0 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
}
.paybox .paycontent .head2 .iconfont {
  font-size: 20px;
  margin-right: 4px;
  position: relative;
  top: 1px;
}
.paybox .paycontent .head2 em {
  float: right;
  font-size: 20px;
}
.paybox .paycontent .imgbox {
  height: 100%;
  width: 100%;
}
.paybox .paycontent .imgbox .img {
  width: 250px;
  position: relative;
}
.paybox .paycontent .imgbox .img .i {
  height: 250px;
  background: #eee;
  width: 250px;
}
.paybox .paycontent .imgbox .img .i img {
  width: 100%;
}
.paybox .paycontent .imgbox .img .txt {
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  padding-top: 20px;
}
.paybox .paycontent .imgbox .img .txt font {
  font-size: 24px;
  color: #2bad67;
  margin-right: 10px;
}
.foot {
  color: #fff;
  padding: 10px 15px;
  position: absolute;
  z-index: 10;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  background: #f9f9f9;
}
.foot p {
  font-size: 14px;
  color: #333;
  width: 100%;
  font-weight: 700;
}
.foot .p2 {
  font-size: 12px;
  color: #aaa;
  font-weight: normal;
  margin-top: 4px;
}
.isScanPaySuccess {
  width: 250px;
  height: 250px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: rgba(255, 255, 255, 0.4);
  text-align: center;
  line-height: 250px;
  color: #2bad67;
  font-size: 50px;
}
</style>






