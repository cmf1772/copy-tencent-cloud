
<template>
  <div class="groupGoods">
    <div class="top_button">

      <div class="top_left">
        <span>商品名称</span>
        <el-input v-model="ps_subject"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>商品编码</span>
        <el-input v-model="ps_code"
                  style="width: 200px"
                  clearable>
        </el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜索
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <div class="form-item">
        <el-button slot="append"
                   type="primary"
                   @click="msbatDelGoodsItem"
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   icon="el-icon-bottom">
          批量删除
        </el-button>
      </div>
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="商城价格"
                     name="first"></el-tab-pane>
        <el-tab-pane label="上传时间"
                     name="second"></el-tab-pane>
        <el-tab-pane label="商城库存"
                     name="third"></el-tab-pane>
      </el-tabs>
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  @selection-change="handleSelectionChange"
                  style="width: 100%">
          <el-table-column type="selection"
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
          <el-table-column show-overflow-tooltip
                           label="商品信息">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.goods_name"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="商品编码">
            <template slot-scope="scope">
              <div>
                <el-input v-model="scope.row.goods_code"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="秒杀价格"
                           width="180">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.goods_sale_price"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="goods_stock"
                           show-overflow-tooltip
                           label="总库存">
          </el-table-column>
          <el-table-column prop="start_date"
                           show-overflow-tooltip
                           label="开始时间">
          </el-table-column>

          <el-table-column prop="end_date"
                           show-overflow-tooltip
                           label="结束时间">
          </el-table-column>
          <!-- <el-table-column prop="register_date"
                           show-overflow-tooltip
                           label="结束时间">
          </el-table-column> -->
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="200"
                           min-width="60">
            <template slot-scope="scope">
              <div>

                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="editor(scope.$index, scope.row)">修改</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor  right20"
                           @click="msdelGoodsItem(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChangeFun"
                         :current-page="currentPage"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size="10"
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
  name: 'groupGoods',

  data () {
    return {
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      activeName: '',
      page_size: 10,
      allUid: [],
      ps_code: '',
      ps_subject: ''
    }
  },

  methods: {
    sesarchFun () {
      this.msetGoodsPageList()
    },

    msdelGoodsItem (i, r) {
      this.$api.msdelGoodsItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.msetGoodsPageList()
      })
    },

    msbatDelGoodsItem () {
      if (!this.allUid.length) {
        this.$message({
          message: '请选择数据',
          type: 'warning'
        });
        return false
      }

      this.$api.msbatDelGoodsItem({
        uid: this.allUid.join(','),
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.msetGoodsPageList()
      })
    },

    editor (i, r) {
      this.$router.push({
        path: '/commodityInformation/editsecondKil',
        query: {
          nameType: "修改商城信息",
          uid: r.uid
        }
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.msetGoodsPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.msetGoodsPageList()
      console.log(`每页 ${val} 条`);
    },

    handleClick (tab, event) {
      console.log(tab, event);
    },

    msetGoodsPageList () {
      this.$api.msetGoodsPageList({
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
        page: this.currentPage,
        page_size: this.page_size,
        ps_code: this.ps_code,
        ps_subject: this.ps_subject
      }).then(res => {
        // res.data.items.forEach(item => {
        //   item.start_date = this.timestamp(item.start_date)
        //   item.end_date = this.timestamp(item.end_date)
        // })
        this.tableData = res.data.items
        this.totalData = res.data.total_result
        console.log(this.tableData)
      })
    },

    handleSelectionChange (val) {
      this.allUid = val.map(val => { return val.uid })
    },

    timestamp (timestamp) {
      var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    }
  },

  mounted () {
    this.msetGoodsPageList()
  },
}
</script>

<style lang="scss" scoped>
.groupGoods {
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
    display: flex;
    justify-content: space-between;
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

    /deep/ .el-input__inner {
      border-color: #fff !important ;
    }
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
