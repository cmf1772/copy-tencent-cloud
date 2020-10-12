<template>
  <div class="main">
    <div class="top" id="top">
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template #right>
          <img src="@/assets/images/icon/index/search2.png" />
          <img src="@/assets/images/icon/index/gouwuche2.png" style="margin-left:.5rem" alt="">
          <img src="@/assets/images/icon/index/star2.png" style="margin-left:.5rem"/>
          <img src="@/assets/images/icon/index/more.png" style="margin-left:.5rem;width:auto;height:.4rem"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="bg-t">
      <img src="@/assets/images/magazine/index/food/0137ae5a43798ca801206ed370fdb6.JPG@1280w_1l_2o_100sh.jpg" />
    </div>

    <div class="container">
      <div class="shopkeeper">
        <div class="more">
          <img src="@/assets/images/shop/shopkeeper.png" alt="">
        </div>
        <div class="name">彭城小帝国</div>
        <div class="advantage">
          <span>配送约30分钟</span>
          <span>西湖人气第二名</span>
          <span>急需退款</span>
        </div>
        <div class="tips">
          <span>公告:</span>[你的安全健康！德克士送餐可追踪安全，请放心使用]
        </div>
        <div class="s-foot">
          <div class="list-b">
            <div>减5元配送费</div>
            <div>15减3</div>
            <div>20减10</div>
            <div>50减20</div>
          </div>
          <van-icon name="arrow-down" size=".26rem" />
        </div>
      </div>
      <div class="title">
        <div class="t-list">
          <div class="active">点餐</div>
          <div>
            评价
            <span>2020</span>
          </div>
          <div>商家</div>
        </div>
        <div class="friend">好友拼单</div>
      </div>
      <div class="s-img">
        <img src="@/assets/images/shop/0ae31b06dcd2a3dc3da5c2bab9c4756154d9ef0a3b98a-WlVNMq_fw658.jpg" />
      </div>

      <div class="sub-title">
        <div>
          <van-icon name="fire" size=".36rem" color="#c3ab87" />热销
        </div>
        <span>热销</span>
      </div>

      <div class="screen">
        <van-tree-select
          :items="items"
          height="calc(100vh - 90px)"
          :active-id.sync="activeId"
          :main-active-index.sync="activeIndex"
          @click-item="onNavClick"
        >
          <template #content>
            <div class="content">
              <div class="item" v-for="(i,j) in 15" :key="j">
                <div class="img">
                  <img src="@/assets/images/magazine/index/food/16B1B3891B5.jpg" />
                </div>
                <div class="center">
                  <div class="c-title">优质双人火锅</div>
                  <div class="j-list">
                    <div>辣</div>
                    <div>鸡腿肉</div>
                    <div>面包片</div>
                  </div>
                  <div class="month">
                    <div>月瘦463</div>
                    <div>赞22</div>
                  </div>
                  <div class="foot">
                    <div class="price">
                      ￥
                      <span>25</span>
                    </div>
                    <van-icon name="plus" size=".32rem" />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </van-tree-select>
      </div>
    </div>
    <div class="fixed">
      <div class="f-tip">已减<span>2</span>元，再买0.22元减<span>20</span>元，<span>去抽单<van-icon name="arrow" size=".26rem"/></span></div>
      <div class="left">
        <img src="@/assets/images/icon/shop/index/listen1.png" alt="">
        <img src="@/assets/images/icon/shop/index/gouwuche.png" alt="">
      </div>
      <div class="right">
        <div class="f-price">
          <div class="ft">￥<span>55</span></div>
          <span>另需配送费5.5，支持支取</span>
        </div>
        <div @click="pay" class="pay">去结算</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "折扣",
          id: 1
        },
        {
          text: "店长推荐",
          id: 2
        },
        {
          text: "新品上架",
          id: 3
        },
        {
          text: "超值套餐",
          id: 4
        },
        {
          text: "爱吃饭",
          id: 5
        },
        {
          text: "提现小吃",
          id: 6
        },
        {
          text: "一桶美味",
          id: 7
        },
        {
          text: "悠闲下午",
          id: 8
        }
      ],
      activeId: 1,
      activeIndex: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onNavClick(data) {
      console.log(data);
    },
    pay() {
      this.$router.push({
        path: "/shop/outfood/order"
      });
    },
  }
};
</script>
<style lang="less" scoped>
//修改框架 样式 权重不够 所以嵌套深
.main {
  #top {
    position: relative;
    z-index: 9;
    .van-nav-bar {
      /deep/ img:not(last-child){
        width: 0.4rem;
        height: auto;
      }
      /deep/ .van-nav-bar__left {
        i {
          color: #fff;
        }
      }
      /deep/ .van-nav-bar__right {
        i {
          color: #fff;
        }
      }
      &::after {
        border: none;
      }
      background-color: transparent;
    }
  }
  .van-icon {
    margin-left: 0.2rem;
  }
}
.bg-t {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  img {
    width: 100%;
    height: 3.24rem;
  }
}
.container {
  padding-bottom: 90px;
  position: relative;
  margin-top: 1rem;
  z-index: 9;
  .shopkeeper {
    margin: 0 0.45rem;
    background: #fff;
    border-radius: 0.03rem;
    padding: 0.2rem;
    position: relative;
    box-shadow: 0 10px 10px 1px #eee;
    .more {
      position: absolute;
      top: 0;
      width: 1rem;
      height: 1rem;
      right: 0.2rem;
      transform: translate(0, -50%);
      z-index: 10;
      padding: 0.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 0.05rem;
      img{
        width: 100%;
      }
    }
    .name {
      font-size: 0.39rem;
      font-weight: 600;
    }
    .advantage {
      font-size: 0.24rem;
      display: flex;
      justify-content: space-between;
      margin-top: 0.15rem;
      color: #000;
    }
    .tips {
      font-size: 0.2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      color: #999;
      margin-top: 0.1rem;
      span {
        margin-right: 0.2rem;
      }
    }
    .s-foot {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.2rem 0;
      .list-b {
        div {
          border-radius: 1rem;
          padding: 0rem 0.1rem;
          border: 1px solid #c3ab87;
          margin-right: 0.1rem;
        }
        display: flex;
        font-size: 0.24rem;
        color: #c3ab87;
      }
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.45rem;

    margin-top: 0.5rem;
    .t-list {
      display: flex;
      .active {
        color: #000;
        margin-right: 0.4rem;
        position: relative;
        font-weight: 600;
        font-size: .36rem;
        margin-right: 0.8rem;
        &::after {
          position: absolute;
          content: "";
          width: 0.4rem;
          height: 2px;
          background: #c3ab87;
          bottom: -0.1rem;
          left: 50%;
          transform: translate(-50%, 0);
        }
      }
      div {
        display: flex;
        font-size: 0.34rem;
        margin-right: 0.3rem;
        color: #999;
        align-items: flex-end;
        span {
          font-size: 0.2rem;
          color: #999;
        }
      }
    }
    .friend {
      font-size: 0.21rem;
      width: 1.21rem;
      height: 0.48rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      background: #f8f5f0;
      color: #c3ab87;
      border: 1px solid #c3ab87;
    }
  }

  .s-img {
    padding: 0 .45rem;
    margin: 0.3rem 0;
    height: 2.4rem;
    display: flex;
    align-items: center;
    overflow: hidden;
     border-radius: 0.06rem;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
     
    }
  }

  .sub-title {
    display: flex;
    font-size: 0.28rem;
    padding: 0 .45rem;
    margin-bottom: 0.4rem;
    color: #999;
    .van-icon{
      margin-left: 0;
    }
    div {
      display: flex;
      align-items: center;
      margin-right: 0.4rem;
      color: #000;
      font-weight: 600;
    }
  }
  /deep/ .van-sidebar {
    width:2rem;
    text-align: center;
    flex: none;
  }
  /deep/ .van-sidebar-item--select{
    border-color: #c3ab87;
  }
  /deep/ .van-sidebar-item{
    font-size: .28rem;
    padding-right: 0;
  }
  /deep/ .content {
    padding: .2rem 0 0 .2rem;
    .item {
      display: flex;
      img {
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 0.06rem;
      }
      .center {
        flex: 1;
        padding-right: 0.22rem;
        display: flex;
        flex-direction: column;
        padding-left: 0.2rem;
        .c-title {
          font-size: 0.3rem;
        }
        .j-list {
          margin:.1rem 0;
          display: flex;
          div {
            padding: 0.02rem 0.05rem;
            border-radius: 1rem;
            font-size: 0.2rem;
            color: #777;
            margin-right: 0.2rem;
            background: #f3f3f3;
          }
        }
        .month{
          display: flex;
          div{
            color: #777;
            margin-right: 0.2rem;
            font-size: .2rem;
          }
        }
        .foot{
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          .price{
            font-size: .24rem;
            span{
              font-size: .36rem;
            }
            color: #c3ab87;
          }
        }
      }
    }
    .item:not(:last-child){
      margin-bottom: .3rem;
    }
  }
}
// 固定
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;
  display: flex;
  font-size: 0.24rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem .45rem;
  background: #fff;
  .f-tip{
    position: absolute;
    margin-left: -0.45rem;
    top: 0;
    transform: translate(0,-100%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F7F4EF;
    width: 100%;
    padding: .1rem 0;
    span{
      color: #c3ab87;
      display: flex;
      align-items: center;
    }
  }
  .left {
    img{
      height: 0.4rem;
      margin-right: 0.2rem;
    }
  }
 .left {
    padding-right: 0.3rem;
    position: relative;
    &::after{
      content:'';
      position: absolute;
      right: 0.25rem;
      top: 50%;
      background: #999;
      width: 1px;
      height: 80%;
      transform: translate(0,-50%);
    }
    .van-icon {
      margin-right: 0.2rem;
      margin-left: 0;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: space-between;
    .f-price{
      font-size: .2rem;
      >span{
          color: #777;
        }
      .ft{
        color: #c3ab87;
        span{
          font-size: .28rem;
        }
        
      }
    }
    .pay {
      width: 2.1rem;
      height: 0.87rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      background: #c3ab87;
      color: #fff;
      font-size: .3rem;
    }
  }
}
</style>