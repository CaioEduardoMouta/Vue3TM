<template>
  Hello Vue <br>
  <AppButton data-vue="Caio" @update="getUpdate">
    Save 
    <template #icon>Icon</template>
  </AppButton>
  <AppHook v-if="showAppHook" />
  <button @click="showAppHook = !showAppHook">
  Toggle
  </button>
  <br><br>
  {{ name }} <br><br>
  <h5>User</h5>
  {{ user.first_name }}
  {{ user.last_name }}  
  <br><br>
  <!-- <h5>Admin</h5>
  {{ admin.first_name }}
  {{ admin.last_name }}   -->
  <br><br>
  <h6>Full Name</h6>
  {{ fullName }}
  <br>
  <button @click="user.first_name = 'Junior'">Atualizar</button>
  <AppProduct />
    
   <!--  <img @click="changeName()" src="./assets/logo.png">
    <HelloWorld msg="Bem vindo ao seu app Vue.JS" /> -->

   <!--  {{ $store.getters.total }} -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="routeDinamica">Serviços</router-link> |
    <router-link to="/usuarios/10">Usuário</router-link> |
    <router-link to="/about">Sobre</router-link> -->

<!--     <AppProducts /> -->
    <!-- br><br>    
    <br><br> -->

   <!--  <pre>
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

     -->

      
 <!--  </nav>
  <router-view/> -->
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'; */
//import AppProducts from './components/Products/AppProducts.vue';
import AppProduct from './components/Products/AppProduct.vue';
import { ref, computed, watch } from 'vue';
import AppHook from './components/AppHook.vue';
import AppButton from './components/AppButton.vue';



export default {
  name: 'App',
  components: {
    /* HelloWorld, */
    //AppProducts,
    AppProduct,
    AppHook,
    AppButton
},
  /* computed: {
    fullName() {
      return '';
    },
  }, */
    setup() {
     /*  const user = reactive({
        first_name: 'Lorem',
        last_name: 'Ipsum'
      }) */
      const getUpdate = (data) => {
        console.log('getUpdate', data)
      }
      
      const user = ref({
        first_name: 'Senior',
        last_name: 'Master'
      })

      const showAppHook = ref(true)

      const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`)

      watch(user, () => {
        console.log('Logica cabulosa');
      }, {
        deep: true
      })
     /*  const count = ref(0)
      console.log(count); */

      let name = 'Caio'

      /* const changeName = () => {
        alert('Chegou')
        name = 'Mouta Carrazedo'
        user.first_name = 'Dolor'
        admin.value.first_name = 'Pleno'
      } */

      return {
        user,
        fullName,
        name,
        showAppHook,
        getUpdate
        
      }
    },
 }

 /*  methods: {
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

  
    
  }
   */
   

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
