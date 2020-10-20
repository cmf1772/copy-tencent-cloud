<template>
  <div class="inReceipt bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">入库单</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexJC ">
          <div class="flexRC">
            <p class="minText mr">创建时间：</p>
            <el-date-picker v-model="value1"
                            size="mini"
                            style="width: 250px"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <el-input placeholder="请输入内容"
                    style="width: 300px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-select v-model="sleValue"
                       style="width: 100px"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="入库单号"
                         value="1"></el-option>
              <el-option label="关联业务单号"
                         value="2"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>

        <div class="flexRC mt">
          <el-select v-model="shopValue"
                     style="width: 130px"
                     size="mini"
                     class="mr"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="供应商名称"
                       value="1"></el-option>
          </el-select>
          <el-select v-model="type"
                     class="mr"
                     style="width: 100px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="入库类型"
                       value="1"></el-option>
            <el-option label="采购入库"
                       value="2"></el-option>
            <el-option label="退货入库"
                       value="3"></el-option>
            <el-option label="调拨入库"
                       value="4"></el-option>
            <el-option label="盘盈入库"
                       value="5"></el-option>
            <el-option label="其他"
                       value="6"></el-option>
          </el-select>

        </div>

        <div class="mt">
          <el-select v-model="pValue"
                     class="mr"
                     style="width: 100px"
                     size="mini"
                     slot="prepend"
                     placeholder="请选择">
            <el-option label="经办人"
                       value="1"></el-option>
            <el-option label="陈美峰"
                       value="2"></el-option>
          </el-select>
        </div>
        <div class="flex mt">
          <el-button size="mini">调拨入库</el-button>
          <el-button size="mini">采购入库</el-button>
          <el-button size="mini">退货入库</el-button>
          <el-button size="mini">其他入库</el-button>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="入库单号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="入库类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="入库时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="备注">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="关联业务单号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="经办人">
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
  name: 'inReceipt',
  data () {
    return {
      value1: '',
      shopValue: '1',
      pValue: '1',
      type: '1',
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