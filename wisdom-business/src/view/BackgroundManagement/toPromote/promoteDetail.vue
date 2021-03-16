<template>
  <div class="provider">
    <!-- <div class="top_button">
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
                       getMyTgMingXiPageList()
                     }">
            确定
          </el-button>
        </el-input>
      </div>
      <div class="top_right">
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
      </div>
    </div> -->
    <div class="table_bottom">
      <span>
        商家总提成：<strong style="color: red">{{MXsetDownToText}}</strong> 元
      </span>
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
          <!-- <el-table-column show-overflow-tooltip
                           label="商品名称">
            <template slot-scope="scope">
              <div class="img flexC">
                <img :src=" 'http://img.meichengmall.com/' + scope.row.goods_file1"
                     style="width: 50%;height: 50%"
                     alt="">
                <span>{{scope.row.goods_name}}</span>
              </div>
            </template>
          </el-table-column> -->
          <el-table-column prop="memo"
                           show-overflow-tooltip
                           label="交易类型">
          </el-table-column>
          <el-table-column prop="buyer_name"
                           show-overflow-tooltip
                           label="购买会员">
          </el-table-column>
          <el-table-column prop="order_sn"
                           show-overflow-tooltip
                           label="交易单号">
          </el-table-column>
          <el-table-column prop="reg_date"
                           show-overflow-tooltip
                           label="创建时间">
          </el-table-column>
          <el-table-column prop="je"
                           show-overflow-tooltip
                           label="提成金额">
          </el-table-column>
          <el-table-column prop="status"
                           show-overflow-tooltip
                           label="状态">
          </el-table-column>
          <!-- <el-table-column show-overflow-tooltip
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
                           @click="TGsetAddTo(scope.$index, scope.row)">上架到店</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor right20"
                           @click="TGsetDownTo(scope.$index, scope.row)">下架</el-button>
              </div>
            </template>
          </el-table-column> -->
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
import { getCookie } from '@/request/api/cookie'
export default {
  name: 'provider',

  data () {
    return {
      MXsetDownToText: '',
      ps_subject: '',
      cate_id: '',
      searchSelect: [],
      tableData: [],
      currentPage: 1, //当前页数
      total: 1, //总页数
      page_size: 10,
      multipleSelection: [],
      cat_menu_move: '',
    }
  },

  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val.map(val => { return val.uid }).join(',')
    },

    handleClick () {
      this.getMyTgMingXiPageList()
    },

    MXsetDownTo () {
      this.$api.MXsetDownTo({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.MXsetDownToText = res.data
      })
    },

    getMyTgMingXiPageList () {
      this.$api.getMyTgMingXiPageList({
        page: this.currentPage,
        page_size: this.page_size,
        order_type: "asc",
        order_field: 'id',
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
      this.getMyTgMingXiPageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getMyTgMingXiPageList()
    },
  },

  mounted () {
    this.getMyTgMingXiPageList()
    this.MXsetDownTo()
  }
}
</script>


<style lang="scss" scoped>
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 120px;
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
