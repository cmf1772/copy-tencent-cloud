<template>
  <div class="details">
    <div class="bg">
      <img src="@/assets/images/serve/recovery/dd.jpg"
           alt="">
    </div>
    <van-nav-bar title="订单详情"
                 left-text
                 left-arrow
                 @click-left="onClickLeft">
      <template #left>
        <img src="@/assets/images/icon/index/arrow.png" />
      </template>
    </van-nav-bar>
    <div class="massage">
      等待取件
    </div>
    <div class="personal">
      <div class="left">
        <img src="@/assets/images/serve/recovery/ss6.png"
             alt="">
      </div>
      <div class="right">
        <p>默默大师 <span>86-15456985987</span></p>
        <div>
          江苏省苏州市高新区金山路金色家园南组团 9栋505室
        </div>
      </div>
    </div>
    <div class="information">
      <p>商品信息</p>
      <div class="infoCon">
        <div class="Cleft">
          <div>
            <p>类 型</p> <span>台式电脑</span>
          </div>
          <div>
            <p>规 格</p> <span>台式主机</span>
          </div>
          <div>
            <p>预约保证金</p> <span>100 环保金</span>
          </div>
          <div>
            <p>预约时间</p> <span>2020-02-20 19:00:00</span>
          </div>
          <div>
            <p>备注信息</p> <span>无</span>
          </div>
        </div>
        <div class="Cright"
             @click="goChange">修改</div>
      </div>
    </div>
    <div class="imgAll">
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
      <div>
        <img src="../../../../../assets/images/serve/recovery/banner1.jpg"
             alt="">
      </div>
    </div>
    <van-action-sheet v-model="show"
                      title="预估环保金">
      <div class="content">
        <div class="input">
          <p>¥</p>
          <van-cell-group style="width: 100%">
            <van-field v-model="value"
                       @focus="focus"
                       label=""
                       placeholder="请输入预估环保金" />
          </van-cell-group>
        </div>
        <div class="massages">
          注：请与回收员协商好本次回收金额后输入
        </div>
        <div class="bottons"
             @click="right">
          确定
        </div>
      </div>
      <!-- <van-number-keyboard :show="showCustom"
                           theme="custom"
                           extra-key="."
                           close-button-text="完成"
                           @blur="show = false"
                           @input="onInput"
                           @delete="onDelete" /> -->
    </van-action-sheet>

  </div>
</template>

<script>
import { NumberKeyboard } from 'vant';

export default {
  naem: 'details',

  data () {
    return {
      show: false,
      showCustom: false,
      value: ''
    }
  },

  methods: {
    right () {
      this.show = false
      // this.value = ''
    },

    onInput (value) {
      this.value = value
    },

    onDelete (val) {
      console.log(val)
    },

    focus () {
      this.showCustom = true
    },

    goChange () {
      this.value = ''
      this.show = true
    },

    onClickLeft () {
      this.$router.go(-1);
    },
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  width: 6.5rem;
  margin: 0 auto;
  margin-top: 0.2rem;

  > p {
    font-size: 0.5rem;
    font-weight: 400;
    margin-right: 10px;
  }
}
.massages {
  width: 6.5rem;
  margin: 0 auto;
  margin-top: 0.2rem;
  font-size: 0.24rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #9c9c9c;
}
.bottons {
  width: 4.2rem;
  height: 0.87rem;
  border-radius: 0.44rem;
  background: #c3ab87;
  text-align: center;
  line-height: 0.87rem;
  font-size: 0.3rem;
  font-family: PingFang SC;
  font-weight: 400;
  color: #ffffff;
  margin: 0.5rem auto;
}

.van-nav-bar {
  background: none !important;
  border-bottom: none !important;
}
.details {
  width: 100%;
  .imgAll {
    width: 6.5rem;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    > div {
      width: 2.1rem;
      text-align: center;
      margin: 0.1rem 0;

      > img {
        width: 1.99rem;
        height: 1.99rem;
        border-radius: 0.1rem;
        margin: 0 auto;
      }
    }
  }

  .information {
    width: 6.5rem;
    margin: 0 auto;
    > p {
      font-size: 0.42rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #000000;
      margin-right: 10px;
      margin-top: 0.6rem;
    }

    .infoCon {
      display: flex;
      align-items: center;
      margin-top: 0.4rem;
      .Cleft {
        width: 100%;

        > div {
          display: flex;
          margin-bottom: 0.1rem;
          > p {
            width: 1.43rem;
            font-size: 0.27rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #777777;
            margin-right: 0.44rem;
          }
          > span {
            font-size: 0.27rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #000000;
          }
        }
      }
      .Cright {
        width: 0.89rem;
        height: 0.48rem;
        border: 1px solid #c3ab87;
        border-radius: 24px;
        text-align: center;
        line-height: 0.48rem;
        font-size: 0.21rem;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #c3ab87;
      }
    }
  }

  .personal {
    background: #fff;
    display: flex;
    border-bottom: #f7f7f7 solid 0.18rem;

    .right {
      > p {
        font-size: 0.27rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 0.35rem;
        margin-top: 0.4rem;
        > span {
          font-size: 0.24rem;
          color: #777777;
          margin-left: 0.25rem;
        }
      }
      > div {
        width: 5.1rem;
        font-size: 0.27rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 0.45rem;
        margin-top: 0.14rem;
        margin-bottom: 0.3rem;
      }
    }
    .left {
      width: 0.6rem;
      margin: 0.6rem 0.25rem 0.6rem 0.45rem;
      height: 0.64rem;
      > img {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.6rem;
      }
    }
  }

  .bg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    > img {
      width: 100%;
    }
  }

  .massage {
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    box-sizing: border-box;
    padding-left: 0.7rem;
    // border-bottom: solid 1px #d7d7d7;

    font-size: 0.3rem;
    font-family: PingFang SC;
    font-weight: bold;
    color: #000000;
  }
}
</style>