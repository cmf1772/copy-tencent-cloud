<template>
  <div class="provider">
    <div class="top_button">
      <div class="top_left">
        <span>搜索商品：</span>
        <el-select clearable
                   style="width:100px;;margin-left:10px;"
                   class="first-child"
                   v-model="cate_id"
                   placeholder="请选择">
          <el-option v-for="(item, index) in searchSelect"
                     :key="index"
                     :label="item.category_name"
                     :value="item.uid"></el-option>
        </el-select>
        <el-input placeholder="请输入内容"
                  v-model="ps_subject"
                  class=""
                  style="width:220px;;">
          <el-button slot="append"
                     type="primary"
                     icon="el-icon-search"
                     @click="() => {
                       getPfGoodsPageList()
                     }">
            确定
          </el-button>
        </el-input>
      </div>
      <div class="top_right">
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-download"
                   @click="batDown">
          下架
        </el-button>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-s-promotion"
                   @click="batDelGoodsItem">
          删除
        </el-button>
        <el-button slot="append"
                   type="primary"
                   class="ml"
                   icon="el-icon-s-promotion"
                   @click="batMoveItem">
          移动
        </el-button>
        <el-select clearable
                   style="width:100px;;margin-left:10px;"
                   class="first-child"
                   v-model="cat_menu_move"
                   placeholder="请选择">
          <el-option v-for="(item, index) in searchSelect"
                     :key="index"
                     :label="item.category_name"
                     :value="item.uid"></el-option>
        </el-select>
        <el-select v-model="goods_cat_pid_menu_move"
                   style="width:100px;"
                   @change="changeFun"
                   clearable>
          <el-option v-for="(item, index) in getBoardPageList1"
                     :key="index"
                     :label="item.board_title"
                     :value="item.uid"></el-option>
        </el-select>
        <el-select v-model="goods_cat_menu_move"
                   style="width:100px;"
                   clearable>
          <el-option v-for="(item, index) in getBoardPageListChildren"
                     :key="index"
                     :label="item.board_title"
                     :value="item.uid"></el-option>
        </el-select>
      </div>
    </div>
    <div class="table_bottom">
      <div class="form-item">
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-plus"
                   @click="batPfAddItem"
                   style="width: 120px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;">
          加入云仓
        </el-button>
        <el-button slot="append"
                   type="primary"
                   @click="batUpdateItem"
                   style="width: 120px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;">
          批量更新
        </el-button>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-plus"
                   style="width: 120px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;"
                   @click="add">
          增加商品
        </el-button>
      </div>
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
          <el-table-column prop="wholesale_price"
                           show-overflow-tooltip
                           label="批发价格">
          </el-table-column>
          <el-table-column prop="promote_start_date"
                           show-overflow-tooltip
                           label="分成金额">
          </el-table-column>
          <el-table-column prop="if_storege"
                           show-overflow-tooltip
                           label="是否入库">
          </el-table-column>
          <el-table-column prop="goods_stock"
                           show-overflow-tooltip
                           label="库存总量">
          </el-table-column>
          <el-table-column prop="goods_sale_price"
                           show-overflow-tooltip
                           label="优惠额度">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="180"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="loog(scope.$index, scope.row)">查看</el-button>
                <el-button size="medium"
                           type="text"
                           class="blueColor right20"
                           @click="editor(scope.$index, scope.row)">编辑</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="delGoodsItem(scope.$index, scope.row)">删除</el-button>
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
  name: 'provider',


  data () {
    return {
      ps_subject: '',
      cate_id: '',
      searchSelect: [],
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      multipleSelection: [],
      getBoardPageList1: [],
      getBoardPageListChildren: [],
      cat_menu_move: '',
      goods_cat_pid_menu_move: '',
      goods_cat_menu_move: ''
    }
  },

  methods: {
    batUpdateItem () {
      this.$api.batUpdateItem({
        uid: this.multipleSelection,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getPfGoodsPageList()
      })
    },

    batPfAddItem () {
      this.$api.batPfAddItem({
        uid: this.multipleSelection,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getPfGoodsPageList()
      })
    },

    batMoveItem () {
      this.$api.batMoveItem({
        uid: this.multipleSelection,
        cat_menu_move: this.cat_menu_move,
        goods_cat_pid_menu_move: this.goods_cat_pid_menu_move,
        goods_cat_menu_move: this.goods_cat_menu_move,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getPfGoodsPageList()
      })
    },

    getBoardPageListFun () {
      this.$api.getBoardPageList({
        order_field: "od",
        order_type: "desc",
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.getBoardPageList1 = res.data.items
      })
    },

    changeFun () {
      this.$api.getBoardPageSubList({
        order_field: "uid",
        order_type: "asc",
        pid: this.goods_cat_pid_menu_move,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.goods_cat_menu_move = ''
        this.getBoardPageListChildren = res.data.items
      })
    },

    handleSelectionChange (val) {
      this.multipleSelection = val.map(val => { return val.uid }).join(',')
    },

    add () {
      this.$router.push('/commodity/editConventionalKnowledge?nameType=添加商品')
    },

    look () {
      this.$router.push('/marketHome/details')
    },

    editor (i, r) {
      this.$router.push({
        path: '/commodity/editConventionalKnowledge',
        query: {
          uid: r.uid
        }
      })
    },

    batDown () {
      this.$api.batDown({
        uid: this.multipleSelection,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getPfGoodsPageList()
      })
    },

    batDelGoodsItem () {
      this.$api.batDelGoodsItem({
        uid: this.multipleSelection,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getPfGoodsPageList()
      })
    },

    getPfGoodsPageList () {
      this.$api.getPfGoodsPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        cate_id: this.cate_id,
        ps_subject: '',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    getBoardPageList () {
      this.$api.getCategoryPageList({
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.searchSelect = res.data.items
      })
    },

    delGoodsItem (i, r) {
      this.$api.delGoodsItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getPfGoodsPageList()
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getPfGoodsPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getPfGoodsPageList()
    },
  },

  mounted () {
    this.getBoardPageList()
    this.getPfGoodsPageList()
    this.getBoardPageListFun()
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

.provider {
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
