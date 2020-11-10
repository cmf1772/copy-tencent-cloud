<template>
  <div class="accommodationRecord bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">住宿订单-住宿记录</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">
        <div class="flexRC">
          <p class="minText">快捷筛选</p>
          <ul class="flexRC"
              style="margin-left: 30px">
            <li @click="change1(index)"
                class='active flexCC box s'>
              <p>今日预抵列表</p>
            </li>
            <li @click="change1(index)"
                class='flexCC box s'>
              <p>今日预离列表</p>
            </li>
            <li @click="change1(index)"
                class='flexCC box s'>
              <p>今日抵店列表</p>
            </li>
            <li @click="change1(index)"
                class='flexCC box s'>
              <p>今日离店列表</p>
            </li>
          </ul>
        </div>
        <el-divider></el-divider>
        <p class="mt mb minText">住宿状态</p>
        <div class="flexRC">
          <ul class="flexRC"
              style="margin-left: 30px">
            <li @click="change1(index)"
                style="width:70px"
                class='active flexCC box s'>
              <p>全部</p>
            </li>
            <li @click="change1(index)"
                style="width:70px"
                class='flexCC box s'>
              <p>待入住</p>
            </li>
            <li @click="change1(index)"
                style="width:70px"
                class='flexCC box s'>
              <p>入住中</p>
            </li>
            <li @click="change1(index)"
                style="width:70px"
                class='flexCC box s'>
              <p>已退房</p>
            </li>
            <li @click="change1(index)"
                style="width:70px"
                class='flexCC box s'>
              <p>已结算</p>
            </li>
            <li @click="change1(index)"
                style="width:70px"
                class='flexCC box s'>
              <p>超时未入住</p>
            </li>
            <li @click="change1(index)"
                style="width:70px"
                class='flexCC box s'>
              <p>已取消</p>
            </li>
          </ul>
        </div>
        <div class="flexJC mt">
          <div class="flexRC">
            <el-select v-model="date"
                       class=""
                       style="width: 100px"
                       slot="prepend"
                       size="mini"
                       placeholder="请选择">
              <el-option label="入住时间"
                         value="1"></el-option>
              <el-option label="预定时间"
                         value="2"></el-option>
              <el-option label="离店时间"
                         value="3"></el-option>
            </el-select>
            <el-date-picker v-model="value1"
                            style="width: 320px"
                            size="mini"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
            </el-date-picker>
            <el-button size="mini"
                       class="ml">导出记录</el-button>
          </div>

          <el-input placeholder="请输入关键字"
                    style="width: 300px; margin: 0"
                    size="mini"
                    v-model="search"
                    class="input-with-select ml">
            <el-select v-model="sleValue"
                       style="width: 100px"
                       slot="prepend"
                       placeholder="请选择">
              <el-option label="销售订单"
                         value="1"></el-option>
              <el-option label="订单编号"
                         value="2"></el-option>
              <el-option label="接龙ID"
                         value="3"></el-option>
            </el-select>
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
                           label="房号"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="房型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="客人姓名">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="(预)抵店时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="(预)离店时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="客户类型">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
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
  name: 'accommodationRecord',
  data () {
    return {
      value: true,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      date: '1',
      search: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
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
.active {
  border: solid 1px #2589ff !important;
  color: #2589ff !important;
}

.box {
  width: 100px;
  height: 28px;
  border-radius: 4px;
  border: 1px solid #e3e2e5;
  margin-top: 10px;
  background: #fff;
  margin-left: 20px;
  font-size: 12px;
  color: #9e9ba6;
}
</style>