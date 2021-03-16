let LARouter = [
  {
    path: "/develop/management/backMenu",
    name: "backMenu",
    meta: ["拓展管理", "拓展信息", "后台菜单"],
    component: resolve =>
      require(["@/view/LaPage/develop/management/backMenu.vue"], resolve)
  },
  {
    path: "/develop/management/imageMent",
    name: "imageMent",
    meta: ["拓展管理", "拓展信息", "图片管理"],
    component: resolve =>
      require(["@/view/LaPage/develop/management/imageMent.vue"], resolve)
  },
  {
    path: "/develop/management/textMessage",
    name: "textMessage",
    meta: ["拓展管理", "拓展信息", "短信发送"],
    component: resolve =>
      require(["@/view/LaPage/develop/management/textMessage.vue"], resolve)
  },
  {
    path: "/develop/management/groupMail",
    name: "groupMail",
    meta: ["拓展管理", "拓展信息", "邮件群发"],
    component: resolve =>
      require(["@/view/LaPage/develop/management/groupMail.vue"], resolve)
  },
  {
    path: "/develop/management/taobaoConversion",
    name: "taobaoConversion",
    meta: ["拓展管理", "拓展信息", "淘宝转换"],
    component: resolve =>
      require(["@/view/LaPage/develop/management/taobaoConversion.vue"], resolve)
  },
  {
    path: "/develop/management/trustManagement",
    name: "trustManagement",
    meta: ["拓展管理", "拓展信息", "托管管理"],
    component: resolve =>
      require(["@/view/LaPage/develop/management/trustManagement.vue"], resolve)
  },
  {
    path: "/develop/wechat/weChatmenu",
    name: "weChatmenu",
    meta: ["拓展管理", "微信整合", "微信菜单管理"],
    component: resolve => require(["@/view/LaPage/develop/wechat/menu.vue"], resolve)
  },
  {
    path: "/develop/log/adminLog",
    name: "adminLog",
    meta: ["拓展管理", "日志管理", "后台管理日志"],
    component: resolve => require(["@/view/LaPage/develop/log/adminLog.vue"], resolve)
  },
  {
    path: "/develop/log/taskLog",
    name: "taskLog",
    meta: ["拓展管理", "日志管理", "定期任务日志"],
    component: resolve => require(["@/view/LaPage/develop/log/taskLog.vue"], resolve)
  },
  {
    path: "/through/classify/classList",
    name: "classList",
    meta: ["通证管理", "分类信息管理", "分类信息列表"],
    component: resolve =>
      require(["@/view/LaPage/through/classify/classList.vue"], resolve)
  },
  {
    path: "/through/throughThe/management",
    name: "management",
    meta: ["通证管理", "通证管理", "通证管理"],
    component: resolve =>
      require(["@/view/LaPage/through/throughThe/management.vue"], resolve)
  },
  {
    path: "/through/throughThe/passOrder",
    name: "passOrder",
    meta: ["通证管理", "通证管理", "通证订单"],
    component: resolve =>
      require(["@/view/LaPage/through/throughThe/passOrder.vue"], resolve)
  },
  {
    path: "/through/throughThe/addManagement",
    name: "addManagement",
    meta: ["添加通证"],
    component: resolve =>
      require(["@/view/LaPage/through/throughThe/addManagement.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/merchant",
    name: "merchant",
    meta: ["平台设置", "基本设置", "商家设置"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/merchant.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/foundational",
    name: "foundational",
    meta: ["平台设置", "基本设置", "基础信息"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/foundational.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/service",
    name: "service",
    meta: ["平台设置", "基本设置", "客服设置"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/service.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/emailPlatform",
    name: "emailPlatform",
    meta: ["平台设置", "基本设置", "邮件平台"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/emailPlatform.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/setNote",
    name: "setNote",
    meta: ["平台设置", "基本设置", "短信设置"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/setNote.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/register",
    name: "register",
    meta: ["平台设置", "基本设置", "注册设置"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/register.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/scoreValue",
    name: "scoreValue",
    meta: ["平台设置", "基本设置", "分值比例"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/scoreValue.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/domain",
    name: "domain",
    meta: ["平台设置", "基本设置", "保留域名"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/domain.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/shopCertification",
    name: "shopCertification",
    meta: ["平台设置", "基本设置", "商铺认证"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/shopCertification.vue"], resolve)
  },
  {
    path: "/setPlatform/setBasic/setDomain",
    name: "setDomain",
    meta: ["平台设置", "基本设置", "域名设置"],
    component: resolve =>
      require(["@/view/LaPage/setPlatform/setBasic/setDomain.vue"], resolve)
  },
  {
    path: "/classSetting/classified",
    name: "classified",
    meta: ["分类设置", "分类信息"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/classified.vue"], resolve)
  },
  {
    path: "/classSetting/induStandard",
    name: "induStandard",
    meta: ["分类设置", "行业分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/induStandard.vue"], resolve)
  },
  {
    path: "/classSetting/jobCategory",
    name: "jobCategory",
    meta: ["分类设置", "招聘职位分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/jobCategory.vue"], resolve)
  },
  {
    path: "/classSetting/partTimeJob",
    name: "partTimeJob",
    meta: ["分类设置", "兼职类别"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/partTimeJob.vue"], resolve)
  },
  {
    path: "/classSetting/jobClassify",
    name: "jobClassify",
    meta: ["分类设置", "兼职职业分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/jobClassify.vue"], resolve)
  },
  {
    path: "/classSetting/regional",
    name: "regional",
    meta: ["分类设置", "地区管理"],
    component: resolve => require(["@/view/LaPage/classSetting/regional.vue"], resolve)
  },
  {
    path: "/classSetting/operation",
    name: "operation",
    meta: ["分类设置", "经营行业"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/operation.vue"], resolve)
  },
  {
    path: "/classSetting/carSystem",
    name: "carSystem",
    meta: ["分类设置", "品牌车系分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/carSystem.vue"], resolve)
  },
  {
    path: "/classSetting/vehicleTypes",
    name: "vehicleTypes",
    meta: ["分类设置", "车类车型分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/vehicleTypes.vue"], resolve)
  },
  {
    path: "/classSetting/rentalCar",
    name: "rentalCar",
    meta: ["分类设置", "租车分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/rentalCar.vue"], resolve)
  },
  {
    path: "/classSetting/parameter",
    name: "parameter",
    meta: ["分类设置", "参数管理"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/parameter.vue"], resolve)
  },
  {
    path: "/classSetting/photoAlbum",
    name: "photoAlbum",
    meta: ["分类设置", "相册分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/photoAlbum.vue"], resolve)
  },
  {
    path: "/classSetting/commodity",
    name: "commodity",
    meta: ["分类设置", "常规商品分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/commodity.vue"], resolve)
  },
  {
    path: "/classSetting/vipClass",
    name: "vipClass",
    meta: ["分类设置", "供求vip分类"],
    component: resolve => require(["@/view/LaPage/classSetting/vipClass.vue"], resolve)
  },
  {
    path: "/classSetting/knowledgeGood",
    name: "knowledgeGood",
    meta: ["分类设置", "知识商品分类"],
    component: resolve =>
      require(["@/view/LaPage/classSetting/knowledgeGood.vue"], resolve)
  },
  {
    path: "/classSetting/comKnow",
    name: "comKnow",
    meta: ["分类设置", "知识型商品分类"],
    component: resolve => require(["@/view/LaPage/classSetting/comKnow.vue"], resolve)
  },
  {
    path: "/shopMagement/shoPermissions",
    name: "shoPermissions",
    meta: ["商家管理", "商铺管理", "商铺权限"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/shoPermissions.vue"], resolve)
  },
  {
    path: "/shopMagement/shopDiction",
    name: "shopDiction",
    meta: ["商家管理", "商铺管理", "设置商铺权限"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/shopDiction.vue"], resolve)
  },
  {
    path: "/shopMagement/shopType",
    name: "shopType",
    meta: ["商家管理", "商铺管理", "商铺类型"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/shopType.vue"], resolve)
  },
  {
    path: "/shopMagement/substation",
    name: "substation",
    meta: ["商家管理", "商铺管理", "分站管理"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/substation.vue"], resolve)
  },
  {
    path: "/shopMagement/headOffice",
    name: "headOffice",
    meta: ["商家管理", "商铺管理", "总店管理"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/headOffice.vue"], resolve)
  },
  {
    path: "/shopMagement/recommend",
    name: "recommend",
    meta: ["商家管理", "商铺管理", "推荐广告"],
    component: resolve => require(["@/view/LaPage/shopMagement/recommend.vue"], resolve)
  },
  {
    path: "/shopMagement/shopList",
    name: "shopList",
    meta: ["商家管理", "商铺管理", "商铺列表"],
    component: resolve => require(["@/view/LaPage/shopMagement/shopList.vue"], resolve)
  },
  {
    path: "/shopMagement/starryShop",
    name: "starryShop",
    meta: ["商家管理", "商铺管理", "星店管理"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/starryShop.vue"], resolve)
  },
  {
    path: "/shopMagement/cloundShop",
    name: "cloundShop",
    meta: ["商家管理", "商铺管理", "云店管理"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/cloundShop.vue"], resolve)
  },
  {
    path: "/shopMagement/buyersEvaluation",
    name: "buyersEvaluation",
    meta: ["商家管理", "商铺管理", "买家评价"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/buyersEvaluation.vue"], resolve)
  },
  {
    path: "/shopMagement/sellerEvaluation",
    name: "sellerEvaluation",
    meta: ["商家管理", "商铺管理", "卖家评价"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/sellerEvaluation.vue"], resolve)
  },
  {
    path: "/shopMagement/upgradeReview",
    name: "upgradeReview",
    meta: ["商家管理", "商铺管理", "升级审核"],
    component: resolve =>
      require(["@/view/LaPage/shopMagement/upgradeReview.vue"], resolve)
  },
  {
    path: "/PlatForm/Navigation/naviment",
    name: "naviment",
    meta: ["平台装修", "导航信息", "导航管理"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/Navigation/naviment.vue"], resolve)
  },
  {
    path: "/PlatForm/Navigation/headNaviment",
    name: "headNaviment",
    meta: ["平台装修", "导航信息", "头部导航"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/Navigation/headNaviment.vue"], resolve)
  },
  {
    path: "/PlatForm/Navigation/middleNaviment",
    name: "middleNaviment",
    meta: ["平台装修", "导航信息", "中部导航"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/Navigation/middleNaviment.vue"], resolve)
  },
  {
    path: "/PlatForm/Navigation/bottomNaviment",
    name: "bottomNaviment",
    meta: ["平台装修", "导航信息", "底部导航"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/Navigation/bottomNaviment.vue"], resolve)
  },
  {
    path: "/PlatForm/Navigation/messageNaviment",
    name: "messageNaviment",
    meta: ["平台装修", "导航信息", "资讯导航"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/Navigation/messageNaviment.vue"], resolve)
  },
  {
    path: "/PlatForm/Navigation/helpNaviment",
    name: "helpNaviment",
    meta: ["平台装修", "导航信息", "帮助中心"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/Navigation/helpNaviment.vue"], resolve)
  },
  {
    path: "/PlatForm/PageInformation/pageMangement",
    name: "pageMangement",
    meta: ["平台装修", "页面信息", "页面管理"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/PageInformation/pageMangement.vue"], resolve)
  },
  {
    path: "/PlatForm/PageInformation/addPageMangement",
    name: "addPageMangement",
    meta: ["平台装修", "页面信息", "添加页面管理"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/PageInformation/addPageMangement.vue"], resolve)
  },
  {
    path: "/PlatForm/SpecialMangment/shopsMap",
    name: "shopsMap",
    meta: ["平台装修", "特殊广告管理", "商铺地图"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/SpecialMangment/shopsMap.vue"], resolve)
  },
  {
    path: "/PlatForm/SpecialMangment/webDvertising",
    name: "webDvertising",
    meta: ["平台装修", "特殊广告管理", "轮转广告"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/SpecialMangment/webDvertising.vue"], resolve)
  },
  {
    path: "/PlatForm/SpecialMangment/mobileRotation",
    name: "mobileRotation",
    meta: ["平台装修", "特殊广告管理", "手机轮转广告"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/SpecialMangment/mobileRotation.vue"], resolve)
  },
  {
    path: "/PlatForm/SpecialMangment/displayDvertising",
    name: "displayDvertising",
    meta: ["平台装修", "特殊广告管理", "图片广告"],
    component: resolve =>
      require([
        "@/view/LaPage/PlatForm/SpecialMangment/displayDvertising.vue"
      ], resolve)
  },
  {
    path: "/PlatForm/SpecialMangment/popUpad",
    name: "popUpad",
    meta: ["平台装修", "特殊广告管理", "弹窗广告"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/SpecialMangment/popUpad.vue"], resolve)
  },
  {
    path: "/PlatForm/BusinessCenter/showMerchants",
    name: "showMerchants",
    meta: ["平台装修", "商铺中心", "商家展示"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/BusinessCenter/showMerchants.vue"], resolve)
  },
  {
    path: "/PlatForm/BusinessCenter/templateTobuy",
    name: "templateTobuy",
    meta: ["平台装修", "商铺中心", "模板购买"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/BusinessCenter/templateTobuy.vue"], resolve)
  },
  {
    path: "/PlatForm/partner/linksPage",
    name: "linksPage",
    meta: ["平台装修", "合作伙伴", "友情连接"],
    component: resolve =>
      require(["@/view/LaPage/PlatForm/partner/linksPage.vue"], resolve)
  },
  {
    path: "/serveMent/CarpooInformation/supplyGood",
    name: "supplyGood",
    meta: ["服务管理", "拼车信息", "供应商品"],
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpooInformation/supplyGood.vue"], resolve)
  },
  {
    path: "/serveMent/CarpooInformation/demandInfo",
    name: "demandInfo",
    meta: ["服务管理", "拼车信息", "需求信息"],
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpooInformation/demandInfo.vue"], resolve)
  },
  {
    path: "/serveMent/CarpooInformation/busMessage",
    name: "busMessage",
    meta: ["服务管理", "拼车信息", "商机留言"],
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpooInformation/busMessage.vue"], resolve)
  },
  {
    path: "/serveMent/CarpoolingOrders/customerOrder",
    name: "customerOrder",
    meta: ["服务管理", "拼车订单", "客户订单"],
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpoolingOrders/customerOrder.vue"], resolve)
  },
  {
    path: "/serveMent/CarpoolingOrders/returnsChannel",
    name: "returnsChannel",
    meta: ["服务管理", "拼车订单", "退货通道"],
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpoolingOrders/returnsChannel.vue"], resolve)
  },
  {
    path: "/serveMent/CarpoolingVIP/commInfoVip",
    name: "commInfoVip",
    meta: ["服务管理", "拼车VIP", "商品信息vip"],
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpoolingVIP/commInfoVip.vue"], resolve)
  },
  {
    path: "/serveMent/CarpoolingVIP/taskInfoVip",
    name: "taskInfoVip",
    meta: ["服务管理", "拼车VIP", "任务信息vip"],
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpoolingVIP/taskInfoVip.vue"], resolve)
  },
  {
    path: "/serveMent/CarpoolingVIP/custInfoVip",
    name: "custInfoVip",
    meta: ["服务管理", "拼车VIP", "客户留言vip"],
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpoolingVIP/custInfoVip.vue"], resolve)
  },
  {
    path: "/orderDetail",
    name: "orderDetail",
    component: resolve =>
      require(["@/view/LaPage/serveMent/CarpoolingOrders/orderDetail.vue"], resolve)
  }
];

export default LARouter;
