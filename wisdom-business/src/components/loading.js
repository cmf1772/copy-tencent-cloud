/**
 * @抛出项目
 * **/

import menuC from './menuC.vue'
import menu from './menu/menu.vue'
import help from './help/help.vue'

const loading = {
  install: function (Vue) {
    Vue.component('menuC', menuC)
    Vue.component('leftMenu', menu)
    Vue.component('help', help)
  }
  // loading'这就是后面可以使用的组件的名字，install是vue实例上默认的一个方法
}

export default loading