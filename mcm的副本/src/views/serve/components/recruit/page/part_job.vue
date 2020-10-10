<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="兼职招聘" @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <img src="@/assets/images/icon/index/add.png" />
        </template>
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="search-s">
      <search></search>
    </div>

    <div class="container">
      <!-- 入口 -->
      <ul class="inavs">
        <li>
          <router-link to="/serve/recruit/release_part">
            <img src="@/assets/images/icon/serve/school/fujin.png" />
            <p>我要招聘</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic">
            <img src="@/assets/images/icon/serve/school/xingqiu.png" />
            <p>急招职位</p>
          </router-link>
        </li>
        <li>
          <router-link to="/serve/recruit/part-job">
            <img src="@/assets/images/icon/serve/school/chuandan.png" />
            <p>校园招聘</p>
          </router-link>
        </li>
        <li>
          <router-link to>
            <img src="@/assets/images/icon/serve/school/quanbu.png" />
            <p>全部职位</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic/follow">
            <img src="@/assets/images/icon/serve/school/lingshou.png" />
            <p>附近职位</p>
          </router-link>
        </li>
        <li>
          <router-link to="/dynamic">
            <img src="@/assets/images/icon/serve/school/fuwuyuan.png" />
            <p>急招职位</p>
          </router-link>
        </li>
        <li>
          <router-link to="/serve/recruit/part-job">
            <img src="@/assets/images/icon/serve/school/jianzhi.png" />
            <p>校园招聘</p>
          </router-link>
        </li>
        <li>
          <router-link to>
            <img src="@/assets/images/icon/serve/school/pingjia.png" />
            <p>全部职位</p>
          </router-link>
        </li>
      </ul>

      <div class="list">
        <div class="title">
          <div class="active">日结专区</div>
          <div>周末兼职</div>
          <div>精选</div>
        </div>
        <div class="list-v" >
          <div class="item" v-for="(iten,index) in 15" @click="detailed" :key="index">
            <div class="title-v">
              <span class="name">大学生家教长期聘请</span>
              <span>337人看过</span>
            </div>
            <div class="price">
              <span class="amount">80元/次</span>
              <p>日结</p>
            </div>
            <div class="adress">
              <div class="adress-v">上海-上好市场</div>
              <div class="go">报名</div>
            </div>
            <div class="foot">
              <div class="compony">北京圣安保安服务有限公司</div>
              <div class="time">3小时前</div>
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
  components: {
    search
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    detailed(){
      this.$router.push({
        path: "/serve/recruit/part-detailed"
      })
    }
  }
};
</script>
<style lang="less" scoped>
.search-s {
  padding: 0.2rem 0.45rem;
}
.container {
  .inavs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0.3rem 0.45rem;
    li {
      display: inline-block;
      margin-bottom: 0.2rem;
      text-align: center;
      width: 25%;
    }
    li img {
      width: 1.23rem;
      height:1.23rem;
    }
    li p {
      font-size: 0.24rem;
      color: #777;
      margin-top: 0.1rem;
    }
  }
  .list {
    
    padding: 0 0.45rem;
    .item{
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #f1f1f1;
      padding-bottom: 0.54rem;
      padding-top: 0.54rem;
      .title-v{
        margin-bottom: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
          font-size: .24rem;
          color: #777;
        }
        .name{
          color: #000;
          font-size: .3rem;
          font-weight: 600;
        }
      }
      .price{
        margin-bottom: .1rem;
        display: flex;
        align-items: center;
        .amount{
          color: #c3ab87;
          font-size: .3rem;
          position: relative;
          &::after{
            position: absolute;
            content: "";
            width: 1px;
            height: 80%;
            background: #DDDDDD;
            right: -0.2rem;
            top: 50%;
            transform: translate(-50%,-50%);
          }
        }
        p{
          font-size: .27rem;
          margin-left: 0.4rem;
        }
      }
      .adress{
        margin-bottom: 0.2rem;
        display: flex;
        justify-content: space-between;

        .adress-v{
          font-size: .24rem;
          color: #777;
        }
        .go{
          width: 1.23rem;
          height: .53rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          background: #c3ab87;
          color: #fff;
          font-size: .24rem;
        }
      }
      .foot{
        display: flex;
        justify-content:space-between;
        font-size: .20rem;
        color: #777;
      }
    }
    .title {
      padding-top: 0.5rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: .4rem;
      div {
        text-align: center;
        font-size: 0.34rem;
        color: #b5b5b5;
      }
      .active {
        font-size: 0.36rem;
        font-weight: 600;
        position: relative;
        color: #000;
        &::after {
          content: "";
          position: absolute;
          width: 0.5rem;
          height: 2px;
          background: #c3ab87;
          bottom: -0.1rem;

          left: 50%;
          transform: translate(-50%, 0);
        }
      }
    }
  }
}
</style>