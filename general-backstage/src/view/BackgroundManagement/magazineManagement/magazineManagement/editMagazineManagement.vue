<template>
  <div class="editMagazineManagement">
    <div class="top_button">
      <div class="top_left">
        <span>文章管理</span>
        <el-input placeholder="请输入标题关键字"
                  v-model="keyword"
                  style="width: 200px"
                  clearable>
        </el-input>
        <el-button slot="append"
                   type="primary"
                   @click="search"
                   icon="el-icon-search">
          搜索
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <div class="t-b">
        <span>选择地区</span>
        <el-select v-model="province"
                   clearable
                   placeholder="所在省">
          <el-option label="区域一"
                     value="shanghai"></el-option>
          <el-option label="区域二"
                     value="beijing"></el-option>
        </el-select>
        <el-select v-model="city"
                   clearable
                   placeholder="所在市">
          <el-option label="区域一"
                     value="shanghai"></el-option>
          <el-option label="区域二"
                     value="beijing"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search">
          批量修改地区
        </el-button>
        <el-button slot="append"
                   type="primary"
                   @click="add"
                   style="float: right;margin-right: 20px"
                   icon="el-icon-plus">
          添加文章
        </el-button>
        <br>

        <span style="margin-top: 10px">选择栏目</span>
        <el-select v-model="province"
                   style="margin-top: 10px"
                   clearable>
          <el-option label="区域一"
                     value="shanghai"></el-option>
          <el-option label="区域二"
                     value="beijing"></el-option>
        </el-select>
        <el-select v-model="city"
                   style="margin-top: 10px"
                   clearable>
          <el-option label="区域一"
                     value="shanghai"></el-option>
          <el-option label="区域二"
                     value="beijing"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   style="margin-top: 10px"
                   icon="el-icon-search">
          批量修改栏目
        </el-button> <br>
        <el-button slot="append"
                   type="primary"
                   style="margin-top: 10px"
                   icon="el-icon-top">
          批量置顶
        </el-button>
        <el-button slot="append"
                   type="primary"
                   style="margin-right: 20px"
                   icon="el-icon-bottom">
          取消置顶
        </el-button>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-top">
          批量总置顶
        </el-button>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-bottom"
                   style="margin-right: 20px">
          取消总置顶
        </el-button>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-close">
          批量删除
        </el-button>

      </div>
      <div class="flex">
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
          <el-table-column prop="board_subject"
                           show-overflow-tooltip
                           label="文章标题">
          </el-table-column>
          <el-table-column prop="author"
                           show-overflow-tooltip
                           label="作者"
                           width="180">
          </el-table-column>
          <el-table-column prop="board_hit"
                           show-overflow-tooltip
                           label="点击量">
          </el-table-column>
          <el-table-column prop="register_date"
                           show-overflow-tooltip
                           label="发布时间">
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
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
          <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
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
  name: 'editMagazineManagement',

  data () {
    return {
      city: '',
      province: '',
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      keyword: ''
    }
  },

  methods: {
    editor () {
      this.$router.push('/magazineManagement/addMagazineManagement?nameType=修改资讯')
    },

    add () {
      this.$router.push('/magazineManagement/addMagazineManagement?nameType=添加资讯')
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      this.getArticlePageList()
    },

    handleSizeChange (val) {
      this.page_size = val
      this.getArticlePageList()
    },

    search () {
      this.currentPage = 1
      this.getArticlePageList()
    },

    getArticlePageList () {
      this.$api.getArticlePageList({
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
        page: this.currentPage,
        page_size: this.page_size,
        keyword: this.keyword
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    }
  },

  mounted () {
    this.getArticlePageList()
  }
}
</script>

<style lang="scss" scoped>
.editMagazineManagement {
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

  .t-b {
    margin: 10px 0 10px 10px;
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
