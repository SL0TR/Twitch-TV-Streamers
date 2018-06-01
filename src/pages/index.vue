<template>
  <q-page>
    <section class="mainPage">
      <div class="header-title">
        <h2>Twitch.tv Streamers</h2>
      </div>
      <div class="monitorContainer">
        <img class="monitor" src="../assets/tv.png" alt="monitor">
        <div class="monitorContent">
          <monitorNav/>
          <monitorSubContent/>
        </div>
      </div>
      <contact/>
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

.mainPage {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 75px);
  padding: 1rem 0;
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

<script>
import monitorNav from '../components/monitor-nav'
import monitorSubContent from '../components/monitorSubContent'
import contact from '../components/contact'

export default {
  name: 'PageIndex',
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
// This is just for a commit

</script>
