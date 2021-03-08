<template>
  <div class="man_look"
       :style="{ height: heights }">
    <div class="man_top">
      <div>
        审核状态：<el-select v-model="value"
                   placeholder="请选择"
                   @change="selectChange"
                   size="medium">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
        <!-- <el-button type="primary" size="medium">确 认</el-button> -->
      </div>
      <el-button type="primary"
                 size="medium"
                 @click="newToen">创建新通证</el-button>
    </div>
    <div class="man_con">
      <el-table :data="tableData"
                border
                style="width: 100%"
                :max-height="tableHeight"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection"
                         width="55"
                         align="center"></el-table-column>
        <el-table-column prop="ptype"
                         label="类型"
                         width="80"
                         align="center">
        </el-table-column>
        <el-table-column prop="style"
                         label="样式"
                         width="80"
                         align="center">
          <template slot-scope="scope">
            <el-image :src="imgUrl + scope.row.style"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name"
                         label="名称"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="num"
                         label="数量"
                         width="80"
                         align="center">
        </el-table-column>
        <el-table-column prop="cate_id"
                         label="适用商品"
                         align="center">
        </el-table-column>
        <el-table-column prop="start_date"
                         label="起始时间"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="end_date"
                         label="终止时间"
                         width="120"
                         align="center">
        </el-table-column>
        <el-table-column prop="rule"
                         label="规则"
                         width="150"
                         align="center">
            <template slot-scope="scope">
              <span v-html="scope.row.rule_name"></span>
            </template>
        </el-table-column>
        <el-table-column prop="redemption"
                         label="领券率"
                         align="center">
            <template slot-scope="scope">
              <span>{{scope.row.receive}}%</span>
            </template>
        </el-table-column>
        <el-table-column prop="verification"
                         label="核销率"
                         align="center">
            <template slot-scope="scope">
              <span>{{scope.row.write}}%</span>
            </template>
        </el-table-column>
        <el-table-column prop="shop_name"
                         label="所属商铺"
                         align="center">
        </el-table-column>
        <el-table-column prop="status_name"
                         label="状态"
                         align="center">
        </el-table-column>

        <el-table-column fixed="right"
                         label="操作"
                         align="center" width="100">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row)"
                       type="text"
                       size="small">查看</el-button> -->
            <el-button @click="del(scope.row)"
                       type="text"
                       style="color: #f00;"
                       size="small">删除</el-button>
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
      <div v-if="value == 0"
           class="btn">
        <el-button type="primary"
                   size="medium" @click="passClick">点击反审核</el-button>
      </div>
      <div v-else-if="value == 1"
           class="btn">
        <el-button type="primary"
                   size="medium" @click="passClick">审核通过</el-button>
        <el-button type="primary"
                   size="medium" @click="nopassClick">深刻不通过</el-button>
      </div>
      <div v-else-if="value == 2"
           class="btn">
        <el-button type="primary"
                   size="medium" @click="passClick">恢复为待审核 </el-button>
      </div>
      <div v-else-if="value == 3"
           class="btn">
        <el-button type="primary"
                   size="medium" @click="passClick">审核通过</el-button>
        <el-button type="primary"
                   size="medium" @click="nopassClick">深刻不通过</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heights: window.innerHeight - 160 + "px",
      tableHeight: null,
      value: "0",
      currentPage: 1,
      page_size: 10,
      totalData: 0,
      imgUrl: 'http://www.bjxmqy.com:9501/',
      options: [
        {
          value: "0",
          label: "已审核"
        },
        {
          value: "1",
          label: "待审核"
        },
        {
          value: "2",
          label: "未通过"
        },
        {
          value: "3",
          label: "已过期"
        }
      ],
      tableData: [],
      selectData: []
    };
  },
  mounted () {
    var inHeight = document.getElementsByClassName("man_top");
    this.tableHeight =
      window.innerHeight - 250 - inHeight[0].clientHeight + "px";
      this.create()
  },
  methods: {
    create() {
      this.$newApi.getPointPageList({  
        page: this.currentPage,
        page_size: this.page_size,
        name: '',
        status: this.value,
        order_type: 'asc',
        order_field: 'id',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    passClick() {
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.id
        }
        else {
          arr += ',' + item.id
        }
      })
      this.$newApi.TZsetBatCheckItem({  
        uid: arr,
        status: this.value,
        ispass: '1',
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
    nopassClick() {
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.id
        }
        else {
          arr += ',' + item.id
        }
      })
      this.$newApi.TZsetBatCheckItem({  
        uid: arr,
        status: this.value,
        ispass: '-1',
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
    del(row) {
      this.$newApi.TZdelPointItem({  
        uid: row.id,
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
    selectChange() {
      this.currentPage = 1
      this.page_size = 10
      this.create()
    },
    newToen () {
      this.$router.push({ path: "/through/throughThe/addManagement" });
    }
  }
};
</script>

<style lang="scss" scoped>
.man_look {
  background: #fff;
  height: 610px;
  border-radius: 4px;
  .man_top {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    padding: 10px 20px;
    box-sizing: border-box;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
  }
  .man_con {
  }
  .btn {
    margin-top: 10px;
  }
}
</style>
