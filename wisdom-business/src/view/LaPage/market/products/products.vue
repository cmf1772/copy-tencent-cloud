<template>
  <div class="products">
    <div class="mp__classify-filter"
         ref="fiter">
      <ul v-for="(item, index) in filter_json"
          :key="index">
        <p>{{item.name}}</p>
        <div>
          <li v-for="(itemChil, indexC) in item.children"
              :key="indexC">
            <span :class="item.index === indexC ? 'active' : ''"
                  @click="changeItem(index, item, indexC, itemChil)">{{itemChil.name}}</span>
          </li>
        </div>
      </ul>
    </div>

    <div class="mp__product-screen-all">
      <div class="mp__product-screen">
        <div class="s_left"
             :style="{'margin-top': top + 'px'}">
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
        <div class="s_right">
          <div class="mp__product-screen-hd">
            <div class="left">
              <span class="hoverColor"
                    style="margin-right:10px">
                综合排序
              </span>
              <span class="hoverColor"
                    style="margin-right:10px">
                使用量
              </span>
              <span class="hoverColor"
                    style="margin-right:10px">
                上架时间
              </span>
              <span class="hoverColor"
                    style="margin-right:10px">
                价格
              </span>
            </div>
            <div class="right">
              <span style="margin-right:5px"
                    class="">
                共 3842 件
              </span>
              <span style="margin-right:5px"
                    class="">
                |
              </span>
              <i class="el-icon-menu hoverColor"
                 :style="{'color': changeType === 'menu' ? '#00a4ff' : ''}"
                 @click="changeTypeS('menu')"
                 style="margin-right:5px"></i>
              <i class="el-icon-s-operation hoverColor"
                 :style="{'color': changeType === 'operation' ? '#00a4ff' : ''}"
                 @click="changeTypeS('operation')"></i>
            </div>

          </div>

          <div class="mp__product-contone"
               v-if="changeType === 'menu'">
            <div class="mp__product-item"
                 @click="geDetail">
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微购儿分销商城电商购物直播小程序</p>
              <div class="t">
                <p>北京美云城</p>
                <span>SaaS交付</span>
              </div>
              <div class="h">
                <p>
                  <el-rate v-model="value1"></el-rate>
                  <p>(123人)</p>
                </p>
                <span>23123在用</span>
              </div>
              <div class="f">
                <span>¥</span>368
              </div>
            </div>
            <div class="mp__product-item">
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微购儿分销商城电商购物直播小程序</p>
              <div class="t">
                <p>北京美云城</p>
                <span>SaaS交付</span>
              </div>
              <div class="h">
                <p>
                  <el-rate v-model="value1"></el-rate>
                  <p>(123人)</p>
                </p>
                <span>23123在用</span>
              </div>
              <div class="f">
                <span>¥</span>368
              </div>
            </div>
            <div class="mp__product-item">
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微购儿分销商城电商购物直播小程序</p>
              <div class="t">
                <p>北京美云城</p>
                <span>SaaS交付</span>
              </div>
              <div class="h">
                <p>
                  <el-rate v-model="value1"></el-rate>
                  <p>(123人)</p>
                </p>
                <span>23123在用</span>
              </div>
              <div class="f">
                <span>¥</span>368
              </div>
            </div>
            <div class="mp__product-item">
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微购儿分销商城电商购物直播小程序</p>
              <div class="t">
                <p>北京美云城</p>
                <span>SaaS交付</span>
              </div>
              <div class="h">
                <p>
                  <el-rate v-model="value1"></el-rate>
                  <p>(123人)</p>
                </p>
                <span>23123在用</span>
              </div>
              <div class="f">
                <span>¥</span>368
              </div>
            </div>
            <div class="mp__product-item">
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微购儿分销商城电商购物直播小程序</p>
              <div class="t">
                <p>北京美云城</p>
                <span>SaaS交付</span>
              </div>
              <div class="h">
                <p>
                  <el-rate v-model="value1"></el-rate>
                  <p>(123人)</p>
                </p>
                <span>23123在用</span>
              </div>
              <div class="f">
                <span>¥</span>368
              </div>
            </div>
            <div class="mp__product-item">
              <div class="img">
                <img src="../../../../assets/img/img.jpeg"
                     alt="">
              </div>
              <p class="o">微购儿分销商城电商购物直播小程序</p>
              <div class="t">
                <p>北京美云城</p>
                <span>SaaS交付</span>
              </div>
              <div class="h">
                <p>
                  <el-rate v-model="value1"></el-rate>
                  <p>(123人)</p>
                </p>
                <span>23123在用</span>
              </div>
              <div class="f">
                <span>¥</span>368
              </div>
            </div>

          </div>

          <div v-if="changeType === 'operation'"
               class="mp__product-operation">
            <ul>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <div class="content">
                  <p class="hoverColor">微购儿分销商城电商购物直播小程序</p>
                  <div>微购儿绿色通道：购买正式版，支持免费进行微信认证，节省300元/年。
                    核心功能：购物直播、网红直播购物、多商户入驻、商家手机管理后台、DIY首页装修设计三级分销拼团秒杀砍价、百度小程序、抖音头条小程序、支付宝小程序、微信小程序、微购儿小程序，无需代码 一键生成 瞬间拥有！</div>
                  <div class="f">
                    <p>深圳市网商天下科技开发有限公司</p>
                    <span>SaaS交付</span>
                  </div>
                </div>
                <div class="right">
                  <div class="f">
                    <span>¥</span>368
                  </div>
                  <p>
                    <el-rate v-model="value1"></el-rate>
                    <span>(123人)</span>
                  </p>
                  <span>23123在用</span>
                </div>
              </li>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <div class="content">
                  <p class="hoverColor">微购儿分销商城电商购物直播小程序</p>
                  <div>微购儿绿色通道：购买正式版，支持免费进行微信认证，节省300元/年。
                    核心功能：购物直播、网红直播购物、多商户入驻、商家手机管理后台、DIY首页装修设计三级分销拼团秒杀砍价、百度小程序、抖音头条小程序、支付宝小程序、微信小程序、微购儿小程序，无需代码 一键生成 瞬间拥有！</div>
                  <div class="f">
                    <p>深圳市网商天下科技开发有限公司</p>
                    <span>SaaS交付</span>
                  </div>
                </div>
                <div class="right">
                  <div class="f">
                    <span>¥</span>368
                  </div>
                  <p>
                    <el-rate v-model="value1"></el-rate>
                    <span>(123人)</span>
                  </p>
                  <span>23123在用</span>
                </div>
              </li>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <div class="content">
                  <p class="hoverColor">微购儿分销商城电商购物直播小程序</p>
                  <div>微购儿绿色通道：购买正式版，支持免费进行微信认证，节省300元/年。
                    核心功能：购物直播、网红直播购物、多商户入驻、商家手机管理后台、DIY首页装修设计三级分销拼团秒杀砍价、百度小程序、抖音头条小程序、支付宝小程序、微信小程序、微购儿小程序，无需代码 一键生成 瞬间拥有！</div>
                  <div class="f">
                    <p>深圳市网商天下科技开发有限公司</p>
                    <span>SaaS交付</span>
                  </div>
                </div>
                <div class="right">
                  <div class="f">
                    <span>¥</span>368
                  </div>
                  <p>
                    <el-rate v-model="value1"></el-rate>
                    <span>(123人)</span>
                  </p>
                  <span>23123在用</span>
                </div>
              </li>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <div class="content">
                  <p class="hoverColor">微购儿分销商城电商购物直播小程序</p>
                  <div>微购儿绿色通道：购买正式版，支持免费进行微信认证，节省300元/年。
                    核心功能：购物直播、网红直播购物、多商户入驻、商家手机管理后台、DIY首页装修设计三级分销拼团秒杀砍价、百度小程序、抖音头条小程序、支付宝小程序、微信小程序、微购儿小程序，无需代码 一键生成 瞬间拥有！</div>
                  <div class="f">
                    <p>深圳市网商天下科技开发有限公司</p>
                    <span>SaaS交付</span>
                  </div>
                </div>
                <div class="right">
                  <div class="f">
                    <span>¥</span>368
                  </div>
                  <p>
                    <el-rate v-model="value1"></el-rate>
                    <span>(123人)</span>
                  </p>
                  <span>23123在用</span>
                </div>
              </li>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <div class="content">
                  <p class="hoverColor">微购儿分销商城电商购物直播小程序</p>
                  <div>微购儿绿色通道：购买正式版，支持免费进行微信认证，节省300元/年。
                    核心功能：购物直播、网红直播购物、多商户入驻、商家手机管理后台、DIY首页装修设计三级分销拼团秒杀砍价、百度小程序、抖音头条小程序、支付宝小程序、微信小程序、微购儿小程序，无需代码 一键生成 瞬间拥有！</div>
                  <div class="f">
                    <p>深圳市网商天下科技开发有限公司</p>
                    <span>SaaS交付</span>
                  </div>
                </div>
                <div class="right">
                  <div class="f">
                    <span>¥</span>368
                  </div>
                  <p>
                    <el-rate v-model="value1"></el-rate>
                    <span>(123人)</span>
                  </p>
                  <span>23123在用</span>
                </div>
              </li>
              <li>
                <div class="img">
                  <img src="../../../../assets/img/img.jpeg"
                       alt="">
                </div>
                <div class="content">
                  <p class="hoverColor">微购儿分销商城电商购物直播小程序</p>
                  <div>微购儿绿色通道：购买正式版，支持免费进行微信认证，节省300元/年。
                    核心功能：购物直播、网红直播购物、多商户入驻、商家手机管理后台、DIY首页装修设计三级分销拼团秒杀砍价、百度小程序、抖音头条小程序、支付宝小程序、微信小程序、微购儿小程序，无需代码 一键生成 瞬间拥有！</div>
                  <div class="f">
                    <p>深圳市网商天下科技开发有限公司</p>
                    <span>SaaS交付</span>
                  </div>
                </div>
                <div class="right">
                  <div class="f">
                    <span>¥</span>368
                  </div>
                  <p>
                    <el-rate v-model="value1"></el-rate>
                    <span>(123人)</span>
                  </p>
                  <span>23123在用</span>
                </div>
              </li>
            </ul>
          </div>
          <el-pagination class="table-pagination"
                         @current-change="handleCurrentChange"
                         :current-page.sync="currentPage"
                         :page-size="10"
                         layout="total, prev, pager, next , jumper"
                         :total="tableTotal">
          </el-pagination>

          <div style="width
            100%;height:10px;background:#f4f5f9 ;margin: 10px 0;">
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
                  <p class="left"><span><span>¥</span>130</span>￥1100</p>
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
                  <p class="left"><span><span>¥</span>130</span>￥1100</p>
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
                  <p class="left"><span><span>¥</span>130</span>￥1100</p>
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
                  <p class="left"><span><span>¥</span>130</span>￥1100</p>
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
                  <p class="left"><span><span>¥</span>130</span>￥1100</p>
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
                  <p class="left"><span><span>¥</span>130</span>￥1100</p>
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
                  <p class="left"><span><span>¥</span>130</span>￥1100</p>
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
                  <p class="left"><span><span>¥</span>130</span>￥1100</p>
                  <span>免费试用</span>
                </div>
                <p> <span>1265</span> 人在用</p>
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
  name: 'products',
  data () {
    return {
      currentPage: 1,
      tableTotal: 1,
      value1: '5',
      changeType: 'menu',
      top: 0,
      filter_json: [
        {
          name: '产品分类',
          index: 0,
          children: [{
            name: '全部'
          }, {
            name: '电商/零件'
          }, {
            name: '影视/外卖'
          }, {
            name: '生活服务'
          }, {
            name: '政务名声'
          }, {
            name: '小程序光网'
          }, {
            name: '游戏'
          }, {
            name: '定制开发'
          }, {
            name: '小程序运营'
          }, {
            name: '其他'
          }]
        },
        {
          name: '交付方式',
          index: 0,
          children: [{
            name: '全部'
          }, {
            name: '惊喜桑'
          }, {
            name: 'scss'
          }, {
            name: '人工服务'
          }, {
            name: 'api'
          }, {
            name: '兑换码'
          }]
        },
        {
          name: '价格',
          index: 0,
          children: [{
            name: '全部'
          }, {
            name: '免费/使用'
          }, {
            name: '1-198'
          }, {
            name: '199-1988'
          }, {
            name: '2980以上'
          }]
        }
      ]
    }
  },

  methods: {

    geDetail () {
      this.$router.push('/marketHome/details')
    },

    changeTypeS (type) {
      this.changeType = type
    },
    changeItem (index, item, indexC, itemChil) {
      this.filter_json[index].index = indexC
    },
    handleCurrentChange () {

    }
  },

  mounted () {
    this.$nextTick(() => {
      // console.log(document.getElementById('bd').scrollTop)
      this.top = 296 - this.$refs.fiter.clientHeight
      console.log(this.top)
    })
  }
}
</script>

