<template>
  <div class="communityGroup bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">奖励明细</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">
            <el-button slot="append"
                       size="mini">导出报表</el-button>
            <p class="minText mr ml">交易时间</p>
            <el-date-picker v-model="value1"
                            size="mini"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
            <el-select v-model="sleValue"
                       style="width: 130px"
                       size="mini"
                       class="mr ml"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="全部状态"
                         value="1"></el-option>
              <el-option label="未入账"
                         value="2"></el-option>
              <el-option label="已入账"
                         value="3"></el-option>
            </el-select>
          </div>

          <div class="flexRC">
            <el-input placeholder="请输入内容"
                      style="width: 300px"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml">
              <el-select v-model="sleValue"
                         style="width: 100px"
                         slot="prepend"
                         placeholder="请选择">
                <el-option label="订单编号"
                           value="1"></el-option>
                <el-option label="团长姓名"
                           value="2"></el-option>
                <el-option label="团长手机号"
                           value="3"></el-option>
              </el-select>

              <el-button slot="append"
                         size="mini">搜索</el-button>
            </el-input>
          </div>

        </div>
      </div>

      <div class="table">

        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="支付时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="团长信息">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="分账金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="退款返还">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="团长奖励">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="更新时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
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
  name: 'communityGroup',
  data () {
    return {
      acIndex: 0,
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
    active (index) {
      this.acIndex = index
    },
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