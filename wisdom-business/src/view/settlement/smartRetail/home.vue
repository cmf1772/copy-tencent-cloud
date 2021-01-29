<template>
  <div>
    <div class="top"
         style="background: #262F3E">
      <div class="titleimg"
           style=" float: left;">
        <img src="@/assets/img/favicon.png"
             alt="">
        <div style=" float: left; color: #fff"
             @click="goDetial({
                name: '总揽',
                icon: '',
                path: '/survey'
              })"
             class="text s">美城智慧零售</div>
      </div>
      <div style="float: left; margin-left: 60px"
           class="flex text">
        <div v-for="item in topMenu"
             class="ml parent s"
             :key="item.id">
          <span style="color: #fff; margin-right: 25px; font-size: 13px"> {{item.name}}</span>
          <ul class="children s"
              style="width: 900px">
            <el-input placeholder="请输入搜索标题"
                      style="margin: 20px 0; width: 430px; "
                      v-model="input3"
                      size="mini"
                      class="input-with-select">
              <el-button slot="append"
                         icon="el-icon-search"></el-button>
            </el-input>
            <div class="grid">
              <li v-for="(children, index) in item.children"
                  class="item"
                  style="width: 200px"
                  @click="goDetial(children)"
                  :key="index">
                <span :style="{'color': children.name === clearName ? '#2589ff' : '',}">{{children.name}}</span>
                <ol class="childrenItem ml"
                    v-if="children.children"
                    v-for="(childrenI, indexC) in children.children"
                    :key="indexC">
                  <li @click="goDetial(childrenI)"
                      :style="{'color': childrenI.name === clearName ? '#2589ff' : ''}">{{childrenI.name}}</li>
                </ol>
              </li>
            </div>

          </ul>
        </div>
      </div>
      <!-- <el-popover placement="bottom"
                    @show="show"
                    width="1000"
                    style="height: 600px"
                    trigger="click">
          <div class="service">
            <div class="grid">
              <div class="item">
                <div class="tip">
                  <span>总览</span>
                </div>
                <div class="list">
                  <ul>
                    <li>总体概览</li>
                    <li>工作台</li>
                    <li>驾驶舱</li>
                    <li>自定义报表</li>
                    <li>客户概览</li>
                    <li>产品概览</li>
                    <li>销售概览</li>
                    <li>营销概览</li>
                    <li>生产概览</li>
                    <li>业务概览</li>
                    <li>运营概览</li>
                    <li>管理概览</li>
                    <li>生态概览</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="tip">
                  <span>客户</span>
                </div>
                <div class="list">
                  <ul>
                    <li>客户概览</li>
                    <li>客户管理</li>
                    <li>会员管理</li>
                    <li>客户服务概览</li>
                    <li>售后服务</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="tip">
                  <span>产品</span>
                </div>
                <div class="list">
                  <ul>
                    <li>产品概览</li>
                    <li>产品分类</li>
                    <li>产品管理</li>
                    <li>产品定价</li>
                    <li>进货管理</li>
                    <li>产品仓库</li>
                    <li>上架商品</li>
                    <li>库存管理</li>
                    <li>渠道铺货（小程序、微商城、线下货架等）</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="tip">
                  <span>销售</span>
                </div>

                <div class="list">
                  <ul>
                    <li>销售概览</li>
                    <li>商机管理</li>
                    <li>订单管理</li>
                    <li>销售团队</li>
                    <li>分销管理</li>
                    <li>自销管理</li>
                    <li>代销管理</li>
                    <li>零售终端</li>
                    <li>退换货</li>
                    <li>销售渠道（第三方销售平台，如美团、饿了么、淘宝、天猫、美城茂等销售渠道管理）</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="tip">
                  <span>营销</span>
                </div>
                <div class="list">
                  <ul>
                    <li>礼券管理</li>
                    <li>营销助手</li>
                    <li>促销中心</li>
                    <li>促销中心</li>
                    <li>推广中心</li>
                    <li>营销活动</li>
                    <li>智能公文</li>
                    <li>内容营销</li>
                    <li>全员任务</li>
                    <li>营销案例</li>
                    <li>市场数据</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="tip">
                  <span>业务</span>
                </div>
                <div class="list">
                  <ul>
                    <li>采购</li>
                    <li>供应链</li>
                    <li>售后</li>
                    <li>促销中心</li>
                    <li>上下游合作等各类业务管理</li>
                    <li>监控</li>
                    <li>流程</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="tip">
                  <span>营销</span>
                </div>
                <div class="list">
                  <ul>
                    <li>运营监测</li>
                    <li>用户运营</li>
                    <li>产品运营</li>
                    <li>内容运营</li>
                    <li>媒体运营</li>
                    <li>社区运营</li>
                    <li>店铺运营</li>
                    <li>数据运营</li>
                    <li>推广优化</li>
                    <li>团队运营</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="tip">
                  <span>生产</span>
                </div>
                <div class="list">
                  <ul>
                    <li>产品生产作业流程管理</li>
                    <li>设备管理</li>
                    <li>厨房生产管理</li>
                    <li>餐饮行业、收银台管理</li>
                    <li>自动售货机管理</li>
                    <li>点餐宝管理等终端设备管理</li>
                    <li>文化行业的舞蹈编排</li>
                    <li>演出管理</li>
                    <li>装饰公司的工程作业管理</li>
                    <li>流程管理</li>
                  </ul>
                </div>
              </div>

              1、门店列表 2、新增门店 3、门店排行

              <div class="item">
                <div class="tip">
                  <span>管理</span>
                </div>
                <div class="list">
                  <ul>
                    <li>收银管理</li>
                    <li>财务管理</li>
                    <li>资产管理</li>
                    <li>部门管理</li>
                    <li>员工管理</li>
                    <li>门店管理</li>
                    <li>权限管理</li>
                    <li>人资管理</li>
                    <li>物资管理</li>
                  </ul>
                </div>
              </div>
              <div class="item">
                <div class="tip">
                  <span>生态</span>
                </div>
                <div class="list">
                  <ul>
                    <li>应用中心</li>
                    <li>服务市场</li>
                    <li>人才市场</li>
                    <li>行业媒体</li>
                    <li>行业联盟</li>
                    <li>行业社群</li>
                    <li>行业培训</li>
                    <li>管理咨询</li>
                    <li>行业活动</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div style=" float: left"
               slot="reference"
               class="text blueColor s ml">产品</div>
        </el-popover> -->
      <ul class="parentB">
        <li v-for="(item, index) in topNav"
            style="color: #fff"
            @click="parentB(item)"
            :key="index">
          <i :class="item.icon"></i>
          {{item.text}}
        </li>
        <el-image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1444227567,1356642267&fm=11&gp=0.jpg"
                  style="width: 30px;height: 30px; border-radius: 100%; margin-left: 30px; margin-right: 10px">
          <div slot="error"
               class="image-slot">
            <i class="el-icon-picture-outline"
               style="color: #fff"></i>
          </div>
        </el-image>
        <!-- <li style="color: #fff;  padding-right: 0">

        </li> -->
        <el-dropdown @command="command"
                     style="color: #fff;">
          <span class="el-dropdown-link">
            {{$store.state.user.nickname || JSON.parse($store.state.token).username}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item command="a">切换店铺</el-dropdown-item> -->
            <el-dropdown-item command="b">个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </ul>
    </div>
    <div class="home"
         :style="{'height': height}">
      <div class="left"
           v-if="menuData.length">
        <leftMenu :menuData="menuData"
                  :topMenuName='clearName'></leftMenu>
      </div>
      <div class="right"
           style="    overflow: hidden;">
        <div class="content"
             :style="{'height': contentHeight}">
          <router-view style="flex: 1; margin: 0"
                       class="bs"></router-view>
          <help v-if="help"></help>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import menu from '@/router/menu'
import topMenu from '@/components/JS/menuJson'
import nav from '@/router/nav'
import { shopMenu } from '@/components/JS/selectMenu'

export default {
  name: 'home',
  data () {
    return {
      topNav: [{
        text: '首页',
        path: '/home/product',
        icon: 'el-icon-s-home'
      }, {
        text: '消息',
        icon: 'el-icon-s-comment'
      }, {
        text: '邮件',
        icon: 'el-icon-message'
      }, {
        text: '操作日志',
        icon: 'el-icon-chat-line-square'
      }, {
        text: '服务',
      }, {
        text: '帮助',
      }],
      height: window.innerHeight - 50 + 'px',
      menuData: [],
      contentHeight: window.innerHeight + 'px',
      help: true,
      topMenu: topMenu,
      clearName: sessionStorage.getItem('clearName'),
    }
  },

  methods: {
    parentB (row) {
      this.$router.push(row.path)
    },
    goDetial (row) {
      if (row.children) return false
      if (!row.path.length) {
        this.$message.error('暂无路径');
        return false
      }
      // 存储 防止数据丢失 页面展示不对
      sessionStorage.setItem('clearName', row.name)
      if (!sessionStorage.getItem('clearName')) {
        this.$router.push('/survey')
      }
      this.clearName = sessionStorage.getItem('clearName')
      this.$router.push(row.path)
      this.changeMenu(row)
    },

    // 通过路由判断 是否显示帮助  特殊特面不显示帮助
    showHelp () {
      let routerArray = [
        '/survey',
        '/shopPage',
        '/marketingCenter',
        '/promotionCenter',
        '/advertisingPromotion',
        '/myApp',
        '/myOrder',
        '/orderFlow',
        '/shopManagement/shippingAddress',
        '/shopManagement/modifyTheData',
        '/shopManagement/addPageManagement',
        '/shopManagement/mobilePhoneBy',
        '/shopManagement/phoneBy',
        '/shopManagement/imageAds',
        '/shopManagement/editImageAds',
        '/shopManagement/popUpAds',
        '/shopManagement/showMerchants',
        '/setUpShops/navigationManagement',
        '/setUpShops/editNavigationManagement',
        '/setUpShops/information',
        '/setUpShops/settingService',
        '/setUpShops/SMSSettings',
        '/setUpShops/shopCertification',
        '/setUpShops/theHttp',
        '/developManagement/trustManagement',
        '/shopManagement/templateToBuy',
        '/shopManagement/editFriendshipConnection',
        '/shopManagement/friendshipConnection',
        '/commodity/conventionalKnowledge',
        '/commodity/editConventionalKnowledge',
        '/commodity/rebateGoods',
        '/commodity/spellMassGoods',
        '/commodity/secondsKillGoods',
        '/commodity/bulkGoods',
        '/commodity/editBulkGoods',
        '/commodity/editSpellMassGoods',
        '/commodity/editSecondsKillGoods',
        '/commodity/auctionGoods',
        '/commodity/editAuctionGoods',
        '/commodity/distributionGoods',
        '/commodity/notGoods',
        '/conventionalProducts/conventionalProducts',
        '/conventionalProducts/editConventional',
        '/contentManagement/magazineManagement',
        '/contentManagement/informationManagement',
        '/contentManagement/addInformationManagement'
      ]
      // this.help = !routerArray.indexOf(this.$route.path) > -1
      this.help = routerArray.indexOf(this.$route.path) > -1 ? false : true
      this.$store.commit('SET_UPLOAD_URL')
    },

    // 暂时通过名字判断 *****
    changeMenu (row) {
      // 区分 商铺 和 6大商铺
      if (shopMenu.indexOf(this.clearName) > -1 && sessionStorage.getItem('type')) {
        sessionStorage.setItem('type', true)
        nav.forEach(item => {
          if (item.text === sessionStorage.getItem('clearName')) {
            this.menuData = item.subset ? item.subset : []
            sessionStorage.setItem('index_menu', item.menu)
          }
        })
      } else {
        sessionStorage.setItem('type', false)
        menu[0].children.forEach(item => {
          if (item.text === sessionStorage.getItem('clearName')) {
            this.menuData = item.children ? item.children : []
            sessionStorage.setItem('index_menu', 1)
          }
        })
      }
    },

    command (command) {
      switch (command) {
        case 'a':
          this.$router.push('/settlement/switchProject')
          break
        case 'b':
          this.goDetial({
            name: '个人中心',
            icon: '',
            path: '/shopManagement/shippingAddress'
          })
          break
      }
    },

    show () {
      this.$nextTick(() => {

        let elem = document.querySelector(".grid")
        var msnry = new Masonry(elem, {
          itemSelector: '.item',
          columnWidth: 40
        })
      })
    }
  },

  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.showHelp()
      },
      // 深度观察监听
      deep: true
    }
  },

  mounted () {

  },

  created () {
    this.showHelp()
    this.changeMenu()
    // this.menuData = menu[0].children
  }
}
</script>

