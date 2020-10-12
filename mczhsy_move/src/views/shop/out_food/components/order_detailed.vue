<template>
  <div class="detailed">
    <div class="pay">
      <van-cell title="支付" is-link>
        <template #default>
          <div class="right">普通支付</div>
        </template>
      </van-cell>
    </div>
    <div class="detailed-view">
      <div class="title">华莱士·拳击汉堡（赛格店）</div>
      <div class="name">
        <img src="@/assets/images/icon/shop/index/outfood/jiaogaifan.png" />
        香鸡汉堡退
      </div>
      <van-cell title="包装费">
        <template #default>
          <div class="right">￥1.99</div>
        </template>
      </van-cell>
      <van-cell title="包装费·蜂鸟快送" center label="已减3元">
        <template #default>
          <div class="right">
            <span>￥3</span>￥1
          </div>
        </template>
      </van-cell>
      <van-cell title="抵用券" is-link>
        <template #default>
          <div class="right">
            <span>暂无可用，开通会员可享大幅度减免立即行动</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="商家代金券" center label="满减券和代金券可同拿" is-link>
        <template #default>
          <div class="right">
            <span>暂无可用</span>
          </div>
        </template>
      </van-cell>
      <div class="tip">
        <van-icon name="info-o" color="#c3ab87" size=".26rem" />开通送无门门槛好饱，可与满减/折扣同享
      </div>
    </div>

    <div class="keeper-rz pl">
      <div class="title">
        <van-cell title="店铺会员">
          <template #default>
            <div class="right">
              <span>还不是商家会员立刻开通</span>
            </div>
          </template>
        </van-cell>
      </div>
      <van-cell title="砖石会员">
        <template #default>
          <div class="right">尊享7折</div>
        </template>
      </van-cell>
      <van-cell title="白金会员">
        <template #default>
          <div class="right">尊享7.5折</div>
        </template>
      </van-cell>
      <van-cell title="VIP会员">
        <template #default>
          <div class="right">尊享8折</div>
        </template>
      </van-cell>
      <div class="tip">
        <van-icon name="info-o" color="#c3ab87" size=".26rem" />开通送无门门槛好饱，可与满减/折扣同享
      </div>
    </div>

    <div class="mt-rz pl">
      <div class="title">
        <van-cell title="美团会员">
          <template #default>
            <div class="right">
              <span>还不是商家会员立刻开通</span>
            </div>
          </template>
        </van-cell>
      </div>
      <van-cell title="美团会员">
        <template #default>
          <div class="right">
            <del class="old-p">￥30</del>
            <div class="fir">首购特惠</div>
            <div class="price">￥3</div>
          </div>
        </template>

        <template #title>
          <div class="left">
            送
            <span>6张5元</span>红包，本单可用
          </div>
        </template>
      </van-cell>

      <div class="tip">
        <van-icon name="info-o" color="#c3ab87" size=".26rem" />开通送无门门槛好饱，可与满减/折扣同享
      </div>
    </div>

    <div class="protect">
      <div class="t-protect">
        <div class="t">
          <div class="t-l">
            <van-icon name="youzan-shield" color="#c3ab87" size=".28rem" />
            <span>准时宝</span>
            <van-icon name="info-o" color="#c3ab87" size=".28rem" />
          </div>
          <div class="t-r">
            <span>0.35</span>
            <van-switch v-model="checked" size=".28rem" active-color="#c3ab87" />
          </div>
        </div>
        <div class="t-tip">
          延迟5分钟陪
          <span>7</span>元、延误10分钟赔
          <span>14</span>元、延误20分钟赔
          <span>20</span>元
        </div>
      </div>
      <div class="t-protect">
        <div class="t">
          <div class="t-l">
            <van-icon name="youzan-shield" color="#c3ab87" size=".28rem" />
            <span>号码保护</span>
            <van-icon name="info-o" color="#c3ab87" size=".28rem" />
          </div>
          <div class="t-r">
            <span>0.35</span>
            <van-switch v-model="checked1" size=".28rem" active-color="#c3ab87" />
          </div>
        </div>
        <div class="t-tip">
          <div>
            <p>对商家、起手隐藏你的正式号码，保护您的隐私</p>
          <span>为了保证服务质量、开起号码保护的订单可能会被录音</span>
          </div>
        </div>
      </div>
    </div>

    <div class="fn-list">
      <van-cell title="备注" is-link>
        <template #default>
          <div class="right">点击选择无接触配送</div>
        </template>
      </van-cell>
      <van-cell is-link>
        <template #default>
          <div class="right">未选择</div>
        </template>
        <template #title>
          <div class="left">
            <p>餐具数量</p><span>选“无需餐具”，能量+10</span>
          </div>
        </template>
      </van-cell>
      <van-cell title="发票" is-link>
        <template #default>
          <div class="right">未选择</div>
        </template>
      </van-cell>

      <div class="btn">
        <div class="l">
          <div class="s">
            省配送费3.5
          </div>
          <div class="price">
            合计/￥<span>55</span>
          </div>
        </div>
        <div class="r">
          <div>
            提交订单
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
      checked: false,
      checked1: false
    };
  }
};
</script>

