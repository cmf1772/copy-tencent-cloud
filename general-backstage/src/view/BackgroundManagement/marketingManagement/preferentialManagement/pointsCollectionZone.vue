<template>
  <div class="pointsCollectionZone">
    <div class="top_button">
      <div class="top_left">
        <span>商品名称</span>
        <el-input v-model="ps_subject"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>商品编码</span>
        <el-input v-model="ps_code"
                  style="width: 200px"
                  clearable>
        </el-input>
        <span>商品状态</span>
        <el-select clearable
                   style="width:200px;;margin-left:10px;"
                   class="first-child"
                   v-model="approval"
                   placeholder="请选择">
          <el-option label="全部"
                     value="-2"></el-option>
          <el-option label="审核中"
                     value="0"></el-option>
          <el-option label="通过审核"
                     value="1"></el-option>
          <el-option label="拒绝审核"
                     value="-1"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun()">
          搜索
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="商品价格"
                     name="first"></el-tab-pane>
        <el-tab-pane label="上传时间"
                     name="second"></el-tab-pane>
        <el-tab-pane label="商品库存"
                     name="third"></el-tab-pane>
      </el-tabs>
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

          <el-table-column show-overflow-tooltip
                           label="商品信息">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.name"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="积分汇价格">
            <template slot-scope="scope">
              <div>
                <el-input v-model=" scope.row.name"
                          style="width: 200px;border:none"
                          clearable>
                </el-input>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="总库存"
                           width="180">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="发布时间"
                           width="180">
          </el-table-column>
          <el-table-column prop="date"
                           show-overflow-tooltip
                           label="状态"
                           width="180">
          </el-table-column>
          <el-table-column show-overflow-tooltip
                           label="操作"
                           width="150"
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
                           @click="checkTrackQueryFun(scope.$index, scope.row)">删除</el-button>
                <!-- <el-button size="medium"
                           type="text"
                           @click="release"
                           class="blueColor">发布</el-button> -->
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="btootm_paination">
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
  name: 'pointsCollectionZone',

  data () {
    return {
      time: [],
      status: '',
      ps_subject: '',
      ps_code: '',
      approval: '-2',
      options: [
        { value: '', label: '全部' },
        { value: 0, label: '离线' },
        { value: 1, label: '在线' },
        { value: 2, label: '维护' },
        { value: 3, label: '故障' },
        { value: 4, label: '失效' },
      ],
      sName: '',
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      page_size: 10,
      activeName: ''
    }
  },
  mounted() {
    this.create()
  },

  methods: {
    create() {
      this.$newApi.getChangeGdPageList({
        page: this.currentPage,
        page_size: this.page_size,
        ps_subject: this.ps_subject,
        ps_code: this.ps_code,
        approval: this.approval,
        supplier_id: '',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    editor () {
      this.$router.push('/preferentialManagement/editpointsCollectionZone?nameType=修改积分汇专区')
    },

    release () {
      this.$router.push('/commodityInformation/releasepointsCollectionZone?nameType=发布广告')

    },
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
.pointsCollectionZone {
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
