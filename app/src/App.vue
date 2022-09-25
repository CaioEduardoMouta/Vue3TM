<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="routeDinamica">Serviços</router-link> |
    <router-link to="/usuarios/10">Usuário</router-link> |
    <router-link to="/about">Sobre</router-link> -->

    <AppProducts />    

    <br><br>
    
    <button @click="updateUser">
      Save user
    </button>

    

      
 <!--  </nav>
  <router-view/> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppProducts from './components/Products/AppProducts.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    AppProducts
},
  data() {
    return {
    
      /* routeDinamica: { name: 'servicos'} */
    }
  },

  methods: {
    updateUser() {
      const newUser =  {
      first_name: 'Ipsum',
      last_name: 'Lorem',
      email: 'ipsum@lorem.com'
    }
    this.$store.commit('storeUser', newUser)
  },

  
    
  },
  
   
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
