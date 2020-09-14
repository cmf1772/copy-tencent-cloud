<template>
  <div class="market">
    <div class="titleBanner">
      <div class="titleLeft ">
        <div class="clearDiv"
             @click="goDetial('home')">
          <menuC class="hoverMenu"></menuC>
        </div>
        <div class="hoverColor children">
          <i class="el-icon-s-unfold"
             style="font-size: 16px;"></i>
          <p>菜单</p>
        </div>

        <img src="@/assets/img/favicon.png"
             alt="">
        <div style="width: 200px;margin-left: 5px;    min-width: 150px;">美城智慧商业</div>
      </div>
      <div class="titleRight">
        <div class="list">
          <span class="hoverColor">美城智慧商业首页</span>
          <span class="hoverColor">买家中心</span>
          <span class="hoverColor">卖家中心</span>
          <span class="hoverColor">服务中心</span>
          <span class="hoverColor"
                @click="login">登陆</span>
          <div class="reg"
               @click="registered">注册</div>
        </div>
      </div>
    </div>

    <div class="marketSwiper">
      <div class="search">
        <div class="left">
          <img src="@/assets/img/logoFFF.png"
               alt="">
        </div>
        <div class="center">
          <div>
            <input type="text">
            <div>
              <i class="el-icon-search"></i>
            </div>
          </div>
          <p>
            <span class="hoverColor">商标注册（特惠上新）</span>
            <span class="hoverColor">微盟·表单（限时免费）</span>
            <span class="hoverColor">域名</span>
            <span class="hoverColor">网站建设</span>
          </p>
        </div>
        <div class="right"></div>
      </div>
      <div class="selectNav">
        <div class="left_o">商品分类</div>
        <ul>
          <li v-for="(item, index) in menuTop"
              class="hoverColor"
              :key="index"> {{item.name}}</li>
        </ul>
      </div>
      <div class="classify-bd"
           ref="bd"
           v-if="$route.path !== '/marketHome/details'"
           id="bd">
        <div class="classItem-bd">
          <ul>
            <li @click="gepProducts">
              小程序 </li>
            <li>电商零件</li>
            <li>餐饮外卖</li>
            <div class="banner__main-list">
              1
            </div>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="footer-inner">
        <ul>
          <li class="hoverColor">
            <i class="el-icon-help"></i>
            <span>5天内无理由退款</span>
          </li>
          <li class="hoverColor">
            <i class="el-icon-success"></i>
            <span>免费备案</span>
          </li>
          <li class="hoverColor">
            <i class="el-icon-user-solid"></i>
            <span>1V1大客户服务</span>
          </li>
          <li class="hoverColor">
            <i class="el-icon-phone"></i>
            <span>7x24小时服务</span>
          </li>
        </ul>
      </div>
      <div class="footer-website">
        <div class="websiteL">
          <div class="footer-website-group">
            <p>腾讯云计算</p>
            <ul>
              <li>产品</li>
              <li>产阿斯顿啊品</li>
              <li>产品</li>
              <li>产品</li>
            </ul>
          </div>
          <div class="footer-website-group">
            <p>解决方案</p>
            <ul>
              <li>产品请问</li>
              <li>云市请问场</li>
              <li>认证蔷薇蔷薇信息</li>
              <li>产品请问请问</li>
              <li>产阿请问斯顿啊品</li>
              <li>产请问品</li>
              <li>产请问品</li>
            </ul>
          </div>
          <div class="footer-website-group">
            <p>资源和社区</p>
            <ul>
              <li>产我企鹅品</li>
              <li>云啊市场</li>
              <li>产品和发布</li>
              <li>认证阿斯顿说信息</li>
              <li>产品行请问</li>
              <li>斯顿啊品</li>
              <li>产说品</li>
              <li>产品</li>
            </ul>
          </div>
          <div class="footer-website-group">
            <p>合作与生态</p>
            <ul>
              <li>产品</li>
              <li>云市场</li>
              <li>和发布</li>
              <li>认证信息</li>
              <li>产我品</li>
            </ul>
          </div>
          <div class="footer-website-group">
            <p>管理和支持</p>
            <ul>
              <li>产品</li>
              <li>云市去我场</li>
              <li>产品和发布</li>
              <li>认证我企鹅信息</li>
              <li>产品我请问</li>
              <li>产我阿斯顿啊品</li>
            </ul>
          </div>
        </div>
        <div class="websiteR">
          <div>
            Copyright © 2013 - 2020
            Tencent Cloud. All Rights Reserved.
            腾讯云 版权所有
          </div>
          <div class="buttonS">购买咨询-----</div>
        </div>
      </div>
      <div class="footer-recommend">
        <div>
          <ul class="footer-recommend-cell">
            <p>热门产品</p>
            <li>域名注册</li>
            <li>云务器</li>
            <li>区块链服务</li>
            <li>消息队列</li>
            <li>域名解析</li>
            <li>视直播</li>
            <li>云储</li>
            <li>云数据库</li>
            <li>消息队列</li>
            <li>网络加速</li>
          </ul>
          <ul class="footer-recommend-cell">
            <p>热门推荐</p>
            <li>域名注册</li>
            <li>云服务器</li>
            <li>区块链服务</li>
            <li>消列</li>
            <li>域析</li>
            <li>视直播</li>
            <li>云存储</li>
            <li>云数据库</li>
            <li>消息队列</li>
            <li>网络加速</li>
          </ul>
          <ul class="footer-recommend-cell">
            <p>更多推荐</p>
            <li>域名注册</li>
            <li>云务器</li>
            <li>区服务</li>
            <li>消息队列</li>
            <li>域名解析</li>
            <li>视频直播</li>
            <li>云存储</li>
            <li>云数据</li>
            <li>消列qwe</li>
            <li>网加速</li>
          </ul>
        </div>
      </div>

      <div class="footer-blogroll">
        <div>
          <ul class="footer-recommend-cell">
            <p style="margin-right:20px">tencent</p>
            <li> 腾讯开放平台</li>
            <li>云腾讯会议</li>
            <li> 腾讯优图</li>
            <li>消息队列</li>
            <li>域名解析</li>
            <li> 微信公众平台</li>
            <li>消息队列</li>
            <li>网络加速</li>
          </ul>
          <ul class="footer-recommend-cell">
            <li style="margin-left: 0">京公网安备 11010802017518</li>
            <li>云服务器</li>
            <li> 粤B2-20090059-1</li>
            <span>域名注册服务机构批复文号：京信信管发〔2018〕156号 鲁通管〔2019〕83号</span>
          </ul>
          <ul class="footer-recommend-cell">
            <span style="margin-left:0">代理域名注册服务机构：烟台帝思普网络科技有限公司（DNSPod） 新网数码</span>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marketHome',
  data () {
    return {
      menuTop: [{
        name: '小程序',
      }, {
        name: '网站建设',
      }, {
        name: '基础软件',
      }, {
        name: '办公软件',
      }, {
        name: '企业服务',
      }, {
        name: 'api服务',
      }, {
        name: '物联网',
      },]
    }
  },
  methods: {
    goDetial (e, index) {
      if (e === 'home') {
        this.$router.push('/home/product')
        this.navIndex = null
        return false
      }
    },

    gepProducts () {
      this.$router.push('/marketHome/products')
    },

    login () {
      this.$router.push('/login')
    },

    registered () {
      this.$router.push('/registered')
    },
  },

  mounted () {
    // console.log(this.)
  }
}
</script>

