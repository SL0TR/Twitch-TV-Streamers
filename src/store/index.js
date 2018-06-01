import Vue from 'vue'
import Vuex from 'vuex'
import {users, streams} from '../api'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    offlineList: [],
    onlineList: [],
    allUserList: ['ESL_SC2', 'freecodecamp', 'riotgames', 'starladder1', 'shadbasemurdertv', 'imaqtpie', 'ninja', 'OgamingSC2', 'cdnthe3rd']
  },
  getters: {
    getUsers: state => state.users,
    getStreams: state => state.streams,
    getOfflineList: state => state.offlineList,
    getOnlineList: state => state.onlineList,
    getAllUserList: state => state.allUserList
  },
  mutations: {
    setUsersData: (state, payload) => {
      state.users.push(payload)
    },
    setofflineList: (state, payload) => {
      state.offlineList.push(payload)
    },
    setOnlineList: (state, payload) => {
      state.onlineList.push(payload)
    },
    resetUsers: (state) => {
      state.users = []
    }
  },
  actions: {
    getUsersData: ({ commit }, payload) => {
      axios.get(users + payload.user)
        .then(res => {
          let data = res.data
          commit('setUsersData', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getStreamData: ({ commit }, payload) => {
      axios.get(streams + payload.user)
        .then(res => {
          let data = res.data.stream
          if (data != null) {
            commit('setOnlineList', payload.user)
          } else {
            commit('setofflineList', payload.user)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getAllTwitchApiUsersData ({ dispatch }, payload) {
      payload.param.forEach(element => {
        dispatch(payload.funcType, { user: element })
      })
    },
    callUserApiFunc: ({ dispatch }, payload) => {
      dispatch('getAllTwitchApiUsersData', {
        param: payload.userList,
        funcType: payload.type
      })
    }
  }
})

export default store
