<template>
  <div class="performanceDetails bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">交班记录 <span class="minText">上班时长超过7天，将自动交班</span></p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <p class="minText mr">下班时间</p>
            <el-date-picker v-model="value1"
                            size="mini"
                            class="mr"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
            <el-select v-model="shopValue"
                       style="width: 130px"
                       size="mini"
                       class="mr"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="全部门店"
                         value="1"></el-option>
              <el-option label="智慧零售"
                         value="2"></el-option>
            </el-select>
          </div>
          <el-input placeholder="请输入收银员姓名"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="flexRC mt">
          <el-button size="mini">记录导出</el-button>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="收银员"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="门店名称">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="收款总额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="退款总额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交接班时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box">
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
  name: 'performanceDetails',
  data () {
    return {
      pValue: '1',
      value1: '',
      state: [{
        value: '1',
        label: '单品分类'
      }, {
        value: '2',
        label: '未分类'
      }],
      stateValue: '1',
      sleValue: '1',
      search: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      shopValue: '1',
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