<template>
  <div class="main">
    <div class="banner-b">
      <swiper :options="option" style="padding:.15rem .45rem">
        <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
          <div class="free">
            <div class="show-img">
              <img :src="item.icon" />
            </div>
            <span class="name">{{item.title}}</span>
            <span class="ability">{{item.ability}}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="content">
      <!-- 第一版 -->
      <div class="box1 pub">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">默默大师号</span>
              <span class="star-name">时尚博主</span>
            </div>
          </div>
        </div>
        <div class="list">
          <div class="wrap">
            <div class="item" v-for="(item,index) in lists" :key="index">
              <div class="left">
                <img :src="item.src" />
              </div>
              <div class="rec-content">
                <span class="rec-title">{{item.title}}</span>

                <div class="rec-foot">
                  <div>
                    <van-icon name="eye-o" color="#2A2A2A" size=".32rem" />
                    <span>{{item.watch}}万</span>
                  </div>
                  <span>21分钟前</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="more">
          <span>剩下六篇</span>
          <span>
            <van-icon name="arrow-down" />
          </span>
        </div>
      </div>

      <div class="content-s">
        <!-- 每一篇文章 -->
        <div class="item" v-for="(item,index) in 2" :key="index">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="star">
                <span class="name">正龙</span>
                <span class="star-name">时尚博主</span>
              </div>
            </div>
            <div class="follow">关注</div>
          </div>
          <div class="item-value">
            <div class="value">
              纪录不一样的元宵节。
              <br />纪录不一样的元宵节。
              <br />纪录不一样的元宵节。
              <br />纪录不一样的元宵节。
            </div>
            <div class="star-view">
              <span class="star">#微博年度奖#</span>
              <br />
              <span class="star-foot">微博最具人气投票</span>
            </div>
            <div class="photos">
              <ul
                :style="`grid-template-columns: repeat(${listImg.length < 2 ? 1:(listImg.length<5?2:3)},1fr);`"
              >
                <li v-for="(item,index) in listImg" :key="index" :style="{'height':listImg.length == 1?'6.6rem':'2.1rem'}">
                  <img :src="item.src"  />
                </li>
              </ul>
            </div>
          </div>

          <div class="footer">
            <div class="time">22分钟前</div>
            <ul>
              <li>
                <span>
                  <img src="@/assets/images/icon/fenxiang.png" alt="">4
                </span>
              </li>
              <li>
                <span>
                   <img src="@/assets/images/icon/speak.png" alt="">2
                </span>
              </li>
              <li>
                <span>
                  <img src="@/assets/images/icon/ding.png" alt="">4
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="item" v-for="(item,index) in 2" :key="index">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="star">
                <span class="name">正龙</span>
                <span class="star-name">时尚博主</span>
              </div>
            </div>
            <div class="follow">关注</div>
          </div>
          <div class="item-value">
            <div class="value">纪录不一样的元宵节。 纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
            <div class="star-view">
              <span class="star">#微博年度奖#</span>
              <br />
              <span class="star-foot">微博最具人气投票</span>
            </div>
            <div class="photos">
              <ul
                :style="`grid-template-columns: repeat(${listMoreImg.length < 2 ? 1:(listMoreImg.length<5?2:3)},1fr);`"
              >
                <li v-for="(item,index) in listMoreImg" :key="index"  >
                  <img :src="item.src" :style="{'height':listMoreImg.length == 1?'6.6rem':'2.1rem'}" />
                </li>
              </ul>
            </div>
          </div>

          <div class="footer">
            <div class="time">22分钟前</div>
            <ul>
              <li>
                <span>
                  <img src="@/assets/images/icon/fenxiang.png" alt="">4
                </span>
              </li>
              <li>
                <span>
                   <img src="@/assets/images/icon/speak.png" alt="">3
                </span>
              </li>
              <li>
                <span>
                  <img src="@/assets/images/icon/ding.png" alt="">4
                </span>
              </li>
            </ul>
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
      option: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        freeMode: true
      },
      listImg: [
        {
          src: require("@/assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg")
        }
      ],
      listMoreImg:  [
        {
          src: require("@/assets/images/magazine/index/food/16B1B38A454.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B387D97.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B3891B5.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B384664.jpg")
        },
         {
         src: require("@/assets/images/magazine/index/food/933b4079103743d094261ae6ca733fa4_th.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/p2466554335.jpg")
        },
         {
         src: require("@/assets/images/magazine/index/food/16B1B387D97.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B3891B5.jpg")
        },
         {
          src: require("@/assets/images/magazine/index/food/16B1B38A454.jpg")
        },
      ],
      list: [
        {
          icon: require("@/assets/images/user.png"),
          title: "默默大师号",
          ability: "网红达人"
        },
        {
          icon: require("@/assets/images/user.png"),
          title: "默默大师号",
          ability: "网红达人"
        },
        {
          icon: require("@/assets/images/user.png"),
          title: "默默大师号",
          ability: "网红达人"
        },
        {
          icon: require("@/assets/images/user.png"),
          title: "默默大师号",
          ability: "网红达人"
        },
        {
          icon: require("@/assets/images/user.png"),
          title: "默默大师号",
          ability: "网红达人"
        }
      ],
      list2: [
        {
          src: require("@/assets/images/index/banner1.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        },
        {
          src: require("@/assets/images/index/banner3.jpg")
        },
        {
          src: require("@/assets/images/index/banner3.jpg")
        },
        {
          src: require("@/assets/images/index/banner4.jpg")
        },
        {
          src: require("@/assets/images/index/banner4.jpg")
        },
        {
          src: require("@/assets/images/index/banner3.jpg")
        },
        {
          src: require("@/assets/images/index/banner4.jpg")
        },
        {
          src: require("@/assets/images/index/banner2.jpg")
        }
      ],
      lists: [
        {
          src: require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png"),
          title: "巨鹿不一样的元宵节巨鹿不一样的元宵节",
          watch: "2",
          speak: 163
        },
        {
         src: require("@/assets/images/magazine/dynamic/u=2466454120,4012831513&fm=26&gp=0.jpg"),
          title: "巨鹿不一样的元宵节巨鹿不一样的元宵节",
          watch: "2",
          speak: 523
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.swiper {
  padding: 0.2rem 0;
}
.banner-b{
  /deep/ .swiper-container{
    padding: .15rem 0;
  }
}
.free {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
  width: 2.1rem;
  padding-bottom: 0.4rem;
  box-shadow: 0 0 5px 2px #f0f0f0;
  // border: 1px solid #000;
  .name {
    font-size: 0.3rem;
    color: #040a28;
  }
  .ability {
    color: #a1a4af;
    font-size: 0.24rem;
  }
  span {
    font-size: 0.26rem;
    margin-bottom: 0.1rem;
  }
  .show-img {
    width: 1.03rem;
    margin: 0.4rem 0;
    margin-bottom: 0.3rem;
    height: 1.03rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.content {
  padding: 0.8rem 0.45rem 0.2rem 0.45rem;
}
// 作者
.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0 0 0;
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

    .star {
      margin-left: 0.22rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .star-name {
        font-size: 0.24rem;
        margin-top: 0.05rem;
        color: #999;
        color: #a1a4af;
      }
    }
    .name {
      font-size: 0.32rem;

      color: #2c2c2c;
    }
  }
  .follow {
    background-color: #f8f5f0;
    color: #c3ab87;
    font-size: 0.24rem;
    padding: 0.1rem 0.3rem;
    border-radius: 33px;
  }
}

// 第一版
.list {
  margin: 0.4rem 0;
  margin-top: 0.6rem;
  .item {
    display: flex;
    margin-bottom: 0.5rem;
  }
  .title {
    color: #777;
    font-size: 0.24rem;
    margin-bottom: 0.4rem;
  }
  .left {
    width: 2.18rem;
    height: 2.18rem;
    border-radius: 0.03rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    img {
      height: 100%;
    }
  }
  .rec-content {
    flex: 1;
    padding-left: 0.32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .rec-title {
      font-size: 0.30rem;
    }
  }
  .rec-foot {
    font-size: 0.26rem;
    display: flex;
    color: #9C9C9C;
    > div {
      display: flex;
      align-items: center;
      .van-icon {
        margin-right: 0.1rem;
      }
      span {
      color: #9C9C9C;
      display: inline-block;
      margin-right: 1.31rem;
    }
    }
    
  }
}

.more {
  display: flex;
  justify-content: space-between;
  font-size: 0.32rem;
  padding:  .7rem 0 .6rem 0;
  border: 1px solid #efefef;
  border-left: none;
  border-right: none;
}

// 每一篇
.content-s {
  .item:not(:last-child){
    margin-bottom: 1rem;
  }
  .star-view {
    font-size: 0.23rem;
    padding: 0 0.2rem;
    padding-bottom: 0.2rem;
    p {
      line-height: 0.36rem;
      margin-bottom: 0.2rem;
      color: #777777;
    }
    .star {
      color: #c3ab87;
      margin: 0 0 0.2rem 0;
      display: inline-block;
    }
  }
  // 作者
  .author {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0 0.1rem 0;
    .icon {
      width: 0.92rem;
      height: 0.92rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nick {
      display: flex;
      align-items: center;
      .star {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .star-name {
          font-size: 0.24rem;
          margin-top: 0.05rem;
          color: #999;
        }
      }
      .name {
        font-size: 0.28rem;
        font-weight: 600;
      }
    }
    .follow {
      background-color: #f8f5f0;
      color: #c3ab87;
      font-size: 0.24rem;
      width: 1.36rem;
      height: 0.63rem;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 33px;
    }
  }
  .value {
    font-size: 0.3rem;
    padding: 0.2rem 0;
    line-height: .53rem;
  }
  .photos {
    width: 100%;
    ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      li {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          border-radius: 0.05rem;
          
          width: 100%;
        }
      }
    }
  }
  .footer {
    display: flex;
    padding: 0.3rem 0;
    font-size: 0.26rem;
    color: #999;
    .time {
      flex: 1;
      font-size: 0.24rem;
    }
    ul {
      width: 50%;
      display: flex;
      justify-content: space-around;
      li {
        margin-left: 0.2rem;
      }
      span{
        display: flex;
        align-items: baseline;

      }
      img{
        width: 0.3rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>