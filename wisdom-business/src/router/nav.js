let navArr = [
  {
    id: 'PROVIDER',
    text: '个人中心',
    icon: 'el-icon-box',
    menu: '1-1',
    // 1、账号管理  2、资金管理  3、收货地址  4、短消息
    subset: [{
      id: 'PROVIDER_LIST',
      text: '账号管理',  //我的账号
      icon: 'el-icon-menu',
      path: '/provider/list',
      menu: true,
      children: [{
        text: '修改资料',
        path: '/shopManagement/shippingAddress'
      },
      {
        text: '收货地址',
        path: '/shopManagement/modifyTheData',
      }, {
        text: '短消息',
        path: '/provider/list',
      }
        // {
        //   text: '短消息',
        //   path: '/company/edit',
        //   parent: '/company/list'
        // }
      ]
    }, {
      id: 'PROVIDER_LIST',
      text: '资金管理', //我的资金
      icon: 'el-icon-menu',
      path: '/provider/list',
      menu: true,
      children: [{
        text: '账户概览',
        // path: '/shopManagement/shippingAddress'
      },
      {
        text: '积分明细',
        // path: '/shopManagement/modifyTheData',
      }, {
        text: '资金明细',
        // path: '/provider/list',
      }
      ]
    },]
  },
  {
    id: 'PROVIDER',
    text: '商铺设置',
    icon: 'el-icon-box',
    menu: '1-1',
    subset: [
      {
        id: 'PROVIDER_LIST',
        text: '商铺装修',
        icon: 'el-icon-menu',
        // path: '/provider/list',
        menu: true,
        children: [
          {
            text: '页面管理',
            path: '/shopManagement/shopManagement',
            // parent: '/company/list'
          },
          // {
          //   text: '商铺地图',
          //   path: '/company/edit',
          //   // parent: '/company/list'
          // },
          {
            text: '手机轮转广告',
            path: '/shopManagement/mobilePhoneBy',
          },
          {
            text: '轮转广告',
            path: '/shopManagement/phoneBy',
          },
          {
            text: '图片广告',
            path: '/shopManagement/imageAds',
          },
          {
            text: '弹窗广告',
            path: '/shopManagement/popUpAds',
          },
          {
            text: '商家展示',
            path: '/shopManagement/showMerchants'
          },
          {
            text: '模版购买',
            path: '/shopManagement/templateToBuy',
          },
          {
            text: '友情连接',
            path: '/shopManagement/friendshipConnection',
          }
        ]
      }, {
        id: 'PROVIDER_LIST',
        text: '商铺设置',
        icon: 'el-icon-menu',
        path: '/provider/list',
        menu: true,
        children: [{
          text: '导航管理',
          path: '/setUpShops/navigationManagement'
        }, {
          text: '基础信息',
          path: '/setUpShops/information'
        }, {
          text: '客服设置',
          path: '/setUpShops/settingService'
        }, {
          text: '短信设置',
          path: '/setUpShops/SMSSettings',
        }, {
          text: '商铺认证',
          path: '/setUpShops/shopCertification'
        }, {
          text: '域名设置',
          path: '/setUpShops/theHttp'
        }]
      }, {
        id: 'PROVIDER_LIST',
        text: '拓展管理',
        icon: 'el-icon-menu',
        path: '/provider/list',
        menu: true,
        children: [{
          text: '图片管理',
          path: '/developManagement/imageManagement'
        }, {
          text: '淘宝转换',
          path: '/developManagement/taobaoConversion'
        }, {
          text: '托管管理',
          path: '/developManagement/trustManagement'
        },
          // {
          //   text: '微信菜单管理',
          //   path: '/company/edit',
          //   parent: '/company/list'
          // }
        ]
      }
    ]
  },
  // {
  //   id: 'COMPANY',
  //   text: '企业户管理',
  //   icon: 'el-icon-box',
  //   subset: [
  //     {
  //       id: 'PROVIDER_LIST',
  //       text: '企业户列表',
  //       icon: 'el-icon-menu',
  //       path: '/company/list',
  //       menu: true,
  //     }
  //   ]
  // },
  {
    id: 'PRODUCT',
    text: '商品管理',
    icon: 'el-icon-box',
    menu: '1-1',
    subset: [
      {
        id: 'PRODUCT_LIST',
        text: '商品管理',
        icon: 'el-icon-menu',
        path: '/product/list',
        menu: true,
        children: [{
          text: '常规商品管理',
          path: '/commodity/conventionalKnowledge'
        },
        //  {
        //   text: '知识商品管理',
        //   path: '/commodity/productsKnowledge'
        // }, 
        {
          text: '拼团商品管理',
          path: '/commodity/spellMassGoods'
        }, {
          text: '返利商品管理',
          path: '/commodity/rebateGoods'
        }, {
          text: '秒杀商品管理',
          path: '/commodity/secondsKillGoods'
        }, {
          text: '团购商品管理',
          path: '/commodity/bulkGoods'
        }, {
          text: '拍卖商品管理',
          path: '/commodity/auctionGoods'
        }, {
          text: '分销商品管理',
          path: '/commodity/distributionGoods'
        }, {
          text: '批发商品管理',
          path: '/commodity/wholesaleGoods'
        }, {
          text: '未上架商品',
          path: '/commodity/notGoods'
        }]
      },
      {
        id: 'PRODUCT_LIST',
        text: '分类设置',
        icon: 'el-icon-menu',
        path: '/product/category/list',
        menu: true,
        children: [{
          text: '常规商品分类',
          path: '/conventionalProducts/conventionalProducts'
        }]
      },
      // {
      //   id: 'PRODUCT_CATEGORY_LIST',
      //   text: '产品分类列表',
      //   icon: 'el-icon-menu',
      //   path: '/product/category/list',
      //   menu: true,
      //   children: [
      //     {
      //       text: '新增产品分类',
      //       path: '/product/category/add',
      //       parent: '/product/category/list'
      //     },
      //     {
      //       text: '修改产品分类',
      //       path: '/product/category/edit',
      //       parent: '/product/category/list'
      //     }
      //   ]
      // }
    ]
  },
  {
    id: 'INFORMATION',
    text: '内容管理',
    icon: 'el-icon-box',
    menu: '1',
    subset: [
      {
        id: 'INFORMATION_LIST',
        text: '杂志管理',
        icon: 'el-icon-menu',
        path: '/contentManagement/magazineManagement',
        menu: true,
        // children: [
        //   {
        //     text: '新增资讯',
        //     path: '/information/add',
        //     parent: '/information/list'
        //   },
        //   {
        //     text: '修改资讯',
        //     path: '/information/edit',
        //     parent: '/information/list'
        //   }
        // ]
      },
      // {
      // id: 'INFORMATION_TYPE_LIST',
      // text: '资讯类型列表',
      // icon: 'el-icon-menu',
      // path: '/information/type/list',
      // menu: true,
      // children: [
      //   {
      //     text: '新增资讯类型',
      //     path: '/information/type/add',
      //     parent: '/information/type/list'
      //   },
      //   {
      //     text: '修改资讯类型',
      //     path: '/information/type/edit',
      //     parent: '/information/type/list'
      //   }
      // ]
      // }
    ]
  },
  {
    id: 'IOT',
    text: '订单管理',
    icon: 'el-icon-s-platform',
    menu: '1-1',
    subset: [
      {
        id: 'IOT_REPORT',
        text: '交易管理',
        icon: 'el-icon-link',
        path: '/report/main',
        menu: true,
        children: [
          // {
          //   text: '知识订单',
          //   path: '/transactionManagement/magazineManagement'
          // },
          {
            text: '订单管理',
            path: '/transactionManagement/customerOrder'
          },
          // {
          //   text: '退货通道',
          //   path: '/transactionManagement/returnsChannel'
          // },
          {
            text: '拼团订单',
            path: '/transactionManagement/spellGroupOrder'
          },
          {
            text: '体现申请',
            path: '/transactionManagement/toApplyFor'
          },
          // {
          //   text: '拼团退货',
          //   path: '/transactionManagement/spellGroupReturns'
          // },
          {
            text: '物流工具',
            path: '/transactionManagement/logisticsTools'
          },
          {
            text: '销售商品咨询',
            path: '/transactionManagement/consultation'
          },
          {
            text: '评价买家',
            path: '/transactionManagement/evaluationOfTheBuyer'
          },
          {
            text: '消保明细',
            path: '/transactionManagement/fromTheDetail'
          },
          // {
          //   text: '信用管理',
          //   path: '/group/edit',
          //   parent: '/group/list'
          // },
          {
            text: '我的返佣订单',
            path: '/transactionManagement/orderManagement'
          }
        ]
      }
      // ,
      // {
      //   id: 'GROUP_LIST',
      //   text: '设备分组列表',
      //   icon: 'el-icon-link',
      //   path: '/group/list',
      //   menu: true,

      // },
      // {
      //   id: 'DEVICE_LIST',
      //   text: '设备列表',
      //   icon: 'el-icon-link',
      //   path: '/device/list',
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: '新增设备',
      //   //     path: '/device/add',
      //   //     parent: '/device/list'
      //   //   },
      //   //   {
      //   //     text: '修改设备',
      //   //     path: '/device/edit',
      //   //     parent: '/device/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'DRIVER_LIST',
      //   text: '驱动列表',
      //   icon: 'el-icon-link',
      //   path: '/driver/list',
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: '新增驱动',
      //   //     path: '/driver/add',
      //   //     parent: '/driver/list'
      //   //   },
      //   //   {
      //   //     text: '修改驱动',
      //   //     path: '/driver/edit',
      //   //     parent: '/driver/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'DRIVER_ATTRIBUTE_LIST',
      //   text: '驱动属性列表',
      //   icon: 'el-icon-link',
      //   path: '/driverAttribute/list',
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: '新增驱动属性',
      //   //     path: '/driverAttribute/add',
      //   //     parent: '/driverAttribute/list'
      //   //   },
      //   //   {
      //   //     text: '修改驱动属性',
      //   //     path: '/driverAttribute/edit',
      //   //     parent: '/driverAttribute/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'DRIVER_INFO_LIST',
      //   text: '驱动配置列表',
      //   icon: 'el-icon-link',
      //   path: '/driverInfo/list',
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: '新增驱动配置',
      //   //     path: '/driverInfo/add',
      //   //     parent: '/driverInfo/list'
      //   //   },
      //   //   {
      //   //     text: '修改驱动配置',
      //   //     path: '/driverInfo/edit',
      //   //     parent: '/driverInfo/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'POINT_ATTRIBUTE_LIST',
      //   text: '位号属性列表',
      //   icon: 'el-icon-link',
      //   path: '/pointAttribute/list',
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: '新增位号属性',
      //   //     path: '/pointAttribute/add',
      //   //     parent: '/pointAttribute/list'
      //   //   },
      //   //   {
      //   //     text: '修改位号属性',
      //   //     path: '/pointAttribute/edit',
      //   //     parent: '/pointAttribute/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'PROFILE_LIST',
      //   text: '模板列表',
      //   icon: 'el-icon-link',
      //   path: '/profile/list',
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: '新增模板',
      //   //     path: '/profile/add',
      //   //     parent: '/profile/list'
      //   //   },
      //   //   {
      //   //     text: '修改模板',
      //   //     path: '/profile/edit',
      //   //     parent: '/profile/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'POINT_LIST',
      //   text: '位号列表',
      //   icon: 'el-icon-link',
      //   path: '/point/list',
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: '新增位号',
      //   //     path: '/point/add',
      //   //     parent: '/point/list'
      //   //   },
      //   //   {
      //   //     text: '修改位号',
      //   //     path: '/point/edit',
      //   //     parent: '/point/list'
      //   //   }
      //   // ]
      // },

      // {
      //   id: 'POINT_INFO_LIST',
      //   text: '位号配置列表',
      //   icon: 'el-icon-link',
      //   path: '/pointInfo/list',
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: '新增位号配置',
      //   //     path: '/pointInfo/add',
      //   //     parent: '/pointInfo/list'
      //   //   },
      //   //   {
      //   //     text: '修改位号配置',
      //   //     path: '/pointInfo/edit',
      //   //     parent: '/pointInfo/list'
      //   //   }
      //   // ]
      // },
    ]
  },
  {
    id: "SYSTEM",
    text: "营销助手",
    icon: "el-icon-s-cooperation",
    menu: '1-1',
    subset: [
      {
        id: 'ADMIN_LIST',
        text: "营销管理",
        icon: "el-icon-user",
        path: "/admin/list",
        menu: true,
        children: [
          {
            text: "优惠卷管理",
            path: "/marketingManagement/couponManagement"
          },
          {
            text: "积分汇专区",
            path: "/marketingManagement/bonusPointArea"
          },
          {
            text: "广告管理",
            path: "/marketingManagement/advertisingManagement"
          },
          {
            text: "自定义区域",
            path: "/marketingManagement/customArea"
          },
          {
            text: "商品排行",
            path: "/marketingManagement/commodityList"
          },
          {
            text: "品牌管理",
            path: "/marketingManagement/brandManagement"
          },
          {
            text: "水印设置",
            path: "/marketingManagement/watermarkIsSet"
          }
        ]
      },
      // {
      //   id: 'ROLE_LIST',
      //   text: "角色列表",
      //   icon: "el-icon-edit",
      //   path: "/role/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增角色",
      //   //     path: "/role/add",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "修改角色",
      //   //     path: "/role/edit",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "菜单功能权限",
      //   //     path: "/role/menus",
      //   //     parent: '/role/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'MENU_LIST',
      //   text: "菜单列表",
      //   icon: "el-icon-edit",
      //   path: "/menu/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增菜单",
      //   //     path: "/menu/add",
      //   //     parent: '/menu/list'
      //   //   },
      //   //   {
      //   //     text: "修改菜单",
      //   //     path: "/menu/edit",
      //   //     parent: '/menu/list'
      //   //   }
      //   // ]
      // }

    ]
  },
  {
    id: "SYSTEM",
    text: "设备管理",
    icon: "el-icon-s-cooperation",
    menu: '1',
    subset: [
      {
        id: 'IOT_REPORT',
        text: '数据报表',
        icon: 'el-icon-link',
        path: '/report/main',
        menu: true,
      },
      {
        id: 'GROUP_LIST',
        text: '设备分组列表',
        icon: 'el-icon-link',
        path: '/group/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增分组',
        //     path: '/group/add',
        //     parent: '/group/list'
        //   },
        //   {
        //     text: '修改分组',
        //     path: '/group/edit',
        //     parent: '/group/list'
        //   }
        // ]
      },
      {
        id: 'DEVICE_LIST',
        text: '设备列表',
        icon: 'el-icon-link',
        path: '/device/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增设备',
        //     path: '/device/add',
        //     parent: '/device/list'
        //   },
        //   {
        //     text: '修改设备',
        //     path: '/device/edit',
        //     parent: '/device/list'
        //   }
        // ]
      },
      {
        id: 'DRIVER_LIST',
        text: '驱动列表',
        icon: 'el-icon-link',
        path: '/driver/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增驱动',
        //     path: '/driver/add',
        //     parent: '/driver/list'
        //   },
        //   {
        //     text: '修改驱动',
        //     path: '/driver/edit',
        //     parent: '/driver/list'
        //   }
        // ]
      },

      {
        id: 'DRIVER_ATTRIBUTE_LIST',
        text: '驱动属性列表',
        icon: 'el-icon-link',
        path: '/driverAttribute/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增驱动属性',
        //     path: '/driverAttribute/add',
        //     parent: '/driverAttribute/list'
        //   },
        //   {
        //     text: '修改驱动属性',
        //     path: '/driverAttribute/edit',
        //     parent: '/driverAttribute/list'
        //   }
        // ]
      },
      {
        id: 'DRIVER_INFO_LIST',
        text: '驱动配置列表',
        icon: 'el-icon-link',
        path: '/driverInfo/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增驱动配置',
        //     path: '/driverInfo/add',
        //     parent: '/driverInfo/list'
        //   },
        //   {
        //     text: '修改驱动配置',
        //     path: '/driverInfo/edit',
        //     parent: '/driverInfo/list'
        //   }
        // ]
      },

      {
        id: 'POINT_ATTRIBUTE_LIST',
        text: '位号属性列表',
        icon: 'el-icon-link',
        path: '/pointAttribute/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增位号属性',
        //     path: '/pointAttribute/add',
        //     parent: '/pointAttribute/list'
        //   },
        //   {
        //     text: '修改位号属性',
        //     path: '/pointAttribute/edit',
        //     parent: '/pointAttribute/list'
        //   }
        // ]
      },

      {
        id: 'PROFILE_LIST',
        text: '模板列表',
        icon: 'el-icon-link',
        path: '/profile/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增模板',
        //     path: '/profile/add',
        //     parent: '/profile/list'
        //   },
        //   {
        //     text: '修改模板',
        //     path: '/profile/edit',
        //     parent: '/profile/list'
        //   }
        // ]
      },

      {
        id: 'POINT_LIST',
        text: '位号列表',
        icon: 'el-icon-link',
        path: '/point/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增位号',
        //     path: '/point/add',
        //     parent: '/point/list'
        //   },
        //   {
        //     text: '修改位号',
        //     path: '/point/edit',
        //     parent: '/point/list'
        //   }
        // ]
      },

      {
        id: 'POINT_INFO_LIST',
        text: '位号配置列表',
        icon: 'el-icon-link',
        path: '/pointInfo/list',
        menu: true,
        // children: [
        //   {
        //     text: '新增位号配置',
        //     path: '/pointInfo/add',
        //     parent: '/pointInfo/list'
        //   },
        //   {
        //     text: '修改位号配置',
        //     path: '/pointInfo/edit',
        //     parent: '/pointInfo/list'
        //   }
        // ]
      },
    ]
  },
  {
    id: "SYSTEM",
    text: "收银管理",
    icon: "el-icon-s-cooperation",
    menu: '1',
    subset: [
      {
        id: 'ADMIN_LIST',
        text: "收银台",
        icon: "el-icon-user",
        path: "/checkstand",
        menu: true,
      },
      // {
      //   id: 'ROLE_LIST',
      //   text: "角色列表",
      //   icon: "el-icon-edit",
      //   path: "/role/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增角色",
      //   //     path: "/role/add",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "修改角色",
      //   //     path: "/role/edit",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "菜单功能权限",
      //   //     path: "/role/menus",
      //   //     parent: '/role/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'MENU_LIST',
      //   text: "菜单列表",
      //   icon: "el-icon-edit",
      //   path: "/menu/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增菜单",
      //   //     path: "/menu/add",
      //   //     parent: '/menu/list'
      //   //   },
      //   //   {
      //   //     text: "修改菜单",
      //   //     path: "/menu/edit",
      //   //     parent: '/menu/list'
      //   //   }
      //   // ]
      // }
    ]
  },
  // {
  //   id: "SYSTEM",
  //   text: "财务管理",
  //   icon: "el-icon-s-cooperation",
  //   subset: [
  //     {
  //       id: 'ADMIN_LIST',
  //       text: "营销管理",
  //       icon: "el-icon-user",
  //       path: "/admin/list",
  //       menu: true,
  //       children: [
  //         {
  //           text: "优惠卷管理",
  //           path: "/admin/add",
  //           parent: '/admin/list'
  //         },
  //         {
  //           text: "积分汇专区",
  //           path: "/admin/edit",
  //           parent: '/admin/list'
  //         },
  //         {
  //           text: "广告管理",
  //           path: "/admin/edit",
  //           parent: '/admin/list'
  //         },
  //         {
  //           text: "自定义区域",
  //           path: "/admin/edit",
  //           parent: '/admin/list'
  //         },
  //         {
  //           text: "商品排行",
  //           path: "/admin/edit",
  //           parent: '/admin/list'
  //         },
  //         {
  //           text: "品牌管理",
  //           path: "/admin/edit",
  //           parent: '/admin/list'
  //         },
  //         {
  //           text: "水印设置",
  //           path: "/admin/edit",
  //           parent: '/admin/list'
  //         }
  //       ]
  //     },
  //     // {
  //     //   id: 'ROLE_LIST',
  //     //   text: "角色列表",
  //     //   icon: "el-icon-edit",
  //     //   path: "/role/list",
  //     //   menu: true,
  //     //   // children: [
  //     //   //   {
  //     //   //     text: "新增角色",
  //     //   //     path: "/role/add",
  //     //   //     parent: '/role/list'
  //     //   //   },
  //     //   //   {
  //     //   //     text: "修改角色",
  //     //   //     path: "/role/edit",
  //     //   //     parent: '/role/list'
  //     //   //   },
  //     //   //   {
  //     //   //     text: "菜单功能权限",
  //     //   //     path: "/role/menus",
  //     //   //     parent: '/role/list'
  //     //   //   }
  //     //   // ]
  //     // },
  //     // {
  //     //   id: 'MENU_LIST',
  //     //   text: "菜单列表",
  //     //   icon: "el-icon-edit",
  //     //   path: "/menu/list",
  //     //   menu: true,
  //     //   // children: [
  //     //   //   {
  //     //   //     text: "新增菜单",
  //     //   //     path: "/menu/add",
  //     //   //     parent: '/menu/list'
  //     //   //   },
  //     //   //   {
  //     //   //     text: "修改菜单",
  //     //   //     path: "/menu/edit",
  //     //   //     parent: '/menu/list'
  //     //   //   }
  //     //   // ]
  //     // }

  //   ]
  // },
  {
    id: "SYSTEM",
    text: "通证管理",
    icon: "el-icon-s-cooperation",
    menu: '1-1',
    subset: [
      {
        id: 'ADMIN_LIST',
        text: "通证",
        icon: "el-icon-user",
        path: "/admin/list",
        menu: true,
        children: [
          {
            text: "通证管理",
            path: "/throughTheManagement/throughTheManagement"
          },
          {
            text: "通证订单",
            path: "/throughTheManagement/throughDd"
          }
        ]
      },
      // {
      //   id: 'ROLE_LIST',
      //   text: "角色列表",
      //   icon: "el-icon-edit",
      //   path: "/role/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增角色",
      //   //     path: "/role/add",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "修改角色",
      //   //     path: "/role/edit",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "菜单功能权限",
      //   //     path: "/role/menus",
      //   //     parent: '/role/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'MENU_LIST',
      //   text: "菜单列表",
      //   icon: "el-icon-edit",
      //   path: "/menu/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增菜单",
      //   //     path: "/menu/add",
      //   //     parent: '/menu/list'
      //   //   },
      //   //   {
      //   //     text: "修改菜单",
      //   //     path: "/menu/edit",
      //   //     parent: '/menu/list'
      //   //   }
      //   // ]
      // }

    ]
  },
  {
    id: "SYSTEM",
    text: "会员管理",
    icon: "el-icon-setting",
    subset: [
      {
        id: 'ADMIN_LIST',
        text: "营销管理",
        icon: "el-icon-user",
        path: "/admin/list",
        menu: true,
        children: [
          {
            text: "优惠卷管理",
            path: "/admin/add",
            parent: '/admin/list'
          },
          {
            text: "积分汇专区",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "广告管理",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "自定义区域",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "商品排行",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "品牌管理",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "水印设置",
            path: "/admin/edit",
            parent: '/admin/list'
          }
        ]
      },
      // {
      //   id: 'ROLE_LIST',
      //   text: "角色列表",
      //   icon: "el-icon-edit",
      //   path: "/role/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增角色",
      //   //     path: "/role/add",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "修改角色",
      //   //     path: "/role/edit",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "菜单功能权限",
      //   //     path: "/role/menus",
      //   //     parent: '/role/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'MENU_LIST',
      //   text: "菜单列表",
      //   icon: "el-icon-edit",
      //   path: "/menu/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增菜单",
      //   //     path: "/menu/add",
      //   //     parent: '/menu/list'
      //   //   },
      //   //   {
      //   //     text: "修改菜单",
      //   //     path: "/menu/edit",
      //   //     parent: '/menu/list'
      //   //   }
      //   // ]
      // }

    ]
  },
  {
    id: "SYSTEM",
    text: "智能终端",
    icon: "el-icon-setting",
    subset: [
      {
        id: 'ADMIN_LIST',
        text: "营销管理",
        icon: "el-icon-user",
        path: "/admin/list",
        menu: true,
        children: [
          {
            text: "优惠卷管理",
            path: "/admin/add",
            parent: '/admin/list'
          },
          {
            text: "积分汇专区",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "广告管理",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "自定义区域",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "商品排行",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "品牌管理",
            path: "/admin/edit",
            parent: '/admin/list'
          },
          {
            text: "水印设置",
            path: "/admin/edit",
            parent: '/admin/list'
          }
        ]
      },
      // {
      //   id: 'ROLE_LIST',
      //   text: "角色列表",
      //   icon: "el-icon-edit",
      //   path: "/role/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增角色",
      //   //     path: "/role/add",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "修改角色",
      //   //     path: "/role/edit",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     text: "菜单功能权限",
      //   //     path: "/role/menus",
      //   //     parent: '/role/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'MENU_LIST',
      //   text: "菜单列表",
      //   icon: "el-icon-edit",
      //   path: "/menu/list",
      //   menu: true,
      //   // children: [
      //   //   {
      //   //     text: "新增菜单",
      //   //     path: "/menu/add",
      //   //     parent: '/menu/list'
      //   //   },
      //   //   {
      //   //     text: "修改菜单",
      //   //     path: "/menu/edit",
      //   //     parent: '/menu/list'
      //   //   }
      //   // ]
      // }

    ]
  },

  // {
  //   id: "SYSTEM",
  //   text: "我的资金",
  //   icon: "el-icon-s-cooperation",
  //   subset: [
  //     {
  //       id: 'ADMIN_LIST',
  //       text: "我的资金",
  //       icon: "el-icon-user",
  //       path: "/admin/list",
  //       menu: true,
  //       children: [
  //         {
  //           text: "账号概览",
  //           path: "/admin/add",
  //           parent: '/admin/list'
  //         },
  //         {
  //           text: "积分明细",
  //           path: "/admin/edit",
  //           parent: '/admin/list'
  //         },
  //         {
  //           text: "资金明细",
  //           path: "/admin/edit",
  //           parent: '/admin/list'
  //         }
  //       ]
  //     },
  //     // {
  //     //   id: 'ROLE_LIST',
  //     //   text: "角色列表",
  //     //   icon: "el-icon-edit",
  //     //   path: "/role/list",
  //     //   menu: true,
  //     //   // children: [
  //     //   //   {
  //     //   //     text: "新增角色",
  //     //   //     path: "/role/add",
  //     //   //     parent: '/role/list'
  //     //   //   },
  //     //   //   {
  //     //   //     text: "修改角色",
  //     //   //     path: "/role/edit",
  //     //   //     parent: '/role/list'
  //     //   //   },
  //     //   //   {
  //     //   //     text: "菜单功能权限",
  //     //   //     path: "/role/menus",
  //     //   //     parent: '/role/list'
  //     //   //   }
  //     //   // ]
  //     // },
  //     // {
  //     //   id: 'MENU_LIST',
  //     //   text: "菜单列表",
  //     //   icon: "el-icon-edit",
  //     //   path: "/menu/list",
  //     //   menu: true,
  //     //   // children: [
  //     //   //   {
  //     //   //     text: "新增菜单",
  //     //   //     path: "/menu/add",
  //     //   //     parent: '/menu/list'
  //     //   //   },
  //     //   //   {
  //     //   //     text: "修改菜单",
  //     //   //     path: "/menu/edit",
  //     //   //     parent: '/menu/list'
  //     //   //   }
  //     //   // ]
  //     // }

  //   ]
  // }
];

export default navArr