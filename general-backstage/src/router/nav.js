import LAnav from './LAnav'
console.log(LAnav)
let navArr = [
  {
    id: 'PROVIDER',
    name: '首页',
    icon: 'el-icon-box',
    subset: [{
      id: 'PROVIDER_LIST',
      name: '后台首页',
      icon: 'el-icon-menu',
      url: '/homePage',
      menu: true,
    }, {
      id: 'PROVIDER_LIST',
      name: '数据备份',
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '数据备份',
        url: '/DataBackup/dataBackup'
      },
      {
        name: '恢复数据',
        url: '/DataBackup/recoverData'
      }, {
        name: '数据修复',
        url: '/DataBackup/optimizationAndRepair',
      }, {
        name: '执行SQL',
        url: '/DataBackup/executeSQL',
      }
      ]
    }]
  },
  {
    id: 'PROVIDER',
    name: '杂志管理',
    icon: 'el-icon-box',
    subset: [{
      id: 'PROVIDER_LIST',
      name: '动态管理',  //我的账号
      icon: 'el-icon-menu',
      menu: true,
      actions: [{
        name: '动态话题管理',
        url: '/topicManagement/topicManagement'
      },
      {
        name: '动态类目删除',
        url: '/topicManagement/categoryDeletion',
      }
      ]
    }, {
      id: 'PROVIDER_LIST',
      name: '视频管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '短视频管理',
        url: '/videoManagement/videoManagement'
      }]
    }, {
      id: 'PROVIDER_LIST',
      name: '关注管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '关注管理',
        url: '/focusOnManagement/followList'
      }]
    }, {
      id: 'PROVIDER_LIST',
      name: '问答管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '问答列表',
        url: '/Amanagement/Alist'
      },
      {
        name: '评论列表',
        url: '/Amanagement/commentList'
      }]
    }, {
      id: 'PROVIDER_LIST',
      name: '杂志管理', //我的资金
      icon: 'el-icon-menu',
      url: '/provider/list',
      menu: true,
      actions: [{
        name: '资讯一级分类',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '美食',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '娱乐',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '美妆',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '服饰',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '时尚',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '文化',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '艺术',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '商业',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '酒店',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '旅游',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '亲子',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '健康',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '医疗',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '教育',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '运动',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '家政',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '生鲜',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '农场',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '家居',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '电器',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '装饰',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '房产',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '装饰',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '汽车',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '科技',
        url: '/magazineManagement/magazineManagement'
      }, {
        name: '国际',
        url: '/magazineManagement/magazineManagement'
      }]
    }]
  },
  {
    id: 'PROVIDER',
    name: '商品管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PROVIDER_LIST',
        name: '商品信息',
        icon: 'el-icon-menu',
        // url: '/provider/list',
        menu: true,
        actions: [
          {
            name: '常规商品管理',
            url: '/commodityInformation/generalMerchandise',
          },
          {
            name: '知识商品管理',
            url: '/commodityInformation/knowledgeCommodity',
          },
          {
            name: '拼团商品管理',
            url: '/commodityInformation/groupGoods',
          },
          // {
          //   name: '返利商品管理',
          //   url: '/commodityInformation/rebateGoods',
          // },
          {
            name: '秒杀商品管理',
            url: '/commodityInformation/secondKill',
          },
          {
            name: '展示商品管理',
            url: '/commodityInformation/displayProducts',
          },
          {
            name: '团购商品管理',
            url: '/commodityInformation/groupBuying'
          },
          {
            name: '拍卖商品管理',
            url: '/commodityInformation/auctionGoods',
          },
          // {
          //   name: '分销商品管理',
          //   url: '/commodityInformation/auctionGoods',
          // },
          {
            name: '批发商品管理',
            url: '/commodityInformation/wholesaleGoods',
          },
          {
            name: '代销商品管理',
            url: '/commodityInformation/consignmentGoods',
          },
          {
            name: '未上架商品',
            url: '/commodityInformation/notOn',
          }
        ]
      }
    ]
  },
  // {
  //   id: 'COMPANY',
  //   name: '企业户管理',
  //   icon: 'el-icon-box',
  //   subset: [
  //     {
  //       id: 'PROVIDER_LIST',
  //       name: '企业户列表',
  //       icon: 'el-icon-menu',
  //       url: '/company/list',
  //       menu: true,
  //     }
  //   ]
  // },
  {
    id: 'PRODUCT',
    name: '交易管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'PRODUCT_LIST',
        name: '商铺订单',
        icon: 'el-icon-menu',
        url: '/product/list',
        menu: true,
        actions: [{
          name: '客户订单',
          url: '/shopOrder/customerOrder'
        }, {
          name: '知识订单',
          url: '/shopOrder/knowledgeOrder'
        }, {
          name: '退货通道',
          url: '/shopOrder/returnChannel'
        },
        // , {
        //   name: '拼团订单',
        //   url: '/commodity/rebateGoods'
        // }, 
        {
          name: '提现申请',
          url: '/shopOrder/withdrawalApplication'
        }
          // , {
          //   name: '拼团退货',
          //   url: '/commodity/bulkGoods'
          // }
        ]
      },
      // {
      //   id: 'PRODUCT_LIST',
      //   name: '配送方式',
      //   icon: 'el-icon-menu',
      //   url: '/product/category/list',
      //   menu: true,
      //   actions: [{
      //     name: '物流工具',
      //     url: '/conventionalProducts/conventionalProducts'
      //   }]
      // },
      {
        id: 'PRODUCT_LIST',
        name: '商品咨询管理',
        icon: 'el-icon-menu',
        url: '/product/category/list',
        menu: true,
        actions: [{
          name: '销售商品咨询',
          url: '/commodityConsultation/sellingGoods'
        }, {
          name: '展示商品咨询',
          url: '/commodityConsultation/displayProducts'
        }]
      },
      // {
      //   id: 'PRODUCT_LIST',
      //   name: '评价留言',
      //   icon: 'el-icon-menu',
      //   url: '/product/category/list',
      //   menu: true,
      //   actions: [{
      //     name: '评价买家',
      //     url: '/conventionalProducts/conventionalProducts'
      //   }]
      // },
      {
        id: 'PRODUCT_LIST',
        name: '支付方式',
        icon: 'el-icon-menu',
        url: '/product/category/list',
        menu: true,
        actions: [{
          name: '收款设置',
          url: '/paymentMethod/collectionSettings'
        }]
      }, {
        id: 'PRODUCT_LIST',
        name: '交易明细',
        icon: 'el-icon-menu',
        url: '/product/category/list',
        menu: true,
        actions: [{
          name: '积分明细',
          url: '/transactionDetails/creditDetails'
        }, {
          name: '资金明细',
          url: '/transactionDetails/capitalDetails'
        }, {
          name: '消保明细',
          url: '/transactionDetails/protectionDetails'
        }]
      },
      //  {
      //   id: 'PRODUCT_LIST',
      //   name: '信用管理',
      //   icon: 'el-icon-menu',
      //   url: '/product/category/list',
      //   menu: true,
      //   actions: [{
      //     name: '信用管理',
      //     url: '/conventionalProducts/conventionalProducts'
      //   }]
      // }
      // {
      //   id: 'PRODUCT_CATEGORY_LIST',
      //   name: '产品分类列表',
      //   icon: 'el-icon-menu',
      //   url: '/product/category/list',
      //   menu: true,
      //   actions: [
      //     {
      //       name: '新增产品分类',
      //       url: '/product/category/add',
      //       parent: '/product/category/list'
      //     },
      //     {
      //       name: '修改产品分类',
      //       url: '/product/category/edit',
      //       parent: '/product/category/list'
      //     }
      //   ]
      // }
    ]
  },
  {
    id: 'INFORMATION',
    name: '用户管理',
    icon: 'el-icon-box',
    subset: [
      {
        id: 'INFORMATION_LIST',
        name: '用户资料',
        icon: 'el-icon-menu',
        url: '/contentManagement/magazineManagement',
        menu: true,
        actions: [
          {
            name: '用户列表',
            url: '/userProfile/userList'
          }
        ]
      }, {
        id: 'INFORMATION_LIST',
        name: '等级管理',
        icon: 'el-icon-menu',
        url: '/contentManagement/magazineManagement',
        menu: true,
        actions: [
          {
            name: '等级列表',
            url: '/userProfile/rankList'
          }
        ]
      }, {
        id: 'INFORMATION_LIST',
        name: '分销设置',
        icon: 'el-icon-menu',
        url: '/contentManagement/magazineManagement',
        menu: true,
        actions: [
          {
            name: '推荐设置',
            url: '/userProfile/recommendedSettings'
          }
        ]
      },
    ]
  },
  {
    id: 'IOT',
    name: '社区管理',
    icon: 'el-icon-s-platform',
    subset: [
      {
        id: 'IOT_REPORT',
        name: '动态管理',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '动态话题管理',
            url: '/dynamicManagement/dynamicTopics'
          },
          // {
          //   name: '动态类目删除',
          //   url: '/dynamicManagement/dynamicCategory'
          // }
        ]
      }, {
        id: 'IOT_REPORT',
        name: '圈子管理',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '圈子管理',
            url: '/circleManagement/circleManagement'
          },
          {
            name: '成员管理',
            url: '/circleManagement/memberManagement'
          },
          {
            name: '帖子管理',
            url: '/circleManagement/postManagement'
          },
          {
            name: '评论管理',
            url: '/circleManagement/comment'
          }
        ]
      }, {
        id: 'IOT_REPORT',
        name: '视频管理',
        icon: 'el-icon-link',
        url: '/report/main',
        menu: true,
        actions: [
          {
            name: '短视频管理',
            url: '/shortVideoMa/shortVideo'
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "集市管理",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "吃喝",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "吃喝分类",
            url: "/eatAndDrink/classificationOfFood"
          },
          {
            name: "吃喝VIP分类",
            url: "/eatAndDrink/classificationOfFoodVip"
          },
          {
            name: "吃喝商品",
            url: "/eatAndDrink/foodAndDrink"
          }, {
            name: "吃喝商品vip",
            url: "/eatAndDrink/foodAndDrinkVIP"
          },
          {
            name: "吃喝需求",
            url: "/eatAndDrink/drinkDemand"
          },
          {
            name: "吃喝需求vip",
            url: "/eatAndDrink/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/eatAndDrink/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/eatAndDrink/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/eatAndDrink/customerOrder"
          },
          {
            name: "退货通道",
            url: "/eatAndDrink/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "玩乐",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "玩乐分类",
            url: "/play/classificationOfFood"
          },
          {
            name: "玩乐VIP分类",
            url: "/play/classificationOfFoodVip"
          },
          {
            name: "玩乐商品",
            url: "/play/foodAndDrink"
          }, {
            name: "玩乐商品vip",
            url: "/play/foodAndDrinkVIP"
          },
          {
            name: "玩乐需求",
            url: "/play/drinkDemand"
          },
          {
            name: "玩乐需求vip",
            url: "/play/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/play/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/play/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/play/customerOrder"
          },
          {
            name: "退货通道",
            url: "/play/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "服饰",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "服饰分类",
            url: "/accessories/classificationOfFood"
          },
          {
            name: "服饰VIP分类",
            url: "/accessories/classificationOfFoodVip"
          },
          {
            name: "服饰商品",
            url: "/accessories/foodAndDrink"
          }, {
            name: "服饰商品vip",
            url: "/accessories/foodAndDrinkVIP"
          },
          {
            name: "服饰需求",
            url: "/accessories/drinkDemand"
          },
          {
            name: "服饰需求vip",
            url: "/accessories/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/accessories/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/accessories/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/accessories/customerOrder"
          },
          {
            name: "退货通道",
            url: "/accessories/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "丽人",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "丽人分类",
            url: "/beauty/classificationOfFood"
          },
          {
            name: "丽人VIP分类",
            url: "/beauty/classificationOfFoodVip"
          },
          {
            name: "丽人商品",
            url: "/beauty/foodAndDrink"
          }, {
            name: "丽人商品vip",
            url: "/beauty/foodAndDrinkVIP"
          },
          {
            name: "丽人需求",
            url: "/beauty/drinkDemand"
          },
          {
            name: "丽人需求vip",
            url: "/beauty/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/beauty/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/beauty/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/beauty/customerOrder"
          },
          {
            name: "退货通道",
            url: "/beauty/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "百货",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "百货分类",
            url: "/departmentStores/classificationOfFood"
          },
          {
            name: "百货VIP分类",
            url: "/departmentStores/classificationOfFoodVip"
          },
          {
            name: "百货商品",
            url: "/departmentStores/foodAndDrink"
          }, {
            name: "百货商品vip",
            url: "/departmentStores/foodAndDrinkVIP"
          },
          {
            name: "百货需求",
            url: "/departmentStores/drinkDemand"
          },
          {
            name: "百货需求vip",
            url: "/departmentStores/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/departmentStores/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/departmentStores/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/departmentStores/customerOrder"
          },
          {
            name: "退货通道",
            url: "/departmentStores/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "闲置",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "闲置分类",
            url: "/lieIdle/classificationOfFood"
          },
          {
            name: "闲置VIP分类",
            url: "/lieIdle/classificationOfFoodVip"
          },
          {
            name: "闲置商品",
            url: "/lieIdle/foodAndDrink"
          }, {
            name: "闲置商品vip",
            url: "/lieIdle/foodAndDrinkVIP"
          },
          {
            name: "闲置需求",
            url: "/lieIdle/drinkDemand"
          },
          {
            name: "闲置需求vip",
            url: "/lieIdle/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/lieIdle/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/lieIdle/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/lieIdle/customerOrder"
          },
          {
            name: "退货通道",
            url: "/lieIdle/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "健康",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "健康分类",
            url: "/healthy/classificationOfFood"
          },
          {
            name: "健康VIP分类",
            url: "/healthy/classificationOfFoodVip"
          },
          {
            name: "健康商品",
            url: "/healthy/foodAndDrink"
          }, {
            name: "健康商品vip",
            url: "/healthy/foodAndDrinkVIP"
          },
          {
            name: "健康需求",
            url: "/healthy/drinkDemand"
          },
          {
            name: "健康需求vip",
            url: "/healthy/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/healthy/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/healthy/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/healthy/customerOrder"
          },
          {
            name: "退货通道",
            url: "/healthy/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "生活",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "生活分类",
            url: "/life/classificationOfFood"
          },
          {
            name: "生活VIP分类",
            url: "/life/classificationOfFoodVip"
          },
          {
            name: "生活商品",
            url: "/life/foodAndDrink"
          }, {
            name: "生活商品vip",
            url: "/life/foodAndDrinkVIP"
          },
          {
            name: "生活需求",
            url: "/life/drinkDemand"
          },
          {
            name: "生活需求vip",
            url: "/life/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/life/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/life/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/life/customerOrder"
          },
          {
            name: "退货通道",
            url: "/life/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "房产",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "房产分类",
            url: "/houseProperty/classificationOfFood"
          },
          {
            name: "房产VIP分类",
            url: "/houseProperty/classificationOfFoodVip"
          },
          {
            name: "房产商品",
            url: "/houseProperty/foodAndDrink"
          }, {
            name: "房产商品vip",
            url: "/houseProperty/foodAndDrinkVIP"
          },
          {
            name: "房产需求",
            url: "/houseProperty/drinkDemand"
          },
          {
            name: "房产需求vip",
            url: "/houseProperty/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/houseProperty/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/houseProperty/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/houseProperty/customerOrder"
          },
          {
            name: "退货通道",
            url: "/houseProperty/returnChannel"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "汽车",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "汽车分类",
            url: "/automobile/classificationOfFood"
          },
          {
            name: "汽车VIP分类",
            url: "/automobile/classificationOfFoodVip"
          },
          {
            name: "汽车商品",
            url: "/automobile/foodAndDrink"
          }, {
            name: "汽车商品vip",
            url: "/automobile/foodAndDrinkVIP"
          },
          {
            name: "汽车需求",
            url: "/automobile/drinkDemand"
          },
          {
            name: "汽车需求vip",
            url: "/automobile/drinkDemandVIP"
          },
          {
            name: "用户留言",
            url: "/automobile/guestBook"
          },
          {
            name: "客户留言vip",
            url: "/automobile/customerOrderVIP"
          },
          {
            name: "客户订单",
            url: "/automobile/customerOrder"
          },
          {
            name: "退货通道",
            url: "/automobile/returnChannel"
          }
        ]
      },
      // {
      //   id: 'ROLE_LIST',
      //   name: "角色列表",
      //   icon: "el-icon-edit",
      //   url: "/role/list",
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: "新增角色",
      //   //     url: "/role/add",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     name: "修改角色",
      //   //     url: "/role/edit",
      //   //     parent: '/role/list'
      //   //   },
      //   //   {
      //   //     name: "菜单功能权限",
      //   //     url: "/role/menus",
      //   //     parent: '/role/list'
      //   //   }
      //   // ]
      // },
      // {
      //   id: 'MENU_LIST',
      //   name: "菜单列表",
      //   icon: "el-icon-edit",
      //   url: "/menu/list",
      //   menu: true,
      //   // actions: [
      //   //   {
      //   //     name: "新增菜单",
      //   //     url: "/menu/add",
      //   //     parent: '/menu/list'
      //   //   },
      //   //   {
      //   //     name: "修改菜单",
      //   //     url: "/menu/edit",
      //   //     parent: '/menu/list'
      //   //   }
      //   // ]
      // }

    ]
  },
  {
    id: "SYSTEM",
    name: "营销管理",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: 'ADMIN_LIST',
        name: "云集云仓",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "云集商品",
            url: "/cloudsAndWarehouses/gatheringCommodities"
          },
          {
            name: "云仓商品",
            url: "/cloudsAndWarehouses/warehouseGoods"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "幸运抽奖",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "抽奖活动",
            url: "/luckyDraw/luckyDraw"
          },
          {
            name: "抽奖结果",
            url: "/luckyDraw/lotteryResults"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "优惠管理",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "优惠券管理",
            url: "/preferentialManagement/couponManagement"
          },
          {
            name: "积分汇专区",
            url: "/preferentialManagement/pointsCollectionZone"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "广告管理",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "广告管理",
            url: "/advertisingManagement/advertisingManagement"
          },
          {
            name: "已展示",
            url: "/advertisingManagement/displayed"
          },
          {
            name: "待申请",
            url: "/advertisingManagement/pendingApplication"
          },
          {
            name: "将到期",
            url: "/advertisingManagement/willExpire"
          },
          {
            name: "待审核",
            url: "/advertisingManagement/toBeReviewed"
          },
          {
            name: "待展示",
            url: "/advertisingManagement/toBeShown"
          },
          {
            name: "自定义区域",
            url: "/advertisingManagement/customArea"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "楼层营销",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "专题页面",
            url: "/floorMarketing/specialPage"
          },
          {
            name: "首页楼层",
            url: "/floorMarketing/homeFloor"
          }
        ]
      }, {
        id: 'ADMIN_LIST',
        name: "品牌信息",
        icon: "el-icon-user",
        url: "/admin/list",
        menu: true,
        actions: [
          {
            name: "品牌管理",
            url: "/brandInformation/brandManagement"
          },
          // {
          //   name: "水印设置",
          //   url: "/marketingManagement/bonusPointArea"
          // }
        ]
      },
      //  {
      //   id: 'ADMIN_LIST',
      //   name: "数据中心",
      //   icon: "el-icon-user",
      //   url: "/admin/list",
      //   menu: true,
      //   actions: [
      //     {
      //       name: "商铺排行",
      //       url: "/marketingManagement/couponManagement"
      //     },
      //     {
      //       name: "消费排行",
      //       url: "/marketingManagement/bonusPointArea"
      //     },
      //     {
      //       name: "商品排行",
      //       url: "/marketingManagement/bonusPointArea"
      //     }
      //   ]
      // },
    ]
  },


  ...LAnav
  // {
  //   id: "SYSTEM",
  //   name: "我的资金",
  //   icon: "el-icon-s-cooperation",
  //   subset: [
  //     {
  //       id: 'ADMIN_LIST',
  //       name: "我的资金",
  //       icon: "el-icon-user",
  //       url: "/admin/list",
  //       menu: true,
  //       actions: [
  //         {
  //           name: "账号概览",
  //           url: "/admin/add",
  //           parent: '/admin/list'
  //         },
  //         {
  //           name: "积分明细",
  //           url: "/admin/edit",
  //           parent: '/admin/list'
  //         },
  //         {
  //           name: "资金明细",
  //           url: "/admin/edit",
  //           parent: '/admin/list'
  //         }
  //       ]
  //     },
  //     // {
  //     //   id: 'ROLE_LIST',
  //     //   name: "角色列表",
  //     //   icon: "el-icon-edit",
  //     //   url: "/role/list",
  //     //   menu: true,
  //     //   // actions: [
  //     //   //   {
  //     //   //     name: "新增角色",
  //     //   //     url: "/role/add",
  //     //   //     parent: '/role/list'
  //     //   //   },
  //     //   //   {
  //     //   //     name: "修改角色",
  //     //   //     url: "/role/edit",
  //     //   //     parent: '/role/list'
  //     //   //   },
  //     //   //   {
  //     //   //     name: "菜单功能权限",
  //     //   //     url: "/role/menus",
  //     //   //     parent: '/role/list'
  //     //   //   }
  //     //   // ]
  //     // },
  //     // {
  //     //   id: 'MENU_LIST',
  //     //   name: "菜单列表",
  //     //   icon: "el-icon-edit",
  //     //   url: "/menu/list",
  //     //   menu: true,
  //     //   // actions: [
  //     //   //   {
  //     //   //     name: "新增菜单",
  //     //   //     url: "/menu/add",
  //     //   //     parent: '/menu/list'
  //     //   //   },
  //     //   //   {
  //     //   //     name: "修改菜单",
  //     //   //     url: "/menu/edit",
  //     //   //     parent: '/menu/list'
  //     //   //   }
  //     //   // ]
  //     // }

  //   ]
  // }
];

export default navArr