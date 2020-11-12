<template>
  <div class="clist bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">客户管理-客户列表</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexRC">
          <el-select v-model="search"
                     clearable
                     class="mr"
                     size="mini"
                     placeholder="请选择">
            <el-option label="会员姓名"
                       value="1">
            </el-option>
            <el-option label="客户昵称"
                       value="2">
            </el-option>
            <el-option label="会员卡号"
                       value="3">
            </el-option>
            <el-option label="手机号"
                       value="4">
            </el-option>
          </el-select>
          <el-input placeholder="请输入关键字"
                    style="width: 300px; margin: 0"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml mr">
            <el-button slot="append"
                       size="mini"
                       icon="el-icon-search"></el-button>
          </el-input>
          <el-button size="mini"
                     class="mr ml">展开</el-button>
        </div>
        <div class="flexJC mt">
          <div class="flexRC">
            <el-button size="mini"
                       class="mr">导出会员数据</el-button>
            <el-button size="mini"
                       class="mr ml">打标签</el-button>
            <el-button size="mini"
                       class="mr ml">修改等级</el-button>
            <el-button size="mini"
                       class="mr ml">冻 结</el-button>
            <el-button size="mini"
                       class="mr ml">解 冻</el-button>
            <el-button size="mini"
                       class="mr ml">添加客户</el-button>
            <el-button size="mini"
                       class="mr ml">导入客户</el-button>
            <el-button size="mini"
                       class="mr ml">标签管理</el-button>
            <el-button size="mini"
                       class="mr ml">同步粉丝</el-button>
          </div>
          <div>

          </div>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="客户信息"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="身份等级">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="标签">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="卡号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="手机">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="可用余额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="可用积分">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="累计消费金额">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="累计消费次数">
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
  name: 'clist',
  data () {
    return {
      value: true,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      date: '1',
      search: '',
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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