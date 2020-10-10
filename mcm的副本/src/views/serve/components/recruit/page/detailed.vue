<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
           <img src="@/assets/images/icon/index/fenxiang2.png" style="margin-left:.5rem;width: 0.35rem;height:auto"/>
           <img src="@/assets/images/icon/index/shoucang.png" style="margin-left:.5rem;width: 0.35rem;height:auto" />
           <img src="@/assets/images/icon/index/speak.png" style="margin-left:.5rem;width: 0.35rem;height:auto" />
        </template>
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="introduce">
        <div class="title">火车司机</div>
        <div class="amount">
          <span class="price">300-6000元 / 月</span>
          <span class="peers">同行平均月薪2645/月</span>
        </div>
        <div class="int-foot">
          <span>更新:2020-3-25</span>
          <span>浏览:60人</span>
          <span>申请:15人</span>
        </div>
      </div>
      <ul class="requirement">
        <li>C1驾照</li>
        <li>交通补助</li>
        <li>年底双薪</li>
      </ul>

      <!-- 工作地址 -->
      <div class="adress">
        <van-cell class="title" title="工作地址" />
        <van-cell class="sub-title" title="苏州高新区xx大厦18011" is-link />
      </div>

      <!-- 职位描述 -->
      <div class="introduce-m">
        <van-cell class="title" title="职位描述" is-link />
        <div class="content">
          <div class="int-t">
            <div class="btn-t">急需</div>
            <span>招一百人</span>
            <span>经验不限</span>
            <span>学历不限</span>
          </div>
          <div class="value">
            <p>内容内若内容内若内容内若内容内若内容内若内容内若内容内若</p>
            <p>内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若</p>
            <p>内容内若内容内若内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若</p>
            <div class="more">展开</div>
          </div>
        </div>
      </div>

      <!-- 公司描述 -->
      <div class="compony-m">
        <van-cell class="title" title="公司描述" />
        <van-cell class="sub-title" title="苏州高新区xx集团" />

        <span class="val-c">企业指南</span>

        <div class="int-t">
          <span>1 - 50人</span>
          <span>物流</span>
          <span>客运</span>
        </div>

        <div class="authentication">
          <div>
            <van-icon name="medal" color="#C3AB87" size="18" />
            <span>企业认证</span>
          </div>
          <div>
            <van-icon name="medal" color="#C3AB87" size="18" />
            <span>企业认证</span>
          </div>
        </div>

        <div class="val-t">
          <div class="value">
            <p>内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若</p>
            <div class="more">收起</div>
          </div>
        </div>
      </div>

      <!-- 公司点评 -->

      <div class="compony-s">
        <van-cell class="title" title="公司点评" is-link />

        <div class="item" v-for="(item,index) in 2" :key="index">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" /> 
              </div>
              <div class="name-user">
                <div class="t-l">
                  <span class="name">正龙</span>
                  <div class="time-star">
                    <span>曾职于该公司 · 前台</span>
                    <span class="star"></span>
                  </div>
                </div>
                <div class="follow">2020-12-30</div>
              </div>
            </div>
          </div>
          <div class="con-box">
            记录不一样的元宵节。记录不一样的元宵
            节记录。
          </div>
        </div>
      </div>


      <!-- 附近职位 -->
      <div class="comment list">
        <van-cell class="title" title="附近职位" is-link />
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
    <div class="fixed">
      <div class="left">
        <van-icon name="service-o" size=".50rem" />
        <van-icon name="shopping-cart-o" size=".5rem" />
      </div>
      <div class="right">
        <div class="btn" @click="resume">申请职位</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
            icon: require("@/assets/images/index/banner1.jpg")
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
            icon: require("@/assets/images/index/banner1.jpg")
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
            icon: require("@/assets/images/index/banner1.jpg")
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
            icon: require("@/assets/images/index/banner1.jpg")
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
            icon: require("@/assets/images/index/banner1.jpg")
          }
        }
      ]
    }
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    detailed(){

    },
    resume(){
      this.$router.push({
         path: "/serve/recruit/resume/full-time"   
      })
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  padding-bottom: 0.6rem;
  .title {
    font-size: 0.42rem;
    font-weight: 600;
    padding: 0.4rem 0;
  }
  /deep/ .sub-title {
    padding: 0.2rem 0;
    span {
      font-weight: 600;
      font-size: .3rem;
    }
  }
  //工作介绍
  .introduce {
    padding: 0.2rem 0;
    display: flex;
    flex-direction: column;
    .amount,
    .int-foot {
      display: flex;
    }
    .title {
      font-size: 0.36rem;
      font-weight: bold;
      margin-bottom: 0.05rem;
    }
    .amount {
      align-items: flex-end;
      margin: 0rem 0 0.25rem 0;
      .price {
        font-size: 0.3rem;
        font-weight: bold;
        color: #c3ab87;
      }
      .peers {
        font-size: 0.2rem;
        color: #999;
        margin-left: 0.2rem;
      }
    }
    .int-foot {
      font-size: 0.2rem;
      color: #999;
      span {
        margin-right: 0.2rem;
        position: relative;
      }
      span:not(:last-child)::after {
        position: absolute;
        width: 1px;
        height: 60%;
        right: -0.1rem;
        content: "";
        display: block;
        background: #c3ab87;
        top: 50%;
        transform: translate(0, -40%);
      }
    }
  }
  //福利待遇
  .requirement {
    margin: 0.4rem 0 0.2rem 0;
    display: flex;
    li {
      margin-right: 0.2rem;
      font-size: 0.24rem;
      width: 1.16rem;
      height: 0.44rem;
      display: inline-flex;justify-content: center;
      align-items: center;
      border: 1px solid #c3ab87;
      color: #c3ab87;
      border-radius: 1rem;
    }
  }

  //工作地址
  .adress{
    .sub-title{
    font-size: .3rem;
  }
  padding-bottom: 1.4rem;
  }
  //职位描述
  .introduce-m {
    padding-bottom: 0.4rem;
    .content {
      .int-t {
        display: flex;
        align-items: center;
        .btn-t {
          font-size: 0.18rem;
          border-radius: 1rem;
          border: 1px solid #c3ab87;
          color: #c3ab87;
          padding: 0rem 0.06rem;
          margin-right: 0.2rem;
        }
        span {
          font-size: 0.27rem;
          margin-right: 0.2rem;
          position: relative;
          color: #666;
        }
        span:not(:last-child)::after {
          position: absolute;
          content: "·";
          position: absolute;
          right: -0.1rem;
        }
      }
      .value {
        font-size: 0.27rem;
        position: relative;
        p {
          margin: 0.2rem 0;
          line-height: 0.42rem;
        }
        .more {
          position: absolute;
          right: 0;
          bottom: 0;
          color: #c3ab87;
        }
      }
    }
  }

  // 公司描述
  .compony-m {
    .title {
      padding-bottom: 0;
    }
    .sub-title {
      padding-bottom: 0;
      padding-top: 0.6rem;
    }
    .val-c {
      font-size: 0.18rem;
      border-radius: 1rem;
      border: 1px solid #c3ab87;
      color: #c3ab87;
      width: 0.98rem;
      height: 0.43rem;
      margin-right: 0.2rem;
    }
    .int-t {
      display: flex;
      align-items: center;
      margin-top: 0.1rem;
      span {
        font-size: 0.27rem;
        margin-right: 0.2rem;
        position: relative;
        color: #666;
      }
      span:not(:last-child)::after {
        position: absolute;
        content: "·";
        position: absolute;
        right: -0.1rem;
      }
    }
    .authentication {
      display: flex;
      margin: 0.15rem 0 0.3rem 0;
      div {
        display: flex;
        align-items: center;
        margin-right: 0.2rem;
        span {
          font-size: 0.2rem;
          color: #999;
        }
      }
    }
    .val-t {
      font-size: 0.27rem;
      position: relative;
      p {
        margin: 0.2rem 0;
        line-height: 0.42rem;
      }
      .more {
        position: absolute;
        right: 0;
        bottom: 0.05rem;
        color: #c3ab87;
      }
    }
  }

  // 公司点评
  .compony-s {
    .item {
      margin: 0 0 0.6rem 0;
    }
    .author {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0.2rem 0;
      .name-user {
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-left: 0.3rem;
        .t-l {
          display: flex;
          flex-direction: column;
        }
      }
      .time-star {
        margin-top: auto;
        display: flex;
        font-size: 0.24rem;
        align-items: center;
        .star {
          position: relative;
          &::before {
            width: 2px;
            height: 80%;
            border-radius: 1px;
            content: "";
            position: absolute;
            background: #f7f7f7;
            left: -0.1rem;
            top: 50%;
            transform: translate(0, -50%);
          }
        }
        span {
          margin-right: 0.2rem;
          color: #999;
          font-size: 0.24rem;
          margin-top: 0.05rem;
        }
      }
      .icon {
        width: 0.87rem;
        height: 0.87rem;
        // border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nick {
        flex: 1;
        display: flex;
        align-items: center;
        .name {
          font-size: 0.32rem;
          font-weight: 400;
        }
      }
      .follow {
        font-size: 0.26rem;
        color: #999;
        padding: 0.1rem 0;
      }
    }
    .con-box {
      font-size: 0.3rem;
      padding-left: 1.15rem;
    }
  }


  // 附近职位
  .list {
    padding: 0 0rem;
    margin-top: 1rem;
    margin-bottom: .6rem;
    .van-cell{
      padding-bottom: 0;
    }
    .item {
      padding: .54rem 0;
      border-bottom: 1px solid #f1f1f1;
      .item-top {
        .title {
          padding: 0;
          color: #000;
          font-size: .3rem;
        }
        align-items: center;
        display: flex;
        justify-content: space-between;
        font-size: 0.24rem;
        color: #999;
        .adress{
          padding: 0;
        }
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
              padding: 0.00rem 0.1rem;
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
          img {
            width: .57rem;
            height:.57rem;
            border-radius: 100%;
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
}
// 固定
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  font-size: 0.24rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem .45rem;
  background: #fff;
  box-shadow: 0 -.1rem .1rem .01rem #f0f0f0;
  .left {
    padding: 0 0;
    .van-icon {
      margin-right: 0.2rem;
    }
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    div {margin-left: auto;
    width: 4.2rem;
    height: 0.87rem;
      border-radius: 1rem;
      color: #fff;
      display: flex;
      font-size: .3rem;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #c3ab87;

    }
  }
}
</style>