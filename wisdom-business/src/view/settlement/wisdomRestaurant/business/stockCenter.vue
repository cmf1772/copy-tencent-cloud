<template>
  <div class="stockCenter bs flexColumn"
       style="margin: 0">
    <el-tabs v-model="activeName"
             @tab-click="handleClick">
      <el-tab-pane label="上架优惠券"
                   name="first"></el-tab-pane>
      <el-tab-pane label="配置管理"
                   name="second"></el-tab-pane>
    </el-tabs>
    <div class="conent_box flexColumn"
         style="height: 100%">
      <div class="flexColumn conent_box"
           ref="c_box"
           style="flex: 1">
        <div class="c_box mb">
          <div class="flexRC ">
            <p class="mr minText">券名称：</p>
            <el-input placeholder="请输入内容"
                      style="width: 300px"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml">
              <el-button slot="append"
                         size="mini"
                         icon="el-icon-search"></el-button>
            </el-input>
            <p class="mr ml minText">类型：</p>
            <el-select v-model="shopValue"
                       style="width: 150px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="全部"
                         value="1"></el-option>
              <el-option label="折扣卷"
                         value="2"></el-option>
              <el-option label="礼品卷"
                         value="3"></el-option>
              <el-option label="优惠卷"
                         value="4"></el-option>
            </el-select>
            <p class="mr ml minText">上架状态：</p>
            <el-select v-model="shopValue"
                       style="width: 150px"
                       size="mini"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="全部"
                         value="1"></el-option>
              <el-option label="上架中"
                         value="2"></el-option>
              <el-option label="已下架"
                         value="3"></el-option>
            </el-select>

          </div>
          <div class="flexJC mt">
            <el-button size="mini"
                       type="primary"
                       plain>添加卷</el-button>
            <div>
              <el-button size="mini">批量删除</el-button>
              <el-button size="mini">设置排序</el-button>
            </div>
          </div>

        </div>

        <div class="table"
             style="flex: 1">
          <el-table :data="tableData"
                    :style="{'width': width + 'px'}">
            <el-table-column prop="name"
                             fixed
                             show-overflow-tooltip
                             label="券名称"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltips
                             label="券类型">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="券有效期">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="上架状态">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="库存">
            </el-table-column>
            <el-table-column prop="address"
                             show-overflow-tooltip
                             label="操作">
            </el-table-column>]
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
  name: '',
  data () {
    return {
      activeName: 'first',
      type: '1',
      state: [{
        value: '1',
        label: '更多'
      }, {
        value: '2',
        label: '修改装修权限'
      }, {
        value: '3',
        label: '修改线上库存模式'
      }, {
        value: '4',
        label: '修改线下库存模式'
      }, {
        value: '5',
        label: '修改门店权限'
      }, {
        value: '6',
        label: '修改发票模版'
      }, {
        value: '7',
        label: '修改分成方案'
      }],
      width: 0
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  },
  mounted () {
    this.width = this.$refs.c_box.clientWidth
  }
}
</script>

<style lang="scss" scoped>
</style>

