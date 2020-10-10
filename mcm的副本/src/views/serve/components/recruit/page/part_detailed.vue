<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="详情" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
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
        <div class="title">大学生家教长期聘请</div>
        <div class="price">
          <span class="amount">80元/次</span>
          <p>日结</p>
        </div>
        <div class="int-foot">
          <span>更新:2020-3-25</span>
          <span>浏览:60人</span>
          <span>申请:15人</span>
        </div>
      </div>
      <!-- <ul class="requirement">
        <li>C1驾照</li>
        <li>交通补助</li>
        <li>年底双薪</li>
      </ul>-->

      <!-- 工作地址 -->
      <div class="adress">
        <van-cell class="title" title="工作地址" />
        <van-cell class="sub-title" title="家教上门一对一辅导" />
      </div>

      <!-- 职位描述 -->
      <div class="introduce-m">
        <van-cell class="title" title="职位描述" is-link />
        <div class="content">
          <div class="int-t">
            <div class="btn-t">要求</div>
            <span>周一 ~ 周五 ·（长期招聘）</span>
          </div>
          <div class="value">
            <p>内容内若内容内若内容内若内容内若内容内若内容内若内容内若</p>
            <p>内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若</p>
            <p>内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若</p>
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
            <p>内容内若内容内若内容内若内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若内容内若</p>
            <div class="more">收起</div>
          </div>
        </div>
      </div>

      <div class="compony-i">
        <van-cell class="title" title="公司图片" />
        <div class="img">
          <img src="@/assets/images/serve/1d6c-hikcahf2966733.jpg" />
        </div>
      </div>

      <!-- 公司点评 -->

      <div class="compony-s">
        <van-cell class="title" title="公司点评" is-link />

        <span class="no-speak">共0人评价了此岗位</span>
      </div>
    </div>
    <div class="fixed">
      <div class="left">
         <img src="@/assets/images/icon/index/speak.png" style="width: 0.42rem;height:auto" />
      </div>
      <div class="right">
        <div class="btn" @click="resume">申请职位</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    detailed() {},
    resume() {
      this.$router.push({
        path: "/serve/recruit/resume/part-time"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0 0.45rem;
  padding-bottom: 1.5rem;
  .title {
    font-size: 0.42rem;
    font-weight: bold;
    padding: 0.4rem 0;
  }
  /deep/ .sub-title {
    padding: 0.2rem 0;
    padding-bottom: 0.4rem;
    span {
      font-size: 0.3rem;
      font-weight: 600;
    }
  }
  //工作介绍
  .introduce {
    padding: 0.2rem 0;
    display: flex;
    flex-direction: column;
    .int-foot {
      display: flex;
    }
    .title {
      font-size: 0.36rem;
      font-weight: 600;
    }
    .price {
      margin-bottom: 0.1rem;
      display: flex;
      align-items: center;
      .amount {
        color: #c3ab87;
        font-size: 0.3rem;
        position: relative;
        &::after {
          position: absolute;
          content: "";
          width: 1px;
          height: 80%;
          background: #dddddd;
          right: -0.2rem;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
      p {
        font-size: 0.24rem;
        margin-left: 0.4rem;
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
      font-size: 0.2rem;
      padding: 0.05rem 0.1rem;
      border: 1px solid #c3ab87;
      color: #c3ab87;
      border-radius: 1rem;
    }
  }

  //工作地址

  //职位描述
  .introduce-m {
    .content {
      .int-t {
        display: flex;
        align-items: center;
        .btn-t {
          font-size: 0.18rem;
          border-radius: 1rem;
          border: 1px solid #c3ab87;
          color: #c3ab87;
          padding: 0 0.06rem;
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
      padding-top: 1rem;
    }
    .sub-title {
      padding-top: 0.5rem;
      padding-bottom: 0;
    }
    .val-c {
      display: inline-block;
      font-size: 0.18rem;
      border-radius: 1rem;
      border: 1px solid #c3ab87;
      color: #c3ab87;
      padding: 0 0.06rem;
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
      .value {
        position: relative;
      }
      .more {
        position: absolute;
        right: 0;
        bottom: 0.05rem;
        color: #c3ab87;
      }
      
    }
  }
  .compony-i{
     padding-bottom: 0.2rem;
    .title{
      padding-top: 0.8rem;
     
    }
    img {
        width: 100%;
        height: 4.81rem;
        border-radius: 0.06rem;
      }
  }
  // 公司点评
  .compony-s {
    padding-bottom: 0.2rem;
    .no-speak {
      font-size: 0.3rem;
      display: flex;
    }
    .title{
      padding-top: 0.8rem;
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