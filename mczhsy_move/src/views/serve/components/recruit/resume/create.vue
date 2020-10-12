<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-arrow title="我的简历" @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="tip">
        <div class="success">
          <van-radio-group v-model="success">
            <van-radio name="1" icon-size=".26rem" checked-color="#c3ab87">基础建立创建成功！</van-radio>
          </van-radio-group>
          <div class="value">该简历为默认简历，可一键投递。完善一下信息，可提升8倍求职效果！</div>
        </div>
      </div>

      <!-- 优势 -->
      <div class="advange pub">
        <div class="title">职业优势</div>
        <div class="value">填写职业优势，让招聘方一眼看到你</div>
      </div>

      <!-- 代表 -->
      <div class="representative">
        <div class="title">销售代表</div>
        <div class="center">
          <div>
            <p>最好业绩</p>
            <span>10万</span>
          </div>
          <div>
            <p>销冠次数</p>
            <span>2次</span>
          </div>
        </div>
        <div class="adv-list">
          <div :class="haveThisID(0)?'active':''" @click="changeActiveBtn(0)">有客户资源</div>
          <div :class="haveThisID(1)?'active':''" @click="changeActiveBtn(1)">思维清晰敏捷</div>
          <div :class="haveThisID(2)?'active':''" @click="changeActiveBtn(2)">擅长沟通</div>
          <div :class="haveThisID(3)?'active':''" @click="changeActiveBtn(3)">团队意识强</div>
          <div :class="haveThisID(4)?'active':''" @click="changeActiveBtn(4)">适应出差</div>
          <div :class="haveThisID(5)?'active':''" @click="changeActiveBtn(5)">进取心强</div>
        </div>
      </div>
      <!-- 工作经历 -->
      <div class="job p-1">
        <div class="pub">
          <div class="title">工作经历</div>
        </div>
        <div class="center">
          <div class="val">
            <van-icon name="plus" color="#c3ab87" size=".28rem" />添加工作经历
          </div>
        </div>
      </div>

      <!-- 教育经历 -->
      <div class="study p-1">
        <div class="pub">
          <div class="title">教育经历</div>
        </div>
        <div class="center">
          <div class="val">
            <van-icon name="plus" color="#c3ab87" size=".28rem" />添加教育经历
          </div>
        </div>
      </div>

      <!-- 我的亮点 -->
      <div class="my-star">
        <div class="pub">
          <div class="title">教育经历</div>
          <div class="value">最多选择5个</div>
        </div>
        <div class="star-list">
          <div :class="haveThisID(6)?'active':''" @click="changeActiveBtn(6)">诚信正直</div>
          <div :class="haveThisID(7)?'active':''" @click="changeActiveBtn(7)">善于创新</div>
          <div :class="haveThisID(8)?'active':''" @click="changeActiveBtn(8)">思维清晰敏捷</div>
          <div :class="haveThisID(9)?'active':''" @click="changeActiveBtn(9)">雷厉风行</div>
          <div :class="haveThisID(10)?'active':''" @click="changeActiveBtn(10)">擅长沟通</div>
          <div :class="haveThisID(11)?'active':''" @click="changeActiveBtn(11)">团队意识强</div>
          <div :class="haveThisID(12)?'active':''" @click="changeActiveBtn(12)">适应出差</div>
          <div :class="haveThisID(13)?'active':''" @click="changeActiveBtn(13)">进取心强</div>
          <div :class="haveThisID(14)?'active':''" @click="changeActiveBtn(14)">擅长沟通</div>
          <div :class="haveThisID(15)?'active':''" @click="changeActiveBtn(15)">团队意识强</div>
          <div :class="haveThisID(16)?'active':''" @click="changeActiveBtn(16)">适应出差</div>
          <div :class="haveThisID(17)?'active':''" @click="changeActiveBtn(17)">进取心强</div>
        </div>
      </div>

      <!-- 我的信息 -->
      <div class="about-me">
        <div class="pub">
          <div class="title">介绍一下自己吧</div>
        </div>
        <div class="center">
          <van-field
            v-model="message"
            rows="4"
            autosize
            type="textarea"
            placeholder="请输入留言"
            show-word-limit
          />
          <div class="tip">
            <div class="left">
              <img
                src="@/assets/images/icon/serve/recruit/small-mai.png"
                style="width:0.16rem;margin-right:.1rem"
              />不想打字，试试语音输入
            </div>
            <div class="right">{{message.length}}/300</div>
          </div>
        </div>
      </div>

      <!-- 作品 -->
      <div class="work p-1">
        <div class="pub">
          <div class="title">作品/图片</div>
          <div class="value">最多上传8张</div>
        </div>
        <div class="center">
          <div class="val">
            <van-icon name="plus" color="#c3ab87" size=".28rem" />添加教育经历
          </div>
        </div>
      </div>

      <!-- 底部提交 -->
      <div class="btn">
        <van-button round color="#c3ab87">完成</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      success: "1",
      message: "",
      arrActive: []
    };
  },
  computed: {
    haveThisID() {
      return function(id) {
        return this.arrActive.includes(id);
      };
    }
  },
  methods: {
    onClickLeft() {
      history.go(-1);
    },
    onClickRight() {},
    changeActiveBtn(id) {
      let index = this.arrActive.findIndex(item => {
        return item == id;
      });
      if (index < 0) {
        this.arrActive.push(id);
      } else {
        this.arrActive.splice(index, 1);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .van-cell {
    padding: 0.2rem 0.45rem;
  }
  .tip {
    padding: 0.3rem 0.45rem;
    border-bottom: 0.2rem #f7f7f7 solid;
    .success {
      .van-radio-group {
        display: flex;
        justify-content: flex-start;
        font-size: 0.3rem;
        .van-radio {
          flex-direction: row-reverse;
          /deep/ span {
            margin-left: 0;
          }
        }
      }
      .value {
        font-size: 0.27rem;
        padding: 0.2rem 0;
        color: #2c2c2c;
      }
    }
  }
  .pub {
    padding: 0.3rem 0.45rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f7f7f7;
    .title {
      font-size: 0.3rem;
      font-weight: bold;
    }
    .value {
      font-size: 0.24rem;
      color: #9c9c9c;
    }
  }
  .representative {
    border-bottom: 0.2rem #f7f7f7 solid;
    padding: 0.3rem 0.45rem;
    .title {
      text-align: center;
      padding: 0.2rem 0;
      font-weight: bold;
      font-size: 0.36rem;
    }
    .center {
      border-bottom: #f7f7f7 1px solid;
      display: flex;
      justify-content: center;
      div {
        padding: 0 0.5rem;
        margin: 0.3rem 0;
        text-align: center;
        border-right: 1px solid #f1f1f1;
        p {
          font-size: 0.24rem;
        }
        span {
          font-size: 0.36rem;
          font-weight: 600;
          display: block;
          margin-top: 0.1rem;
        }
      }
      div:last-child {
        border: none;
      }
    }
    .adv-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.2rem;
      padding: 0.3rem 0;
      div {
        border-radius: 1rem;
        background: #f7f7f7;
        font-size: 0.24rem;
        width: 2.07rem;
        height: 0.65rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.26rem;
        text-align: center;
        border: 1px solid transparent;
      }
      .active {
        color: #c3ab87;
        background: #f9f6f3;
        border: #c3ab87 solid 1px;
      }
    }
  }
  .p-1 {
    border-bottom: 0.2rem #f7f7f7 solid;
    .center {
      display: flex;
      padding: 0.4rem 0;
      justify-content: center;
      .val {
        display: flex;
        align-items: center;
        font-size: 0.3rem;
        width: 3.93rem;
        height: 0.87rem;
        justify-content: center;
        border-radius: 1rem;
        color: #c3ab87;
        border: 1px solid #c3ab87;
      }
    }
  }

  .my-star {
    .star-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0.2rem;
      padding: 0.3rem 0.45rem;
      div {
        border-radius: 1rem;
        background: #f7f7f7;
        font-size: 0.24rem;
        width: 2.07rem;
        height: 0.65rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.26rem;
        text-align: center;
        border: 1px solid transparent;
      }
      .active {
        color: #c3ab87;
        background: #f9f6f3;
        border: #c3ab87 solid 1px;
      }
    }
  }

  .about-me {
    border-bottom: 0.2rem #f7f7f7 solid;
    .center {
      .tip {
        border: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.2rem;
        .left {
          display: flex;
          align-items: center;
          padding: 0.05rem 0.1rem;
          color: #c3ab87;
          border-radius: 1rem;
          border: 1px solid #c3ab87;
        }
      }
    }
  }

  .btn {
    background: #f7f7f7;
    padding: 0.4rem;
    display: flex;
    justify-content: center;
    .van-button {
      width: 3.93rem;
      height: 0.87rem;
      font-size: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>