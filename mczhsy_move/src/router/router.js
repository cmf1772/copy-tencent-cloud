import magazine from './magazine'
import serve from './serve'
import mine from './mine'
import shop from './shop'
import community from './community'
const allRouters = [{
  path: "/",
  redirect: "/index",
  meta: {
    savedPosition: 0
  }
},
{
  path: "/index",
  name: "index",
  // component: () => import("@/views/magazine/index"),
  component: () => import("@/views/magazine/pageHome/index"),
  meta: {
    title: "首页",
    requireAuth: false,
    keepAlive: true,
    isBack: false,
    savedPosition: 0
  }
}, {
  path: "/magazine/index",
  name: "index",
  component: () => import("@/views/magazine/index"),
  // component: () => import("@/views/magazine/pageHome/index"),
  meta: {
    title: "首页",
    requireAuth: false,
    keepAlive: true,
    isBack: false,
    savedPosition: 0
  }
},
];

export const routers = [...allRouters, ...magazine, ...serve, ...mine, ...shop, ...community];
