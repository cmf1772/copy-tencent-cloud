<template>
  <div class="tagsManage flexColumn">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="用户管理"
                   name="first">自动标签</el-tab-pane>
      <el-tab-pane label="配置管理"
                   name="second">手动标签</el-tab-pane>
    </el-tabs>
    <div class="conent_box flexColumn"
         style="flex:1">
      <div class="c_box">
        <el-button type="primary"
                   size="mini"
                   plain>新建自动标签</el-button>
        <el-input placeholder="请输入内容"
                  style="width: 300px"
                  size="mini"
                  v-model="search"
                  class="input-with-select">
          <el-button slot="append"
                     size="mini"
                     icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="c_box">
        <p class="minText">系统推荐标签注：每天5:00系统更新数据</p>
        <div class="flexRC mt">
          <div class="flexColumn box"
               v-for="i in 3">
            <p class="text ml mt">导入/手动新增的会员</p>
            <p class="minText mt mb ml">符合条件用户数：0人</p>
            <p class="minText mb ml">数据更新时间：--</p>
            <p class="minText ml">标签创建时间：2020-10-22 01:26:25</p>
            <div class="buttons flex box2"
                 style="border-top: solid 1px rgb(221, 220, 226); margin-top: 20px">
              <p style="width: 50%;"
                 class="minText s">手动更新</p>
              <p style="width: 50%"
                 class="minText s">标签详情</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flexC minText c_box"
           style="flex: 1">
        暂无数据
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tagsManage'
}
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  border: 1px solid rgb(221, 220, 226);
  border-radius: 10px;
  margin-left: 20px;
  // padding: 20px;
  .box2 {
    padding: 10px 0;
    > p {
      text-align: center;
    }
  }
}
</style>