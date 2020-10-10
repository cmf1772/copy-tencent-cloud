<template>
  <div class="pageToast">
    <div class="listEmpty" v-if="this.type==1">没有找到相关信息,空空如也~</div>
    <div class="pageLoading flex-center-y flex-center-x" v-if="this.type==2">
      <span class="icon iconfont icon-jiazai"></span>正在拉取数据...
    </div>
    <div class="netError" v-if="this.type==3">服务器出问题啦，尝试下拉刷新~</div>
    <div class="notLogin" v-if="this.type==4">
      您还未登录，想要获取更多信息
      <a href="/loginEnter">点击登录</a>
    </div>
    <div class="noresponse" v-if="this.type==5">服务器崩溃啦,工程师正则抢修~</div>
    <div class="noNet" v-if="this.type==6">断网啦，请检查您的网络后，尝试刷新页面~</div>
    <div class="listEmptysmall" v-if="this.type==7">没有找到相关信息,空空如也~</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: 0
    };
  },
};
</script>
<style>
.listEmpty{font-size:15px;text-align:center;padding-top:180px;background:url("~@/assets/images/empty_data.png") no-repeat center top;background-size:auto 155px;height:100%;margin-top:1rem;float: left;width:100%;opacity:0.3;}
.listEmptysmall{font-size:14px;text-align:center;padding-top:80px;background:url("~@/assets/images/empty_data.png") no-repeat center top;background-size:auto 80px;height:100%;width:100%;margin:0.3rem auto;color:#999;}
.pageLoading{text-align:center;line-height:30px;font-size:14px;color:#999;padding:30px 0;}
.pageLoading span{display: inline-block;width:30px;height:30px;margin-right:5px;font-size:24px;animation: rotate 1s linear infinite;}
.netError{text-align:center;line-height:30px;font-size:14px;color:#999;padding:30px 0;}
.notLogin{text-align:center;line-height:30px;font-size:14px;color:#999;padding:30px 0;}
.notLogin a{display:inline;color:#2F9DFF;margin-right:3px;}
.noresponse{text-align:center;line-height:30px;font-size:14px;color:#999;padding:30px 0;}
.noNet{text-align:center;line-height:30px;font-size:14px;color:#999;padding:30px 0;}
@keyframes rotate{from{transform:rotate(0deg);}
to{transform:rotate(360deg);}}
</style>