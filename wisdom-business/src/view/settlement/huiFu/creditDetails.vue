<template>
  <div class="shoppingManagement bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">积分明细</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">
            <p class="minText mr">交易时间</p>
            <el-date-picker v-model="value1"
                            size="mini"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </div>

          <el-input placeholder="请输入内容"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-select v-model="sleValue"
                       style="width: 100px"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="手机号"
                         value="1"></el-option>
              <el-option label="客户编号"
                         value="2"></el-option>
              <el-option label="会员卡号"
                         value="3"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini">导出报表</el-button>
          </el-input>

        </div>
        <div class="flexRC mt">
          <p class="minText mr">交易类型</p>
          <div class="item flexRC">
            <div v-for="(item, index) in 7"
                 @click="active(index)"
                 :class="index !== acIndex ? 'minText box' : 'minText acbox'">
              不限
            </div>
          </div>
        </div>
      </div>

      <div class="table">

        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="变更时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="客户编号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交易类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="变动积分">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="剩余积分">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="变更门店">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="备注">
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
  name: 'shoppingManagement',
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
.box {
  display: inline-block;
  width: 90px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  border: 1px solid #ededed;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
}

.acbox {
  width: 90px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  border: 1px solid #2589ff;
  margin-right: 10px;
  cursor: pointer;
  color: #2589ff;
  text-align: center;
}
</style>