import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/getApidata'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    clicks: 0
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counter
  }
})

export default store
