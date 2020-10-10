<template>
  <div class="main">
    <div class="container">
      <van-cell title="招聘" value="查看全部" @click="more" />

      <div class="list">
        <div class="banner">
          <img src="@/assets/images/serve/u=1617103996,2974598959&fm=26&gp=0.jpg" alt />
        </div>

        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="left">
            <div class="img-show">
              <img :src="item.img" />
            </div>
          </div>
          <div class="content">
            <span class="title">{{item.title}}</span>
            <div class="foot">
              <div class="watch">
                <p>
                  <img src="@/assets/images/icon/look.png" alt="">
                  {{item.watch}}
                </p>
                <p>
                  <img src="@/assets/images/icon/time.png" alt="">
                  {{item.time}}
                </p>
              </div>
              <div class="price">
                <div>
                   <img src="@/assets/images/icon/price.png" alt="">
                  <span class="num">{{item.price}}</span>
                  <span>/万</span>
                </div>
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
  data() {
    return {
      list: [
        {
          img: require("@/assets/images/serve/u=1617103996,2974598959&fm=26&gp=0.jpg"),
          title: "用ipad Pro成为你的下一台电脑？我们来比较一下",
          watch: 1100,
          time: "11-11 12:00",
          price: 9000
        },
        {
          img: require("@/assets/images/serve/1d6c-hikcahf2966733.jpg"),
          title: "用ipad Pro成为你的下一台电脑？我们来比较一下",
          watch: 1100,
          time: "11-11 12:00",
          price: 9000
        }
      ]
    };
  },
  methods: {
    more() {
      this.$router.push({
        path: "/serve/recruit"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.main{
  margin-bottom:.7rem !important;
}
.container {
  .van-cell {
    margin-top: 0.4rem;
    padding: 0.2rem 0.45rem;
    margin-bottom: 0.2rem;
  }
  /deep/ .van-cell__title:first-child span {
    color: #000;
    font-size: .42rem;
    font-weight: 600;
  }
}
.list {
  padding: 0 0.45rem;
  .banner {
    img {
      width: 100%;
      height: 2.73rem;
      border-radius: .04rem;
    }
  }

  .item {
    display: flex;
    margin: 0.5rem 0;
    .img-show {
      width: 2.41rem;
        height: 2.23rem;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      img {
        height: 100%;
        border-radius: .04rem;
      }
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 0.38rem;
      .title {
        font-size: 0.3rem;
        display: inline-block;
      }
      .watch {
        font-size: 0.24rem;
        p {
          display: inline-block;
          display: flex;
          margin-top: 0.05rem;
          align-items: center;
          img {
            max-height: .3rem;
            max-width: .3rem;
            margin-right: .1rem;
          }
        }
      }
      .foot {
        display: flex;
        font-size: 0.24rem;
        align-items: flex-end;
        justify-content: space-between;
        .price {
          > div {
            border: 1px solid #c3ab87;
            display: flex;
            align-items: center;
            border-radius: 1rem;
            padding-right: 0.1rem;
            padding: .02rem;
          }

          font-size: 0.2rem;
          color: #c3ab87;
          padding: 0;
          /deep/ .van-icon {
            font-size: 0.44rem;
          }
          img{
            width: 0.47rem;
            height: 0.47rem;
            margin-right: 0.1rem;
          }
          .num {
            font-size: 0.28rem;
          }
        }
      }
    }
  }
}
</style>