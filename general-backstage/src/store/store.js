import vue from 'vue'
import vuex from 'vuex'
import states from './state.js'
import mutatons from './mutations.js'
import actons from './actions.js'
import getters from './getters'

vue.use(vuex);

export default new vuex.Store({
  ...states,
  ...mutatons,
  ...getters,
  ...actons
}); 