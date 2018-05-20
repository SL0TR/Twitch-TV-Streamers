<template>
  <div class="monitorNav">
    <div class="all stream-status active">
      <i class="ion-navicon-round"></i>
      <p>All</p>
    </div>
    <div class="online stream-status">
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
      streams: []
    }
  },
  methods: {
    ...mapActions([
      'getStreamData'
    ]),
    connectVuexStreams () {
      this.streams = this.$store.getters.getStreams
      console.log(this.streams)
    },
    getAllTwitchApiData () {
      Array.prototype.slice.call(arguments).forEach(element => {
        this.getStreamData({ user: element })
      })
    }
  },
  created () {
    this.getAllTwitchApiData('ESL_SC2', 'freecodecamp', 'riotgames', 'starladder1', 'shadbasemurdertv', 'imaqtpie')
    this.connectVuexStreams()
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
