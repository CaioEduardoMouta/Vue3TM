<template>

  
  
  
  <div> 

    <div>

    </div>
    

   <!--  <h1 :class="{'title': true, 'title-home': isHome }">
      Curso Vue 3
    </h1>

    <p :class="pClass">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos sit facilis aliquid officiis numquam maxime alias, iusto itaque. Maiores repudiandae odio assumenda beatae voluptatum ipsum molestiae dolorum, perspiciatis voluptas.
    </p>

    <p :style="{'color':'aquamarine', backgroundColor:'black','font-size':'20px'}">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse placeat praesentium sequi deserunt modi, repellat, autem nostrum necessitatibus quos enim distinctio? Dolores nulla voluptas cum consequuntur, odio officiis. Itaque, reprehenderit!
    </p>
      
      <div 
        v-for="(obj, index) in todos"
        :key="obj.id"
        class="todos-items">
        <img 
        v-if="obj.imgSrc"
        :src="obj.imgSrc"
       
      >

       {{ index }} - {{ obj.title }}
      </div> -->
  
  </div>


 <!--  <TheHeader v-if="showHeader" />

  <div v-show="showName">
    Nome: {{ firstName }}
    Sobrenome: {{ lastName }}
  </div>

  <div v-if="accessLevel === 'Admin'">Usuário: Admin </div>
  <div v-else-if="accessLevel === 'Marketing'">Usuário: Marketing</div>
  <div v-else>Usuário: Normal</div>

  <img
    
    alt="Vue logo" 
    src="./assets/logo.png">

  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader'; */

export default {
  name: 'App',  

  data() {
    return {
    /*   isHome: true,
      classVar: 'title',
      pClass: ['text', 'text-home'],
      todos: [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "imgSrc":'https://via.placeholder.com/150'
  
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "imgSrc":'https://via.placeholder.com/150'
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
      ] */
    }
  }


  /* components: {
    HelloWorld,
    TheHeader
  },
  data() {
    return {
      showHeader: true,
      firstName: 'Lorem Ipsum',
      lastName: 'Dolor',
      showName: false,
      accessLevel: 'Admin'
    }
  } */
}
</script>

<style>
 /*  .title {
    font-size: 20px;
    color:rgb(2, 80, 54);
  }
  .title-home {
    font-size:40px;
    color:green;
  }
  .text {
    color: rgb(46, 46, 46);
  }

  .text-home {
    color:rgb(0, 72, 87)
  }
  .todos-items {
    background:#000;
    margin: 0 0 5px 0;
    padding: 3px;
    color: #fff;
  } */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
