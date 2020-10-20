<template>
  <div class="commodityAttributes bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">商品属性</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box mt">
        <el-button type="primary"
                   size="mini"
                   plain>新增属性</el-button>
        <p class="minText mt">商品属性将补充至商品信息中，商家需在编辑商品时选择对应的属性值，可用于手机端的筛选。最多支持10个属性。</p>

      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="属性名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="价格筛选支持模块">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="排序">
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
  name: 'commodityAttributes',
  data () {
    return {
      state: [{
        value: '1',
        label: '更多'
      }, {
        value: '2',
        label: '批量修改标签'
      }, {
        value: '3',
        label: '修改配送方式'
      }, {
        value: '4',
        label: '修改商品排序'
      }, {
        value: '5',
        label: '修改商详模板'
      }, {
        value: '6',
        label: '批量修改商品信息'
      }, {
        value: '7',
        label: '批量修改规格信息'
      }, {
        value: '8',
        label: '批量设置权益价'
      }, {
        value: '9',
        label: '商品导入'
      }, {
        value: '10',
        label: '批量修改档案模版'
      }, {
        value: '11',
        label: '删除商品'
      }, {
        value: '12',
        label: '分配/取消分配门店'
      }, {
        value: '14',
        label: '修改预售数量'
      }, {
        value: '15',
        label: '修改预售数量'
      }, {
        value: '16',
        label: '修改预售数量'
      }],
      label: [{
        value: '1',
        label: '页面标签'
      }, {
        value: '2',
        label: '全部标签'
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
.commodityAttributes {
  width: 100%;
  height: 100%;
  .conent_box {
    background: #f2f2f6 !important;
    border-radius: 5px !important;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
    margin-top: 10px;
  }
}
</style>