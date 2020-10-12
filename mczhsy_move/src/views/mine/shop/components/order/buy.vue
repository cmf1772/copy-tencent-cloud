<template>
  <div class="wrapper">
    <div class="list">
      <div class="item" v-for="(item,index) in 20 " :key="index">
        <div class="user">
          <div class="info-user">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="name">正道</div>
          </div>
          <div class="status">交易成功</div>
        </div>
        <div class="value">
          <div class="img">
            <img src="@/assets/images/magazine/index/food/16B1B387D97.jpg" />
          </div>
          <div class="center">
            <div class="title">翡翠玻璃种无暇无裂戒子-18k黄金钻石翡翠玛瑙懂啊懂啊呜呜呜</div>

            <div class="amount">
              实付款￥
              <span>1999</span>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="f-left">
            <img src="@/assets/images/icon/mine/shop/concat.png" style="width:.29rem;margin-right:.1rem" />联系卖家
          </div>
          <div class="f-right">
            <div class="btn-list">
              <div @click="release">评价</div>
              <div>
                <van-icon name="ellipsis" size=".32rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    release() {
      this.$router.push({
        path: "/mine/small_shop/evaluate/release",
      });
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  .list {
    padding: .3rem 0;
    .item:not(:last-child) {
      padding-bottom: 0.42rem;
      border-bottom: 1px solid #eee;
    }
    .item:not(:first-child) {
      padding-top: 0.42rem;
    }
    .item {
      display: flex;
      flex-direction: column;
      .user {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 0.2rem;
        .info-user {
          display: flex;
          align-items: center;
          .icon {
            img {
              width: 0.6rem;
              height: 0.6rem;
              // border-radius: 1rem;
            }
          }
          .name {
            font-size: 0.3rem;
            font-weight: bold;
            margin-left: 0.1rem;
          }
        }
        .status {
          color: #c3ab87;
          font-size: 0.24rem;
        }
      }

      .foot {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.24rem;
        padding: 0.2rem 0;
        padding-bottom: 0;
        .f-left {
          display: flex;
          align-items: center;
          .van-icon {
            margin-right: 0.05rem;
          }
        }
        .btn-list {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          div {
            margin-left: 0.2rem;
            padding: 0.05rem 0.25rem;
            border: 1px solid #efefef;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          // div:first-child {
          //   color: #777;
          // }
          div:last-child {
            width: 0.4rem;
            padding: 0;
            height: 0.4rem;
            padding: 0.05rem;

            border-radius: 1rem;
          }
        }
      }
      .value {
        display: flex;
        .center {
          padding-left: 0.3rem;
          display: flex;
          flex-direction: column;
          .amount {
            margin-top: auto;
            font-size: 0.2rem;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            span {
              font-size: 0.28rem;
            }
          }
          .title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.3rem;
            -webkit-box-orient: vertical;
          }
        }
        .img {
          img {
            width: 1.91rem;
            height: 1.91rem;
            border-radius: 0.05rem;
          }
        }
      }
    }
  }
}
</style>