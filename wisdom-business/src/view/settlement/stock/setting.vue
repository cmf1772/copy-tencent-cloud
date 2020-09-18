<template>
  <div class="shippingIn bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">供应商</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <el-button size="mini"
                     type="primary"
                     plain>新增供应商</el-button>
          <el-input placeholder="请输入内容"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-select v-model="sleValue"
                       style="width: 120px"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="供应商名称"
                         value="1"></el-option>
              <el-option label="联系人"
                         value="2"></el-option>
              <el-option label="联系电话"
                         value="3"></el-option>
              <el-option label="编号"
                         value="4"></el-option>
            </el-select>
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
                           label="编号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="供应商名称">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="单位电话">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="联系人">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="联系电话">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="状态">
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
  name: 'shippingIn',
  data () {
    return {
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