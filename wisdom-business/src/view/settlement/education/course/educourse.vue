<template>
  <div class="educourse flexColumn">
    <p class="text">课程管理</p>
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="课程"
                   name="first"></el-tab-pane>
      <el-tab-pane label="线下课"
                   name="second"></el-tab-pane>
    </el-tabs>
    <div class="conent_box flexColumn"
         style="flex: 1">
      <div class="c_box flexJC">
        <div class="flexRC">
          <el-button size="mini"
                     class="mr">新建课程</el-button>
        </div>
        <div class="flexRC">
          <el-input placeholder="请输入关键字"
                    style="width: 300px; margin: 0"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml mr">
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
                           label="课程名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="适用年龄">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="开班数">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关联线上售卖">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="创建时间">
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
  name: 'educourse',
  data () {
    return {
      activeName: 'first',
      search: '',
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
