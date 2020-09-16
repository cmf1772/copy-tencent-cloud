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
    }
  ]
}]