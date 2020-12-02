<template>
  <div class="manage bs flexColumn"
       style="margin: 0">
    <div class="flexJC">
      <p class="text">商品管理</p>
    </div>
    <div class="bg_color minText"
         style="padding: 10px">
      搬家工具，支持拼多多、京东、淘宝、天猫等平台一键搬家。 <span class="minText s blueColor">立即搬家</span>
    </div>
    <div class="flexColumn conent_box"
         style="flex: 1">
      <el-button type="primary"
                 style="width: 100px; margin-bottom: 10px"
                 size="mini">发布商品</el-button>
      <div class="c_box">
        <div class="flexJC">
          <div class="flexRC">
            <p class="minText mr ">商品名称：</p>
            <el-input placeholder="请输入订单编号"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">商品分组：</p>
            <el-input placeholder="请输入订单编号"
                      style="width: 250px;"
                      size="mini"
                      v-model="search"
                      class="input-with-select ml mr">
            </el-input>
          </div>
          <div class="flexRC">
            <p class="minText mr ">商品类型：</p>
            <el-select v-model="search"
                       clearable
                       class="mr ml"
                       size="mini"
                       placeholder="">
              <el-option label="全部"
                         value="1">
              </el-option>
              <el-option label="实物商品"
                         value="2">
              </el-option>
              <el-option label="虚拟商品"
                         value="3">
              </el-option>
              <el-option label="电子卡券"
                         value="4">
              </el-option>
              <el-option label="付费等级"
                         value="5">
              </el-option>
              <el-option label="付费会员卡"
                         value="6">
              </el-option>
              <el-option label="酒店商品"
                         value="7">
              </el-option>
              <el-option label="周期购商品"
                         value="8">
              </el-option>
              <el-option label="分销商品"
                         value="9">
              </el-option>
              <el-option label="海淘商品"
                         value="10">
              </el-option>
              <el-option label="付费优惠券"
                         value="11">
              </el-option>
            </el-select>
          </div>
        </div>
        <div class="flexJC mt">
          <div class="flexRC">
            <p class="minText mr ">售量：</p>
            <div class="flexRC">
              <el-input placeholder="请输入订单编号"
                        style="width: 120px;"
                        size="mini"
                        v-model="search"
                        class="input-with-select ml mr">
              </el-input>
              -
              <el-input placeholder="请输入订单编号"
                        style="width: 120px;"
                        size="mini"
                        v-model="search"
                        class="input-with-select ml mr">
              </el-input>
            </div>
          </div>

          <div class="flexRC">
            <p class="minText mr ">价格：</p>
            <div class="flexRC">
              <el-input placeholder="请输入订单编号"
                        style="width: 120px;"
                        size="mini"
                        v-model="search"
                        class="input-with-select ml mr">
                <template slot="append">元</template>
              </el-input>
              -
              <el-input placeholder="请输入订单编号"
                        style="width: 120px;"
                        size="mini"
                        v-model="search"
                        class="input-with-select ml mr">
                <template slot="append">元</template>
              </el-input>
            </div>
          </div>
          <div class="flexRC">
            <p class="minText mr ">商品类目：</p>
            <el-cascader v-model="value"
                         :options="options"
                         size="mini"
                         @change="handleChange"></el-cascader>
          </div>
        </div>

        <div class="flexRC mt">
          <p class="minText mr ">库存扣减方式：</p>
          <el-select v-model="search"
                     clearable
                     class="mr ml"
                     size="mini"
                     placeholder="">
            <el-option label="全部"
                       value="1">
            </el-option>
            <el-option label="拍下扣减库存"
                       value="2">
            </el-option>
            <el-option label="付款扣减库存"
                       value="3">
            </el-option>
          </el-select>
        </div>
        <div class="mt flexRC">

          <el-button size="mini"
                     class="mr ml">筛选</el-button>
          <el-button size="mini"
                     class="mr ml">导出</el-button>

          <p class="minText blueColor s ml mr">查看已导出列表</p>
          <p class="minText blueColor s ml mr">重置筛选条件</p>

        </div>
      </div>

      <el-tabs v-model="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="全部"
                     name="first"></el-tab-pane>
        <el-tab-pane label="销售中"
                     name="second"></el-tab-pane>
        <el-tab-pane label="已售罄"
                     name="third"></el-tab-pane>
        <el-tab-pane label="仓库中"
                     name="third"></el-tab-pane>
      </el-tabs>

      <div class="table">
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
          <el-table-column prop="name"
                           show-overflow-tooltip
                           label="商品名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="价格(元)">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="访问量">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="库存">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="销量">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="序号">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="创建时间">
          </el-table-column>
          <el-table-column prop="address"
                           show-overflow-tooltip
                           label="商品状态">
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
  name: 'manage',
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