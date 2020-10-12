<template>
  <div class="main">
    <div class="top">
      <van-nav-bar left-text left-arrow title="行程预约" @click-left="onClickLeft">
        <template #left>
          <img src="@/assets/images/icon/index/arrow.png" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container">
      <div class="appointment-list shadow">
        <div class="to">
          <div class="to-circle circle"></div>
          <van-cell-group>
            <van-field v-model="toAddress" @focus="checkAddress(true)" placeholder="请输入上车地点" />
          </van-cell-group>
        </div>
        <div class="from">
          <div class="from-circle circle"></div>
          <van-cell-group>
            <van-field v-model="fromAddress" @focus="checkAddress(false)" placeholder="请输入目的地" />
          </van-cell-group>
        </div>
        <div class="time" @click="show = true">
          <img src="@/assets/images/icon/serve/travel/time.png" alt />
          <span>{{time}}</span>
        </div>
        <div class="user">
          <div>
            <img src="@/assets/images/icon/serve/travel/user.png" alt />
            <span>1人</span>
          </div>
          <div>
            <img src="@/assets/images/icon/serve/travel/menu.png" alt />
            <span>行程备注</span>
          </div>
        </div>
      </div>
      <div class="insurance shadow">
        <img src="@/assets/images/icon/serve/travel/ak.png" alt />
        <div class="center">
          <p>赠送最高120万/人保额的驾乘人员意外险</p>
          <div>
            详情查看
            <span>《保险保障须知及信息共享声明》</span>
          </div>
        </div>
        <van-icon name="arrow" size=".32rem" color="#777" />
      </div>
      <div class="security shadow">
        <img src="@/assets/images/icon/serve/travel/security_white.png" alt />
        安全中心
        <van-icon name="arrow" size=".28rem" color="#fff" />
      </div>
      <div class="spell shadow">
        <div class="spell-header">
          <div class="left">
            <span>愿意拼座</span>
            <div>拼成享优惠</div>
          </div>
          <van-checkbox v-model="checked" checked-color="#c3ab87" icon-size=".3rem"></van-checkbox>
        </div>
        <div class="spell-center">
          <div class="amount">
            22.60
            <span>元</span>
            <van-icon name="warning-o" color="#c3ab87" size=".28rem" />
          </div>
          <div class="end-amount">
            拼成价
            <span>18.50</span>元
          </div>
        </div>
        <div class="btn">
          <van-button round type="info" @click="appointment" color="#c3ab87">立即去预约</van-button>
        </div>
      </div>
    </div>

    <van-action-sheet v-model="show" :title="start? '最早出发时间':'最晚出发时间'">
      <div class="content">
        <van-picker
          ref="checkedTimeStart"
          v-if="start"
          show-toolbar
          :default-index="1"
          :columns="columns"
        >
          <template #default>
            <span></span>
          </template>
        </van-picker>
        <van-picker ref="checkedTimeEnd" v-else show-toolbar :default-index="1" :columns="columns">
          <template #default>
            <span></span>
          </template>
        </van-picker>
        <div class="btn">
          <van-button
            round
            type="info"
            @click="checkedTimeNext"
            color="#c3ab87"
          >{{start? '下一步':'完成'}}</van-button>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toAddress: "",
      fromAddress: "",
      time: "今天 20:30 - 22:00",
      checked: false,
      show: false,
      columns: [
        {
          values: ["今天", "明天", "后天"],
          defaultIndex: 0,
        },
        {
          values: [
            "01点",
            "02点",
            "03点",
            "04点",
            "05点",
            "06点",
            "07点",
            "08点",
            "09点",
            "10点",
            "11点",
            "12点",
            "13点",
            "14点",
            "15点",
            "16点",
            "17点",
            "18点",
            "19点",
            "20点",
            "21点",
            "22点",
            "23点",
            "24点",
          ],
          defaultIndex: 0,
        },
        {
          values: [
            "00分",
            "01分",
            "02分",
            "03分",
            "04分",
            "05分",
            "06分",
            "07分",
            "08分",
            "09分",
            "10分",
            "11分",
            "12分",
            "13分",
            "14分",
            "15分",
            "16分",
            "17分",
            "18分",
            "19分",
            "20分",
            "21分",
            "22分",
            "23分",
            "24分",
            "25分",
            "26分",
            "27分",
            "28分",
            "29分",
            "30分",
            "31分",
            "32分",
            "33分",
            "34分",
            "35分",
            "36分",
            "37分",
            "38分",
            "39分",
            "40分",
            "41分",
            "42分",
            "43分",
            "44分",
            "45分",
            "46分",
            "47分",
            "48分",
            "49分",
            "50分",
            "51分",
            "52分",
            "53分",
            "54分",
            "55分",
            "56分",
            "57分",
            "58分",
            "59分",
          ],
          defaultIndex: 0,
        },
      ],
      copyColumns: [],
      startTime: [],
      endTime: [],
      start: true,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    checkAddress(bol) {
      this.$router.push({
        path: "/serve/travel/check_address",
        query: {
          start: bol,
        },
      });
    },
    appointment() {},
    checkedTimeNext() {
      if (this.start) {
        this.startTime = this.$refs["checkedTimeStart"].getValues();
        let indexsArr = this.$refs["checkedTimeStart"].getIndexes();
        this.show = false;
        this.start = false;
        this.copyColumns = this.columns.concat();

        let timer = setTimeout(() => {
          // if (indexsArr[0] > 0) {
          //   this.columns[0].values.splice(0, indexsArr[0]);
          // }
          // if (indexsArr[1] > 0) {
          //   this.columns[1].values.splice(0, indexsArr[1]);
          // }
          // if (indexsArr[2] > 0) {
          //   this.columns[2].values.splice(0, indexsArr[2]);
          // }
          this.show = true;
        }, 700);
      } else {
        this.time = "";
        this.endTime = this.$refs["checkedTimeEnd"].getValues();
        this.show = false;
        this.start = true;
        if (this.startTime[0] === this.endTime[0]) {
          console.log(this.startTime,this.endTime);
          this.time = this.endTime[0];
          let hour = parseInt(this.startTime[1].replace("时", ""));
          hour = hour < 10 ? "0" + hour : hour;
          this.time += " " + hour;
          let min = parseInt(this.startTime[2].replace("分", ""));
          min = min < 10 ? "0" + min : min;
          this.time += ":" + min + " - ";
          let endHour = parseInt(this.endTime[1].replace("时", ""));
          endHour = endHour < 10 ? "0" + endHour : endHour;
          this.time += endHour;
          let endMin = parseInt(this.endTime[2].replace("分", ""));
          endMin = endMin < 10 ? "0" + endMin : endMin;
          this.time += ":" + endMin;
        } else {
          console.log(this.startTime,this.endTime);
          this.time = this.startTime[0]
          let hour = parseInt(this.startTime[1].replace("时", ""));
          hour = hour < 10 ? "0" + hour : hour;
          this.time += " " + hour;
          let min = parseInt(this.startTime[2].replace("分", ""));
          min = min < 10 ? "0" + min : min;
          this.time += ":" + min + " - ";
          this.time += this.endTime[0] + " "
          let endHour = parseInt(this.endTime[1].replace("时", ""));
          endHour = endHour < 10 ? "0" + endHour : endHour;
          this.time += endHour;
          let endMin = parseInt(this.endTime[2].replace("分", ""));
          endMin = endMin < 10 ? "0" + endMin : endMin;
          this.time += ":" + endMin;
        }
      }
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.van-action-sheet {
  .btn {
    display: flex;
    margin: 0.3rem 0;
    justify-content: center;
    .van-button {
      width: 4.2rem;
      font-size: 0.3rem;
      height: 0.87rem;
    }
  }
}
.container {
  background: #f8f6f9;
  padding: 0.3rem 0.2rem;
  .shadow {
    box-shadow: 0 0.02rem 0.1rem 0.01rem #ececec;
    padding: 0.3rem;
    margin-bottom: 0.3rem;
    background: #fff;
  }
  .spell {
    .btn {
      display: flex;
      justify-content: center;
      .van-button {
        width: 4.2rem;
        height: 0.87rem;
        font-size: 0.3rem;
      }
    }
    .spell-center {
      margin: 0.8rem 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .end-amount {
        font-size: 0.24rem;
        margin-top: 0rem;
        color: #777;
        display: flex;
        span {
          color: #c3ab87;
          font-weight: 600;
          display: block;
        }
      }
      .amount {
        font-size: 0.44rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        span {
          font-size: 0.24rem;
          font-weight: inherit;
          display: block;
          margin-left: 0.05rem;
          margin-right: 0.1rem;
        }
      }
    }
    .spell-header {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        span {
          font-size: 0.3rem;
          font-weight: bold;
        }
        div {
          font-size: 0.17rem;
          width: 1.46rem;
          height: 0.35rem;
          margin-left: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(../../../../assets/images/icon/serve/travel/dialog_bg.png);
          background-size: 100% 100%;
          color: #c3ab87;
        }
      }
    }
  }
  .security {
    width: 2.44rem;
    border-radius: 0.14rem;
    height: 0.77rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    box-sizing: border-box;
    padding: 0.2rem;
    align-items: center;
    color: #fff;
    background: #c3ab78;
    margin-bottom: 0.3rem;
    img {
      width: 0.34rem;
    }
  }
  .insurance {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      width: 0.25rem;
      min-width: 0.25rem;
      display: block;
      margin-right: 0.15rem;
    }
    > div {
      p {
        font-size: 0.27rem;
      }
      div {
        font-size: 0.21rem;
        color: #777;
        span {
          color: #c3ab87;
          font-size: 0.21rem;
        }
      }
    }
    .van-icon {
      margin-left: auto;
    }
  }
  .appointment-list {
    box-sizing: border-box;
    background: #fff;
    padding: 0.1rem 0.3rem;
    margin-bottom: 0.3rem;
    .user {
      display: flex;
      height: 0.88rem;
      > div {
        flex: 1;
        display: flex;
        align-items: center;
        span {
          font-size: 0.27rem;
          margin-left: 0.2rem;
        }
      }
      > div:last-child {
        span {
          color: #777;
        }
      }
    }
    .time {
      display: flex;
      align-items: center;
      height: 0.88rem;
      span {
        font-size: 0.27rem;
        margin-left: 0.2rem;
      }
    }
    img {
      width: 0.23rem;
    }
    .to,
    .from {
      display: flex;
      align-items: center;
      .van-cell-group {
        /deep/ .van-cell {
          padding: 0.2rem 0.2rem;
          padding-left: 0;
        }
      }
    }
    .to .circle {
      background: #c3ab87;
    }
    .circle {
      width: 0.16rem;
      height: 0.16rem;
      background: #333;
      border-radius: 1rem;
      margin-right: 0.2rem;
    }
    /deep/ input {
      font-size: 0.27rem;
    }
  }
}
</style>