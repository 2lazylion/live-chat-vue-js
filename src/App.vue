<template>
  
  <router-view/>
  <Signature />
</template>

<script>
import Signature from './components/Signature.vue'

export default {
  components: { Signature },
  setup() {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
