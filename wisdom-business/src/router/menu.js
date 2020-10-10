export default [{
  path: '/survey',
  name: 'settlement',
  icon: 'gongzuotai',
  component: '',
  children: [
    {
      path: '/survey',
      name: 'survey',
      text: '概况',
      component: '',
      icon: 'el-icon-menu'
    },
    {
      path: '/shop',
      text: '店铺',
      name: 'shop',
      icon: 'el-icon-collection',
      children: [{
        path: '/shopPage',
        text: '店铺页面',
        name: 'shop',
        icon: 'el-icon-film',
      }, {
        path: '/error',
        text: '店铺导航',
        name: 'error',
        icon: 'el-icon-film',
      }, {
        path: '/error',
        text: '用户中心',
        name: 'error',
        icon: 'el-icon-user',
      }, {
        path: '/error',
        text: '列表模块',
        name: 'error',
        icon: 'el-icon-user',
      }, {
        path: '/error',
        text: '分类模版',
        name: 'error',
        icon: 'el-icon-user',
      }, {
        path: '/error',
        text: '搜索页',
        name: 'error',
        icon: 'el-icon-user',
      }, {
        path: '/error',
        text: '店铺色系',
        name: 'error',
        icon: 'el-icon-takeaway-box',
      }]
    },
    {
      path: '/shop',
      text: '商品',
      name: 'shop',
      icon: 'el-icon-magic-stick',
      children: [{
        path: '/listOfUnit',
        text: '单品库列表',
        name: 'listOfUnit',
        icon: 'el-icon-data-analysis',
      }, {
        path: '/Classification',
        text: '单品库分类',
        name: 'Classification',
        icon: 'el-icon-data-analysis',
      }, {
        path: '/shopList',
        text: '商品库列表',
        name: 'shopList',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/commodityGrouping',
        text: '商品分组',
        name: 'commodityGrouping',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/productLabel',
        text: '商品标签',
        name: 'productLabel',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/detailedTemplate',
        text: '商详模板',
        name: 'detailedTemplate',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/commodityAttributes',
        text: '商品属性',
        name: 'commodityAttributes',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/profileTemplate',
        text: '档案模板',
        name: 'profileTemplate',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/productList',
        text: '商品列表',
        name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/productReviews',
        text: '商品评论',
        name: 'productReviews',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/error',
        text: '供货中心',
        name: 'error',
        icon: 'el-icon-news',
      }]
    },
    {
      path: '/shop',
      text: '库存',
      name: 'shop',
      icon: 'el-icon-s-goods',
      children: [{
        path: '/storeInventory',
        text: '门店库存',
        name: 'storeInventory',
        icon: 'el-icon-s-cooperation',
      }, {
        path: '/inOutDetails',
        text: '出入库明细',
        name: 'inOutDetails',
        icon: 'el-icon-s-cooperation',
      }, {
        path: '/inReceipt',
        text: '入库单',
        name: 'inReceipt',
        icon: 'el-icon-s-cooperation',
      }, {
        path: '/outReceipt',
        text: '出库单',
        name: 'outReceipt',
        icon: 'el-icon-s-cooperation',
      }, {
        path: '/lnventoryChecking',
        text: '库存盘点',
        name: 'lnventoryChecking',
        icon: 'el-icon-s-cooperation',
      }, {
        path: '/inventoryChecking',
        text: '库存控制',
        name: 'inventoryChecking',
        icon: 'el-icon-s-cooperation',
      }, { //--
        path: '/InventorySearch',
        text: '库存查询',
        name: 'InventorySearch',
        icon: 'el-icon-search',
      }, { // --
        path: '/shippingReport',
        text: '出货报告',
        name: 'shippingReport',
        icon: 'el-icon-partly-cloudy',
      }, {
        path: '/shippingIn',
        text: '进货报告',
        name: 'shippingIn',
        icon: 'el-icon-partly-cloudy',
      }, { // --
        path: '/setting',
        text: '供应商管理',
        name: 'setting',
        icon: 'el-icon-setting',
      }]
    },
    {
      path: '/shop',
      text: '门店',
      name: 'shop',
      icon: 'el-icon-shopping-cart-1',
      children: [{
        path: '/storeList',
        text: '门店列表',
        name: 'storeList',
        icon: 'el-icon-sell',
      }, {
        path: '/performanceSetting',
        text: '业绩设置',
        name: 'performanceSetting',
        icon: 'el-icon-sell',
      }, {
        path: '/performanceDetails',
        text: '业绩明细',
        name: 'performanceDetails',
        icon: 'el-icon-sell',
      }, {
        path: '/entryRules',
        text: '进店规则',
        name: 'entryRules',
        icon: 'el-icon-sell',
      }, {///-----
        path: '/regionalManagement',
        text: '区域管理',
        name: 'regionalManagement',
        icon: 'el-icon-present',
      }, {// ---
        path: '/shoppingManagement',
        text: '导购管理',
        name: 'shoppingManagement',
        icon: 'el-icon-box',
      }, {
        path: '/error',
        text: '导购设置',
        name: 'shoppingSetting',
        icon: 'el-icon-box',
      }, {
        path: '/statisticalReport',
        text: '统计报表',
        name: 'statisticalReport',
        icon: 'el-icon-box',
      }, {// ---
        path: '/setup',
        text: '交易设置',
        name: 'setup',
        icon: 'el-icon-bank-card',
      }, {
        path: '/ticketSetting',
        text: '小票设置',
        name: 'ticketSetting',
        icon: 'el-icon-bank-card',
      }, {
        path: '/cashRegister',
        text: '收银台交班',
        name: 'cashRegister',
        icon: 'el-icon-bank-card',
      }]
    },
    {
      path: '/shop',
      text: '订单',
      name: 'shop',
      icon: 'el-icon-box',
      children: [{
        path: '/allOrders',
        text: '全部订单',
        name: 'allOrders',
        icon: 'el-icon-sell',
      }, {
        path: '/recharge0rder',
        text: '充值订单',
        name: 'recharge0rder',
        icon: 'el-icon-sell',
      }, {
        path: '/consumerOrder',
        text: '消费订单',
        name: 'consumerOrder',
        icon: 'el-icon-sell',
      }, {
        path: '/delivery',
        text: '发货管理',
        name: 'delivery',
        icon: 'el-icon-sell',
      }, {///-----
        path: '/selfRaised',
        text: '自提管理',
        name: 'selfRaised',
        icon: 'el-icon-present',
      }, {// ---
        path: '/toBeAllocated',
        text: '待分配订单',
        name: 'toBeAllocated',
        icon: 'el-icon-box',
      }, {
        path: '/communityOrder',
        text: '社区订单管理',
        name: 'communityOrder',
        icon: 'el-icon-box',
      }, {
        path: '/distributionSupply',
        text: '分销供货订单',
        name: 'distributionSupply',
        icon: 'el-icon-box',
      }, {// ---
        path: '/afterSale',
        text: '售后订单',
        name: 'afterSale',
        icon: 'el-icon-bank-card',
      }, {
        path: '/paymentOrderQuery',
        text: '支付单查询',
        name: 'paymentOrderQuery',
        icon: 'el-icon-bank-card',
      }, {
        path: '/cashRegister',
        text: '历史订单',
        name: 'cashRegister',
        icon: 'el-icon-bank-card',
      }, {
        path: '/cashRegister',
        text: '店铺合并',
        name: 'cashRegister',
        icon: 'el-icon-bank-card',
      }]
    },
    {
      path: '/shop',
      text: '客户',
      name: 'shop',
      icon: 'el-icon-magic-stick',
      children: [{
        path: '/allCustoms',
        text: '全部客户',
        name: 'allCustoms',
        icon: 'el-icon-data-analysis',
      }, {
        path: '/customerTag',
        text: '客户标签',
        name: 'customerTag',
        icon: 'el-icon-data-analysis',
      }, {
        path: '/customerSetting',
        text: '客户设置',
        name: 'customerSetting',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/commodityGrouping',
        text: '客户分群',
        name: 'commodityGrouping',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/productLabel',
        text: '黑名单管理',
        name: 'productLabel',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/detailedTemplate',
        text: '会员设置',
        name: 'detailedTemplate',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/commodityAttributes',
        text: '会员权益',
        name: 'commodityAttributes',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/profileTemplate',
        text: '积分管理',
        name: 'profileTemplate',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/productList',
        text: '储值管理',
        name: 'productList',
        icon: 'el-icon-toilet-paper',
      }]
    },
    {
      path: '/shop',
      text: '营销',
      name: 'shop',
      icon: 'el-icon-sell ',
      children: [{
        path: '/marketingCenter',
        text: '营销中心',
        name: 'marketingCenter',
        icon: 'el-icon-data-analysis',
      }, {
        path: '/promotionCenter',
        text: '推广中心',
        name: 'promotionCenter',
        icon: 'el-icon-data-analysis',
      }, {
        path: '/advertisingPromotion',
        text: '渠道追踪',
        name: 'advertisingPromotion',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/error',
        text: '全部服务',
        name: 'error',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/myApp',
        text: '我的应用',
        name: 'myApp',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/myOrder',
        text: '我的订单',
        name: 'myOrder',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/commodityAttributes',
        text: '开发者中心',
        name: 'commodityAttributes',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/price',
        text: '开发指南 ',
        // name: 'profileTemplate',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/price',
        text: 'API指南',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }]
    },
    {
      path: '/shop',
      text: '慧付',
      name: 'shop',
      icon: 'el-icon-cpu',
      children: [{
        path: '/marketingCenter',
        text: '支付账号',
        name: 'marketingCenter',
        icon: 'el-icon-data-analysis',
      }, {
        path: '/promotionCenter',
        text: '收款配置',
        name: 'promotionCenter',
        icon: 'el-icon-data-analysis',
      }, {
        path: '/advertisingPromotion',
        text: '付款配置',
        name: 'advertisingPromotion',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/error',
        text: '线下收款',
        name: 'error',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/myApp',
        text: '营收概况',
        name: 'myApp',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/myOrder',
        text: '财务明细',
        name: 'myOrder',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/commodityAttributes',
        text: '线上交易',
        name: 'commodityAttributes',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/price',
        text: '线上退款 ',
        // name: 'profileTemplate',
        icon: 'el-icon-notebook-2',
      }, {
        path: '/price',
        text: '对账报表',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '业务分账',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '线上分账',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '分账解冻',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '应付账单',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '提现管理',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '付款记录',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '直播应收',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '分账订单',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '三方物流',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '积分明细',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '余额明细',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '微客奖励',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '社区团购',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '电票配置',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '电票订单',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '发票管理',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '我的账户',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '提现订单',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '余额对账',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '发票管理',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }, {
        path: '/price',
        text: '导出管理',
        // name: 'productList',
        icon: 'el-icon-toilet-paper',
      }]
    }
  ]
}]