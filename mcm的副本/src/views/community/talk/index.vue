<template>
  <div class="main">
    <div class="top">
      <van-nav-bar @click-left="onClickLeft" left-arrow title="聊天">
        <template #right>
           <img src="@/assets/images/icon/community/duoren.png" @click="concat" />
           <img src="@/assets/images/icon/community/add.png" />
        </template>
        <template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template>
      </van-nav-bar>
    </div>

    <!-- 搜索 -->
    <div class="serach-t">
      <search></search>
    </div>

    <!-- 主体 -->
    <div class="container">
      <div class="list">
        <div class="item" v-for="(item,index) in 15 " :key="index" @click="goNowTalk">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="star">
                <div class="name-time">
                  <span class="name">正龙</span>
                  <span class="time">02-09</span>
                </div>

                <span class="replay-v">端午节端午端dsdsaa午端端dsa节端午节端dsa午节端午节</span>
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
  components: {
    search
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    forward() {},
    concat() {
      this.$router.push({
        path: "/community/talk/concat"
      });
    },
    goNowTalk(){
      this.$router.push({
        path: "/community/talk/now"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  height: 0.34rem;
  /deep/.van-nav-bar__right img{
    
    margin-left: 0.7rem;
  }
}
.serach-t {
  padding: 0.2rem .45rem;
  margin-bottom: 0.2rem;
  margin-top: 0.45rem;
}
.container {
  padding: 0 0.45rem;
  .item {
    margin: 0.4rem 0;
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
          display: flex;
          flex-direction: column;
          margin-left: 0.3rem;
          justify-content: center;
          .replay-v {
            font-size: 0.24rem;
            margin-top: 0.05rem;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          }
        }
        .name-time {
          display: flex;
          justify-content: space-between;
          .time {
            font-size: 0.2rem;
            color: #999;
          }
          .name {
            font-size: 0.32rem;
            
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>