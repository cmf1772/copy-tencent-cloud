<template>
  <div class="shop bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">门店列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexRC">
          <el-input placeholder="请输入门店名、分店名、详细地址"
                    style="width: 200px"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
          <el-select v-model="stateValue"
                     class="ml mr"
                     style="width: 100px"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option v-for="item in state"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <el-button size="mini">新建页面</el-button>

          <el-select v-model="labelValue"
                     class="ml mr"
                     style="width: 100px"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="全部状态"
                       value="1">
            </el-option>
            <el-option label="停用中"
                       value="2">
            </el-option>
            <el-option label="启用中"
                       value="3">
            </el-option>
          </el-select>
          <el-select v-model="labelValue"
                     class="ml mr"
                     style="width: 100px"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="全部标签"
                       value="1">
            </el-option>
          </el-select>
          <el-select v-model="labelValue"
                     class="ml mr"
                     style="width: 100px"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="全部城市"
                       value="1">
            </el-option>
          </el-select>
          <el-select v-model="labelValue"
                     class="ml mr"
                     style="width: 100px"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="全部区域"
                       value="1">
            </el-option>
          </el-select>
        </div>
        <div class="flexRC mt ml">
          <el-button size="mini">批量打标签</el-button>
          <el-button size="mini">批量划分区域</el-button>
          <el-button size="mini">批量删除</el-button>
          <el-button size="mini">批量启用</el-button>
          <el-button size="mini">批量停用</el-button>
          <el-button size="mini">导出门店</el-button>
        </div>
      </div>
      <div class="flexC mt conent_box"
           style="flex: 1">
        <p class="minText">请先创建品牌</p>
        <el-button type="primary"
                   class="mt">立即创建</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data () {
    return {
      state: [{
        value: '1',
        label: '全部状态'
      }, {
        value: '2',
        label: '已发布'
      }, {
        value: '3',
        label: '定时发布'
      }, {
        value: '4',
        label: '未发布'
      }],
      label: [{
        value: '1',
        label: '页面标签'
      }, {
        value: '2',
        label: '全部标签'
      }],
      labelValue: '1',
      stateValue: '1',
      search: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市 1519 弄'
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
.shop {
  width: 100%;
  height: 100%;
}
</style>