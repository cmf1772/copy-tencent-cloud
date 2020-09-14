const index = {
  path: "/serve",
  name: "serve_index",
  component: () => import("@/views/serve/index"),
  meta: {
    title: "服务",
    requireAuth: false,
    keepAlive: true,
    savedPosition: 0
  }
}

//h回收
const recovery = [
  {
    path: "/serve/recovery",
    name: "recovery",
    component: () => import("@/views/serve/recovery/index"),
    meta: {
      title: "服务-回收",
      requireAuth: false
    }
  }, {
    path: "/serve/recovery/home",
    name: "home",
    component: () => import("@/views/serve/recovery/home/home"),
    meta: {
      title: "上门回收",
      requireAuth: false
    }
  }, {
    path: "/serve/recycling/list",
    name: "list",
    component: () => import("@/views/serve/recovery/home/recycling/list"),
    meta: {
      title: "回收清单",
      requireAuth: false
    }
  }, {
    path: "/serve/recycling/reSuccess",
    name: "reSuccess",
    component: () => import("@/views/serve/recovery/home/recycling/reSuccess"),
    meta: {
      title: "预约成功",
      requireAuth: false
    }
  }, {
    path: "/serve/recovery/home/addressM",
    name: "addressM",
    component: () => import("@/views/serve/recovery/home/addressM"),
    meta: {
      title: "地址管理",
      requireAuth: false
    }
  }, {
    path: "/serve/recovery/home/update_adress",
    name: "update_adress",
    component: () => import("@/views/serve/recovery/home/update_adress"),
    meta: {
      title: "上门地址",
      requireAuth: false
    }
  }, {
    path: "/serve/recovery/home/map",
    name: "map",
    component: () => import("@/views/serve/recovery/home/map"),
    meta: {
      title: "选择地址",
      requireAuth: false
    }
  }, {
    path: "/serve/recovery/code",
    name: "code",
    component: () => import("@/views/serve/recovery/code/scanning"),
    meta: {
      title: "扫码投递",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/amount",
    name: "amount",
    component: () => import("@/views/serve/recovery/protection/amount"),
    meta: {
      title: "我的环保金额",
      requireAuth: false
    }
  },

  {
    path: "/serve/recovery/detailed",
    name: "detailed",
    component: () => import("@/views/serve/recovery/protection/detailed"),
    meta: {
      title: "积分明细",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/recycler",
    name: "recycler",
    component: () => import("@/views/serve/recovery/recycler/recycler"),
    meta: {
      title: "回收员主页",
      requireAuth: false
    }
  },
  // {
  //   path: "/serve/recovery/apply",
  //   name: "recycler",
  //   component: () => import("@/views/serve/recovery/recycler/apply/"),
  //   meta: {
  //     title: "申请成为回收员",
  //     requireAuth: false
  //   }
  // },
  {
    path: "/serve/recovery/become_recycler",
    name: "become_recycler",
    component: () => import("@/views/serve/recovery/recycler/become_recycler"),
    meta: {
      title: "成为回收员",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/index",
    name: "become_recycler",
    component: () => import("@/views/serve/recovery/MyGz/index.vue"),
    meta: {
      title: "回收柜订单",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/addMyGz",
    name: "addMyGz",
    component: () => import("@/views/serve/recovery/MyGz/addMyGz.vue"),
    meta: {
      title: "新增回收柜",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/setTing",
    name: "setTing",
    component: () => import("@/views/serve/recovery/MyGz/setTing.vue"),
    meta: {
      title: "分类设置",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/gzSetUp",
    name: "gzSetUp",
    component: () => import("@/views/serve/recovery/MyGz/gzSetUp.vue"),
    meta: {
      title: "回收柜设置",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/apply_toExamine",
    name: "become_recycler",
    component: () => import("@/views/serve/recovery/recycler/apply/toExamine"),
    meta: {
      title: "审核",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/order",
    name: "order",
    component: () => import("@/views/serve/recovery/recycler/order"),
    meta: {
      title: "我的订单",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/getorder",
    name: "getorder",
    component: () => import("@/views/serve/recovery/recycler/getorder"),
    meta: {
      title: "抢订单",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/order/detailed",
    name: "order_detailed",
    component: () => import("@/views/serve/recovery/recycler/order_detailed"),
    meta: {
      title: "订单详情",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/payment/paymentOrder",
    name: "paymentOrder",
    component: () => import("@/views/serve/recovery/recycler/payment/paymentOrder"),
    meta: {
      title: "支付订单",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/payment/success",
    name: "paymentOrder",
    component: () => import("@/views/serve/recovery/recycler/payment/success"),
    meta: {
      title: "支付成功",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/payment/error",
    name: "paymentOrder",
    component: () => import("@/views/serve/recovery/recycler/payment/error"),
    meta: {
      title: "支付失败",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/profit",
    name: "profit",
    component: () => import("@/views/serve/recovery/recycler/profit"),
    meta: {
      title: "我的收益",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/recycler_detailed",
    name: "recycler_detailed",
    component: () => import("@/views/serve/recovery/recycler/detailed"),
    meta: {
      title: "回收员信息",
      requireAuth: false
    }
  },
  {
    path: "/serve/recovery/cabinet",
    name: "cabinet",
    component: () => import("@/views/serve/recovery/recycler/cabinet"),
    meta: {
      title: "回收员信息",
      requireAuth: false
    }
  },
]

//招聘
const recruit = [
  {
    path: "/serve/recruit",
    name: "recruit",
    component: () => import("@/views/serve/components/recruit/page/index"),
    meta: {
      title: "全职招聘",
      requireAuth: false
    }
  },
  {
    path: "/serve/recruit/detailed",
    name: "recruit_detailed",
    component: () => import("@/views/serve/components/recruit/page/detailed"),
    meta: {
      title: "职位详情",
      requireAuth: false
    }
  },

  {
    path: "/serve/recruit/resume/full-time",
    name: "full_time",
    component: () => import("@/views/serve/components/recruit/resume/full_time"),
    meta: {
      title: "全职简历",
      requireAuth: false
    }
  },
  {
    path: "/serve/recruit/resume/create",
    name: "create",
    component: () => import("@/views/serve/components/recruit/resume/create"),
    meta: {
      title: "创建简历",
      requireAuth: false
    }
  },
  {
    path: "/serve/recruit/part-job",
    name: "part_job",
    component: () => import("@/views/serve/components/recruit/page/part_job"),
    meta: {
      title: "兼职招聘",
      requireAuth: false
    }
  }, {
    path: "/serve/recruit/part-detailed",
    name: "part_detailed",
    component: () => import("@/views/serve/components/recruit/page/part_detailed"),
    meta: {
      title: "职位详情",
      requireAuth: false
    }
  },
  {
    path: "/serve/recruit/resume/part-time",
    name: "part_time",
    component: () => import("@/views/serve/components/recruit/resume/part_time"),
    meta: {
      title: "兼职简历",
      requireAuth: false
    }
  },
  {
    path: "/serve/recruit/release",
    name: "re_release",
    component: () => import("@/views/serve/components/recruit/page/recruit"),
    meta: {
      title: "我要招人",
      requireAuth: false
    }
  },
  {
    path: "/serve/recruit/release_part",
    name: "part_release",
    component: () => import("@/views/serve/components/recruit/page/part_recruit"),
    meta: {
      title: "我要招人",
      requireAuth: false
    }
  },
]


// 房子
const house = [
  {
    path: "/serve/house/index",
    name: "house",
    component: () => import("@/views/serve/components/house/page/index"),
    meta: {
      title: "租房首页",
      requireAuth: false
    }
  },
  {
    path: "/serve/house/release",
    name: "house_release",
    component: () => import("@/views/serve/components/house/page/release"),
    meta: {
      title: "发房源",
      requireAuth: false
    }
  },
  {
    path: "/serve/house/release/detailed",
    name: "release_detailed",
    component: () => import("@/views/serve/components/house/page/release/detailed"),
    meta: {
      title: "房源信息",
      requireAuth: false
    }
  }
  ,
  {
    path: "/serve/house/mine",
    name: "house_mine",
    component: () => import("@/views/serve/components/house/page/mine"),
    meta: {
      title: "我的",
      requireAuth: false
    }
  },
  {
    path: "/serve/house/whole-room",
    name: "whole_room",
    component: () => import("@/views/serve/components/house/page/index/room"),
    meta: {
      title: "整房",
      requireAuth: false
    }
  },
  {
    path: "/serve/house/whole-room/detailed",
    name: "house_detailed",
    component: () => import("@/views/serve/components/house/page/index/detailed"),
    meta: {
      title: "详情",
      requireAuth: false
    }
  }
]


//二手房
const second = [
  {
    path: "/serve/second/index",
    name: "second",
    component: () => import("@/views/serve/components/second"),
    meta: {
      title: "二手房首页",
      requireAuth: false
    }
  },
  {
    path: "/serve/second/release",
    name: "second_release",
    component: () => import("@/views/serve/components/second/page/release"),
    meta: {
      title: "发房源",
      requireAuth: false
    }
  },

  {
    path: "/serve/second/release/detailed",
    name: "second_detailed",
    component: () => import("@/views/serve/components/second/page/release/detailed"),
    meta: {
      title: "房源信息",
      requireAuth: false
    }
  },
  {
    path: "/serve/second/release/mode",
    name: "mode_release",
    component: () => import("@/views/serve/components/second/page/release/mode"),
    meta: {
      title: "选择发布方式",
      requireAuth: false
    }
  }, {
    path: "/serve/second/mine",
    name: "second_mine",
    component: () => import("@/views/serve/components/second/page/mine"),
    meta: {
      title: "我的",
      requireAuth: false
    }
  },
]

// 出行
const travel = [
  {
    path: "/serve/travel",
    name: "serve_travel",
    component: () => import("@/views/serve/travel"),
    meta: {
      title: "出行",
      requireAuth: false
    }
  },
  {
    path: "/serve/travel/free_ride",
    name: "serve_travel_free_ride",
    component: () => import("@/views/serve/travel/views/free_ride"),
    meta: {
      title: "顺风车",
      requireAuth: false
    }
  },
  {
    path: "/serve/travel/check_address",
    name: "serve_travel_check_address",
    component: () => import("@/views/serve/travel/views/check_address"),
    meta: {
      title: "地址选择",
      requireAuth: false
    }
  },
  {
    path: "/serve/travel/appointment",
    name: "serve_travel_appointment",
    component: () => import("@/views/serve/travel/views/appointment"),
    meta: {
      title: "行程预约",
      requireAuth: false
    }
  },
]

// 我的订单
const myOrder = [{
  path: "/serve/myOrder",
  name: "serve_myOrder",
  component: () => import("@/views/serve/recovery/MyOrder/index.vue"),
  meta: {
    title: "我的回收订单",
    requireAuth: true
  }
}, {
  path: "/serve/details",
  name: "serve_details",
  component: () => import("@/views/serve/recovery/MyOrder/details/details.vue"),
  meta: {
    title: "订单详情",
    requireAuth: true
  }
}]


export default [...recovery, ...recruit, index, ...house, ...second, ...travel, ...myOrder]