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
        <el-select v-model="moduleOne" placeholder="请选择活动区域" style="width: 10%;" @change="configChange">
          <el-option v-for="(item, index) in configData" :key="index" :label="item.module" :value="item.module"></el-option>
        </el-select>
        <el-select v-model="moduleTwo" placeholder="请选择活动区域" style="width: 10%;">
          <el-option v-for="(item, index) in configTwoData" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <el-select v-model="moduleThree" placeholder="请选择活动区域" style="width: 10%;">
          <el-option v-for="(item, index) in configThreeData" :key="index" :label="item" :value="item"></el-option>
        </el-select>
        <el-button slot="append"
                   type="primary"
                   icon="el-icon-search"
                   @click="sesarchFun">
          确定
        </el-button>
      </div>
    </div>
    <div class="table_bottom">
      <div class="form-item">
        <el-button slot="append"
                   type="primary"
                   @click="add"
                   style="margin: 10px 0 10px 10px">
          添加推荐
        </el-button>

        <el-button slot="append"
                   type="primary"
                   @click="selectDel"
                   style="margin: 10px 0 10px 10px">
          删除选定
        </el-button>
      </div>
      <div class="flex">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column prop="title"
                           show-overflow-tooltip
                           label="标题"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="广告信息">
            <template slot-scope="scope">
              <div>
                前台显示：{{scope.row.tip}}
              </div>
              <div>
                位置：{{scope.row.module}} > {{scope.row.other_param}} > {{scope.row.pos}}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="相关图片">
            <template slot-scope="scope">
              <el-image
              style="width: 100px; height: 100px"
              :src="scope.row.pic"></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="所需积分">
            <template slot-scope="scope">
                {{scope.row.price}}积分/天
            </template>
          </el-table-column>
          <el-table-column prop="expire"
                           show-overflow-tooltip
                           label="申请人/过期时间">
            <template slot-scope="scope">
              <span v-if="scope.row.expire == '未被申请'">{{scope.row.expire}}</span>
              <span v-else>{{scope.row.m_id}}</span>
            </template>
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
                           @click="edit(scope.row)">修改</el-button>
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
      page_size: 10,
      configData: [],
      configTwoData: [],
      configThreeData: [],
      moduleOne: '',
      moduleTwo: '',
      moduleThree: '',
    }
  },

  mounted() {
    this.create()
    this.$newApi.getInitData({
      token: JSON.parse(this.$store.state.token).token,
    }).then(res => {
      this.configData = res.data.ad_config
    })
  },

  methods: {
    create() {
      this.$newApi.getAdPageList({
        page: this.currentPage,
        page_size: this.page_size,
        ad_type: this.radio,
        module: this.moduleOne,
        other_param: String(this.moduleTwo),
        pos: this.moduleThree,
        act: 'show',
        order_type: 'asc',
        order_field: 'uid',
        token: JSON.parse(this.$store.state.token).token,
      }).then(res => {
        this.tableData = res.data.items
        this.totalData = res.data.total_result
      })
    },
    checkTrackQueryFun(row) {
      this.$newApi.delRcmAdItem({
        uid: row.uid,
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

    handleSelectionChange(row) {
      this.selectData = row
    },
    selectDel() {
      if(this.selectData.length == 0) {
        return this.$message({
          type: 'error',
          message: '请选择要删除的数据'
        })
      }
      let arr = ''
      this.selectData.forEach((item, index) => {
        if(index == 0) {
          arr = item.uid
        }
        else {
          arr += ',' + item.uid
        }
      })
      this.$newApi.batDelRcmAdItem({
        uid: arr,
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

    configChange() {
      this.moduleTwo = ''
      this.moduleThree = ''
      if(this.configData[this.moduleOne]) {
        this.configTwoData =  this.configData[this.moduleOne].other_param
        this.configThreeData = this.configData[this.moduleOne].pos
      }
    },

    sesarchFun() {
      this.currentPage = 1
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


    add () {
      this.$router.push('/advertisingManagement/editadvertisingManagement?uid=add')

    },
    edit (row) {
      this.$router.push('/advertisingManagement/editadvertisingManagement?uid=' + row.uid)

    },
    look () {
      this.$router.push('/marketHome/details')
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
.el-table{
  /deep/ .el-tooltip{
    height: 100px !important;
  }
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
