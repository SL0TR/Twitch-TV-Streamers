import Vue from 'vue'
import Vuex from 'vuex'
import {users} from '../api'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    getUsers: state => state.users
  },
  mutations: {
    getUsersData: (state, payload) => {
      state.users.push(payload)
    }
  },
  actions: {
    getUsersData: ({ commit }, payload) => {
      axios.get(users + 'ESL_SC2')
        .then(res => {
          let data = res.data
          console.log(data)
          commit('getUsersData', data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})

export default store
