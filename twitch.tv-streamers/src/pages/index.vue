<template>
  <q-page>
    <section class="mainPage">
      <div class="header">
        <h2>Twitch Tv Streamers</h2>
      </div>
      <div class="monitorContainer">
        <img class="monitor" src="https://www.directpackages.com/assets/seo-c/images/devices/tv.png" alt="monitor">
        <div class="monitorContent">
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
        </div>
      </div>
    </section>
  </q-page>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Lobster|Raleway:300,400,500,700");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
}

.q-layout-page {
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #351A6B, #6445A2);
}

.header {
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 4rem;
  color: #eee;
}

.twitch-logo {
  height: 3.5em;
  width: 6em;
}

.monitorContainer {
  position: relative;
  bottom: 1rem;

}

.monitor {
  height: 38em;
  width: 80em;
}

.monitorContent {
  /* background: linear-gradient(to right, #6441a5, #2a0845); */
  /* background: rgba(124, 90, 174, .8); */
  background: #81ecec;
  position: absolute;
  height: calc(100% - 6em);
  width: calc(100% - 0.6em);
  top: 0.38em;
  left: 0.3em;
  display: flex;
}

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

<script>
//  https://wind-bow.glitch.me/twitch-api/streams/ESL_SC2
//  https://wind-bow.glitch.me/twitch-api/users/freecodecamp
//  https://wind-bow.glitch.me/twitch-api/
export default {
  name: 'PageIndex',
  data () {
    return {
      users: {}
    }
  },
  methods: {
    getTwitchApiData () {
      this.$axios.get('https://wind-bow.glitch.me/twitch-api/users/freecodecamp')
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.getTwitchApiData()
  }
}

</script>
