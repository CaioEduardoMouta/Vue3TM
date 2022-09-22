<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="routeDinamica">Serviços</router-link> |
    <router-link to="/usuarios/10">Usuário</router-link> |
    <router-link to="/about">Sobre</router-link> -->
    <HelloWorld 
      user=""
      msg="Bem vindo seu vue.js" />

      
 <!--  </nav>
  <router-view/> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    
},
  data() {
    return {
    
      /* routeDinamica: { name: 'servicos'} */
    }
  },
  created() {
    console.log();
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
