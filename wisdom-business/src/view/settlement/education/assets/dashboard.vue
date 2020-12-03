<template>
  <div class="dashboard">
    <div class="conent_box flexColumn"
         style="height: 100%">
      <div class="flexRC"
           style="height: 440px">
        <div class="flexColumn"
             style="flex: 1; margin-right: 10px; background: #fff; height: 100%">
          <div style="height: 240px;border-bottom: solid 1px #ccc; padding-left: 20px">
            <p class="text"
               style="font-size: 18px; margin-top: 20px">账户概览</p>
            <p class="text"
               style="margin-top: 30px">可用店铺余额（元）
              <el-popover placement="top-start"
                          width="200"
                          trigger="hover"
                          content="订单结算完成的入账金额（含充值成功、保证金退保成功等资金），可用于商家日常经营收支、插件购买等核心经营场景">
                <i class="el-icon-question"
                   slot="reference"></i>
              </el-popover>
            </p>
            <p class="text"
               style="font-size: 18px; margin-top:10px;color: #000">0.00</p>
            <div class="flexRC"
                 style="margin-top: 40px">
              <el-button type="primary"
                         plain
                         size="mini">充值</el-button>
              <el-button type="primary"
                         plain
                         size="mini">提现</el-button>
              <el-button type="primary"
                         plain
                         size="mini">转账</el-button>
            </div>
          </div>
          <div style="flex:1; padding-left: 20px">
            <p class="text"
               style="margin-top: 30px">可用店铺余额（元）
              <el-popover placement="top-start"
                          width="200"
                          trigger="hover"
                          content="订单结算完成的入账金额（含充值成功、保证金退保成功等资金），可用于商家日常经营收支、插件购买等核心经营场景">
                <i class="el-icon-question"
                   slot="reference"></i>
              </el-popover>
            </p>
            <p class="text"
               style="font-size: 18px; margin-top:10px;color: #000">0.00</p>
          </div>
        </div>
        <div style="width: 250px;height: 100%; background: #fff"
             class="flexColumn">
          <div style="height: 240px;border-bottom: solid 1px #ccc; padding-left: 20px">
            <p class="text"
               style="font-size: 18px; margin-top: 20px">账户信息</p>
            <p class="text"
               style="margin-top: 30px">
              商户名：
              - <span class="blueColor s">去认证</span>
            </p>
            <p class="text"
               style=" margin-top:10px">银行卡：
              0张 <span class="blueColor s">去添加</span></p>
          </div>
          <div class="flexRC">
            <div style="width: 33.3%;text-align: center;margin: 10px 0">
              <img src="@/assets/img/app.png"
                   style="width: 60%"
                   alt="">
              <p class="minText">认证信息</p>
            </div>
            <div style="width: 33.3%;text-align: center;margin: 10px 0">
              <img src="@/assets/img/app.png"
                   style="width: 60%"
                   alt="">
              <p class="minText">认证信息</p>
            </div>
            <div style="width: 33.3%;text-align: center;margin: 10px 0">
              <img src="@/assets/img/app.png"
                   style="width: 60%"
                   alt="">
              <p class="minText">认证信息</p>
            </div>
            <div style="width: 33.3%;text-align: center;margin: 10px 0">
              <img src="@/assets/img/app.png"
                   style="width: 60%"
                   alt="">
              <p class="minText">认证信息</p>
            </div>
          </div>
        </div>
      </div>
      <div class="c_box flexColumn"
           style="flex: 1; margin-top: 10px">
        <div class="flexJC">
          <div class="text">
            收支概况
            <el-button size="mini">今日</el-button>
            <el-button type="primary"
                       size="mini">昨日</el-button>
          </div>
          <div class="text s blueColor">
            查看更多
          </div>
        </div>
        <div class="table"
             style="flex: 1">
          <el-table :data="tableData"
                    :style="{'width': width + 'px'}">
            <el-table-column prop="name"
                             fixed
                             show-overflow-tooltip
                             label="账户"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltips
                             label="收入">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="支出">
            </el-table-column>
          </el-table>
        </div>
        <div class="btootm_paination c_box mt">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChangeFun"
                         :current-page="currentPage"
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<style lang="scss" scoped>
</style>
