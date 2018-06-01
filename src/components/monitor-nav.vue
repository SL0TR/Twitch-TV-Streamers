<template>
  <div class="monitorNav">
    <div class="all stream-status active" @click="allUsers()">
      <i class="ion-navicon-round"></i>
      <p>All</p>
    </div>
    <div class="online stream-status" @click="setOnlineUsers">
      <i class="ion-ios-circle-filled"></i>
      <p>Online</p>
    </div>
    <div class="offline stream-status">
      <i class="ion-ios-circle-outline"></i>
      <p>Offline</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'getStreamData',
      'callUserApiFunc'
    ]),
    setOnlineUsers () {
      let arr = []
      this.$store.state.users.forEach((elem, index) => {
        this.$store.state.online.forEach((el, index) => {
          if (elem.name === el.channel.name && el.length !== 0) {
            arr.push(elem)
          }
        })
      })
      this.$store.state.users = arr
      console.log(this.$store.state.users)
    },
    allUsers () {
      this.$store.state.users = []
      this.callUserApiFunc({ type: 'getUsersData' })
    }
  },
  created () {
    this.callUserApiFunc({ type: 'getStreamData' })
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
