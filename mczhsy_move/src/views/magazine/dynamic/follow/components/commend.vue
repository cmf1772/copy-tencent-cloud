<template>
  <div class="main">
    <!-- 换一换 -->
    <div class="change">
      <div>
        <span>
          <van-icon name="replay" size=".26rem" color="#C3AB87" />换一换
        </span>
      </div>
    </div>

    <!-- 滚动图 -->
    <div class="banner">
      <swiper :options="option" style="padding:.15rem .45rem">
        <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
          <div class="free">
            <div class="show-img">
              <img :src="item.icon" />
            </div>
            <span class="name">{{item.title}}</span>
            <span class="ability">{{item.ability}}</span>
            <div class="follow">关注</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <!-- 文章主要内容 -->
    <div class="content">
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
              <li
                v-for="(item,index) in listImg"
                :key="index"
                :style="{'height':listImg.length == 1?'5rem':'1.9rem'}"
              >
                <img :src="item.src" />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />5
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
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
              <li v-for="(item,index) in listMoreImg" :key="index">
                <img :src="item.src" :style="{'height':listMoreImg.length == 1?'5rem':'1.9rem'}" />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/fenxiang.png" alt />4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt />3
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt />4
              </span>
            </li>
          </ul>
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
      listMoreImg: [
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
        }
      ],
      list2: [
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
      ]
    };
  }
};
</script>
<style lang="less" scoped>
// 换一换
.change {
  display: flex;
  padding: 0.2rem;
  justify-content: flex-end;
  font-size: 0.24rem;
  color: #c3ab87;
  span {
    display: inline-block;
    padding: 0.05rem 0.2rem;
    border: #c3ab87 1px solid;
    border-radius: 27px;
    display: flex;
    align-items: center;
  }
}

// //滚动图
.free {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem;
  box-shadow: 0 0 5px 2px #f7f7f7;
  .name {
    font-size: 0.28rem;
    color: #040a28;
  }
  .ability {
    color: #a1a4af;
    font-size: 0.22rem;
    margin-bottom: 0;
  }
  span {
    font-size: 0.26rem;
    margin-bottom: 0.1rem;
  }
  .show-img {
    width: 1.03rem;
    height: 1.03rem;
    margin: 0.4rem 0;
    margin-bottom: 0.3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .follow {
    font-size: 0.24rem;
    width: 1.36rem;
    height: 0.63rem;
    padding: 0;
    margin-top: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background: #c3ab87;
    color: #fff;
  }
}
// 作者
.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0 0.1rem 0;
  .nick {
    display: flex;
    align-items: center;
    .star {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 0.22rem;
      .star-name {
        font-size: 0.2rem;
        margin-top: 0.05rem;
        margin-left: 0.1rem;
        color: #999;
      }
    }
    .name {
      font-size: 0.28rem;
      margin-left: 0.1rem;
      font-weight: 600;
    }
  }
  .follow {
    background-color: #f8f5f0;
    color: #c3ab87;
  }
}
// 每一篇
.content {
  padding: 0.8rem 0.45rem 0.2rem 0.45rem;
  .item:not(:last-child) {
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
      border-radius: 1rem;
    }
  }
  .value {
    font-size: 0.3rem;
    padding: 0.2rem 0;
    line-height: 0.53rem;
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
      span {
        display: flex;
        align-items: baseline;
      }
      img {
        width: 0.3rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>