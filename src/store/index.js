import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import common from './modules/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    common,
  },

  state: {
    isOnline: true, // 新增全局网络状态
  },
  mutations: {
    SET_NETWORK_STATUS(state, isOnline) {
      console.log('网络变化了的值》》》》', state, isOnline)
      state.isOnline = isOnline // 更新网络状态
    }
  },
  getters: {
    ...getters, // 原有的 getters
    isOnline: state => state.isOnline, // 新增 getter
  }
})

export default store
