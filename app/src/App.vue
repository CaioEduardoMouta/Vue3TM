<template>
  <TheHeader v-if="showHeader" />

  <div v-show="showName">
    Nome: {{ firstName }}
    Sobrenome: {{ lastName }}
  </div>

  <img
    
    alt="Vue logo" 
    src="./assets/logo.png">

  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader
  },
  data() {
    return {
      showHeader: true,
      firstName: 'Lorem Ipsum',
      lastName: 'Dolor',
      showName: false,
    }
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
