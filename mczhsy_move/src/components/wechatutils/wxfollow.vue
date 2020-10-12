<template>
    <van-popup v-model="wxfollow" :round="true" :lock-scroll="true">
      <div class="docbox">
       <span @click="close()" class="close iconfont icon-guanbi"></span>
       <div class="title">关注并绑定手机进度实时通知</div>
       <div class="imgbox flex-center">
        <div class="img">
          <div class="i">
            <img src="@/assets/images/qrcode.png"/>
          </div>
          <p>关注后可以查看自己账户信息，接收订单通知！</p>
          <div class="txt flex-center"><font class="iconfont icon-saoma"></font>打开微信，扫一扫</div>
        </div>
      </div>
      </div>
    </van-popup>
</template>

<script>
export default {
  data() {
    return {
      wxfollow:false
    };
  },
  methods: {
    close(){
      this.wxfollow=false;
    }
  }
};
</script>

<style scoped lang="scss">
.docbox{width:300px;background:#fff;border-radius:5px !important;overflow:hidden;}
.docbox .title{font-size:16px;text-align:center;border-bottom:0.5px solid #eee;height:50px;line-height:50px;width:100%;z-index:101;background:#fff;font-weight:700;border-radius:5px 5px 0 0;}
.docbox .close{display:block;width:40px;height:40px;position: absolute;right:10px;top:5px;z-index:102;line-height:40px;text-align:center;font-size:16px;color:#999;}
.docbox .imgbox{padding:20px 0;}
.docbox .imgbox .img{width:200px;position: relative;}
.docbox .imgbox .img .i{height:200px;background: #eee;width:200px;border:1px solid #f5f5f5;}
.docbox .imgbox .img .i img{width:100%;}
.docbox .imgbox .img .txt{text-align:center;font-size:18px;line-height:30px;padding-top:20px;}
.docbox .imgbox .img p{font-size:12px;margin-top:4px;}
.docbox .img .txt font{font-size:24px;color:#2BAD67;margin-right:10px;}
</style>
