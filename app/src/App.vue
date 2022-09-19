<template>

  
<div>

  <BaseAlert :variant="variant">
    {{ text }}
  </BaseAlert>  
  

  <!-- <BaseCard /> -->

  <!-- <TheHeader>
    <template v-slot:title>
      Home
    </template> 

    <template v-slot:description>
      <h1>dadsa</h1>
    </template>

    Content do Header - MENU 
  </TheHeader>
 -->
 <!--  <TheHeader v-if="showHeader"/>
  <h1>Default</h1>
  <br><br>
  <input
    v-model='name'
    type="text"
  >
  {{ name }} <br><br>
  <button @click="showHeader = false">
    Ativar e desativar Header
  </button> -->
</div>
  
  

</template>

<script>
/* import BaseCard from '@/components/BaseCard'; */
import BaseAlert from './components/BaseAlert.vue';

export default {
  name: 'App', 
  components: { BaseAlert }, 

  data() {
    return {
      variant: 'danger',
      text: 'Seu formulario foi enviado'
     /*  name: 'Lorem Ipsum',
      showHeader: true */
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
  /* beforeUpdate() {
    console.log('beforeUpdate', this.name);
  },
  updated() {
    console.log('updated', this.name);
  },
  beforeCreated() {
    console.log('beforeCreate');
    console.log('Estado:',this.name);
    console.log('DOM:',this.$el);
  },
  created() {
    console.log('Create');
    console.log('Estado:',this.name);
    console.log('DOM:',this.$el);
  },
  beforeMount() {
    console.log('beforeMount');
    console.log('Estado:',this.name);
    console.log('DOM:',this.$el);
  },
  mounted(){
    console.log('Mounted');
    console.log('Estado:',this.name);
    console.log('DOM:',this.$el);
  }, */
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
