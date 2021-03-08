<template>
  <div class="notGoods">
    <div class="top_button">
      <div class="top_left">
        <span>搜索商品：</span>
        <el-select v-model="cate_id"
                   style="width: 120px"
                   clearable>
          <el-option v-for="(item, index) in supplier_cat_all"
                     :key="index"
                     :label="item.category_name"
                     :value="item.uid"></el-option>
        </el-select>
        <el-input placeholder="请输入内容"
                  class=""
                  v-model="ps_subject"
                  style="width:220px;;">
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-search"
                     @click="getWsjGoodsPageList">
            确定
          </el-button>
        </el-input>
      </div>
      <div class="top_right">
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-upload2"
                   @click="sesarchFun()">
          上架
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
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
                           label="商品名称">
            <template slot-scope="scope">
              <div class="img flexC">
                <img :src=" 'http://img.meichengmall.com/' + scope.row.goods_file1"
                     style="width: 50%;height: 50%"
                     alt="">
                <span>{{scope.row.goods_name}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="goods_sale_price"
                           show-overflow-tooltip
                           label="商城价格"
                           width="180">
          </el-table-column>
          <el-table-column prop="register_date"
                           show-overflow-tooltip
                           label="发布时间">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="上架情况">

            <div>
              下架
            </div>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="100"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delWsjGoodsItem(scope.$index, scope.row)">删除</el-button>
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
                         :total="total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notGoods',

  data () {
    return {
      ps_subject: '',
      cate_id: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      total: 0,
      page_size: 10,
      multipleSelection: [],
    }
  },

  mounted () {
    this.getWsjGoodsPageList()
    this.getCategoryPageList()
  },

  methods: {
    getCategoryPageList () {
      this.$api.getCategoryPageList({
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.supplier_cat_all = res.data.items
      })
    },

    batWsjUp () {
      this.$api.batWsjUp({
        uid: this.multipleSelection,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getWsjGoodsPageList()
      })
    },

    handleSelectionChange (val) {
      this.multipleSelection = val.map(val => { return val.uid }).join(',')
    },

    delWsjGoodsItem (i, r) {
      this.$api.delWsjGoodsItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getWsjGoodsPageList()
      })
    },

    getWsjGoodsPageList () {
      this.$api.getWsjGoodsPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        cate_id: this.cate_id,
        ps_subject: this.ps_subject,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getWsjGoodsPageList();
    },

    handleSizeChange (val) {
      this.page_size = val;
      this.getWsjGoodsPageList();
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>


<style lang="scss" scoped>
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        .img {
          width: 100px;
          height: 100%;
          cursor: pointer;
          > img {
            width: 100% !important;
            height: 100% !important;
          }
        }
      }
    }
  }
}
</style>

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

.notGoods {
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
