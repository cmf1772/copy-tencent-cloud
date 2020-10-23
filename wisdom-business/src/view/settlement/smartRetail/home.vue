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
             class="text blueColor s">智慧零售</div>
        <ul>
          <li v-for="(item, index) in topNav"
              :key="index">
            {{item.text}}
          </li>
          <el-dropdown>
            <i class="el-icon-s-operation"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>切换店铺</el-dropdown-item>
              <el-dropdown-item>账号信息</el-dropdown-item>
              <el-dropdown-item>帮助中心</el-dropdown-item>
              <el-dropdown-item>返回旧版</el-dropdown-item>
              <el-dropdown-item>退出账号</el-dropdown-item>
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
      help: true
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
</style>