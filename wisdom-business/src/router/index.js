import Vue from 'vue'
import Router from 'vue-router'
import routeMap from '@/router/routeMap'
import menu from './menu';
import reactive from './reactive'

Vue.use(Router)

//动态路由 生成
export function autoRouter (routes) {
  let routeList = []
  let cloneIndex = 0
  const loop = (routes, parentPath = '/', flag) => {
    if (routes instanceof Array && routes.length) {
      routes.forEach((route, index) => {
        let { children, component, redirect, ...rt } = route
        if (rt.hidden) {
          rt.meta = {
            ...(rt.meta || {}),
            activeMenu: parentPath
          }
        }
        if (route.parent) cloneIndex = index
        let cloneRouter = routeMap[route.name]
        if (cloneRouter) {
          rt.component = () => import(`@/view/settlement/${cloneRouter}`)
        } else {
          rt.component = () => import(`@/view/settlement/smartRetail/error.vue`)
        }

        if (children instanceof Array && children.length) {
          const subMenus = children.filter(c => c.menuType !== 2)
          if (subMenus.length) rt.redirect = subMenus[0].path
        }

        if (flag) {
          if (!routeList[cloneIndex].children) routeList[cloneIndex].children = []
          routeList[cloneIndex].children.push(rt)
        } else {
          routeList.push(rt)
        }
        if (children) {
          loop(children, rt.path, true)
        }
      })
    }
  }
  loop(routes)
  return routeList
}

let autoRouters = autoRouter(menu)

let rootRouter = reactive
// console.log(autoRouter[0])

// autoRouters[0].children.push({
//   path: '/error',
//   name: 'error',
//   component: (resolve) => require(['@/view/settlement/error.vue'], resolve)
// })
autoRouters.forEach(rouer => {
  rootRouter.push(rouer)
})
export const createRouter = new Router({
  routes: rootRouter
})


export default createRouter
