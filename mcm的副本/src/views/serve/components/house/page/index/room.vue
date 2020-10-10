<template>
  <div class="main">
    <!-- toubu  -->
    <div class="top">
      <van-nav-bar left-arrow title="整房" right-text="按钮" @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
          <img src="@/assets/images/icon/index/jiao.png" style="width:.4rem;height:auto" />
           <img src="@/assets/images/icon/index/speak.png" style="margin-left:.5rem" />
        </template>
      </van-nav-bar>
    </div>
    <div class="search-s">
      <search></search>
    </div>

    <div class="container">
      <div class="screen">
        <div>
          全苏州
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          租金
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          户型
          <i class="iconfont icon-down"></i>
        </div>
        <div>
          筛选
          <i class="iconfont icon-down"></i>
        </div>
      </div>
      <div class="btn-l-s">
        <div class="active">个人</div>
        <div>安逸</div>
        <div>有阳台</div>
        <div>精装修</div>
      </div>
      <div class="c-list">
          <div class="item" v-for="(item,index) in 15" :key="index" @click="detailed">
            <div class="img">
              <img src="@/assets/images/index/banner1.jpg" />
              <div class="shop-tip pp">品牌</div>
            </div>
            <div class="center">
              <div class="name">
                <span class="mode">整租</span>
                <div class="h-name">时代花园 三室一厅一卫一厨啊啊啊啊啊啊啊啊</div>
              </div>
              <div class="adress">
                <span>三室次卧·40m²</span>
                <span>苏州中心</span>
              </div>
              <div class="adv-list">
                <div>配套齐全</div>
                <div>南北通透</div>
                <div>普通装修</div>
              </div>
              <div class="foot">
                <div class="local">
                 <img src="@/assets/images/icon/serve/house/locals.png" style="width:.19rem;margin-right:.05rem" alt=""> 虹桥路120号
                </div>
                <div class="price">
                  ￥
                  <span>199</span>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  components: { search },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    detailed(){
      this.$router.push({
        path: "/serve/house/whole-room/detailed"
      })
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  // 筛选
  .screen {
    margin: 0.2rem 0;
    font-size: 0.28rem;
    display: flex;
    justify-content: space-between;
    i {
      display: initial;
      font-size: 0.2rem;
    }
  }

  // 按钮筛选
  .btn-l-s {
    display: flex;
    padding: .3rem 0;
    div {
      margin-right: 0.2rem;
      font-size: 0.24rem;
      color: #777;
      padding: 0.13rem 0.4rem;
      border-radius: 1rem;
      background: #f7f7f7;
    }
    .active {
      color: #c3ab87;
      border: #c3ab87 solid 1px;
      background: #f9f6f3;
    }
  }

  //列表
  .c-list {
      
      .item:not(:last-child){
        border-bottom: 1px solid #efefef;
      }
      .item {
        padding:.42rem 0 ;
        
        display: flex;
        .shop-tip {
            position: absolute;
            padding: 0.05rem 0.2rem;
            left: 0.2rem;
            height: 0.35rem;
            top: 0.0rem;
            padding-top: 0;
            padding-bottom: 0.1rem;
            display: flex;
            align-items: center;
            transform: translate(0, -20%);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            font-size: 0.18rem;
            color: #fff;
            // background-image: url(../../../../../../assets/images/icon/shop/index/fuwu.png) !important;
          }
          .jx {
            background-image: url(../../../../../../assets/images/icon/shop/index/xingxuan.png) !important;
          }
          .xd {
            background-image: url(../../../../../../assets/images/icon/shop/index/xindian.png) !important;
          }
          .fw {
            background-image: url(../../../../../../assets/images/icon/shop/index/fuwu.png) !important;
          }
          .pp {
            background-image: url(../../../../../../assets/images/icon/shop/index/pingpai.png) !important;
          }
        .img {
          position: relative;
          img {
            width: 2.25rem;
            height: 2.25rem;
            border-radius: 0.03rem;
          }
        }
        .center {
          display: flex;
          padding-left: 0.3rem;
          flex-direction: column;
          .name {
            display: flex;
            align-items: center;
            font-size: 0.3rem;
            .h-name {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
            }
            .mode{
              flex: 1;
              min-width: .6rem;
              margin-right: 0.2rem;
              position: relative;
              &::after{
                content:'';
                position: absolute;
                width: 1px;
                height: 80%;
                right: -0.09rem;
                top: 50%;
                transform: translate(0,-50%);
                background: #ddd;
              }
            }
          }
          .adress{
            display: flex;
            font-size: .24rem;
            margin: .08rem 0 .12rem 0;
            color: #777;
            span{
              margin-right: 0.15rem;
            }
          }
          .adv-list{
            display: flex;
            font-size: .2rem;
            div{
              background: #f7f7f7;
              border-radius: 1rem;
              padding: 0rem .15rem;
              margin-right: 0.05rem;
              color: #777;
            }
          }
          .foot{
            display: flex;
            justify-content: space-between;
            margin-top: auto;
            align-items: center;
            font-size: .2rem;
            .local{
              display: flex;
              align-items: center;
              color: #777;
            }
            .price{
              color: #C6B08E;
              span{
                font-size: .39rem;
              }
            }
          }
        }
      }
    }
}
.search-s {
  padding: 0.2rem .45rem;
}
.top {
  .van-icon {
    margin-left: 0.2rem;
  }
  /deep/ .van-nav-bar__text {
    color: #000;
    font-size: 0.28rem;
    font-weight: 600;
  }
}
</style>