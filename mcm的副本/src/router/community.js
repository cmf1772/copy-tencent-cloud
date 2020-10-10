
// 首页
const community = [
  {
    path: "/community",
    name: "community",
    component: () => import("@/views/community/index"),
    meta: {
      requireAuth: true,
      title: "社区",
      keepAlive:true,
      savedPosition:0
    },
  },
  {
    path: "/community/friends",
    name: "friends",
    component: () => import("@/views/community/friends"),
    meta: {
      requireAuth: true,
      title: "交友"
    },
  },
]

// 圈子
const circle = [
  {
    path: "/community/circle",
    name: "circle",
    component: () => import("@/views/community/circle"),
    meta: {
      requireAuth: true,
      title: "圈子"
    },
  },
  {
    path: "/community/circle/findcircle",
    name: "findcircle",
    component: () => import("@/views/community/circle/findcircle"),
    meta: {
      requireAuth: true,
      title: "找圈子"
    },
  },
  {
    path: "/community/circle/detailed",
    name: "cir_detailed",
    component: () => import("@/views/community/circle/detailed"),
    meta: {
      requireAuth: true,
      title: "圈子详情"
    },
  },
  {
    path: "/community/circle/release",
    name: "cir_release",
    component: () => import("@/views/community/circle/release/release"),
    meta: {
      requireAuth: true,
      title: "发帖子"
    },
  },
]


const talk = [
  {
    path: "/community/talk",
    name: "talk",
    component: () => import("@/views/community/talk"),
    meta: {
      requireAuth: true,
      title: "聊天"
    },
  },
  {
    path: "/community/talk/concat",
    name: "concat",
    component: () => import("@/views/community/talk/concat"),
    meta: {
      requireAuth: true,
      title: "联系页"
    },
  },
  
  {
    path: "/community/talk/now",
    name: "now",
    component: () => import("@/views/community/talk/now"),
    meta: {
      requireAuth: true,
      title: "聊天窗口"
    },
  },
]
export default [...community,...circle,...talk]