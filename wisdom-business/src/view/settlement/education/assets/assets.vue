<template>
  <div class="educlass bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">对账单</p>
    </div>
    <el-button type="primary"
               style="width: 100px"
               class="mt"
               size="mini"
               plain>新建班级</el-button>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="bg_color minText"
           style="padding:10px; color:#000">
        <p class="mb">新版资产提供自2018年5月1日起的账单汇总数据。</p>
        <p class="mb">对账单统计日期以账单明细中入账时间为准，如需下单时间维度的汇总，可在账单明细下载相应报表进行汇总。</p>
        <p class="mb">日汇总账单在次日6时生成，月汇总账单在次月首日6时生成。如遇特殊情况，则可能产生延迟生成情况，请谅解。</p>
      </div>
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <p class="minText mr ">缴纳时间:</p>
            <el-date-picker v-model="value1"
                            style="width: 300px"
                            size="mini"
                            class="mr"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
            </el-date-picker>
          </div>
          <div class="flexRC">
            <p class="minText mr ">保证金类型:</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="">
              <el-option label="营销资金"
                         value="1">
              </el-option>
              <el-option label="店铺余额"
                         value="2">
              </el-option>
              <el-option label="保证金"
                         value="3">
              </el-option>
              <el-option label="广告投放金"
                         value="4">
              </el-option>
              <el-option label="跨境资金"
                         value="5">
              </el-option>
              <el-option label="标记资金"
                         value="6">
              </el-option>
              <el-option label="店铺收益"
                         value="7">
              </el-option>
              <el-option label="储值资金"
                         value="8">
              </el-option>
              <el-option label="现金"
                         value="9">
              </el-option>
              <el-option label="礼品卡资金"
                         value="10">
              </el-option>
            </el-select>
          </div>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="账户">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="收入（元）">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="支出（元）">
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
  name: 'educlass',
  data () {
    return {
      value: true,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      date: '1',
      search: '',
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
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