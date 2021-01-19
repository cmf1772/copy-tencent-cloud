import Vue from 'vue'
import Router from 'vue-router'
import routeMap from '@/router/routeMap'
import menu from './menu';
import reactive from './reactive'
import shop from './shop'

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

autoRouters.forEach(rouer => {
  rootRouter.push(rouer)
})

//  判读啊是否零售 -》 将商铺后台合并
rootRouter.forEach(router => {
  if (router.text === "智慧零售") {
    router.children = router.children.concat(shop)
  }
})
console.log(rootRouter)

export const createRouter = new Router({
  routes: rootRouter
})


export default createRouter
