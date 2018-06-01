<template>
  <div class="monitorNav">
    <div class="all stream-status" @click="setAllUsers" :class="{ active : btnState === 0 }">
      <i class="ion-navicon-round"></i>
      <p>All</p>
    </div>
    <div class="online stream-status" @click="setOnlineUsers" :class="{ active : btnState === 1 }">
      <i class="ion-ios-circle-filled"></i>
      <p>Online</p>
    </div>
    <div class="offline stream-status" @click="setOfflineUsers" :class="{ active : btnState === 2 }">
      <i class="ion-ios-circle-outline"></i>
      <p>Offline</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  data () {
    return {
      btnState: 0
    }
  },
  methods: {
    ...mapGetters([
      'getAllUserList',
      'getOnlineList',
      'getOfflineList'
    ]),
    ...mapMutations([
      'resetUsers'
    ]),
    ...mapActions([
      'getStreamData',
      'callUserApiFunc'
    ]),
    setAllUsers () {
      this.btnState = 0
      this.resetUsers()
      this.callUserApiFunc({ userList: this.getAllUserList(), type: 'getUsersData' })
    },
    setOnlineUsers () {
      this.btnState = 1
      this.resetUsers()
      this.callUserApiFunc({ userList: this.getOnlineList(), type: 'getUsersData' })
    },
    setOfflineUsers () {
      this.btnState = 2
      this.resetUsers()
      this.callUserApiFunc({ userList: this.getOfflineList(), type: 'getUsersData' })
    }
  },
  created () {
    this.callUserApiFunc({ userList: this.getAllUserList(), type: 'getStreamData' })
  }
}
</script>

<style scoped>
.monitorNav {
  flex: 1;
  background: rgba(100, 69, 162, 8);
  display: flex;
  flex-direction: column;
}

.monitorNav .stream-status {
  margin: 1em 0.5em;
  height: 25%;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.25s;
}

.stream-status:hover,
.active {
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.stream-status p {
  color: #eee;
  font-size: 1em;
}

.stream-status i {
  color: #eee;
  font-size: 2em;
}
</style>
