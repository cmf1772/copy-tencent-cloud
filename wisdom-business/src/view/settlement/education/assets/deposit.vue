<template>
  <div class="educlass bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">保证金</p>
    </div>
    <el-button type="primary"
               style="width: 100px"
               class="mt"
               size="mini"
               plain>新建班级</el-button>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box mb text flexJC">
        保证金概览
        <p class="blueColor s">了解更多</p>
      </div>
      <div class="flexC minText"
           style="height: 150px">
        你尚未激活保证金服务
      </div>
      <div class="c_box mb text flexJC">
        保证金缴纳明细
      </div>

      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <p class="minText mr ">缴纳时间:</p>
            <el-date-picker v-model="value1"
                            style="width: 300px"
                            size="mini"
                            class="mr"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
            </el-date-picker>
          </div>
          <div class="flexRC">
            <p class="minText mr ">保证金类型:</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="供货商入驻保证金"
                         value="2">
              </el-option>
              <el-option label="消费者保障保证金"
                         value="3">
              </el-option>
              <el-option label="有赞大号推广保证金"
                         value="4">
              </el-option>
              <el-option label="有赞担保保证金"
                         value="5">
              </el-option>
              <el-option label="快速回款保证金"
                         value="6">
              </el-option>
              <el-option label="快递服务保证金"
                         value="7">
              </el-option>
              <el-option label="周期购回款保证金"
                         value="8">
              </el-option>
              <el-option label="跨境服务保证金"
                         value="9">
              </el-option>
              <el-option label="有赞应用市场保证金"
                         value="10">
              </el-option>
              <el-option label="退货包运费保证金"
                         value="11">
              </el-option>

            </el-select>
          </div>
          <div class="flexRC">
            <p class="minText mr ">保证金状态:</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="申请交保"
                         value="2">
              </el-option>
              <el-option label="部分交保"
                         value="3">
              </el-option>
              <el-option label="交保完成"
                         value="4">
              </el-option>
              <el-option label="交保失败"
                         value="5">
              </el-option>
              <el-option label="申请退保"
                         value="6">
              </el-option>
              <el-option label="已经退保"
                         value="7">
              </el-option>
              <el-option label="退保失败"
                         value="8">
              </el-option>
              <el-option label="提额中"
                         value="9">
              </el-option>
              <el-option label="已关闭"
                         value="10">
              </el-option>
              <el-option label="未定义"
                         value="11">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="flexRC mt">

          <el-button type="primary"
                     class="mr"
                     size="mini"
                     plain>筛选</el-button>

          <p class="minText blueColor s ml ">清空筛选条件</p>
        </div>
      </div>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="保证金类型"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="保证金状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="应缴纳金额（元）">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="保证金余额（元）">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="交保时间/退保时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="说明">
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
  name: 'educlass',
  data () {
    return {
      value: true,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      date: '1',
      search: '',
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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