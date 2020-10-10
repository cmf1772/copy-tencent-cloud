<template>
  <div class="wrapper">
    <div class="list">
      <div class="item" v-for="(item,index) in 20 " :key="index" @click="administration">
        <div class="icon">
          <img src="@/assets/images/user.png" /> 
        </div>
        <div class="center">
          <div class="title">
            随手拍北京
            <van-icon name="arrow" size=".28rem" color="#999" />
          </div>
          <div class="posts">
            <div>
              今日帖子
              <span>21</span>
            </div>
            <div>
              新增会员
              <span>100</span>
            </div>
          </div>
          <div class="foot">
            <div>
              <van-icon name="friends-o" size=".28rem" color="#999" />90
            </div>
            <div>
              <van-icon name="orders-o" size=".28rem" color="#999" />20
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="release" @click="release">
      <van-icon name="plus" size=".4rem" />创建
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    release() {
      this.$router.push({
        path: "/mine/community/circle/create"
      });
    },
    administration(){
      this.$router.push({
        path: "/mine/community/circle/administration"
      })
    }
  },
  activated() {
    window.localStorage.setItem("circle", true);
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  padding: 0.3rem 0;
  .release {
    position: fixed;
    right: 0.45rem;
    bottom: 0.8rem;
    display: flex;
    flex-direction: column;
    font-size: 0.24rem;
    text-align: center;
    justify-content: center;
    width: 1.4rem;
    height: 1.4rem;
    background: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 .2rem 1px #d0d0d0;
  }
  .list {
    .item:not(:last-child) {
      padding-bottom: 0.3rem;
      border-bottom: 1px solid #f1f1f1;
    }
    .item:not(:first-child) {
      padding-top: 0.2rem;
    }
    .item:first-child {
      margin-top: 0.2rem;
    }
    .item {
      display: flex;
      .center {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-left: 0.2rem;
        .foot {
          display: flex;
          font-size: 0.22rem;
          div {
            display: flex;
            align-items: flex-end;
            padding: 0.05rem 0;
            color: #999;
            margin-right: 0.4rem;
          }
        }
        .title {
          display: flex;
          font-size: 0.32rem;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 0.1rem;
        }
        .posts {
          display: flex;
          align-items: center;
          div:first-child {
            position: relative;
            &::after {
              position: absolute;
              content: "";
              width: 1px;
              height: 80%;
              background: #eee;
              right: -0.2rem;
              top: 50%;
              transform: translate(calc(-50% + 0.5px), calc(-50% + 0.5px));
            }
          }
          div {
            display: flex;
            align-items: center;
            font-size: 0.24rem;
            color: #9c9c9c;
            margin: 0.05rem 0;
            margin-right: 0.4rem;
            span {
              color: #000;
              font-weight: 400;
              margin-left: 0.03rem;
            }
          }
        }
      }
      .icon {
        img {
          width: 0.87rem;
          height: 0.87rem;
        }
      }
    }
  }
}
</style>