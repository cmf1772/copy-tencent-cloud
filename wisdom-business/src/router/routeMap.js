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

  // 智慧餐厅 -------------------------------------------------------------------------------------------------------------------------------------------------

  //一级菜单 
  wisdomRestaurant: 'wisdomRestaurant/home.vue',
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

  // 智慧美业 -------------------------------------------------------------------------------------------------------------------------------------------------

  //一级菜单 
  beautyIndustry: 'beautyIndustry/home.vue',
  b_survey: 'beautyIndustry/survey/survey.vue',

  //暂无开发
  b_error: 'beautyIndustry/error.vue',

  // 门店 二级菜单
  b_storeList: 'beautyIndustry/stores/storeList.vue',
  b_storeTheTag: 'beautyIndustry/stores/storeTheTag.vue', // 门店标签
  b_storeArea: 'beautyIndustry/stores/storeArea.vue', // 门店区域
  b_storesGroup: 'beautyIndustry/stores/storesGroup.vue', // 门店分组
  b_storeStting: 'beautyIndustry/stores/storeStting.vue', // 门店储值设置
  b_valueAndPay: 'beautyIndustry/stores/valueAndPay.vue', // 储值并买单
  b_thePrinter: 'beautyIndustry/stores/thePrinter.vue', // 打印机
  b_POS: 'beautyIndustry/stores/POS.vue', // POS

  // 业务 二级菜单
  b_checkPayment: 'beautyIndustry/business/checkPayment.vue', // 买单收款
  b_stockCenter: 'beautyIndustry/business/stockCenter.vue', // 领劵中心
  b_APPcollection: 'beautyIndustry/business/APPcollection.vue', // app收款
  b_serviceManagement: 'beautyIndustry/business/serviceManagement', // 服务管理
  b_goodsWarehouse: 'beautyIndustry/business/goodsWarehouse', // 服务管理
  b_writeOff: 'beautyIndustry/business/writeOff', // 服务管理
  b_buySet: 'beautyIndustry/business/buySet', // 购买设置
  b_setAppointmentt: 'beautyIndustry/business/setAppointment', // 购买设置
  b_menuManagement: 'beautyIndustry/business/menuManagement.vue', // 菜单管理
  b_staffManagementa: 'beautyIndustry/business/staffManagementa.vue', // 员工管理
  b_marketingStaff: 'beautyIndustry/business/marketingStaff.vue', // 员工营销

  // 订单 二级菜单
  b_checkPayments: 'beautyIndustry/theOrder/checkPayment.vue', // 员工营销
  b_posReceipt: 'beautyIndustry/theOrder/posReceipt.vue', // 员工营销
  b_addedTrading: 'beautyIndustry/theOrder/addedTrading.vue', // 员工营销
  b_lntegralMall: 'beautyIndustry/theOrder/lntegralMall.vue', // 积分商城
  b_partyOrder: 'beautyIndustry/theOrder/partyOrder.vue', // 第三方订单
  b_orderManagement: 'beautyIndustry/theOrder/orderManagement.vue', // 会员开卡
  b_valueOrder: 'beautyIndustry/theOrder/valueOrder.vue', // 会员储值订单
  b_storageCard: 'beautyIndustry/theOrder/storageCard.vue', // 门店储值订单
  b_orderManage: 'beautyIndustry/theOrder/orderManage.vue', // 券订单
  b_orderExport: 'beautyIndustry/theOrder/orderExport.vue', // 订单导出

  // 会员 二级菜单
  b_userList: 'beautyIndustry/member/userList.vue', // 用户列表
  b_newcardview: 'beautyIndustry/member/newcardview.vue', // 会员卡设置
  b_levelManage: 'beautyIndustry/member/levelManage.vue', // 等级设置
  b_upgrade: 'beautyIndustry/member/upgrade.vue', // 升级规则
  b_tagsManage: 'beautyIndustry/member/tagsManage.vue', // 标签管理
  b_IntegralRules: 'beautyIndustry/member/IntegralRules.vue', // 标签管理
  b_integralStrategy: 'beautyIndustry/member/integralStrategy.vue', // 积分规则
  b_storedValueRules: 'beautyIndustry/member/storedValueRules.vue', // 储值规则
  b_balanceStatement: 'beautyIndustry/member/balanceStatement.vue', // 余额流水

  //营销 二级菜单
  b_marketingCenter: 'beautyIndustry/marketing/marketingCenter.vue', // 营销中心

  // 推广 菜单
  b_toPromote: 'beautyIndustry/toPromote/toPromote.vue', // 营销中心

  // 慧付 二级菜单
  b_payment: 'beautyIndustry/huiFu/payment.vue', // 支付账号
  b_collection: 'beautyIndustry/huiFu/collection.vue', // 收款配置
  b_paymentColl: 'beautyIndustry/huiFu/paymentColl.vue', // 付款配置
  b_offlinePayment: 'beautyIndustry/huiFu/offlinePayment.vue', // 线下支付
  b_revenueProfile: 'beautyIndustry/huiFu/revenueProfile.vue', // 营收概况'
  b_financialDetails: 'beautyIndustry/huiFu/financialDetails.vue', // 财务明细
  b_smartRetail: 'beautyIndustry/huiFu/smartRetail.vue', // 线上交易
  b_onlineRefund: 'beautyIndustry/huiFu/onlineRefund.vue', // 线下交易
  b_reconciliationStatement: 'beautyIndustry/huiFu/reconciliationStatement.vue', // 对账报表
  b_businessSub: 'beautyIndustry/huiFu/businessSub.vue', // 业务分账
  b_accountSplitting: 'beautyIndustry/huiFu/accountSplitting.vue', // 线上分账(直连服务商)
  b_separateAccount: 'beautyIndustry/huiFu/separateAccount.vue', // 分账解冻(直连服务商模式)
  b_billsPayable: 'beautyIndustry/huiFu/billsPayable.vue', // 应付账单
  b_withdrawal: 'beautyIndustry/huiFu/withdrawal.vue', // 体现管理
  b_paymentRecords: 'beautyIndustry/huiFu/paymentRecords.vue', // 付款记录
  b_liveAccounts: 'beautyIndustry/huiFu/liveAccounts.vue', // 直播应收
  b_splitOrder: 'beautyIndustry/huiFu/splitOrder.vue', // 分账订单
  b_logisticsExpenses: 'beautyIndustry/huiFu/logisticsExpenses.vue', // 物流费用
  b_creditDetails: 'beautyIndustry/huiFu/creditDetails.vue', // 积分明细
  b_balanceDetails: 'beautyIndustry/huiFu/balanceDetails.vue', // 余额明细
  b_rewardSubsidiary: 'beautyIndustry/huiFu/rewardSubsidiary.vue', //维客奖励
  b_communityGroup: 'beautyIndustry/huiFu/communityGroup.vue', // 社区团购分账单
  b_electronicInvoice: 'beautyIndustry/huiFu/electronicInvoice.vue', // 电子发票开通
  b_orderFlow: 'beautyIndustry/huiFu/orderFlow.vue', // 发票订单流水
  b_invoiceFinance: 'beautyIndustry/huiFu/invoiceFinance.vue', // 电子发票财务
  b_myAccount: 'beautyIndustry/huiFu/myAccount.vue', // 我的账户
  b_withdrawalOrder: 'beautyIndustry/huiFu/withdrawalOrder.vue', // 提现订单
  b_balanceReconciliation: 'beautyIndustry/huiFu/balanceReconciliation.vue', // 余额对账报表
  b_theInvoicenformation: 'beautyIndustry/huiFu/theInvoicenformation.vue', // 发票信息
  b_exportManagement: 'beautyIndustry/huiFu/exportManagement.vue', // 导出管理

  // 渠道 二级菜单
  b_publicAccount: 'beautyIndustry/channel/publicAccount.vue', // 授权管理
  b_customMenu: 'beautyIndustry/channel/customMenu.vue', // 自定义菜单
  b_autoReply: 'beautyIndustry/channel/autoReply.vue', // 自动回复
  b_appletSetup: 'beautyIndustry/channel/appletSetup.vue', // 小程序管理

  // 设置 二级菜单
  b_businessInformation: 'beautyIndustry/setting/businessInformation.vue', // 商户信息
  b_shopCertification: 'beautyIndustry/setting/shopCertification.vue', // 商铺认证
  b_storeSettings: 'beautyIndustry/setting/storeSettings.vue', // 网店设置
  b_goodsSet: 'beautyIndustry/setting/goodsSet.vue', // 商品设置
  b_orderISaet: 'beautyIndustry/setting/orderISaet.vue', // 订单设置
  b_shippingSettings: 'beautyIndustry/setting/shippingSettings.vue', // 配送设置
  b_theRaskList: 'beautyIndustry/setting/theRaskList.vue', // 任务列表
  b_accountAccess: 'beautyIndustry/setting/accountAccess.vue', // 账号权限
  b_operationLog: 'beautyIndustry/setting/operationLog.vue', // 操作设置


  // 智慧旅游 -------------------------------------------------------------------------------------------------------------------------------------------------
  ofTourism: 'ofTourism/home.vue',
  o_survey: 'ofTourism/survey/survey.vue',

  //暂无开发
  o_error: 'ofTourism/error.vue',

  // 店铺二级菜单
  o_storeList: 'ofTourism/shop/shop.vue', // 店铺页面

  // 产品二级菜单
  o_lineList: 'ofTourism/product/lineList.vue', // 线路列表
  o_lineOrder: 'ofTourism/product/lineOrder.vue', // 线路订单
  o_lineActivist: 'ofTourism/product/lineActivist.vue', // 线路维权
  o_lineSetUp: 'ofTourism/product/lineSetUp.vue', // 线路维权
  o_listOfAttractions: 'ofTourism/product/listOfAttractions.vue', // 景点列表
  o_tickets: 'ofTourism/product/tickets.vue', // 保险产品
  o_verification: 'ofTourism/product/verification.vue', // 门票核销
  o_theRights: 'ofTourism/product/theRights.vue', // 门票核销
  o_setOfTickets: 'ofTourism/product/setOfTickets.vue', // 门票设置
  o_lnsuranceProducts: 'ofTourism/product/lnsuranceProducts.vue', // 保险产品
  o_ofGoods: 'ofTourism/product/ofGoods.vue', // 商品分类
  o_additionalProduct: 'ofTourism/product/additionalProduct.vue', // 商品分类

  // 会员二级菜单
  o_membersM: 'ofTourism/members/membersM.vue', // 会员卡管理
  o_theTagList: 'ofTourism/members/theTagList.vue', // 会员卡管理

  // 营销 二级菜单
  o_marketingCenter: 'ofTourism/marketing/marketingCenter.vue', // 营销中心
  o_promotionCenter: 'ofTourism/marketing/promotionCenter.vue', // 推广中心
  o_advertisingPromotion: 'ofTourism/marketing/advertisingPromotion.vue', // 广告推广
  o_myApp: 'ofTourism/marketing/myApp.vue', // 我的应用
  o_myOrder: 'ofTourism/marketing/myOrder.vue', // 我的订单

  // 微信 二级菜单
  o_publicAccount: 'ofTourism/channel/publicAccount.vue', // 授权管理
  o_customMenu: 'ofTourism/channel/customMenu.vue', // 自定义菜单
  o_autoReply: 'ofTourism/channel/autoReply.vue', // 自动回复
  o_appletSetup: 'ofTourism/channel/appletSetup.vue', // 小程序管理

  // 慧付 二级菜单
  o_payment: 'ofTourism/huiFu/payment.vue', // 支付账号
  o_collection: 'ofTourism/huiFu/collection.vue', // 收款配置
  o_paymentColl: 'ofTourism/huiFu/paymentColl.vue', // 付款配置
  o_onlineRefund: 'ofTourism/huiFu/onlineRefund.vue', // 线下交易
  o_reconciliationStatement: 'ofTourism/huiFu/reconciliationStatement.vue', // 对账报表
  o_businessSub: 'ofTourism/huiFu/businessSub.vue', // 业务分账
  o_accountSplitting: 'ofTourism/huiFu/accountSplitting.vue', // 线上分账(直连服务商)
  o_separateAccount: 'ofTourism/huiFu/separateAccount.vue', // 分账解冻(直连服务商模式)
  o_billsPayable: 'ofTourism/huiFu/billsPayable.vue', // 应付账单
  o_withdrawal: 'ofTourism/huiFu/withdrawal.vue', // 体现管理
  o_paymentRecords: 'ofTourism/huiFu/paymentRecords.vue', // 付款记录
  o_exportManagement: 'ofTourism/huiFu/exportManagement.vue', // 导出管理

  // 供应商 二级菜单
  o_supplierList: 'ofTourism/supplier/supplierList.vue', // 供应商列表
  o_supplierData: 'ofTourism/supplier/supplierData.vue', // 供应商列表

  // 设置 二级菜单
  o_businessInformation: 'ofTourism/setting/businessInformation.vue', // 商户信息
  o_shopCertification: 'ofTourism/setting/shopCertification.vue', // 资质认证
  o_accountAccess: 'ofTourism/setting/accountAccess.vue', // 账号
  o_characterSet: 'ofTourism/setting/characterSet.vue', // 角色管理
  o_operationLog: 'ofTourism/setting/operationLog.vue', // 操作日志

  // 数据 二级菜单
  o_downloadCenter: 'ofTourism/dataCenter/downloadCenter.vue', // 下载中心
  o_ImportCenter: 'ofTourism/dataCenter/ImportCenter.vue', // 导入中心

  // 智慧酒店 -------------------------------------------------------------------------------------------------------------------------------------------------

  //一级菜单 智慧零售
  wisdomHotel: 'wisdomHotel/home.vue',
  h_survey: 'wisdomHotel/survey/survey.vue',

  //暂无开发
  h_error: 'wisdomHotel/error.vue',

  // 房态
  h_toRoom: 'wisdomHotel/toRoom/toRoom.vue', // 房态

  // 订单 二级菜单
  h_bookingOrder: 'wisdomHotel/order/bookingOrder.vue', // 订房订单
  h_accommodationRecord: 'wisdomHotel/order/accommodationRecord.vue', // 住宿记录
  h_orderRecord: 'wisdomHotel/order/orderRecord.vue', // 订单记录
  h_orderList: 'wisdomHotel/order/orderList.vue', // 预约订单
  h_verification: 'wisdomHotel/order/verification.vue', // 核销记录
  h_eat_inOrders: 'wisdomHotel/order/eat-inOrders.vue', // 堂食订单
  h_rightsList: 'wisdomHotel/order/rightsList.vue', // 售后订单
  h_refundList: 'wisdomHotel/order/refundList.vue', // 押金退款列表
  h_cardOrder: 'wisdomHotel/order/cardOrder.vue', // 会员开卡订单
  h_collection: 'wisdomHotel/order/collection.vue', // 收款码订单
  h_qrcode: 'wisdomHotel/order/qrcode.vue', // 收款码订单
  h_order: 'wisdomHotel/order/order.vue', // 第三方订单

  // 业务 二级菜单
  h_roomstatus: 'wisdomHotel/business/roomstatus.vue', // 第三方订单
  h_manage: 'wisdomHotel/business/manage.vue', // 房价管理
  h_acSet: 'wisdomHotel/business/acSet.vue', // 住宿设置
  h_roomSetting: 'wisdomHotel/business/roomSetting.vue', // 房型设置
  h_roomtype: 'wisdomHotel/business/roomtype.vue', // 房号管理
  h_goods: 'wisdomHotel/business/goods.vue', // 商品列表
  h_catalog: 'wisdomHotel/business/catalog.vue', // 分类管理
  h_merchant: 'wisdomHotel/business/merchant.vue', // 商户管理
  h_food: 'wisdomHotel/business/food.vue', // 商户管理
  h_tableList: 'wisdomHotel/business/tableList.vue', // 菜品列表
  h_collection: 'wisdomHotel/business/collection.vue', // 收款码列表

  // 客户 二级菜单
  h_clist: 'wisdomHotel/custom/clist.vue', // 客户列表
  h_restMoneyManageList: 'wisdomHotel/custom/restMoneyManageList.vue', // 客户列表
  h_cardManage: 'wisdomHotel/custom/cardManage.vue', // 客户列表

  // 营销 二级菜单
  h_marketingCenter: 'wisdomHotel/marketing/marketingCenter.vue', // 营销中心
  h_myApp: 'wisdomHotel/marketing/myApp.vue', // 我的应用
  h_myOrder: 'wisdomHotel/marketing/myOrder.vue', // 我的订单

  // 装修 二级菜单
  h_page: 'wisdomHotel/renovation/page.vue', // 店铺页面
  h_hallfood: 'wisdomHotel/renovation/hallfood.vue', // 堂食页面

  // 微信 二级菜单
  h_officalAccountSet: 'wisdomHotel/wechat/officalAccountSet.vue', // 公众号设置
  h_custommenu: 'wisdomHotel/wechat/custommenu.vue', // 自定义菜单
  h_autoreply: 'wisdomHotel/wechat/autoreply.vue', // 自动回复
  h_miniApp: 'wisdomHotel/wechat/miniApp.vue', // 小程序列表
  h_entwechat: 'wisdomHotel/wechat/entwechat.vue', // 企业微信

  // 慧付 二级菜单
  h_fullScene: 'wisdomHotel/huiFu/fullScene.vue', // 支付账号
  h_payment: 'wisdomHotel/huiFu/payment.vue', // 收款配置
  h_payAbility: 'wisdomHotel/huiFu/payAbility.vue', // 付款配置
  h_report: 'wisdomHotel/huiFu/report.vue', // 线上交易
  h_onlineRefund: 'wisdomHotel/huiFu/onlineRefund.vue', // 线上退款
  h_reconciliationStatement: 'wisdomHotel/huiFu/reconciliationStatement.vue', // 对账报表
  h_businessSub: 'wisdomHotel/huiFu/businessSub.vue', // 业务分账
  h_accountSplitting: 'wisdomHotel/huiFu/accountSplitting.vue', // 线上分账
  h_separateAccount: 'wisdomHotel/huiFu/separateAccount.vue', // 分账解冻
  h_billsPayable: 'wisdomHotel/huiFu/billsPayable.vue', // 应付账单
  h_withdrawal: 'wisdomHotel/huiFu/withdrawal.vue', // 提现管理
  h_paymentRecords: 'wisdomHotel/huiFu/paymentRecords.vue', // 付款记录
  h_exportManagement: 'wisdomHotel/huiFu/exportManagement.vue', // 导出管理

  // 门店 二级菜单
  h_manageList: 'wisdomHotel/store/manageList.vue', // 导出管理

  // 设置 二级菜单
  h_businessInformation: 'wisdomHotel/setting/businessInformation.vue', // 店铺信息
  h_employees: 'wisdomHotel/setting/employees.vue', // 通用设置
  h_account: 'wisdomHotel/setting/account.vue', // 员工列表
  h_role: 'wisdomHotel/setting/role.vue', // 角色管理
  h_authority: 'wisdomHotel/setting/authority.vue', // 操作日志
  h_progress: 'wisdomHotel/setting/progress.vue', // 资质申请
  h_market: 'wisdomHotel/setting/market.vue', // 市场来源
  h_customer: 'wisdomHotel/setting/customer.vue', // 客源渠道


}