<style lang="scss" scoped>
.active {
  width: auto !important;
  background: #ff9d00;
  color: #fff;
  cursor: default;
  height: 20px;
  display: inline-block;
  vertical-align: top;
  line-height: 20px;
  padding: 0 10px;
  font-size: 12px;
  border-radius: 10px;
  transition: background 0.15s;
}
.products {
  background: #f4f5f9;
  box-sizing: border-box;
  padding: 0 200px;
  .mp__product-screen-all {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin-top: 12px;
    .mp__product-screen {
      width: 100%;
      display: flex;
      // height: 200px;
      .s_left {
        width: 220px;
        min-width: 220px;
        height: auto;
        margin-right: 10px;
        margin-right: 17px;
        background: #fff;
        box-sizing: border-box;
        padding: 20px;
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
          font-size: 24px;
          color: #383838;
          // margin: 10px 0px;

          > :first-child {
            font-size: 24px;
            line-height: 28px;
            font-weight: bolder;
            color: #f2a056;
            background-image: -webkit-linear-gradient(left, #f2a056, #f16863);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
          }
        }
      }
      .s_right {
        width: 890px;
        min-width: 890px;
        background: #fff;
        box-sizing: border-box;
        padding: 0 20px;
        .mp__product-operation {
          width: 100%;
          > ul {
            width: 100%;
            > li {
              margin-bottom: 10px;
              width: 100%;
              transition: all 0.3s;
              border: 1px solid #efefef;
              display: flex;
              .img {
                width: 288px;
                overflow: hidden;

                > img {
                  transition: all 0.25s;
                  width: 100%;
                  height: 100%;
                }

                > :hover {
                  background: red;
                  transform: scale(1.2);
                  -ms-transform: scale(1.2);
                }
              }
              .content {
                flex: 1;
                box-sizing: border-box;
                padding: 0 20px;
                > p {
                  font-size: 16px;
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
                  margin-top: 10px;
                }
                > div {
                  font-size: 12px;
                  color: #999;
                  line-height: 20px;
                  margin-top: 20px;
                  max-height: 80px;
                  overflow: hidden;
                }
                .f {
                  width: 100%;
                  display: flex;
                  justify-content: space-between;
                  > p {
                    // font-size: 12px;
                    color: #4a4a4a;
                    line-height: 12px;
                    min-height: 12px;
                    margin-top: 3px;
                    text-align: left;
                    line-height: 18px;
                    height: 18px;
                    margin-top: 8px;
                  }

                  > span {
                    height: 18px;
                    line-height: 16px;
                    font-size: 12px;
                    display: block;
                    float: right;
                    padding: 0 10px;
                    box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    border: 1px solid #34a4fc;
                    border-radius: 10px;
                    color: #34a4fc;
                  }
                }
              }
              .right {
                width: 207px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .f {
                  font-size: 22px;
                  color: #f43f2d;
                  margin-right: 5px;
                  letter-spacing: -1px;
                  display: inline-block;
                  font-family: DINNextLTPro;
                  margin: 5px 0;
                  > span {
                    font-size: 14px !important;
                  }
                }
                > p {
                  margin: 5px 0;
                  width: 180px;
                  font-size: 12px;
                  color: #4a4a4a;
                  display: flex;
                }
                > span {
                  margin: 5px 0;
                  height: 18px;
                  line-height: 18px;
                  color: #888;
                  font-size: 12px;
                }
              }
            }
          }
        }
        .mp__product-contone {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .mp__product-item {
            margin-bottom: 10px;
            width: 32%;
            border: 1px solid #eee;
            .img {
              width: 100%;
              overflow: hidden;

              > img {
                transition: all 0.25s;
                width: 100%;
                height: 100%;
              }

              > :hover {
                background: red;
                transform: scale(1.2);
                -ms-transform: scale(1.2);
              }
            }
            .h {
              width: 100%;
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              color: #4a4a4a;
              box-sizing: border-box;
              padding: 0 5px;
              margin: 10px 0;
              > p {
                display: flex;
              }
            }

            .f {
              color: #f43f2d;
              letter-spacing: -1px;
              display: inline-block;
              box-sizing: border-box;
              padding: 0 5px;
              font-family: DINNextLTPro;
              margin: 5px 0;
            }
            .t {
              margin: 10px 0;
              box-sizing: border-box;
              padding: 0 5px;
              width: 100%;
              display: flex;
              justify-content: space-between;
              > p {
                max-width: 184px;
                overflow: hidden;
                display: block;
                float: left;
                font-size: 13px;
                height: 18px;
                white-space: nowrap;
                text-overflow: ellipsis;
                color: #4a4a4a;
              }
              > span {
                height: 18px;
                line-height: 16px;
                font-size: 12px;
                display: block;
                float: right;
                padding: 0 10px;
                box-sizing: border-box;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                border: 1px solid #34a4fc;
                border-radius: 10px;
                color: #34a4fc;
              }
            }
            .o {
              margin: 10px 0;
              box-sizing: border-box;
              padding: 0 5px;
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
            }
          }
        }
        .mp__product-screen-hd {
          width: 100%;
          height: 51px;
          height: 50px;
          line-height: 50px;
          display: inline-block;
          margin-right: 30px;
          font-size: 12px;
          color: #4a4a4a;
          vertical-align: top;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #efefef;
          margin-bottom: 20px;
        }
        .mp__product-recommend {
          width: 100%;
          height: 592px;
          margin-top: 10px;
          box-sizing: border-box;
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
      }
    }
  }

  .mp__classify-filter {
    width: 850px;
    // height: 270px;
    margin-top: 20px;
    background-color: #fff;
    padding: 0 20px;
    margin-left: 237px;
    > ul {
      width: 100%;
      height: auto;
      display: flex;
      > p {
        width: 100px;
        box-sizing: border-box;
        padding: 15px 20px 0 0;
        line-height: 20px;
        color: #666;
        font-size: 12px;
        vertical-align: top;
        word-break: keep-all;
        display: table-cell;
        border-bottom: 1px solid #efefef;
      }
      > div {
        width: 100%;
        border-bottom: 1px solid #efefef;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding-top: 15px;
        > li {
          margin-bottom: 12px;
          width: 100px;
          height: 20px;
          display: inline-block;
          vertical-align: top;
          line-height: 20px;
          padding: 0 10px;
          font-size: 12px;
          border-radius: 10px;
          color: #333;
          transition: background 0.15s;
          > span {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>