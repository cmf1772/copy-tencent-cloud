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
        path: '/shop',
        text: '店铺',
        name: 'shop',
        icon: 'el-icon-collection',
      }]
    }
  ]
}]