<template>
  <div class="wrapper">
    <div class="list">
      <div class="item" v-for="(item,index) in 25" :key="index">
        <div class="author">
          <div class="nick">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="star">
              <div class="name">
                北京买房
                <span class="time">02-12</span>
              </div>
              <span class="value">[99+新帖] 政龙：求租通州北苑附近小两居，华嗲嗲阿嗲阿嗲阿</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  activated() {
    window.localStorage.setItem("circle", false);
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  padding: 0.3rem 0;
  .list {
    .item:not(:last-child) {
      padding-bottom: 0.15rem;
      border-bottom: 1px solid #eee;
    }
    .item:not(:first-child) {
      padding-top: 0.15rem;
    }
    .item {
      // 作者
      .author {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.2rem 0 0.1rem 0;
        .icon {
          width: 0.87rem;
          height: 0.87rem;
          min-width: 0.87rem;
          // border-radius: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .nick {
          display: flex;
          align-items: center;
          .name {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.32rem;
            .time {
              font-size: 0.24rem;
              color: #777;
            }
          }
          .star {
            padding-left: 0.3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .value {
              font-size: 0.2rem;
              margin-top: 0.05rem;
              color: #999;
              text-overflow: ellipsis;
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
            }
          }
        }
      }
    }
  }
}
</style>