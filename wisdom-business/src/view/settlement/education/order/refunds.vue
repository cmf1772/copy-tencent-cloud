<template>
  <div class="restMoneyManageList bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">售后维权</p>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <div class="c_box">

        <div class="flexJC mt">
          <div class="flexRC">
            <p class="minText mr ">订单编号：</p>
            <el-input placeholder="请输入"
                      style="width: 200px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">下单时间：</p>
            <el-date-picker v-model="value1"
                            style="width: 250px"
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
        </div>
        <div class="flexJC mt">
          <div class="flexRC">
            <p class="minText mr ">售后编号：</p>
            <el-input placeholder="请输入"
                      style="width: 200px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">退款类型：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="售中退款"
                         value="2">
              </el-option>
              <el-option label="售后退款"
                         value="3">
              </el-option>
            </el-select>
          </div>
          <div class="flexRC">
            <p class="minText mr ">客服介入：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="未介入"
                         value="2">
              </el-option>
              <el-option label="介入中"
                         value="3">
              </el-option>
              <el-option label="介入结束"
                         value="4">
              </el-option>
            </el-select>
          </div>

        </div>
        <div class="flexJC mt">
          <div class="flexRC">
            <p class="minText mr ">售后方式：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="仅退款"
                         value="2">
              </el-option>
              <el-option label="退货退款"
                         value="3">
              </el-option>
              <el-option label="换货"
                         value="4">
              </el-option>
            </el-select>
          </div>
          <div class="flexRC">
            <p class="minText mr ">发货状态：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="未发货"
                         value="2">
              </el-option>
              <el-option label="已发货"
                         value="3">
              </el-option>
            </el-select>
          </div>
          <div class="flexRC">
            <p class="minText mr ">售后状态：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="售后处理中"
                         value="2">
              </el-option>
              <el-option label="售后申请待商家处理"
                         value="3">
              </el-option>
              <el-option label="商家不同意售后申请，待买家处理"
                         value="4">
              </el-option>
              <el-option label="商家已同意售后申请，待买家处理"
                         value="5">
              </el-option>
              <el-option label="买家已退货，待商家确认收货"
                         value="6">
              </el-option>
              <el-option label="商家拒绝收货，待买家处理"
                         value="7">
              </el-option>
              <el-option label="商家已发货，待买家确认收货"
                         value="8">
              </el-option>
              <el-option label="售后成功"
                         value="9">
              </el-option>
              <el-option label="售后关闭"
                         value="10">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="flexJC mt">
          <div class="flexRC">
            <p class="minText mr ">物流编号：</p>
            <el-input placeholder="请输入"
                      style="width: 200px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">退货物流：</p>
            <el-select v-model="search"
                       clearable
                       class="ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="未签收"
                         value="2">
              </el-option>
              <el-option label="已签收"
                         value="3">
              </el-option>
              <el-option label="无物流信息"
                         value="3">
              </el-option>
            </el-select>
          </div>
          <div class="flexRC">
            <p class="minText mr ">商品名称：</p>
            <el-input placeholder="请输入"
                      style="width: 200px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select mr">
            </el-input>
          </div>
        </div>

      </div>

      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="全部"
                     name="first"></el-tab-pane>
        <el-tab-pane label="待商家处理"
                     name="second"></el-tab-pane>
        <el-tab-pane label="待商家收货"
                     name="third"></el-tab-pane>
        <el-tab-pane label="待买家处理"
                     name="fourth"></el-tab-pane>
        <el-tab-pane label="客服介入中"
                     name="fourths"></el-tab-pane>
      </el-tabs>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="商品"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="发货状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="订单金额(元)">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="退款金额(元)">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="申请时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="超时时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="售后状态">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="操作">
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