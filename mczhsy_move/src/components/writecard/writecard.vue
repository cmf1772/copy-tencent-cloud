<template>
  <div class="writecard" :class="{ open: isDocOpen }">
    <div class="writecardbody">
      <div class="head">
        <span class="s1" @click="docToggleOpen()">
          <font class="icon-fanhui iconfont"></font>
        </span>
        <span class="s2">输入持有的健康卡卡号</span>
      </div>
      <div class="writecardbox">
        <dl class="card">
          <dd @click="getCardetailed()">立即查询</dd>
          <dt>
            <input
              type="tel"
              class="text"
              placeholder="请输入您持有的健康卡卡号"
              maxlength="20"
              v-model="number"
              @input="changeisresult()"
            />
          </dt>
        </dl>
        <div class="contentbox">
          <!--健康卡信息-->
          <div class="contentbox1" v-if="isresult">
            <div class="toGreet">
              <div class="txt3">健康卡卡信息</div>
            </div>
            <div class="orderintro">
              <div class="li">
                <div class="s1 span">健康卡卡号</div>
                <div class="s2 span">{{cardetailed.number}}</div>
              </div>
              <div class="li">
                <div class="s1 span">健康卡名称</div>
                <div class="s2 span">{{cardetailed.card_name}}</div>
              </div>
              <div class="li">
                <div class="s1 span">可抵扣金额</div>
                <div class="s2 span">
                  <em class="money">
                    {{ $fmtMoney(cardetailed.card_price) }}
                    <span>¥</span>
                  </em>
                </div>
              </div>
              <div class="li">
                <div class="s1 span">发行时间</div>
                <div class="s2 span">{{$friendlytime(cardetailed.created)}}</div>
              </div>
            </div>
            <div class="btnbox flex-center">
              <span class="btn" @click="usercard()">立即使用</span>
              <span class="btn bg-grey" @click="docToggleOpen()">放弃使用</span>
            </div>
          </div>
          <!--健康卡信息 end-->

          <!--健康卡信息提示-->
          <div class="contentbox2" v-if="!isresult">{{hint}}</div>
          <!--健康卡信息提示 end-->
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
      isresult: false,
      cardetailed: {},
      number: "",
      hint: "请在上方输入框中输入健康卡卡号,获取健康卡信息"
    };
  },
  methods: {
    //开启关闭
    docToggleOpen() {
      this.isDocOpen = !this.isDocOpen;
    },
    //查询卡详情
    getCardetailed() {
      this.number=this.$trim(this.number);
      if (this.$valid(this.number,/^\d{8,20}$/)) {
        this.$toast("请输入正确的卡号，只能是8-20位的数字");
        return false;
      };

      const loading = this.$toast.loading({
        duration: 0,
        message: "正在验证卡信息，请稍等...",
        forbidClick: true
      });
      this.$api
        .getCardetailed({
          number: this.number
        })
        .then(res => {
          loading.clear();
          (this.isresult = true), (this.cardetailed = res.data);
        });
    },
    //查询卡详情
    usercard() {
      this.number=this.$trim(this.number);
      const loading = this.$toast.loading({
        duration: 0,
        message: "正在处理健康卡信息，请稍后...",
        forbidClick: true
      });
      this.$api
        .usercard({
          number: this.number
        })
        .then(res => {
          loading.clear();
          this.$toast("健康卡使用成功，请关注抵扣价格");
          this.$emit("getUsercard", this.cardetailed);
          this.isDocOpen=false;
          this.isresult = true;
        });
    },
    //改变显示状态
    changeisresult() {
      this.isresult = false;
    }
  }
};
</script>
<style scoped lang="scss">
.writecard .head{color:#fff;text-align:center;position: relative;height:0.8rem;line-height:0.8rem;}
.writecard .head .s1{position: absolute;display:block;height:0.8rem;line-height:0.8rem;padding:0 10px;}
.writecard .head .s1 font{font-size:0.24rem !important;display:block;height:0.8rem;line-height:0.8rem;}
.writecard .head .s2{font-size:0.3rem;height:0.8rem;line-height:0.8rem;display: block;font-weight:700;}
.writecard{position:fixed;width:100%;height:100%;left:0;top:0;background:#0081ff;z-index:2003;transition: all .3s ease; -webkit-transition: all .3s ease;transform: translateX(-100%);-webkit-transform: translateX(-100%);}
.writecard.open{display:block;transition: all .3s ease; -webkit-transition: all .3s ease;transform: translateX(0);-webkit-transform: translateX(0);}
.writecard .flex-center{width:100%;height:100%;}
.writecardbox{width:95%;background:#fff;height: calc(100vh - 1rem);border-radius:3px;overflow: hidden;position: relative;margin: 0 auto;}
.writecardbox .head2{height:50px;background:#F9F9F9;font-size:16px;line-height:50px;color:#0081ff;padding:0 10px;position: absolute;left:0;top:0;width:100%;box-sizing:border-box;z-index:1;}
.writecardbox .head2 .iconfont{font-size:20px;margin-right:4px;position: relative;top:1px}
.writecardbox .head2 em{float:right;font-size:20px}
.contentbox{box-shadow: 0 0 3px rgba(0, 0, 0, 0.08);} 
.card{margin:30px 10px;height:40px;}
.card dt{margin-right:80px;height:40px;border:1px solid #eee;border-right:none;padding:5px 0;}
.card dt input.text{width:100%;height:38px;line-height:38px;font-size:16px;font-weight:700;padding:0 10px;box-sizing: border-box;background:transparent;}
.card dd{float: right;width:80px;height:52px;background:#0081ff;border-radius:0 5px 5px 0;font-size:14px;font-weight:700;line-height:52px;color:#fff;text-align:center;}
.btnbox{text-align:center;overflow: hidden;padding:0 0 20px 0;}
.btnbox .btn{width:100px;padding: 6px 15px;}
.contentbox2{font-size:14px;text-align:center;color:#999;padding:20px 0;}
.contentbox{min-height:50px;}
</style>









