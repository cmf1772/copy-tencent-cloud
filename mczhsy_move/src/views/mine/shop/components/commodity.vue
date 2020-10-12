<template>
  <div class="wrapper">
    <div class="list">
      <div class="item" v-for="(item,index) in 20 " :key="index">
        <div class="value">
          <div class="img">
              <img src="@/assets/images/magazine/index/food/16B1B3891B5.jpg" />
          </div>
          <div class="center">
            <div class="title">翡翠玻璃种无暇无裂戒子-18k黄金钻石翡翠玛瑙懂啊懂啊呜呜呜</div>
            <div class="info-list">
              <span>
                留言0
              </span>
              <span>
                浏览1
              </span>
              <span>
                曝光20
              </span>
            </div>
            <div class="amount">
              ￥<span>19999</span>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="f-left">
            刚刚擦亮
          </div>
          <div class="f-right">
            <div class="btn-list">
              <div>已擦亮</div>
              <div>降价</div>
              <div>编辑</div>
              <div><van-icon name="ellipsis" size=".32rem"/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed">
      <div class="btn-list">
        <div>
          上一页
        </div>
        <div>
          下一页
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.wrapper{
  padding-bottom: 1rem;
  .list{
    padding-bottom: 0.3rem;
    .item:not(:last-child){
      padding-bottom: 0.49rem;
      border-bottom: 1px solid #eee;
    }
    .item:not(:first-child){
      padding-top: 0.42rem;
    }
    .item{
      display: flex;
      flex-direction: column;
      .foot{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .24rem;
        padding: .2rem 0;
        padding-top: 0.4rem;
        padding-bottom: 0;
        .btn-list{
          display: flex;
          flex: 1;
          justify-content: flex-end;
          div{
            margin-left: 0.2rem;
            padding: .05rem .25rem;
            border: 1px solid #efefef;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          div:first-child{
            color: #777;
          }
          div:last-child{
            width: 0.4rem;
            padding: 0;
            height: 0.4rem;
            padding: .05rem;

            border-radius: 1rem;
          }
        }
      }
      .value{
        display: flex;
        .center{
          padding-left: 0.32rem;
          display: flex;
          flex-direction: column;
          .amount{
            margin-top: auto;
            font-size: .24rem;
            color: #c3ab87;
            span{
              font-size: .39rem;
            }
          
          }
          .title{
            display: -webkit-box;
            -webkit-line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .3rem;
            font-family: 400;
            -webkit-box-orient: vertical;
          }
          .info-list{
            display: flex;
            padding: .1rem 0;
            font-size: .24rem;
            color: #777;
            span{
              margin-right: 0.3rem;
             
            }
            span:not(:last-child){
               position: relative;
             &::after{
                position: absolute;
              content: '';
              width: 1px;
              height: 80%;
              right: -0.15rem;
              top: 50%;
              transform: translate( 0,calc(-50% + 0.5px));
              background: #bcbcbc;
             }
            }
          }
        }
        .img{
          img{width: 1.9rem;
          height: 1.9rem;
          border-radius: .05rem;}
        }
      }
    }
  }
}
.fixed{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: .2rem .45rem;
  background: #fff;
  box-shadow: 0 -.1rem .1rem .02rem #f0f0f0;
  .btn-list{
    display: flex;
    justify-content: flex-end;
    
    div{
      width: 1.4rem;
      height: 0.57rem;
      border: 1px solid #f0f0f0;
      font-size: .24rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.45rem;
      border-radius: 1rem;
    }
    div:last-child{
      color: #c3ab87;
      border-color: #c3ab87;
    }
  }
}
</style>