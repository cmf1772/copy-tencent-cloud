<template>
  <div class="survey">
    <div class="s_left">
      <div class="left_top">
        <div class="left_top_left">
          <div class="title">
            经营数据
          </div>
          <div class="all">
            <div class="item">
              <span>¥0.00</span>
              <p>今日实收</p>
            </div>
            <div class="item">
              <span>¥0.00</span>
              <p>今日订单总额</p>
            </div>
            <div class="item">
              <span>0</span>
              <p>今日订单量</p>
            </div>
            <div class="item">
              <span>0</span>
              <p>今日新增会员</p>
            </div>
            <div class="item">
              <span>0</span>
              <p>今日新增粉丝</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tip bs">
        <div class="text">
          排行榜
        </div>
        <div class="all mt">
          <p class="minText">商品销量（个）</p>
          <div class="flexJC">
            <div class="itemsList flexColumn mt"
                 v-for="i in 3"
                 style="width: 32%">
              <div class="top flexJC"
                   style="line-height: 50px;border-bottom: solid 1px #e3e2e5;box-sizing: border-box;padding: 0 20px;">
                <p class="minText">菜品</p>
                <p class="minText">昨日</p>
              </div>

              <div class="flexCC"
                   style="flex: 1">
                <img src="../../../../assets/img/none.jpg"
                     style="width: 130px"
                     alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="activity bs">
        <div class="text">
          常用功能
        </div>
        <div class="all flex">
          <div class="item flexC"
               v-for="item in 5"
               :key="item">
            <div class="flexC">
              <i class="el-icon-reading"></i>
            </div>
            <p class="text"
               style="color:#595961; font-size: 12px;margin-top: 5px">发布商品</p>
          </div>
        </div>
      </div>

    </div>
    <div class="s_right"
         style="margin-top: 0">
      <div class="message bs flexC"
           style="margin-top: 0; align-items: baseline;">
        <p class="text"
           style="font-size: 17px; line-height: 40px">试用版</p>
        <p class="minText">剩余 <span class="text"
                style="font-size: 16px">15</span>天（2020.9.29到期）</p>
        <p class="minText"
           style="margin-top: 20px">当前为免费试用版本</p>
        <p class="minText"
           style="margin-top: 5px">升级解锁享受更多服务</p>
        <div class="flexC box"
             style="margin-top: 30px">
          <div class="bottom">
            立即升级
          </div>
        </div>
      </div>

      <div class="public bs">
        <div class="title flexJC">
          <p class="text">公告</p>
          <p class="minText">更多</p>
        </div>
        <ul>
          <li class="textHover flexJC mt"
              v-for="index in 8"
              :key="index"
              style="padding: 0">
            <div class="overHidden mr "
                 style="flex: 1">
              “区域管理员为导购分配客户”等多项功能上线
            </div>
            <p calss>9/23</p>
          </li>
        </ul>
      </div>

      <div class="itemList bs flex">
        <div class="icon flexC">
          <i class="el-icon-reading"></i>
        </div>
        <div class="right">
          <p class="text">商户助手APP客户端</p>
          <p class="minText">随时随地轻松管理店铺订单</p>
        </div>
      </div>

      <div class="itemList bs flex">
        <div class="icon flexC">
          <i class="el-icon-reading"></i>
        </div>
        <div class="right">
          <p class="text">商户助手APP客户端</p>
          <p class="minText">随时随地轻松管理店铺订单</p>
        </div>
      </div>

      <div class="public bs">
        <div class="title flexJC">
          <p class="text">优质商家案例</p>
          <p class="minText"></p>
        </div>
        <ul>
          <li class="textHover flexJC mt"
              v-for="index in 8"
              :key="index"
              style="padding: 0">
            <div class="overHidden mr "
                 style="flex: 1">
              “区域管理员为导购分配客户”等多项功能上线
            </div>
            <p calss></p>
          </li>
        </ul>
      </div>

      <div class="public bs">
        <div class="title flexJC">
          <p class="text">使用指南</p>
          <p class="minText">更多</p>
        </div>
        <ul>
          <li class="textHover flexJC mt"
              v-for="index in 8"
              :key="index"
              style="padding: 0">
            <div class="overHidden mr "
                 style="flex: 1">
              “区域管理员为导购分配客户”等多项功能上线
            </div>
            <p calss></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'survey'
}
</script>

<style lang="scss" scoped>
.itemsList {
  border: 1px solid #e3e2e5;
  border-radius: 5px;
  background: #fff;
  height: 292px;
}
.survey {
  display: flex;
  // height: 100%;
  .s_left {
    flex: 1;
    .activity {
      // height: 300px;
      .item {
        padding: 20px 10px;
        box-sizing: border-box;
      }
      .all .item {
        width: 130px;
        text-align: center;
        margin-top: 20px;
        > div {
          width: 64px;
          height: 64px;
          border-radius: 4px;
          background: #59a5ff;
          color: #fff;
          font-size: 40px;
        }
      }
    }
    .left_top {
      display: flex;
      height: 190px;
      justify-content: space-between;
      .left_top_left,
      .left_top_right {
        height: 100%;
        box-sizing: border-box;
        // line-height: 50px;
        -webkit-box-shadow: 0 2px 20px 0 rgba(15, 12, 70, 0.1);
        box-shadow: 0 2px 20px 0 rgba(15, 12, 70, 0.1);
        padding: 20px;
        border-radius: 4px;
      }
      .left_top_left {
        width: 100%;
        .title {
          color: #595961;
          font-size: 14px;
        }
        .all {
          width: 100%;
          height: 157px;
          display: flex;
          .item {
            width: 33.3%;
            height: 100%;
            line-height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            > span {
              font-size: 22px;
              font-weight: 700;
              color: #2589ff;
              margin-bottom: 20px;
            }
            > p {
              color: #595961;
              font-weight: 700;
              font-size: 15px;
            }
          }
        }
      }
      .left_top_right {
        width: 34%;
        .title {
          width: 100%;
          text-align: right;
          color: #2589ff;
          cursor: pointer;
          margin-right: 10px;
          line-height: 30px;
        }
        .con {
          color: #595961;
          font-size: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 130px;
          > div {
            color: #595961 !important;
            border: #e3e2e5 1px solid;
            background-color: #fff;
            border-radius: 3px;
            width: 70px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
            margin-top: 20px;
          }
        }
      }
    }
    .tip {
      // height: 158px;
      margin-top: 10px;
      .all .item {
        height: 85px;
        width: 130px;
        text-align: center;
        margin-top: 20px;
        > div {
          width: 64px;
          height: 64px;
          border-radius: 4px;
          background: #59a5ff;
          color: #fff;
          font-size: 40px;
        }
      }
    }
    .footer {
      height: 160px;
      .item {
        flex-direction: inherit !important;
        align-items: center;
        flex: 1;
        cursor: pointer;
        .icon {
          width: 50px;
          height: 50px;
          border-radius: 60px;
          background: #59a5ff;
          color: #fff;
          font-size: 30px;
          margin: 0 10px;
        }
      }
    }
  }
  .s_right {
    width: 260px;
    margin-left: 20px;
    // overflow: hidden;
    box-sizing: border-box;
    padding: 5px;
    overflow: auto;
    .public {
      ul {
        height: 200px;
        overflow: auto;
      }
    }
    .itemList {
      .icon {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        background: #59a5ff;
        color: #fff;
        font-size: 30px;
        margin: 0 10px 0 0;
      }
    }
  }
}
</style>