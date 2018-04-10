<template>
  <div class="monitorSubContent">
    <div class="stream-card" v-for="(user,id) in this.users" :key="id">
      <p class="streamer-name"></p>
      <img class="streamer-logo esl-logo"  alt="logo" :src="user.logo">
      <p class="status"></p>
    </div>
  </div>
</template>

<script>
import {users} from '../api'

export default {
  name: 'PageIndex',
  data () {
    return {
      users: []
    }
  },
  methods: {
    getTwitchApiData (channel) {
      this.$axios.get(users + channel)
        .then(res => {
          let data = res.data
          this.users.push(data)
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getTwitchApiData('ESL_SC2')
    this.getTwitchApiData('freecodecamp')
    this.getTwitchApiData('riotgames')
    this.getTwitchApiData('starladder1')
    this.getTwitchApiData('shadbasemurdertv')
    console.log(this.users)
  }
}
</script>

<style scoped>
.monitorSubContent {
  flex: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: auto;
  padding: 2rem 1rem;
}

.stream-card {
  height: 25rem;
  width: 20rem;
  background: #000;
  border-radius: 0.5em;
  box-shadow: 0px 10px 11px -6px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;
  position: relative;
  overflow: hidden;
  margin: 2rem 0;
}

.stream-card:hover {
  transform: scale(1.02);
  box-shadow: 0px 10px 11px -2px rgba(0, 0, 0, 0.55);
  cursor: pointer;
}

.stream-card p {
  font-size: 2.2em;
  font-weight: bold;
  z-index: 1;
  color: #eee;
}

.stream-card .streamer-logo {
  width: 100%;
  height: 100%;
  border-radius: 0.2em;
  position: absolute;
  z-index: 0;
  opacity: 0.5;
}
</style>
