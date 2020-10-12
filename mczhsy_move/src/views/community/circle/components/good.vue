<template>
  <div class="container">
    <van-cell title="在家也能很快乐" is-link />
    <div class="list">
      <div class="item" v-for="(item,index) in 3 " :key="index">
        <div class="club">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">狗子俱乐部</span>
              <div class="fans">
                <span>1635个成员</span>
                <span>222条帖子</span>
              </div>
            </div>
          </div>
          <div class="follow"  @click="circleDetailed">加入</div>
        </div>
      </div>
    </div>

    <van-cell title="热门优选榜" is-link />
    <div class="list">
      <div class="item" v-for="(item,index) in 3 " :key="index">
        <span class="pm">{{index+1}}</span>
        <div class="club">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">狗子俱乐部</span>
              <div class="fans">
                <span>1635个成员</span>
                <span>222条帖子</span>
              </div>
            </div>
          </div>
          <div class="follow"  @click="circleDetailed">加入</div>
        </div>
      </div>
    </div>

    <van-cell title="新圈推荐榜" is-link />
    <div class="list">
      <div class="item" v-for="(item,index) in 3 " :key="index">
        <div class="club">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <span class="name">狗子俱乐部</span>
              <div class="fans">
                <span>1635个成员</span>
                <span>222条帖子</span>
              </div>
            </div>
          </div>
          <div class="follow" @click="circleDetailed">加入</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    circleDetailed(){
      this.$router.push({
         path: "/community/circle/detailed"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  /deep/ .van-cell__title:first-child span {
    color: #000;
    font-size: 0.42rem;
    font-weight: 600;
  }
  .van-cell{
    padding: .1rem .45rem;
    padding-top: 0.6rem;
  }
}
.list {
  padding: 0rem .45rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 0.1rem;
    padding-bottom: .5rem;
    .pm{
      position: relative;
      margin-right: 0.2rem;
      font-size: .36rem;
      &::after{
        content:'';
        position: absolute;
        width: 0.2rem;
        height: 2px;
        background: #C3AB87;
        bottom: -0.05rem;
        left: 50%;
        transform: translate(-50%,0);
      }
    }
    .club {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
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
          margin-left: 0.1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .fans {
            font-size: 0.24rem;
            margin-top: 0.05rem;
            margin-left: 0.1rem;
            color: #999;
            span:first-child {
              margin-right: 0.4rem;
              position: relative;
              &::after {
                content: "";
                position: absolute;
                width: 1px;
                height: 80%;
                top: 50%;
                transform: translate(0, -50%);
                right: -0.2rem;
                background: #f0f0f0;
              }
            }
          }
        }
        .name {
          font-size: 0.32rem;
          margin-left: 0.1rem;
          font-weight: 600;
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
  }
}
</style>