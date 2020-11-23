<template>
  <div class="restMoneyManageList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">全部线索</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <el-button type="primary"
                 style="width: 100px; margin-bottom: 10px"
                 size="mini">添加线索</el-button>
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <p class="minText mr ">姓名：</p>
            <el-input placeholder="请输入订单编号"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">手机号：</p>
            <el-input placeholder="请输入订单编号"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">来源：</p>
            <el-cascader v-model="value"
                         :options="options"
                         style="width: 250px"
                         size="mini"
                         @change="handleChange"></el-cascader>
          </div>
        </div>
        <div class="mt flexRC">
          <p class="minText mr ">课程顾问：</p>
          <el-select v-model="search"
                     clearable
                     class="mr ml"
                     size="mini"
                     placeholder="请选择评价星级">
            <el-option label="全部"
                       value="1">
            </el-option>
            <el-option label="一星"
                       value="2">
            </el-option>
            <el-option label="二星"
                       value="3">
            </el-option>
            <el-option label="三星"
                       value="4">
            </el-option>
            <el-option label="四星"
                       value="5">
            </el-option>
            <el-option label="五星"
                       value="6">
            </el-option>
          </el-select>
          <p class="minText mr ">标签：</p>
          <el-cascader v-model="value"
                       :options="options"
                       style="width: 250px"
                       size="mini"
                       @change="handleChange"></el-cascader>
        </div>
        <div class="mt flexRC">
          <p class="minText mr ">更新动态时间：</p>
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
        <div class="mt flexRC">
          <p class="minText mr ">创建时间：</p>
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
        <div class="mt flexRC">
          <p class="minText mr ">回访时间：</p>
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

          <el-button size="mini"
                     class="mr ml">筛选</el-button>
          <el-button size="mini"
                     class="mr ml">重置筛选条件</el-button>
        </div>
      </div>

      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="全部 0"
                     name="first"></el-tab-pane>
        <el-tab-pane label="待跟进 0"
                     name="second"></el-tab-pane>
        <el-tab-pane label="待邀约 0"
                     name="third"></el-tab-pane>
        <el-tab-pane label="待试听 0"
                     name="fourth"></el-tab-pane>
        <el-tab-pane label="已试听 0"
                     name="fourths"></el-tab-pane>
        <el-tab-pane label="已成交 0"
                     name="fourthss"></el-tab-pane>
      </el-tabs>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="阶段">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="来源">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="标签">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="回访时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="试听时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="创建时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="最近动态">
          </el-table-column>
        </el-table>
      </div>

      <div class="btootm_paination c_box">
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
</template>

<script>
export default {
  name: 'restMoneyManageList',
  data () {
    return {
      activeName: 'first',
      value: true,
      tableData: [],
      currentPage: 1, //当前页数
      totalData: 1, //总页数
      date: '1',
      search: '',
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value: [],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'form',
          label: 'Form',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }, {
        value: 'ziyuan',
        label: '资源',
        children: [{
          value: 'axure',
          label: 'Axure Components'
        }, {
          value: 'sketch',
          label: 'Sketch Templates'
        }, {
          value: 'jiaohu',
          label: '组件交互文档'
        }]
      }]
    }
  },
  methods: {
    // 分页
    handleCurrentChangeFun (val) {
      this.currentPage = val;
      tableDataRenderFun(this);
    },

    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },

    handleChange (value) {
      console.log(value);
    },

    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>