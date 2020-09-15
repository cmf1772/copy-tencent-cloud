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
        path: '/navShop',
        text: '店铺导航',
        name: 'navShop',
        icon: 'el-icon-film',
      }, {
        path: '/shop',
        text: '用户中心',
        name: 'shop',
        icon: 'el-icon-user',
      }, {
        path: '/shop',
        text: '列表模块',
        name: 'shop',
        icon: 'el-icon-user',
      }, {
        path: '/shop',
        text: '分类模版',
        name: 'shop',
        icon: 'el-icon-user',
      }, {
        path: '/shop',
        text: '搜索页',
        name: 'shop',
        icon: 'el-icon-user',
      }, {
        path: '/shop',
        text: '店铺色系',
        name: 'shop',
        icon: 'el-icon-takeaway-box',
      }]
    }
  ]
}]