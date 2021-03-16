<template>
  <div class="detailsAll">
    <div class="details">
      <div class="left">
        <div class="all">
          <div class="img-left">
            <div class="l-img">
              <img src="../../../../assets/img/cs.jpg"
                   alt="">
            </div>
            <div class="lb-img">
              <ul>
                <li>
                  <img src="../../../../assets/img/cs.jpg"
                       alt="">
                </li>
                <li>
                  <img src="../../../../assets/img/cs1.jpg"
                       alt="">
                </li>
              </ul>
            </div>

          </div>

          <div class="select-change">
            <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
            <p class="t">微惠一键生成小程序。50+技术团队，个性化需求支持定制开发。单店多店/自营多商户通用；会员拉新、充值、卡券、积分、优惠券、红包、抽奖、拼团、预约、秒杀、砍价、等级分销、社区团购，全行业解决方案；</p>
            <div class="s-content">
              <div class="sc-left">
                <div>
                  <span>价格</span>
                  <span style="color: #727272; text-decoration: line-through;">¥2300</span>
                </div>
                <div>
                  <span>折扣价格</span>
                  <span style="    font-size: 24px;color: #F43F2D;font-family: DINNextLTPro;">¥1600</span>
                </div>
                <div>
                  <span>续费价格</span>
                  <span>150元/月 1200元/年</span>
                </div>
              </div>
              <div class="sc-right">
                <p>2314在使用</p>
                <el-rate v-model="value1"></el-rate>
              </div>
            </div>
            <div class="f">
              <div class="f-o">交互方式</div>
              <div class="f-t">SaaS交付
                <el-tooltip class="item"
                            effect="dark"
                            content="提供可以在线访问的管理地址和权限"
                            placement="top-start">
                  <i class="el-icon-info"
                     style="color:#35a7fa"></i>
                </el-tooltip>
              </div>
            </div>
            <div class="s">
              <div class="s-o">规格</div>
              <ul>
                <li v-for="(item, index) in selectJson"
                    :class="indexSelect === index ? 'active' : ''"
                    @click="selectItem(index)"
                    :key="index">
                  <span>{{item.name}}</span>
                </li>
              </ul>
            </div>

            <div class="p">
              <div class="p-l">
                周期
              </div>
              <div class="p-r">
                <div class="p-r-t active"><span>1年</span></div>
                <div class="p-r-c">
                  <div>立即购买</div>
                  <div>试用10天</div>
                </div>
                <div class="p-r-b">
                  <el-checkbox v-model="checked">同意《美城云商品服务协议》</el-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mp__product-recommend">
          <p>猜你喜欢</p>
          <ul>
            <li>
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
              <div class="t">
                <p><span><span>¥</span>130</span>￥1100</p>
                <span>免费试用</span>
              </div>
              <p> <span>1265</span> 人在用</p>
            </li>
            <li>
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
              <div class="t">
                <p><span><span>¥</span>130</span>￥1100</p>
                <span>免费试用</span>
              </div>
              <p> <span>1265</span> 人在用</p>
            </li>
            <li>
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
              <div class="t">
                <p><span><span>¥</span>130</span>￥1100</p>
                <span>免费试用</span>
              </div>
              <p> <span>1265</span> 人在用</p>
            </li>
            <li>
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
              <div class="t">
                <p><span><span>¥</span>130</span>￥1100</p>
                <span>免费试用</span>
              </div>
              <p> <span>1265</span> 人在用</p>
            </li>
            <li>
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
              <div class="t">
                <p><span><span>¥</span>130</span>￥1100</p>
                <span>免费试用</span>
              </div>
              <p> <span>1265</span> 人在用</p>
            </li>
            <li>
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
              <div class="t">
                <p><span><span>¥</span>130</span>￥1100</p>
                <span>免费试用</span>
              </div>
              <p> <span>1265</span> 人在用</p>
            </li>
            <li>
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
              <div class="t">
                <p><span><span>¥</span>130</span>￥1100</p>
                <span>免费试用</span>
              </div>
              <p> <span>1265</span> 人在用</p>
            </li>
            <li>
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微惠·电商零售+多门店+多商户+各行业小程序</p>
              <div class="t">
                <p><span><span>¥</span>130</span>￥1100</p>
                <span>免费试用</span>
              </div>
              <p> <span>1265</span> 人在用</p>
            </li>
          </ul>
        </div>
      </div>

      <div class="right">
        <div class="mp__storeconcat">
          <p class="hoverColor"
             style="font-size: 14px; color: #444;line-height: 20px;">北京美城互联</p>
          <ul>
            <li> <i class="el-icon-phone"
                 style="color:#60b6f7;margin-right:5px;font-size: 16px"></i> ***********</li>
            <li> <i class="el-icon-s-platform"
                 style="color:#60b6f7;margin-right:10px;font-size: 16px"></i>*********@163.com</li>
            <div class="bottom">
              <i class="el-icon-time"
                 style="color:#60b6f7;margin-right:10px;font-size: 16px"></i>
              <div>
                <p>卖家服务时间</p>
                <span style="font-size: 16px;color: #FF7100;line-height: 24px;font-weight: 700;">09:00:00-22:00:00</span>
              </div>
            </div>
          </ul>
        </div>

        <div class="mp__consumerwarn">
          <i class="el-icon-warning"
             style="color: #fda10e;margin-right: 5px;margin-top: 1px"></i>
          <div>
            为保障您的权益，请勿线下交易！90%的欺诈、纠纷、资金盗窃均由线下交易导致。
          </div>
        </div>

        <div class="mp__promotion">
          <div class="s_left">
            <div class="tit">
              <span class="text-gradient">人气</span>
              <span>・畅销榜</span>
            </div>
            <ul>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <p>微购儿分销商城电商购物直播小程序</p>
              </li>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <p>微购儿分销商城电商购物直播小程序</p>
              </li>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <p>微购儿分销商城电商购物直播小程序</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      value1: '4',
      checked: true,
      indexSelect: 0,
      selectJson: [{
        name: '普通商城版（代上线）'
      }, {
        name: '标准商城版（代上线）'
      }, {
        name: '旗舰商城版（分销/会员/拼团）'
      }, {
        name: '专用版（旅游/预约/教育/）'
      }, {
        name: '同城社区（同城信息发布）'
      }, {
        name: '平台版（商家入驻/商家营销）'
      }, {
        name: '多门店（总店/分店连锁）'
      }, {
        name: '餐饮外卖版（活动特惠）'
      }, {
        name: '高级社区团购（团购/长期购）'
      }, {
        name: '社区团购版（活动特惠）'
      }, {
        name: '直播教育版'
      },]
    }
  },

  methods: {
    selectItem (index) {
      this.indexSelect = index
    }
  }
}
</script>

