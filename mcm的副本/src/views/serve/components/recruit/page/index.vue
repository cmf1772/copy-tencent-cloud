<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <!-- <template #right>
          <van-icon name="location-o" size="18" />
        </template> -->
         <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>
    <div class="topbg">
      <div @click="recruit" class="recruit">我要招人<van-icon name="arrow" color="#fff" size=".26rem"/></div>
    </div>
    <div class="search">
      <div>
        <search></search>
      </div>
    </div>

    <ul class="inavs">
      <li>
        <router-link to="/dynamic/follow">
          <img src="@/assets/images/icon/serve/recruit/near.png" />
          <p>附近职位</p>
        </router-link>
      </li>
      <li>
        <router-link to="/dynamic">
          <img src="@/assets/images/icon/serve/recruit/ji.png" />
          <p>急招职位</p>
        </router-link>
      </li>
      <li>
        <router-link to="/serve/recruit/part-job">
          <img src="@/assets/images/icon/serve/recruit/school.png" />
          <p>校园招聘</p>
        </router-link>
      </li>
      <li>
        <router-link to>
          <img src="@/assets/images/icon/serve/recruit/all.png" />
          <p>全部职位</p>
        </router-link>
      </li>
    </ul>

    <div class="container">
      <van-cell>
        <template #default>
          <span>筛选</span>
          <i class="iconfont icon-down"></i>
        </template>
        <template #title>
          <span class="title">为你推荐</span>
        </template>
      </van-cell>

      <div class="adv-list">
        <div
          v-for="(item,index) in list"
          :key="index"
          :class="haveActiveItem(index)?'active item':' item'"
          @click="checkItem(index)"
        >{{item}}</div>
      </div>

      <div class="job">
        <div class="item" v-for="(item,index) in manList" :key="index" @click="detailed">
          <div class="item-top">
            <span class="title">{{item.title}}</span>
            <span class="adress">{{item.adress}}</span>
          </div>
          <div class="center">
            <div class="price">
              <span class="amount">{{item.amount}}元</span>
              <span>{{item.job}}</span>
            </div>
            <div class="commit">
              <ul>
                <li v-for="(comm,i) in item.commit" :key="i">{{comm}}</li>
                <li class="btn">申请</li>
              </ul>
            </div>
            <div class="hr">
              <div class="icon">
                <img :src="item.hr.icon" alt />
              </div>
              <div class="name">
                <span class="hrname">{{item.hr.department}}{{item.hr.name}}·{{item.hr.official}}</span>
                <span class="company">{{item.hr.company}}</span>
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
  data() {
    return {
      list: [
        "普工",
        "软件工程师",
        "普工",
        "软件工程师",
        "普工",
        "软件工程师",
        "普工",
        "软件工程师",
        "+"
      ],
      manList: [
        {
          title: "保安45岁内懒汉勿扰",
          adress: "朝阳-来广伊",
          amount: "3000-6000",
          job: "保安",
          commit: ["优选职位", "靠近地铁", "全勤"],
          hr: {
            name: "李杰",
            department: "人事部",
            official: "总经理",
            company: "人力资源有限公司",
            icon: require("@/assets/images/user.png")
          }
        },
        {
          title: "保安45岁内懒汉勿扰",
          adress: "朝阳-来广伊",
          amount: "3000-6000",
          job: "保安",
          commit: ["优选职位", "靠近地铁", "全勤"],
          hr: {
            name: "李杰",
            department: "人事部",
            official: "总经理",
            company: "人力资源有限公司",
            icon: require("@/assets/images/user.png")
          }
        },
        {
          title: "保安45岁内懒汉勿扰",
          adress: "朝阳-来广伊",
          amount: "3000-6000",
          job: "保安",
          commit: ["优选职位", "靠近地铁", "全勤"],
          hr: {
            name: "李杰",
            department: "人事部",
            official: "总经理",
            company: "人力资源有限公司",
            icon: require("@/assets/images/user.png")
          }
        },
        {
          title: "保安45岁内懒汉勿扰",
          adress: "朝阳-来广伊",
          amount: "3000-6000",
          job: "保安",
          commit: ["优选职位", "靠近地铁", "全勤"],
          hr: {
            name: "李杰",
            department: "人事部",
            official: "总经理",
            company: "人力资源有限公司",
            icon: require("@/assets/images/user.png")
          }
        },
        {
          title: "保安45岁内懒汉勿扰",
          adress: "朝阳-来广伊",
          amount: "3000-6000",
          job: "保安",
          commit: ["优选职位", "靠近地铁", "全勤"],
          hr: {
            name: "李杰",
            department: "人事部",
            official: "总经理",
            company: "人力资源有限公司",
            icon: require("@/assets/images/user.png")
          }
        }
      ],
      checkedArr:[],
    };
  },
  computed:{
    haveActiveItem(){
      return function(index){
        return this.checkedArr.includes(index)
      }
    }
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    detailed(){
      this.$router.push({
        path: "/serve/recruit/detailed"
      })
    },
    recruit(){
      this.$router.push({
        path: "/serve/recruit/release"
      })
    },
    checkItem(index){
      let checkIndex = this.checkedArr.findIndex( item => {
        return item == index;
      })
      if( checkIndex > -1){
        this.checkedArr.splice( checkIndex, 1);
      }else{
        this.checkedArr.push( index)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  margin-top: 0.6rem;
  .title {
    font-weight: 600;
    font-size: .3rem;
  }
  .van-cell{
    padding: .2rem .45rem;
    /deep/ .title{
      font-size: 0.42rem;
    }
    /deep/ .van-cell__value{
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .job {
    padding: 0 0.45rem;
    margin-top: 1rem;
    .item {
      padding: .54rem 0;
      border-bottom: 1px solid #f1f1f1;
      .item-top {
        .title {
          color: #000;
        }
        align-items: center;
        display: flex;
        justify-content: space-between;
        font-size: 0.24rem;
        color: #999;
      }
      .center {
        display: flex;
        flex-direction: column;
        .price {
          display: flex;
          font-size: 0.24rem;
          padding: 0.1rem 0;
          align-items: center;
          .amount {
            font-size: .3rem;
            color: #c3ab87;
            margin-right: 0.2rem;
          }
          span{
            font-size: .27rem;
          }
          .job {
            color: #333;
          }
        }
        .commit {
          ul {
            display: flex;
            font-size: 0.21rem;
            li {
              margin-right: 0.2rem;
              padding: 0.05rem 0.1rem;
              color: #666;
              background: #efefef;
              border-radius: 1rem;
              line-height: 0.22rem;
              display: flex;
              align-items: center;
            }
            .btn {
              margin-left: auto;
              margin-right: 0;
              width: 1.23rem;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              height: 0.53rem;
              background: #c3ab87;
              color: #fff;
            }
          }
        }
      }
      .hr {
        margin: 0.2rem 0;
        display: flex;
        align-items: center;
        .icon {
         
            display: flex;
            align-items: center;
            justify-content: center;
          img {
             width: .57rem;
            height:.57rem;

          }
        }
        .name {
          margin-left: 0.1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 0.21rem;
          color: #999;
          .hrname {
            font-size: 0.27rem;
            color: #000;
          }
        }
      }
    }
    
    .item:last-child{
      padding-bottom: .45rem;
      border-bottom: none;

    }
  }
  .adv-list {
    margin-bottom: 0.4rem;
    padding: 0.2rem .45rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.2rem;

    .item {
      background: #f7f7f7;
      text-align: center;
      font-size: 0.26rem;
      border-radius: 1rem;
      line-height: 0.65rem;
      border: transparent 1px solid;
    }
    .active {
      border: #c3ab87 1px solid;
      color: #c3ab87;
    }
  }
}
.van-nav-bar {
  /deep/ .van-icon {
    font-size: 0.32rem;
    color: #fff;
  }
  background: transparent;
  &::after {
    border: none;
  }
}
.topbg {
    background: url("../../..../../../../../assets/images/serve/1d6c-hikcahf2966733.jpg");
  background-size: 100% 100%;
  width: 100vw;
  height: 3.33rem;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 45px 45px;
  .recruit{
    position: absolute;
    top: 0.8rem;
    right: 0;
    font-size: .24rem;
    display: flex;
    color: #fff;
    padding: .05rem .2rem;
    background: #c3ab87;
    z-index: 999;
    border-radius: 1rem 0 0 1rem;
    align-items: center;
  }
}
.main > .search {
  padding: 0 0.45rem;
  position: relative;
  z-index: 999;
  padding-bottom: 0.2rem;
  margin-top: calc(3rem - 1.35rem);
  > div {
    box-shadow: 0px 0 10px 1px #ccc;
    border-radius: 1rem;
  }
  /deep/ .van-search__content{
    background: #fff;
  }
}

.inavs {
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.45rem;
}
.inavs li {
  display: inline-block;
  text-align: center;
}
.inavs li img {
  width: 1.23rem;
  height:1.23rem;
}
.inavs li p {
  font-size: 0.24rem;
  color: #777;
  margin-top: 0.1rem;
}
</style>