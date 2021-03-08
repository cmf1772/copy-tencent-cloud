<template>
  <div class="distributionGoods">
    <div class="top_button">
      <div class="top_left">
        <span>搜索关键字：</span>
        <el-input placeholder="关键字"
                  v-model="ps_subject"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>分类：</span>
        <!-- @change="changeFun" -->
        <el-select v-model="cate_id"
                   style="width: 200px"
                   clearable>
          <el-option v-for="(item, index) in getBoardPageList"
                     :key="index"
                     :label="item.board_title"
                     :value="item.uid"></el-option>
        </el-select>
        <!-- <el-select v-model="form.goods_cat"
                   style="width: 50%"
                   clearable>
          <el-option v-for="(item, index) in getBoardPageListChildren"
                     :key="index"
                     :label="item.board_title"
                     :value="item.uid"></el-option>
        </el-select> -->
        <span>品牌：</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;"
                   class="first-child"
                   v-model="ps_brand"
                   placeholder="请选择">
          <el-option v-for="item in select"
                     :key="item.uid"
                     :label="item.value"
                     :value="item.uid"></el-option>
          <el-option label="编号"
                     value="code"></el-option>
        </el-select>
        <span>价格：</span>
        <el-input placeholder="价格"
                  v-model="ps_price"
                  style="width: 200px"
                  clearable>
        </el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="getStoragePageList">
          确定
        </el-button>
      </div>
      <div class="top_right">

      </div>
    </div>
    <div class="table_bottom">
      <el-button slot="append"
                 type="primary"
                 @click="setAddTo"
                 icon="el-icon-plus"
                 style="width: 100px; height: 35px;text-aline:center;line-height: 0px;padding: 0 10px;font-size: 12px;margin: 10px 0 10px 10px;">
        加入推广库
      </el-button>
      <p style="margin: 10px 0 10px 10px"><i class="el-icon-warning redColor"></i> 上架是指从商品库中挑选商品发布至自己的商铺。每上架一件商品，需消耗 <span class="redColor">10</span>积分</p>
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
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="商城价格"
                           width="180">
          </el-table-column>
          <el-table-column prop="goods_brand"
                           show-overflow-tooltip
                           label="品牌">
          </el-table-column>
          <el-table-column prop="goods_sale_price"
                           show-overflow-tooltip
                           label="价格">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="分成">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="优惠">
          </el-table-column>
          <el-table-column prop="goods_category"
                           show-overflow-tooltip
                           label="分类">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="100"
                           min-width="60">
            <template slot-scope="scope">
              <div>
                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="look(scope.$index, scope.row)">查看</el-button>
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
  name: 'distributionGoods',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      cate_id: '',
      ps_subject: '',
      ps_brand: '',
      ps_price: '',
      multipleSelection: [],
      select: [],
      getBoardPageList: []
    }
  },

  mounted () {
    this.getStoragePageList()
    this.getBrandList()
    this.getBoardPageListFun()
  },

  methods: {
    getBoardPageListFun () {
      this.$api.getBoardPageList({
        order_field: "od",
        order_type: "desc",
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.getBoardPageList = res.data.items
      })
    },

    getBrandList () {
      this.$api.getBrandList({
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        for (let key in res.data) {
          this.select.push({
            value: res.data[key],
            uid: key
          })
        }
      })
    },

    handleSelectionChange (val) {
      this.multipleSelection = val.map(val => { return val.uid }).join(',')
    },

    setAddTo () {
      this.$api.setAddTo({
        uid: this.multipleSelection,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        });
        this.getStoragePageList()
      })
    },

    getStoragePageList () {
      this.$api.getStoragePageList({
        cate_id: this.cate_id,
        ps_brand: this.ps_brand,
        ps_price: this.ps_price,
        ps_subject: this.ps_subject,
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.total = res.data.total_result
      })
    },

    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getStoragePageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getStoragePageList()
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

.distributionGoods {
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
