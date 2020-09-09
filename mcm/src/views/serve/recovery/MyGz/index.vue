<template>
  <div class="index">
    <div class="top">
      <van-nav-bar title="回收柜列表"
                   left-text
                   left-arrow
                   @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <div class="itemList">
        <div class="left">
          <van-icon name="location"
                    color='#cccccc'
                    style="font-size: 0.18rem; margin-right: 0.24rem;" />
          <div>
            <p>P05250566</p>
            <span>北京市朝阳区呼家楼8号院1号回收机</span>
          </div>
        </div>
        <div class="right">
          <div class="bottom"
               @click="setting">
            设置
          </div>
          <!-- <p>审核中</p> -->
        </div>
      </div>
      <div class="itemList">
        <div class="left">
          <van-icon name="location"
                    color='#cccccc'
                    style="font-size: 0.18rem; margin-right: 0.24rem; " />
          <div>
            <p>P05250566</p>
            <span>北京市朝阳区呼家楼8号院1号回收机</span>
          </div>
        </div>
        <div class="right">
          <p>审核中</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="botton">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },

    setting () {
      this.$router.push('/serve/recovery/gzSetUp')
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.45rem;
  .itemList {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.35rem;
    border-bottom: solid 0.01rem #f1f1f1;
    .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        font-size: 0.3rem;
        font-family: PingFang SC;
        color: #000000;
        line-height: 0.48rem;
        > span {
          color: #9c9c9c;
        }
      }
    }
    .right {
      .bottom {
        width: 0.84rem;
        height: 0.36rem;
        border: 1px solid #c4ac88;
        border-radius: 0.18rem;
        line-height: 0.36rem;
        text-align: center;

        font-size: 0.21rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #c4ac88;
      }
      > p {
        font-size: 0.21rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #030303;
      }
    }
  }
}
</style>