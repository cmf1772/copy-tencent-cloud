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
                   @change="changeCity"
                   placeholder="所在省">
          <el-option v-for="(item, index) in $store.state.cityList"
                     :key="index"
                     :label="item.name"
                     :value="item.id"></el-option>
        </el-select>
        <el-select v-model="city"
                   clearable
                   placeholder="所在市">
          <el-option v-for="(item, index) in $store.state.areaList"
                     :key="index"
                     :label="item.name"
                     :value="item.id"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   @click="batModifyCity"
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
        <el-select v-model="board_code"
                   value-key="uid"
                   @change="changePageList"
                   clearable>
          <el-option v-for="item in pageList"
                     :key="item.uid"
                     :label="item.board_title"
                     :value="item"></el-option>
        </el-select>
        <el-select v-model="board_name_code"
                   value-key="uid"
                   clearable>
          <el-option v-for="item in pageSubList"
                     :key='item'
                     :label="item.board_title"
                     :value="item"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   @click="batModifyCode"
                   style="margin-top: 10px"
                   icon="el-icon-search">
          批量修改栏目
        </el-button> <br>
        <el-button slot="append"
                   type="primary"
                   style="margin-top: 10px"
                   @click="batIsTop(1)"
                   icon="el-icon-top">
          批量置顶
        </el-button>
        <el-button slot="append"
                   type="primary"
                   @click="batIsTop(2)"
                   style="margin-right: 20px"
                   icon="el-icon-bottom">
          取消置顶
        </el-button>
        <el-button slot="append"
                   @click="batIsTop(3)"
                   type="primary"
                   icon="el-icon-top">
          总置顶
        </el-button>
        <el-button slot="append"
                   type="primary"
                   @click="batIsTop(4)"
                   icon="el-icon-bottom"
                   style="margin-right: 20px">
          取消总置顶
        </el-button>
        <el-button slot="append"
                   type="primary"
                   @click="batDel"
                   icon="el-icon-close">
          批量删除
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
      keyword: '',
      allUid: [],
      pageList: [],
      pageSubList: [],
      board_code: '',
      board_name_code: ''
    }
  },

  methods: {
    // 单独删除
    checkTrackQueryFun (index, row) {
      this.$api.delArticleItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getArticlePageList()
      })
    },

    // 批量删除
    batDel () {
      if (!this.allUid.length) {
        this.$message({
          message: '请选择数据',
          type: 'warning'
        });
        return false
      }

      this.$api.batDel({
        uid: this.allUid.join(','),
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getArticlePageList()
      })
    },

    // 置顶成功 取消置顶
    batIsTop (tager) {
      if (!this.allUid.length) {
        this.$message({
          message: '请选择数据',
          type: 'warning'
        });
        return false
      }

      this.$api.batIsTop({
        uid: this.allUid.join(','),
        doit: tager,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getArticlePageList()
      })
    },

    //批量修改栏目
    batModifyCode () {
      this.$api.batModifyCode({
        uid: this.allUid.join(','),
        board_name_code: this.board_name_code.board_name_code + '',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getArticlePageList()
      })
    },

    // 批量修改地址
    batModifyCity () {
      if (!this.allUid.length) {
        this.$message({
          message: '请选择数据',
          type: 'warning'
        });
        return false
      }
      this.$api.batModifyCity({
        uid: this.allUid.join(','),
        province: this.province + '',
        city: this.city + '',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          showClose: true,
          message: res.data.msg,
          type: 'success'
        });
        this.getArticlePageList()
      })
    },

    // 获取一级栏目
    getBoardPageList () {
      this.$api.getBoardList({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.pageList = res.data
      })
    },

    // 获取二级菜单
    changePageList (res) {
      this.board_name_code = ''
      this.$api.getBoardSubList({
        token: JSON.parse(this.$store.state.token).token,
        uid: this.board_code.uid
      }).then(res => {
        this.pageSubList = res.data
      })
    },

    changeCity () {
      this.city = ''
      this.$store.commit('GET_CITY', { id: this.province, name: 'areaList' })
    },

    editor (index, row) {
      this.$router.push(`/magazineManagement/addMagazineManagement?nameType=修改资讯&uid=${row.uid}&ps_name=${this.$route.query.ps_name}`)
    },

    add () {
      this.$router.push(`/magazineManagement/addMagazineManagement?nameType=添加资讯&ps_name=${this.$route.query.ps_name}`)
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
        keyword: this.keyword,
        ps_name: this.$route.query.ps_name
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
    this.getArticlePageList()
    this.getBoardPageList()
    this.$store.commit('GET_CITY')
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
