<template>
  <div class="task_look" :style="{ height: heights }">
    <div class="task_top">
      会员ID
      <el-input
        v-model="input"
        placeholder="请输入会员ID"
        size="medium"
      ></el-input>
      <el-button type="primary" icon="el-icon-search" size="medium" @click="search"></el-button>
    </div>
    <div class="task_con">
      <el-table :data="tableData" style="width: 100%" :max-height="tableHeight">
        <el-table-column prop="uid" label="ID" width="150" align="center">
        </el-table-column>
        <el-table-column prop="m_id" label="会员ID" align="center">
        </el-table-column>
        <el-table-column prop="cnt" label="动作" align="center">
        </el-table-column>
        <el-table-column prop="register_date" label="时间"  align="center">
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
      tableData: []
    };
  },
  mounted() {
    var inHeight = document.getElementsByClassName("task_top");
    this.tableHeight =
      window.innerHeight - 210 - inHeight[0].clientHeight + "px";
    this.create()
  },
  methods: {
    create () {
      this.$newApi.getAdminLogPageList({
        page: this.currentPage,
        page_size: this.page_size,
        m_id: this.input,
        order_type: 'desc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.totalData = res.data.total_result
        this.tableData = res.data.items
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
  }
};
</script>

<style lang="scss" scoped>
.task_look {
  display: flex;
  flex-direction: column;
  overflow: auto;
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
  .task_con {
    flex: 1;
    background: #fff;
  }
}
</style>
