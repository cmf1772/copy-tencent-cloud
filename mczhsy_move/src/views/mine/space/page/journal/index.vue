<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        left-arrow
        title="日志列表"
        right-text="草稿箱"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      ><template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template></van-nav-bar>
    </div>

    <div class="container">
      <div class="edit">
        <div @click="writeJournal">
          <span>写日志</span>
          <img src="@/assets/images/icon/mine/space/rizhi.png" />
        </div>
        <div>
          <span>写手账</span>
         <img src="@/assets/images/icon/mine/space/shouzhang.png" />
        </div>
      </div>

      <div class="content">
        <div class="title">2020-05</div>

        <div class="list-wrap">
          <div class="item-wrap">
            <div class="time">
              <span class="d">05</span>
              <span class="m">十一月</span>
            </div>
            <div class="list">
              <div class="item" v-for="(item,index) in 3 " :key="index">
                <div class="center">
                  <div class="name">记录不一样的元宵节记录不一样的元宵节</div>
                  <div class="c-foot">
                    <div class="look">
                      <img src="@/assets/images/icon/mine/space/eye.png" style="width:.32rem;margin-right:.1rem" />
                      <span class="num">4</span>
                    </div>
                    <div class="private">空间状态为私密</div>
                  </div>
                </div>
                <div class="img">
                  <img src="@/assets/images/index/banner2.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div class="item-wrap">
            <div class="time">
              <span class="d">21</span>
              <span class="m">三月</span>
            </div>
            <div class="list">
              <div class="item" v-for="(item,index) in 3 " :key="index">
                <div class="center">
                  <div class="name">记录不一样的元宵节记录不记录不记录不一样的元宵节记录不一样的元宵节一样的元宵节记录不一样的元宵节</div>
                  <div class="c-foot">
                    <div class="look">
                      <img src="@/assets/images/icon/mine/space/eye.png" style="width:.32rem;margin-right:.1rem" />
                      <span class="num">4</span>
                    </div>
                  </div>
                </div>
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
    },
    onClickRight() {},
    writeJournal(){
      this.$router.push({
        path: "/mine/space/journal/write"
      })
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 0.2rem .45rem;

  .content {
    padding-top: 0.6rem;

    // 每一个大时间
    .list-wrap {
      // 大时间里每一项
      .item-wrap:not(:last-child) {
        border-bottom: 1px solid #eee;
      }
      .item-wrap {
        display: flex;
        align-items: flex-start;
        padding: 0.45rem 0;
        .time {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 0.24rem;
          min-width: 0.8rem;
          .d {
            font-weight: 600;
            font-size: 0.3rem;
          }
        }
        .list {
          display: flex;
          flex-direction: column;
          .item:not(:first-child) {
            padding-top: 0.5rem;
            border-top: 1px solid #eee;
          }
          .item:not(:last-child) {
            padding-bottom: 0.5rem;
          }
          .item {
            display: flex;

            .center {
              display: flex;
              padding-left: 0.45rem;
              flex-direction: column;
              justify-content: space-between;
              .name {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                font-size: 0.3rem;
                margin-bottom: 0.3rem;
              }
              .c-foot {
                display: flex;
                align-items: center;
                color: #9c9c9c;
                font-size: 0.24rem;
                .look {
                  display: flex;
                  align-items: center;
                  .van-icon {
                    margin-right: 0.05rem;
                  }
                }
                .private {
                  margin-left: 0.3rem;
                  margin-top: auto;
                }
              }
            }
            .img {
              padding-left: 0.2rem;
              img {
                width: 1.38rem;
                height: 1.38rem;
                border-radius: 0.05rem;
              }
            }
          }
        }
      }
    }
    // 时间标题
    .title {
      font-size: 0.42rem;
      padding-bottom: 0.2rem;
      font-weight: bold;
      border-bottom: 1px solid #f1f1f1;
    }
  }
  // 写日志 写手账
  .edit {
    margin-bottom: 0.2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.2rem;
    div {
      display: flex;
      padding: 0.2rem .44rem;
      align-items: center;
      font-size: 0.3rem;
      justify-content: space-between;
      box-shadow: 0 0 10px 1px #eeeeee;
      span {
        margin-right: 0.4rem;
        font-weight: bold;
      }
      img {
        width: 0.95rem;
        height: 0.95rem;
        border-radius: 1rem;
      }
    }
  }
}
</style>