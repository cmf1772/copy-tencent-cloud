<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="回收员抢单页" left-text left-arrow @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="nav">
      <div class="center-nav">
        <ul>
          <li v-for="(item,index) in navList" :key="index">
            <span
              :class="item.active == active?'active':''"
              @click="changeActive(item.active)"
            >{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="list">
        <div class="item" v-for="(item,index) in orderList " :key="index">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <div class="center">
            <div class="name">李先生</div>
            <div class="time">
              {{item.subscribe_time}}
              <p>
                <img src="@/assets/images/icon/serve/recovery/phone.png" alt />
                电话卖家
              </p>
            </div>
            <div class="info-list">
              <div class="info-item">
                <span>订单编号</span>
                <p>：{{item.sn}}</p>
              </div>
              <div class="info-item">
                <span>物品类型</span>
                <p>：{{item.cate_name}}</p>
              </div>
              <div class="info-item">
                <span>备 注</span>
                <p>：{{item.remake?item.remake:'无'}}</p>
              </div>
              <div class="info-item">
                <span>上门地址</span>
                <p>：{{item.address?item.address:'无'}}</p>
              </div>
              <div class="get-local">
                <span>室内</span>
                <p>
                  <img src="@/assets/images/icon/serve/recovery/local1.png" alt />定位
                </p>
              </div>
            </div>
            <div class="btn" @click="getOrderBtn(index)">抢单</div>
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
      navList: [
        { title: "最新订单", active: "new" },
        { title: "离我最近", active: "byMe" },
      ],
      active: "new",
      orderList:[]
    };
  },
  created(){
    this.$api.serve.recovery.getSubscribeOrder()
      .then( res => {
        console.log(res);
        this.orderList = res;
      })
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    getOrderBtn(index){
      this.$api.serve.recovery.addSubscribeOrder({
        subscribe_id : this.orderList[index].sn,
        uid : this.$store.state.user.user_id
      })
        .then( res =>{
          this.orderList.splice(index,1);
          this.$toast.success("接单成功");
        })
        .catch( err => {

        })
    }
  },
};
</script>

<style lang="less" scoped>
.container {
  .list {
    padding: 0 0.45rem;
    margin-top: 0.5rem;
    .item {
      display: flex;
      align-items: flex-start;
      border-bottom: .02rem solid #f0f0f0;
      padding: .3rem 0;
      .icon {
        img {
          width: 1.03rem;
          height: 1.03rem;
        }
      }
      .center {
        display: flex;
        flex-direction: column;
        margin-left: 0.3rem;
        flex: 1;
        .btn{
          width: 1.23rem;
          height: 0.53rem;
          font-size: .24rem;
          border-radius: .27rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #c3ab87;
          color: #fff;
          align-self: flex-end;
          margin-top: 0.3rem;
        }
        .info-list{
          .get-local{
            font-size: .24rem;
            display: flex;
            margin-left: 1rem;
            img{
              width: 0.2rem;
            }
            p{
              color: #c3ab87;
              margin-left: 0.4rem;
              position: relative;
              &::before{
                content: '';
                position: absolute;
                left: -0.2rem;
                background: #f0f0f0;
                height: 0.22rem;
                width: 0.02rem;
                top: 50%;
                transform: translate(0,-50%);
              }
            }
          }
          .info-item{
            margin-bottom: .1rem;
            display: flex;
            font-size: .24rem;
            color: #777;
            span{
              display: inline-block; width: 1rem;
              text-align: justify;
              text-align-last: justify;
            }
          }
        }
        .name {
          font-size: 0.3rem;
          font-weight: 400;
          margin-bottom: 0.05rem;
        }
        .time {
          font-size: 0.24rem;
          display: flex;
          margin-bottom: 0.3rem;
          img {
            width: 0.2rem;
            margin-left: 0.3rem;
          }
          p {
            color: #c3ab87;
          }
        }
      }
    }
    .item:last-child{
      border: none;
    }
  }
}
// 导航
.center-nav {
  margin-bottom: 0.4rem;
  ul {
    display: flex;
    padding: 0.2rem 0.45rem;
    justify-content: center;
    align-items: center;
  }
  li {
    font-size: 0.34rem;
    line-height: 0.3rem;
    margin: 0 0.5rem;
    color: #b5b5b5;
    .active {
      font-size: 0.36rem;
      font-weight: 600;
      color: #000;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 0.4rem;
        height: 4px;
        border-radius: 1px;
        background: #c3ab87;
        bottom: -0.2rem;
        right: 50%;
        transform: translate(50%, 0);
      }
    }
  }
}
</style>