<template>
  <div class="generalMerchandise">
    <div class="top_button">

      <div class="top_left">
        <span>商品名称</span>
        <el-input v-model="sName"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>商品编码</span>
        <el-input v-model="sName"
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
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   icon="el-icon-bottom"
                   @click="outClick">
          批量下架
        </el-button>
        <el-button slot="append"
                   type="primary"
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   icon="el-icon-bottom"
                   @click="selectClick">
          批量删除
        </el-button>
      </div>
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="商品价格"
                     :name="'price'"></el-tab-pane>
        <el-tab-pane label="上传时间"
                     :name="'time'"></el-tab-pane>
        <el-tab-pane label="商品库存"
                     :name="'stock'"></el-tab-pane>
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
          <!-- <el-table-column prop="date"
                           show-overflow-tooltip
                           label="上架情况"
                           width="180">
          </el-table-column> -->
          <el-table-column show-overflow-tooltip
                           label="商品名称">
            <template slot-scope="scope">
              <div>
                <el-input v-model="scope.row.goods_name"
                          @blur="nameChange('goods_name', scope.row.goods_name, scope.row.uid)"
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
                <el-input v-model=" scope.row.goods_code"
                          @blur="nameChange('goods_code', scope.row.goods_code, scope.row.uid)"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="goods_category"
                           show-overflow-tooltip
                           label="所属分类">
          </el-table-column>
          <el-table-column prop="shop_name"
                           show-overflow-tooltip
                           label="所属商铺">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="商城价格">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.goods_sale_price"
                          @blur="nameChange('goods_sale_price', scope.row.goods_sale_price, scope.row.uid)"
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
          <el-table-column prop="preorder"
                           show-overflow-tooltip
                           label="接受预定">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作" width="200">
            <template slot-scope="scope">
              <div>

                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="editor(scope.$index, scope.row)">修改</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor  right20"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
                <el-button size="medium"
                           type="text"
                           @click="release"
                           class="blueColor">发布</el-button>
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
  name: 'generalMerchandise',

  data () {
    return {
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
      sCode: '',
      tableData: [],
      currentPage: 1, //当前页数
      page_size: 10,
      totalData: 1, //总页数
      activeName: 'price',
      selectData: []
    }
  },
  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getGoodsPageList({
        page: this.currentPage,
        page_size: this.page_size,
        ps_subject: this.sName,
        ps_code: this.sCode,
        supplier_id: '',
        order_type: 'asc',
        order_field: this.activeName,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    nameChange(name, value, uid) {
      this.$newApi.getGoodsajaxEdit({
        uid: uid,
        field: name,
        val: value,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          this.create()
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },

    handleSelectionChange(val) {
      this.selectData = val
    },

    outClick() {
      if(this.selectData.length == []) {
        return this.$message({
          type: 'error',
          message: '请选择要下架的数据'
        })
      } else {
        let arr = ''
        this.selectData.forEach((item, index) => {
          if(index == 0) {
            arr = item.uid
          } else {
            arr += ',' + item.uid
          }
        })
        this.$newApi.batDown({
          uid: arr,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.code >= 0) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          } else {
            this.create()
            this.$message({
              type: 'success',
              message: res.data.msg
            })
          }
        })
      }
    },  

    selectClick() {
      if(this.selectData.length == []) {
        return this.$message({
          type: 'error',
          message: '请选择要删除的数据'
        })
      } else {
        let arr = ''
        this.selectData.forEach((item, index) => {
          if(index == 0) {
            arr = item.uid
          } else {
            arr += ',' + item.uid
          }
        })
        this.$newApi.batDelGoodsItem({
          uid: arr,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          if(res.data.code >= 0) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          } else {
            this.create()
            this.$message({
              type: 'success',
              message: res.data.msg
            })
          }
        })
      }
    },

    checkTrackQueryFun(index, row) {
      this.$newApi.delGoodsItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.code >= 0) {
          this.$message({
            type: 'error',
            message: res.data.msg
          })
        } else {
          this.create()
          this.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      })
    },

    sesarchFun() {
      this.create()
    },

    handleClick() {
      this.create()
    },

    editor (index, row) {
      this.$router.push('/commodityInformation/editGeneralMerchandise?nameType=修改商品信息&uid=' + row.uid)
    },

    release () {
      this.$router.push('/commodityInformation/releaseGeneralMerchandise?nameType=发布广告')

    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
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
.generalMerchandise {
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
