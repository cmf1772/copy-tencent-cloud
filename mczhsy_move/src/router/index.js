import Vue from "vue";
import VueRouter from "vue-router";
import {
  routers
} from "./router";

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: routers,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) { return savedPosition; } else {
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
});

// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  next();
});
export default router;
