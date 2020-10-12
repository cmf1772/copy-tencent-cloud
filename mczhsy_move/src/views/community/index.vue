<template>
  <div class="main">
    <div class="top">
      <van-nav-bar @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <img src="@/assets/images/icon/index/search.png" />
          <img src="@/assets/images/icon/index/xiangji.png" />
        </template>
        <template #left>
          <div class="left-top">
            <span class="title">社区</span>
            <span class="adress">{{adressText}}</span>
          </div>
        </template>
      </van-nav-bar>
    </div>

    <ul class="inavs">
      <li>
        <router-link to="/community/talk">
          <img src="@/assets/images/icon/community/talk.png" />
          <p>聊天</p>
        </router-link>
      </li>
      <li>
        <router-link to="/community/friends">
          <img src="@/assets/images/icon/community/addfriend.png" />
          <p>交友</p>
        </router-link>
      </li>
      <li>
        <router-link to="/community/circle">
          <img src="@/assets/images/icon/community/circle.png" />
          <p>圈子</p>
        </router-link>
      </li>
      <li>
        <router-link to="/magazine/video">
          <img src="@/assets/images/icon/community/video.png" />
          <p>视频</p>
        </router-link>
      </li>
      <li>
        <router-link to="/broadcast">
          <img src="@/assets/images/icon/community/longtalk.png" />
          <p>快聊</p>
        </router-link>
      </li>
    </ul>

    <div class="content">
      <!-- 每一篇文章 -->
      <div class="item">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">正龙</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          <div class="star-view">
            <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节</p>
            <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节</p>
            <span class="star">#微博年度奖#</span>
            <br />
            <span class="star-foot">微博最具人气投票</span>
          </div>
          <div class="photos">
            <ul :style="`grid-template-columns: repeat(${1 < 2 ? 1:(1<5?2:3)},1fr);`">
              <li>
                <img
                  src="@/assets/images/community/u=2525721197,2106052897&fm=214&gp=0.jpg"
                  :style="{'height':1 == 1?'6.6rem':'2.1rem'}"
                />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt /> 4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt /> 4
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">正龙</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          <div class="star-view">
            <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节</p>
            <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节</p>
            <span class="star">#微博年度奖#</span>
            <br />
            <span class="star-foot">微博最具人气投票</span>
          </div>
          <div class="photos">
            <ul :style="`grid-template-columns: repeat(${2 < 2 ? 1:(2<5?2:3)},1fr);`">
              <li>
                <img
                  src="@/assets/images/magazine/dynamic/u=2466454120,4012831513&fm=26&gp=0.jpg"
                  :style="{'height':2 == 1?'auto':'2.1rem','width':'auto'}"
                />
              </li>
              <li>
                <img
                  src="@/assets/images/magazine/problem/u=116606011,2221389896&fm=26&gp=0.jpg"
                  :style="{'height':2 == 1?'auto':'2.1rem','width':'100%'}"
                />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt /> 4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt /> 4
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="item">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">正龙</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          <div class="star-view">
            <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节</p>
            <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节</p>
            <span class="star">#微博年度奖#</span>
            <br />
            <span class="star-foot">微博最具人气投票</span>
          </div>
          <div class="photos">
            <ul :style="`grid-template-columns: repeat(${2 < 2 ? 1:(2<5?2:3)},1fr);`">
              <li>
                <img
                  src="@/assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg"
                  :style="{'height':1 == 1?'6.6rem':'2.1rem'}"
                />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt /> 4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt /> 4
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="item" v-for="(item,index) in 8" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">正龙</span>
            </div>
          </div>
          <div class="follow">关注</div>
        </div>
        <div class="item-value">
          <div class="value">纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。</div>
          <div class="star-view">
            <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节</p>
            <p>纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节。纪录不一样的元宵节</p>
            <span class="star">#微博年度奖#</span>
            <br />
            <span class="star-foot">微博最具人气投票</span>
          </div>
          <div class="photos">
            <ul
              :style="`grid-template-columns: repeat(${list.length < 2 ? 1:(list.length<5?2:3)},1fr);`"
            >
              <li v-for="(item,index) in list" :key="index">
                <img :src="item.src" :style="{'height':list.length == 1?'6.6rem':'1.9rem'}" />
              </li>
            </ul>
          </div>
        </div>

        <div class="footer">
          <div class="time">22分钟前</div>
          <ul>
            <li>
              <span>
                <img src="@/assets/images/icon/speak.png" alt /> 4
              </span>
            </li>
            <li>
              <span>
                <img src="@/assets/images/icon/ding.png" alt /> 4
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import footerBar from "@/components/customFooter/customFooter"; //底部tabbar
export default {
  components: { footerBar },
  data() {
    return {
      list: [
        {
          src: require("@/assets/images/index/banner1.jpg")
        }
      ],
      adressText:'苏州'
    };
  },
  activated(){
    // 获取缓存中是否有地址
    this.adressText = localStorage.getItem("adressText")?localStorage.getItem("adressText").split('·')[0]:"苏州";
  },
  methods: {
    onClickLeft() {},
    onClickRight() {}
  }
};
</script>
<style lang="less" scoped>
.top {
  /deep/ img {
    width: 0.4rem;
    margin-left: 0.5rem;
  }
  /deep/ .left-top {
    display: flex;
    align-items: flex-end;
    * {
      display: inline-block;
    }
    .title {
      font-size: 0.42rem;
      font-weight: 600;
      color: #000;

      margin-right: 0.2rem;
    }
    .adress {
      font-size: 0.28rem;
      color: #222;
    }
  }
  .van-icon {
    margin-left: 0.2rem;
  }
}
.inavs {
  overflow: hidden;
  text-align: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0.45rem 0.3rem 0.45rem;
  li {
    display: inline-block;
    text-align: center;
    margin: 0 0.2rem;
  }
  li img {
    width: 0.4rem;
    height: 0.4rem;
  }
  li p {
    font-size: 0.24rem;
    color: #777;
  }
}

// 每一篇
.content {
  padding: 0 0.45rem;
  padding-bottom: 70px;
  .item {
    padding: 0.35rem 0;
  }
  .item:not(:last-child) {
    border-bottom: 1px solid #f1f1f1;
  }
  .star-view {
    font-size: 0.26rem;
    padding: 0 0.2rem;
    padding-bottom: 0.2rem;
    p {
      line-height: 0.45rem;
      margin-bottom: 0.57rem;
      color: #777777;
    }
    .star {
      color: #c3ab87;
      margin: 0 0 0.33rem 0;
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
          font-size: 0.2rem;
          margin-top: 0.05rem;
          margin-left: 0.1rem;
          color: #999;
        }
      }
      .name {
        font-size: 0.32rem;
        margin-left: 0.22rem;
        font-weight: 400;
      }
    }
    .follow {
      background-color: #f8f5f0;
      color: #c3ab87;
      font-size: 0.28rem;
      width: 1.37rem;
      height: 0.63rem;
      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 33px;
    }
  }
  .value {
    font-size: 0.3rem;
    margin-bottom: 0.37rem;
    padding: 0.2rem 0;
  }
  .photos {
    width: 100%;
    ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      li {
        img {
          width: 6.6rem;
          height: 6.6rem;
          border-radius: 0.05rem;
          overflow: hidden;
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
      width: 30%;
      display: flex;
      justify-content: space-around;
      span {
        display: flex;
        align-items: center;
      }
      img {
        width: 0.3rem;
        margin-right: 0.1rem;
      }
    }
  }
}
</style>