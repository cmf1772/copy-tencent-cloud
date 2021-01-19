export default [{
  path: '/pageHome',
  name: 'pageHome',
  component: (resolve) => require(['@/view/BackgroundManagement/pageHome.vue'], resolve),
  children: []
}, {
  path: '/homePage',
  name: 'homepage',
  component: (resolve) => require(['@/view/BackgroundManagement/homePage/homePage.vue'], resolve),
  // meta: ['心理管理', '心理健康指导', '详情']
}, {
  // 页面管理
  path: '/shopManagement/shopManagement',
  name: 'shopManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/pageManagement.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '页面管理']
}, {
  //增加页面
  path: '/shopManagement/addPageManagement',
  name: 'addPageManagement',

  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/addPageManagement.vue'], resolve),
  // meta: ['商铺管理', '商铺维修', '页面管理']
}, {
  //手机轮播图
  path: '/shopManagement/mobilePhoneBy',
  name: 'mobilePhoneBy',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/mobilePhoneBy.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '手机轮播广告']
}, {
  //手机轮播图
  path: '/shopManagement/phoneBy',
  name: 'phoneBy',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/phoneBy.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '轮播广告']
}, {
  // 图片广告
  path: '/shopManagement/imageAds',
  name: 'imageAds',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/imageAds.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '图片广告']
}, {
  // 增加图片广告
  path: '/shopManagement/editImageAds',
  name: 'editImageAds',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/editImageAds.vue'], resolve),
  // meta: ['商铺管理', '商铺维修', '轮播广告']
}, {
  // 友情连接
  path: '/shopManagement/friendshipConnection',
  name: 'friendshipConnection',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/friendshipConnection.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '友情连接']
}, {
  // 增加友情连接
  path: '/shopManagement/editFriendshipConnection',
  name: 'editFriendshipConnection',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/editFriendshipConnection.vue'], resolve),
  // meta: ['商铺管理', '商铺维修', '轮播广告']
}, {
  // 购买模版
  path: '/shopManagement/templateToBuy',
  name: 'templateToBuy',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/templateToBuy.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '购买模版']
}, {
  // 弹窗广告
  path: '/shopManagement/popUpAds',
  name: 'popUpAds',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/popUpAds.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '弹窗广告']
}, {
  // 商家展示
  path: '/shopManagement/showMerchants',
  name: 'showMerchants',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/repairShops/showMerchants.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '商家展示']
},

//-----------------------------------------------------------------修改资料
{
  // 收获地址
  path: '/shopManagement/modifyTheData',
  name: 'modifyTheData',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/modifyTheData/modifyTheData.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '收获地址']
}, {
  // 收获地址
  path: '/shopManagement/addModifyTheData',
  name: 'addModifyTheData',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/modifyTheData/addModifyTheData.vue'], resolve),
  // meta: ['商铺管理', '商铺维修', '收获地址']
}, {
  // 修改资料
  path: '/shopManagement/shippingAddress',
  name: 'shippingAddress',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/modifyTheData/shippingAddress.vue'], resolve),
  meta: ['商铺管理', '商铺维修', '修改资料']
},

//-----------------------------------------------------------------商铺设置
{
  // 导航管理
  path: '/setUpShops/navigationManagement',
  name: 'navigationManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/navigationManagement.vue'], resolve),
  meta: ['商铺管理', '商铺设置', '导航管理']
}, {
  // 添加导航管理
  path: '/setUpShops/editNavigationManagement',
  name: 'editNavigationManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/editNavigationManagement.vue'], resolve),
  // meta: ['商铺管理', '商铺设置', '导航管理']
}, {
  // 基础信息
  path: '/setUpShops/information',
  name: 'information',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/information.vue'], resolve),
  meta: ['商铺管理', '商铺设置', '基础信息']
}, {
  // 头部样式设置
  path: '/setUpShops/navigationStyleSettings',
  name: 'navigationStyleSettings',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/navigationStyleSettings.vue'], resolve),
  // meta: ['商铺管理', '商铺设置', '基础信息']
}, {
  // 客服设置
  path: '/setUpShops/settingService',
  name: 'settingService',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/settingService.vue'], resolve),
  meta: ['商铺管理', '商铺设置', '客服设置']
}, {
  // 域名设置
  path: '/setUpShops/theHttp',
  name: 'theHttp',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/theHttp.vue'], resolve),
  meta: ['商铺管理', '商铺设置', '域名设置']
}, {
  // 短信设置
  path: '/setUpShops/shopCertification',
  name: 'shopCertification',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/shopCertification.vue'], resolve),
  meta: ['商铺管理', '商铺设置', '短信设置']
}, {
  // 商铺认证
  path: '/setUpShops/SMSSettings',
  name: 'SMSSettings',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/setUpShops/SMSSettings.vue'], resolve),
  meta: ['商铺管理', '商铺设置', '商铺认证']
},

