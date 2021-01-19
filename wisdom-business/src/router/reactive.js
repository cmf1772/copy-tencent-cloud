export default [
  {
    path: '/',
    name: 'home',
    component: (resolve) =>
      require(['@/view/home/home.vue'], resolve),
    redirect: '/home/product',
    children: [{
      path: '/home/product',
      name: 'product',
      component: (resolve) =>
        require(['@/view/product/product.vue'], resolve),
    }, {
      path: '/product',
      name: 'product',
      component: (resolve) =>
        require(['@/view/productPage/productPage.vue'], resolve),
    }, {
      path: '/solution',
      name: 'solution',
      component: (resolve) =>
        require(['@/view/solution/solution.vue'], resolve),
    }, {
      path: '/price',
      name: 'price',
      component: (resolve) => require(['@/view/price/price.vue'], resolve)
    }, {
      // 注册页面
      path: '/registered',
      name: 'registered',
      component: (resolve) => require(['@/view/login/registered.vue'], resolve)
    }, {
      // 注册页面
      path: '/registeredQ',
      name: 'registeredQ',
      component: (resolve) => require(['@/view/login/registeredQ.vue'], resolve)
    }, {
      // 注册页面
      path: '/selectVersion',
      name: 'selectVersion',
      component: (resolve) => require(['@/view/login/selectVersion.vue'], resolve)
    }, {
      // 注册页面
      path: '/success',
      name: 'success',
      component: (resolve) => require(['@/view/login/success.vue'], resolve)
    }, {
      // 注册页面
      path: '/registeredF',
      name: 'registeredF',
      component: (resolve) => require(['@/view/login/registeredF.vue'], resolve)
    }, {
      // 注册页面
      path: '/registeredW',
      name: 'registeredW',
      component: (resolve) => require(['@/view/login/registeredW.vue'], resolve)
    }, {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['@/view/login/login.vue'], resolve)
    }, {
      path: '/selectTheStore',
      name: 'selectTheStore',
      component: (resolve) => require(['@/view/settlement/smartRetail/selectTheStore.vue'], resolve)
    },]
  },
  {
    path: '/marketHome',
    name: 'marketHome',
    component: (resolve) => require(['@/view/market/marketHome.vue'], resolve),
    children: [{
      path: '/marketHome/viewPage',
      name: 'viewPath',
      component: (resolve) => require(['@/view/market/viewPage.vue'], resolve)
    }, {
      path: '/marketHome/products',
      name: 'products',
      component: (resolve) => require(['@/view/market/products/products.vue'], resolve)
    }, {
      path: '/marketHome/details',
      name: 'details',
      component: (resolve) => require(['@/view/market/products/details.vue'], resolve)
    }]
  },
  // 后台管理
  {
    path: '/settlement/switchProject',
    name: 'switchProject',
    component: (resolve) => require(['@/view/settlement/switchProject.vue'], resolve)

  }
]