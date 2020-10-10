<template>
  <div class="main">
    <div class="top-banner">
      <img src="@/assets/images/magazine/index/food/933b4079103743d094261ae6ca733fa4_th.jpg" />
      <span @click="back">
        <van-icon name="arrow-left" size=".34rem" />
      </span>
    </div>

    <!-- 主体 -->
    <div class="content">
      <!-- title -->
      <h5 class="title">这是第{{id}}篇文章这是第{{id}}篇文章这是第{{id}}篇文章</h5>
      <!-- 时间 浏览人数 -->
      <div class="time">
        <span>02-09</span>
        <span>301 人浏览</span>
      </div>
      <!-- 作者 -->
      <div class="author">
        <div class="nick">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
          <span class="name">正龙</span>
        </div>
        <div class="follow">关注</div>
      </div>

      <!-- 文章详情 -->
      <div class="con">
        <span class="sub-title">文章二级标题</span>
        <p>内容内容内容内容内容内容内容。内容内容内容内容内容内容内容内容内。容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容内容内。容内内容内容内容内容内容内容内容内容内容内容内。容内容内容内容内容内容内容内容内容内容容内容。内容内容内容内容内容内容内容内容内容内容</p>
        <p>内容内容内容内容内容。内容内容内容内。容内容内容内容</p>
      </div>
    </div>

    <!-- 推荐 -->
    <div class="recommend">
      <div class="title">推荐阅读</div>

      <div class="list">
        <div class="wrap">
          <div class="item" v-for="(item,index) in list" :key="index">
            <div class="left">
              <img :src="item.src" />
            </div>
            <div class="rec-content">
              <span class="rec-title">{{item.title}}</span>

              <div class="rec-foot">
                <div>
                   <img src="@/assets/images/icon/look.png" alt="">
                  <span>{{item.watch}}万</span>
                </div>
                <div>
                   <img src="@/assets/images/icon/speak.png" alt="">
                  <span>{{item.speak}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 精彩评论 -->
    <div class="comment">
      <div class="title">精彩评论</div>

      <div class="content">
        <div class="nick">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
        </div>
        <div class="con">
          <div class="top">
            <div class="top-left">
              <span class="name">正龙</span>
              <span class="time">02-09</span>
            </div>
            <div class="top-right">
              7
              <img src="@/assets/images/icon/ding.png" alt="">
            </div>
          </div>
          <span class="content-box">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
        </div>
      </div>
      <div class="content">
        <div class="nick">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
        </div>
        <div class="con">
          <div class="top">
            <div class="top-left">
              <span class="name">正龙</span>
              <span class="time">02-09</span>
            </div>
            <div class="top-right">
              7
               <img src="@/assets/images/icon/ding.png" alt="">
            </div>
          </div>
          <span class="content-box">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
        </div>
      </div>
    </div>

    <!-- 底部我要评论 -->
    <div class="fix-foot">
      <div class="input">我也来说~</div>
      <ul>
        <li>
          <p>
            <img src="@/assets/images/icon/speak.png" alt="">
          </p>
          <span>4</span>
        </li>
        <li>
          <p>
            <img src="@/assets/images/icon/shoucang.png" alt="">
          </p>
          <span>4</span>
        </li>
        <li>
          <p>
            <img src="@/assets/images/icon/ding.png" alt="">
          </p>
          <span>4</span>
        </li>
        <li>
          <p>
            <img src="@/assets/images/icon/fenxiang.png" alt="">
          </p>
          <span>4</span>
        </li>
      </ul>
    </div>

    <!-- 最新评论 -->
    <div class="comment new-comment">
      <div class="title">最新评论</div>

      <div class="content">
        <div class="nick">
          <div class="icon">
            <img src="@/assets/images/user.png" />
          </div>
        </div>
        <div class="con">
          <div class="top">
            <div class="top-left">
              <span class="name">正龙</span>
              <span class="time">02-09</span>
            </div>
            <div class="top-right">
              7
              <van-icon name="good-job-o" size=".36rem" />
            </div>
          </div>
          <span class="content-box">巨鹿不一样的元宵节。巨鹿不一巨鹿不一巨鹿不一样的元宵节</span>

          <div class="reply">
            <div class="reply-content">
              <ul>
                <li>
                  <span class="name">正龙</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
                <li>
                  <span class="name">正龙say</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
                <li>
                  <span class="name">abbb</span>:
                  <span class="reply-value">巨鹿不一样的元宵节。巨鹿不一样的元宵节</span>
                </li>
              </ul>

              <span class="more">--查看更多回复8条</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "consulting",
  data() {
    return {
      id: null,
      list: [
        {
          src: require("@/assets/images/magazine/index/food/16B1B387D97.jpg"),
          title: "巨鹿不一样的元宵节巨鹿不一样的元宵节",
          watch: "2",
          speak: 163
        },
        {
          src: require("@/assets/images/magazine/index/food/16B1B384664.jpg"),
          title: "巨鹿不一样的元宵节巨鹿不一样的元宵节",
          watch: "2",
          speak: 523
        }
      ]
    };
  },
  methods: {
    back() {
      history.go(-1);
    }
  },
  created() {
    this.id = this.$route.query.id;
  }
};
</script>

