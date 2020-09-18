<template>
  <div class="shopList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">全部客户</p>
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
              <el-option label="姓名"
                         value="1"></el-option>
              <el-option label="微信昵称"
                         value="2"></el-option>
              <el-option label="手机号"
                         value="3"></el-option>
              <el-option label="会员卡号"
                         value="4"></el-option>
              <el-option label="客户编号"
                         value="5"></el-option>
              <el-option label="上级微客手机号"
                         value="6"></el-option>
              <el-option label="上级微客客户编号"
                         value="7"></el-option>
            </el-select>
            <el-button slot="append"
                       size="mini">搜索</el-button>
          </el-input>
          <div>
            <el-button size="mini"
                       icon="el-icon-refresh">同步粉丝</el-button>
            <el-button size="mini"
                       icon="el-icon-download">导出客户</el-button>
            <el-button size="mini"
                       icon="el-icon-upload2">导入客户</el-button>
            <el-button size="mini"
                       type="primary"
                       plain>高级筛选</el-button>
          </div>
        </div>

        <div class="flexRC mt">
          <el-select v-model="owner"
                     style="width: 105px"
                     slot="prepend">
            <el-option label="归属区域"
                       value="1"></el-option>
            <el-option label="归属门店"
                       value="2"></el-option>
          </el-select>
          <div class="button ml mr">不限</div>
          <el-button size="mini">无归属</el-button>
          <el-button size="mini">添加区域</el-button>
        </div>

        <div class="flexRC mt">
          <p class="minText">客户标签</p>
          <div class="button ml mr">不限</div>
          <el-button size="mini">添加</el-button>
        </div>

        <el-divider></el-divider>
        <div class="flex mt">
          <p class="minText mr">批量操作</p>
          <el-button size="mini">修改成长值</el-button>
          <el-button size="mini">打标签</el-button>
          <el-button size="mini">修改积分</el-button>
          <el-button size="mini">送优惠券</el-button>
          <el-button size="mini">修改关系链</el-button>
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

      <div class="table"
           style="width: 100%;">
        <el-table :data="tableData"
                  stripe
                  style="width: 1090px">
          <el-table-column prop="name"
                           fixed
                           show-overflow-tooltip
                           label="客户信息"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="成为客户时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="最近消费时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="消费金额"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="消费次数"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="消费力"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="充值金额"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="充值次数"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="当前积分"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="累计积分"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="当前余额"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           sortable
                           show-overflow-tooltip
                           label="累计余额"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           fixed="right"
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
  name: 'allCustoms',
  data () {
    return {
      state: [{
        value: '1',
        label: '更多'
      }, {
        value: '2',
        label: '修改归属门店'
      }, {
        value: '3',
        label: '修改微客等级'
      }, {
        value: '4',
        label: '开通会员'
      }, {
        value: '5',
        label: '加黑名单'
      }, {
        value: '6',
        label: '变更导购关系'
      }],
      label: [{
        value: '1',
        label: '页面标签'
      }, {
        value: '2',
        label: '全部标签'
      }],
      stateValue: '1',
      sleValue: '3',
      owner: '1',
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