<template>
  <div class="orderISaet flexColumn"
       ref="orderISaet">
    <el-tabs v-model="activeName"
             style="flex: 1"
             class="flexColumn"
             @tab-click="handleClick">
      <el-tab-pane label="流程设置"
                   name="first">
        <div class=" flexColumn"
             style="height: 100%;">
          <div class="flexJC">
            <p class="text">流程设置</p>
          </div>
          <div class="flexColumn "
               style="flex: 1">
            <div class="table"
                 :style="{'max-height': height + 'px'}">
              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">下单设置</p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    海淘下单设置
                  </p>
                  <div class="ml">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox class="mb"
                                   label="复选框 A">上传身份证照片 <span class="ml minText">开启后海淘商品下单身份证照片为必填项</span></el-checkbox> <br>
                      <el-checkbox class="mb"
                                   label="复选框 B"> 身份证实名认证<span class="ml minText">开启后海淘商品下单买家填写的姓名和身份证须一致剩余校验次数：0次去<span class="blueColor">充值</span></span>
                      </el-checkbox> <br>
                      <el-checkbox class="mb"
                                   label="复选框 C"> 海淘商品下单用户须知<span class="ml minText">开启后海淘商品下单前买家必须同意用户须知</span></el-checkbox> <br>
                    </el-checkbox-group>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    买家留言提示语
                  </p>
                  <div class="ml">
                    <el-input placeholder="给卖家留言:(50字以内)"
                              type="textarea"
                              v-model="input"
                              size="mini"
                              class="mb"
                              style="width: 400px"
                              clearable>
                    </el-input>
                    <p class="minText">可以自定义买家留言提示语，提示语不超过30字，买家可留言内容不超过50字。</p>
                  </div>

                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">订单流程设置</p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    未支付订单
                  </p>
                  <div class="ml">
                    <el-input v-model="input"
                              size="mini"
                              class="mb"
                              style="width: 50px"
                              clearable>
                    </el-input>
                    <span class="ml minText">天</span>
                    <el-input v-model="input"
                              size="mini"
                              class="ml"
                              style="width: 50px"
                              clearable>
                    </el-input>
                    <span class="ml minText">小时</span>
                    <el-input v-model="input"
                              size="mini"
                              class="ml"
                              style="width: 50px"
                              clearable>
                    </el-input>
                    <span class="ml mr minText">
                      分钟后自动关闭
                    </span>
                    <span class="ml minText">
                      最长可设置90天，货到付款订单不适用
                    </span>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    已发货订单
                  </p>
                  <div class="ml">
                    <el-input v-model="input"
                              size="mini"
                              class="mb"
                              style="width: 200px"
                              clearable>
                    </el-input>
                    <span class="ml mr minText">
                      天后自动确认收货
                    </span>
                    <span class="ml minText">
                      请考虑物流运输时间，最长可设置90天，自提订单在配送方式中设置
                    </span>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    已收货订单
                  </p>
                  <div class="ml">
                    <el-input v-model="input"
                              size="mini"
                              class="mb"
                              style="width: 200px"
                              clearable>
                    </el-input>
                    <span class="ml mr minText">
                      天后关闭退款/退货功能
                    </span>
                    <span class="ml minText">
                      填写则买家可在确认收货后进行退款/退货申请，最长可设置365天，0代表确认收货后无法售后
                    </span>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    默认支付方式
                  </p>
                  <div class="ml">
                    <el-radio v-model="radio"
                              label="1">优先选中线上支付</el-radio>
                    <el-radio v-model="radio"
                              label="2">优先选中线下支付</el-radio>
                    <span class="ml mr minText">
                      仅在对应配送方式支持多支付方式时生效
                    </span>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    商品规格库存不足处理方式
                  </p>
                  <div class="ml">
                    <el-radio v-model="radio"
                              label="1">允许扣成负库存</el-radio>
                    <el-radio v-model="radio"
                              label="2">整个订单自动售后</el-radio>
                    <span class="ml mr minText">
                      仅针对支付减库存的商品
                    </span>
                  </div>
                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">售后原因设置</p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    售后原因
                  </p>
                  <div class="ml">
                    <el-switch v-model="value"
                               active-color="#13ce66"
                               inactive-color="#ff4949">
                    </el-switch>
                    <span class="ml minText">说明：设置后买家在申请售后时可以进行选择，最多支持添加10个</span>
                    <div class="flexRC mb mt">
                      <div v-for="ite in 3"
                           class="item mr">
                        测试
                      </div>
                    </div>
                    <el-button type="primary"
                               size="mini">新增</el-button>
                  </div>
                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">发货后支持的售后类型</p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    未支付订单
                  </p>
                  <div class="ml">
                    <el-checkbox-group v-model="checkList">
                      <el-checkbox label="复选框 A">仅退款</el-checkbox>
                      <el-checkbox label="复选框 B">退货退款 <span class="ml minText">无需物流商品仅支持退款</span></el-checkbox>
                    </el-checkbox-group>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    买家发起退款申请
                  </p>
                  <div class="ml">
                    <el-input v-model="input"
                              size="mini"
                              class="mb"
                              style="width: 200px"
                              clearable>
                    </el-input>
                    <span class="ml mr minText">
                      天后商家未处理，系统将自动同意/拒绝退款。
                    </span>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    买家发起退货退款申请
                  </p>
                  <div class="ml">
                    <el-input v-model="input"
                              size="mini"
                              class="mb"
                              style="width: 200px"
                              clearable>
                    </el-input>
                    <span class="ml mr minText">天后商家未处理，系统将自动同意售后。
                    </span>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    商家同意退货
                  </p>
                  <div class="ml">
                    <el-input v-model="input"
                              size="mini"
                              class="mb"
                              style="width: 200px"
                              clearable>
                    </el-input>
                    <span class="ml mr minText">天后买家未处理，系统将自动拒绝售后。
                    </span>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    买家已退货
                  </p>
                  <div class="ml">
                    <el-input v-model="input"
                              size="mini"
                              class="mb"
                              style="width: 200px"
                              clearable>
                    </el-input>
                    <span class="ml mr minText">
                      天后商家未处理，系统将自动同意/拒绝退款。
                    </span>
                  </div>
                </div>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    说明
                  </p>
                  <div class="ml">
                    <div class="bg_colorx">
                      <p class="minText">1、系统默认的时间为7天，手动设置时间最长不超过90天。</p>
                      <p class="minText">
                        2、线上支付的订单系统做自动同意处理，线下支付的订单系统做自动拒绝处理。</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">业绩分配规则
                </p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    业绩分配规则
                    <!-- <el-tooltip class="item"
                                effect="dark"
                                content="Top Center 提示文字"
                                placement="top">
                      <i class="iconfont el-icon-question"></i>
                    </el-tooltip> -->
                    <!-- <el-popover placement="top-start"
                                title="标题"
                                width="200"
                                trigger="hover"
                                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                      <i class="el-icon-question"></i>
                    </el-popover> -->
                  </p>
                  <div class="ml">
                    <el-radio v-model="radio"
                              label="1">优先给导购</el-radio>
                    <el-radio v-model="radio"
                              label="2">优先给微客</el-radio>
                    <el-radio v-model="radio"
                              label="3">导购和微客均获得奖励</el-radio>
                  </div>
                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">门店业绩分成设置
                </p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    分成方案
                  </p>
                  <div class="ml">
                    <el-radio v-model="radio"
                              label="1">生成订单</el-radio>
                    <el-radio v-model="radio"
                              label="2">支付成功</el-radio>
                  </div>
                </div>
              </div>

              <div class="conent_box"
                   style="padding-bottom: 10px">
                <p class="text mb">数据回传
                </p>
                <div style="margin-left: 40px"
                     class="flexRC mt mb">
                  <p class="minText mr"
                     style="width: 80px">
                    回传节点
                  </p>
                  <div class="ml">
                    <el-select v-model="data"
                               clearable
                               size="mini"
                               placeholder="请选择">
                      <el-option v-for="item in options"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                    <span class="ml minText s blueColor">新增</span>
                    <span class="ml minText s blueColor">刷新</span>
                    <p class="minText">当一个订单中销售门店、归属门店、发货门店适用不同方案时候，以销售门店适用方案来进行分成计算</p>
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
            <p class="text">发票设置</p>
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

      <el-tab-pane label="订单自定义字段"
                   name="three">
        <div class="conent_box flexColumn"
             style="height: 100%">
          error
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
      checkList: [],
      height: 0,
      input: '',
      data: [],
      radio: '1',
      value: true,
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  },

  mounted () {
    this.height = this.$refs.orderISaet.clientHeight - 190
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
.item {
  width: 50px;
  height: 32px;
  padding: 0 15px;
  font-size: 12px;
  border-radius: 5px;
  color: #595961;
  text-align: center;
  line-height: 32px;
  background-color: #fff;
  border: 1px solid #e3e2e5;
}
</style>