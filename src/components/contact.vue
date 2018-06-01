<template>
  <div class="my-info">
    <h3><a href="http://sl0tr.github.io" target="_blank" rel="noopener">Mohaimin</a>, 2018</h3>
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
  margin-bottom: 1rem;
  font-size: 2.5em;
}

.my-info h3 a {
  text-decoration: none;
  color: #eee;
  font-size: 1em;
}

</style>
