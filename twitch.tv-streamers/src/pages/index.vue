<template>
  <q-page>
    <section class="mainPage">
      <div class="header-title">
        <h2>Twitch Tv Streamers</h2>
      </div>
      <div class="monitorContainer">
        <img class="monitor" src="https://www.directpackages.com/assets/seo-c/images/devices/tv.png" alt="monitor">
        <div class="monitorContent">
          <monitorNav/>
          <monitorSubContent/>
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

.header-title {
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 3rem;
  color: #eee;
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
  background: #81ecec;
  position: absolute;
  height: calc(100% - 6em);
  width: calc(100% - 0.6em);
  top: 0.38em;
  left: 0.3em;
  display: flex;
}
</style>

<script>
import monitorNav from '../components/monitor-nav'
import monitorSubContent from '../components/monitorSubContent'

export default {
  name: 'PageIndex',
  data () {
    return {
    }
  },
  components: {
    monitorNav,
    monitorSubContent
  }
}

</script>
