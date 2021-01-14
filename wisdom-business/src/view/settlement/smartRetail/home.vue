<template>
  <div class="home"
       :style="{'height': height}">
    <div class="left">
      <leftMenu :menuData="menuData"></leftMenu>
    </div>
    <div class="right">
      <div class="top">
        <div style=" float: left"
             @click="$router.push('/home/product')"
             class="text blueColor s">美城智慧零售</div>

        <el-popover placement="bottom"
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
        </el-popover>
        <ul>
          <li v-for="(item, index) in topNav"
              :key="index">
            {{item.text}}
          </li>
          <el-dropdown @command="command">
            <i class="el-icon-s-operation"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">切换店铺</el-dropdown-item>
              <el-dropdown-item command="b">账号信息</el-dropdown-item>
              <el-dropdown-item command="c">帮助中心</el-dropdown-item>
              <el-dropdown-item command="e">返回旧版</el-dropdown-item>
              <el-dropdown-item command="d">退出账号</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </ul>
      </div>
      <div class="content"
           :style="{'height': contentHeight}">
        <router-view style="flex: 1; margin: 0"
                     class="bs"></router-view>
        <help v-if="help"></help>
      </div>
    </div>
  </div>
</template>

<script>
import menu from '@/router/menu'
export default {
  name: 'home',
  data () {
    return {
      topNav: [{
        text: '套餐升级'
      }, {
        text: '客服消息'
      }, {
        text: '系统通知'
      }, {
        text: '帮助指引'
      }],
      height: window.innerHeight + 'px',
      menuData: [],
      contentHeight: window.innerHeight + 'px',
      help: true,
    }
  },

  methods: {
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
        '/orderFlow'
      ]
      // this.help = !routerArray.indexOf(this.$route.path) > -1
      this.help = routerArray.indexOf(this.$route.path) > -1 ? false : true
    },

    command (command) {
      switch (command) {
        case 'a':
          this.$router.push('/settlement/switchProject')
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
    this.menuData = menu[0].children
    this.showHelp()
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  background: #fafafa;
  .left {
    width: 120px;
    height: 100%;
    background: #22242f;
    color: #fff;
  }
  .right {
    display: flex;
    flex-direction: column;
    flex: 1;
    .top {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      line-height: 50px;
      -webkit-box-shadow: 0 2px 20px 0 rgba(15, 12, 70, 0.1);
      box-shadow: 0 2px 20px 0 rgba(15, 12, 70, 0.1);
      padding: 0 20px;
      ul {
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
          padding: 0 10px;
        }
        li:hover {
          color: #2589ff;
        }
      }
    }
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