
// 商品也
const shop = [
  {
    path: "/shop",
    name: "shop",
    component: () => import("@/views/shop/index"),
    meta: {
      title: "商城",
      requireAuth: false,
      keepAlive:true,
      
      savedPosition:0
    }
  },
  {
    path: "/shop/car",
    name: "car",
    component: () => import("@/views/shop/car"),
    meta: {
      title: "购物车",
      requireAuth: false,
      keepAlive:true,
      
    }
  },
  {
    path: "/shop/channel",
    name: "channel",
    component: () => import("@/views/shop/channel"),
    meta: {
      title: "商店-频道",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/shop_detailed",
    name: "shop_detailed",
    component: () => import("@/views/shop/detailed/shop_detailed"),
    meta: {
      title: "店铺首页",
      requireAuth: false,
      // keepAlive:true,
    }
  },
  {
    path: "/shop/commodity_detailed",
    name: "commodity_detailed",
    component: () => import("@/views/shop/detailed/commodity_detailed"),
    meta: {
      title: "商品详情",
      requireAuth: false,
      // keepAlive:true,
      keepAlive : false
    }
  },
  {
    path: "/shop/pay",
    name: "pay",
    component: () => import("@/views/shop/pay"),
    meta: {
      title: "立即购买",
      requireAuth: false,
    }
  }
]

const note = [
  {
    path: "/shop/note",
    name: "note",
    component: () => import("@/views/shop/note"),
    meta: {
      title: "笔记",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/note/comment",
    name: "comment_list",
    component: () => import("@/views/shop/note/components/comment"),
    meta: {
      title: "评论列表",
      requireAuth: false,
      keepAlive:true,
    }
  }
]
const outFood = [
  {
    path: "/shop/outfood",
    name: "outfood",
    component: () => import("@/views/shop/out_food"),
    meta: {
      title: "外卖",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/outfood/channel",
    name: "outfood_channel",
    component: () => import("@/views/shop/out_food/channel"),
    meta: {
      title: "外卖-频道",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/outfood/detailed",
    name: "outfood_detailed",
    component: () => import("@/views/shop/out_food/detailed"),
    meta: {
      title: "外卖详情",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/outfood/shopkeeper",
    name: "shopkeeper",
    component: () => import("@/views/shop/out_food/shopkeeper"),
    meta: {
      title: "店家详情",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/outfood/order",
    name: "outfood_order",
    component: () => import("@/views/shop/out_food/order"),
    meta: {
      title: "订单详情",
      requireAuth: false,
      keepAlive:true,
    }
  },
]

// 特价也
const special = [
  {
    path: "/shop/special",
    name: "special",
    component: () => import("@/views/shop/special/index"),
    meta: {
      title: "特价",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/channel",
    name: "s_channel",
    component: () => import("@/views/shop/special/channel"),
    meta: {
      title: "特价",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/coupon",
    name: "coupon",
    component: () => import("@/views/shop/special/entrance/coupon"),
    meta: {
      title: "优惠券",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/group",
    name: "group_buy",
    component: () => import("@/views/shop/special/entrance/group"),
    meta: {
      title: "团购",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/seckill",
    name: "seckill",
    component: () => import("@/views/shop/special/entrance/seckill"),
    meta: {
      title: "秒杀",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/seckill/detailed",
    name: "detailed_seckill",
    component: () => import("@/views/shop/special/detailed/seckill"),
    meta: {
      title: "秒杀详情",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/callage",
    name: "callage",
    component: () => import("@/views/shop/special/entrance/callage"),
    meta: {
      title: "拼团",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/callage/detailed",
    name: "detailed_callage",
    component: () => import("@/views/shop/special/detailed/callage"),
    meta: {
      title: "拼团详情",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/auction",
    name: "group_buy",
    component: () => import("@/views/shop/special/entrance/auction"),
    meta: {
      title: "拍卖",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/auction/detailed",
    name: "detailed_group_buy",
    component: () => import("@/views/shop/special/detailed/auction"),
    meta: {
      title: "拍卖详情",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/special/auction/detailed/hall",
    name: "detailed_hall",
    component: () => import("@/views/shop/special/detailed/hall"),
    meta: {
      title: "拍卖大厅",
      requireAuth: false,
      keepAlive:true,
    }
  }
]
const market = [
  {
    path: "/shop/market",
    name: "market",
    component: () => import("@/views/shop/market/index"),
    meta: {
      title: "集市",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/market/list",
    name: "market_list",
    component: () => import("@/views/shop/market/more"),
    meta: {
      title: "集市-列表",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/market/detailed",
    name: "market_detailed",
    component: () => import("@/views/shop/market/detailed"),
    meta: {
      title: "详情",
      requireAuth: false,
      keepAlive:true,
    }
  },
  {
    path: "/shop/market/d_detailed",
    name: "market_d_detailed",
    component: () => import("@/views/shop/market/d_detailed"),
    meta: {
      title: "详情",
      requireAuth: false,
      keepAlive:true,
    }
  },
  
  {
    path: "/shop/market/release/good",
    name: "release_good",
    component: () => import("@/views/shop/market/release"),
    meta: {
      title: "发布",
      requireAuth: false,
      keepAlive:true,
    }
  },
]

export default [...shop, ...special, ...note, ...outFood, ...market]