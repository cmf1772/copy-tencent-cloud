<template>
  <div class="theRaskList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">财务明细</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div>
            <el-select v-model="sleValue"
                       style="width: 100px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="商品"
                         value="1"></el-option>
              <el-option label="库存"
                         value="2"></el-option>
              <el-option label="客户"
                         value="3"></el-option>
              <el-option label="导购"
                         value="4"></el-option>
            </el-select>
            <el-select v-model="sleValue"
                       style="width: 100px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="批量商品分配至门店"
                         value="1"></el-option>
            </el-select>
            <el-select v-model="sleValue"
                       style="width: 100px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="待处理"
                         value="1"></el-option>
              <el-option label="处理中"
                         value="2"></el-option>
              <el-option label="已完成"
                         value="3"></el-option>
            </el-select>
            <el-date-picker v-model="value1"
                            size="mini"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="flex">
            <el-input placeholder="操作账号"
                      style="width: 300px; margin: 0"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml">
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
                           label="任务类型"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="所属业务">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="任务状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="任务结果">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="任务创建时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作账号">
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
  name: 'theRaskList',
  data () {
    return {
      type: true,
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