<template>
  <div class="userList flexColumn">
    <p class="text">
      用户列表
    </p>

    <div class="conent_box flexColumn"
         style="flex: 1;">
      <div class="c_box">
        <div class="flexRC">
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
        <div class="flexRC mt">
          <p class="minText">是否关注</p>
          <el-radio v-model="radio"
                    class="ml"
                    label="1">是</el-radio>
          <el-radio v-model="radio"
                    label="2">否</el-radio>
          <p class="minText ml"
             style="color: #ccc">当是否关注为不限或否时，忽略关注时间和关注门店条件</p>
        </div>
        <div class="flexRC mt">
          <p class="minText">是否领卡</p>
          <el-radio v-model="radio"
                    class="ml"
                    label="1">是</el-radio>
          <el-radio v-model="radio"
                    label="2">否</el-radio>
          <p class="minText ml"
             style="color: #ccc">当是否领卡为不限或否时，忽略领卡时间、领卡门店和领卡渠道条件</p>
        </div>
        <div class="flexJC mt">
          <div class="flexRC minText">
            本次为您查询到 <span class="yellowColor">0</span> 个用户（总用户数：0，其中会员数：0）
          </div>
          <div>
            <el-button size="mini">权限设置</el-button>
            <el-button size="mini">新增会员</el-button>
            <el-button size="mini">导入会员</el-button>
            <el-button size="mini">导出用户数据</el-button>
          </div>
        </div>
      </div>
      <div class="table"
           style="flex: 1">
        <el-table :data="tableData">
          <el-table-column prop="name"
                           fixed
                           show-overflow-tooltip
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltips
                           label="昵称">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="等级">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="手机号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="会员卡号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="可用余额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="可用积分">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="可用门店储值卡">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box mt">
        <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
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
</template>

<script>
export default {
  name: 'userList',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
