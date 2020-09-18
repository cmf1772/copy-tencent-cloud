<template>
  <div class="storeInventory bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">门店库存</p>

    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <el-select v-model="stateValue"
                     class="ml mr"
                     style="width: 100px; margin-left: 0"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option v-for="item in state"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <el-input placeholder="请输入内容"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-select v-model="sleValue"
                       style="width: 100px"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="单品名称"
                         value="1"></el-option>
              <el-option label="单品条码"
                         value="2"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="flex mt">
          <el-button size="mini">导出</el-button>
          <el-button size="mini">导入成本</el-button>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="单品名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="单品规格">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="单位">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="实物库存">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="占用库存">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="可用库存">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="成本">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="270"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="look(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="edit(scope.$index, scope.row)">投放</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">分配门店</el-button>
                <!-- <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button> -->
              </div>
            </template>
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
  name: 'storeInventory',
  data () {
    return {
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