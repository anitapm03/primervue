<template>
  <HomeComponent />
  <MusicaComponent />
  <CineComponent />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import HolaMundo from './components/HolaMundo.vue'
import MusicaComponent from './components/Musica.vue'
import CineComponent from './components/Cine.vue'
import HomeComponent from './components/Home.vue'

export default {
  name: 'App',
  components: {
    MusicaComponent, CineComponent, HomeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
