<template>
  <div class="wrap">
    <div class="list">
      <div class="item" v-for="(item,index) in 15" :key="index">
        <div class="img">
          <img src="@/assets/images/index/banner1.jpg" />
        </div>
        <div class="center">
          <div class="title">记录不一记录不一样的元宵节记录</div>
          <div class="look">
            <div class="l-l">
              <img src="@/assets/images/icon/mine/space/eye.png" style="width:.32rem;margin-right:.1rem"/>5024万
            </div>
            <div class="adress">安和</div>
          </div>
          <div class="foot">
            <div class="time">2020-02-23</div>
            <div class="btn-list">
              <img src="@/assets/images/icon/mine/space/fenxiang.png" style="width:.3rem;margin-left:.0rem"/>
              <img src="@/assets/images/icon/mine/space/write.png" style="width:.3rem;margin-left:.4rem"/>
              <img src="@/assets/images/icon/mine/space/del.png" style="width:.3rem;margin-left:.4rem"/>
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
  .item:not(:first-child){
    border-bottom: 1px solid #f0f0f0;
  }
  .item {
    padding: .45rem 0;
    display: flex;
    .center {
      display: flex;
      flex-direction: column;
      padding-left: 0.32rem;
      flex: 1;
      .foot{
        font-size: .26rem;
        margin-top: auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        color: #777;
        .van-icon{
          margin-left: 0.2rem;
        }
      }
      .title {
        font-size: 0.3rem;
        font-weight: 400;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .look {
        display: flex;
        justify-content: space-between;
        font-size: 0.26rem;
        margin-top: 0.2rem;
        color: #777;
        .l-l{
          display: flex;
          align-items: center;
          .van-icon{
            margin-right: 0.05rem;
          }
        }
      }
    }
    .img {
      img {
        width: 2.16rem;
        height: 2.16rem;
        border-radius: 0.05rem;
      }
    }
  }.item:first-child{
    padding-top: 0;
  }
}
</style>