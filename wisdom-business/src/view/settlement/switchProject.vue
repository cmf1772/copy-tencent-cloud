<template>
  <div class="switchProject flexColumn">
    <div class="title">
      <div class="list flexJC">
        <el-tabs v-model="activeName"
                 @tab-click="handleClick">
          <el-tab-pane label="全部"
                       name="first"></el-tab-pane>
          <el-tab-pane label="电商零售"
                       name="second"></el-tab-pane>
          <el-tab-pane label="餐饮外卖"
                       name="third"></el-tab-pane>
          <el-tab-pane label="本地生活"
                       name="fourth"></el-tab-pane>
          <el-tab-pane label="营销推广"
                       name="s"></el-tab-pane>
        </el-tabs>
        <el-dropdown>
          <i class="el-icon-s-operation s"
             style="font-size: 20px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>账号信息</el-dropdown-item>
            <el-dropdown-item>返回旧版</el-dropdown-item>
            <el-dropdown-item>退出账号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="content">
      <div class="itemALL">
        <p class="titleText">电商零售 <span>E-commence&Retail</span></p>
        <div class="flexRC">
          <div class="item">
            <div style="font-size: 18px;margin: 20px 0 0 15px">智慧零售</div>
            <div style="font-size: 12px;color: #81828a;height: 40px;margin-top: 6px;font-weight: 200;margin-left: 15px">赋能线下门店，重构消费连接</div>
            <div class="buttoms flexJC s"
                 @click="$router.push('/survey')">
              <p>立即创建</p>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div class="itemALL">
        <p class="titleText">餐饮外卖 <span>Restaurant&Takeaway</span></p>
        <div class="flexRC">
          <div class="item">
            <div style="font-size: 18px;margin: 20px 0 0 15px">智慧餐厅</div>
            <div style="font-size: 12px;color: #81828a;height: 40px;margin-top: 6px;font-weight: 200;margin-left: 15px">餐饮新零售，堂食外卖电商全覆盖</div>
            <div class="buttoms flexJC s"
                 @click="$router.push('/r_survey')">
              <p>立即创建</p>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'switchProject',
  data () {
    return {
      activeName: 'first'
    }
  },

  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss">
.el-tabs__nav-wrap::after {
  background-color: #fff !important;
}
</style>

<style lang="scss" scoped>
.switchProject {
  width: 100%;
  height: 100%;
  background: #fafafa;

  .title {
    width: 100%;
    height: 50px;
    -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    .list {
      width: 1200px;
      height: 100%;
      margin: 0 auto;
      align-items: center;
    }
  }

  .content {
    width: 1200px;
    margin: 0 auto;
    flex: 1;
    .titleText {
      font-size: 18px;
      color: #1b1c26;
      margin-top: 40px;
      font-weight: 700;
      > span {
        color: #ced1d6;
      }
    }
    .item {
      width: 280px;
      border-radius: 10px;
      font-size: 22px;
      color: #595961;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      transition: all 0.3s;
      background-color: #fff;
      border-radius: 10px;
      -webkit-box-shadow: 0 5px 10px 0 rgba(2, 31, 65, 0.05);
      box-shadow: 0 5px 10px 0 rgba(2, 31, 65, 0.05);
      margin-top: 20px;
      margin-left: 20px;
      .buttoms {
        box-sizing: border-box;
        padding: 0 15px;
        width: 100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-sizing: border-box;
        height: 44px;
        color: #b4b6bd;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        font-size: 14px;
        font-weight: 400;
        align-items: center;
      }
    }
    .item:hover {
      .buttoms {
        background: #2589ff;
        color: #fff;
      }
    }
  }
}
</style>
