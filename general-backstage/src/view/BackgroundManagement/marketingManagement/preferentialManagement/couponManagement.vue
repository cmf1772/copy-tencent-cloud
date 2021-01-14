<template>
  <div class="couponManagement">
    <div class="top_button">
      <div class="top_left">
        <span>搜索商品：</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;"
                   class="first-child"
                   placeholder="请选择"
                   v-model="value"
                   @change="create">
          <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          确定
        </el-button>
      </div>
      <el-button @click="checkAduit">批量审核</el-button>
    </div>
    <div class="table_bottom">
      <div class="flex">
        <el-table :data="tableData"
                  @selection-change="handleSelectionChange"
                  stripe
                  style="width: 100%">
           <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           type="index"
                           width="50"
                           label="序号">
            <template slot-scope="scope">
              <!-- {{(currentPage-1)*10+scope.$index+1}} -->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="优惠券名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="start_date"
                           show-overflow-tooltip
                           label="起始时间">
          </el-table-column>
          <el-table-column prop="end_date"
                           show-overflow-tooltip
                           label="终止时间">
          </el-table-column>
          <el-table-column prop="price_lbound"
                           show-overflow-tooltip
                           label="面额">
          </el-table-column>
          <el-table-column prop="shop_name"
                           show-overflow-tooltip
                           label="所属商铺">
          </el-table-column>
          <el-table-column prop="member_num"
                           show-overflow-tooltip
                           label="分发数量">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="状态">
            <template slot-scope="scope">
              <span v-html="scope.row.status"></span>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="edit(scope.$index, scope.row)">修改</el-button>
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
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="page_size"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalData">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import templateTobuy from "../../../PlatForm/BusinessCenter/templateTobuy.vue"

export default {
  components: { templateTobuy },
  name: 'couponManagement',

  data () {
    return {
      time: [],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      value: 0,
      options: [
        {
          value: 0,
          label: '全部'
        },
        {
          value: 1,
          label: '普通券'
        },
        {
          value: 2,
          label: '主站推广,未审核'
        },
        {
          value: 3,
          label: '主站推广,已审核'
        }
      ]
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getCouponPageList({
        page: this.currentPage,
        page_size: this.page_size,
        name: '',
        status: this.value,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    edit (index, row) {
      this.$router.push('/preferentialManagement/editcouponManagement?uid=' + row.uid)
    },
    checkTrackQueryFun(index, row) {
      this.$newApi.delCouponItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',  
            message: res.data.msg
          })
          this.create()
        }
      })
    },
    handleSelectionChange(value) {
      console.log(value)
      this.checkData = value
    },
    checkAduit() {
      let arr = ''
      this.checkData.forEach((item, index) => {
        if(index == 0) {
          arr = item.uid
        }
        else {
          arr += ',' + item.uid
        }
      })
      this.$newApi.setBatCheckItem({
        uid: arr,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.$message({
            type: 'success',  
            message: res.data.msg
          })
          this.create()
        }
      })
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.create()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.create()
    },
  }
}
</script>

<style lang="scss" scoped>
.top_button {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
}

.couponManagement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

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
