<template>
  <div class="student flexColumn">
    <p class="text">签到码</p>
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="签到码设置"
                   name="first">
        <div class="conent_box flex"
             style="height: 100%">
          <div class="left flexC">
            <el-button type="primary"
                       size="mini">主要按钮</el-button>
            <img src="@/assets/img/ewms.png"
                 style="width: 250px"
                 class="mt"
                 alt="">
            <div class="flexJC mt">
              <el-button type="primary"
                         size="mini"
                         plain>下载签到码模版</el-button>
              <el-button type="primary"
                         size="mini"
                         plain>下载二维码</el-button>
              <el-button type="primary"
                         size="mini"
                         plain>复制链接</el-button>
            </div>
          </div>
          <div class="right">
            <el-form ref="form"
                     :model="form"
                     label-width="100px">
              <el-form-item label="二维码样式:">
                <el-radio-group v-model="form.resource">
                  <el-radio label="显示店铺LOGO"></el-radio>
                  <el-radio label="不显示LOGO"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="扫码引导文案:">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="机构名称:">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="签到后推荐:">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="加粉推广"
                               name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary"
                           @click="onSubmit">保存</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="签到记录"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexJC">
            <p class="text">
              学员查询
            </p>
          </div>
          <div class="flexColumn conent_box"
               style="flex: 1">
            <div class="c_box">
              <div class="flex">
                <el-button size="mini">新增标签</el-button>
                <el-button size="mini">批量删除</el-button>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        stripe
                        style="width: 100%">
                <el-table-column prop="name"
                                 show-overflow-tooltip
                                 label="门店标签"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="使用门店数量">
                </el-table-column>
                <el-table-column show-overflow-tooltip
                                 label="操作"
                                 width="270"
                                 min-width="60">
                  <template slot-scope="scope">
                    <div>
                      <el-button size="medium"
                                 type="text"
                                 class="blueColor right20"
                                 @click="look(scope.$index, scope.row)">编辑</el-button>
                      <el-button size="medium"
                                 type="text"
                                 class="blueColor right20"
                                 @click="edit(scope.$index, scope.row)">投放</el-button>
                      <el-button size="medium"
                                 type="text"
                                 class="blueColor"
                                 @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button>
                      <el-button size="medium"
                                 type="text"
                                 class="blueColor"
                                 @click="checkTrackQueryFun(scope.$index, scope.row)">分配门店</el-button>
                      <!-- <el-button size="medium"
                           type="text"
                           class="redColor"
                           @click="checkTrackQueryFun(scope.$index, scope.row)">打标签</el-button> -->
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>

            <div class="btootm_paination c_box mt">
              <!-- <el-pagination @current-change="handleCurrentChangeFun"
                         :hide-on-single-page="false"
                         :current-page="currentPage"
                         layout="total, jumper,  ->, prev, pager, next"
                         :total="totalData"></el-pagination> -->
              <el-pagination @size-change="handleSizeChange"
                             :current-page="currentPage"
                             :page-sizes="[100, 200, 300, 400]"
                             :page-size="100"
                             layout="total, sizes, prev, pager, next, jumper"
                             :total="400">
              </el-pagination>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      currentPage: '1',
      activeName: '',
      type: '1',
      tableData: [],
      state: [{
        value: '1',
        label: '更多'
      }, {
        value: '2',
        label: '修改装修权限'
      }, {
        value: '3',
        label: '修改线上库存模式'
      }, {
        value: '4',
        label: '修改线下库存模式'
      }, {
        value: '5',
        label: '修改门店权限'
      }, {
        value: '6',
        label: '修改发票模版'
      }, {
        value: '7',
        label: '修改分成方案'
      }],
      width: 0
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    onSubmit () {
      console.log('submit!');
    },
    currentPage () {

    },
    handleSizeChange () {

    },

    set (res) {
      this.$nextTick(() => {
        this.activeName = res
      })
    }
  },
  mounted () {
    this.set(this.$route.query.type)
    this.width = this.$refs.c_box.clientWidth
  },

  watch: {
    '$route' (to, form) {
      this.set(to.query.type)
    }
  }
}
</script>

<style lang="scss">
.el-tabs .el-tabs__content {
  flex: 1;
  .el-tab-pane {
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
.left {
  width: 35%;
  border-right: solid 1px #ccc;
}
.right {
  flex: 1;
}
</style>