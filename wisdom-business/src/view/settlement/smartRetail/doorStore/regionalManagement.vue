<template>
  <div class="regionalManagement bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">区域管理</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="bg_color"
           style="padding: 10px">
        <p class="minText">说明：组织架构请在账号权限中进行新增或编辑操作，点击进入 <span class="s"
                style="color: #2589ff;">账号权限</span> </p>
      </div>
      <div class="c_box">

        <div class="flexJC ">
          <div>
            <el-button size="mini">变更门店区域</el-button>
            <el-button size="mini">导出门店</el-button>
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
              <el-option label="门店名称"
                         value="1"></el-option>
              <el-option label="门店地址"
                         value="2"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="flex mt">
          <el-select v-model="stateValue"
                     class="ml mr"
                     style="width: 120px; margin-left: 0"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="门店所在省"
                       value="1"></el-option>
          </el-select>
          <el-select v-model="stateValue"
                     class="ml mr"
                     style="width: 120px; margin-left: 0"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="门店所在市"
                       value="1"></el-option>
          </el-select>
          <el-select v-model="stateValue"
                     class="ml mr"
                     style="width: 120px; margin-left: 0"
                     size="mini"
                     clearable
                     placeholder="请选择">
            <el-option label="门店所在区县"
                       value="1"></el-option>
          </el-select>
        </div>
      </div>

      <div class="table flexJC">
        <div class="mr"
             style="width: 200px">
          <ul class="c_box">
            <li class="textHover mb">智慧零售</li>
          </ul>
        </div>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="门店地址">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="门店标签">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="所属区域">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="门店状态">
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
  name: 'regionalManagement',
  data () {
    return {
      stateValue: '1',
      label: [{
        value: '1',
        label: '页面标签'
      }, {
        value: '2',
        label: '全部标签'
      }],
      labelValue: '1',
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
</style>