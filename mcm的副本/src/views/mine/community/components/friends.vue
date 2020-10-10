<template>
  <div class="wrap">
    <div class="btn-list">
      <div class="active">我喜欢的</div>
      <div>喜欢我的</div>
    </div>
    <div class="list">
      <div class="item" v-for="(item,index) in 10" :key="index">
        <div class="img">
          <img src="@/assets/images/icon/mine/community/t01e703fa77e385f8d5.jpg" />
          <div class="foot">
            <div class="name">默默大师</div>
            <div class="adress">
              <van-icon name="location" color="#fff" size=".32rem" />
              <span>上海 · 静安</span>
            </div>
          </div>
        </div>
        <div class="i-foot">
          <div class="info">
            <div class="info-t">
              <span class="age">30岁</span>
              <span class="height">175cm · 巨蟹座</span>
            </div>
            <div class="info-f">每天坏心情!</div>
          </div>
          <div class="like">
            <div>
              <img src="@/assets/images/icon/mine/community/like.png" />
              关注
            </div>
            <div>
              <img src="@/assets/images/icon/mine/community/talk.png" />
              聊天
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.wrap {
  .list {
    padding: 0.4rem 0;
    .item:not(:last-child){
      padding-bottom: 0.4rem;
      border-bottom: 1px solid #eee;
    }
    .item:not(:first-child){
      padding-top: 0.4rem;
    }
    .item {
      .i-foot{
        padding: .2rem 0;
        padding-top: 0.4rem;
        padding-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .like{
          display: flex;
          align-items: center;
          img{
            height: 0.45rem;
            margin-bottom: 0.1rem;
            max-height: .42rem;
            
          }
          div{
            display: flex;
            font-size: .24rem;
            margin-left: 0.6rem;
            color: #777;
            flex-direction: column;
          }
        }
        .info-f{
          font-size: .24rem;
          color: #777;
          margin-top: 0.1rem;
        }
        .info-t{
          display: flex;
          font-size: .27rem;
          .age{
            margin-right: 0.4rem;
            position: relative;
            &::after{
              content: '';
              position: absolute;
              width: 1px;
              top: 50%;
              right: -0.2rem;
              height: 80%;
              background: #DFDFDF;
              transform: translate(calc(50% + 0.5px), calc(-50% + 0.5px));
            }
          }
        }
      }
      .img {
        position: relative;
        height: 6.6rem;
        overflow: hidden;
        border-radius: 0.05rem;
        .foot {
          position: absolute;
          bottom: 0.23rem;
          left: 0;
          right: 0;
          padding: 0 0.29rem;
          display: flex;
          justify-content: space-between;
          color: #fff;
          .adress {
            display: flex;
            align-items: center;
            font-size: 0.27rem;
            .van-icon {
              margin-right: 0.05rem;
            }
          }
          .name {
            font-size: 0.27rem;
          }
        }
        img {
          width: 100%;
          height: 105%;
          
        }
      }
    }
  }
  .btn-list {
    display: flex;
    justify-content: center;
    font-size: 0.26rem;
    div {
      background: #f7f7f7;
      width: 1.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0.6rem;
      border-radius: 1rem;
      margin: 0 0.2rem;
      border: 1px solid transparent;
    }
    .active {
      background: #f9f6f3;
      color: #c3ab87;
      border: 1px solid #c3ab87;
    }
  }
}
</style>