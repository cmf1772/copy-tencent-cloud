<template>
  <div class="main">
    <div class="top">
      <van-nav-bar title="留言板" left-arrow @click-left="onClickLeft">
        <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="input-v">
        <div class="input-l">留言个吧~</div>
        <img src="@/assets/images/icon/mine/space/smail.png" style="width:.4rem;margin-left:.4rem" />
      </div>

      <div class="list">
        <div class="item" v-for="(item,index) in 15" :key="index">
          <div class="author">
            <div class="icon">
               <img src="@/assets/images/user.png" /> 
            </div>
            <div class="center">
              <div class="value">
                <div class="name">
                  <div class="text">默默大师</div>
                  <div class="time">
                    02-07
                    <div class="private">
                      <img src="@/assets/images/icon/mine/space/private.png" style="width:.18rem;margin-right:.05rem" />空间状态为私密
                    </div>
                  </div>
                </div>
                <van-icon name="ellipsis" size=".32rem" color="#999" />
              </div>
              <div class="content">记录不一样的元宵节。记录不一样的元宵节记录。记录不一样的元宵节。记录不一样的元宵节记录。</div>
            </div>
          </div>
          <div class="input-v">
            <div class="input-l">留言</div>
          </div>
          <div class="speak">
            <div class="s-title">
              全部评论6条
            </div>
            <div class="s-list">
              <div class="s-item">
                <div class="name">zy00</div>:<span>大部分好的好的好的</span>
              </div>
              <div class="s-item">
                <div class="name">张杰ZY00</div>:<span>大部分好的好的好的大部分好的好的好的大部分好的好的好的大部分好的好的好的</span>
              </div>
              <div class="s-item">
                <div class="name">zy00</div>:<span>大部分好的好的好的</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.2rem .45rem;
  .list {
    padding: 0.3rem 0;
    .item:not(:first-child){
      padding-bottom: 0.4rem;
      border-top: 1px solid #eee;
    }
    .item:not(:last-child){
      padding-top: 0.8rem;
    }
    .item {
      .speak{
        padding: .2rem 0;
        padding-bottom: 0;
        .s-title{
          font-size: .3rem;
          color: #9C9C9C;
          padding: .48rem 0 .48rem 0;
        }
        
        .s-item{
          margin-bottom: 0.25rem;
          font-size: .24rem;
          .name{
            color: #c3ab87;
            display: inline-block;
          }
          span{
            margin-left: 0.05rem;

          }
        }
      }
      .author {
        display: flex;
        // align-items: center;
        margin-bottom: 0.46rem;
        align-items: flex-start;
        // margin-bottom: 0.1rem;
        .icon {
          position: relative;
          img {
            width: 0.87rem;
            height: 0.87rem;
            // border-radius: 1rem;
          }
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding-left: 0.3rem;
          .content {
            font-size: 0.3rem;
            padding-top: 0.46rem;
          }
          .value {
            display: flex;

            justify-content: space-between;
            align-items: center;

            .name {
              height: 80%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .text {
                font-size: 0.32rem;
                font-weight: 400;
                margin-bottom: 0.05rem;
              }
              .time {
                font-size: 0.2rem;
                color: #777;
                display: flex;
                align-items: center;
                .private {
                  display: flex;
                  align-items: center;
                  margin-left: 0.2rem;
                }
              }
            }
            > .van-icon {
              transform: rotate(90deg);
            }
          }
        }
      }
    }
  }
  .input-v {
    display: flex;
    align-items: center;
    .input-l {
      flex: 1;
      background: #f7f7f7;
      font-size: 0.28rem;
      padding: 0.15rem 0.2rem;
      border-radius: 1rem;
      color: #a8a8a8;
    }
    .van-icon {
      margin-left: 0.2rem;
    }
  }
}
</style>