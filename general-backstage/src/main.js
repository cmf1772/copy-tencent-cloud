// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Loading from './components/loading.js'
import api from './request/api/index'
import loading from './components/loading.js';
import store from './store/store.js'
import tool from './request/api/cookie'

import VueAMap from 'vue-amap'
Vue.use(VueAMap)

//引入echart
import echarts from 'echarts'
//将echarts引入到vue的原型中
Vue.prototype.$echarts = echarts
Vue.prototype.tool = tool;

// 挂租公共组建
Vue.use(Loading)

// 挂在element
Vue.use(ElementUI);

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '255a1b5df167e030ec0807d02bc8d589',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})

//axios
Vue.prototype.$api = api.article
Vue.prototype.$newApi = api.newData

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
