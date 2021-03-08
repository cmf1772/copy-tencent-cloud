<template>
  <div class="pointsCollectionZone">
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
        <span>商品状态</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;"
                   class="first-child"
                   v-model="approval"
                   placeholder="请选择">
          <el-option label="全部"
                     value="-2"></el-option>
          <el-option label="审核中"
                     value="0"></el-option>
          <el-option label="通过审核"
                     value="1"></el-option>
          <el-option label="拒绝审核"
                     value="-1"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜索
        </el-button>
      </div>
      <div class="top_right">
        <el-button type="primary" @click="selectDel">删除选定</el-button>
      </div>
    </div>
    <div class="table_bottom">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="商品价格"
                     name="price"></el-tab-pane>
        <el-tab-pane label="上传时间"
                     name="time"></el-tab-pane>
        <el-tab-pane label="商品库存"
                     name="stock"></el-tab-pane>
      </el-tabs>
      <div class="flex">
        <el-table :data="tableData"
                  style="width: 100%" @selection-change="handleSelectionChange">
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
                <el-input v-model="scope.row.goods_name" @blur="nameChange('goods_name', scope.row)"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="积分汇价格">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.goods_sale_price" @blur="nameChange('goods_sale_price', scope.row)"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="goods_stock"
                           show-overflow-tooltip
                           label="总库存"
                           width="180">
          </el-table-column>
          <el-table-column prop="register_date"
                           show-overflow-tooltip
                           label="发布时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="status"
                           show-overflow-tooltip
                           label="状态"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="150"
                           min-width="60">
            <template slot-scope="scope">
              <div>

                <el-button size="medium"
                           type="text"
                           class="yellowColor right20"
                           @click="editor(scope.row)">修改</el-button>
                <el-button size="medium"
                           type="text"
                           class="redColor  right20"
                           @click="checkTrackQueryFun(scope.row)">删除</el-button>
                <!-- <el-button size="medium"
                           type="text"
                           @click="release"
                           class="blueColor">发布</el-button> -->
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
  name: 'pointsCollectionZone',

  data () {
    return {
      time: [],
      status: '',
      ps_subject: '',
      ps_code: '',
      approval: '-2',
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      activeName: 'price',
      selectData: []
    }
  },
  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getChangeGdPageList({
        page: this.currentPage,
        page_size: this.page_size,
        ps_subject: this.ps_subject,
        ps_code: this.ps_code,
        approval: this.approval,
        supplier_id: '',
        order_type: 'asc',
        order_field: this.activeName,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    nameChange(name, row) {
      this.$newApi.JFajaxEdit({
        uid: row.uid,
	      field: name,
	      val: row[name],
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
          }
      })
    },
    checkTrackQueryFun(row) {
      this.$newApi.delChangeGdItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.create()
          }
      })
    },
    handleSelectionChange(row) {
      this.selectData = row
    },
    selectDel() {
      if(this.selectData.length == 0) {
        return this.$message({
          type: 'error',
          message: '请选择要删除的数据'
        })
      }
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.uid
        }
        else {
          arr += ',' + item.uid
        }
      })
      this.$newApi.batDelChangeGdItem({
        uid: arr,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code >= 0) {
            this.$message({
              type: 'error',
              message: res.data.msg
            })
          }
          else{
            this.$message({
              type: 'success',
              message: '操作成功'
            })
            this.create()
          }
      })
    },
    sesarchFun() {
      this.currentPage = 1
      this.create()
    },
    editor (row) {
      this.$router.push('/preferentialManagement/editpointsCollectionZone?uid=' + row.uid)
    },

    release () {
      this.$router.push('/commodityInformation/releasepointsCollectionZone?nameType=发布广告')

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
    handleClick (tab, event) {
      // console.log(t?ab, event);
      this.create()
    }
  }
}
</script>

<style lang="scss" scoped>
.pointsCollectionZone {
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

  /deep/ .table_bottom {
    width: 100%;
    height: auto;
    background: #fff;
    // margin-top: 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    td{
      /deep/ .el-tooltip{
        height: 40px !important;
      }
    }
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
