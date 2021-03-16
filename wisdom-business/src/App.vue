<template>
  <div id="app"
       style="overflow: auto">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("./assets/clear.scss");

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
 ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    background-color: #f5f5f5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #fff;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.7);
    background-color: #aaa;
}

</style>
