<template>
  <div class="role bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">员工管理-员工列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">
            <el-button size="mini"
                       class="mr ml">批量导出</el-button>
          </div>
          <div>
            <el-input placeholder="请输入关键字"
                      style="width: 300px; margin: 0"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml">
              <el-select v-model="sleValue"
                         style="width: 100px"
                         slot="prepend"
                         placeholder="请选择">
                <el-option label="员工姓名"
                           value="1"></el-option>
                <el-option label="手机号"
                           value="2"></el-option>
              </el-select>
              <el-button slot="append"
                         size="mini"
                         icon="el-icon-search"></el-button>
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
                           label="员工姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="部门">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="手机号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="邮箱">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="性别">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="门店">
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
  name: 'role',
  data () {
    return {
      value: true,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      date: '1',
      search: '',
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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