<style lang="scss">
.children {
  .el-input__inner,
  .el-input-group__append {
    background: #151822;
    border: solid #595961 1px;
  }
}
</style>

<style lang="scss" scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
}

.titleimg {
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }
}

.top {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  line-height: 50px;
  -webkit-box-shadow: 0 2px 20px 0 rgba(15, 12, 70, 0.1);
  box-shadow: 0 2px 20px 0 rgba(15, 12, 70, 0.1);
  padding: 0 20px;
  .parentB {
    float: right;
    display: flex;
    align-items: center;
    li {
      padding: 0 10px;
      color: #595961;
      text-decoration: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      -webkit-transition: color 0.3s;
      transition: color 0.3s;
      -webkit-text-decoration-skip: objects;
      font-size: 12px;
    }
    .el-dropdown {
      cursor: pointer;
      // padding: 0 10px;
    }
    li:hover {
      color: #2589ff !important;
    }
  }
}
.parent {
  position: relative;
  box-sizing: border-box;
  .children {
    padding: 0 20px;
    position: absolute;
    background: #151822;
    width: 100px;
    display: none;
    border-radius: 5px;
    max-height: 700px;
    overflow: auto;
    left: -80px;
    z-index: 99999999999999;
    font-size: 12px;
    line-height: 30px;
    color: #aaa;
    > div {
      > li:hover {
        span {
          color: #2589ff !important;
        }
        .childrenItem {
          > li:hover {
            color: #2589ff !important;
          }
        }
      }
    }
  }
}

