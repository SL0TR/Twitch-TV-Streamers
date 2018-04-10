<template>
  <div class="monitorSubContent">
    <div class="stream-card">
      <p class="streamer-name"></p>
      <img class="streamer-logo esl-logo"  alt="logo">
      <p class="status"></p>
    </div>
    <div class="stream-card">
      <p class="streamer-name"></p>
      <img class="streamer-logo riotgames-logo" salt="logo">
      <p class="status"></p>
    </div>
    <div class="stream-card">
      <p class="streamer-name"></p>
      <img  class="streamer-logo fcc-logo"  alt="logo">
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
      users: {}
    }
  },
  methods: {
    getTwitchApiData (channel) {
      this.$axios.get(users + channel)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getTwitchApiData('ESL_SC2')
    this.getTwitchApiData('freecodecamp')
  }
}
</script>

<style scoped>
.monitorSubContent {
  flex: 10;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.stream-card {
  height: 80%;
  width: 25%;
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
  opacity: 0.3;
}
</style>
