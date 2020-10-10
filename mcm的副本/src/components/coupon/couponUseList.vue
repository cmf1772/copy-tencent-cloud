<template>
  <div class="docbox">
    <div
      class="mask"
      :class="{ open: isDocOpen }"
      @click="docToggleOpen()"
    ></div>
    <div class="doc" :class="{ open: isDocOpen }">
      <span @click="docToggleOpen()" class="close iconfont icon-guanbi"></span>
      <div class="title">我的优惠券(未使用{{ countNoUseCount }}张)</div>
      <div class="docbox">
        <div class="content">
          <pageToast ref="pageToast"></pageToast>
          <ul>
            <li
              class="couponlist"
              v-for="(item, index) in list"
              :key="index"
              :class="'coupon_user_' + item.coupon_state"
              @click="getOneConpon(item)"
            >
              <div class="box1" :class="'bg'+item.coupon_type+' coupon_from_'+item.from">
                <p>
                  <em class="moneys">
                    <span>¥</span>
                    {{ $fmtMoney(item.price) }}
                  </em>
                </p>
                <p class="txt">{{ $couponFmt(item.coupon_type).title }}</p>
              </div>
              <div class="box2">
                <p class="p1">No.{{ item.number }}</p>
                <p class="p2">{{ $couponFmt(item.coupon_type).intro }}</p>
                <p class="p3">
                  <span>{{ $couponFmt(item.coupon_type).means }}</span>
                  <span class="created">{{$friendlytime(item.created)}}</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDocOpen: false,
      list: [],
      selectedCouponId:0,
      countNoUseCount: 0,
    };
  },
  mounted() {
    this.getUserCouponList();
  },
  props: {
    selectedGoodsId: {
      default: 0,
    },
  },
  methods: {
    //唤起
    docToggleOpen() {
      this.isDocOpen = !this.isDocOpen;
    },
    //点击使用健康卡信息
    getOneConpon(item) {
      let _this = this;
      let obj = new Object();
      if (item["coupon_type"] > this.selectedGoodsId) {
        this.$toast(
          "该券不能抵扣当前的防癌检测方案，您选择的健康卡仅：" +
            this.$couponFmt(item.coupon_type).means
        );
        return false;
      }
      if (item["coupon_type"] == this.selectedGoodsId) {
        _this.$dailog
          .confirm({
            title: "健康卡使用提醒",
            message:
              "尊敬的客户，您选择的健康卡面值等于您所选择防癌检测方案的价格，不能享受其他健康卡赠送券，是否确认继续？",
          })
          .then(() => {
            obj["coupon_id"] = item["id"];
            obj["coupon_price"] = item["price"];
            obj["coupon_title"] = this.$couponFmt(item.coupon_type).title;
            _this.selectedCouponId=item["id"];
            this.$emit("checkcoupon", obj);
            this.docToggleOpen();
          });
      } else {
        obj["coupon_id"] = item["id"];
        obj["coupon_price"] = item["price"];
        obj["coupon_title"] = this.$couponFmt(item.coupon_type).title;
        _this.selectedCouponId=item["id"];
        this.$emit("checkcoupon", obj);
        this.docToggleOpen();
      }
    },
    //读取健康卡信息
    getUserCouponList() {
      let _this = this;
      _this.$refs.pageToast.type = 2;
      _this.$api
        .getUserCouponList({
          use_platform: 1,
          coupon_state: 200,
        })
        .then(res => {
          _this.countNoUseCount = res.count.nousecount;
          this.$emit("soncounpon", res.count.nousecount);
          if (res.code == 0) {
            if (res.data.length > 0) {
              _this.$refs.pageToast.type = 0;
              this.list = res.data;
            } else {
              _this.$refs.pageToast.type = 7;
            }
          } else {
            _this.$refs.pageToast.type = 3;
          }
        });
    },
  },
};
</script>
<style scoped lang="scss">
.docbox{z-index:100;position: relative;}
.docbox .mask{position:fixed;width:100%;height:100%;left:0;top:0;background: rgba(0,0,0,0.5);z-index:10;display:none;}
.docbox .mask.open{display:block;}
.docbox .doc{position:fixed;width:100%;left:0;bottom:0;transform: translateY(100%);-webkit-transform: translateY(100%);transition: all .3s ease; -webkit-transition: all .3s ease;z-index:11;}
.docbox .doc.open{transition: all .3s ease; -webkit-transition: all .3s ease;transform: translateY(0);-webkit-transform: translateY(0);}
.docbox .doc .docbox{background:#fff;width:100%;bottom:0;overflow-y:auto;border-radius:5px 5px 0 0;}
.docbox .doc .title{font-size:14px;text-align:center;border-bottom:0.5px solid #eee;height:50px;line-height:50px;position:absolute;left:0;top:0;width:100%;z-index:101;background:#fff;border-radius:5px 5px 0 0;}
.docbox .doc .close{display:block;width:40px;height:40px;position: absolute;right:10px;top:5px;z-index:102;line-height:40px;text-align:center;font-size:16px;color:#999;}
.docbox .doc .content{padding:50px 10px 10px 10px;max-height:500px; overflow-y: auto;-webkit-overflow-scrolling: touch; }
.docbox .doc .created{float:right;color:#999;background:none;}
</style>
