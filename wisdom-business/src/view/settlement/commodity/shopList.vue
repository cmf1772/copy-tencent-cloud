<template>
  <div class="shopList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">页面列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <el-input placeholder="请输入内容"
                    style="width: 300px; margin: 0"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-select v-model="sleValue"
                       style="width: 100px"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="商品名称"
                         value="1"></el-option>
              <el-option label="SPU编码"
                         value="2"></el-option>
              <el-option label="商家编码"
                         value="3"></el-option>
              <el-option label="SKU条码"
                         value="4"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>

          <el-button size="mini"
                     type="primary"
                     plain>高级筛选</el-button>
        </div>

        <div class="flexRC mt">
          <p class="minText">商品标签</p>
          <div class="button ml mr">不限</div>
          <el-button size="mini">添加标签</el-button>
        </div>

        <el-divider></el-divider>
        <div class="flex mt">
          <p class="minText mr">快捷操作</p>
          <el-button size="mini">新增商品</el-button>
          <el-button size="mini">批量可售</el-button>
          <el-button size="mini">批量禁止</el-button>
          <el-button size="mini">修改分组</el-button>
          <el-button size="mini">导出</el-button>
          <el-button size="mini">删除</el-button>
          <el-select v-model="stateValue"
                     class="ml"
                     style="width: 100px;"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option v-for="item in state"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="商品名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="价格">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="实际销售">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="销售渠道">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="创建时间">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="可售状态">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="价格">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="价格">
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
  name: 'shopList',
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
.shopList {
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