//-----------------------------------------------------------------拓展管理
{
  // 图片管理
  path: '/developManagement/imageManagement',
  name: 'imageManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/developManagement/imageManagement.vue'], resolve),
  meta: ['商铺管理', '拓展管理', '图片管理']
}, {
  // 淘宝转换
  path: '/developManagement/taobaoConversion',
  name: 'taobaoConversion',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/developManagement/taobaoConversion.vue'], resolve),
  meta: ['商铺管理', '拓展管理', '淘宝导出']
}, {
  // 淘宝导入
  path: '/developManagement/theImport',
  name: 'theImport',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/developManagement/theImport.vue'], resolve),
  meta: ['商铺管理', '拓展管理', '淘宝导入']
}, {
  // 托管管理
  path: '/developManagement/trustManagement',
  name: 'trustManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/shopManagement/developManagement/trustManagement.vue'], resolve),
  meta: ['商铺管理', '拓展管理', '托管管理']
},

// --------------------------------------商品管理
// 
{
  // 常规产品管理
  path: '/commodity/conventionalKnowledge',
  name: 'conventionalKnowledge',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/conventionalKnowledge.vue'], resolve),
  meta: ['商品管理', '拓展管理', '常规商品管理']
}, {
  // 编辑常规产品管理
  path: '/commodity/editConventionalKnowledge',
  name: 'editConventionalKnowledge',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/editConventionalKnowledge.vue'], resolve),
  // meta: ['商品管理', '拓展管理', '常规商品管理']
}, {
  // 知识商品管理
  path: '/commodity/productsKnowledge',
  name: 'productsKnowledge',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/productsKnowledge.vue'], resolve),
  meta: ['商品管理', '拓展管理', '知识商品管理']
}, {
  // 编辑知识商品管理
  path: '/commodity/editProductsKnowledge',
  name: 'editProductsKnowledge',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/editProductsKnowledge.vue'], resolve),
  // meta: ['商品管理', '拓展管理', '知识商品管理']
}, {
  // 拼团商品管理
  path: '/commodity/spellMassGoods',
  name: 'spellMassGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/spellMassGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '拼团商品管理']
}, {
  // 拼团商品管理
  path: '/commodity/editSpellMassGoods',
  name: 'editSpellMassGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/editSpellMassGoods.vue'], resolve),
  // meta: ['商品管理', '拓展管理', '拼团商品管理']
}, {
  // 返利商品管理
  path: '/commodity/rebateGoods',
  name: 'rebateGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/rebateGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '返利商品管理']
}, {
  // 返利商品管理
  path: '/commodity/editRebateGoods',
  name: 'editRebateGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/editRebateGoods.vue'], resolve),
  // meta: ['商品管理', '拓展管理', '返利商品管理']
}, {
  // 秒杀商品管理
  path: '/commodity/secondsKillGoods',
  name: 'secondsKillGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/secondsKillGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '秒杀商品管理']
}, {
  // 秒杀商品管理
  path: '/commodity/editSecondsKillGoods',
  name: 'editSecondsKillGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/editSecondsKillGoods.vue'], resolve),
  // meta: ['商品管理', '拓展管理', '秒杀商品管理']
}, {
  // 团购商品管理
  path: '/commodity/bulkGoods',
  name: 'bulkGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/bulkGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '团购商品管理']
}, {
  // 团购商品管理
  path: '/commodity/editBulkGoods',
  name: 'editBulkGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/editBulkGoods.vue'], resolve),
  // meta: ['商品管理', '拓展管理', '团购商品管理']
}, {
  // 拍卖商品管理
  path: '/commodity/auctionGoods',
  name: 'auctionGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/auctionGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '拍卖商品管理']
}, {
  // 拍卖商品管理
  path: '/commodity/editAuctionGoods',
  name: 'editAuctionGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/editAuctionGoods.vue'], resolve),
  // meta: ['商品管理', '拓展管理', '拍卖商品管理']
}, {
  // 分销商品管理
  path: '/commodity/distributionGoods',
  name: 'distributionGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/distributionGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '分销商品管理']
}, {
  // 批发商品管理
  path: '/commodity/wholesaleGoods',
  name: 'wholesaleGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/wholesaleGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '批发商品管理']
}, {
  // 批发商品管理
  path: '/commodity/editWholesaleGoods',
  name: 'editWholesaleGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/editWholesaleGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '批发商品管理']
}, {
  // 未上架商品
  path: '/commodity/notGoods',
  name: 'notGoods',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/commodity/notGoods.vue'], resolve),
  meta: ['商品管理', '拓展管理', '未上架商品']
},

