<template>
  <div class="my-info">
    <h3><a href="https://codepen.io/SL0TR/" target="_blank" rel="noopener">Mohaimin</a>, 2017</h3>
    <div class="my-contact">
      <a href="https://www.linkedin.com/in/mohaimin-islam/" target="_blank" rel="noopener"><i class="ion-social-linkedin"></i></a>
      <a href="https://www.facebook.com/Mohaimin94" target="_blank" rel="noopener"><i class="ion-social-facebook"></i></a>
      <a href="https://plus.google.com/102535643689453338746" target="_blank" rel="noopener"><i class="ion-social-googleplus"></i></a>
      <a href="https://github.com/SL0TR" target="_blank" rel="noopener"><i class="ion-social-github"></i></a>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.my-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.my-info h3 {
  position: relative;
  top: 10%;
  font-size: 2em;
}

.my-info h3 a {
  text-decoration: none;
  color: #eee;
  font-size: 1em;
}

.my-contact {
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

i {
  font-size: 2em;
  cursor: pointer;
  transition: all .2s;
  margin: 0 1em;
  color: #eee;
}

.ion-social-linkedin:hover {
  color: #007bb5;
}

.ion-social-facebook:hover {
  color: #3b5998;
}

.ion-social-googleplus:hover {
  color: #dd4b39;
}

.ion-social-github:hover {
  color: #333;
}
</style>
