<template>
  <div class="revenueProfile flexColumn">
    <p class="minText">营收概况</p>
    <div class="conent_box"
         style="flex: 1">
      <div class="c_box flex_column">
        <div class="flexRC">
          <el-date-picker v-model="value1"
                          type="datetimerange"
                          range-separator="至"
                          size="mini"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
          <el-select v-model="value"
                     clearable
                     class="ml"
                     size="mini"
                     placeholder="请选择">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
          <el-button size="mini"
                     class="ml">全部</el-button>
          <el-button size="mini">线上网店</el-button>
          <el-button size="mini">线下门店</el-button>
        </div>
        <el-divider></el-divider>
        <p class="minText mb"><span class="mr">数据解读</span> 该数据为您显示：</p>
        <p class="minText mb">1、仅可统计到通过微盟系统获得的所有收入及退款</p>
        <p class="minText">2、今日数据为当日0点后的实时数据；近7天、近30天数据中含今日数据</p>
      </div>
      <div class="c_box flex_column">
        <div class="flexJC">
          <p class="text s">收入情况</p>
          <p class="minText s"
             style="color: #2589ff !important">财务明细</p>
        </div>
        <el-divider></el-divider>
        <div class="box">
          <div class="item mt mb">
            <p class="text">实际收入</p>
            <p style="font-weight: 600;color: #333;font-size: 25px">0.00 <span class="minText">元</span></p>
            <p class="minText">环比 <span style="color: #FFB025;">暂无</span></p>
          </div>
          <div class="item mt mb">
            <p class="text">收入金额</p>
            <p style="font-weight: 600;color: #333;font-size: 25px">0.00 <span class="minText">元</span></p>
            <p class="minText">环比 <span style="color: #FFB025;">暂无</span></p>
          </div>
          <div class="item mt mb">
            <p class="text">支出金额</p>
            <p style="font-weight: 600;color: #333;font-size: 25px">0.00 <span class="minText">元</span></p>
            <p class="minText">环比 <span style="color: #FFB025;">暂无</span></p>
          </div>
        </div>
      </div>
      <div class="c_box flex_column">
        <div class="flexJC">
          <p class="text s">营收趋势</p>
          <p class="minText s"
             style="color: #2589ff !important">交易概览</p>
        </div>
        <el-divider></el-divider>
        <div id="echarts">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      options: [{
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '智慧零售'
      }],
      value: ''
    };
  },

  methods: {
    getEcarts () {
      let myChartOne = this.$echarts.init(document.getElementById('echarts'))
      // 绘制图表
      myChartOne.setOption({
        title: {
          text: '营收趋势',
          x: 'center',
          textStyle: {//标题内容的样式
            color: '#282828',//京东红 
            fontWeight: "normal",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
            fontFamily: "MicrosoftYaHei",//主题文字字体，默认微软雅黑
            fontSize: 16//主题文字字体大小，默认为18px
          }
        },
        tooltip: {
          //trigger触发类型 axis 坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用。
          trigger: 'axis',
          //坐标轴指示器配置项。 类型是 十字 指示器颜色是#999
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: [{
          data: ['收入金额', '支出金额', '实际收入'],
          left: '8%',
          top: '6%',
          itemWidth: 20,  // 
          itemHeight: 3, // 设置高度
        }],
        xAxis: [
          {
            type: 'category',
            data: ['10月7号', '10月8号', '10月9号', '10月10号', '10月11号', '10月12号', '10月13号', '10月14号', '10月15号', '10月16号'],
            //鼠标移入 显示阴影效果
            axisPointer: {
              type: 'shadow'
            },
            axisTick: {       //X轴刻度线
              "show": false
            },
            axisLabel: {//x轴文字的配置
              show: true,
              textStyle: {
                color: "#333333",
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ccc",
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            // min: 0,
            // max: 6,
            // interval: 1,
            splitLine: { show: false },//去除网格线
            axisTick: {       //y轴刻度线
              "show": false
            },
            nameTextStyle: {
              padding: [0, 0, 15, -10],
            },
            axisLine: {       //y轴线
              "show": false
            },
            splitLine: {    //网格线
              lineStyle: {
                type: 'dashed'    //设置网格线类型 dotted：虚线   solid:实线
              },
              show: false //隐藏或显示
            }

          },
          {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 20,
            axisTick: {       //y轴刻度线
              "show": false
            },
            nameTextStyle: {
              padding: [0, 0, 15, 40],
            },
            axisLine: {       //y轴线
              "show": false
            },
            axisLabel: {
              formatter: '{value} %'
            },
            splitLine: {    //网格线
              lineStyle: {
                type: 'dashed'    //设置网格线类型 dotted：虚线   solid:实线
              },
              show: false //隐藏或显示
            },

          },
        ],
        grid: {
          top: '22%',
          bottom: '13%',
        },
        series: [
          {
            name: '收入金额',
            type: 'line',
            data: [2, 3, 4, 5, 1, 36, 37, 22, 13, 4],
            color: '#1790FF',
            barWidth: 22,//柱图宽度
            symbolSize: 10,

          },
          {
            name: '支出金额',
            type: 'line',
            symbolSize: 10,
            yAxisIndex: 1,
            data: [1, 2, 3, 4, 5, 6, 7, 2, 3, 4],
            color: '#2FC25B',
          },
          {
            name: '实际收入',
            type: 'line',
            symbolSize: 10,
            yAxisIndex: 1,
            data: [2, 3, 13, 24, 35, 16, 27, 32, 23, 24],
            color: '#fda958',
          }
        ]
      });

    }
  },

  mounted () {
    this.getEcarts()
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-around;
  .item {
    text-align: center;
  }
}

#echarts {
  width: 100%;
  height: 400px;
}
</style>
