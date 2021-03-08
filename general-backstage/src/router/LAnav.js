let LAMenu = [
  {
    id: "SYSTEM",
    name: "服务管理",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: "IOT_REPORT",
        name: "拼车信息",
        menu: true,
        actions: [
          {
            name: "供应商品",
            url: "/serveMent/CarpooInformation/supplyGood"
          },
          {
            name: "需求信息",
            url: "/serveMent/CarpooInformation/demandInfo"
          },
          {
            name: "商机留言",
            url: "/serveMent/CarpooInformation/busMessage"
          }
        ]
      },
      {
        id: "IOT_REPORT",
        name: "拼车订单",
        menu: true,
        actions: [
          {
            name: "客户订单",
            url: "/serveMent/CarpoolingOrders/customerOrder"
          },
          {
            name: "退货通道",
            url: "/serveMent/CarpoolingOrders/returnsChannel"
          }
        ]
      },
      {
        id: "IOT_REPORT",
        name: "拼车VIP",
        menu: true,
        actions: [
          {
            name: "商品信息vip",
            url: "/serveMent/CarpoolingVIP/commInfoVip"
          },
          {
            name: "任务信息vip",
            url: "/serveMent/CarpoolingVIP/taskInfoVip"
          },
          {
            name: "客户留言vip",
            url: "/serveMent/CarpoolingVIP/custInfoVip"
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "平台装修",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: "ADMIN_LIST",
        name: "导航信息",
        icon: "el-icon-user",
        actions: [
          {
            name: "导航管理",
            url: "/PlatForm/Navigation/naviment"
          },
          {
            name: "头部导航",
            url: "/PlatForm/Navigation/headNaviment"
          },
          {
            name: "中部导航",
            url: "/PlatForm/Navigation/middleNaviment"
          },
          {
            name: "底部导航",
            url: "/PlatForm/Navigation/bottomNaviment"
          },
          {
            name: "资讯导航",
            url: "/PlatForm/Navigation/messageNaviment"
          },
          {
            name: "帮助中心",
            url: "/PlatForm/Navigation/helpNaviment"
          }
        ]
      },
      {
        id: "ADMIN_LIST",
        name: "页面信息",
        icon: "el-icon-user",
        actions: [
          {
            name: "页面管理",
            url: "/PlatForm/PageInformation/pageMangement"
          }
        ]
      },
      {
        id: "ADMIN_LIST",
        name: "特殊广告管理",
        icon: "el-icon-user",
        actions: [
          // {
          //   name: "商铺地图",
          //   url: "/PlatForm/SpecialMangment/shopsMap"
          // },
          {
            name: "轮转广告",
            url: "/PlatForm/SpecialMangment/webDvertising"
          },
          {
            name: "手机轮转广告",
            url: "/PlatForm/SpecialMangment/mobileRotation"
          },
          // {
          //   name: "图片广告",
          //   url: "/PlatForm/SpecialMangment/displayDvertising"
          // }
          {
            name: "弹窗广告",
            url: "/PlatForm/SpecialMangment/popUpad"
          }
        ]
      },
      {
        id: "ADMIN_LIST",
        name: "商铺中心",
        icon: "el-icon-user",
        actions: [
          // {
          //   name: "商家展示",
          //   url: "/PlatForm/BusinessCenter/showMerchants"
          // },
          {
            name: "模板购买",
            url: "/PlatForm/BusinessCenter/templateTobuy"
          }
        ]
      },
      {
        id: "ADMIN_LIST",
        name: "合作伙伴",
        icon: "el-icon-user",
        actions: [
          {
            name: "友情连接",
            url: "/PlatForm/partner/linksPage"
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "商家管理",
    icon: "el-icon-s-cooperation",
    subset: [
      {
        id: "ADMIN_LIST",
        name: "商铺管理",
        icon: "el-icon-user",
        actions: [
          // {
          //   name: "商铺权限",
          //   url: "/shopMagement/shoPermissions"
          // },
          {
            name: "商铺权限",
            url: "/shopMagement/shopDiction"
          },
          {
            name: "商铺类型",
            url: "/shopMagement/shopType"
          },
          {
            name: "商铺列表",
            url: "/shopMagement/shopList"
          },
          {
            name: "分站管理",
            url: "/shopMagement/substation"
          },
          {
            name: "星店管理",
            url: "/shopMagement/starryShop"
          },
          {
            name: "云店管理",
            url: "/shopMagement/cloundShop"
          },
          {
            name: "买家评价",
            url: "/shopMagement/buyersEvaluation"
          },
          {
            name: "卖家评价",
            url: "/shopMagement/sellerEvaluation"
          },
          {
            name: "升级审核",
            url: "/shopMagement/upgradeReview"
          }
        ]
      }
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
    name: "分类设置",
    icon: "el-icon-setting",
    subset: [
      {
        id: "ADMIN_LIST",
        name: "分类设置",
        icon: "el-icon-user",
        menu: true,
        actions: [
          {
            name: "分类信息",
            url: "/classSetting/classified"
          },
          {
            name: "行业分类",
            url: "/classSetting/induStandard"
          },
          {
            name: "招聘职位分类",
            url: "/classSetting/jobCategory"
          },
          {
            name: "兼职类别",
            url: "/classSetting/partTimeJob"
          },
          {
            name: "兼职职业分类",
            url: "/classSetting/jobClassify"
          },
          {
            name: "地区管理",
            url: "/classSetting/regional"
          },
          {
            name: "经营行业",
            url: "/classSetting/operation"
          },
          {
            name: "品牌车系分类",
            url: "/classSetting/carSystem"
          },
          {
            name: "车类车型分类",
            url: "/classSetting/vehicleTypes"
          },
          {
            name: "租车分类",
            url: "/classSetting/rentalCar"
          },
          {
            name: "参数管理",
            url: "/classSetting/parameter"
          },
          {
            name: "相册分类",
            url: "/classSetting/photoAlbum"
          },
          {
            name: "常规商品分类",
            url: "/classSetting/commodity"
          },
          {
            name: "供求vip分类",
            url: "/classSetting/vipClass"
          },
          {
            name: "知识商品分类",
            url: "/classSetting/knowledgeGood"
          },
          // {
          //   name: "知识型商品分类",
          //   url: "/classSetting/comKnow"
          // }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "平台设置",
    icon: "el-icon-setting",
    subset: [
      {
        id: "ADMIN_LIST",
        name: "基本设置",
        icon: "el-icon-user",
        menu: true,
        actions: [
          {
            name: "商家设置",
            url: "/setPlatform/setBasic/merchant"
          },
          // {
          //   name: "基础信息",
          //   url: "/setPlatform/setBasic/foundational"
          // },
          {
            name: "客服设置",
            url: "/setPlatform/setBasic/service"
          },
          {
            name: "邮件平台",
            url: "/setPlatform/setBasic/emailPlatform"
          },
          {
            name: "短信设置",
            url: "/setPlatform/setBasic/setNote"
          },
          {
            name: "注册设置",
            url: "/setPlatform/setBasic/register"
          },
          {
            name: "分值比例",
            url: "/setPlatform/setBasic/scoreValue"
          },
          {
            name: "保留域名",
            url: "/setPlatform/setBasic/domain"
          },
          {
            name: "商铺认证",
            url: "/setPlatform/setBasic/shopCertification"
          },
          {
            name: "域名设置",
            url: "/setPlatform/setBasic/setDomain"
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "通证管理",
    icon: "el-icon-setting",
    subset: [
      {
        id: "ADMIN_LIST",
        name: "分类信息管理",
        icon: "el-icon-user",
        menu: true,
        actions: [
          {
            name: "分类信息列表",
            url: "/through/classify/classList"
          }
        ]
      },
      {
        id: "ADMIN_LIST",
        name: "通证管理",
        icon: "el-icon-user",
        menu: true,
        actions: [
          {
            name: "通证管理",
            url: "/through/throughThe/management"
          },
          {
            name: "通证订单",
            url: "/through/throughThe/passOrder"
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "拓展管理",
    icon: "el-icon-setting",
    subset: [
      {
        id: "EXPAND_TION",
        name: "拓展信息",
        icon: "el-icon-user",
        menu: true,
        actions: [
          {
            name: "后台菜单",
            url: "/develop/management/backMenu"
          },
          {
            name: "图片管理",
            url: "/develop/management/imageMent"
          },
          {
            name: "短信发送",
            url: "/develop/management/textMessage"
          },
          {
            name: "邮件群发",
            url: "/develop/management/groupMail"
          },
          // {
          //   name: "淘宝转换",
          //   url: "/develop/management/taobaoConversion"
          // },
          {
            name: "托管管理",
            url: "/develop/management/trustManagement"
          }
        ]
      },
      {
        id: "WECHAT_CON",
        name: "微信整合",
        icon: "el-icon-user",
        menu: true,
        actions: [
          {
            name: "微信菜单管理",
            url: "/develop/wechat/weChatmenu"
          }
        ]
      },
      {
        id: "LOG_CON",
        name: "日志管理",
        icon: "el-icon-user",
        menu: true,
        actions: [
          {
            name: "后台管理日志",
            url: "/develop/log/adminLog"
          },
          {
            name: "定期任务日志",
            url: "/develop/log/taskLog"
          }
        ]
      }
    ]
  },
  {
    id: "SYSTEM",
    name: "帮助",
    icon: "el-icon-setting"
  }
];

export default LAMenu;
