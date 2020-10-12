<template>
  <div class="main">
    <div class="top">
      <van-nav-bar
        title="我的访客"
        right-text="发表"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
      <template #left>
           <img src="@/assets/images/icon/index/arrow.png" />
        </template></van-nav-bar>
    </div>

    <div class="container">
      <div class="nav">
        <div class="center-nav">
          <ul>
            <li v-for="(item,index) in activeList" :key="index">
              <span
                :class="item.active == active?'active':''"
                @click="changeActive(item.active)"
              >{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="view-v">
        <div class="all-num">
          <p>5500</p>
          <span>总浏览量</span>
        </div>
        <div class="today">
          <div class="people">
            <span>0</span>人
          </div>
          <p>今日访客</p>
        </div>
        <div class="today-see">
          <p>2</p>
          <span>今日浏览</span>
        </div>
      </div>

      <div class="liner"></div>

      <div class="list">
        <div class="title-t">05-02</div>
        <div class="item">
          
          <div class="author">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="center">
              <div class="value">
                <div class="name">
                  <div class="text">默默大师</div>
                  <div class="time">
                    <span>10:51</span>
                    <div class="private">
                      访问了您空间
                    </div>
                  </div>
                </div>
                <van-icon name="ellipsis" size=".32rem" color="#999" />
              </div>
             </div>
          </div>
        </div>
         <div class="item">
          <div class="author">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="center">
              <div class="value">
                <div class="name">
                  <div class="text">默默大师</div>
                  <div class="time">
                    <span>10:51</span>
                    <div class="private">
                      访问了您空间
                    </div>
                  </div>
                </div>
                <van-icon name="ellipsis" size=".32rem" color="#999" />
              </div>
             </div>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="title-t">04-02</div>
        <div class="item" v-for="(item,index) in 6" :key="index">
          
          <div class="author">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="center">
              <div class="value">
                <div class="name">
                  <div class="text">默默大师</div>
                  <div class="time">
                    <span>10:51</span>
                    <div class="private">
                      访问了您空间
                    </div>
                  </div>
                </div>
                <van-icon name="ellipsis" size=".32rem" color="#999" />
              </div>
             </div>
          </div>
        </div>
         <div class="item" >
          <div class="author">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="center">
              <div class="value">
                <div class="name">
                  <div class="text">默默大师</div>
                  <div class="time">
                    <span>10:51</span>
                    <div class="private">
                      访问了您空间访问了您空间访问了您空间访问了您空间
                    </div>
                  </div>
                </div>
                <van-icon name="ellipsis" size=".32rem" color="#999" />
              </div>
             </div>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="title-t">03-02</div>
        <div class="item" v-for="(item,index) in 3" :key="index">
          
          <div class="author">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="center">
              <div class="value">
                <div class="name">
                  <div class="text">默默大师</div>
                  <div class="time">
                    <span>10:51</span>
                    <div class="private">
                      访问了您空间
                    </div>
                  </div>
                </div>
                <van-icon name="ellipsis" size=".32rem" color="#999" />
              </div>
             </div>
          </div>
        </div>
      </div>

      <div class="list">
        <div class="title-t">02-22</div>
        <div class="item" v-for="(item,index) in 4" :key="index">
          
          <div class="author">
            <div class="icon">
              <img src="@/assets/images/user.png" />
            </div>
            <div class="center">
              <div class="value">
                <div class="name">
                  <div class="text">默默大师</div>
                  <div class="time">
                    <span>10:51</span>
                    <div class="private">
                      访问了您空间
                    </div>
                  </div>
                </div>
                <van-icon name="ellipsis" size=".32rem" color="#999" />
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
  data() {
    return {
      activeList: [
        { title: "谁看过我", active: "commodity" },
        { title: "我看过谁", active: "shop" },
        { title: "被挡访客", active: "contents" }
      ],
      active: "commodity"
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {},
    changeActive(active) {
      this.active = active;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  .list {
    padding: 0.2rem 0.45rem;
    padding-bottom: 0.4rem;
    .title-t {
      font-size: 0.3rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }

    .item {
      
      .author {
        display: flex;
        // align-items: center;
        padding: 0.1rem 0;
        align-items: center;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;position: relative;
        &::after {
        content: "";
        position: absolute;
        width: 85%;
        height: 1px;
        background: #efefef;
        right: 0;
        bottom: -0.1rem;
      }
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
          padding-left: 0.2rem;
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
                margin-bottom: 0.05rem;
                font-weight: 400;
              }
              .time {
                font-size: 0.24rem;
                color: #777;
                display: flex;
                align-items: center;
                .private {
                  display: flex;
                  align-items: center;
                  margin-left: 0.2rem;
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  text-overflow: ellipsis;
                  -webkit-line-clamp: 1;
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
  .liner {
    height: 0.1rem;
    background: #f7f7f7;
    margin-bottom: 0.3rem;
  }
  .view-v {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 0.45rem 0.3rem 0.45rem;
    > div {
      text-align: center;
    }
    .today {
      width: 2rem;
      height: 2rem;
      color: #c3ab87;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-image: url(../../../../../assets/images/icon/mine/space/bg2.png);
      background-size: 100% 100%;
      border-radius: 1rem;
      p {
        font-weight: 500;
        font-size: 0.24rem;
      }
      .people {
        display: flex;
        font-size: 0.22rem;
        align-items: flex-end;

        span {
          color: #c3ab87;
          font-size: 0.36rem;
        }
      }
    }
    p {
      font-size: 0.36rem;
      font-weight: 600;
    }
    span {
      font-size: 0.22rem;
      color: #777777;
      display: block;
    }
  }
  .center-nav {
    display: flex;
    justify-content: center;
    padding: 0.2rem .45rem;
    padding-bottom: 0.7rem;
    ul {
      display: flex;
      margin: 0.2rem 0;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    li {
      font-size: 0.3rem;
      line-height: 0.3rem;
      color: #999;
      .active {
        font-size: 0.36rem;
        color: #000;
        font-weight: 600;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 0.5rem;
          height: 3px;
          border-radius: 1px;
          background: #c3ab87;
          bottom: -0.1rem;
          right: 50%;
          transform: translate(50%, 0);
        }
      }
    }
  }
}
</style>