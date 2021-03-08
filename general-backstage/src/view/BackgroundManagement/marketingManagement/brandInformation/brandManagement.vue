<template>
  <div class="brandManagement">
    <div class="top_button"
         style="border-bottom:solid #f8f8f8 10px">
      <div class="top_left">
        <el-input v-model="sName"
                  style="width: 200px"
                  placeholder="请输入品牌名称"
                  clearable>
        </el-input>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="handleClick()">
          搜索
        </el-button>
      </div>
    </div>
    <div class="flex">
      <div class="form-item">
        <el-button slot="append"
                   type="primary"
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   @click="add"
                   icon="el-icon-plus">
          添加品牌
        </el-button>
      </div>
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="全部"
                     name="0"></el-tab-pane>
        <el-tab-pane label="未审核品牌"
                     name="-1"></el-tab-pane>
        <el-tab-pane label="已审核品牌"
                     name="1"></el-tab-pane>
      </el-tabs>
      <el-table :data="tableData"
                stripe
                style="width: 100%">
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
                         width="180"
                         label="LOGO">
          <template slot-scope="scope">
            <div class="img">
              <img :src="scope.row.logo"
                   alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="brandname"
                         show-overflow-tooltip
                         label="品牌名称">
        </el-table-column>
        <el-table-column prop="weburl"
                         show-overflow-tooltip
                         label="网址">
          <template slot-scope="scope">
            <a class="blueColor" :href="scope.row.weburl">
              {{scope.row.weburl}}
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="brief"
                         width="180"
                         show-overflow-tooltip
                         label="品牌描述">
        </el-table-column>
        <el-table-column prop="train"
                         show-overflow-tooltip
                         label="显示顺序">
        </el-table-column>
        <el-table-column prop="isCheck"
                         show-overflow-tooltip
                         label="验证">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="120"
                         min-width="120">
          <template slot-scope="scope">
            <div>
              <el-button size="medium"
                         type="text"
                         class="yellowColor right20"
                         @click="editor(scope.row)">修改</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor"
                         @click="checkTrackQueryFun(scope.row)">删除</el-button>
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
</template>

<script>
export default {
  name: 'brandManagement',

  data () {
    return {
      time: [],
      sName: '',
      activeName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getBrandPageList({
        page: this.currentPage,
        page_size: this.page_size,
        brandname: this.sName,
        isCheck: this.activeName == 0 ? '' : this.activeName,
        order_type: 'asc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    handleClick() {
      this.currentPage = 1
      this.create()
    },
    add () {
      this.$router.push('/brandInformation/editbrandManagement?uid=add')
    },
    editor (row) {
      this.$router.push('/brandInformation/editbrandManagement?uid=' + row.id)
    },
    checkTrackQueryFun(row) {
      this.$newApi.delBrandItem({
        uid: row.id,
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
/deep/ .el-table__body-wrapper {
  .el-table__body {
    .el-table__row {
      .el-tooltip {
        min-height: 100px;
        .img {
          width: 100%;
          cursor: pointer;
          display: flex;
          overflow-x: auto;
          > img {
            width: 100px !important;
            height: 100px;
            margin-right: 20px;
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

.brandManagement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
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