{
  // 未上架商品
  path: '/conventionalProducts/conventionalProducts',
  name: 'conventionalProducts',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/conventionalProducts/conventionalProducts.vue'], resolve),
  meta: ['分类设置', '分类设置', '常规商品分类']
}, {
  // 编辑未上架商品
  path: '/conventionalProducts/editConventional',
  name: 'editConventional',
  component: (resolve) => require(['@/view/BackgroundManagement/commodityManagement/conventionalProducts/editConventional.vue'], resolve),
  // meta: ['商品管理', '分类设置', '常规商品分类']
},
// ----------------内容管理
{
  // 编辑未上架商品
  path: '/contentManagement/magazineManagement',
  name: 'magazineManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/contentManagement/magazineManagement.vue'], resolve),
  meta: ['内容管理', '杂志管理']
}, {
  // 编辑未上架商品
  path: '/contentManagement/informationManagement',
  name: 'informationManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/contentManagement/informationManagement.vue'], resolve),
  meta: ['内容管理', '杂志管理', '资讯管理']
}, {
  // 编辑未上架商品
  path: '/contentManagement/addInformationManagement',
  name: 'addInformationManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/contentManagement/addInformationManagement.vue'], resolve),
  // meta: ['内容管理', '杂志管理', '资讯管理']
},
// ----------------订单管理 ---交易管理
{
  // 知识订单
  path: '/transactionManagement/magazineManagement',
  name: 'knowledgeOrder',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/knowledgeOrder.vue'], resolve),
  meta: ['订单管理', '交易管理', '知识订单']
}, {
  // 客户订单
  path: '/transactionManagement/customerOrder',
  name: 'customerOrder',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/customerOrder.vue'], resolve),
  meta: ['订单管理', '交易管理', '客户订单']
}, {
  // 退货通道
  path: '/transactionManagement/returnsChannel',
  name: 'returnsChannel',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/returnsChannel.vue'], resolve),
  meta: ['订单管理', '交易管理', '退货通道']
}, {
  // 拼团订单
  path: '/transactionManagement/spellGroupOrder',
  name: 'spellGroupOrder',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/spellGroupOrder.vue'], resolve),
  meta: ['订单管理', '交易管理', '拼团订单']
}, {
  // 添加拼团订单
  path: '/transactionManagement/addSpellGroupOrder',
  name: 'addSpellGroupOrder',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/addSpellGroupOrder.vue'], resolve),
  // meta: ['订单管理', '交易管理', '添加拼团订单']
}, {
  // 提现申请
  path: '/transactionManagement/toApplyFor',
  name: 'toApplyFor',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/toApplyFor.vue'], resolve),
  meta: ['订单管理', '交易管理', '提现申请']
}, {
  // 拼团退货
  path: '/transactionManagement/spellGroupReturns',
  name: 'spellGroupReturns',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/spellGroupReturns.vue'], resolve),
  meta: ['订单管理', '交易管理', '拼团退货']
}, {
  // 物流工具
  path: '/transactionManagement/logisticsTools',
  name: 'logisticsTools',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/logisticsTools.vue'], resolve),
  meta: ['订单管理', '交易管理', '物流工具']
}, {
  // 物流工具
  path: '/transactionManagement/theLocale',
  name: 'theLocale',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/theLocale.vue'], resolve),
  // meta: ['订单管理', '交易管理', '物流工具']
}, {
  // 添加物流工具
  path: '/transactionManagement/addTheLocale',
  name: 'addTheLocale',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/addTheLocale.vue'], resolve),
  // meta: ['订单管理', '交易管理', '添加物流工具']
}, {
  // 销售商品咨询
  path: '/transactionManagement/consultation',
  name: 'consultation',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/consultation.vue'], resolve),
  meta: ['订单管理', '交易管理', '销售商品咨询']
}, {
  // 评价买家
  path: '/transactionManagement/evaluationOfTheBuyer',
  name: 'evaluationOfTheBuyer',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/evaluationOfTheBuyer.vue'], resolve),
  meta: ['订单管理', '交易管理', '评价买家']
}, {
  // 消保明细
  path: '/transactionManagement/fromTheDetail',
  name: 'fromTheDetail',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/fromTheDetail.vue'], resolve),
  meta: ['订单管理', '交易管理', '消保明细']
}, {
  // 消保明细
  path: '/transactionManagement/topUp',
  name: 'topUp',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/topUp.vue'], resolve),
  meta: ['订单管理', '交易管理', '消保明细']
}, {
  // 我的返佣订单
  path: '/transactionManagement/orderManagement',
  name: 'orderManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/orderManagement/transactionManagement/orderManagement.vue'], resolve),
  meta: ['订单管理', '交易管理', '我的返佣订单']
}, , {
  // 地图
  path: '/report/main',
  name: 'report',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/report/main.vue'], resolve)
}, {
  // 设备分组
  path: '/group/list',
  name: 'group',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/group/list.vue'], resolve),
  meta: ['物联网管理', '设备分组列表']
}, {
  // 设备分组编辑
  path: '/group/edit',
  name: 'group',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/group/edit.vue'], resolve),
  meta: ['物联网管理', '设备分组列表']
}, {
  //  设备列表
  path: '/device/list',
  name: 'device',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/device/list.vue'], resolve),
  meta: ['物联网管理', '设备分组列表']
}, {
  //设备列表binaji
  path: '/device/edit',
  name: 'device',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/device/edit.vue'], resolve),
}, {
  //  驱动列表
  path: '/driver/list',
  name: 'driver',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/driver/list.vue'], resolve),
  meta: ['物联网管理', '驱动列表']
}, {
  //驱动列表编辑
  path: '/driver/edit',
  name: 'driver',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/driver/edit.vue'], resolve),
}, {
  //  驱动属性列表
  path: '/driverAttribute/list',
  name: 'driverAttribute',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/driverAttribute/list.vue'], resolve),
  meta: ['物联网管理', '驱动属性列表']
}, {
  //驱动属性列表编辑
  path: '/driverAttribute/edit',
  name: 'driverAttribute',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/driverAttribute/edit.vue'], resolve),
}, {
  //  驱动配置列表
  path: '/driverInfo/list',
  name: 'driverInfo',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/driverInfo/list.vue'], resolve),
  meta: ['物联网管理', '驱动配置列表']
}, {
  //驱动配置列表编辑
  path: '/driverInfo/edit',
  name: 'driverInfo',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/driverInfo/edit.vue'], resolve),
}, {
  //  位号属性列表
  path: '/pointAttribute/list',
  name: 'pointAttribute',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/pointAttribute/list.vue'], resolve),
  meta: ['物联网管理', '位号属性列表']
}, {
  //位号属性列表编辑
  path: '/pointAttribute/edit',
  name: 'pointAttribute',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/pointAttribute/edit.vue'], resolve),
}, {
  //  模板列表
  path: '/profile/list',
  name: 'profile',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/profile/list.vue'], resolve),
  meta: ['物联网管理', '模板列表']
}, {
  //模板列表编辑
  path: '/profile/edit',
  name: 'profile',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/profile/edit.vue'], resolve),
}, {
  //  位号列表
  path: '/point/list',
  name: 'point',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/point/list.vue'], resolve),
  meta: ['物联网管理', '位号列表']
}, {
  //位号列表编辑
  path: '/point/edit',
  name: 'point',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/point/edit.vue'], resolve),
}, {
  //  位号配置列表
  path: '/pointInfo/list',
  name: 'pointInfo',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/pointInfo/list.vue'], resolve),
  meta: ['物联网管理', '位号配置列表']
}, {
  //位号配置列表编辑
  path: '/pointInfo/edit',
  name: 'pointInfo',
  component: (resolve) => require(['@/view/BackgroundManagement/smartRetail/pointInfo/edit.vue'], resolve),
}, {
  //  优惠券管理
  path: '/marketingManagement/couponManagement',
  name: 'couponManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/couponManagement.vue'], resolve),
  meta: ['营销管理', '优惠券管理']
}, {
  //  添加优惠券管理
  path: '/marketingManagement/editCouponManagement',
  name: 'editCouponManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/editCouponManagement.vue'], resolve),
  // meta: ['营销管理', '优惠券管理']
}, {
  //  积分汇专区
  path: '/marketingManagement/bonusPointArea',
  name: 'bonusPointArea',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/bonusPointArea.vue'], resolve),
  meta: ['营销管理', '积分汇专区']
}, {
  //  积分汇专区
  path: '/marketingManagement/editBonusPointArea',
  name: 'editBonusPointArea',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/editBonusPointArea.vue'], resolve),
  // meta: ['营销管理', '积分汇专区']
}, {
  //  广告管理
  path: '/marketingManagement/advertisingManagement',
  name: 'advertisingManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/advertisingManagement.vue'], resolve),
  meta: ['营销管理', '我的广告']
}, {
  //  广告管理
  path: '/marketingManagement/editadvertisingManagement',
  name: 'editadvertisingManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/editadvertisingManagement.vue'], resolve),
  // meta: ['营销管理', '我的广告']
}, {
  //  自定义区域
  path: '/marketingManagement/customArea',
  name: 'customArea',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/customArea.vue'], resolve),
  meta: ['营销管理', '形象展示']
}, {
  //  商品排行
  path: '/marketingManagement/commodityList',
  name: 'commodityList',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/commodityList.vue'], resolve),
  meta: ['营销管理', '商品排行']
}, {
  //  品牌管理
  path: '/marketingManagement/brandManagement',
  name: 'brandManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/brandManagement.vue'], resolve),
  meta: ['营销管理', '品牌管理']
}, {
  //  品牌管理
  path: '/marketingManagement/editBrandManagement',
  name: 'editBrandManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/editBrandManagement.vue'], resolve),
  // meta: ['营销管理', '品牌管理']
}, {
  //  水印设置
  path: '/marketingManagement/watermarkIsSet',
  name: 'watermarkIsSet',
  component: (resolve) => require(['@/view/BackgroundManagement/marketingManagement/watermarkIsSet.vue'], resolve),
  meta: ['营销管理', '水印设置']
}, {
  //  收银台
  path: '/checkstand',
  name: 'watermarkIsSet',
  component: (resolve) => require(['@/view/BackgroundManagement/checkstand/checkstand.vue'], resolve),
  // meta: ['营销管理', '水印设置']
}, {
  //  通证管理
  path: '/throughTheManagement/throughTheManagement',
  name: 'throughTheManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/throughTheManagement/throughTheManagement.vue'], resolve),
  meta: ['通证管理', '通证', '通证管理']
}, {
  //  通证管理
  path: '/throughTheManagement/editThroughTheManagement',
  name: 'editThroughTheManagement',
  component: (resolve) => require(['@/view/BackgroundManagement/throughTheManagement/editThroughTheManagement.vue'], resolve),
  // meta: ['通证管理', '通证', '通证管理']
}, {
  //  通证管理
  path: '/throughTheManagement/throughDd',
  name: 'throughDd',
  component: (resolve) => require(['@/view/BackgroundManagement/throughTheManagement/throughDd.vue'], resolve),
  meta: ['通证管理', '通证', '通证订单']
}]