export default {
  //一级菜单 智慧零售
  settlement: 'smartRetail/home.vue',
  survey: 'smartRetail/survey/survey.vue',

  //店铺二级菜单
  shop: 'smartRetail/shop/shop.vue',
  navShop: 'smartRetail/shop/navShop.vue',

  //商店 二级菜单
  listOfUnit: 'smartRetail/commodity/listOfUnit.vue', // 单品库列表
  Classification: 'smartRetail/commodity/Classification.vue', // 单品库分类
  shopList: 'smartRetail/commodity/shopList.vue', // 商品库列表
  commodityGrouping: 'smartRetail/commodity/commodityGrouping.vue', // 商品分组
  productLabel: 'smartRetail/commodity/productLabel.vue', // 商品标签
  detailedTemplate: 'smartRetail/commodity/detailedTemplate.vue', // 商品模版
  commodityAttributes: 'smartRetail/commodity/commodityAttributes.vue',// 商品属性
  profileTemplate: 'smartRetail/commodity/profileTemplate.vue', // 档案模板
  productList: 'smartRetail/commodity/productList.vue', // 商品列表
  productReviews: 'smartRetail/commodity/productReviews.vue', // 商品评论
  supplyCenter: 'smartRetail/commodity/supplyCenter.vue', // 供货中心

  //库存二级菜单
  storeInventory: 'smartRetail/stock/storeInventory.vue', // 门店库存
  inOutDetails: 'smartRetail/stock/inOutDetails.vue', // 出入库明细
  inReceipt: 'smartRetail/stock/inReceipt.vue', // 入库单
  outReceipt: 'smartRetail/stock/outReceipt.vue', // 出库单
  lnventoryChecking: 'smartRetail/stock/lnventoryChecking.vue',// 库存盘点
  inventoryChecking: 'smartRetail/stock/inventoryChecking.vue', // 库存控制
  InventorySearch: 'smartRetail/stock/InventorySearch.vue', // 库存查询
  shippingReport: 'smartRetail/stock/shippingReport.vue', // 出货报告
  shippingIn: 'smartRetail/stock/shippingIn.vue', // 进货报告
  setting: 'smartRetail/stock/setting.vue', // 进货报告


  //门店二级菜单
  storeList: 'smartRetail/doorStore/storeList.vue', // 门店列表
  performanceSetting: 'smartRetail/doorStore/performanceSetting.vue', // 业绩设置
  performanceDetails: 'smartRetail/doorStore/performanceDetails.vue', // 业绩明细
  entryRules: 'smartRetail/doorStore/entryRules.vue', // 进店规则
  regionalManagement: 'smartRetail/doorStore/regionalManagement.vue', // 区域管理
  shoppingManagement: 'smartRetail/doorStore/shoppingManagement.vue',  // 导购管理
  shoppingSetting: 'smartRetail/doorStore/shoppingSetting.vue', // 导购设置
  statisticalReport: 'smartRetail/doorStore/statisticalReport.vue', //统计报表
  setup: 'smartRetail/doorStore/setup.vue', // 交易设置
  ticketSetting: 'smartRetail/doorStore/ticketSetting.vue', // 小票设置
  cashRegister: 'smartRetail/doorStore/cashRegister.vue', // 收银台交班

  // 订单 二级菜单
  allOrders: 'smartRetail/orders/allOrders.vue', // 全部订单
  recharge0rder: 'smartRetail/orders/recharge0rder.vue', // 充值订单
  consumerOrder: 'smartRetail/orders/consumerOrder.vue', // 消费订单
  delivery: 'smartRetail/orders/delivery.vue', // 发货管理
  selfRaised: 'smartRetail/orders/selfRaised.vue', // 自提管理
  toBeAllocated: 'smartRetail/orders/toBeAllocated.vue', // 带分配订单
  communityOrder: 'smartRetail/orders/communityOrder.vue',
  distributionSupply: 'smartRetail/orders/distributionSupply.vue', // 分销供货订单
  afterSale: 'smartRetail/orders/afterSale.vue', //售后订单
  paymentOrderQuery: 'smartRetail/orders/paymentOrderQuery.vue', // 付款单查询

  // 客户 二级菜单
  allCustoms: 'smartRetail/custom/allCustoms.vue',                // 全部客户
  customerTag: 'smartRetail/custom/customerTag.vue',              // 客户标签
  customerSetting: 'smartRetail/custom/customerSetting.vue',      // 客户设置

  // 营销 二级菜单
  marketingCenter: 'smartRetail/marketing/marketingCenter.vue', // 营销中心
  promotionCenter: 'smartRetail/marketing/promotionCenter.vue', // 推广中心
  advertisingPromotion: 'smartRetail/marketing/advertisingPromotion.vue', // 广告推广
  myApp: 'smartRetail/marketing/myApp.vue', // 我的应用
  myOrder: 'smartRetail/marketing/myOrder.vue', // 我的订单

  // 慧付 二级菜单
  payment: 'smartRetail/huiFu/payment.vue', // 支付账号
  collection: 'smartRetail/huiFu/collection.vue', // 收款配置
  paymentColl: 'smartRetail/huiFu/paymentColl.vue', // 付款配置
  offlinePayment: 'smartRetail/huiFu/offlinePayment.vue', // 线下支付
  revenueProfile: 'smartRetail/huiFu/revenueProfile.vue', // 营收概况'
  financialDetails: 'smartRetail/huiFu/financialDetails.vue', // 财务明细
  smartRetail: 'smartRetail/huiFu/smartRetail.vue', // 线上交易
  onlineRefund: 'smartRetail/huiFu/onlineRefund.vue', // 线下交易
  reconciliationStatement: 'smartRetail/huiFu/reconciliationStatement.vue', // 对账报表
  businessSub: 'smartRetail/huiFu/businessSub.vue', // 业务分账
  accountSplitting: 'smartRetail/huiFu/accountSplitting.vue', // 线上分账(直连服务商)
  separateAccount: 'smartRetail/huiFu/separateAccount.vue', // 分账解冻(直连服务商模式)
  billsPayable: 'smartRetail/huiFu/billsPayable.vue', // 应付账单
  withdrawal: 'smartRetail/huiFu/withdrawal.vue', // 体现管理
  paymentRecords: 'smartRetail/huiFu/paymentRecords.vue', // 付款记录
  liveAccounts: 'smartRetail/huiFu/liveAccounts.vue', // 直播应收
  splitOrder: 'smartRetail/huiFu/splitOrder.vue', // 分账订单
  logisticsExpenses: 'smartRetail/huiFu/logisticsExpenses.vue', // 物流费用
  creditDetails: 'smartRetail/huiFu/creditDetails.vue', // 积分明细
  balanceDetails: 'smartRetail/huiFu/balanceDetails.vue', // 余额明细
  rewardSubsidiary: 'smartRetail/huiFu/rewardSubsidiary.vue', //维客奖励
  communityGroup: 'smartRetail/huiFu/communityGroup.vue', // 社区团购分账单
  electronicInvoice: 'smartRetail/huiFu/electronicInvoice.vue', // 电子发票开通
  orderFlow: 'smartRetail/huiFu/orderFlow.vue', // 发票订单流水
  invoiceFinance: 'smartRetail/huiFu/invoiceFinance.vue', // 电子发票财务
  myAccount: 'smartRetail/huiFu/myAccount.vue', // 我的账户
  withdrawalOrder: 'smartRetail/huiFu/withdrawalOrder.vue', // 提现订单
  balanceReconciliation: 'smartRetail/huiFu/balanceReconciliation.vue', // 余额对账报表
  theInvoicenformation: 'smartRetail/huiFu/theInvoicenformation.vue', // 发票信息
  exportManagement: 'smartRetail/huiFu/exportManagement.vue', // 导出管理

  // 渠道 二级菜单
  customMenu: 'smartRetail/channel/customMenu.vue', // 自定义菜单
  autoReply: 'smartRetail/channel/autoReply.vue', // 自动回复
  publicAccount: 'smartRetail/channel/publicAccount.vue', // 公众号管理
  appletSetup: 'smartRetail/channel/appletSetup.vue', // 小程序管理
  h5Set: 'smartRetail/channel/h5Set.vue', // h5设置
  APPstore: 'smartRetail/channel/APPstore.vue', // app开店
  enterpriseWeChat: 'smartRetail/channel/enterpriseWeChat.vue', // 企业微信

  // 设置 二级菜单
  businessInformation: 'smartRetail/setting/businessInformation.vue', // 商户信息
  shopCertification: 'smartRetail/setting/shopCertification.vue', // 商铺认证
  storeSettings: 'smartRetail/setting/storeSettings.vue', // 网店设置
  goodsSet: 'smartRetail/setting/goodsSet.vue', // 商品设置
  orderISaet: 'smartRetail/setting/orderISaet.vue', // 订单设置
  shippingSettings: 'smartRetail/setting/shippingSettings.vue', // 配送设置
  theRaskList: 'smartRetail/setting/theRaskList.vue', // 任务列表
  accountAccess: 'smartRetail/setting/accountAccess.vue', // 账号权限
  operationLog: 'smartRetail/setting/operationLog.vue', // 操作设置

  //暂无开发
  error: 'smartRetail/error.vue',

  // 注册选择店铺
  selectTheStore: 'smartRetail/selectTheStore.vue', // 选择店铺页面

  // 智慧餐厅 ---------------------------------

  //一级菜单 智慧零售
  wisdomRestaurant: 'wisdomRestaurant/home.vue',
  r_survey: 'wisdomRestaurant/survey/survey.vue',
  r_survey: 'wisdomRestaurant/survey/survey.vue',

  //暂无开发
  r_error: 'wisdomRestaurant/error.vue',

  // 门店 二级菜单
  r_storeList: 'wisdomRestaurant/stores/storeList.vue',
  r_storeTheTag: 'wisdomRestaurant/stores/storeTheTag.vue', // 门店标签
  r_storeArea: 'wisdomRestaurant/stores/storeArea.vue', // 门店区域
  r_storesGroup: 'wisdomRestaurant/stores/storesGroup.vue', // 门店分组
  r_storeStting: 'wisdomRestaurant/stores/storeStting.vue', // 门店储值设置
  r_valueAndPay: 'wisdomRestaurant/stores/valueAndPay.vue', // 储值并买单
  r_thePrinter: 'wisdomRestaurant/stores/thePrinter.vue', // 打印机
  r_POS: 'wisdomRestaurant/stores/POS.vue', // POS

  // 业务 二级菜单
  r_checkPayment: 'wisdomRestaurant/business/checkPayment.vue', // 买单收款
  r_stockCenter: 'wisdomRestaurant/business/stockCenter.vue', // 领劵中心
  r_APPcollection: 'wisdomRestaurant/business/APPcollection.vue', // app收款
  r_menuManagement: 'wisdomRestaurant/business/menuManagement.vue', // 菜单管理
  r_basicSetup: 'wisdomRestaurant/business/basicSetup.vue', // 基本设置
  r_tablesManagement: 'wisdomRestaurant/business/tablesManagement.vue', // 桌台管理
  r_staffManagement: 'wisdomRestaurant/business/staffManagement.vue', // 菜单管理 —— 外卖
  r_basicSetupT: 'wisdomRestaurant/business/basicSetupT.vue', // 基本设置 —— 外卖
  r_staffManagementa: 'wisdomRestaurant/business/staffManagementa.vue', // 员工管理
  r_marketingStaff: 'wisdomRestaurant/business/marketingStaff.vue', // 员工营销

  // 订单 二级菜单
  r_checkPayments: 'wisdomRestaurant/theOrder/checkPayment.vue', // 员工营销
  r_posReceipt: 'wisdomRestaurant/theOrder/posReceipt.vue', // 员工营销
  r_addedTrading: 'wisdomRestaurant/theOrder/addedTrading.vue', // 员工营销
  r_appPayment: 'wisdomRestaurant/theOrder/appPayment.vue', // 员工营销
  r_eatIn: 'wisdomRestaurant/theOrder/eatIn.vue', // 食堂
  r_secondsToPay: 'wisdomRestaurant/theOrder/secondsToPay.vue', // 秒付
  r_takeOut: 'wisdomRestaurant/theOrder/takeOut.vue', // 外卖
  r_reservation: 'wisdomRestaurant/theOrder/reservation.vue', // 预订
  r_lntegralMall: 'wisdomRestaurant/theOrder/lntegralMall.vue', // 积分商城
  r_partyOrder: 'wisdomRestaurant/theOrder/partyOrder.vue', // 第三方订单
  r_orderManagement: 'wisdomRestaurant/theOrder/orderManagement.vue', // 会员开卡
  r_valueOrder: 'wisdomRestaurant/theOrder/valueOrder.vue', // 会员储值订单
  r_storageCard: 'wisdomRestaurant/theOrder/storageCard.vue', // 门店储值订单
  r_orderManage: 'wisdomRestaurant/theOrder/orderManage.vue', // 券订单
  r_orderExport: 'wisdomRestaurant/theOrder/orderExport.vue', // 订单导出

  // 会员 二级菜单
  r_userList: 'wisdomRestaurant/member/userList.vue', // 用户列表
  r_newcardview: 'wisdomRestaurant/member/newcardview.vue', // 会员卡设置
  r_levelManage: 'wisdomRestaurant/member/levelManage.vue', // 等级设置
  r_upgrade: 'wisdomRestaurant/member/upgrade.vue', // 升级规则
  r_tagsManage: 'wisdomRestaurant/member/tagsManage.vue', // 标签管理
  r_IntegralRules: 'wisdomRestaurant/member/IntegralRules.vue', // 标签管理
  r_integralStrategy: 'wisdomRestaurant/member/integralStrategy.vue', // 积分规则
  r_storedValueRules: 'wisdomRestaurant/member/storedValueRules.vue', // 储值规则
  r_balanceStatement: 'wisdomRestaurant/member/balanceStatement.vue', // 余额流水

  //营销 二级菜单
  r_marketingCenter: 'wisdomRestaurant/marketing/marketingCenter.vue', // 营销中心

  // 推广 菜单
  r_toPromote: 'wisdomRestaurant/toPromote/toPromote.vue', // 营销中心

  // 慧付 二级菜单
  r_payment: 'wisdomRestaurant/huiFu/payment.vue', // 支付账号
  r_collection: 'wisdomRestaurant/huiFu/collection.vue', // 收款配置
  r_paymentColl: 'wisdomRestaurant/huiFu/paymentColl.vue', // 付款配置
  r_offlinePayment: 'wisdomRestaurant/huiFu/offlinePayment.vue', // 线下支付
  r_revenueProfile: 'wisdomRestaurant/huiFu/revenueProfile.vue', // 营收概况'
  r_financialDetails: 'wisdomRestaurant/huiFu/financialDetails.vue', // 财务明细
  r_smartRetail: 'wisdomRestaurant/huiFu/smartRetail.vue', // 线上交易
  r_onlineRefund: 'wisdomRestaurant/huiFu/onlineRefund.vue', // 线下交易
  r_reconciliationStatement: 'wisdomRestaurant/huiFu/reconciliationStatement.vue', // 对账报表
  r_businessSub: 'wisdomRestaurant/huiFu/businessSub.vue', // 业务分账
  r_accountSplitting: 'wisdomRestaurant/huiFu/accountSplitting.vue', // 线上分账(直连服务商)
  r_separateAccount: 'wisdomRestaurant/huiFu/separateAccount.vue', // 分账解冻(直连服务商模式)
  r_billsPayable: 'wisdomRestaurant/huiFu/billsPayable.vue', // 应付账单
  r_withdrawal: 'wisdomRestaurant/huiFu/withdrawal.vue', // 体现管理
  r_paymentRecords: 'wisdomRestaurant/huiFu/paymentRecords.vue', // 付款记录
  r_liveAccounts: 'wisdomRestaurant/huiFu/liveAccounts.vue', // 直播应收
  r_splitOrder: 'wisdomRestaurant/huiFu/splitOrder.vue', // 分账订单
  r_logisticsExpenses: 'wisdomRestaurant/huiFu/logisticsExpenses.vue', // 物流费用
  r_creditDetails: 'wisdomRestaurant/huiFu/creditDetails.vue', // 积分明细
  r_balanceDetails: 'wisdomRestaurant/huiFu/balanceDetails.vue', // 余额明细
  r_rewardSubsidiary: 'wisdomRestaurant/huiFu/rewardSubsidiary.vue', //维客奖励
  r_communityGroup: 'wisdomRestaurant/huiFu/communityGroup.vue', // 社区团购分账单
  r_electronicInvoice: 'wisdomRestaurant/huiFu/electronicInvoice.vue', // 电子发票开通
  r_orderFlow: 'wisdomRestaurant/huiFu/orderFlow.vue', // 发票订单流水
  r_invoiceFinance: 'wisdomRestaurant/huiFu/invoiceFinance.vue', // 电子发票财务
  r_myAccount: 'wisdomRestaurant/huiFu/myAccount.vue', // 我的账户
  r_withdrawalOrder: 'wisdomRestaurant/huiFu/withdrawalOrder.vue', // 提现订单
  r_balanceReconciliation: 'wisdomRestaurant/huiFu/balanceReconciliation.vue', // 余额对账报表
  r_theInvoicenformation: 'wisdomRestaurant/huiFu/theInvoicenformation.vue', // 发票信息
  r_exportManagement: 'wisdomRestaurant/huiFu/exportManagement.vue', // 导出管理

  // 渠道 二级菜单
  r_publicAccount: 'wisdomRestaurant/channel/publicAccount.vue', // 授权管理
  r_customMenu: 'wisdomRestaurant/channel/customMenu.vue', // 自定义菜单
  r_autoReply: 'wisdomRestaurant/channel/autoReply.vue', // 自动回复
  r_appletSetup: 'wisdomRestaurant/channel/appletSetup.vue', // 小程序管理

  // 设置 二级菜单
  r_businessInformation: 'wisdomRestaurant/setting/businessInformation.vue', // 商户信息
  r_shopCertification: 'wisdomRestaurant/setting/shopCertification.vue', // 商铺认证
  r_storeSettings: 'wisdomRestaurant/setting/storeSettings.vue', // 网店设置
  r_goodsSet: 'wisdomRestaurant/setting/goodsSet.vue', // 商品设置
  r_orderISaet: 'wisdomRestaurant/setting/orderISaet.vue', // 订单设置
  r_shippingSettings: 'wisdomRestaurant/setting/shippingSettings.vue', // 配送设置
  r_theRaskList: 'wisdomRestaurant/setting/theRaskList.vue', // 任务列表
  r_accountAccess: 'wisdomRestaurant/setting/accountAccess.vue', // 账号权限
  r_operationLog: 'wisdomRestaurant/setting/operationLog.vue', // 操作设置

}
