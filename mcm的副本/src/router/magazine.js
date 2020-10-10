// 广播
const broadcast = [
  {
    path: "/magazine/broadcast",
    name: "broadcast",
    component: () => import("@/views/magazine/broadcast/index"),
    meta: {
      requireAuth: true,
      title: "广播"
    },
  },

  {
    path: "/magazine/broadcast/menu",
    name: "menu",
    component: () => import("@/views/magazine/broadcast/components/menu"),
    meta: {
      requireAuth: true,
      title: "分类"
    },
  },
  {
    path: "/magazine/broadcast/play",
    name: "play",
    component: () => import("@/views/magazine/broadcast/play"),
    meta: {
      requireAuth: true,
      title: "播放"
    },
  },
  {
    path: "/magazine/broadcast/releasefrequency",
    name: "releasefrequency",
    component: () => import("@/views/magazine/broadcast/release/frequency"),
    meta: {
      requireAuth: true,
      title: "发布音频"
    },
  },
  {
    path: "/magazine/broadcast/releaselive",
    name: "releaselive",
    component: () => import("@/views/magazine/broadcast/release/live"),
    meta: {
      requireAuth: true,
      title: "创建直播"
    },
  }
]

// 美食
const food = [

  {
    path: "/magazine/food/index",
    name: "food_index",
    component: () => import("@/views/magazine/food/index"),
    meta: {
      title: "美食",
      requireAuth: true
    },
  },
  {
    path: "/magazine/food/consulting",
    name: "consulting",
    component: () => import("@/views/magazine/food/components/consulting/content"),
    meta: {
      title: "文章详情",
      requireAuth: true
    },
  },
]

// 文体 
const problem = [
  {
    path: "/magazine/problem/releaseproblem",
    name: "reproblem",
    component: () => import("@/views/magazine/release/problem"),
    meta: {
      title: "发布提问",
      requireAuth: true
    },
  },
  {
    path: "/magazine/problem/releasequestions",
    name: "requestions",
    component: () => import("@/views/magazine/release/questions"),
    meta: {
      title: "发布问题",
      requireAuth: true
    },
  },
  {
    path: "/magazine/problem",
    name: "problem",
    component: () => import("@/views/magazine/problem/problem"),
    meta: {
      title: "问题",
      requireAuth: true
    },
  },
  {
    path: "/magazine/problem/details",
    name: "details",
    component: () => import("@/views/magazine/problem/details"),
    meta: {
      title: "问题详情",
      requireAuth: true
    },
  },
  {
    path: "/magazine/problem/answer",
    name: "answer",
    component: () => import("@/views/magazine/problem/answer"),
    meta: {
      title: "回答问题",
      requireAuth: true
    },
  },
  {
    path: "/magazine/problem/allanswer",
    name: "allanswer",
    component: () => import("@/views/magazine/problem/all_answer"),
    meta: {
      title: "所有回答",
      requireAuth: true
    },
  }
]

// 动态
const dynamic = [
  {
    path: "/magazine/dynamic",
    name: "dynamic",
    component: () => import("@/views/magazine/dynamic/index"),
    meta: {
      title: "动态",
      requireAuth: true
    },
  },
  {
    path: "/magazine/dynamic/follow",
    name: "follow",
    component: () => import("@/views/magazine/dynamic/follow/follow"),
    meta: {
      title: "关注",
      requireAuth: true
    },
  },
  {
    path: "/magazine/dynamic/releasedynamic",
    name: "redynamic",
    component: () => import("@/views/magazine/release/dynamic"),
    meta: {
      title: "发动态",
      requireAuth: true
    },
  },
  {
    path: "/magazine/dynamic/releasearticle",
    name: "rearticle",
    component: () => import("@/views/magazine/release/article"),
    meta: {
      title: "发文章",
      requireAuth: true
    },
  }
]

//视屏 
const video = [
  {
    path: "/magazine/video",
    name: "video",
    component: () => import("@/views/magazine/video/index"),
    meta: {
      title: "视频首页",
      requireAuth: true
    },
  },
  {
    path: "/magazine/video/releasevideo",
    name: "releasevideo",
    component: () => import("@/views/magazine/release/video"),
    meta: {
      title: "发布视频",
      requireAuth: true
    },
  },
  {
    path: "/magazine/video/admin",
    name: "admin",
    component: () => import("@/views/magazine/video/admin"),
    meta: {
      title: "用户信息",
      requireAuth: true
    },
  },
]

const page = [
  {
    path: "/magazine/more",
    name: "video",
    component: () => import("@/views/magazine/pageHome/more/index.vue"),
    meta: {
      title: "我的应用",
      requireAuth: true
    },

  }, {
    path: "/magazine/edite",
    name: "video",
    component: () => import("@/views/magazine/pageHome/more/edite.vue"),
    meta: {
      title: "管理我的应用",
      requireAuth: true
    },

  },
]
/***   <img src="@/assets/images/icon/community/duoren.png" /> */
/***  <img src="@/assets/images/user.png" /> */
/**   <img src="@/assets/images/icon/index/search2.png" alt="">       */
/**  #C3AB87  <img src="@/assets/images/index/banner1.jpg" /> */
// :style='`grid-template-columns: repeat(${list.length < 2 ? 1:(list.length<5?2:3)},1fr);`'
/*** <img src="@/assets/images/icon/mine/order/local.png" /> */

/***
 * 
 * <template #right>
           <img src="@/assets/images/icon/index/fenxiang1.png" />
        </template>
        
        
        */
export default [...broadcast, ...dynamic, ...problem, ...food, ...video, ...page]  