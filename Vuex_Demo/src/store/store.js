/**
 * vuex综合管理工具
 * */
import vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'

vue.use(Vuex);

// 注册事件
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

