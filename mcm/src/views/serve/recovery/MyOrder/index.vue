<template>
  <div class="myOrder">
    <van-nav-bar title="我的回收订单"
                 left-text
                 left-arrow
                 @click-left="onClickLeft">
      <template #left>
        <img src="@/assets/images/icon/index/arrow.png" />
      </template>
    </van-nav-bar>
    <van-tabs type="card"
              style="margin-top: 10px"
              color="#C3AB87">
      <van-tab title="上门回收">
        <van-tabs @click="onClick"
                  color="#C3AB87"
                  style="margin-bottom: 0.6rem">
          <van-tab title="全部订单"></van-tab>
          <van-tab title="待取件"></van-tab>
          <van-tab title="订单完成"></van-tab>
          <van-tab title="已取消"></van-tab>
        </van-tabs>
        <div class="content">
          <div class="itemList"
               v-for="(item, index) in list"
               :key="index">
            <div class="title">
              <p>订单编号:{{item.sn}}</p>
              <span>{{item.status}}</span>
            </div>
            <div class="itemCon">
              <div class="left">
                <img :src="item.img.split('__')[0]"
                     alt="">
              </div>
              <div class="center">
                <p>类 型：{{item.p_cate_name}}</p>
                <p>规 格：{{item.cate_name}}</p>
                <p>预约保证金：{{item.predict_money}} 环保金</p>
                <p>预约时间：{{item.subscribe_time}}</p>
              </div>
              <div class="right">
                × 1
              </div>
            </div>
            <div class="bottom">
              <div></div>
              <div>
                <div class="botton"
                     @click="deleteItem(item.order_id)">
                  取消订单
                </div>
                <div class="botton"
                     @click="godetails"
                     style="border: solid 1px #C6B08E; color:#C6B08E; margin-left:10px; ">
                  查看详情
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="智能回收">
        <div class="content">
          <div class="itemList"
               v-for="(item, index) in list"
               :key="index">
            <div class="titleBH">订单编号:{{item.sn}}</div>
            <div class="itemListP">
              <div>
                <p>回收柜编号</p> <span>P0522222</span>
              </div>
              <div>
                <p>回收柜地址</p> <span>{{item.address}}</span>
              </div>
              <div>
                <p>类 型</p> <span>{{item.p_cate_name}}</span>
              </div>
              <div>
                <p>数 量</p> <span>1</span>
              </div>
              <div>
                <p>实际回收环保金</p> <span>{{item.predict_money}} 环保金</span>
              </div>
              <div>
                <p>回收时间</p> <span>{{item.subscribe_time}}</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-overlay :show="show">
      <van-loading type="spinner"
                   class="wrapper"
                   color="#fff" />
    </van-overlay>

  </div>
</template>

<script>
// import { Toast } from 'vant';
export default {
  name: 'myOrder',

  data () {
    return {
      show: false,
    }
  },

  methods: {
    getList (state) {
      this.show = true
      let data = {}

      data = {
        uid: 120,
        page: 1,
        status: state + '',
        per_page: 100000000
      }
      this.$api.serve.recovery.getSubscribeOrderT(data).then(res => {
        this.show = false
        // 1=删除，2=待预约，3=待抢单，4=待取件，5=待支付，6=完成
        res.rows.forEach(item => {
          switch (item.status) {
            case 1:
              item.status = '取消订单'
              break;
            case 2:
              item.status = '待预约'
              break;
            case 3:
              item.status = '待抢单'
              break;
            case 4:
              item.status = '待取件'
              break;
            case 5:
              item.status = '待支付'
              break;
            case 6:
              item.status = '完成订单'
              break;
          }
        })
        this.list = res.rows
      })
    },

    onClickLeft () {
      this.$router.go(-1);
    },

    godetails () {
      this.$router.push('/serve/details')
    },

    onClick (name, title) {
      // Toast(title);
      switch (name) {
        case 0:
          this.getList('1, 3, 4, 5, 6')
          break;
        case 1:
          this.getList(4)
          break;
        case 2:
          this.getList(6)
          break;
        case 3:
          this.getList(1)
          break;
      }
    },

    deleteItem (id) {
      this.$dialog.confirm({
        title: '',
        message: '确认取消订单？',
      })
        .then(() => {
          // on confirm
          this.show = true
          this.$api.serve.recovery.modSubscribeOrder({
            status: 1,
            ids: id + ''
          }).then(res => {
            this.$toast.fail('删除成功')
            this.getList('1, 3, 4, 5, 6')
          })
        })
        .catch(() => {
          this.show = false
        });
    },
  },

  mounted () {
    this.getList('1, 3, 4, 5, 6')
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.itemListP {
  font-size: 0.27rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #777777;
  line-height: 0.55rem;
  margin-bottom: 0.3rem;
  > div {
    display: flex;
    > p {
      width: 2rem;
      margin-right: 0.5rem;
    }
  }
}

.titleBH {
  width: 100%;
  // height: 0.26rem;
  font-size: 0.27rem;
  padding-bottom: 0.2rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #000000;
  border-bottom: solid 1px #f1f1f1;
  margin-bottom: 0.3rem;
}

.content {
  width: 100%;
  margin: 0 auto;

  .itemList {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.4rem;
    margin-top: 0.4rem;
    border-bottom: solid 0.18rem #f7f7f7;
    // margin-bottom: 0.7rem;
    .title {
      display: flex;
      justify-content: space-between;
      > p {
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }
      > span {
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #c3ab87;
      }
    }
    .itemCon {
      display: flex;
      height: 1.72rem;
      margin-top: 0.28rem;
      .left {
        width: 2rem;
        > img {
          width: 1.72rem;
          height: 1.72rem;
        }
      }
      .center {
        flex: 1;
        > p {
          font-size: 0.24rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #777777;
          margin-bottom: 0.1rem;
        }
      }
      .right {
        font-size: 0.27rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }
    }
    .bottom {
      // float: right;
      margin-top: 0.5rem;
      margin-bottom: 0.4rem;
      display: flex;
      justify-content: space-between;
      > div {
        display: flex;
      }
      .botton {
        width: 1.58rem;
        height: 0.52rem;
        border: 1px solid #f1f1f1;
        border-radius: 0.24rem;
        text-align: center;
        line-height: 0.52rem;
        font-size: 0.24rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
      }
    }
  }
}
</style>