<template>
  <div class="educlass bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">班级管理</p>
    </div>
    <el-button type="primary"
               style="width: 100px"
               class="mt"
               size="mini"
               plain>新建班级</el-button>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <p class="minText mr ">班级名称：</p>
            <el-input placeholder=""
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">所属课程：</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
            </el-select>
          </div>
          <div class="flexRC">
            <p class="minText mr ">班级状态：</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="待开班"
                         value="2">
              </el-option>
              <el-option label="开班中"
                         value="3">
              </el-option>
              <el-option label="已结班"
                         value="4">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="flexRC mt">

          <el-button type="primary"
                     class="mr"
                     size="mini"
                     plain>筛选</el-button>

          <p class="minText blueColor s ml ">清空筛选条件</p>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="班级名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="所属课程">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="人数/上限">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="已上/排课次数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="开班时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="结班时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="班级状态">
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