<template>
  <div class="knowledgeCommodity">
    <div class="top_button">
      <div class="top_left">
        <span>课程名称</span>
        <el-input v-model="ps_subject"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>课程编码</span>
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
                   @click="batDown"
                   type="primary"
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   icon="el-icon-bottom">
          批量下架
        </el-button>
      </div>
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="课程价格"
                     name="first"></el-tab-pane>
        <el-tab-pane label="上传时间"
                     name="second"></el-tab-pane>
        <el-tab-pane label="课程库存"
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
          <el-table-column prop="if_up"
                           show-overflow-tooltip
                           label="上架情况">
            <template slot-scope="scope">
              <div>
                {{scope.row.if_up === 0 ? '上架' : '下架'}}
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="课程名称">
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
                           label="课程编码">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.goods_code"
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
          <el-table-column show-overflow-tooltip
                           label="所属商铺">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.supplier_id"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="课程价格">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.goods_sale_price"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="课程有效期">
            <template slot-scope="scope">
              <div class="blueColor"
                   @click="modu(scope.row)">
                课程管理
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="course_teacher"
                           show-overflow-tooltip
                           label="授课教师">
          </el-table-column>
          <el-table-column prop="language"
                           show-overflow-tooltip
                           label="语言">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="课时管理">
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
                           @click="delGoodsItem(scope.$index, scope.row)">删除</el-button>
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
  name: 'knowledgeCommodity',

  data () {
    return {
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      activeName: '',
      page_size: 10,
      ps_code: '',
      ps_subject: '',
      allUid: []
    }
  },

  methods: {
    modu (r) {

      this.$router.push({
        path: '/commodityInformation/module',
        query: {
          uid: r.uid
        }
      })
    },

    editor (i, r) {
      // ?nameType=修改课程信息
      this.$router.push({
        path: '/commodityInformation/editknowledgeCommodity',
        query: {
          nameType: '修改课程信息',
          uid: r.uid
        }
      })
    },

    release () {
      this.$router.push('/commodityInformation/releaseknowledgeCommodity?nameType=发布广告')
    },

    sesarchFun () {
      this.getGoodsPageList()
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
    },

    handleSizeChange (val) {
      this.page_size = val
    },

    handleClick (tab, event) {
      console.log(tab, event);
    },

    batDown () {
      if (!this.allUid.length) {
        this.$message({
          message: '请选择数据',
          type: 'warning'
        });
        return false
      }

      this.$api.batDown({
        uid: this.allUid.join(','),
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getGoodsPageList()
      })
    },

    delGoodsItem (i, r) {
      this.$api.delGoodsItem({
        uid: r.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getGoodsPageList()
      })
    },

    getGoodsPageList () {
      this.$api.getGoodsPageList({
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
        page: this.currentPage,
        page_size: this.page_size,
        ps_code: this.ps_code,
        ps_subject: this.ps_subject
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },

    handleSelectionChange (val) {
      this.allUid = val.map(val => { return val.uid })
    }
  },

  mounted () {
    this.getGoodsPageList()
  }
}
</script>

<style lang="scss" scoped>
.knowledgeCommodity {
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
