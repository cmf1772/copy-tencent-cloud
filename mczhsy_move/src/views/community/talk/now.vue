<template>
  <div class="main">
    <div class="top">
      <van-nav-bar @click-left="onClickLeft" left-arrow title="聊天">
        <template #right>
          <img src="@/assets/images/icon/index/more.png" />
        </template><template v-slot:left>
          <img src="@/assets/images/icon/index/arrow.png" alt="">
        </template>
      </van-nav-bar>
    </div>
    <div class="container">
      <div class="list">
        <div class="time">5月18号 9:16</div>
        <div class="item you">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧</div>
            </div>
          </div>
        </div>
        <div class="item me">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">滚</div>
            </div>
          </div>
        </div>
        <div class="item you">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧</div>
            </div>
          </div>
        </div>
        <div class="item me">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">滚</div>
            </div>
          </div>
        </div>
        <div class="item you">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧</div>
            </div>
          </div>
        </div>
        <div class="item me">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">滚</div>
            </div>
          </div>
        </div>
        <div class="item you">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧</div>
            </div>
          </div>
        </div>
        <div class="time">5月19号 13:34</div>
        <div class="item me">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">滚</div>
            </div>
          </div>
        </div>
        <div class="item you">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧加个微信吧</div>
            </div>
          </div>
        </div>
        <div class="item you">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">加个微信吧加个微信吧</div>
            </div>
          </div>
        </div>
        <div class="item you">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">加个微信吧</div>
            </div>
          </div>
        </div>
        <div class="item me">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">滚</div>
            </div>
          </div>
        </div>
        <div class="item me">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">滚</div>
            </div>
          </div>
        </div>
        <div class="item me">
          <div class="author">
            <div class="nick">
              <div class="icon">
                <img src="@/assets/images/user.png" />
              </div>
              <div class="value">滚</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fixed">
      <div class="input-view">
        <img src="@/assets/images/icon/community/mai.png" />
        <van-field v-model="value" placeholder="请输入内容" />
        <img src="@/assets/images/icon/community/smail.png" />
        <img src="@/assets/images/icon/community/add_goutou.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    scrollToBottom: function() {
      this.$nextTick(() => {
        var container = document.querySelector(".container");
        container.scrollTop = container.scrollHeight;
      });
    }
  },
  updated() {
    this.scrollToBottom();
  },
  mounted() {
    this.scrollToBottom();
  }
};
</script>

<style lang="less" scoped>
.top {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  .van-nav-bar{
    margin-top: 0 !important;
    padding-top: 0.4rem !important;
    /deep/ .van-nav-bar__left,/deep/  .van-nav-bar__right{
      padding-top: 0.4rem !important;
    }
  }
  /deep/ img{
    height: 0.3rem;
  }
}
.container {
  height: calc(100vh - 1.28rem);
  background: #f1f1f1;
  overflow: scroll;

  .list {
    padding: 45px 0.25rem 0.2rem 0.25rem;
    .time {
      font-size: 0.22rem;
      text-align: center;
      padding: 0.6rem;
      padding-bottom: 0;
    }
  }
  .item {
    .author {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.2rem 0 0.1rem 0;
      .icon {
        min-width: 0.77rem;
        width: 0.77rem;
        height: 0.77rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .nick {
        display: flex;
        font-size: 0.24rem;
        .value {
          margin-top: 0.2rem;
          font-size: .3rem;
          background: #fff;
          padding: 0.25rem 0.31rem;
          display: inline-table;
          max-width: 70vw;
        }
      }
    }
  }
  .you {
    .value {
      margin-left: 0.15rem;
      border-radius: 0 0.06rem 0.06rem 0.06rem;
    }
  }
  .me {
    .author {
      display: flex;
      flex-direction: row-reverse;
      .icon {
        order: 2;
      }
      .nick {
        order: 1;
      }
    }
    .value {
      margin-right: 0.15rem;
      border-radius: 0.06rem 0 0.06rem 0.06rem;
    }
  }
}
.fixed {
  position: fixed;
  bottom: 0;
  background: #fff;
  left: 0;
  right: 0;
  .input-view {
    padding: 0.3rem 0.25rem;
    display: flex;
    img{
      width: 0.56rem;
      margin: 0 0.1rem;
    }
    .van-field {
      margin: 0 0.1rem;
      background: #f7f7f7;
      border-radius: 1rem;
    }
    /deep/ input{
      font-size: .28rem;
    }
    /deep/ .van-cell {
      padding: 0;
      padding-left: 0.2rem;
      .van-cell__value {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>