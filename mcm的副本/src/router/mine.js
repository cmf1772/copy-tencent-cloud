const mine = [
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/index"),
    meta: {
      title: "我的",
      requireAuth: false,
      keepAlive:true,
      savedPosition:0
      
    }
  },
  {
    path: "/mine/info",
    name: "info",
    component: () => import("@/views/mine/myinfo"),
    meta: {
      title: "我的信息",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/mine/login/login"),
    meta: {
      title: "登录",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/login_by_phone",
    name: "login_phone",
    component: () => import("@/views/mine/login/login_phone"),
    meta: {
      title: "登录",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/mine/login/register"),
    meta: {
      title: "注册",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/login/forgetpassword",
    name: "forgetpassword",
    component: () => import("@/views/mine/login/forget_pwd"),
    meta: {
      title: "忘记密码",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/login/resultpassword",
    name: "resultpassword",
    component: () => import("@/views/mine/login/result_pwd"),
    meta: {
      title: "重置密码",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/register/writecode",
    name: "writecode",
    component: () => import("@/views/mine/login/write_code"),
    meta: {
      title: "填写验证码",
      requireAuth: false,
      keepAlive:true
      
    }
  }
]

// 订单
const order = [
  {
    path: "/mine/order",
    name: "mine_order",
    component: () => import("@/views/mine/order"),
    meta: {
      title: "我的订单",
      requireAuth: false,
      keepAlive:true
      
    }
  }, {
    path: "/mine/order/detailed",
    name: "detailed_order",
    component: () => import("@/views/mine/order/detailed"),
    meta: {
      title: "订单详情",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/order/release",
    name: "release_order",
    component: () => import("@/views/mine/order/release"),
    meta: {
      title: "发表评价",
      requireAuth: false,
      keepAlive:true
    }
  },
]

// 收藏
const collection = [
  {
    path: "/mine/collection",
    name: "collection",
    component: () => import("@/views/mine/collection"),
    meta: {
      title: "我的收藏",
      requireAuth: false
    }
  }
]

const pay = [
  {
    path: "/mine/pay",
    name: "pay_mine",
    component: () => import("@/views/mine/pay"),
    meta: {
      title: "我的支付",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/manage",
    name: "pay_manage",
    component: () => import("@/views/mine/pay/page/manage"),
    meta: {
      title: "支付管理",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/authentication",
    name: "pay_authentication",
    component: () => import("@/views/mine/pay/page/authentication"),
    meta: {
      title: "认证中心",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/setting",
    name: "pay_setting",
    component: () => import("@/views/mine/pay/page/setting"),
    meta: {
      title: "支付设置",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/recharge",
    name: "pay_recharge",
    component: () => import("@/views/mine/pay/page/recharge"),
    meta: {
      title: "充值",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/accounts",
    name: "pay_accounts",
    component: () => import("@/views/mine/pay/page/accounts"),
    meta: {
      title: "转账",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/nextaccounts",
    name: "pay_next_accounts",
    component: () => import("@/views/mine/pay/page/next_accounts"),
    meta: {
      title: "转账",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/withdrawal",
    name: "pay_withdrawal",
    component: () => import("@/views/mine/pay/page/withdrawal"),
    meta: {
      title: "提现",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/bill",
    name: "pay_bill",
    component: () => import("@/views/mine/pay/page/bill"),
    meta: {
      title: "账单",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/pay/assets",
    name: "pay_assets",
    component: () => import("@/views/mine/pay/page/assets"),
    meta: {
      title: "资产",
      requireAuth: false,
      keepAlive:true
    }
  },
]


const space = [
  {
    path: "/mine/space",
    name: "space",
    component: () => import("@/views/mine/space"),
    meta: {
      title: "空间",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/space/release",
    name: "space_release",
    component: () => import("@/views/mine/space/page/release"),
    meta: {
      title: "发布说说",
      requireAuth: false,
      keepAlive:true
    }
  },
  // 日志
  {
    path: "/mine/space/journal",
    name: "space_journal",
    component: () => import("@/views/mine/space/page/journal"),
    meta: {
      title: "日志",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/space/journal/write",
    name: "space_journal_write",
    component: () => import("@/views/mine/space/page/journal/write"),
    meta: {
      title: "写日志",
      requireAuth: false,
      keepAlive:true
    }
  },

  //相册
  {
    path: "/mine/space/album/index",
    name: "space_album_index",
    component: () => import("@/views/mine/space/page/album/album"),
    meta: {
      title: "相册",
      requireAuth: false,
      keepAlive:true
    }
  },

  {
    path: "/mine/space/album/release",
    name: "space_album_release",
    component: () => import("@/views/mine/space/page/album/page/release"),
    meta: {
      title: "发布相册",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/space/album/photo",
    name: "space_album_photo",
    component: () => import("@/views/mine/space/page/album/photo"),
    meta: {
      title: "照片",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/space/album/video",
    name: "space_album_video",
    component: () => import("@/views/mine/space/page/album/video"),
    meta: {
      title: "视频",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/space/album/phone",
    name: "space_album_phone",
    component: () => import("@/views/mine/space/page/album/phone"),
    meta: {
      title: "本地照片",
      requireAuth: false,
      keepAlive:true
    }
  },

  //留言板
  {
    path: "/mine/space/message",
    name: "space_message",
    component: () => import("@/views/mine/space/page/message"),
    meta: {
      title: "留言板",
      requireAuth: false,
      keepAlive:true
    }
  },

  //访客
  {
    path: "/mine/space/visitor",
    name: "space_visitor",
    component: () => import("@/views/mine/space/page/visitor"),
    meta: {
      title: "访客",
      requireAuth: false,
      keepAlive:true
    }
  },

]
const mazagine = [
  //杂志
  {
    path: "/mine/magazine",
    name: "mine_magazine",
    component: () => import("@/views/mine/magazine"),
    meta: {
      title: "杂志",
      requireAuth: false,
      keepAlive:true
    }
  },
]


//社区
const community = [
  {
    path: "/mine/community",
    name: "mine_community",
    component: () => import("@/views/mine/community"),
    meta: {
      title: "社区",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/community/dynamic/detailed",
    name: "mine_dynamic_detailed",
    component: () => import("@/views/mine/community/page/dynamic_detailed"),
    meta: {
      title: "动态详情",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/community/posts/detailed",
    name: "mine_posts_detailed",
    component: () => import("@/views/mine/community/page/detailed"),
    meta: {
      title: "贴子详情",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/community/circle/create",
    name: "mine_circle_create",
    component: () => import("@/views/mine/community/page/create_circle"),
    meta: {
      title: "创建圈子",
      requireAuth: false,
      keepAlive:true
    }
  },
  {
    path: "/mine/community/circle/administration",
    name: "mine_circle_administration",
    component: () => import("@/views/mine/community/page/administration"),
    meta: {
      title: "管理圈子",
      requireAuth: false,
      keepAlive:true
    }
  }
]



//小店
const smallShop = [
  {
    path: "/mine/small_shop",
    name: "mine_small_shop",
    component: () => import("@/views/mine/shop"),
    meta: {
      title: "我的小店",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/small_shop/note/detailed",
    name: "mine_note_detailed",
    component: () => import("@/views/mine/shop/page/note_detailed"),
    meta: {
      title: "笔记详情",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/small_shop/evaluate/release",
    name: "mine_evaluate_release",
    component: () => import("@/views/mine/shop/components/evaluate/release"),
    meta: {
      title: "发表评价",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },{
    path: "/mine/small_shop/setting",
    name: "mine_small_shop_setting",
    component: () => import("@/views/mine/shop/page/setting"),
    meta: {
      title: "小店设置",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
]


const card = [
  {
    path: "/mine/card",
    name: "mine_card",
    component: () => import("@/views/mine/card"),
    meta: {
      title: "我的通证",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
]

// 设置
const setting = [
  {
    path: "/mine/setting",
    name: "mine_setting",
    component: () => import("@/views/mine/setting"),
    meta: {
      title: "设置",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/setting/info",
    name: "mine_setting_info",
    component: () => import("@/views/mine/setting/page/info"),
    meta: {
      title: "个人信息",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/setting/info/myadress",
    name: "mine_setting_info_myadress",
    component: () => import("@/views/mine/setting/page/myadress"),
    meta: {
      title: "我的地址",
      requireAuth: false,
      isBack:true
    }
  },
  {
    path: "/mine/setting/pay",
    name: "mine_setting_pay",
    component: () => import("@/views/mine/setting/page/pay_setting"),
    meta: {
      title: "支付中心",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/setting/security",
    name: "mine_setting_security",
    component: () => import("@/views/mine/setting/page/security"),
    meta: {
      title: "账号与安全",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  }
]


//会员
const vip = [
  {
    path: "/mine/vip",
    name: "mine_vip",
    component: () => import("@/views/mine/vip"),
    meta: {
      title: "会员中心",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/vip/open",
    name: "mine_vip_open",
    component: () => import("@/views/mine/vip/page/open"),
    meta: {
      title: "开通会员",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/vip/details",
    name: "mine_vip_details",
    component: () => import("@/views/mine/vip/page/detaileds"),
    meta: {
      title: "会员详情",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  },
  {
    path: "/mine/vip/success",
    name: "mine_vip_success",
    component: () => import("@/views/mine/vip/page/success"),
    meta: {
      title: "支付成功",
      requireAuth: false,
      keepAlive:true
      ,
      isBack:true
    }
  }
]
export default [...mine, ...order, ...collection, ...pay, ...space, ...mazagine,...community,...smallShop,...card,...setting,...vip]