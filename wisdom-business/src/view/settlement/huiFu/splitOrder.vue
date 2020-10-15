<template>
  <div class="splitOrder bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">分账管理</p>
      <p class="minText"
         style="color: #2589ff;">分账设置</p>
    </div>
    <p class="minText mt mb">页面展示商户所有需要分账的订单，商户使用微客、社区团购、多仓分账、直播(供货模式收款) 、分销市场等业务均需分账。</p>
    <p class="minText">分账可能存在单业务超额或多业务叠加超额的情况，系统默认需要商家手动确认超额分账，可在分账设置中修改为系统自动确认。超额分账场景描述及设置建议详见<span style="color: #2589ff;">使用指南</span></p>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div>
            <el-button size="mini">导出列表</el-button>
            <el-select v-model="stateValue"
                       class="ml mr"
                       style="width: 120px; margin-left: 0"
                       size="mini"
                       clearable
                       placeholder="请选择">
              <el-option label=创建时间
                         value="1"></el-option>
              <el-option label=更新时间
                         value="2"></el-option>
            </el-select>
            <el-select v-model="stateValue"
                       class="ml mr"
                       style="width: 120px; margin-left: 0"
                       size="mini"
                       clearable
                       placeholder="请选择">
              <el-option label=全部门店
                         value="1"></el-option>
              <el-option label=智慧零售
                         value="2"></el-option>
            </el-select>
            <el-select v-model="stateValue"
                       class="ml mr"
                       style="width: 120px; margin-left: 0"
                       size="mini"
                       clearable
                       placeholder="请选择">
              <el-option label=全部状态
                         value="1"></el-option>
              <el-option label=已超额
                         value="2"></el-option>
              <el-option label=未超额
                         value="3"></el-option>
            </el-select>
          </div>

          <el-input placeholder="请输入内容"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="flex mt">
          <el-select v-model="stateValue"
                     class=" mr"
                     style="width: 120px; margin-left: 0"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="全部状态"
                       value="1"></el-option>
            <el-option label="待确定"
                       value="2"></el-option>
            <el-option label="自动确定"
                       value="3"></el-option>
            <el-option label="手动确定"
                       value="4"></el-option>
          </el-select>
          <el-select v-model="stateValue"
                     class=" mr"
                     style="width: 120px; margin-left: 0"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="明细"
                       value="1"></el-option>
            <el-option label="未入账"
                       value="2"></el-option>
            <el-option label="已入账"
                       value="3"></el-option>
          </el-select>
        </div>
      </div>

      <div class="table flexJC">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="订单编号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="销售门店">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单实收">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="需要分出金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="分账单创建时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="更新时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="超额状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="确认状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="明细状态">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="look(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="edit(scope.$index, scope.row)">投放</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">分配门店</el-button>
                <!-- <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button> -->
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box">
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
  name: 'splitOrder',
  data () {
    return {
      stateValue: '1',
      label: [{
        value: '1',
        label: '页面标签'
      }, {
        value: '2',
        label: '全部标签'
      }],
      labelValue: '1',
      stateValue: '1',
      sleValue: '1',
      search: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

  methods: {
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>

<style lang="scss" scoped>
</style>