<style lang="scss" scoped>
.market {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .titleBanner {
    width: 100%;
    height: 40px;
    background-color: #2f3e69;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    color: #fff;
    font-size: 14px;
    i,
    span,
    div {
      cursor: pointer;
    }

    .titleLeft {
      display: flex;
      align-items: center;
      .children {
        display: flex;
        height: 20px;
        width: 100%;
        align-items: center;

        > p {
          font-size: 16px;
          display: inline-block;
          vertical-align: middle;
          line-height: 16px;
          padding-left: 8px;
          border-right: 1px #555962 solid;
          width: 100%;
        }
      }

      width: 280px;

      > img {
        height: 20px;
        margin-left: 20px;
      }
    }
    .titleRight {
      display: flex;
      align-items: center;
      font-size: 12px;
      .search {
        width: 160px;
        margin: 0 10px;
        height: 40px;
        line-height: 40px;
        background-color: #383e4d;
        display: inline-block;
        font-size: 12px;
        color: #8a8e99;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0 9px;
      }
      .list {
        > span {
          margin: 0 10px;
        }
      }
    }
  }
  .marketSwiper {
    width: 100%;
    height: 202px;
    box-sizing: border-box;
    padding: 0 200px;
    position: relative;
    .classify-bd {
      position: absolute;
      top: 100%;
      left: 200px;
      width: 220px;
      height: 314px;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0.4);
      display: block;
      .classItem-bd {
        width: 100%;
        height: 44px;
        line-height: 44px;
        > ul {
          box-sizing: border-box;
          padding: 0 20px;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          > :first-child {
            transition: color 0.25s;
            font-size: 14px;
            color: #fff;
            font-weight: 600;
          }
          li {
            cursor: pointer;
            transition: color 0.25s;
            font-size: 12px;
            color: #fff;
          }
          li:hover {
            color: #00a4ff !important;
          }
        }
        > ul:hover {
          background: #fff;
          color: #000;
          li {
            color: #000;
          }
          .banner__main-list {
            display: block;
          }
        }
      }

      .banner__main-list {
        position: absolute;
        top: 0;
        left: 220px;
        width: 960px;
        height: 314px;
        background: #fff;
        display: none;
        box-shadow: border-box;
        padding: 20px;
      }
    }
    .search {
      width: 100%;
      height: 156px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        width: 200px;
        padding-bottom: 20px;
        > img {
          width: 100%;
        }
      }
      .center {
        width: 590px;
        > div {
          width: 100%;
          display: flex;
          > input {
            width: 550px;
            border: 2px solid #34a4fc;
            border-right: 0;
            height: 38px;
            text-indent: 20px;
            line-height: 30px;
            font-size: 14px;
            color: #333;
          }
          > div {
            width: 42px;
            height: 42px;
            background: #34a4fc;
            text-align: center;
            line-height: 42px;
            font-size: 28px;
            color: #fff;
          }
        }
        > p {
          font-size: 12px;
          color: #999;
          transition: color 0.15s;
          margin-top: 10px;
        }
      }
      .right {
        width: 240px;
      }
    }
    .selectNav {
      display: flex;
      width: 100%;
      height: 48px;
      .left_o {
        height: 48px;
        min-width: 220px;
        width: 220px;
        background-color: #2a303b;
        font-size: 0;
        box-sizing: border-box;
        padding: 14px 0 14px 15px;
        display: block;
        display: block;
        line-height: 48px;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        line-height: 16px;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
      }
      > ul {
        display: flex;
        line-height: 48px;
        > li {
          cursor: pointer;
          padding: 0 17px;
          font-size: 16px;
          color: #000;
          display: inline-block;
          height: 18px;
          vertical-align: middle;
          transition: color 0.15s;
        }
      }
    }
  }
}

