<template>
  <div class="refund bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">退课记录</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexRC">
          <p class="minText mr ">退课时间：</p>
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
        </div>
        <div class="flexJC mt">
          <div class="flexRC">
            <p class="minText mr ">学员：</p>
            <el-input placeholder="请输入订单编号"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">线下课名称：</p>
            <el-input placeholder="请输入订单编号"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">课程顾问：</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="请选择">
              <el-option label="全部"
                         value="1">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="mt flexRC">
          <p class="minText mr ">经办人：</p>
          <el-select v-model="search"
                     clearable
                     class="mr ml"
                     size="mini"
                     placeholder="请选择">
            <el-option label="全部"
                       value="1">
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="删除时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="删除人">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="删除原因">
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
  name: 'refund',
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

    handleChange (value) {
      console.log(value);
    },

    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>