<style lang="scss" scoped>
.active {
  border-color: #ff9d00 !important;
  cursor: default;
  :after {
    content: "";
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 15px;
    height: 15px;
    background: url(../../../../assets/img/icon-tag-swiched.png) center no-repeat;
    background-size: cover;
    z-index: 1;
    display: block;
  }
}
.detailsAll {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 200px;
  background: #f4f5f9;
  .details {
    width: 100%;
    // height: 200px;
    display: flex;
    box-sizing: border-box;
    padding-top: 20px;
    // justify-content: space-between;
    .left {
      width: 940px;
      min-width: 940px;
      box-sizing: border-box;
      padding: 20px;
      margin-right: 20px;
      background: #fff;
      .all {
        display: flex;
        .select-change {
          width: 100%;
          .p {
            width: 100%;
            display: flex;
            box-sizing: border-box;
            padding: 0 10px;
            margin-top: 10px;
            .p-r-t {
              position: relative;
              border: 1px solid #ddd;
              display: inline-block;
              height: 30px;
              line-height: 28px;
              padding: 0 15px;
              font-size: 12px;
              color: #000;
              box-sizing: border-box;
              -moz-box-sizing: border-box;
              -webkit-box-sizing: border-box;
              margin: 10px 5px 0;
              transition: all 0.15s;
              cursor: pointer;
            }
            .p-r-c {
              margin-top: 10px;
              :first-child {
                background-color: #ff9d00;
                color: #fff;
                border-color: #ff9d00;
                width: 120px;
                height: 30px;
                line-height: 30px;
                display: inline-block;
                text-align: center;
                font-size: 12px;
                cursor: pointer;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                margin-left: 5px;
              }
              :last-child {
                cursor: pointer;
                width: 120px;
                height: 30px;
                line-height: 28px;
                display: inline-block;
                font-size: 12px;
                color: #000;
                border: 1px solid #ddd;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                background-color: #fff;
                margin-left: 10px;
                text-align: center;
              }
            }
            .p-r-b {
              margin-top: 10px;
              box-sizing: border-box;
              padding-left: 5px;
            }
            .p-l {
              width: 70px;
              font-size: 12px;
              color: #8c8c8c;
              line-height: 18px;
              min-width: 70px;
            }
          }
          .s {
            width: 100%;
            display: flex;
            display: flex;
            padding: 0 10px;
            margin-top: 10px;
            .s-o {
              width: 70px;
              font-size: 12px;
              color: #8c8c8c;
              line-height: 18px;
              min-width: 70px;
            }
            > ul {
              display: flex;
              flex-wrap: wrap;
              > li:hover {
                border-color: #ff9d00 !important;
              }
              > li {
                position: relative;
                cursor: pointer;
                border: 1px solid #ddd;
                display: inline-block;
                height: 30px;
                line-height: 28px;
                padding: 0 15px;
                font-size: 12px;
                color: #000;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                margin: 10px 5px 0;
                transition: all 0.15s;
              }
            }
          }
          .f {
            width: 100%;
            display: flex;
            box-sizing: border-box;
            padding: 0 10px;
            .f-o {
              width: 70px;
              font-size: 12px;
              color: #8c8c8c;
              line-height: 18px;
            }
            .f-t {
              font-size: 12px;
              color: #000;
              line-height: 18px;
            }
          }

          .s-content {
            width: 100%;
            height: 108px;
            display: flex;
            box-sizing: border-box;
            background-color: #fff3ed;
            padding: 10px;
            margin-bottom: 20px;
            align-items: center;
            .sc-left {
              width: 400px;
              height: 88px;
              margin-right: 10px;
              border-right: 1px solid #eee;
              > div {
                font-size: 12px;

                > :first-child {
                  display: inline-block;
                  color: #8c8c8c;
                  line-height: 18px;
                  width: 68px;
                  height: 31px;
                  line-height: 31px;
                }
              }
            }
            .sc-right {
              flex: 1;
              font-size: 13px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          }

          .o {
            font-size: 14px;
            color: #000;
            line-height: 20px;
            margin-bottom: 10px;
          }

          .t {
            font-size: 12px;
            color: #000;
            line-height: 18px;
            margin-bottom: 20px;
          }
        }
        .img-left {
          width: 288px;
          min-width: 288px;
          margin-right: 20px;
          .l-img {
            width: 100%;
            height: 192px;
            border: solid 1px #eee;
            > img {
              width: 100%;
              height: 100%;
            }
          }
          .lb-img {
            width: 100%;
            > ul {
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              margin-top: 10px;
              li {
                width: 66px;
                height: 44px;
                margin-right: 10px;
                > img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }

    .right {
      width: 220px;
      min-width: 220px;
      height: auto;
      .mp__promotion {
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        padding: 20px;
        .s_left {
          width: 100%;
          height: auto;
          margin-right: 10px;
          margin-right: 17px;
          background: #fff;
          ul {
            width: 100%;
            li {
              width: 100%;
              margin: 10px 0;
              .img {
                width: 100%;
                height: 124px;
                overflow: hidden;
                > img {
                  width: 100%;
                  transition: all 0.25s;
                }

                > :hover {
                  background: red;
                  transform: scale(1.2);
                  -ms-transform: scale(1.2);
                }
              }
              > p {
                font-size: 12px;
                line-height: 18px;
                color: #000;
                margin-top: 10px;
                line-height: 20px;
                height: 20px;
                display: block;
                transition: color 0.15s;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                box-sizing: border-box;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
              }
            }
          }
          .tit {
            font-size: 20px;
            color: #383838;
            // margin: 10px 0px;

            > :first-child {
              font-size: 20px;
              line-height: 28px;
              font-weight: bolder;
              color: #f2a056;
              background-image: -webkit-linear-gradient(left, #f2a056, #f16863);
              -webkit-text-fill-color: transparent;
              -webkit-background-clip: text;
            }
          }
        }
      }
      .mp__consumerwarn {
        width: 100%;
        background: #e1f2ff;
        margin: 20px 0;
        display: flex;
        box-sizing: border-box;
        padding: 20px;
        > div {
          color: #0066b7;
          font-size: 12px;
          line-height: 20px;
        }
      }
      // background: #fff;
      .mp__storeconcat {
        background-color: #fff;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 20px 15px;

        > ul {
          .bottom {
            line-height: 20px;
            font-size: 12px;
            color: #000;
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 20px;
            border-top: solid 1px #eee;
            padding-top: 10px;
            display: flex;
          }
          > li {
            margin-bottom: 10px;
            line-height: 20px;
            font-size: 12px;
            color: #000;
            background-repeat: no-repeat;
            background-position: left top;
            background-size: 20px;
            word-break: break-all;
            margin-top: 10px;
          }
        }
      }
    }
  }
}

.mp__product-recommend {
  width: 100%;
  height: 592px;
  margin-top: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  > p {
    margin: 20px 0;
    font-size: 24px;
    color: #4a4a4a;
    line-height: 24px;
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    > li {
      border: 1px solid #eee;
      width: 24%;
      height: 239px;
      .img {
        width: 100%;
        height: 143px;
        overflow: hidden;
        > img {
          width: 100%;
          transition: all 0.25s;
        }

        > :hover {
          background: red;
          transform: scale(1.2);
          -ms-transform: scale(1.2);
        }
      }
      .t {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 0 5px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        > p {
          color: #8b8b8b;
          text-decoration: line-through;
          font-size: 14px;
          > span {
            font-size: 22px;
            color: #f43f2d;
            margin-right: 5px;
            letter-spacing: -1px;
            display: inline-block;
            font-family: DINNextLTPro;
            > span {
              font-size: 14px;
            }
          }
        }
        > span {
          display: inline-block;
          border-width: 1px;
          border-radius: 3px;
          border-style: solid;
          box-sizing: border-box;
          padding: 0 6px;
          font-size: 12px;
          height: 18px;
          line-height: 16px;
          color: #f09816;
          border-color: #f09816;
          margin-top: 7px;
        }
      }
      > p {
        font-size: 12px;
        color: #4a4a4a;
        line-height: 12px;
        min-height: 12px;
        margin-top: 3px;
        text-align: right;
        > span {
          color: #e14d42;
        }
      }
      .o {
        line-height: 20px;
        height: 20px;
        display: block;
        font-size: 14px;
        color: #000;
        transition: color 0.15s;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        box-sizing: border-box;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        padding: 0 5px;
      }
    }
  }
}
</style>