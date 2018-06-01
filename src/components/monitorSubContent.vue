<template>
  <div class="monitorSubContent">
    <div class="stream-card" v-for="(user,id) in connectVuexUsers" :key="id">
      <p class="streamer-name">{{ user.display_name }}</p>
      <img class="streamer-logo esl-logo"  alt="logo" :src="user.logo">
      <p class="bio">{{ user.bio }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  data () {
    return {
    }
  },
  methods: {
    ...mapGetters([
      'getAllUserList',
      'getUsers'
    ]),
    ...mapActions([
      'getUsersData',
      'callUserApiFunc'
    ])
  },
  computed: {
    connectVuexUsers () {
      return this.getUsers()
    }
  },
  created () {
    this.callUserApiFunc({ userList: this.getAllUserList(), type: 'getUsersData' })
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
    padding: 1rem;
    padding-top: 1.5rem;
  }

  .stream-card {
    height: 25rem;
    width: 20rem;
    background: linear-gradient(rgb(140, 97, 226), rgb(53, 26, 107));
    border-radius: 0.3em;
    box-shadow: 0px 10px 11px -6px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    transition: 0.2s;
    position: relative;
    overflow: hidden;
    margin: 2rem 0;
    padding: 1rem;
  }

  .stream-card .streamer-name {
    font-size: 2em;
    font-weight: bold;
    z-index: 1;
    color: #eee;
    position: relative;
    top: 5rem;
    transition: .3s;
    font-family: 'Lobster', cursive;
    opacity: 0;
  }

  .stream-card .bio {
    color: #eee;
    font-weight: bold;
    text-align: center;
    z-index: 1;
    font-size: 1.1em;
    word-wrap: break-word;
    width: 90%;
    opacity: 0;
    transition: .5s;
  }

  .stream-card .streamer-logo {
    width: 100%;
    height: 100%;
    border-radius: 0.2em;
    position: absolute;
    z-index: 0;
    opacity: 1;
  }

  .stream-card:hover {
    transform: scale(1.02);
    box-shadow: 0px 10px 11px -2px rgba(0, 0, 0, 0.55);
    cursor: pointer;
  }

  .stream-card:hover .bio {
    opacity: 1;
  }

  .stream-card:hover .streamer-name {
    top: 0;
    opacity: 1;
  }

  .stream-card:hover .streamer-logo {
    opacity: .25;
  }

</style>
