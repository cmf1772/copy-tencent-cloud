<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="圈子"
        left-text
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #right>
          <img src="@/assets/images/icon/index/xiangji.png" />
        </template>
      </van-nav-bar>
    </div>

    <!-- 搜索框 -->
    <div class="searchs">
      <search></search>
    </div>
    <div class="title-t">
      <div class="to-later">
      <span class="title">圈子看一看</span>
      <img src="@/assets/images/icon/community/arrow.png" alt="">
    </div>
    </div>
    <!-- 滚动图 -->
    <div class="banner-t">
      <swiper :options="option">
        <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
          <div class="free">
            <div class="show-img">
              <img :src="item.icon" />
              <img class="absolute" src="@/assets/images/icon/index/video.png" alt="">
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 搜索更多kl -->
    <div class="search-c">
      <div @click="findMoreCircle">
        <img src="@/assets/images/icon/community/circle2.png" alt="">
        <span>搜索23056个圈子</span>
      </div>
    </div>

    <div class="list">
      <div class="to-later">
        <span class="title">更早的圈子</span>
        <img style="width:.3rem" src="@/assets/images/icon/community/f5.png" alt="">
      </div>
      <div class="item" v-for="(item,index) in 8 " :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">正龙</span>
              <span class="replay-v">郑琴：端午节端午端午端午节端午端午节端午节端午节端午节</span>
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
  data() {
    return {
      option: {
        slidesPerView: 2.5,
        spaceBetween: 20,
        freeMode: true
      },
      list: [
        {
          icon: require("@/assets/images/magazine/dynamic/ab72f009538c8fa0243d5c6c30226c6eef6eeeb6f4c43-fh1Ne4_fw658.png")
        },
        {
          icon: require("@/assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg")
        },
        {
         icon: require("@/assets/images/magazine/dynamic/u=2466454120,4012831513&fm=26&gp=0.jpg")
        },
        {
          icon: require("@/assets/images/magazine/dynamic/65aa3d98affd202bf958ed1fc0f3361632544f4dc574-OOkVsF_fw658.jpg")
        },
        {
         icon: require("@/assets/images/magazine/dynamic/u=2466454120,4012831513&fm=26&gp=0.jpg")
        }
      ]
    };
  },
  components: { search },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    findMoreCircle() {
      this.$router.push({
        path: "/community/circle/findcircle"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.top{
  /deep/ img{
    width: 0.4rem;
  }
}
.searchs {
  padding: 0.4rem 0.2rem 0.2rem 0.2rem;
}

.banner-t {
  /deep/ .swiper-container {
    padding: 0 0.45rem;
  }
  /deep/ .swiper-slide:not(:last-child) {
    margin-right: 0.2rem;
  }
}
// 滚动图
.free {
  display: flex;
  align-items: center;
  box-shadow: 0 0 .15rem .02rem #f7f7f7;
  .show-img {
    height: 3.53rem;
    width: 2.5rem;
    border-radius: 0.06rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 0 2px 2px #ccc;
    position: relative;
    img {
      height: 100%;
      width:  auto;
    }
    .absolute {
      position: absolute;
      height: 0.25rem;
      width: .4rem;
      bottom: 0.12rem;
      left: 0.12rem;
      color: #fff;
    }
  }
}

// 更多圈子
.search-c {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c3ab87;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  div {
    width: 2.35rem;
    height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    border: 1px solid #c3ab87;
    display: flex;
    align-items: center;
  }
  img{
    width: 0.2rem;
    margin:0 0.05rem;
  }
  span {
    font-size: 0.21rem;
    display: inline-block;
  }
}
.title-t{
  padding: .35rem .45rem;
  img{
    height: 0.3rem;
  }
}
.to-later {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 0.42rem;
      font-weight: bold;
    }
    .van-icon {
      font-size: 0.32rem;
    }
  }
//回复列表
.list {
  padding: 0 0.45rem;

  .item {
    margin: 0.5rem 0;
    // 作者
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.2rem 0 0.1rem 0;
      .icon {
        min-width: 0.87rem;
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
          margin-left: 0.31rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .replay-v {
            font-size: 0.24rem;
            margin-top: 0.05rem;
            color: #9c9c9c;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
        }
        .name {
          font-size: 0.32rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>