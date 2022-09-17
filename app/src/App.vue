<template>

  
  
  
  

</template>

<script>

export default {
  name: 'App',  

  data() {
    return {
    }
    
  },

  /*
    Criação
      Preparar o componente
      Ajax, inicializar algumas variáveis
      Não tem acesso ao Template (DOM)
    Montagem
      Inicializar um lib externa (new Lib())
      Precisa de Acesso ao template(DOM)
      Tir Acesso ao template(DOM)
    Atualização
      Debug
      Update
    Desmontagem
     Remover tudo o que for necessário (lib-> destroy) para liberar memória
  */

  //HOOKS
  beforeCreated() {
    console.log('beforeCreate');
  },
  created() {
    console.log('Create');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted(){
    console.log('Mounted');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmonted');
  },
  watch: {
    
  },
  computed: {

  },
      methods: {
       
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
  margin: 60px;
}
</style>
