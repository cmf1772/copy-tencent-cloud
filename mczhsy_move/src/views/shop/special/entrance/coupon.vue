<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="优惠券"
        right-text="按钮"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
        <template #right>
           <img src="@/assets/images/icon/index/gouwuche.png" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 搜索 -->
    <div class="search-f">
      <search></search>
    </div>

    <!-- 导航 -->
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

    <div class="coupon-list">
      <div class="item">
        <div class="left">
          <div class="price">
            ￥
            <span>20</span>
          </div>
          <p>满69元可使用</p>
        </div>
        <div class="center">
          <div class="title">美食新客券</div>
          <div class="time">
            有效期至
            <span>2020.5.22 23:59</span>
          </div>
        </div>
        <div class="right">
          <span>已领 50%</span>
          <div class="progess"></div>
          <div class="btn">立即领取</div>
        </div>
      </div>


      <div class="item">
        <div class="left">
          <div class="price">
            ￥
            <span>20</span>
          </div>
          <p>满69元可使用</p>
        </div>
        <div class="center">
          <div class="title">美食新客券</div>
          <div class="time">
            有效期至
            <span>2020.5.22 23:59</span>
          </div>
        </div>
        <div class="right">
          <span>已领 50%</span>
          <div class="progess"></div>
          <div class="btn">立即领取</div>
        </div>
      </div>

      <div class="item" v-for="(item,index) in 6 " :key="index">
        <div class="left">
          <div class="price">
            ￥
            <span>20</span>
          </div>
          <p>满69元可使用</p>
        </div>
        <div class="center">
          <div class="title">美食新客券</div>
          <div class="btn-list">
            <div class="active">外卖</div>
            <div>2.03KM</div>
            <div>价格优惠</div>
          </div>
        </div>
        <div class="right">
          <span>已领 50%</span>
          <div class="progess"></div>
          <div class="btn">立即领取</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  data() {
    return {
      navList: [
        { title: "美食", active: "1" },
        { title: "娱乐", active: "2" },
        { title: "美妆", active: "3" },
        { title: "服务", active: "4" },
        { title: "商超", active: "5" },
        { title: "艺术", active: "6" }
      ],
      active: "1"
    };
  },
  components: { search },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    changeActive(activeName) {
      this.active = activeName;
    },
    onClickRight() {},
    detailed() {
      this.$router.push({
        path: "/shop/shop_detailed"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.search-f {
  padding: 0.1rem 0.45rem;
}
// 导航
.center-nav {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  ul {
    display: flex;
    padding: 0.2rem .45rem;
    justify-content: space-between;
    align-items: center;
  }
  li {
    font-size: 0.3rem;
    margin: 0 10px;
    line-height: 0.3rem;
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
.coupon-list {
  padding: 0 0.45rem;
  font-size: .24rem;
  .item {
    margin-bottom: 0.4rem;
    border-radius: .03rem;
    box-shadow: 0 -1px 10px 2px #eee;
    padding: .4rem .2rem;
    display: flex;
    justify-content: space-between;
  }
  .left,.center,.right{
    display: flex;
    flex-direction: column;
  }
  .left{
    align-items: center;
    p{font-size: .2rem;}
    .price{
      color:#C3AB87 ;
      span{font-size: .42rem;}
      
    }
  }
  .center{
    flex: 1;
    padding-left: .3rem;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      left: 0.15rem;
      width: 1px;
      height: 80%;
      background: #eee;
      top: 50%;
      transform: translate(0,-50%);
    }
    .title{
      font-size: .3rem;
      font-weight: 600;
      margin-bottom: .15rem;
    }
    .time{font-size: .2rem;}
    .btn-list{display: flex;font-size: .18rem;align-items: flex-end;
      div{border-radius: 1rem;border: 1px solid #eee; padding: 0.0rem .05rem;margin-right: 0.05rem;}
      .active{ color:#C3AB87 ;border-color: #C3AB87;}
    }
  }
  .right{
    font-size: .18rem;
    .progess{
      width: 100%;
      height: 3px;
      background: #eee;
      position: relative;
      margin: .1rem 0;
      &::after{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 3px;
        background:#C3AB87 ;
      }
    }
    .btn{
      background:#C3AB87 ;
      color: #fff;
      padding: .06rem .15rem;
      border-radius: 1rem;
      font-size: .21rem;
      margin-top: auto;
    }
  }
}
</style>