.parent:hover {
  .children {
    display: block;
  }
}

.home {
  width: 100%;
  display: flex;
  background: #fafafa;
  .left {
    // width: 120px;
    height: 100%;
    background: #1e222d;
    color: #fff;
  }
  .right {
    display: flex;
    flex-direction: column;
    flex: 1;

    .content {
      // flex: 1;
      display: flex;
      box-sizing: border-box;
      padding: 20px;
      overflow: auto;
      .box {
        // min-width: 200px;
        max-width: 200px;
        margin-left: 10px;
        height: auto !important;
        box-sizing: border-box;
        margin-top: 0 !important;
      }
    }
  }
}

.service {
  width: 100%;
  .titleBannet {
    width: 1190px;
    height: 80px;
    background: #fff;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 50px;
    > div {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(165, 165, 165, 1);
      line-height: 26px;
      cursor: pointer;
    }
  }

  .grid {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 200px;
      background: #fff;
      box-sizing: border-box;
      padding: 20px;
      height: auto;
      > p {
        font-size: 24px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 26px;
        margin: 70px 0 0 0;
      }
      .tip {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        border-bottom: solid 1px rgba(241, 241, 241, 1);
        margin-bottom: 10px;
        > span {
          margin-right: 20px;
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(195, 171, 135, 1);
          line-height: 40px;
        }
      }
      .list {
        > p {
          font-size: 16px;
          font-family: PingFang SC;
          font-weight: 400;
          color: rgba(165, 165, 165, 1);
          line-height: 60px;
        }
        > ul {
          flex-wrap: wrap;
          > li {
            width: 100%;
            font-size: 13px;
            font-family: PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            line-height: 26px;
            margin-right: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss">
.el-popover {
  height: 700px !important;
  overflow: auto;
}
</style>