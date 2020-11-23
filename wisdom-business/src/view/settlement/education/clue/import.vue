<template>
  <div class="import bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">线索导入</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexRC">
          <div class="flexRC">
            <el-button size="mini"
                       class="mr">批量导入线索</el-button>
          </div>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="导入时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="预期导入数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="实际导入数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作人">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="导入状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="说明">
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
  name: 'import',
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