.clearDiv:hover + .children {
  cursor: pointer;
  color: #409eff !important;
}

.clearDiv:hover .hoverMenu {
  transform: translate(0px, 0px) !important;
}

.clearDiv {
  position: absolute;
  left: 0px;
  top: 0;
  width: 100px;
  height: 50px;
}
.hoverMenu {
  transition: all 0.3s linear;
  // display: none;
  transform: translate(-201px, 0px);
}
.reg {
  height: 35px;
  min-width: 50px;
  padding: 0 20px;
  background-color: #00a4ff;
  color: #fff;
  font-size: 14px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  outline: 0;
  cursor: pointer;
  margin-right: 0 !important;
}
.reg:hover {
  background: #0a97e4;
}

.footer {
  width: 100%;
  box-sizing: border-box;
  padding: 0 200px;
  background: #2f3e69;
  .footer-website {
    width: 100%;
    padding-bottom: 27px;
    min-height: 200px;
    display: flex;
    box-sizing: border-box;
    border-bottom: 1px solid #45484c;
    margin-bottom: 5px;
    padding-top: 30px;
    .websiteL {
      flex: 1;
      display: flex;
      justify-content: space-between;
      .footer-website-group {
        flex: 1;
        > p {
          margin-bottom: 15px;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
          color: #fff;
        }
        > ul li {
          cursor: pointer;
          display: block;
          padding: 4px 0;
          font-size: 12px;
          line-height: 1.5;
          color: #ccc;
        }
        > ul li:hover {
          color: #409eff !important;
        }
      }
    }
    .websiteR {
      width: 190px;
      > div {
        margin-bottom: 14px;
        font-size: 12px;
        line-height: 24px;
        color: #ccc;
      }
    }
  }

  .footer-inner {
    width: 100%;
    height: 93px;
    border-bottom: 1px solid #45484c;
    display: flex;
    align-items: center;
    > ul {
      display: flex;
      width: 100%;
      justify-content: space-between;
      color: #fff;
      li > i {
        vertical-align: middle;
        margin-right: 10px;
        font-size: 32px;
      }
      li > span {
        font-size: 14px;
        color: #fff;
      }
    }
  }

  .footer-blogroll {
    width: 100%;
    min-height: 133px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #45484c;
    // align-items: center;
    justify-content: center;
    > div {
      min-height: 72px;
      > ul {
        display: flex;
        // justify-content: space-between;
        margin-bottom: 10px;
        > p {
          font-size: 14px;
          color: #fff;
          font-weight: 400;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        > li {
          font-size: 12px;
          color: #999;
          // width: 80px;
          // margin: 0 40px;
          margin-left: 20px;
        }

        > span {
          font-size: 12px;
          color: #999;
          white-space: nowrap;
          margin-left: 20px;
        }

        > li:hover {
          cursor: pointer;
          color: #0999e8;
        }
      }
    }
  }

  .footer-recommend {
    width: 100%;
    min-height: 133px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #45484c;
    // align-items: center;
    justify-content: center;
    > div {
      min-height: 72px;
      > ul {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        > p {
          font-size: 14px;
          color: #fff;
          font-weight: 400;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }

        > li {
          font-size: 12px;
          color: #999;
          width: 60px;
        }

        > li:hover {
          cursor: pointer;
          color: #0999e8;
        }
      }
    }
  }
}
</style>
