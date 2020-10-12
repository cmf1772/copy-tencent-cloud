<template>
  <div class="top">
      <van-nav-bar
        left-arrow
        right-text="草稿箱"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
      <template #right>
        <img src="@/assets/images/icon/index/bao.png" />
      </template>
      <template #left>
        <img src="@/assets/images/icon/index/arrow.png" />
      </template>
      <template #title>
        <div class="center">
          <span>相册</span>
          <div><p>19相册</p><p>1365照片</p></div>
        </div>
      </template>
      </van-nav-bar>
    </div>
</template>

<script>
export default {
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.top{
  /deep/ .van-nav-bar__title{
    height: 100%;
  }
  /deep/ .center{
    display: flex;
    flex-direction: column;
    line-height: .32rem;
    justify-content: center;
    height: 100%;
    align-items: center;
    span{
      font-size: .34rem;
      font-weight: 600;
    }
    div{
      font-weight: 500 !important;
      display: flex;
      margin-top: 0.05rem;
      p{
        color: #777;
        font-size: .2rem;
        margin: 0 .1rem;
      }
    }
  }
}
</style>