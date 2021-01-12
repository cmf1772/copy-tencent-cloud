<template>
  <div class="circleManagement">
    <div class="flex">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="已审核"
                     name="0"></el-tab-pane>
        <el-tab-pane label="未审核"
                     name="1"></el-tab-pane>
        <el-tab-pane label="已驳回"
                     name="2"></el-tab-pane>
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
                          width="240"
                         label="生活圈名称">
          <template slot-scope="scope">
            <div style="display: flex">
              <div class="img">
                <img :src="$store.state.getUploadUrl + scope.row.c_logo"
                     alt="">
              </div>
              <p> {{scope.row.c_name}}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="c_cat"
                         show-overflow-tooltip
                         label="分类">
        </el-table-column>

        <el-table-column prop="c_tag"
                         show-overflow-tooltip
                         label="标签">
        </el-table-column>
        <el-table-column width="180"
                         show-overflow-tooltip
                         label="参与情况">
          <template slot-scope="scope">
            <div>
              会员数量：{{scope.row.member_num}}
            </div>
            <div>
              话题数量：{{scope.row.comment_num}}
            </div>
            <div>
              评论数量：{{scope.row.topic_num}}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="status"
                         show-overflow-tooltip
                         label="状态">
        </el-table-column>
        <el-table-column prop="od"
                         show-overflow-tooltip
                         label="权重">
        </el-table-column>
        <el-table-column show-overflow-tooltip
                         label="操作"
                         width="120"
                         min-width="60">
          <template slot-scope="scope">
            <div style="white-space: normal;">
              <el-button size="medium"
                         type="text"
                         class="yellowColor"
                         @click="editor(scope.$index, scope.row)">修改</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor"
                         @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor"
                         @click="check(scope.$index, scope.row)"
                         v-if="activeName == 1">审核</el-button>
              <el-button size="medium"
                         type="text"
                         class="redColor"
                         @click="reject(scope.$index, scope.row)"
                         v-if="activeName == 1">驳回</el-button>
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
  name: 'circleManagement',

  data () {
    return {
      time: [],
      sName: '',
      activeName: '0',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      type: 0
    }
  },

  mounted() {
    this.create()
  },

  methods: {
    create () {
       this.$newApi.getCommunityPageList({
        page: this.currentPage,
        page_size: this.page_size,
        keyword: '',
        t: this.activeName,
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    handleClick(val) {
      this.create()
    },
    checkTrackQueryFun(index, row) {
      this.$newApi.delCommunityItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message:res.data.msg
        })
      })
    },
    
    reject(index, row) {
      this.$prompt('', '驳回原因', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        this.$newApi.setBackItem({
          uid: row.uid,
          back_reason: value,
          token: JSON.parse(this.$store.state.token).token,
        }).then(res => {
          this.$message({
            message: res.data.msg
          });  
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消'
        });       
      });
    },
    check(index, row) {
      this.$newApi.setCheckItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.$message({
          message:res.data.msg
        })
      })
    },
    add () {
      this.$router.push('/commodity/editConventionalKnowledge?nameType=添加商品')
    },
    editor (index, row) {
      this.$router.push({path: '/circleManagement/editCircleManagement', query: {
        id: row.uid
      }})
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
          height: 100%;
          cursor: pointer;
          display: flex;
          overflow-x: auto;
          > img {
            width: 100px !important;
            margin-right: 20px;
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

.circleManagement {
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
