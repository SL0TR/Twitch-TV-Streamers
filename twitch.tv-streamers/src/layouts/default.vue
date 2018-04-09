<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-toolbar-title>
          <img class="twitch-logo" src="https://i.lensdump.com/i/sl6Ob.png" alt="twitch logo">
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
