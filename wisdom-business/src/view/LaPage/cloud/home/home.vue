<template>
  <div class="home">
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

        <img src="../../assets/img/favicon.png"
             alt=""
             @click="goDetial('home')">
        <div style=" width: 125px;margin-left: 5px"
             @click="goDetial('home')">美城智慧商业</div>
      </div>
      <div class="titleRight">
        <div class="list">
          <!-- <span class="hoverColor">备案</span> -->
          <span class="hoverColor"
                :style="{'color': activeQ ? '#00a4ff' : ''}"
                @click="registereDteil('f')">服务商入驻</span>
          <span class="hoverColor"
                :style="{'color': activeF ? '#00a4ff' : ''}"
                @click="registereDteil('q')">企业入驻</span>
        </div>
        <div class="search">
          美城智慧商业
          <i class="el-icon-search"
             style="color:#fff;font-size: 17px;font-weight: 800;"></i>
        </div>
        <div class="list">
          <!-- <span class="hoverColor">备案</span> -->
          <span class="hoverColor">控制台</span>
        </div>
      </div>
    </div>

    <div class="navigation">
      <div class="navLetf">
        <div v-for="(item, index) in navJson"
             @mouseover="mouseOver"
             @mouseleave="mouseLeave"
             @click="goDetial(item, index)"
             class="hoverColor"
             :style="{'color': index === navIndex ? '#00a4ff' : ''}"
             :key="index">

          {{item.name}}
          <img src="../../assets/img/hot.gif"
               v-if="index === 0"
               alt="">
          <div class="selectAll">

            <i class="el-icon-caret-top"></i>
            <div class="content"
                 :style="{position: 'relative', left: left, top: '-8px', background: '#fff'}">
              123qweqweqweqw
            </div>
          </div>
          <!-- <img src="../../assets/img/hot.gif"
               v-if="index === 0"
               alt=""> -->
        </div>
      </div>
      <div class="navright">
        <div class="hoverColor"
             @click="login">登陆</div>
        <div class="reg"
             @click="registered">注册</div>
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
    <template>
      <el-backtop></el-backtop>
    </template>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      navIndex: null,
      navJson: [{
        name: '最新活动',
        width: 200,
        // link: '/home/product'
      }, {
        name: '首页',
        width: 200,
        link: '/home/product'
      }, {
        name: '产品',
        width: 200,
        link: '/product'
      }, {
        name: '解决方案',
        width: 600,
        link: '/solution'
      }, {
        name: '文档',
        width: 700,
        link: '/price'
      }, {
        name: '云市场',
        width: 300,
        link: '/marketHome/viewPage'
      }, {
        name: '人工智能',
        width: 100
      }, {
        name: '金融科技',
        width: 20
      }, {
        name: '开放平台',
        width: 500
      }, {
        name: '开源社区',
        width: 800
      }, {
        name: '产业互联',
        width: 300
      }, {
        name: '生态合作'
      }],

      left: 0,

      activeQ: false,
      activeF: false,
    }
  },

  methods: {
    mouseOver (e) {
      let name = e.srcElement.className
      if (name !== 'hoverColor') return false
      if (name === 'hoverColor') {
        let width = e.srcElement.children[0].children[1].clientWidth,
          x = e.target.offsetLeft
        if (x - 20 > width / 2) {
          this.left = - (width / 2) + 10 + 'px'
        } else {
          this.left = (- x + 20) + 'px'
        }
      }
    },
    mouseLeave (e) {
      // console.log(e)
    },

    login () {
      this.$router.push('/login')
    },

    registered () {
      this.$router.push('/registered')
    },

    registereDteil (res) {
      if (res === 'f') {
        this.$router.push({
          path: '/registeredQ',
        })
      } else {
        this.$router.push({
          path: '/registeredF',
        })
      }
    },

    goDetial (e, index) {
      if (e === 'home') {
        this.$router.push('/home/product')
        this.navIndex = null
        return false
      }
      if (window.location.href.split('#')[1] === e.link) return false
      if (e.link) {
        this.navIndex = index
        this.$router.push(e.link)
      }
    }
  },

  mounted () {
    this.navJson.forEach((item, index) => {
      if (item.link === window.location.href.split('#')[1]) {
        this.navIndex = index
      }
    })
  },

  watch: {
    $route (to, from) {
      if (to.name === 'registeredQ') {
        this.activeQ = true
        this.activeF = false
      } else if (to.name === 'registeredF') {
        this.activeQ = false
        this.activeF = true
      } else {
        this.activeQ = false
        this.activeF = false
      }
    }
  },
}

</script>

<style lang="scss" scoped>
.clearDiv:hover + .children {
  cursor: pointer;
  color: #409eff !important;
}

.active {
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
.buttonS {
  padding-left: 26px;
  padding-right: 26px;
  height: 34px;
  line-height: 34px !important;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  border: solid 1px #00a4ff;
  background: #00a4ff;
  border-radius: 2px;
  text-align: center;
  cursor: pointer !important;
  z-index: 999;
  color: #fff !important;
  margin-top: 20px;
}

.buttonS:hover {
  background: #0999e8;
  border: solid 1px #0999e8;
}

.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .titleBanner {
    width: 100%;
    height: 40px;
    background-color: #2b303b;
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

      width: 200px;

      > img {
        height: 30px;
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

  .navigation {
    width: 100%;
    height: 55px;
    border-bottom: 1px #2b303c solid;
    display: flex;
    box-sizing: border-box;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 13px;
    background: #191e2c;
    > div {
      display: flex;
      align-items: center;
      > div {
        margin: 0 !important;
        margin-right: 30px !important;
      }
    }
    .navLetf {
      box-sizing: border-box;
      padding-left: 20px;
      > div {
        margin: 0 30px;
        position: relative;
        .selectAll {
          position: absolute;
          z-index: 99;
          font-size: 15px;
          left: 50%;
          margin-left: -12.5px;
          display: none;
          .content {
            display: inline-block;
            color: #ccc;
            height: 0px;
            overflow: hidden;
            border-radius: 2px;
            transition: all 0.2s linear;
          }
        }
      }
      > div:hover > .selectAll {
        display: block;
        color: #fff;
        transition: height 2s;
        .content {
          height: auto;
          color: #ccc;
        }
      }
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
  }

  .footer {
    width: 100%;
    box-sizing: border-box;
    padding: 0 200px;
    background: #2d3033;
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
}

.hoverColor:hover {
  cursor: pointer;
  color: #409eff !important;
}
</style>
