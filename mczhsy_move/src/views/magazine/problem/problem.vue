<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="问答" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
        <template #right>
          <div class="right-menu-top">
            <img src="@/assets/images/icon/index/write.png" alt="">
          </div>
        </template>
        <template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt />
        </template>
      </van-nav-bar>
    </div>
    <!-- 搜索 -->
    <div class="search">
      <search></search>
    </div>

    <!-- 内容 -->
    <div class="container">
      <div class="list">
        <div class="item" @click="details(index)" v-for="(item,index) in list" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="content-warp">
            <div class="left">
              <div class="author">
                <div class="icon">
                  <img :src="item.icon" />
                </div>
                <span class="name">{{item.name}}</span>
                <span class="star">{{item.star}}</span>
              </div>
              <div class="center">
                <span>{{item.content}}</span>
              </div>

              <div class="foot">
                <span class="like">
                  <van-icon name="like-o" size=".26rem"/>
                  {{item.like}}
                </span>
                <span class="speak">
                  <van-icon name="chat-o" size=".26rem" />
                  {{item.speak}}
                </span>
              </div>
            </div>
            <div class="right" v-if="item.img">
              <img :src="item.img" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/magazine/problem/releasequestions">发布问题</router-link>
    
    <form method="post" enctype="multipart/form-data">
      <div>
        <label for="file">uploader video</label>
        <input type="file" name="file" id="uploader" accept=".mp4,.flv,.rmvb,.rm,.mov,.mtv,.wmv,.avi,.3gp,.amv,.mp3"/>
      </div>
      <div>
        <input type="submit" value="上传" @click.prevent="upLoaderVideo">
      </div>
    </form>
  </div>
</template>

<script>
import search from "@/components/search/search"; //搜索
export default {
  components: {
    search
  },
  data() {
    return {
      list: [
        {
          title: "五一为什么连着放五天？",
          icon: require("@/assets/images/user.png"),
          name: "正龙",
          star: "美妆博主",
          content:
            "节假日期间，各地区、各部门要妥安 排好值班和安全。节假日期节假日期间，各地、各单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排。",
         img: require("@/assets/images/magazine/problem/u=116606011,2221389896&fm=26&gp=0.jpg"),
          like: 51,
          speak: 16
        },
        {
          title: "五一为什么连着放五天？",
          icon: require("@/assets/images/user.png"),
          name: "正龙",
          star: "美妆博主",
          content:
            "节假日期间，各地、各单位、各部门、各地节假日期间，各地区、各部门要妥安区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排。",
          img: require("@/assets/images/magazine/problem/u=116606011,2221389896&fm=26&gp=0.jpg"),
          like: 51,
          speak: 16
        },
        {
          title: "五一为什么连着放五天？",
          icon: require("@/assets/images/user.png"),
          name: "正龙",
          star: "美妆博主",
          content:
            "节假日期间，各地、各单位、节假日期间，各地区、各部门要妥安各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排。节假日期间，各地、各单位、各部门、各地区做好安排",
          img: null,
          like: 51,
          speak: 16
        }
      ]
    };
  },
  methods: {
    upLoaderVideo(){

    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push({
        name: "reproblem"
      });
    },

    details(index) {
      this.$router.push({
        path: "/magazine/problem/details",
        query: {
          id: index
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.main {
  /deep/ .right-menu-top {
    display: flex;
    align-items: center;
    img {
      height: 0.3rem;
    }
  }
}
.container {
  margin-top: 0.4rem;
  .item {
    margin-bottom: 0.6rem;
  }
  padding: 0 0.45rem;
  .title {
    font-size: 0.3rem;
    font-weight: bold;
  }
  .content-warp {
    display: flex;

    margin-top: 0.2rem;
    
    align-items: center;
    .left {
      display: flex;
      flex-direction: column;
      .author {
        display: flex;
        align-items: center;
        .icon {
          display: flex;
          align-items: center;
        }
        .name {
          color: #2c2c2c;
          font-size: 0.24rem;
          margin-right: 0.4rem;
          margin-left: 0.2rem;
          &::after {
            position: absolute;
            height: 70%;
            width: 1px;
            content: "";
            display: block;
            background: #9c9c9c;
            right: -0.2rem;
            top: 50%;
            transform: translate(0, -50%);
          }
        }
        span {
          font-size: 0.24rem;
          position: relative;
          color: #a1a4af;
        }
        img {
          width: 0.41rem;
          height: 0.41rem;
        }
      }
      .center {
        margin: 0.2rem 0;
        margin-bottom: 0.37rem;
        span {
          font-size: 0.28rem;
          overflow: hidden;
          color: #515151;
          text-overflow: ellipsis;
          display: -webkit-box; //作为弹性伸缩盒子模型显示。
          -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
          -webkit-line-clamp: 2; //显示的行
        }
      }
      .foot {
        font-size: 0.24rem;
        color: #666;
        display: flex;
        span {
          margin-right: 0.5rem;
          display: flex;
          align-items: center;
          font-size: 0.24rem;
          i {
            margin-right: 0.05rem;
          }
        }
      }
    }
    .right {
      width: 30%;
      min-width: 1.8rem;
      max-height: 1.2rem;
      margin-left: 0.1rem;
      img {
        width: 100%;
        border-radius: 0.03rem;
      }
    }
  }
}
.search {
  margin: 0.2rem 0;
  padding: 0 0.2rem;
}
</style>