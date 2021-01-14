<template>
  <div class="gatheringCommodities">
    <div class="top_button">
      <div class="top_left">
        <span>搜索商品：</span>
        <el-select clearable
                   style="width:100px;;margin-left:10px;"
                   class="first-child"
                   v-model="status"
                   @change="create"
                   placeholder="请选择">
          <el-option label="审核"
                     value="1"></el-option>
          <el-option label="未审核"
                     value="2"></el-option>
        </el-select>
        <el-input placeholder="请输入内容"
                  v-model="title"
                  class=""
                  style="width:220px;;">
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-search"
                     @click="create()">
            确定
          </el-button>
        </el-input>
      </div>
      <div>
        <el-button type="primary" @click="plSetitem">批量审核</el-button>
      </div>
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
          <el-table-column prop="goods_name"
                           show-overflow-tooltip
                           label="商品名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="goods_code"
                           show-overflow-tooltip
                           label="商品编码">
          </el-table-column>
          <el-table-column prop="goods_category"
                           show-overflow-tooltip
                           label="所属分类">
          </el-table-column>
          <el-table-column prop="shop_name"
                           show-overflow-tooltip
                           label="所属商铺">
          </el-table-column>
          <el-table-column prop="goods_sale_price"
                           show-overflow-tooltip
                           label="商城价格">
          </el-table-column>
          <el-table-column prop="status"
                           show-overflow-tooltip
                           label="状态">
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
                           @click="look(scope.$index, scope.row)">查看</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="edit(scope.$index, scope.row)">审核</el-button>
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
export default {
  name: 'gatheringCommodities',

  data () {
    return {
      time: [],
      sName: '',
      status: '',
      title: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      selectData: []
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getStoragePageList({
        page: this.currentPage,
        page_size: this.page_size,
        ps_subject: this.title,
        status: this.status,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    checkTrackQueryFun(index, row) {
      this.$newApi.delStorageItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },
    edit(index, row) {
      this.$newApi.setCheckItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },
    handleSelectionChange(val) {
      this.selectData = val
    },
    plSetitem() {
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.uid
        }
        else{
          arr += ',' + item.uid
        }
      })
      this.$newApi.batEdit({
        uid: arr,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg
        })
        this.create()
      })
    },
    look () {
      this.$router.push('/marketHome/details')
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

.gatheringCommodities {
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
