<template>
    {{ $store.getters.total }}
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="routeDinamica">Serviços</router-link> |
    <router-link to="/usuarios/10">Usuário</router-link> |
    <router-link to="/about">Sobre</router-link> -->

    <AppProducts />
    <br><br>    
    <br><br>

    <pre>
      {{ $store.state.cart }}
    </pre>

  

    <br><br>
    <br><br><br>

    {{ $store.state.user.first_name }}  {{ $store.state.user.last_name }}
    <br><br>
    <button @click="updateUser">
      Save user
    </button>
    <br><br>

    

      
 <!--  </nav>
  <router-view/> -->
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue';
import AppProducts from './components/Products/AppProducts.vue';
export default {
  name: 'App',
  components: {
    //HelloWorld,
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
    //this.$store.commit('storeUser', newUser)
    this.$store.dispatch('storeUser', newUser).then(() => {
      
    })
  }

  
    
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
