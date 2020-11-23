<template>
  <div class="restMoneyManageList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">线下课评价</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexRC">
          <div class="flexRC">
            <el-date-picker v-model="value1"
                            style="width: 320px"
                            size="mini"
                            class="mr"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
            </el-date-picker>
            <el-input placeholder="请输入课程名称"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
            <el-input placeholder="请输入线下课名称"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
            <el-input placeholder="请输入订单编号"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
            <el-select v-model="search"
                       clearable
                       class="mr mt"
                       size="mini"
                       placeholder="请选择评价星级">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="一星"
                         value="2">
              </el-option>
              <el-option label="二星"
                         value="3">
              </el-option>
              <el-option label="三星"
                         value="4">
              </el-option>
              <el-option label="四星"
                         value="5">
              </el-option>
              <el-option label="五星"
                         value="6">
              </el-option>
            </el-select>
            <el-button size="mini"
                       class="mr ml mt">筛选</el-button>
            <el-button size="mini"
                       class="mr ml mt">重置筛选条件</el-button>
          </div>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="评价内容"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="评价星级">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="评价时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="评价人">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="学员">
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
  name: 'restMoneyManageList',
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