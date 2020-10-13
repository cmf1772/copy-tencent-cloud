<template>
  <div class="performanceDetails bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">线下支付</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <el-button size="mini"
                   class="mr">添加自定义收款</el-button>

      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="收款方式名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="适用场景">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="状态">
            <template slot-scope="scope">
              <el-switch v-model="vale"
                         active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="150"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20">编辑</el-button>
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
  name: 'performanceDetails',
  data () {
    return {
      vale: true,
      tableData: [{
        name: '货到付款（货到付款）',
        address: '网店-商家配送'
      }],
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