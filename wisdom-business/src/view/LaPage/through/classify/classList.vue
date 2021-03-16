<template>
  <div class="task_look" :style="{ height: heights }">
    <div class="task_top">
      <el-input
        v-model="input"
        placeholder="请输入搜索内容"
        size="medium"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" size="medium" @click="search"></el-button>
    </div>
    <div class="task_con">
      <el-table
        :data="tableData"
        style="width: 100%"
        :max-height="tableHeight"
      >
        <el-table-column
          prop="pic"
          label="封面图片"
          width="150"
          align="center"
        >
          <template slot-scope="scope">
            <el-image :src="imgUrl + scope.row.pic"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="goods_name" label="标题" align="center" width="200">
        </el-table-column>
        <el-table-column
          prop="type_position"
          label="所属分类"
          align="center"
          width="200"
        >
        </el-table-column>
        <el-table-column prop="register_date" label="发布时间" align="center">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="msg_num" label="留言数量" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="medium"
              type="text"
              class=""
              v-if="scope.row.status !== '已审核'"
              @click="shOrdermin(scope.row)"
              >审核</el-button
            >
            <el-button
              size="medium"
              type="text"
              class=""
              v-if="scope.row.status !== '已审核'"
              @click="bhOrdermin(scope.row)"
              >驳回</el-button
            >
            <el-button
              size="medium"
              type="text"
              class="redColor  right20"
              @click="checkTrackQueryFun(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
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
</template>

<script>
export default {
  data() {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      input: "",
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      tableData: [],
      imgUrl: 'http://www.bjxmqy.com:9501/'
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("task_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
      this.create()
  },
  methods: {
    create() {
      this.$newApi.getPostPageList({  
        page: this.currentPage,
        page_size: this.page_size,
        title: this.input,
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    search() {
      this.currentPage = 1
      this.page_size = 10
      this.create()
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
    shOrdermin(row) {
      this.$newApi.FLsetCheckItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.create()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    },
    bhOrdermin(row) {
      this.$newApi.FLsetBackItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.create()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    },
    checkTrackQueryFun(row) {
      this.$newApi.FLdelPostItem({
        uid: row.uid,
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        if(res.data.err_code) {
          this.$message({
            type: 'error',
            message: res.data.err_msg
          })
        }
        else{
          this.create()
          this.$message({
            type: 'success',
            message: '操作成功'
          })
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.task_look {
  background: #fff;
  height: 610px;
  border-radius: 4px;
  .task_top {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
    .el-input {
      width: 300px;
      margin-left: 5px;
    }
  }
}
</style>
