<template>
  <div class="recommendedSettings">
    <div class="top_button">
      <div class="top_left">
        <div>
          <el-radio v-model="radio"
                    label="1">开启</el-radio>
          <el-radio v-model="radio"
                    label="2">关闭</el-radio>
        </div>
        <div class="form-item"
             style="line-height: 40px;margin: 20px 0 ;">
          成为分销商积分标准：<el-input placeholder="请输入内容"
                    style="width:200px"
                    v-model="input"
                    clearable>
          </el-input>
          等级积分大于此标准可以成为分销会员
        </div>
        <div class="form-item"
             style="line-height: 40px">
          设置官方推荐账号ID：<el-input placeholder="请输入内容"
                    style="width:200px"
                    v-model="input"
                    clearable>
          </el-input>
          如果不是推荐关系会员，直接关注，默认上级为官方账号
        </div>
        <div style="margin-top:20px">
          <el-button>确定</el-button>
        </div>
      </div>
      <div class="top_right">

      </div>
    </div>
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="推荐人级别"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="积分分成百分比">
            <template slot-scope="scope">
              <div>
                <el-input placeholder="请输入内容"
                          style="width:200px"
                          v-model="input"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="现金分成百分比">
            <template slot-scope="scope">
              <div>
                <el-input placeholder="请输入内容"
                          style="width:200px;height: 20px"
                          height="20px"
                          v-model="input"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           width="100px"
                           label="操作">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
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
  name: 'recommendedSettings',

  data () {
    return {
      radio: 1,
      input: '',
      activeName: 'second',
      time: [],
      status: '',
      options: [
        { value: '', label: '全部' },
        { value: 0, label: '离线' },
        { value: 1, label: '在线' },
        { value: 2, label: '维护' },
        { value: 3, label: '故障' },
        { value: 4, label: '失效' },
      ],
      sName: '',
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
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区516 弄'
      }],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
    }
  },

 mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getUserList({
        page: this.currentPage,
        page_size: this.page_size,
        money_id: this.sName,
        b_time: this.value1[0],
        e_time: this.value1[1],
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    add () {
      this.$router.push('/device/edit?nameType=新建设备')

    },
    editor () {
      this.$router.push('/device/edit?nameType=修改设备')
    },
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
.el-table {
  flex: 1;
  overflow: auto;

  /deep/ .el-input__inner {
    border-color: #fff !important ;
  }
}

.recommendedSettings {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .top_button {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 20px 20px;
    background: #fff;
    // display: flex;
    // justify-content: space-between;
  }

  .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }

  .el-table {
    flex: 1;
    overflow: auto;
  }

  .flex {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .btootm_paination {
    width: 100%;
    line-height: 40px;
    height: 40px;
  }
}
</style>
