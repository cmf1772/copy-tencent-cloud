<template>
  <div class="advertisingManagement">
    <div class="top_button">
      <div class="top_left">
        <span>按类型：</span>
        <el-radio v-model="radio"
                  label="-1">全部</el-radio>
        <el-radio v-model="radio"
                  label="0">商品广告</el-radio>
        <el-radio v-model="radio"
                  label="1">商铺广告</el-radio>
        <el-radio v-model="radio"
                  label="2">其它类型广告</el-radio>
        <span>按位置：</span>
        <el-select clearable
                   style="width:100px;;margin-left:10px;"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <el-select clearable
                   style="width:100px;;margin-left:10px;"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <el-select clearable
                   style="width:100px;;margin-left:10px;"
                   class="first-child"
                   placeholder="请选择">
          <el-option label="普通"
                     value="name"></el-option>
          <el-option label="主站推广 已审核"
                     value="code"></el-option>
          <el-option label="主站推广 未审核"
                     value="code"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          确定
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <div class="form-item">
        <el-button slot="append"
                   type="primary"
                   @click="add"
                   style="margin-right: 20px;width:130px;margin: 10px 0 10px 10px"
                   icon="el-icon-bottom">
          添加推荐
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
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="标题"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="广告信息">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="相关图片">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="所需积分">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="申请人/过期时间">
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
                           @click="edit(scope.$index, scope.row)">修改</el-button>
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
                         :page-sizes="[100, 200, 300, 400]"
                         :page-size="100"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="400">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'advertisingManagement',

  data () {
    return {
      time: [],
      radio: '-1',
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10
    }
  },

  mounted() {
    this.create()
    this.$newApi.getInitData({
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
      })
  },

  methods: {
    create() {
      this.$newApi.getAdPageList({
        page: this.currentPage,
        page_size: this.page_size,
        ad_type: this.radio,
        module: '',
        other_param: '',
        pos: '',
        act: '',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    add () {
      this.$router.push('/advertisingManagement/editadvertisingManagement?nameType=添加广告')

    },
    edit () {
      this.$router.push('/advertisingManagement/editadvertisingManagement?nameType=修改广告')

    },
    look () {
      this.$router.push('/marketHome/details')
    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
  }
}
</script>

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

.advertisingManagement {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

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
