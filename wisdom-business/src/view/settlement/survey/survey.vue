<template>
  <div class="survey">
    <div class="s_left">
      <div class="left_top">
        <div class="left_top_left">
          <div class="title">
            下午好，智慧零售！
          </div>
          <div class="all">
            <div class="item">
              <span>0</span>
              <p>待付款订单</p>
            </div>
            <div class="item">
              <span>0</span>
              <p>待发货订单</p>
            </div>
            <div class="item">
              <span>0</span>
              <p>待处理售后</p>
            </div>
          </div>
        </div>
        <div class="left_top_right">
          <div class="title">
            获取页面地址
          </div>
          <div class="con">
            店铺还没有绑定小程序或公众号
            <div>
              去绑定
            </div>
          </div>
        </div>
      </div>
      <div class="tip bs">
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
      <div class="activity bs">
        <div class="text flexJC">
          <p>营销活动</p>
          <p style="color: #2589ff">营销中心</p>
        </div>
        <div class="all flex">
          <div class="item"
               v-for="index in 6"
               :key="index">
            <div class="o flexC">
              <div class="icon flexC">
                <i class="el-icon-reading"></i>
              </div>
              <div class="right">
                <p class="text"
                   style="font-size: 15px; margin-bottom: 10px">评团</p>
                <div class="boxs">
                  拼单成团，裂变获客、促转化
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="s_right">

    </div>
  </div>
</template>

<script>
export default {
  name: 'survey'
}
</script>

<style lang="scss" scoped>
.survey {
  display: flex;
  height: 100%;
  .s_left {
    flex: 1;
    .activity {
      height: 300px;
      .item {
        width: 33.3%;
        padding: 20px 10px;
        box-sizing: border-box;
        .o {
          width: 100%;
          height: 84px;
          border: #e3e2e5 1px solid;
          border-radius: 4px;
          flex-direction: inherit !important;
          justify-content: left !important;
          .icon {
            min-width: 64px;
            min-height: 64px;
            border-radius: 4px;
            background: #ff7d99;
            color: #fff;
            font-size: 40px;
            margin: 0 10px;
          }
          .boxs {
            width: 100%;
            font-size: 12px;
            line-height: 20px;
            color: #a8a8b0;
            margin: 0;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .right {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
        width: 65%;
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
      height: 158px;
      margin-top: 10px;
      .all .item {
        height: 85px;
        width: 100px;
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
  }
  .s_right {
    width: 260px;
    margin-left: 20px;
    overflow: hidden;
  }
}
</style>