export default {
  //一级菜单
  settlement: 'home.vue',
  survey: 'survey/survey.vue',

  //店铺二级菜单
  shop: 'shop/shop.vue',
  navShop: 'shop/navShop.vue',

  //商店 二级菜单
  listOfUnit: 'commodity/listOfUnit.vue', // 单品库列表
  Classification: 'commodity/Classification.vue', // 单品库分类
  shopList: 'commodity/shopList.vue', // 商品库列表
  commodityGrouping: 'commodity/commodityGrouping.vue', // 商品分组
  productLabel: 'commodity/productLabel.vue', // 商品标签
  detailedTemplate: 'commodity/detailedTemplate.vue', // 商品模版
  commodityAttributes: 'commodity/commodityAttributes.vue',// 商品属性
  profileTemplate: 'commodity/profileTemplate.vue', // 档案模板
  productList: 'commodity/productList.vue', // 商品列表
  productReviews: 'commodity/productReviews.vue', // 商品评论
  supplyCenter: 'commodity/supplyCenter.vue', // 供货中心

  //库存二级菜单
  storeInventory: 'stock/storeInventory.vue', // 门店库存
  inOutDetails: 'stock/inOutDetails.vue', // 出入库明细
  inReceipt: 'stock/inReceipt.vue', // 入库单
  outReceipt: 'stock/outReceipt.vue', // 出库单
  lnventoryChecking: 'stock/lnventoryChecking.vue',// 库存盘点
  inventoryChecking: 'stock/inventoryChecking.vue', // 库存控制
  InventorySearch: 'stock/InventorySearch.vue', // 库存查询
  shippingReport: 'stock/shippingReport.vue', // 出货报告
  shippingIn: 'stock/shippingIn.vue', // 进货报告
  setting: 'stock/setting.vue', // 进货报告


  //门店二级菜单
  storeList: 'doorStore/storeList.vue', // 门店列表
  performanceSetting: 'doorStore/performanceSetting.vue', // 业绩设置
  performanceDetails: 'doorStore/performanceDetails.vue', // 业绩明细
  entryRules: 'doorStore/entryRules.vue', // 进店规则
  regionalManagement: 'doorStore/regionalManagement.vue', // 区域管理
  shoppingManagement: 'doorStore/shoppingManagement.vue',  // 导购管理
  shoppingSetting: 'doorStore/shoppingSetting.vue', // 导购设置
  statisticalReport: 'doorStore/statisticalReport.vue', //统计报表
  setup: 'doorStore/setup.vue', // 交易设置
  ticketSetting: 'doorStore/ticketSetting.vue', // 小票设置
  cashRegister: 'doorStore/cashRegister.vue', // 收银台交班

  // 订单 二级菜单
  allOrders: 'orders/allOrders.vue', // 全部订单
  recharge0rder: 'orders/recharge0rder.vue', // 充值订单
  consumerOrder: 'orders/consumerOrder.vue', // 消费订单
  delivery: 'orders/delivery.vue', // 发货管理
  selfRaised: 'orders/selfRaised.vue', // 自提管理
  toBeAllocated: 'orders/toBeAllocated.vue', // 带分配订单
  communityOrder: 'orders/communityOrder.vue',
  distributionSupply: 'orders/distributionSupply.vue', // 分销供货订单
  afterSale: 'orders/afterSale.vue', //售后订单
  paymentOrderQuery: 'orders/paymentOrderQuery.vue', // 付款单查询

  // 客户 二级菜单
  allCustoms: 'custom/allCustoms.vue',                // 全部客户
  customerTag: 'custom/customerTag.vue',              // 客户标签
  customerSetting: 'custom/customerSetting.vue',      // 客户设置

  // 营销 二级菜单
  marketingCenter: 'marketing/marketingCenter.vue', // 营销中心
  promotionCenter: 'marketing/promotionCenter.vue', // 推广中心
  advertisingPromotion: 'marketing/advertisingPromotion.vue', // 广告推广
  myApp: 'marketing/myApp.vue', // 我的应用
  myOrder: 'marketing/myOrder.vue', // 我的订单

  // 慧付 二级菜单
  payment: 'huiFu/payment.vue', // 支付账号
  collection: 'huiFu/collection.vue', // 收款配置
  paymentColl: 'huiFu/paymentColl.vue', // 付款配置
  offlinePayment: 'huiFu/offlinePayment.vue', // 线下支付
  revenueProfile: 'huiFu/revenueProfile.vue', // 营收概况'
  financialDetails: 'huiFu/financialDetails.vue', // 财务明细
  smartRetail: 'huiFu/smartRetail.vue', // 线上交易
  onlineRefund: 'huiFu/onlineRefund.vue', // 线下交易
  reconciliationStatement: 'huiFu/reconciliationStatement.vue', // 对账报表
  businessSub: 'huiFu/businessSub.vue', // 业务分账
  accountSplitting: 'huiFu/accountSplitting.vue', // 线上分账(直连服务商)
  separateAccount: 'huiFu/separateAccount.vue', // 分账解冻(直连服务商模式)
  billsPayable: 'huiFu/billsPayable.vue', // 应付账单
  withdrawal: 'huiFu/withdrawal.vue', // 体现管理
  paymentRecords: 'huiFu/paymentRecords.vue', // 付款记录
  liveAccounts: 'huiFu/liveAccounts.vue', // 直播应收
  splitOrder: 'huiFu/splitOrder.vue', // 分账订单
  logisticsExpenses: 'huiFu/logisticsExpenses.vue', // 物流费用
  creditDetails: 'huiFu/creditDetails.vue', // 积分明细
  balanceDetails: 'huiFu/balanceDetails.vue', // 余额明细
  rewardSubsidiary: 'huiFu/rewardSubsidiary.vue', //维客奖励
  communityGroup: 'huiFu/communityGroup.vue', // 社区团购分账单
  electronicInvoice: 'huiFu/electronicInvoice.vue', // 电子发票开通
  orderFlow: 'huiFu/orderFlow.vue', // 发票订单流水
  invoiceFinance: 'huiFu/invoiceFinance.vue', // 电子发票财务
  myAccount: 'huiFu/myAccount.vue', // 我的账户
  withdrawalOrder: 'huiFu/withdrawalOrder.vue', // 提现订单
  balanceReconciliation: 'huiFu/balanceReconciliation.vue', // 余额对账报表
  theInvoicenformation: 'huiFu/theInvoicenformation.vue', // 发票信息
  exportManagement: 'huiFu/exportManagement.vue', // 导出管理

  //暂无开发
  error: 'error.vue',
}
