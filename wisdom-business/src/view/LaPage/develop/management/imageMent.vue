<template>
  <div class="image_ment"
       :style="{ height: heights }">
     <div class="man_top">
      <el-button type="primary"
                 size="medium"
                 @click="newToen">删除选定</el-button>
    </div>
    <div class="image_table">
      <el-table ref="multipleTable"
                class="table_ima"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                :max-height="tableHeight"
                border
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55"> </el-table-column>
        <el-table-column label="图片"
                         align="center"
                         width="400">
          <template slot-scope="scope">
            <el-image :src="$store.state.imgUrl + scope.row.path"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="path"
                         label="图片路径"
                         align="center">
        </el-table-column>
        <el-table-column label="操作"
                         align="center" width="80">
          <template slot-scope="scope">
            <el-button size="medium"
                       type="text"
                       class="redColor  right20"
                       @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: window.innerHeight - 240 + "px",
      imgUrl: 'http://www.bjxmqy.com:9501/',
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      tableData: [],
      selectData: []
    };
  },
  mounted() {
    this.create()
  },
  methods: {
    create() {
      this.$newApi.getPicsPageList({
        page: 1,
        page_size: 100000,
        marker: '',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.list
      })
    },
    handleDelete (row) {
      this.$newApi.TPdelLinkItem({
        path: row.path,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.err_msg
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
    newToen() {
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.path
        }
        else {
          arr += ',' + item.path
        }
      })
      this.$newApi.TPbatDelPicsItem({
        path: arr,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
            this.$message({
              type: 'error',
              message: res.data.err_msg
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
    handleSelectionChange (row) {
      this.selectData = row
    }
  }
};
</script>

<style lang="scss" scoped>
.man_top{
  margin: 10px 0;
  padding: 10px 0;
  background: #fff;
  text-align: right;
  .el-button{
    margin-right: 20px;
  }
}
.image_ment {
  overflow: auto;
  .image_table {
    .table_ima {
      /deep/ .el-image {
        width: 50%;
        height: 200px;
      }
    }
  }
}
</style>