<style lang="less" scoped>
.main {
  padding-bottom: 70px;
}
.top-banner {
  position: relative;
  img {
    width: 100vw;
    height: 7.44rem;
  }
  span {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    color: #fff;
  }
}
.title {
  margin: 0.57rem 0 0.54rem 0;
  font-size: 0.49rem;
}
// //主体
.content {
  padding: 0 0.45rem;

  // 时间
  .time {
    display: flex;
    color: #a1a4af;
    font-size: 0.26rem;
    margin-bottom: 0.74rem;
    justify-content: space-between;
    align-items: center;
  }

  // 作者
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0;
    .icon {
      width: 0.87rem;
      height: 0.87rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nick {
      display: flex;
      align-items: center;
      .name {
        font-size: 0.32rem;
        margin-left: 0.26rem;
        font-weight: 400;
      }
    }
    .follow {
      background-color: #f8f5f0;
      color: #c3ab87;
      font-size: 0.28rem;
      width: 1.383rem;
      height: 0.641rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 33px;
    }
  }

  // 内容
  .con {
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #eee;
    .sub-title {
      font-size: 0.36rem;
      font-weight: 400;
      line-height: 0.48rem;
      color: #000;
      display: block;
      margin-bottom: 0.37rem;
      margin-top: 0.44rem;
    }

    p {
      font-size: 0.3rem;
      font-weight: 400;
      color: rgba(81, 81, 81, 1);
      line-height: .48rem;
    }
  }
}

// 推荐
.recommend {
  padding: 0rem 0.45rem;
  .item {
    display: flex;
    margin-bottom: 0.4rem;
  }
  .title {
    color: #9C9C9C;
    font-size: 0.26rem;
    margin-top: 0.51rem;
    margin-bottom: 0.4rem;
  }
  .left {
    border-radius: 0.03rem;
    overflow: hidden;
    width: 2.17rem;
      height: 2.17rem;
    img {
      
      width: 100%;
      height: 100%;
    }
  }
  .rec-content {
    flex: 1;
    padding-left: 0.32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
      width: 0.3rem;
      margin-right: 0.05rem;
    }
    .rec-title {
      font-size: 0.3rem;
      line-height: .44rem;
      color: #2a2a2a;
    }
  }
  .rec-foot {
    
    display: flex;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      color: #9c9c9c;
      font-size: 0.26rem;
    }
    .van-icon{
      margin-right: 0.05rem;
    }
    span {
      display: inline-block;
      margin-right: 0.94rem;
      margin-left: 0.02rem;
    }
  }
  .wrap {
    border-bottom: 1px solid #eee;
  }
}

// 精彩品论
.comment {
  padding: 0 0.45rem;
  
  .content {
    display: flex;
    align-items: flex-start;
    padding: .4rem 0;
    border-bottom: 1px solid #f1f1f1;
    .con {
      padding-left: 0.2rem;
      padding-bottom: 0;
      border: none;
      flex: 1;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        
        .top-left{
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
        .time {
          padding: 0;
          font-size: .24rem;
          margin-top: 0.17rem;
          margin-bottom: 0;
        }
        .name {
          font-size: 0.32rem;
          font-weight: 400;
        }
        .top-right {
          font-size: 0.26rem;
          display: flex;
          align-items: center;
          color: #9c9c9c;
          img{
            max-height: .3rem;
            margin-left: 0.1rem;
          }
        }
      }
    }
  }
  .content:first-child{
    padding-top: 0;
  }
  .content-box {
    font-size: 0.3rem;
    display: inline-block;
    margin: 0.4rem 0 0 0;
    line-height: 0.4rem;
  }
  .title {
    color: #9C9C9C;
    font-size: 0.26rem;
    margin-top: 0.51rem;
    margin-bottom: 0.4rem;
  }
  .icon {
    width: 0.87rem;
    height: 0.87rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nick {
    display: flex;
    align-items: center;
  }
}
.new-comment{
  .content-box{
    margin-bottom: 0.9rem;
  }
}
//回复
.reply-content {
  background: #f7f7f7;
  padding: 0.2rem 0.1rem;
  font-size: 0.28rem;
  margin-top: -0.6rem;
  .name {
    color: #c3ab87;
  }
  .more {
    color: #988352;
    font-size: 0.2rem;
    letter-spacing: 0.03rem;
  }
  li {
    margin-bottom: 0.44rem;
  }
}

//底部固定
.fix-foot {
  position: fixed;
  bottom: 0;
  width: 100vw;
  background: #fff;
  display: flex;
  padding:0.18rem 0.44rem;
  box-sizing: border-box;
  .input {
    width: 3.2rem;
    text-align: center;
    font-size: 0.24rem;
    display: flex;
    color: #ccc;
    align-items: center;
    justify-content: center;
    border-radius: 58px;
    background: #f7f7f7;
  }
  ul {
    display: flex;
    justify-content: space-around;
    flex: 1;
    li {
      display: flex;
      flex-direction: column;
      font-size: 0.26rem;
      text-align: center;
      color: #9c9c9c;
      p{
        min-height: .35rem;
        img{
          width: 0.3rem;
        }
      }
    }
  }
}
</style>