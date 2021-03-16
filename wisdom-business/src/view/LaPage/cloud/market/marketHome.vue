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

        <img src="../../assets/img/favicon.png"
             alt="">
        <div style=" width: 125px;margin-left: 5px">美城智慧企业</div>
      </div>
      <div class="titleRight">
        <div class="list">
          <span class="hoverColor">美城智慧企业首页</span>
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
          <img src="../../assets/img/logoFFF.png"
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
      <div class="classify-bd">
        <div class="classItem-bd">
          <ul>
            <li>小程序</li>
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

    login () {
      this.$router.push('/login')
    },

    registered () {
      this.$router.push('/registered')
    },
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
</style>
