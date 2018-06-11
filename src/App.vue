<template>
  <div id="app">
    <div class="navbar">
      <img src="https://i.lensdump.com/i/sl6Ob.png" alt="twitch logo" class="twitch-logo">
    </div>
    <section class="mainPage">
      <div class="header-title">
        <h2>Twitch.tv Streamers</h2>
      </div>
      <div class="monitorContainer">
        <img class="monitor" src="https://i.lensdump.com/i/8vyi5a.png" alt="monitor">
        <div class="monitorContent">
          <monitorNav/>
          <monitorSubContent/>
        </div>
      </div>
      <contact/>
    </section>
  </div>
</template>

<script>
import monitorNav from './components/monitor-nav'
import monitorSubContent from './components/monitorSubContent'
import contact from './components/contact'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    monitorNav,
    monitorSubContent,
    contact
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lobster|Raleway:300,400,500,700");

:root {
  --primary-color: #6445A2;
  --secondary-color: #351A6B;
}

ion-icon .icon-inner, ion-icon svg {
  height: 2em;
  width: 2em;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
}

#app {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #351A6B, #6445A2);
  flex-direction: column;
}

.mainPage {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: calc(100vh - 67px);
  padding: 1rem 0;
}

.navbar {
  height: 67px;
  background: var(--primary-color);
  width: 100%;
  box-shadow: 0px 1px 5px 0px rgba(43,43,43,1);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.twitch-logo {
  height: 3.5em;
  width: 6em;
}

.header-title {
  text-align: center;
  width: 100%;
  color: #eee;
  margin: 1rem 0rem;
}

.header-title h2 {
  font-size: 4em;
}

.monitorContainer {
  position: relative;

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

  @media (max-width: 700px) {
    .mainPage {
      align-items: center;
    }

    .header-title h2 {
      font-size: 3rem;
    }

    .monitor {
      width: 95vw;
    }

    .monitorContainer {
      width: 95%;
    }
  }
</style>
