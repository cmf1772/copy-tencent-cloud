<template>
  <div class="goodsSet flexColumn"
       ref="goodsSet">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="商店设置"
                   name="first">
        <div class=" flexColumn"
             style="height: 100%;">
          <div class="flexJC">
            <p class="text">页面列表</p>
          </div>
          <div class="flexColumn "
               style="flex: 1">
            <div class="table"
                 :style="{'max-height': height + 'px'}">
              <div class="conent_box">
                <p class="text mb">价格设置</p>
                <div style="margin-left: 40px">
                  <p class="minText">
                    <span class="ml mr">价格显示设置</span>
                    <span class="ml mr">销售价：</span>
                    <el-input placeholder="请输入内容"
                              style="width: 200px"
                              size="mini"
                              v-model="input"
                              clearable>
                    </el-input>
                  </p>
                  <p class="minText mt"
                     style="margin-left: 97px">
                    <span class="ml mr">市场价：</span>
                    <el-input placeholder="请输入内容"
                              style="width: 200px"
                              size="mini"
                              v-model="input"
                              clearable>
                    </el-input>
                  </p>
                </div>

                <div style="margin-left: 40px"
                     class="flex mt">
                  <p class="minText mr">
                    商详划线价设置
                  </p>
                  <div class="ml">
                    <el-radio v-model="radio"
                              style="width: 100%"
                              label="1">按系统默认方案显示 <span class="minText">普通商品的划线价为市场价，活动商品的划线价为销售价</span>
                    </el-radio>
                    <el-radio v-model="radio"
                              class="mt"
                              label="2">统一显示市场价</el-radio>
                  </div>
                </div>

                <div style="margin-left: 40px"
                     class="flex mt">
                  <p class="minText mr"
                     style="width: 80px">
                    币种设置
                  </p>
                  <div class="ml">
                    <div class="flexRC">
                      <el-select v-model="value"
                                 class="mr"
                                 size="mini"
                                 clearable
                                 placeholder="请选择">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value">
                        </el-option>
                      </el-select>
                      <el-button class="ml"
                                 size="mini">默认按钮</el-button>
                    </div>
                    <p class="mt mb minText">1、币种设置只影响买家端和商户端货币单位显示，已产生数据不因货币变更而进行对应换算，如客户资产、财务统计等；</p>
                    <p class="mb minText">2、因微信端相关功能仅支持人民币货币，故使用其他币种时同步至微信后仍以人民币显示，如优惠券、好物圈、CPS推广等；</p>
                    <p class="mb minText">3、分销市场只支持人民币货币，若使用分销市场功能建议设置人民币；</p>
                    <p class="mb minText">4、线上支付模式只支持人民币、纽币、美元、日元，设置其他币种时，请使用线下支付模式；</p>
                    <p class="mb minText">5、因微信线上付款工具（现金红包、企业付款、企业支付）仅支持人民币，应付单、客户提现等使用线上打款工具时均以人民币打款；</p>
                    <p class="mb minText yellowColor">请根据实际需要谨慎操作，切勿随意切换！</p>
                  </div>
                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">商品图片</p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    图片显示模式
                  </p>
                  <div class="ml">
                    <el-radio v-model="radio"
                              label="1">正方形模式
                    </el-radio>
                    <el-radio v-model="radio"
                              class=""
                              label="2">长图模式（建议尺寸：750*1000）</el-radio>
                  </div>
                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">商品导入设置</p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    商品默认状态
                  </p>
                  <div class="ml">
                    <el-radio v-model="radio"
                              label="1">可售
                    </el-radio>
                    <el-radio v-model="radio"
                              class=""
                              label="2">禁售</el-radio>
                    <p class="minText mt">通过第三方服务导入商品时，可预设导入后商品的可售状态</p>
                  </div>
                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">商品分配设置</p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    商品默认状态
                  </p>
                  <div class="ml">
                    <el-radio v-model="radio"
                              label="1">上架
                    </el-radio>
                    <el-radio v-model="radio"
                              class=""
                              label="2">下架</el-radio>
                    <p class="minText mt">在将商品分配到门店时，可预设分配成功后商品在门店的上下架状态</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="btootm_paination c_box mt flexC">
              <el-button type="primary">保存</el-button>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="库存设置"
                   name="second">
        <div class="conent_box flexColumn"
             style="height: 100%">
          <div class="flexJC">
            <p class="text">页面列表</p>
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
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      activeName: 'first',
      radio: '1',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      height: 0
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  },

  mounted () {
    this.height = this.$refs.goodsSet.clientWidth + 50
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
.button {
  background: #d3e7ff !important;
  color: #2589ff !important;
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
  font-size: 12px;
}
</style>