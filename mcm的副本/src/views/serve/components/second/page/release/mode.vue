<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="选择发布方式" @click-left="onClickLeft"></van-nav-bar>
    </div>
    <div class="container">
      <div class="list">
        <div class="item" @click="releaseHouse">
          <div class="icon">
            <img :src="imgList[0]" />
          </div>
          <div class="center">
            <div class="name">
              <div class="item-title">房东委托</div>
              <div class="value">委托给经济人，乐享便捷专业服务</div>
            </div>
            <van-icon name="arrow" color="#999" size=".32rem" />
          </div>
        </div>
        <div class="item" @click="releaseHouse">
          <div class="icon">
            <img :src="imgList[3]" />
          </div>
          <div class="center">
            <div class="name">
              <div class="item-title">房东直售</div>
              <div class="value">发布卖房贴，直接面向买房用户</div>
            </div>
            <van-icon name="arrow" color="#999" size=".32rem" />
          </div>
        </div>
        <div class="item" @click="releaseHouse">
          <div class="icon">
            <img :src="imgList[2]" />
          </div>
          <div class="center">
            <div class="name">
              <div class="item-title">经纪人发布</div>
              <div class="value">发布卖房贴，直接面向买房用户</div>
            </div>
            <van-icon name="arrow" color="#999" size=".32rem" />
          </div>
        </div>
      </div>
      <div class="tip">
        <div class="title">
          <van-icon name="info" color="#333" size=".26rem" />二手房发布须知
        </div>
        <p>·不可重复发布同一套房源</p>
        <p>·发布时请仔细阅读相关协议</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgList:[require("@/assets/images/icon/serve/house/img1.png"),
      require("@/assets/images/icon/serve/house/img2.png"),
      require("@/assets/images/icon/serve/house/img3.png"),
      require("@/assets/images/icon/serve/house/img4.png"),
      require("@/assets/images/icon/serve/house/img5.png"),
      ],
    }
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    releaseHouse(){
      this.$router.push({
        path: "/serve/second/release/detailed"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  .list {
    padding-bottom: 0.2rem;
  }
  .item {
    padding: 0.3rem 0;
    display: flex;
    .icon {
      img {
        width: 1.23rem;
        height: 1.23rem;
        border-radius: 1rem;
      }
    }
    .center {
      display: flex;
      flex: 1;
      padding-left: 0.2rem;
      justify-content: space-between;
      align-items: center;
      .name {
        display: flex;
        flex-direction: column;
        .item-title {
          font-size: 0.3rem;
          font-weight: 600;
          position: relative;
          display: flex;
          align-items: center;
          .new {
            transform: scale(0.8);
            color: #c3ab87;
            display: inline-table;
            align-items: center;
            background: #000;
            margin-left: 0.1rem;
            font-size: 0.2rem;
            padding: 0rem 0.06rem;
          }
        }
        .value {
          font-size: 0.24rem;
          color: #777;
          margin-top: 0.05rem;
        }
      }
    }
  }
  .tip {
    padding-top: 0.4rem;
    .title {
      display: flex;
      align-items: center;
      font-size: 0.24rem;
      margin-bottom: 0.2rem;
      .van-icon {
        margin-right: 0.1rem;
      }
    }
    p{
      font-size: .24rem;
      margin: 0 0 .05rem 0;
      color: #222;
    }
  }
}
</style>