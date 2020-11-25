<template>
  <div class="student flexColumn">
    <p class="text">家校圈</p>
    <el-tabs v-model="activeName"
             tab-position="left"
             style="flex: 1"
             @tab-click="handleClick">
      <el-tab-pane label="动态管理"
                   name="first">
        <div class="conent_box flexColumn"
             style="height: 100%">

          <el-button size="mini"
                     style="width: 100px"
                     class="mr">发动态</el-button>
          <div class="flexColumn conent_box"
               ref="c_box"
               style="flex: 1">
            <div class="c_box mb">
              <div class="flexJC">
                <div class="flexRC">
                  <p class="minText mr ">动态发布时间：</p>
                  <el-date-picker v-model="value1"
                                  style="width: 320px"
                                  size="mini"
                                  class="mr"
                                  type="datetimerange"
                                  :picker-options="pickerOptions"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  align="right">
                  </el-date-picker>
                </div>
                <div class="flexRC">
                  <p class="minText mr ">发布人身份：</p>
                  <el-select v-model="search"
                             clearable
                             class="mr ml"
                             size="mini"
                             placeholder="">
                    <el-option label="全部"
                               value="1">
                    </el-option>
                    <el-option label="老师"
                               value="2">
                    </el-option>
                    <el-option label="客户"
                               value="3">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="flexRC mt">
                <el-button size="mini"
                           class="mr">筛选</el-button>
              </div>
            </div>

            <div class="table"
                 style="flex: 1">
              <el-table :data="tableData"
                        :style="{'width': width + 'px'}">
                <el-table-column prop="name"
                                 fixed
                                 show-overflow-tooltip
                                 label="动态内容"
                                 width="180">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltips
                                 label="发布人">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="发布时间">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="可见范围">
                </el-table-column>
                <el-table-column prop="address"
                                 show-overflow-tooltip
                                 label="操作">
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
      </el-tab-pane>
      <el-tab-pane label="设置"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <el-form ref="form"
                   :model="form"
                   label-width="120px">
            <el-form-item label="家校圈名称：">
              <el-input v-model="form.name"></el-input>
              <p class="minText">在用户个人中心将以设定的名称显示家校圈</p>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="不允许用户发布动态"
                          class="mt mb"></el-radio>
                <p class="minText">仅学校的管理员和老师可发布动态</p>
                <el-radio label="允许正式学员、家长发布动态"
                          class="mt mb"></el-radio>
                <p class="minText">仅关联了在读学员的客户可发表动态</p>
                <el-radio label="允许所有人发布动态"
                          class="mt mb"></el-radio>
                <p class="minText">所有用户访问家校圈后可发布动态</p>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region"
                         placeholder="请选择活动区域">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="发布内容限制：">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="允许用户上传图片"
                             name="type"></el-checkbox>
                <el-checkbox label="允许用户上传视频"
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      type: '1',
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
      width: 0,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },

    onSubmit () {
      console.log('submit!');
    }
  },
  mounted () {
    this.width = this.$refs.c_box.clientWidth
  }
}
</script>

<style lang="scss">
.el-tabs .el-tabs__content {
  height: 100%;
  .el-tab-pane {
    height: 100%;
  }
}
</style>
<style lang="scss" scoped>
</style>