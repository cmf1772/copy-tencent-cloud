<template>
  <div class="manageList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">门店列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <el-select v-model="stateValue"
                       class="ml mr"
                       style="width: 100px"
                       size="mini"
                       clearable
                       placeholder="请选择">
              <el-option v-for="item in state"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
            <el-button size="mini">清空城市筛选</el-button>
            <el-select v-model="labelValue"
                       class="ml mr"
                       style="width: 100px"
                       size="mini"
                       clearable
                       placeholder="请选择">
              <el-option label="门店状态"
                         value="1">
              </el-option>
              <el-option label="停用"
                         value="2">
              </el-option>
              <el-option label="启用"
                         value="3">
              </el-option>
            </el-select>
          </div>
          <el-input placeholder="请输入门店名称"
                    style="width: 200px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="门店名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="分店名称">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="门店地址">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="门店状态">
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
  name: 'manageList',
  data () {
    return {
      state: [{
        value: '1',
        label: '全部状态'
      }, {
        value: '2',
        label: '已发布'
      }, {
        value: '3',
        label: '定时发布'
      }, {
        value: '4',
        label: '未发布'
      }],
      label: [{
        value: '1',
        label: '页面标签'
      }, {
        value: '2',
        label: '全部标签'
      }],
      labelValue: '1',
      stateValue: '1',
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
.manageList {
  width: 100%;
  height: 100%;
}
</style>