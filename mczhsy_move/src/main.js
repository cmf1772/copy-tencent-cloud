import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'
Vue.use(element)
import Vant from 'vant';
Vue.use(Vant);
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css';
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import '@/assets/css/newiconfont.css'
import VueDND from 'awe-dnd'


Vue.use(VueDND)

Vue.use(VueQuillEditor)
Vue.use(vueSwiper)

// 引入工具包JS文件
import './utils/utils'

// 引入rem配置文件
import './utils/rem'

// 引入接口调用文件
import api from './axios/api'

// api挂载至Vue原型
Vue.prototype.$api = api

//全局配置信息
Vue.config.productionTip = false
//全局域名
const base = 'http://www.bjxmqy.com:9501'
Vue.prototype.$base = base
Vue.prototype.$axios = axios
// 全局注册头部导航组件
import customHeader from '@/components/customHeader/customHeader'
Vue.component('customHeader', customHeader)

router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行

  if (to.meta.savedPosition > -1) {
    from.meta.savedPosition = document.documentElement.scrollTop || document.body.scrollTop
  }
  if (to.meta.title) {//判断是否有标题
    document.title = to.meta.title
  }
  next()//执行进入路由，如果不写就不会进入目标页
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
