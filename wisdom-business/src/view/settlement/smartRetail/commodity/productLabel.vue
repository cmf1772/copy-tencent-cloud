<template>
  <div class="productLabel bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">页面列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div>
            <el-button size="mini">新增标签</el-button>
            <el-button size="mini">批量删除</el-button>
          </div>
          <el-input placeholder="请输入内容"
                    style="width: 200px; margin: 0"
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
                           label="标签名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="标签绑定商品数">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
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
                           @click="edit(scope.$index, scope.row)">删除</el-button>
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
  name: 'productLabel',
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
        value: '13',
        label: '修改预售数量'
      }, {
        value: '13',
        label: '修改预售数量'
      }, {
        value: '13',
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
.productLabel {
  width: 100%;
  height: 100%;
  .conent_box {
    background: #f2f2f6 !important;
    border-radius: 5px !important;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
    margin-top: 10px;
  }

  .button {
    background: #d3e7ff !important;
    color: #2589ff !important;
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
    font-size: 12px;
  }
}
</style>