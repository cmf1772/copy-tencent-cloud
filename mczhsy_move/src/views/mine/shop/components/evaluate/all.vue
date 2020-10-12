<template>
  <div class="wrap">
    <div class="list">
      <div class="item" >
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
          </div>
          <div class="center">
            <div class="center-t">
              <div class="star">
                <span class="name">正龙</span>
                <span class="release-time">2020-03-21 12:36</span>
              </div>
              <div class="more">
                 <img src="@/assets/images/icon/mine/shop/hp.png" style="width:.37rem" />
              </div>
            </div>
            <div class="evalaute-value">
              记录不一样的元宵节。记录不一样的元宵节记录。
            </div>
          </div>
        </div>
      </div>
      <div class="item" >
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
          </div>
          <div class="center">
            <div class="center-t">
              <div class="star">
                <span class="name">正龙</span>
                <span class="release-time">2020-5-21 14:16</span>
              </div>
              <div class="more">
                 <img src="@/assets/images/icon/mine/shop/hp.png" style="width:.37rem" />
              </div>
            </div>
            <div class="evalaute-value">
              记录不一样的元宵节。记录不一样的元宵节记录。记录不一样的元宵节。记录不一样的元宵节记录。
            </div>
          </div>
        </div>
      </div>
       <div class="item"  v-for="(item,index) in 25" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
          </div>
          <div class="center">
            <div class="center-t">
              <div class="star">
                <span class="name">正龙</span>
                <span class="release-time">2020-6-11 12:36</span>
              </div>
              <div class="more">
                 <img src="@/assets/images/icon/mine/shop/hp.png" style="width:.37rem" />
              </div>
            </div>
            <div class="evalaute-value">
              记录不一样的元宵节。记录不一样的元宵节记录。记录不一样的元宵节。记录不一样的元宵节记录。记录不一样的元宵节。记录不一样的元宵节记录。记录不一样的元宵节。记录不一样的元宵节记录。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>

<style lang="less" scoped>
.wrap {
  .list {
    padding: 0.3rem 0;
    .item:not(:last-child){
      padding-bottom: 0.26rem;
      border-bottom: 1px solid #eee;
    }
    .item:not(:first-child){
      padding-top: 0.56rem;
    }
    .item {
      // 作者
      .author {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0.2rem 0 0.1rem 0;
        .icon {
          width: 0.87rem;
          height: 0.87rem;
          // border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .nick {
          display: flex;
          align-items: center;
        }
        .center {
          display: flex;
          padding-left: 0.3rem;
          flex-direction: column;
          flex: 1;
          .center-t {
            display: flex;
            justify-content: space-between;
            .star {
              display: flex;
              flex-direction: column;
              justify-content: center;
              .release-time {
                font-size: 0.24rem;
                margin-top: 0.05rem;
                color: #999;
              }
            }
            .name {
              font-size: 0.3rem;
            }
          }
          .evalaute-value{
            font-size: .3rem;
            padding: .2rem 0;
            padding-bottom: 0;
          }
        }
        .more {
          .van-icon {
          }
        }
      }
    }
  }
}
</style>