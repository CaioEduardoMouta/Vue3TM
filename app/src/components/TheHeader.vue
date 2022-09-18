<template>
    <header class="header">
        <h1
          v-if="$slots.title" 
          class="title">
          <slot name="title" />
        </h1>

        <div class="description">
          <slot name="description" />
        </div>

        <div class="content">
          <slot />
        </div>
    </header>
</template>

<script>


export default {

  mounted() {
    console.log(this.$slots);

  }

   /*  mounted() {
        window.addEventListener('resize', this.resize)
    },  

  beforeUnmount() {
    console.log('beforeUnmount');
    
    
  },
  unmounted() {
    console.log('unmonted');
   
    
  },
  methods: {
    resize($evt) {
        console.log($evt);
    }
  } */
 
}
</script>

<style>
    .header{
        background: #000;
        color: #fff;
    }
</style>