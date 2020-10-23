<template>
  <div class="shop bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">门店标签</p>
    </div>
    <div class="conent_box flexColumn"
         style="height: 100%">
      <div class="flexColumn"
           style="flex: 1">
        <div class="c_box flexJC">
          <div class="flex">
            <el-button size="mini">新增区域</el-button>
            <el-button size="mini">批量删除</el-button>
          </div>
          <el-input placeholder="请输入内容"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">

            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <div class="table"
             style="flex: 1">
          <el-table :data="tableData"
                    stripe
                    style="width: 100%">
            <el-table-column prop="name"
                             show-overflow-tooltip
                             label="序号"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="区域名称">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="区域门店数量">
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

        <div class="btootm_paination c_box mt">
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
  </div>
</template>

<script>
export default {
  name: 'store',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

