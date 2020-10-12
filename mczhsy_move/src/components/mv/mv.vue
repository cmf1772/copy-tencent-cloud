<template> 
<div class="mvmain" v-if="isDocOpen">
    <div class="videobox flex-center">
	<span @click="docToggleOpen()" class="close iconfont icon-guanbi"></span>
     <video controls="controls" autoplay="autoplay" poster="@/assets/images/mv.png"  webkit-playsinline='true' playsinline='true' x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-ignore-metadata='true' >       
      <source src="http://img.lvzhiyuan666.cn/mv.mp4" type="video/mp4">       
      <object data="http://img.lvzhiyuan666.cn/mv.mp4" width="">
      <embed src="http://img.lvzhiyuan666.cn/mv.mp4" width=""></object>   
     </video>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
	  isDocOpen: false,
    };
  },
  methods: {
	docToggleOpen() {
      this.isDocOpen = !this.isDocOpen;
    }
  }
};
</script>
<style scoped lang="scss">
.mvmain{position: relative;z-index: 1002;}
.mvmain .close{display:block;width:40px;height:40px;position: absolute;right:10px;top:5px;z-index:102;line-height:40px;text-align:center;font-size:16px;color:#fff;background:#000;border-radius:50%;}
.videobox{position:fixed;width:100%;height:100%;left:0;top:0;background: rgba(0,0,0,0.6);}
 video{width:95%;}
</style>