<style lang="less" scoped>
.detailed {
  background: #f7f7f7 !important;
  > div {
    padding-left: 0.45rem !important;
    padding-right: 0.45rem !important;
    background: #fff;
  }
  .van-cell {
    padding: 0.2rem 0 0.2rem 0;
  }
  .pay {
    /deep/ .right {
      color: #000;
    }
    .van-cell{
      /deep/ span{
      font-size: .3rem;
      font-weight: bold;
    }
    }
    
    margin-bottom: 0.2rem;
  }
  .tip {
    font-size: 0.2rem;
    color: #c3ab87;
    display: flex;
    align-items: center;
    margin: 0.2rem 0;
    .van-icon {
      margin-right: 0.05rem;
    }
  }
  .detailed-view {
    margin-bottom: 0.2rem;
    padding: 0.2rem 0;
    .van-cell {
      padding: 0.2rem 0 0.2rem 0;
      /deep/ span{
        font-size: .27rem;
      }
      /deep/ .van-cell__label{
        font-size: .21rem;
        margin-top: 0;
      }
    }
    .title {
      font-size: 0.3rem;
      font-weight: bold;
    }
    .name {
      margin-top: 0.4rem;
      margin-bottom: 0.2rem;
      font-size: 0.27rem;
      display: flex;
      align-items: center;
      img {
        width: 0.66rem;
        height: 0.66rem;
        margin-right: 0.2rem;
      }
    }
    /deep/ .right {
      color: #000;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      span {
        color: #999;
        margin-right: 0.2rem;
      }
    }
  }
  .pl {
    padding: 0.2rem;
    margin-bottom: 0.2rem;
    .title {
      /deep/ .van-cell__title {
        font-weight: 600;
        font-size: 0.28rem;
      }
    }
    .van-cell {
      /deep/ .right {
        color: #000;
        span {
          text-decoration: underline;
          font-size: 0.2rem;
          color: #999;
        }
      }
    }
  }
  .mt-rz {
    .van-cell {
      /deep/ .left {
        span {
          color: #c3ab87;
          font-size: 0.26rem;
        }
      }
      /deep/ .right {
        display: flex;
        justify-content: flex-end;
        div {
          margin-left: 0.1rem;
        }
        .old-p {
          font-size: 0.2rem;
          color: #999;
        }
        .fir {
          color: #c3ab87;
          background-image: url(../../../../assets/images/icon/shop/index/me.png) !important;
          color: #c3ab87;
          font-size: 0.2rem;
          padding: 0 0.05rem;
          display: inline-flex;
          margin-left: 0.1rem;
          padding-left: 0.15rem;
        }
      }
    }
  }
  .protect {
    padding: 0.2rem 0;
    margin-bottom: 0.2rem;
    .t-protect {
      display: flex;
      flex-direction: column;
      .t {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.26rem;
        .t-l,
        .t-r {
          display: flex;
          align-items: center;
          span {
            margin: 0 0.02rem;
          }
        }
        .t-r {
          span {
            margin-right: 0.1rem;
          }
        }
      }
      .t-tip {
        font-size: 0.2rem;
        display: flex;
        align-items: center;
        color: #999;
        margin: .1rem 0;
        span {
          margin: .2rem 0;
          color: #c3ab87;
        }p{
          margin: .1rem 0;
        }
      }
    }
  }
  .fn-list{
    /deep/ .left{
      display: flex;
      align-items: center;
      span{
        margin-left: 0.1rem;
        color: #c3ab87;
      }
    }
    /deep/ .van-cell__value{
      flex:none;
    }
    .btn{
      padding:.4rem 0;
      display: flex;
      justify-content: space-between;
      font-size: .27rem;
      .l{
        display: flex;
        align-items: center;
        .price{
          margin-left: 0.2rem;
          color: #c3ab87;
          display: flex;
          align-items: center;
          span{
            font-size: .30rem;
          }
        }
      }
      .r{
        flex:1;
        display: flex;
        justify-content: flex-end;
        div{
          display: inline-flex;
          width: 2.1rem;
          height: 0.84rem;
          align-items: center;
          justify-content: center;
          background: #c3ab87;
          border-radius: 1rem;
          color: #fff;
        }
      }
    }
  }
}
</style>